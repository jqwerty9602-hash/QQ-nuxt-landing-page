// env.ts - Minimal clean version
export const env = {
  // Core Site Info
  NUXT_PUBLIC_SITE_URL: 'https://qqfun.netlify.app',
  NUXT_SITE_NAME: 'QQFun',
  NUXT_SITE_DESCRIPTION: 'Premium gaming platform offering secure and entertaining gaming experiences with 24/7 support',
  
  // Required SEO fields
  NUXT_SITE_KEYWORDS: 'gaming, online games, casino, slots, QQFun, Malaysia gaming',
  NUXT_SITE_AUTHOR: 'QQFun',
  NUXT_SITE_THEME_COLOR: '#24055D',
  NUXT_SITE_REGION: 'MY',
  NUXT_SITE_COUNTRY: 'Malaysia',
  
  // Asset paths
  OG_IMAGE: '/svg/QQF-logo-03.svg', // image display when shared to social media
  FAVICON_PATH: '/favicon.svg',
  APPLE_TOUCH_ICON: '/apple-touch-icon-72x72.png', //bookmark or add to user's homescreen
  
  // Basic settings
  DEFAULT_LANGUAGE: "en",
  
  // Environment detection
  get isProduction() {
    return process.env.NODE_ENV === 'production';
  },
  get isDevelopment() {
    return process.env.NODE_ENV === 'development';
  }
} as const;