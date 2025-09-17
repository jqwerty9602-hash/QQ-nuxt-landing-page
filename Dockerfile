ARG NODE_VERSION=20

# Build stage
FROM node:${NODE_VERSION}-alpine as build-stage
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies
RUN npm install -g pnpm@latest || echo "Using npm"
RUN if [ -f pnpm-lock.yaml ]; then \
        pnpm install --frozen-lockfile; \
    else \
        npm ci && npm cache clean --force; \
    fi

# Copy source code
COPY . .

# Build the application
RUN if [ -f pnpm-lock.yaml ]; then \
        pnpm run build; \
    else \
        npm run build; \
    fi

# Production stage
FROM node:${NODE_VERSION}-alpine as production-stage

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nuxtjs -u 1001

# Copy built application
COPY --from=build-stage --chown=nuxtjs:nodejs /app/.output /app/.output
COPY --from=build-stage --chown=nuxtjs:nodejs /app/package*.json ./

# Switch to non-root user
USER nuxtjs

# Expose port
EXPOSE 3000

# Environment variables
ENV NODE_ENV=production
ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

# Start command
CMD ["node", ".output/server/index.mjs"]