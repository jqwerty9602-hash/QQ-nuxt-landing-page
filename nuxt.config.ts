import tailwindcss from "@tailwindcss/vite";
import { env } from "./app/utils/env";

// Always use production URL for site config (avoids localhost validation error)
const siteUrl = env.NUXT_PUBLIC_SITE_URL;
// Use localhost for dev server if needed
const devUrl = env.isDevelopment
  ? "http://localhost:3000"
  : env.NUXT_PUBLIC_SITE_URL;

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxtjs/sitemap", "@nuxtjs/seo"],

  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800],
        styles: ["normal"],
        display: "swap",
      },
      {
        name: "Titan One",
        provider: "google",
        weights: [400],
        styles: ["normal"],
        display: "swap",
      },
    ],
  },

  site: {
    url: siteUrl, // Always production URL
    name: env.NUXT_SITE_NAME,
    description: env.NUXT_SITE_DESCRIPTION,
    indexable: env.isProduction,
    env: process.env.NUXT_SITE_ENV || "production",
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: `${env.NUXT_SITE_NAME} - Premium Gaming Experience`,
      htmlAttrs: {
        lang: env.DEFAULT_LANGUAGE,
      },
      meta: [
        {
          name: "description",
          content: env.NUXT_SITE_DESCRIPTION,
        },
        {
          name: "keywords",
          content: env.NUXT_SITE_KEYWORDS,
        },
        { name: "author", content: env.NUXT_SITE_AUTHOR },
        { name: "robots", content: "index, follow" },

        // Open Graph
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: `${env.NUXT_SITE_NAME} - Premium Gaming Experience`,
        },
        { property: "og:description", content: env.NUXT_SITE_DESCRIPTION },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: `${siteUrl}${env.OG_IMAGE}` },
        { property: "og:site_name", content: env.NUXT_SITE_NAME },
        { property: "og:locale", content: "en_US" },

        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `${env.NUXT_SITE_NAME} - Premium Gaming Experience`,
        },
        { name: "twitter:description", content: env.NUXT_SITE_DESCRIPTION },

        // Geographic & Technical
        { name: "geo.region", content: env.NUXT_SITE_REGION },
        { name: "geo.country", content: env.NUXT_SITE_COUNTRY },
        { name: "theme-color", content: env.NUXT_SITE_THEME_COLOR },
        { name: "msapplication-TileColor", content: env.NUXT_SITE_THEME_COLOR },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },

        { name: "format-detection", content: "telephone=no" },
        { name: "mobile-web-app-capable", content: "yes" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: env.FAVICON_PATH },
        { rel: "canonical", href: siteUrl },
      ],
    },
  },

  sitemap: {
    exclude: ["/admin/**", "/api/**", "/_nuxt/**"],
    defaults: {
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    autoLastmod: true,
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  image: {
    quality: 85,
    format: ["webp", "avif"],
  },

  experimental: {
    browserDevtoolsTiming: true, // Enable performance markers for Nuxt hooks in browser devtools
    payloadExtraction: false,
    viewTransition: true,
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: false,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    routeRules: {
      "/": {
        prerender: true,
        headers: {
          "Cache-Control": "max-age=3600",
        },
      },
      "/api/**": {
        headers: {
          "X-Robots-Tag": "noindex",
          "Cache-Control": "no-cache",
        },
      },
      "/admin/**": {
        headers: {
          "X-Robots-Tag": "noindex, nofollow",
          "Cache-Control": "no-cache",
        },
      },
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false, // Single page doesn't need splitting
    },
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      siteUrl: devUrl, // Can use localhost for runtime
      siteName: env.NUXT_SITE_NAME,
    },
  },
});
