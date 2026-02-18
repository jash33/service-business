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
 * Partner logos to display in the carousel
 *
 * Add your partner logos here. Example entry:
 * {
 *   id: 'partner-example',
 *   name: 'Example Partner',
 *   logoSrc: '/images/partners/example-logo.svg',
 *   href: 'https://www.example.com/',
 *   width: 160,
 *   height: 60,
 * }
 */
export const PARTNER_LOGOS: PartnerLogo[] = [];

/**
 * Section configuration for the partner logos section
 * Customize the heading, subheading, and carousel options
 */
export const PARTNER_LOGOS_CONFIG: PartnerLogosConfig = {
  /** Section ID for anchor linking */
  id: 'partners',

  /** Main heading for the section */
  heading: 'Our Partners',

  /** Subheading/description text */
  subheading: '',

  /** Enable auto-scrolling carousel */
  autoScroll: true,

  /** Scroll speed in pixels per second */
  scrollSpeed: 30,

  /** Pause scrolling on hover */
  pauseOnHover: true,
};
