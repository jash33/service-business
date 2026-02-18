/**
 * Featured Projects Configuration
 *
 * This file contains the configuration for the featured projects displayed
 * on the homepage. Update this file to change which projects are featured
 * without modifying component code.
 *
 * Instructions for updating:
 * 1. To change featured projects, modify the FEATURED_PROJECTS array below
 * 2. Each project should include all required fields (id, title, description, thumbnail, technologies, category)
 * 3. Recommended: Display 2-3 projects for optimal visual balance
 * 4. Images should be placed in the /public/portfolio/ directory
 * 5. Use WebP format for better performance when available
 */

import type { Project } from '../types/portfolio';

/**
 * Featured projects to display on the homepage
 * These are a curated selection of the best work to showcase immediately to visitors
 */
export const FEATURED_PROJECTS: Project[] = [];

/**
 * Section configuration for the featured projects preview
 * Customize the heading, subheading, and CTA text/link
 */
export const FEATURED_PROJECTS_CONFIG = {
  /** Main heading for the section */
  heading: 'Featured Work',

  /** Subheading/description text */
  subheading: 'Explore some of our recent projects that showcase our expertise and quality of work.',

  /** Text for the "View All" call-to-action button */
  viewAllText: 'View All Projects',

  /** URL for the "View All" call-to-action button */
  viewAllHref: '/portfolio',

  /** Section ID for anchor linking */
  id: 'featured-projects',
};
