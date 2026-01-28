/**
 * =================================================================
 * BOOKING CALENDAR TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript type definitions for the booking calendar feature
 * that embeds third-party scheduling widgets for appointment booking.
 *
 * =================================================================
 */

/**
 * Supported booking calendar providers
 */
export type BookingCalendarProvider = 'calendly' | 'acuity' | 'custom';

/**
 * Widget display mode
 */
export type BookingCalendarDisplayMode = 'inline' | 'popup' | 'popup-widget';

/**
 * Booking event types for analytics
 */
export type BookingEventType =
  | 'booking_widget_loaded'
  | 'booking_scheduled'
  | 'booking_rescheduled'
  | 'booking_canceled'
  | 'booking_error';

/**
 * Configuration for a booking calendar widget
 */
export interface BookingCalendarConfig {
  /** Widget provider (calendly, acuity, or custom) */
  provider: BookingCalendarProvider;

  /** The URL or identifier for the booking widget */
  url: string;

  /** Display mode for the widget */
  displayMode: BookingCalendarDisplayMode;

  /** Height of the inline widget (px or percentage) */
  height?: string;

  /** Minimum height for inline widget */
  minHeight?: string;

  /** Whether to hide cookie banner in widget */
  hideCookieBanner?: boolean;

  /** Whether to hide event type details */
  hideEventTypeDetails?: boolean;

  /** Background color for widget */
  backgroundColor?: string;

  /** Primary color for widget */
  primaryColor?: string;

  /** Text color for widget */
  textColor?: string;

  /** Prefill data for the booking form */
  prefill?: BookingPrefillData;
}

/**
 * Prefill data for booking forms
 */
export interface BookingPrefillData {
  /** Customer's name */
  name?: string;

  /** Customer's email */
  email?: string;

  /** Customer's phone number */
  phone?: string;

  /** Custom answers for form questions */
  customAnswers?: Record<string, string>;

  /** Additional guest emails */
  guests?: string[];
}

/**
 * Props for the BookingCalendar component
 */
export interface BookingCalendarProps {
  /** Override the default booking URL */
  bookingUrl?: string;

  /** Widget display mode */
  displayMode?: BookingCalendarDisplayMode;

  /** Custom height for inline widget */
  height?: string;

  /** Section title */
  title?: string;

  /** Section subtitle/description */
  subtitle?: string;

  /** Show loading state */
  showLoading?: boolean;

  /** Prefill data for the form */
  prefill?: BookingPrefillData;

  /** Additional CSS class */
  className?: string;

  /** Enable analytics tracking */
  trackAnalytics?: boolean;
}

/**
 * Booking analytics event
 */
export interface BookingAnalyticsEvent {
  /** Event type */
  eventType: BookingEventType;

  /** Provider name */
  provider: BookingCalendarProvider;

  /** Timestamp of the event */
  timestamp: Date;

  /** Additional event data */
  data?: Record<string, unknown>;
}

/**
 * Calendly-specific event data
 */
export interface CalendlyEventData {
  /** Type of Calendly event */
  event: 'calendly.profile_page_viewed' | 'calendly.event_type_viewed' | 'calendly.date_and_time_selected' | 'calendly.event_scheduled';

  /** Event payload */
  payload?: {
    event?: {
      uri?: string;
    };
    invitee?: {
      uri?: string;
      name?: string;
      email?: string;
    };
  };
}

/**
 * Widget state for managing loading and error states
 */
export interface BookingWidgetState {
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
export const DEFAULT_BOOKING_CONFIG: Partial<BookingCalendarConfig> = {
  displayMode: 'inline',
  height: '700px',
  minHeight: '600px',
  hideCookieBanner: false,
  hideEventTypeDetails: false,
};

/**
 * Maximum number of retry attempts for loading the widget
 */
export const MAX_LOAD_ATTEMPTS = 3;

/**
 * Timeout for widget load (in milliseconds)
 */
export const WIDGET_LOAD_TIMEOUT = 10000;
