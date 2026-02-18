/**
 * =================================================================
 * INSTAGRAM FEED CONFIGURATION
 * =================================================================
 *
 * Configuration for the Instagram Feed widget that displays recent
 * Instagram posts in a grid gallery format. Showcases behind-the-scenes
 * work and builds visual brand presence on the website.
 *
 * The Instagram Basic Display API is used to fetch posts.
 * Access tokens must be refreshed periodically (every 60 days).
 *
 * =================================================================
 */

import type {
  InstagramFeedConfig,
  InstagramPost,
} from '../types/instagram-feed';

// =================================================================
// ENVIRONMENT VARIABLES
// =================================================================

/**
 * Instagram Basic Display API Access Token
 * Set via PUBLIC_INSTAGRAM_ACCESS_TOKEN environment variable
 *
 * To obtain an access token:
 * 1. Create a Facebook Developer App
 * 2. Add Instagram Basic Display product
 * 3. Add Instagram Test User
 * 4. Generate an access token
 *
 * @see https://developers.facebook.com/docs/instagram-basic-display-api
 */
export const INSTAGRAM_ACCESS_TOKEN = import.meta.env.PUBLIC_INSTAGRAM_ACCESS_TOKEN || '';

/**
 * Instagram username for profile link
 * Set via PUBLIC_INSTAGRAM_USERNAME environment variable
 */
export const INSTAGRAM_USERNAME = import.meta.env.PUBLIC_INSTAGRAM_USERNAME || '';

/**
 * Enable/disable Instagram Feed
 * Set via PUBLIC_INSTAGRAM_FEED_ENABLED environment variable
 */
export const INSTAGRAM_FEED_ENABLED =
  import.meta.env.PUBLIC_INSTAGRAM_FEED_ENABLED !== 'false';

/**
 * Check if Instagram Feed is configured
 */
export const isInstagramFeedConfigured = (): boolean => {
  return Boolean(INSTAGRAM_ACCESS_TOKEN && INSTAGRAM_ACCESS_TOKEN.trim() !== '');
};

// =================================================================
// DEFAULT CONFIGURATION
// =================================================================

/**
 * Default Instagram Feed configuration
 */
export const instagramFeedConfig: InstagramFeedConfig = {
  accessToken: INSTAGRAM_ACCESS_TOKEN,
  username: INSTAGRAM_USERNAME,
  postCount: 6,
  showVideos: true,
  cacheDuration: 60,
  lazyLoad: true,
};

// =================================================================
// CONTENT CONFIGURATION
// =================================================================

/**
 * Content configuration for the Instagram Feed section
 */
export const instagramFeedContent = {
  default: {
    title: '',
    subtitle: '',
  },
  cta: {
    text: '',
    icon: 'instagram',
  },
  fallback: {
    title: '',
    message: '',
    buttonText: '',
  },
  loading: {
    text: '',
  },
  error: {
    title: '',
    message: '',
    buttonText: '',
  },
  empty: {
    title: '',
    message: '',
  },
};

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Get the Instagram profile URL
 * @param username - Optional username override
 * @returns Instagram profile URL
 */
export function getInstagramProfileUrl(username?: string): string {
  const handle = username || INSTAGRAM_USERNAME;
  if (!handle) return 'https://instagram.com';
  return `https://instagram.com/${handle.replace('@', '')}`;
}

/**
 * Validate Instagram username format
 * @param username - Username to validate
 * @returns Whether the username is valid
 */
export function isValidInstagramUsername(username: string): boolean {
  if (!username) return false;
  // Instagram usernames: 1-30 chars, alphanumeric, underscores, periods
  const usernameRegex = /^@?[\w](?!.*?\.{2})[\w.]{0,28}[\w]$/;
  return usernameRegex.test(username);
}

/**
 * Format Instagram post caption for display
 * @param caption - The full caption text
 * @param maxLength - Maximum length before truncation (default: 100)
 * @returns Formatted caption
 */
export function formatCaption(caption: string | undefined, maxLength: number = 100): string {
  if (!caption) return '';

  // Remove excess whitespace and newlines
  const cleaned = caption.replace(/\s+/g, ' ').trim();

  if (cleaned.length <= maxLength) return cleaned;

  // Truncate at word boundary
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Format timestamp for display
 * @param timestamp - ISO 8601 timestamp
 * @returns Formatted date string
 */
export function formatTimestamp(timestamp: string | undefined): string {
  if (!timestamp) return '';

  try {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

/**
 * Get placeholder posts for development/demo purposes
 * @param count - Number of placeholder posts to generate
 * @returns Array of placeholder InstagramPost objects
 */
export function getPlaceholderPosts(count: number = 6): InstagramPost[] {
  const placeholders: InstagramPost[] = [];

  for (let i = 1; i <= count; i++) {
    placeholders.push({
      id: `placeholder-${i}`,
      mediaType: 'IMAGE',
      mediaUrl: `https://picsum.photos/seed/instagram${i}/600/600`,
      permalink: getInstagramProfileUrl(),
      caption: `Sample post ${i}`,
      timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
      username: INSTAGRAM_USERNAME || '',
    });
  }

  return placeholders;
}

/**
 * Build the Instagram Basic Display API URL for fetching user media
 * @param accessToken - The access token
 * @param limit - Number of posts to fetch
 * @returns API URL string
 */
export function buildInstagramApiUrl(accessToken: string, limit: number = 6): string {
  const fields = 'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp,username';
  return `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;
}

/**
 * Transform API response data to InstagramPost format
 * @param data - Raw API response data
 * @returns Array of InstagramPost objects
 */
export function transformApiResponse(data: any[]): InstagramPost[] {
  return data.map((item) => ({
    id: item.id,
    mediaType: item.media_type,
    mediaUrl: item.media_url,
    thumbnailUrl: item.thumbnail_url,
    permalink: item.permalink,
    caption: item.caption,
    timestamp: item.timestamp,
    username: item.username,
  }));
}
