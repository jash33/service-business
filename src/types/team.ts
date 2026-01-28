/**
 * Team Types
 * Type definitions for team member cards and related components.
 * Used for displaying staff bios, photos, specializations, and contact information.
 */

/**
 * Social media links for a team member
 */
export interface TeamMemberSocial {
  /** LinkedIn profile URL */
  linkedin?: string;
  /** Twitter/X profile URL */
  twitter?: string;
  /** GitHub profile URL */
  github?: string;
  /** Personal website URL */
  website?: string;
}

/**
 * Represents a single team member
 */
export interface TeamMember {
  /** Unique identifier for the team member */
  id: string;
  /** Team member's full name */
  name: string;
  /** Job title or role (e.g., "Senior Developer", "Lead Designer") */
  role: string;
  /** Brief biography/description of the team member */
  bio: string;
  /** Profile photo URL (relative or absolute path) */
  photo?: string;
  /** Array of specializations/skills (e.g., ["React", "Node.js", "UI Design"]) */
  specializations: string[];
  /** Email address for contact */
  email?: string;
  /** Phone number for contact */
  phone?: string;
  /** Social media profile links */
  social?: TeamMemberSocial;
  /** Years of experience in the field */
  yearsExperience?: number;
  /** Professional certifications */
  certifications?: string[];
  /** Whether this is a featured/highlighted team member */
  featured?: boolean;
}

/**
 * Props for the TeamMemberCard component
 */
export interface TeamMemberCardProps extends TeamMember {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the TeamSection component (if creating a reusable section)
 */
export interface TeamSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of team members to display */
  members: TeamMember[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Whether to show only featured members */
  featuredOnly?: boolean;
}
