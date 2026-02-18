/**
 * Vendor Directory Configuration
 * Contains vendor/supplier/service provider data for the vendor directory page.
 * This configuration file centralizes all vendor information for recommended
 * partners, suppliers, and complementary service providers.
 */

import type { Vendor, VendorCategory, VendorPageConfig } from '../types/vendor';

/**
 * Vendor directory page configuration
 */
export const VENDOR_PAGE_CONFIG: VendorPageConfig = {
  /** Main heading for the vendor page hero */
  heroHeading: 'Vendor Directory',
  /** Subheading for the vendor page hero */
  heroSubheading: 'Trusted partners and service providers we recommend',
  /** Section heading for the vendor grid */
  sectionHeading: 'Our Partners',
  /** Section description */
  sectionDescription: 'A curated list of vendors, suppliers, and service providers that we trust and recommend.',
  /** SEO meta description */
  metaDescription: 'Explore our directory of recommended vendors, suppliers, and service providers.',
};

/**
 * Vendor categories for filtering
 */
export const VENDOR_CATEGORIES: VendorCategory[] = [
  {
    label: 'All Partners',
    value: 'all',
    description: 'View all vendors and partners',
  },
];

/**
 * Vendor directory data
 * Add, edit, or remove vendors here
 */
export const VENDORS: Vendor[] = [
  // Add vendor entries here
];

/**
 * Get all vendors
 */
export function getAllVendors(): Vendor[] {
  return VENDORS;
}

/**
 * Get featured vendors only
 */
export function getFeaturedVendors(): Vendor[] {
  return VENDORS.filter((vendor) => vendor.featured);
}

/**
 * Get vendors by category
 * @param category - Category value to filter by, or 'all' for all vendors
 */
export function getVendorsByCategory(category: string): Vendor[] {
  if (category === 'all') {
    return VENDORS;
  }
  return VENDORS.filter((vendor) => vendor.category === category);
}

/**
 * Get a vendor by ID
 */
export function getVendorById(id: string): Vendor | undefined {
  return VENDORS.find((vendor) => vendor.id === id);
}

/**
 * Get vendor count by category
 */
export function getVendorCountByCategory(category: string): number {
  return getVendorsByCategory(category).length;
}

/**
 * Get category label by value
 */
export function getCategoryLabel(value: string): string {
  const category = VENDOR_CATEGORIES.find((cat) => cat.value === value);
  return category?.label || value;
}
