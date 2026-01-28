/**
 * Accreditation Badges Configuration
 *
 * This file contains the configuration for industry accreditation badges displayed
 * on the homepage and other pages. These badges showcase certifications, BBB accreditation,
 * chamber of commerce membership, and insurance verification with clickable verification links.
 *
 * Instructions for updating:
 * 1. To add/modify badges, update the ACCREDITATION_BADGES array below
 * 2. Each badge should include all required fields (id, title, category)
 * 3. Add verificationUrl for clickable verification links
 * 4. Categories available: 'certification', 'license', 'insurance', 'award', 'membership'
 * 5. Custom images should be placed in the /public/images/badges/ directory
 */

import type { TrustBadge } from '../types/trust-badge';

/**
 * SVG icons for accreditation badges
 * Using inline SVGs for optimal performance and styling flexibility
 */
const badgeIcons = {
  /** BBB (Better Business Bureau) torch icon */
  bbb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.5 8.5H3l5.5 4-2 7 5.5-4 5.5 4-2-7 5.5-4h-6.5L12 2zM12 5.5l1.5 4h4.5l-3.5 2.5 1.25 4.5-3.75-2.75-3.75 2.75 1.25-4.5-3.5-2.5h4.5l1.5-4z"/></svg>`,

  /** Chamber of Commerce building icon */
  chamber: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>`,

  /** Insurance shield with checkmark icon */
  insurance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,

  /** Industry certification badge icon */
  certification: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,

  /** License/permit document icon */
  license: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`,

  /** Professional association handshake icon */
  professional: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.22 2H2v10.22l9.78 9.78L22 11.78 12.22 2zM6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10.29 4.29l-4.01 4.01-2.83-2.83 1.41-1.41 1.42 1.41 2.6-2.59 1.41 1.41z"/></svg>`,
};

/**
 * Accreditation badges to display
 * These showcase industry credentials and trust signals
 */
export const ACCREDITATION_BADGES: TrustBadge[] = [
  {
    id: 'bbb-accredited',
    title: 'BBB Accredited Business',
    description: 'A+ Rating with the Better Business Bureau',
    icon: badgeIcons.bbb,
    issuer: 'Better Business Bureau',
    year: '2024',
    verificationUrl: 'https://www.bbb.org/us/tx/houston',
    category: 'certification',
  },
  {
    id: 'houston-chamber',
    title: 'Chamber Member',
    description: 'Proud member of the Greater Houston Partnership',
    icon: badgeIcons.chamber,
    issuer: 'Greater Houston Partnership',
    year: '2024',
    verificationUrl: 'https://www.houston.org/',
    category: 'membership',
  },
  {
    id: 'fully-insured',
    title: 'Fully Insured',
    description: 'General liability and professional liability coverage',
    icon: badgeIcons.insurance,
    issuer: 'Verified Coverage',
    year: '2024',
    verificationUrl: '#', // Placeholder - update with actual verification link
    category: 'insurance',
  },
  {
    id: 'google-certified',
    title: 'Google Partner',
    description: 'Certified in Google Analytics and web best practices',
    icon: badgeIcons.certification,
    issuer: 'Google',
    year: '2024',
    verificationUrl: 'https://www.google.com/partners/',
    category: 'certification',
  },
];

/**
 * Section configuration for the accreditation badges section
 * Customize the heading, subheading, and layout options
 */
export const ACCREDITATION_BADGES_CONFIG = {
  /** Main heading for the section */
  heading: 'Credentials & Accreditations',

  /** Subheading/description text */
  subheading: 'Our commitment to professionalism, trust, and industry best practices is backed by recognized certifications and memberships.',

  /** Section ID for anchor linking */
  id: 'accreditations',

  /** Number of columns for the grid (3-6) */
  columns: 4 as const,

  /** Layout style: 'grid' or 'inline' */
  layout: 'grid' as const,
};
