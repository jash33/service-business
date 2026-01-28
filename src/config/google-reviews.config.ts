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
  googleBusinessUrl: import.meta.env.PUBLIC_GOOGLE_BUSINESS_URL ||
    'https://g.page/houston-web-services',
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
  averageRating: 4.9,
  totalReviews: 47,
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
export const SAMPLE_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'review-1',
    authorName: 'Michael Thompson',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/default-user',
    rating: 5,
    text: 'Absolutely fantastic experience working with Houston Web Services! They took our outdated website and transformed it into a modern, fast-loading site that our customers love. The attention to detail was impressive, and they were always responsive to our questions.',
    relativeTimeDescription: '2 weeks ago',
    time: 1737849600, // Fixed timestamp for build stability
    reviewUrl: 'https://g.page/houston-web-services/review',
  },
  {
    id: 'review-2',
    authorName: 'Jennifer Garcia',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/default-user',
    rating: 5,
    text: 'Best web design company in Houston! They understood exactly what our small business needed and delivered beyond expectations. Our new website has already brought in more leads than we ever expected. Highly recommend!',
    relativeTimeDescription: '1 month ago',
    time: 1736467200, // Fixed timestamp for build stability
    reviewUrl: 'https://g.page/houston-web-services/review',
  },
  {
    id: 'review-3',
    authorName: 'Robert Williams',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/default-user',
    rating: 5,
    text: 'Professional, reliable, and affordable. They built us a beautiful website that perfectly represents our brand. The ongoing maintenance support has been invaluable - I never have to worry about technical issues.',
    relativeTimeDescription: '1 month ago',
    time: 1736035200, // Fixed timestamp for build stability
    reviewUrl: 'https://g.page/houston-web-services/review',
  },
  {
    id: 'review-4',
    authorName: 'Lisa Chen',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/default-user',
    rating: 5,
    text: 'Working with a local Houston business was exactly what we needed. They understand the local market and helped us target our ideal customers. The SEO work they did has our site ranking on the first page for our key services.',
    relativeTimeDescription: '2 months ago',
    time: 1733875200, // Fixed timestamp for build stability
    reviewUrl: 'https://g.page/houston-web-services/review',
  },
  {
    id: 'review-5',
    authorName: 'David Martinez',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/default-user',
    rating: 4,
    text: 'Great experience overall. The website looks amazing and works perfectly on mobile. Communication was excellent throughout the project. Only reason for 4 stars is that the project took slightly longer than initially estimated, but the quality made up for it.',
    relativeTimeDescription: '2 months ago',
    time: 1733443200, // Fixed timestamp for build stability
    reviewUrl: 'https://g.page/houston-web-services/review',
  },
  {
    id: 'review-6',
    authorName: 'Amanda Rodriguez',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/default-user',
    rating: 5,
    text: 'I cannot say enough good things about Houston Web Services! From start to finish, they made the entire process easy and stress-free. My new website has gotten so many compliments from customers. Thank you!',
    relativeTimeDescription: '3 months ago',
    time: 1731283200, // Fixed timestamp for build stability
    reviewUrl: 'https://g.page/houston-web-services/review',
  },
];
