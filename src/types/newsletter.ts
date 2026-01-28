/**
 * Newsletter Subscription Type Definitions
 * Type definitions for newsletter signup forms, validation,
 * GDPR compliance, and email service provider integration.
 */

/**
 * Newsletter subscription status
 */
export type SubscriptionStatus =
  | 'pending'      // Awaiting double opt-in confirmation
  | 'confirmed'    // Successfully subscribed
  | 'unsubscribed' // User unsubscribed
  | 'error';       // Subscription failed

/**
 * Supported email service providers
 */
export type NewsletterProvider = 'mailchimp' | 'convertkit' | 'formspree';

/**
 * Newsletter form data (collected from user)
 */
export interface NewsletterFormData {
  /** User's email address (required) */
  email: string;
  /** User's first name (optional) */
  firstName?: string;
  /** GDPR consent given */
  gdprConsent: boolean;
  /** Timestamp of consent */
  consentTimestamp?: number;
  /** Source of signup (footer, popup, etc.) */
  source?: NewsletterSource;
}

/**
 * Newsletter signup source tracking
 */
export type NewsletterSource = 'footer' | 'popup' | 'blog' | 'sidebar' | 'inline';

/**
 * Newsletter form validation errors
 */
export interface NewsletterFormErrors {
  email?: string;
  firstName?: string;
  gdprConsent?: string;
  form?: string;
}

/**
 * Newsletter form touched state
 */
export interface NewsletterFormTouched {
  email: boolean;
  firstName: boolean;
  gdprConsent: boolean;
}

/**
 * Form submission status
 */
export type NewsletterFormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Complete newsletter form state
 */
export interface NewsletterFormState {
  data: NewsletterFormData;
  errors: NewsletterFormErrors;
  touched: NewsletterFormTouched;
  status: NewsletterFormStatus;
  serverError?: string;
}

/**
 * GDPR consent data
 */
export interface GDPRConsent {
  /** User consented to receive newsletter */
  newsletter: boolean;
  /** Timestamp when consent was given */
  timestamp: number;
  /** Version of privacy policy accepted */
  policyVersion?: string;
  /** IP address (for compliance records - handle server-side) */
  ipAddress?: string;
}

/**
 * Double opt-in confirmation data
 */
export interface DoubleOptInData {
  /** Email address to confirm */
  email: string;
  /** Confirmation token (from email link) */
  token: string;
  /** When the confirmation was requested */
  requestedAt: number;
  /** When the confirmation expires */
  expiresAt: number;
}

/**
 * Newsletter API response
 */
export interface NewsletterAPIResponse {
  success: boolean;
  message?: string;
  subscriptionId?: string;
  status?: SubscriptionStatus;
  error?: {
    code: string;
    message: string;
  };
}

/**
 * Mailchimp specific subscription data
 */
export interface MailchimpSubscriptionData {
  email_address: string;
  status: 'pending' | 'subscribed' | 'unsubscribed' | 'cleaned' | 'transactional';
  merge_fields?: {
    FNAME?: string;
    LNAME?: string;
    [key: string]: string | undefined;
  };
  tags?: string[];
  marketing_permissions?: Array<{
    marketing_permission_id: string;
    enabled: boolean;
  }>;
}

/**
 * ConvertKit specific subscription data
 */
export interface ConvertKitSubscriptionData {
  email: string;
  first_name?: string;
  fields?: Record<string, string>;
  tags?: number[];
}

/**
 * Newsletter validation configuration
 */
export interface NewsletterValidationConfig {
  /** Maximum email length */
  maxEmailLength: number;
  /** Maximum first name length */
  maxFirstNameLength: number;
  /** Minimum time to submit form (spam prevention) in ms */
  minSubmitTime: number;
  /** Require GDPR consent checkbox */
  requireGDPRConsent: boolean;
}

/**
 * Default validation configuration
 */
export const DEFAULT_NEWSLETTER_VALIDATION: NewsletterValidationConfig = {
  maxEmailLength: 254,
  maxFirstNameLength: 50,
  minSubmitTime: 2000, // 2 seconds minimum
  requireGDPRConsent: true,
};

/**
 * Newsletter popup configuration
 */
export interface NewsletterPopupConfig {
  /** Enable popup display */
  enabled: boolean;
  /** Delay before showing popup (ms) */
  showDelay: number;
  /** Show on exit intent */
  showOnExitIntent: boolean;
  /** Pages to show popup on (empty = all pages) */
  showOnPages: string[];
  /** Pages to exclude popup from */
  excludePages: string[];
  /** Days to remember dismissal */
  dismissalDays: number;
  /** Maximum times to show popup per session */
  maxShowsPerSession: number;
}

/**
 * Initial form data
 */
export const INITIAL_NEWSLETTER_DATA: NewsletterFormData = {
  email: '',
  firstName: '',
  gdprConsent: false,
  source: 'footer',
};

/**
 * Initial touched state
 */
export const INITIAL_NEWSLETTER_TOUCHED: NewsletterFormTouched = {
  email: false,
  firstName: false,
  gdprConsent: false,
};

/**
 * Regex patterns for validation
 */
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * Storage keys for newsletter preferences
 */
export const NEWSLETTER_STORAGE_KEYS = {
  /** Key for storing popup dismissal */
  POPUP_DISMISSED: 'newsletter_popup_dismissed',
  /** Key for storing popup dismissal timestamp */
  POPUP_DISMISSED_AT: 'newsletter_popup_dismissed_at',
  /** Key for storing subscription status */
  SUBSCRIPTION_STATUS: 'newsletter_subscribed',
  /** Key for storing shows count in session */
  SESSION_SHOWS: 'newsletter_popup_shows',
} as const;
