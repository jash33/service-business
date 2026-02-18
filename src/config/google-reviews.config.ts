/**
 * Google Reviews Configuration
 * Configuration and sample data for the Google Business Reviews widget.
 *
 * In production, reviews would be fetched from the Google Places API.
 * This configuration provides:
 * - Default widget settings
 * - Sample review data for development/testing
 * - Business rating aggregate information
 *
 * Note: To fetch live reviews, you would need to implement a server-side
 * function or API route that calls the Google Places API, as the API
 * requires an API key that should not be exposed client-side.
 */

import type {
  GoogleReview,
  GoogleBusinessRating,
  GoogleReviewsConfig,
} from '../types/google-review';

/**
 * Google Reviews Widget Configuration
 */
export const GOOGLE_REVIEWS_CONFIG: GoogleReviewsConfig = {
  // Google Place ID for your business
  // Find your Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
  placeId: import.meta.env.PUBLIC_GOOGLE_PLACE_ID || 'YOUR_GOOGLE_PLACE_ID',

  // Minimum rating to display (1-5)
  minRating: 4,

  // Maximum number of reviews to display
  maxReviews: 6,

  // Cache time in seconds (24 hours default)
  cacheTime: 86400,

  // URL to your Google Business Profile
  googleBusinessUrl: import.meta.env.PUBLIC_GOOGLE_BUSINESS_URL || '',
};

/**
 * Section display configuration
 */
export const GOOGLE_REVIEWS_SECTION_CONFIG = {
  id: 'google-reviews',
  heading: 'What Our Customers Say on Google',
  subheading: 'Real reviews from verified customers on Google',
  showGoogleLink: true,
};

/**
 * Business aggregate rating information
 * In production, this would be fetched from the Google Places API
 */
export const BUSINESS_RATING: GoogleBusinessRating = {
  averageRating: 0,
  totalReviews: 0,
  googleBusinessUrl: GOOGLE_REVIEWS_CONFIG.googleBusinessUrl,
};

/**
 * Sample Google Reviews
 * These are sample reviews for development and demonstration.
 * In production, replace with data fetched from Google Places API.
 *
 * To fetch real reviews, you would:
 * 1. Create an API endpoint that calls Google Places API
 * 2. Fetch reviews server-side to protect your API key
 * 3. Cache results according to Google's TOS
 * 4. Transform the response to match GoogleReview interface
 */
export const SAMPLE_GOOGLE_REVIEWS: GoogleReview[] = [];
