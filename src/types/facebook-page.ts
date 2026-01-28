/**
 * =================================================================
 * FACEBOOK PAGE PLUGIN TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript type definitions for the Facebook Page Plugin feature
 * that embeds a Facebook Page showing recent posts, likes, and
 * social proof for community building and cross-platform engagement.
 *
 * =================================================================
 */

/**
 * Available tabs for the Facebook Page Plugin
 */
export type FacebookPageTab = 'timeline' | 'events' | 'messages';

/**
 * Facebook Page Plugin display size
 */
export type FacebookPageSize = 'small' | 'medium' | 'large';

/**
 * Analytics event types for Facebook Page Plugin
 */
export type FacebookPageEventType =
  | 'facebook_widget_loaded'
  | 'facebook_widget_error'
  | 'facebook_page_liked'
  | 'facebook_post_clicked';

/**
 * Configuration for the Facebook Page Plugin widget
 */
export interface FacebookPageConfig {
  /** Facebook Page URL (e.g., https://www.facebook.com/yourpage) */
  pageUrl: string;

  /** Facebook App ID (optional, for enhanced features) */
  appId?: string;

  /** Tabs to display: timeline, events, messages */
  tabs?: FacebookPageTab[];

  /** Width of the plugin (px, 180-500) */
  width?: number;

  /** Height of the plugin (px, min 70) */
  height?: number;

  /** Hide cover photo */
  hideCover?: boolean;

  /** Show friend faces when available */
  showFacepile?: boolean;

  /** Use small header */
  smallHeader?: boolean;

  /** Adapt to container width */
  adaptContainerWidth?: boolean;

  /** Lazy load the plugin */
  lazy?: boolean;
}

/**
 * Props for the FacebookPage component
 */
export interface FacebookPageProps {
  /** Override the default Facebook Page URL */
  pageUrl?: string;

  /** Section title */
  title?: string;

  /** Section subtitle/description */
  subtitle?: string;

  /** Tabs to display */
  tabs?: FacebookPageTab[];

  /** Custom width (px, 180-500) */
  width?: number;

  /** Custom height (px, min 70) */
  height?: number;

  /** Hide the cover photo */
  hideCover?: boolean;

  /** Show facepile (friends who liked) */
  showFacepile?: boolean;

  /** Use smaller header */
  smallHeader?: boolean;

  /** Adapt width to container */
  adaptContainerWidth?: boolean;

  /** Show loading state */
  showLoading?: boolean;

  /** Additional CSS class */
  className?: string;

  /** Enable analytics tracking */
  trackAnalytics?: boolean;

  /** Call-to-action text for the button */
  ctaText?: string;

  /** Call-to-action URL (defaults to page URL) */
  ctaUrl?: string;
}

/**
 * Facebook SDK initialization options
 */
export interface FacebookSDKConfig {
  /** Facebook App ID */
  appId?: string;

  /** Auto-log app events */
  autoLogAppEvents?: boolean;

  /** Enable XFBML parsing */
  xfbml?: boolean;

  /** SDK version */
  version?: string;
}

/**
 * Facebook Page analytics event
 */
export interface FacebookPageAnalyticsEvent {
  /** Event type */
  eventType: FacebookPageEventType;

  /** Timestamp of the event */
  timestamp: Date;

  /** Page URL */
  pageUrl: string;

  /** Additional event data */
  data?: Record<string, unknown>;
}

/**
 * Widget state for managing loading and error states
 */
export interface FacebookPageWidgetState {
  /** Whether the widget is loading */
  isLoading: boolean;

  /** Whether the widget has loaded successfully */
  isLoaded: boolean;

  /** Error message if widget failed to load */
  error: string | null;

  /** Number of load attempts */
  loadAttempts: number;
}

/**
 * Default configuration values
 */
export const DEFAULT_FACEBOOK_PAGE_CONFIG: Partial<FacebookPageConfig> = {
  tabs: ['timeline'],
  width: 340,
  height: 500,
  hideCover: false,
  showFacepile: true,
  smallHeader: false,
  adaptContainerWidth: true,
  lazy: true,
};

/**
 * Maximum number of retry attempts for loading the widget
 */
export const MAX_FACEBOOK_LOAD_ATTEMPTS = 3;

/**
 * Timeout for widget load (in milliseconds)
 */
export const FACEBOOK_WIDGET_LOAD_TIMEOUT = 10000;

/**
 * Facebook SDK script URL
 */
export const FACEBOOK_SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';

/**
 * Minimum and maximum dimensions for the plugin
 */
export const FACEBOOK_PAGE_DIMENSIONS = {
  minWidth: 180,
  maxWidth: 500,
  minHeight: 70,
} as const;
