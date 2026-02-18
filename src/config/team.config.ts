/**
 * Team Configuration
 * Contains team member data for the team page.
 * This configuration file centralizes all team member information.
 */

import type { TeamMember } from '../types/team';

/**
 * Team page configuration
 */
export const TEAM_PAGE_CONFIG = {
  /** Main heading for the team page hero */
  heroHeading: 'Meet Our Team',
  /** Subheading for the team page hero */
  heroSubheading: 'The talented people behind our success',
  /** Section heading for the team grid */
  sectionHeading: 'Our Experts',
  /** Section description */
  sectionDescription: 'Every member of our team brings unique skills and passion to help your business succeed.',
};

/**
 * Team members data
 * Add, edit, or remove team members here
 */
export const TEAM_MEMBERS: TeamMember[] = [];

/**
 * Get featured team members only
 */
export function getFeaturedTeamMembers(): TeamMember[] {
  return TEAM_MEMBERS.filter((member) => member.featured);
}

/**
 * Get a team member by ID
 */
export function getTeamMemberById(id: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((member) => member.id === id);
}
