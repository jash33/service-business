/**
 * Trust Badge Types
 * Type definitions for trust badges and related components.
 * Used for showcasing industry certifications, licenses, insurance badges, and awards.
 */

/**
 * Badge category types for filtering and styling
 */
export type TrustBadgeCategory = 'certification' | 'license' | 'insurance' | 'award' | 'membership' | 'bonding';

/**
 * Verification status for licenses and insurance
 */
export type VerificationStatus = 'verified' | 'pending' | 'expired' | 'not_verified';

/**
 * Represents a single trust badge/credential
 */
export interface TrustBadge {
  /** Unique identifier for the badge */
  id: string;
  /** Badge/credential title (e.g., "BBB Accredited", "Licensed & Insured") */
  title: string;
  /** Brief description of the credential */
  description?: string;
  /** SVG icon content (raw SVG string) */
  icon?: string;
  /** Image URL for badge logo (alternative to icon) */
  imageUrl?: string;
  /** Alt text for image (required if imageUrl is provided) */
  imageAlt?: string;
  /** Issuing organization (e.g., "Better Business Bureau") */
  issuer?: string;
  /** Year the credential was obtained */
  year?: string;
  /** External verification URL */
  verificationUrl?: string;
  /** Category of the badge for styling/filtering */
  category?: TrustBadgeCategory;
}

/**
 * Extended license/insurance/bonding credential with detailed verification information
 */
export interface LicenseInsuranceCredential {
  /** Unique identifier for the credential */
  id: string;
  /** Credential title (e.g., "General Contractor License", "Liability Insurance") */
  title: string;
  /** Type of credential */
  type: 'license' | 'insurance' | 'bonding';
  /** Brief description of what the credential covers */
  description?: string;
  /** SVG icon content (raw SVG string) */
  icon?: string;
  /** License/policy number (partially masked for security if needed) */
  credentialNumber?: string;
  /** Issuing organization or insurance provider */
  issuer: string;
  /** State or jurisdiction where valid */
  jurisdiction?: string;
  /** Issue date (ISO string or display string) */
  issueDate?: string;
  /** Expiration date (ISO string or display string) */
  expirationDate?: string;
  /** Coverage amount for insurance/bonding (e.g., "$1,000,000") */
  coverageAmount?: string;
  /** Current verification status */
  verificationStatus: VerificationStatus;
  /** External verification URL */
  verificationUrl?: string;
  /** Additional notes or coverage details */
  notes?: string;
}

/**
 * Props for the LicenseInsuranceCard component
 */
export interface LicenseInsuranceCardProps extends LicenseInsuranceCredential {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the LicenseInsuranceSection component
 */
export interface LicenseInsuranceSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of credentials to display */
  credentials: LicenseInsuranceCredential[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Number of columns for the grid (defaults to 3) */
  columns?: 2 | 3 | 4;
}

/**
 * Props for the TrustBadgeCard component
 */
export interface TrustBadgeCardProps extends TrustBadge {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the TrustBadgesSection component
 */
export interface TrustBadgesSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of trust badges to display */
  badges: TrustBadge[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Number of columns for the grid (defaults to 4) */
  columns?: 3 | 4 | 5 | 6;
  /** Display style: 'grid' for uniform cards, 'inline' for horizontal scroll */
  layout?: 'grid' | 'inline';
}
