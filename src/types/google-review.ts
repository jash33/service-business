/**
 * Google Review Types
 * Type definitions for Google Business reviews aggregator widget.
 * Used for displaying customer reviews from Google Places API.
 */

/**
 * Represents a single Google Business review
 */
export interface GoogleReview {
  /** Unique identifier for the review (from Google API) */
  id: string;
  /** Reviewer's name (or anonymous placeholder) */
  authorName: string;
  /** URL to the reviewer's profile photo */
  profilePhotoUrl?: string;
  /** Star rating (1-5) */
  rating: number;
  /** The review text content */
  text: string;
  /** Relative time description (e.g., "2 weeks ago") */
  relativeTimeDescription: string;
  /** Unix timestamp of when the review was posted */
  time: number;
  /** Direct link to view the full review on Google */
  reviewUrl?: string;
}

/**
 * Aggregate rating information for the business
 */
export interface GoogleBusinessRating {
  /** Overall average rating (1.0-5.0) */
  averageRating: number;
  /** Total number of reviews */
  totalReviews: number;
  /** URL to the Google Business Profile */
  googleBusinessUrl: string;
}

/**
 * Props for the ReviewCard component
 */
export interface ReviewCardProps extends GoogleReview {
  /** Whether to show the full review text or truncate */
  showFullText?: boolean;
  /** Maximum characters before truncating (default: 150) */
  maxTextLength?: number;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the GoogleReviewsSection component
 */
export interface GoogleReviewsSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of reviews to display */
  reviews: GoogleReview[];
  /** Business rating aggregate info */
  businessRating?: GoogleBusinessRating;
  /** Maximum number of reviews to display */
  maxReviews?: number;
  /** Whether to show a link to all Google reviews */
  showGoogleLink?: boolean;
  /** URL to the Google Business Profile reviews page */
  googleReviewsUrl?: string;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Configuration for the Google Reviews widget
 */
export interface GoogleReviewsConfig {
  /** Google Place ID for the business */
  placeId: string;
  /** Minimum rating to display (1-5, default: 1 = show all) */
  minRating?: number;
  /** Maximum number of reviews to fetch/display */
  maxReviews?: number;
  /** How often to refresh reviews in seconds (for caching) */
  cacheTime?: number;
  /** URL to the Google Business Profile */
  googleBusinessUrl: string;
}
