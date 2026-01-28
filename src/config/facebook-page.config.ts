/**
 * =================================================================
 * FACEBOOK PAGE PLUGIN CONFIGURATION
 * =================================================================
 *
 * Configuration for the Facebook Page Plugin that embeds a Facebook
 * Page showing recent posts, page likes, and social proof.
 *
 * This plugin helps build community connection and enables
 * cross-platform engagement with your Facebook audience.
 *
 * =================================================================
 */

import type {
  FacebookPageConfig,
  FacebookPageTab,
  FacebookSDKConfig,
} from '../types/facebook-page';

// =================================================================
// ENVIRONMENT VARIABLES
// =================================================================

/**
 * Facebook Page URL
 * Set via PUBLIC_FACEBOOK_PAGE_URL environment variable
 */
export const FACEBOOK_PAGE_URL = import.meta.env.PUBLIC_FACEBOOK_PAGE_URL || '';

/**
 * Facebook App ID (optional, for enhanced features)
 * Set via PUBLIC_FACEBOOK_APP_ID environment variable
 */
export const FACEBOOK_APP_ID = import.meta.env.PUBLIC_FACEBOOK_APP_ID || '';

/**
 * Enable/disable Facebook Page plugin
 * Set via PUBLIC_FACEBOOK_PAGE_ENABLED environment variable
 */
export const FACEBOOK_PAGE_ENABLED =
  import.meta.env.PUBLIC_FACEBOOK_PAGE_ENABLED !== 'false';

/**
 * Check if Facebook Page plugin is configured
 */
export const isFacebookPageConfigured = (): boolean => {
  return Boolean(FACEBOOK_PAGE_URL && FACEBOOK_PAGE_URL.trim() !== '');
};

// =================================================================
// DEFAULT CONFIGURATION
// =================================================================

/**
 * Default Facebook Page plugin configuration
 */
export const facebookPageConfig: FacebookPageConfig = {
  pageUrl: FACEBOOK_PAGE_URL,
  appId: FACEBOOK_APP_ID,
  tabs: ['timeline'] as FacebookPageTab[],
  width: 340,
  height: 500,
  hideCover: false,
  showFacepile: true,
  smallHeader: false,
  adaptContainerWidth: true,
  lazy: true,
};

/**
 * Facebook SDK configuration
 */
export const facebookSDKConfig: FacebookSDKConfig = {
  appId: FACEBOOK_APP_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v18.0',
};

// =================================================================
// CONTENT CONFIGURATION
// =================================================================

/**
 * Content configuration for the Facebook Page section
 */
export const facebookPageContent = {
  default: {
    title: 'Connect With Us on Facebook',
    subtitle: 'Join our community and stay updated with our latest news, tips, and special offers.',
  },
  cta: {
    text: 'Follow Us on Facebook',
    icon: 'facebook',
  },
  fallback: {
    title: 'Follow Us on Facebook',
    message: 'Connect with us on Facebook to stay updated with our latest news, tips, and exclusive offers.',
    buttonText: 'Visit Our Facebook Page',
  },
  loading: {
    text: 'Loading Facebook page...',
  },
  error: {
    title: 'Unable to Load Facebook Feed',
    message: 'The Facebook plugin could not be loaded. Please visit our page directly.',
    buttonText: 'Visit Facebook Page',
  },
};

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Get the Facebook Page plugin data attributes
 * @param options - Configuration options
 * @returns Object with data attributes for the fb-page div
 */
export function getFacebookPageAttributes(options?: Partial<FacebookPageConfig>): Record<string, string> {
  const config = { ...facebookPageConfig, ...options };

  const attrs: Record<string, string> = {
    'data-href': config.pageUrl,
    'data-width': String(config.width || 340),
    'data-height': String(config.height || 500),
  };

  // Add tabs
  if (config.tabs && config.tabs.length > 0) {
    attrs['data-tabs'] = config.tabs.join(',');
  }

  // Boolean attributes
  if (config.hideCover) {
    attrs['data-hide-cover'] = 'true';
  }

  if (config.showFacepile !== false) {
    attrs['data-show-facepile'] = 'true';
  }

  if (config.smallHeader) {
    attrs['data-small-header'] = 'true';
  }

  if (config.adaptContainerWidth !== false) {
    attrs['data-adapt-container-width'] = 'true';
  }

  if (config.lazy !== false) {
    attrs['data-lazy'] = 'true';
  }

  return attrs;
}

/**
 * Build the Facebook SDK script URL with parameters
 * @returns Facebook SDK script URL
 */
export function getFacebookSDKUrl(): string {
  return 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0' +
    (FACEBOOK_APP_ID ? `&appId=${FACEBOOK_APP_ID}` : '');
}

/**
 * Get the direct link to the Facebook page
 * @returns Facebook page URL
 */
export function getFacebookPageUrl(): string {
  return FACEBOOK_PAGE_URL;
}

/**
 * Validate Facebook Page URL format
 * @param url - URL to validate
 * @returns Whether the URL is a valid Facebook page URL
 */
export function isValidFacebookPageUrl(url: string): boolean {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname === 'www.facebook.com' ||
           parsedUrl.hostname === 'facebook.com' ||
           parsedUrl.hostname === 'm.facebook.com';
  } catch {
    return false;
  }
}
