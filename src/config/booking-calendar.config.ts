/**
 * =================================================================
 * BOOKING CALENDAR CONFIGURATION
 * =================================================================
 *
 * Configuration for third-party scheduling widget integration.
 * Supports Calendly, Acuity Scheduling, and custom booking widgets.
 *
 * =================================================================
 */

import type {
  BookingCalendarConfig,
  BookingCalendarProvider,
} from '../types/booking-calendar';

// =================================================================
// ENVIRONMENT VARIABLES
// =================================================================

/**
 * Booking calendar provider (calendly, acuity, or custom)
 * Set via PUBLIC_BOOKING_CALENDAR_PROVIDER environment variable
 */
export const BOOKING_PROVIDER: BookingCalendarProvider =
  (import.meta.env.PUBLIC_BOOKING_CALENDAR_PROVIDER as BookingCalendarProvider) || 'calendly';

/**
 * Booking calendar URL/identifier
 * Set via PUBLIC_BOOKING_CALENDAR_URL environment variable
 */
export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_CALENDAR_URL || '';

/**
 * Check if booking calendar is configured
 */
export const isBookingConfigured = (): boolean => {
  return Boolean(BOOKING_URL && BOOKING_URL.trim() !== '');
};

// =================================================================
// DEFAULT CONFIGURATION
// =================================================================

/**
 * Default booking calendar configuration
 */
export const bookingCalendarConfig: BookingCalendarConfig = {
  provider: BOOKING_PROVIDER,
  url: BOOKING_URL,
  displayMode: 'inline',
  height: '700px',
  minHeight: '600px',
  hideCookieBanner: false,
  hideEventTypeDetails: false,
  primaryColor: '',
  textColor: '',
  backgroundColor: '',
};

// =================================================================
// CONSULTATION TYPES
// =================================================================

/**
 * Available consultation/appointment types
 * These can be used to create links to specific event types
 */
export interface ConsultationType {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Description of the consultation */
  description: string;
  /** Duration in minutes */
  duration: number;
  /** URL path or event type identifier */
  eventType?: string;
  /** Price (if applicable) */
  price?: string;
}

export const consultationTypes: ConsultationType[] = [
  // Add your consultation types here. Example:
  // {
  //   id: 'discovery-call',
  //   name: 'Free Discovery Call',
  //   description: 'A complimentary 15-minute call to discuss your project needs.',
  //   duration: 15,
  //   eventType: 'discovery-call',
  //   price: 'Free',
  // },
];

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Get the full booking URL for a specific event type
 * @param eventType - Optional event type identifier
 * @returns Full booking URL
 */
export function getBookingUrl(eventType?: string): string {
  if (!BOOKING_URL) {
    return '';
  }

  // If no event type, return base URL
  if (!eventType) {
    return BOOKING_URL;
  }

  // Construct URL based on provider
  switch (BOOKING_PROVIDER) {
    case 'calendly':
      // Calendly URLs are in format: https://calendly.com/username/event-type
      return BOOKING_URL.endsWith('/')
        ? `${BOOKING_URL}${eventType}`
        : `${BOOKING_URL}/${eventType}`;

    case 'acuity':
      // Acuity uses query parameters for event types
      const url = new URL(BOOKING_URL);
      url.searchParams.set('appointmentType', eventType);
      return url.toString();

    default:
      return BOOKING_URL;
  }
}

/**
 * Get Calendly embed URL with parameters
 * @param options - Configuration options
 * @returns Formatted embed URL
 */
export function getCalendlyEmbedUrl(options?: {
  hideEventTypeDetails?: boolean;
  hideCookieBanner?: boolean;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
}): string {
  if (!BOOKING_URL || BOOKING_PROVIDER !== 'calendly') {
    return '';
  }

  const url = new URL(BOOKING_URL);

  // Add customization parameters
  if (options?.hideEventTypeDetails) {
    url.searchParams.set('hide_event_type_details', '1');
  }
  if (options?.hideCookieBanner) {
    url.searchParams.set('hide_gdpr_banner', '1');
  }
  if (options?.backgroundColor) {
    url.searchParams.set('background_color', options.backgroundColor);
  }
  if (options?.primaryColor) {
    url.searchParams.set('primary_color', options.primaryColor);
  }
  if (options?.textColor) {
    url.searchParams.set('text_color', options.textColor);
  }

  return url.toString();
}

// =================================================================
// BOOKING PAGE CONTENT
// =================================================================

/**
 * Content configuration for the booking page
 */
export const bookingPageContent = {
  hero: {
    title: '',
    subtitle: '',
  },
  benefits: [
    // Add your booking benefits here. Example:
    // {
    //   icon: 'clock',
    //   title: 'Quick & Easy',
    //   description: 'Book your appointment in seconds.',
    // },
  ],
  fallback: {
    title: '',
    message: '',
    contactText: '',
    contactUrl: '',
  },
};
