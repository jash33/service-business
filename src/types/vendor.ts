/**
 * Vendor Types
 * Type definitions for vendor directory cards and related components.
 * Used for displaying recommended vendors, suppliers, and service providers
 * with their descriptions and contact information.
 */

/**
 * Social media and web links for a vendor
 */
export interface VendorLinks {
  /** Company website URL */
  website?: string;
  /** LinkedIn company page URL */
  linkedin?: string;
  /** Twitter/X profile URL */
  twitter?: string;
  /** Facebook page URL */
  facebook?: string;
}

/**
 * Contact information for a vendor
 */
export interface VendorContact {
  /** Contact person's name */
  contactName?: string;
  /** Email address */
  email?: string;
  /** Phone number */
  phone?: string;
  /** Physical address */
  address?: string;
}

/**
 * Represents a vendor category for filtering
 */
export interface VendorCategory {
  /** Display label for the category */
  label: string;
  /** URL-friendly value for filtering */
  value: string;
  /** Optional description of the category */
  description?: string;
  /** Icon name for the category (optional) */
  icon?: string;
}

/**
 * Represents a single vendor/supplier/service provider
 */
export interface Vendor {
  /** Unique identifier for the vendor */
  id: string;
  /** Company/vendor name */
  name: string;
  /** Category slug (matches VendorCategory.value) */
  category: string;
  /** Type/role description (e.g., "Web Hosting Provider", "Payment Processor") */
  type: string;
  /** Full description of the vendor and their services */
  description: string;
  /** Company logo URL (relative or absolute path) */
  logo?: string;
  /** Array of services/specializations offered */
  services: string[];
  /** Contact information */
  contact?: VendorContact;
  /** Social/web links */
  links?: VendorLinks;
  /** Whether this is a featured/preferred vendor */
  featured?: boolean;
  /** Optional partnership level (e.g., "Gold Partner", "Certified Reseller") */
  partnershipLevel?: string;
  /** Optional discount or special offer for referrals */
  specialOffer?: string;
}

/**
 * Props for the VendorCard component
 */
export interface VendorCardProps extends Vendor {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the VendorSection component
 */
export interface VendorSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of vendors to display */
  vendors: Vendor[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Whether to show only featured vendors */
  featuredOnly?: boolean;
  /** Category to filter by */
  category?: string;
}

/**
 * Configuration for the vendor directory page
 */
export interface VendorPageConfig {
  /** Main heading for the hero section */
  heroHeading: string;
  /** Subheading for the hero section */
  heroSubheading: string;
  /** Section heading for the vendor grid */
  sectionHeading: string;
  /** Section description */
  sectionDescription: string;
  /** SEO meta description */
  metaDescription: string;
}
