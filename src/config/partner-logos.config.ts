/**
 * Partner Logos Configuration
 *
 * This file contains the configuration for the partner logos carousel displayed
 * on the homepage. Add your partner/client logos here to build credibility
 * through brand association.
 *
 * Instructions for updating:
 * 1. To add/modify logos, update the PARTNER_LOGOS array below
 * 2. Each logo should include all required fields (id, name, logoSrc)
 * 3. Logo images should be placed in the /public/images/partners/ directory
 * 4. Recommended logo dimensions: 200x80 pixels (or similar aspect ratio)
 * 5. Use transparent PNG or SVG format for best results
 * 6. For best appearance, use horizontal/landscape oriented logos
 */

import type { PartnerLogo, PartnerLogosConfig } from '../types/partner';

/**
 * Partner/Brand logos to display in the carousel
 *
 * HVAC manufacturer brands we service - builds trust with customers
 * by showing we work with recognized industry names.
 */
export const PARTNER_LOGOS: PartnerLogo[] = [
  // Reordered for color variety: blue, red, green, orange, blue, red
  {
    id: 'brand-carrier',
    name: 'Carrier',
    logoSrc: '/service-business/images/brands/carrier.svg',
    width: 200,
    height: 80,
  },
  {
    id: 'brand-trane',
    name: 'Trane',
    logoSrc: '/service-business/images/brands/trane.svg',
    width: 200,
    height: 80,
  },
  {
    id: 'brand-goodman',
    name: 'Goodman',
    logoSrc: '/service-business/images/brands/goodman.svg',
    width: 200,
    height: 80,
  },
  {
    id: 'brand-york',
    name: 'York',
    logoSrc: '/service-business/images/brands/york.svg',
    width: 200,
    height: 80,
  },
  {
    id: 'brand-lennox',
    name: 'Lennox',
    logoSrc: '/service-business/images/brands/lennox.svg',
    width: 200,
    height: 80,
  },
  {
    id: 'brand-rheem',
    name: 'Rheem',
    logoSrc: '/service-business/images/brands/rheem.svg',
    width: 200,
    height: 80,
  },
];

/**
 * Section configuration for the partner logos section
 * Customize the heading, subheading, and carousel options
 */
export const PARTNER_LOGOS_CONFIG: PartnerLogosConfig = {
  /** Section ID for anchor linking */
  id: 'brands-we-service',

  /** Main heading for the section */
  heading: 'Brands We Service',

  /** Subheading/description text */
  subheading: 'Factory-trained technicians certified to repair and maintain all major HVAC brands',

  /** Enable auto-scrolling carousel */
  autoScroll: true,

  /** Scroll speed in pixels per second */
  scrollSpeed: 40,

  /** Pause scrolling on hover */
  pauseOnHover: true,
};
