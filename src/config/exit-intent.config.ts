/**
 * Exit Intent Popup Configuration
 * Central configuration for exit-intent detection popup offering
 * special discounts or free consultation.
 *
 * Features:
 * - Exit-intent detection (mouse leaving viewport)
 * - Dismissal tracking and frequency capping
 * - Configurable offers (discount/consultation)
 * - Page exclusion rules
 */

/**
 * Offer type for the exit intent popup
 */
export type ExitIntentOfferType = 'discount' | 'consultation' | 'both';

/**
 * Exit intent popup configuration interface
 */
export interface ExitIntentPopupConfig {
  /** Enable popup display */
  enabled: boolean;
  /** Type of offer to display */
  offerType: ExitIntentOfferType;
  /** Discount percentage (if offerType includes discount) */
  discountPercentage: number;
  /** Discount code to display */
  discountCode: string;
  /** Days to remember dismissal (frequency capping) */
  dismissalDays: number;
  /** Maximum times to show popup per session */
  maxShowsPerSession: number;
  /** Minimum time on page before showing (ms) - prevents immediate popups */
  minimumTimeOnPage: number;
  /** Pages to show popup on (empty = all pages) */
  showOnPages: string[];
  /** Pages to exclude popup from */
  excludePages: string[];
  /** Only show on desktop (exit-intent is mouse-based) */
  desktopOnly: boolean;
  /** Booking/consultation URL */
  consultationUrl: string;
  /** Contact page URL */
  contactUrl: string;
}

/**
 * Exit intent popup content configuration
 */
export interface ExitIntentContentConfig {
  /** Main headline */
  headline: string;
  /** Subheadline/description */
  description: string;
  /** Discount offer text (for discount offers) */
  discountText: string;
  /** Consultation offer text (for consultation offers) */
  consultationText: string;
  /** Primary CTA button text */
  primaryButtonText: string;
  /** Secondary CTA button text */
  secondaryButtonText: string;
  /** Dismiss button text */
  dismissText: string;
  /** Success/thank you message */
  successMessage: string;
  /** Badge/label text */
  badgeText: string;
}

/**
 * Complete exit intent configuration
 */
export interface ExitIntentConfig {
  popup: ExitIntentPopupConfig;
  content: ExitIntentContentConfig;
}

/**
 * Default popup configuration
 */
export const defaultExitIntentPopupConfig: ExitIntentPopupConfig = {
  enabled: true,
  offerType: 'both',
  discountPercentage: 0,
  discountCode: '',
  dismissalDays: 7, // Remember dismissal for 7 days
  maxShowsPerSession: 1,
  minimumTimeOnPage: 10000, // 10 seconds minimum time on page
  showOnPages: [], // Empty = all pages
  excludePages: [],
  desktopOnly: true, // Exit-intent is mouse-based, so desktop only
  consultationUrl: '',
  contactUrl: '',
};

/**
 * Default content configuration
 */
export const defaultExitIntentContentConfig: ExitIntentContentConfig = {
  headline: '',
  description: '',
  discountText: '',
  consultationText: '',
  primaryButtonText: '',
  secondaryButtonText: '',
  dismissText: '',
  successMessage: '',
  badgeText: '',
};

/**
 * Main exit intent configuration
 */
export const exitIntentConfig: ExitIntentConfig = {
  popup: {
    ...defaultExitIntentPopupConfig,
    // Override with environment variables if needed
    enabled: import.meta.env.PUBLIC_EXIT_INTENT_ENABLED !== 'false',
  },
  content: defaultExitIntentContentConfig,
};

/**
 * Storage keys for exit intent popup
 */
export const EXIT_INTENT_STORAGE_KEYS = {
  /** Key for storing popup dismissal */
  DISMISSED: 'exit_intent_popup_dismissed',
  /** Key for storing popup dismissal timestamp */
  DISMISSED_AT: 'exit_intent_popup_dismissed_at',
  /** Key for storing conversion status */
  CONVERTED: 'exit_intent_popup_converted',
  /** Key for storing shows count in session */
  SESSION_SHOWS: 'exit_intent_popup_session_shows',
  /** Key for storing page enter time */
  PAGE_ENTER_TIME: 'exit_intent_page_enter_time',
} as const;

/**
 * Check if exit intent popup is properly configured
 */
export function isExitIntentConfigured(): boolean {
  return exitIntentConfig.popup.enabled;
}
