/**
 * Newsletter Configuration
 * Central configuration for newsletter signup forms, popups,
 * and email service provider integration.
 */

import type {
  NewsletterProvider,
  NewsletterPopupConfig,
  NewsletterValidationConfig,
} from '../types/newsletter';

/**
 * Newsletter provider configuration
 */
export interface NewsletterProviderConfig {
  /** Selected provider */
  provider: NewsletterProvider;
  /** API endpoint for form submissions */
  endpoint: string;
  /** API key (for server-side use only) */
  apiKey?: string;
  /** Audience/List ID (Mailchimp) or Form ID (ConvertKit) */
  listId?: string;
  /** Enable double opt-in */
  doubleOptIn: boolean;
}

/**
 * Newsletter content configuration
 */
export interface NewsletterContentConfig {
  /** Main headline */
  headline: string;
  /** Subheadline/description */
  description: string;
  /** Submit button text */
  buttonText: string;
  /** Success message */
  successMessage: string;
  /** Double opt-in pending message */
  pendingMessage: string;
  /** Error message (generic) */
  errorMessage: string;
  /** Privacy notice text */
  privacyNotice: string;
  /** GDPR consent label */
  gdprLabel: string;
  /** Placeholder for email input */
  emailPlaceholder: string;
  /** Placeholder for name input */
  namePlaceholder: string;
}

/**
 * Complete newsletter configuration
 */
export interface NewsletterConfig {
  /** Enable newsletter functionality */
  enabled: boolean;
  /** Provider configuration */
  provider: NewsletterProviderConfig;
  /** Popup configuration */
  popup: NewsletterPopupConfig;
  /** Validation configuration */
  validation: NewsletterValidationConfig;
  /** Content/copy configuration */
  content: NewsletterContentConfig;
  /** Show in footer */
  showInFooter: boolean;
  /** Privacy policy URL */
  privacyPolicyUrl: string;
}

/**
 * Default newsletter content
 */
export const defaultNewsletterContent: NewsletterContentConfig = {
  headline: 'Subscribe to Our Newsletter',
  description: 'Get HVAC tips, seasonal maintenance reminders, and exclusive offers.',
  buttonText: 'Subscribe',
  successMessage: 'Thanks for subscribing! Check your email to confirm.',
  pendingMessage: 'Please check your email to confirm your subscription.',
  errorMessage: 'Something went wrong. Please try again.',
  privacyNotice: 'We respect your privacy. Unsubscribe anytime.',
  gdprLabel: 'I agree to receive emails and accept the',
  emailPlaceholder: 'Enter your email',
  namePlaceholder: 'Your name (optional)',
};

/**
 * Default popup configuration
 */
export const defaultPopupConfig: NewsletterPopupConfig = {
  enabled: false, // Disabled - too intrusive for service business
  showDelay: 30000, // 30 seconds
  showOnExitIntent: false,
  showOnPages: [], // Empty = all pages
  excludePages: [],
  dismissalDays: 14, // Remember dismissal for 14 days
  maxShowsPerSession: 1,
};

/**
 * Default validation configuration
 */
export const defaultValidationConfig: NewsletterValidationConfig = {
  maxEmailLength: 254,
  maxFirstNameLength: 50,
  minSubmitTime: 2000, // 2 seconds
  requireGDPRConsent: true,
};

/**
 * Default provider configuration (using Formspree as fallback)
 */
export const defaultProviderConfig: NewsletterProviderConfig = {
  provider: 'formspree',
  endpoint: import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT || '',
  doubleOptIn: true,
};

/**
 * Main newsletter configuration
 * Override values using environment variables or by modifying this config
 */
export const newsletterConfig: NewsletterConfig = {
  enabled: import.meta.env.PUBLIC_NEWSLETTER_ENABLED !== 'false',
  provider: defaultProviderConfig,
  popup: defaultPopupConfig,
  validation: defaultValidationConfig,
  content: defaultNewsletterContent,
  showInFooter: true,
  privacyPolicyUrl: '/privacy',
};

/**
 * Get provider-specific API endpoint
 */
export function getNewsletterEndpoint(): string {
  const provider = import.meta.env.PUBLIC_NEWSLETTER_PROVIDER || 'formspree';

  switch (provider) {
    case 'mailchimp':
      // Mailchimp requires server-side API calls, so use a proxy endpoint
      return '/api/newsletter/subscribe';

    case 'convertkit':
      const formId = import.meta.env.PUBLIC_CONVERTKIT_FORM_ID;
      return formId
        ? `https://api.convertkit.com/v3/forms/${formId}/subscribe`
        : '';

    case 'formspree':
    default:
      return import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT || '';
  }
}

/**
 * Check if newsletter is properly configured
 * Note: Returns true if enabled, even without endpoint (form will simulate)
 * This allows the form to be visible for development/testing
 */
export function isNewsletterConfigured(): boolean {
  return newsletterConfig.enabled;
}
