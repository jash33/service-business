/**
 * Partner Types
 * Type definitions for partner logos and the partner logos carousel section.
 * Used for displaying trusted partner and supplier logos to build credibility.
 */

/**
 * Represents a single partner logo
 */
export interface PartnerLogo {
  /** Unique identifier for the partner */
  id: string;
  /** Partner company name */
  name: string;
  /** Path to the logo image */
  logoSrc: string;
  /** Optional WebP version of the logo */
  logoSrcWebP?: string;
  /** Alt text for the logo (defaults to "{name} logo" if not provided) */
  alt?: string;
  /** Optional link to the partner's website */
  href?: string;
  /** Width of the logo in pixels (for aspect ratio) */
  width?: number;
  /** Height of the logo in pixels (for aspect ratio) */
  height?: number;
}

/**
 * Props for the PartnerLogosSection component
 */
export interface PartnerLogosSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of partner logos to display */
  logos: PartnerLogo[];
  /** Enable auto-scrolling carousel (default: true) */
  autoScroll?: boolean;
  /** Auto-scroll speed in pixels per second (default: 30) */
  scrollSpeed?: number;
  /** Pause auto-scroll on hover (default: true) */
  pauseOnHover?: boolean;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Configuration for the partner logos section
 */
export interface PartnerLogosConfig {
  /** Section ID */
  id: string;
  /** Section heading */
  heading: string;
  /** Section subheading */
  subheading?: string;
  /** Auto-scroll settings */
  autoScroll: boolean;
  /** Scroll speed in pixels per second */
  scrollSpeed: number;
  /** Pause on hover */
  pauseOnHover: boolean;
}
