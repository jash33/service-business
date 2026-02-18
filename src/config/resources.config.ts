/**
 * Resources Configuration
 *
 * This file contains the configuration for the resource download center including
 * downloadable guides, spec sheets, maintenance tips, and educational content.
 *
 * Instructions for updating:
 * 1. To add new resources, add to the RESOURCES array below
 * 2. Each resource should include all required fields
 * 3. Files should be placed in the /public/resources/ directory
 * 4. Images should be placed in the /public/resources/thumbnails/ directory
 */

import type { Resource, ResourceTag, ResourceFilterOption } from '../types/resources';

/**
 * Common tags used across resources
 */
export const COMMON_RESOURCE_TAGS: Record<string, ResourceTag> = {
  // TODO: Replace with tags relevant to your service business
  tipsAndTricks: { slug: 'tips-and-tricks', name: 'Tips & Tricks' },
  howTo: { slug: 'how-to', name: 'How-To' },
  maintenance: { slug: 'maintenance', name: 'Maintenance' },
  safety: { slug: 'safety', name: 'Safety' },
  seasonal: { slug: 'seasonal', name: 'Seasonal' },
  smallBusiness: { slug: 'small-business', name: 'Small Business' },
  budgeting: { slug: 'budgeting', name: 'Budgeting' },
  diy: { slug: 'diy', name: 'DIY' },
  hiring: { slug: 'hiring', name: 'Hiring a Pro' },
  branding: { slug: 'branding', name: 'Branding' },
  customerService: { slug: 'customer-service', name: 'Customer Service' },
  operations: { slug: 'operations', name: 'Operations' },
};

/**
 * Downloadable resources
 * Sorted by publishedDate (newest first) when rendered
 */
export const RESOURCES: Resource[] = [];

/**
 * Section configuration for the resources page
 */
export const RESOURCES_PAGE_CONFIG = {
  /** Main heading for the section */
  heading: 'Resource Library',

  /** Subheading/description text */
  subheading: 'Free guides, templates, and tools to help your business succeed. Download now and start improving your operations.',

  /** Number of resources per page */
  resourcesPerPage: 9,

  /** Section ID for anchor linking */
  id: 'resources',

  /** Enable filtering by category and format */
  enableFiltering: true,

  /** Enable search functionality */
  enableSearch: true,

  /** Show featured resources prominently */
  showFeaturedFirst: true,
};

/**
 * Helper function to get resources by category
 */
export function getResourcesByCategory(category: string): Resource[] {
  if (category === 'all') return RESOURCES;
  return RESOURCES.filter(resource => resource.category === category);
}

/**
 * Helper function to get resources by format
 */
export function getResourcesByFormat(format: string): Resource[] {
  if (format === 'all') return RESOURCES;
  return RESOURCES.filter(resource => resource.format === format);
}

/**
 * Helper function to get resources by tag
 */
export function getResourcesByTag(tagSlug: string): Resource[] {
  return RESOURCES.filter(resource =>
    resource.tags.some(tag => tag.slug === tagSlug)
  );
}

/**
 * Helper function to get featured resources
 */
export function getFeaturedResources(): Resource[] {
  return RESOURCES.filter(resource => resource.featured);
}

/**
 * Helper function to sort resources by date (newest first)
 */
export function sortResourcesByDate(resources: Resource[]): Resource[] {
  return [...resources].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

/**
 * Helper function to sort resources by downloads (most downloaded first)
 */
export function sortResourcesByDownloads(resources: Resource[]): Resource[] {
  return [...resources].sort((a, b) =>
    (b.downloadCount || 0) - (a.downloadCount || 0)
  );
}

/**
 * Helper function to get all unique tags from resources
 */
export function getAllResourceTags(): ResourceTag[] {
  const tagMap = new Map<string, ResourceTag>();
  RESOURCES.forEach(resource => {
    resource.tags.forEach(tag => {
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, tag);
      }
    });
  });
  return Array.from(tagMap.values());
}

/**
 * Helper function to paginate resources
 */
export function paginateResources(
  resources: Resource[],
  page: number,
  perPage: number
): { resources: Resource[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(resources.length / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    resources: resources.slice(start, end),
    totalPages,
    currentPage,
  };
}

/**
 * Helper function to get resources by ID
 */
export function getResourceById(id: string): Resource | undefined {
  return RESOURCES.find(resource => resource.id === id);
}

/**
 * Helper function to search resources
 */
export function searchResources(query: string): Resource[] {
  const lowercaseQuery = query.toLowerCase();
  return RESOURCES.filter(resource =>
    resource.title.toLowerCase().includes(lowercaseQuery) ||
    resource.description.toLowerCase().includes(lowercaseQuery) ||
    resource.tags.some(tag => tag.name.toLowerCase().includes(lowercaseQuery))
  );
}
