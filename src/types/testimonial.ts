/**
 * Testimonial Types
 * Type definitions for testimonial cards and related components.
 * Used for displaying customer quotes, names, and locations to build trust.
 */

/**
 * Represents a single customer testimonial
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string;
  /** Customer's full name */
  name: string;
  /** Customer's location (e.g., "Your City, ST") */
  location: string;
  /** The testimonial quote text */
  quote: string;
  /** Optional company or business name */
  company?: string;
  /** Optional job title or role */
  title?: string;
}

/**
 * Props for the TestimonialCard component
 */
export interface TestimonialCardProps extends Testimonial {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the TestimonialsSection component
 */
export interface TestimonialsSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of testimonials to display */
  testimonials: Testimonial[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}
