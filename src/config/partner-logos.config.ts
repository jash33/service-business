/**
 * Partner Logos Configuration
 *
 * This file contains the configuration for the partner logos carousel displayed
 * on the homepage. These logos showcase trusted partners and suppliers to build
 * credibility through brand association.
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
 * These showcase trusted partners and industry relationships
 *
 * Note: Replace placeholder logos with actual partner logos
 * Logo images should be placed in /public/images/partners/
 */
export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: 'partner-google',
    name: 'Google',
    logoSrc: '/images/partners/google-logo.svg',
    href: 'https://www.google.com/partners/',
    width: 160,
    height: 60,
  },
  {
    id: 'partner-cloudflare',
    name: 'Cloudflare',
    logoSrc: '/images/partners/cloudflare-logo.svg',
    href: 'https://www.cloudflare.com/',
    width: 160,
    height: 60,
  },
  {
    id: 'partner-wordpress',
    name: 'WordPress',
    logoSrc: '/images/partners/wordpress-logo.svg',
    href: 'https://wordpress.org/',
    width: 160,
    height: 60,
  },
  {
    id: 'partner-shopify',
    name: 'Shopify',
    logoSrc: '/images/partners/shopify-logo.svg',
    href: 'https://www.shopify.com/partners',
    width: 160,
    height: 60,
  },
  {
    id: 'partner-wix',
    name: 'Wix',
    logoSrc: '/images/partners/wix-logo.svg',
    href: 'https://www.wix.com/',
    width: 160,
    height: 60,
  },
  {
    id: 'partner-squarespace',
    name: 'Squarespace',
    logoSrc: '/images/partners/squarespace-logo.svg',
    href: 'https://www.squarespace.com/',
    width: 160,
    height: 60,
  },
];

/**
 * Section configuration for the partner logos section
 * Customize the heading, subheading, and carousel options
 */
export const PARTNER_LOGOS_CONFIG: PartnerLogosConfig = {
  /** Section ID for anchor linking */
  id: 'partners',

  /** Main heading for the section */
  heading: 'Trusted Technology Partners',

  /** Subheading/description text */
  subheading: 'We work with industry-leading platforms and technologies to deliver the best solutions for your business.',

  /** Enable auto-scrolling carousel */
  autoScroll: true,

  /** Scroll speed in pixels per second */
  scrollSpeed: 30,

  /** Pause scrolling on hover */
  pauseOnHover: true,
};
