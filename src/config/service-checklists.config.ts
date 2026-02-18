/**
 * Service Checklists Configuration
 *
 * This file contains the configuration for downloadable service preparation checklists
 * and maintenance guides. These are gated content items that generate email leads.
 *
 * Instructions for updating:
 * 1. To add new checklists, add to the SERVICE_CHECKLISTS array below
 * 2. Each checklist should include all required fields
 * 3. PDF files should be placed in /public/resources/downloads/checklists/
 * 4. Thumbnails should be placed in /public/resources/thumbnails/checklists/
 */

import type {
  ServiceChecklist,
  ChecklistTag,
  ChecklistFilterOption,
} from '../types/service-checklist';

/**
 * Common tags used across checklists
 */
export const COMMON_CHECKLIST_TAGS: Record<string, ChecklistTag> = {
  // TODO: Replace with tags relevant to your service business
  preparation: { slug: 'preparation', name: 'Preparation' },
  maintenance: { slug: 'maintenance', name: 'Maintenance' },
  safety: { slug: 'safety', name: 'Safety' },
  seasonal: { slug: 'seasonal', name: 'Seasonal' },
  smallBusiness: { slug: 'small-business', name: 'Small Business' },
  budgeting: { slug: 'budgeting', name: 'Budgeting' },
  scheduling: { slug: 'scheduling', name: 'Scheduling' },
  qualityControl: { slug: 'quality-control', name: 'Quality Control' },
  customerService: { slug: 'customer-service', name: 'Customer Service' },
  operations: { slug: 'operations', name: 'Operations' },
};

/**
 * Service Checklists
 * Sorted by publishedDate (newest first) when rendered
 */
export const SERVICE_CHECKLISTS: ServiceChecklist[] = [];

/**
 * Page configuration for the service checklists section
 */
export const SERVICE_CHECKLISTS_PAGE_CONFIG = {
  /** Main heading */
  heading: 'Service Checklists & Guides',
  /** Subheading/description */
  subheading: 'Download our free preparation checklists and maintenance guides. Get expert guidance for your next project.',
  /** Number of checklists per page */
  checklistsPerPage: 6,
  /** Section ID for anchor linking */
  id: 'service-checklists',
  /** Enable filtering */
  enableFiltering: true,
  /** Show featured first */
  showFeaturedFirst: true,
  /** CTA for gated content */
  gatedContentCTA: {
    heading: 'Get the Full Checklist',
    description: 'Enter your email to download the complete checklist with all items, printable format, and bonus tips.',
    buttonText: 'Download Now',
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all checklists
 */
export function getAllChecklists(): ServiceChecklist[] {
  return SERVICE_CHECKLISTS;
}

/**
 * Get a single checklist by ID
 */
export function getChecklistById(id: string): ServiceChecklist | undefined {
  return SERVICE_CHECKLISTS.find(checklist => checklist.id === id);
}

/**
 * Get a single checklist by slug
 */
export function getChecklistBySlug(slug: string): ServiceChecklist | undefined {
  return SERVICE_CHECKLISTS.find(checklist => checklist.slug === slug);
}

/**
 * Get checklists by category
 */
export function getChecklistsByCategory(category: string): ServiceChecklist[] {
  if (category === 'all') return SERVICE_CHECKLISTS;
  return SERVICE_CHECKLISTS.filter(checklist => checklist.category === category);
}

/**
 * Get checklists by service type
 */
export function getChecklistsByServiceType(serviceType: string): ServiceChecklist[] {
  if (serviceType === 'all') return SERVICE_CHECKLISTS;
  return SERVICE_CHECKLISTS.filter(checklist => checklist.serviceType === serviceType);
}

/**
 * Get featured checklists
 */
export function getFeaturedChecklists(): ServiceChecklist[] {
  return SERVICE_CHECKLISTS.filter(checklist => checklist.featured);
}

/**
 * Sort checklists by date (newest first)
 */
export function sortChecklistsByDate(checklists: ServiceChecklist[]): ServiceChecklist[] {
  return [...checklists].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

/**
 * Sort checklists by downloads (most popular first)
 */
export function sortChecklistsByDownloads(checklists: ServiceChecklist[]): ServiceChecklist[] {
  return [...checklists].sort((a, b) =>
    (b.downloadCount || 0) - (a.downloadCount || 0)
  );
}

/**
 * Get total items in a checklist
 */
export function getChecklistTotalItems(checklist: ServiceChecklist): number {
  if (checklist.totalItems) return checklist.totalItems;
  return checklist.sections.reduce((total, section) => total + section.items.length, 0);
}

/**
 * Get all unique tags from checklists
 */
export function getAllChecklistTags(): ChecklistTag[] {
  const tagMap = new Map<string, ChecklistTag>();
  SERVICE_CHECKLISTS.forEach(checklist => {
    checklist.tags.forEach(tag => {
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, tag);
      }
    });
  });
  return Array.from(tagMap.values());
}

/**
 * Paginate checklists
 */
export function paginateChecklists(
  checklists: ServiceChecklist[],
  page: number,
  perPage: number
): { checklists: ServiceChecklist[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(checklists.length / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    checklists: checklists.slice(start, end),
    totalPages,
    currentPage,
  };
}

/**
 * Get related checklists
 */
export function getRelatedChecklists(checklist: ServiceChecklist): ServiceChecklist[] {
  if (!checklist.relatedChecklistIds || checklist.relatedChecklistIds.length === 0) {
    return [];
  }
  return checklist.relatedChecklistIds
    .map(id => getChecklistById(id))
    .filter((c): c is ServiceChecklist => c !== undefined);
}
