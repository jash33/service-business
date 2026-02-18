/**
 * License & Insurance Credentials Configuration
 *
 * This file contains the configuration for business licenses, insurance certificates,
 * and bonding information displayed on the website. These credentials demonstrate
 * compliance, professionalism, and protection for customers.
 *
 * Instructions for updating:
 * 1. To add/modify credentials, update the CREDENTIALS array below
 * 2. Each credential should include all required fields (id, title, type, issuer, verificationStatus)
 * 3. Add verificationUrl for clickable verification links to official sources
 * 4. Types available: 'license', 'insurance', 'bonding'
 * 5. Verification statuses: 'verified', 'pending', 'expired', 'not_verified'
 * 6. Update expiration dates regularly to keep information current
 * 7. Coverage amounts should be formatted as currency strings (e.g., "$1,000,000")
 *
 * IMPORTANT: Keep this information accurate and up-to-date.
 * Displaying false or outdated credential information may have legal implications.
 */

import type { LicenseInsuranceCredential } from '../types/trust-badge';

/**
 * SVG icons for credential types
 * Using inline SVGs for optimal performance and styling flexibility
 */
const credentialIcons = {
  /** Business license document icon */
  businessLicense: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-9.18-6.95L7.4 14.46 10.94 18l5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z"/></svg>`,

  /** Professional license with checkmark */
  professionalLicense: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,

  /** Liability insurance shield icon */
  liabilityInsurance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,

  /** Workers compensation icon */
  workersComp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/></svg>`,

  /** Surety bond lock icon */
  suretyBond: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`,

  /** Professional errors & omissions */
  professionalLiability: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
};

/**
 * Business licenses, insurance certificates, and bonding credentials
 *
 * Update this array with your actual business credentials.
 * Remove or modify sample data as needed.
 */
export const CREDENTIALS: LicenseInsuranceCredential[] = [
  // Add your business credentials here. Example:
  // {
  //   id: 'business-license',
  //   title: 'Business License',
  //   type: 'license',
  //   description: 'Description of your license.',
  //   icon: credentialIcons.businessLicense,
  //   credentialNumber: 'YOUR-LICENSE-NUMBER',
  //   issuer: 'Issuing Authority',
  //   jurisdiction: 'Your City, State',
  //   issueDate: 'YYYY-MM-DD',
  //   expirationDate: 'YYYY-MM-DD',
  //   verificationStatus: 'verified',
  //   verificationUrl: 'https://verification-url.example.com',
  // },
];

/**
 * Section configuration for the license & insurance credentials section
 * Customize the heading, subheading, and layout options
 */
export const LICENSE_INSURANCE_CONFIG = {
  /** Main heading for the section */
  heading: 'Licensed, Insured & Protected',

  /** Subheading/description text */
  subheading: 'Your peace of mind is our priority. We maintain current licenses and comprehensive insurance coverage to protect you and your project.',

  /** Section ID for anchor linking */
  id: 'license-insurance',

  /** Number of columns for the grid (2-4) */
  columns: 3 as const,
};

/**
 * Helper function to check if any credentials are expiring soon
 * Useful for admin notifications
 */
export function getExpiringCredentials(daysThreshold: number = 90): LicenseInsuranceCredential[] {
  const now = new Date();
  return CREDENTIALS.filter(credential => {
    if (!credential.expirationDate) return false;
    const expDate = new Date(credential.expirationDate);
    const daysUntilExpiration = Math.floor((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiration > 0 && daysUntilExpiration <= daysThreshold;
  });
}

/**
 * Helper function to check if any credentials have expired
 * Useful for admin notifications
 */
export function getExpiredCredentials(): LicenseInsuranceCredential[] {
  const now = new Date();
  return CREDENTIALS.filter(credential => {
    if (!credential.expirationDate) return false;
    const expDate = new Date(credential.expirationDate);
    return expDate < now;
  });
}
