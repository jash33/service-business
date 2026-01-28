/**
 * =================================================================
 * INSTAGRAM FEED TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript type definitions for the Instagram Feed widget that
 * displays recent Instagram posts in a grid gallery format.
 * Showcases behind-the-scenes work and builds visual brand presence.
 *
 * =================================================================
 */

/**
 * Instagram media types supported by the Basic Display API
 */
export type InstagramMediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

/**
 * Analytics event types for Instagram Feed
 */
export type InstagramFeedEventType =
  | 'instagram_feed_loaded'
  | 'instagram_feed_error'
  | 'instagram_post_clicked'
  | 'instagram_profile_clicked';

/**
 * Represents a single Instagram post/media item
 */
export interface InstagramPost {
  /** Unique ID of the media */
  id: string;

  /** Type of media (IMAGE, VIDEO, or CAROUSEL_ALBUM) */
  mediaType: InstagramMediaType;

  /** URL to the media (image or video thumbnail) */
  mediaUrl: string;

  /** Thumbnail URL for videos */
  thumbnailUrl?: string;

  /** Permanent link to the post on Instagram */
  permalink: string;

  /** Caption/description of the post */
  caption?: string;

  /** ISO 8601 timestamp when the media was created */
  timestamp?: string;

  /** Username of the post author */
  username?: string;
}

/**
 * Configuration for the Instagram Feed widget
 */
export interface InstagramFeedConfig {
  /** Instagram Basic Display API access token */
  accessToken: string;

  /** Instagram username for profile link */
  username?: string;

  /** Number of posts to display (1-25, default: 6) */
  postCount?: number;

  /** Show video posts (default: true) */
  showVideos?: boolean;

  /** Cache duration in minutes (default: 60) */
  cacheDuration?: number;

  /** Enable lazy loading for images (default: true) */
  lazyLoad?: boolean;
}

/**
 * Props for the InstagramFeedSection component
 */
export interface InstagramFeedSectionProps {
  /** Section title */
  title?: string;

  /** Section subtitle/description */
  subtitle?: string;

  /** Number of posts to display (default: 6) */
  postCount?: number;

  /** Number of columns in the grid (default: 3) */
  columns?: number;

  /** Show video posts (default: true) */
  showVideos?: boolean;

  /** Additional CSS class */
  className?: string;

  /** Enable analytics tracking */
  trackAnalytics?: boolean;

  /** Call-to-action text for the follow button */
  ctaText?: string;

  /** Custom Instagram profile URL */
  profileUrl?: string;
}

/**
 * Props for the InstagramFeedCard component
 */
export interface InstagramFeedCardProps {
  /** The Instagram post data */
  post: InstagramPost;

  /** Enable lazy loading for images */
  lazyLoad?: boolean;

  /** Enable analytics tracking */
  trackAnalytics?: boolean;

  /** Index for staggered animation */
  index?: number;
}

/**
 * Instagram Feed analytics event
 */
export interface InstagramFeedAnalyticsEvent {
  /** Event type */
  eventType: InstagramFeedEventType;

  /** Timestamp of the event */
  timestamp: Date;

  /** Post ID if applicable */
  postId?: string;

  /** Additional event data */
  data?: Record<string, unknown>;
}

/**
 * Widget state for managing loading and error states
 */
export interface InstagramFeedWidgetState {
  /** Whether the feed is loading */
  isLoading: boolean;

  /** Whether the feed has loaded successfully */
  isLoaded: boolean;

  /** Error message if feed failed to load */
  error: string | null;

  /** Number of load attempts */
  loadAttempts: number;

  /** The loaded posts */
  posts: InstagramPost[];
}

/**
 * Default configuration values
 */
export const DEFAULT_INSTAGRAM_FEED_CONFIG: Partial<InstagramFeedConfig> = {
  postCount: 6,
  showVideos: true,
  cacheDuration: 60,
  lazyLoad: true,
};

/**
 * Maximum number of retry attempts for loading the feed
 */
export const MAX_INSTAGRAM_LOAD_ATTEMPTS = 3;

/**
 * Timeout for feed load (in milliseconds)
 */
export const INSTAGRAM_FEED_LOAD_TIMEOUT = 15000;

/**
 * Instagram Basic Display API base URL
 */
export const INSTAGRAM_API_BASE_URL = 'https://graph.instagram.com';

/**
 * Minimum and maximum posts for the feed
 */
export const INSTAGRAM_FEED_LIMITS = {
  minPosts: 1,
  maxPosts: 25,
  defaultPosts: 6,
} as const;

/**
 * Grid column options
 */
export const INSTAGRAM_GRID_COLUMNS = {
  min: 2,
  max: 4,
  default: 3,
} as const;
