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
  webDesign: { slug: 'web-design', name: 'Web Design' },
  webDevelopment: { slug: 'web-development', name: 'Web Development' },
  seo: { slug: 'seo', name: 'SEO' },
  performance: { slug: 'performance', name: 'Performance' },
  security: { slug: 'security', name: 'Security' },
  hosting: { slug: 'hosting', name: 'Hosting' },
  maintenance: { slug: 'maintenance', name: 'Maintenance' },
  smallBusiness: { slug: 'small-business', name: 'Small Business' },
  ecommerce: { slug: 'ecommerce', name: 'E-Commerce' },
  wordpress: { slug: 'wordpress', name: 'WordPress' },
  analytics: { slug: 'analytics', name: 'Analytics' },
  branding: { slug: 'branding', name: 'Branding' },
  mobile: { slug: 'mobile', name: 'Mobile' },
  accessibility: { slug: 'accessibility', name: 'Accessibility' },
  contentStrategy: { slug: 'content-strategy', name: 'Content Strategy' },
  socialMedia: { slug: 'social-media', name: 'Social Media' },
};

/**
 * Downloadable resources
 * Sorted by publishedDate (newest first) when rendered
 */
export const RESOURCES: Resource[] = [
  {
    id: 'complete-website-launch-checklist',
    title: 'Complete Website Launch Checklist',
    description: 'A comprehensive 50-point checklist to ensure your website launch goes smoothly. Covers SEO, performance, security, and user experience.',
    featuredImage: {
      src: '/resources/thumbnails/website-launch-checklist.svg',
      alt: 'Website launch checklist thumbnail with checkmarks',
      width: 400,
      height: 300,
    },
    category: 'checklists',
    tags: [COMMON_RESOURCE_TAGS.webDesign, COMMON_RESOURCE_TAGS.seo, COMMON_RESOURCE_TAGS.performance],
    downloadUrl: '/resources/downloads/website-launch-checklist.pdf',
    format: 'pdf',
    fileSize: '1.2 MB',
    publishedDate: '2024-01-15T09:00:00Z',
    featured: true,
    slug: 'complete-website-launch-checklist',
    downloadCount: 1250,
    relatedResourceIds: ['seo-optimization-guide', 'website-maintenance-schedule'],
  },
  {
    id: 'seo-optimization-guide',
    title: 'SEO Optimization Guide for Small Businesses',
    description: 'Learn the essential SEO strategies to improve your website\'s search engine rankings. Perfect for Houston small business owners.',
    featuredImage: {
      src: '/resources/thumbnails/seo-guide.svg',
      alt: 'SEO optimization guide with search engine icons',
      width: 400,
      height: 300,
    },
    category: 'guides',
    tags: [COMMON_RESOURCE_TAGS.seo, COMMON_RESOURCE_TAGS.smallBusiness, COMMON_RESOURCE_TAGS.contentStrategy],
    downloadUrl: '/resources/downloads/seo-optimization-guide.pdf',
    format: 'pdf',
    fileSize: '3.5 MB',
    publishedDate: '2024-01-10T10:00:00Z',
    featured: true,
    slug: 'seo-optimization-guide',
    downloadCount: 2340,
    relatedResourceIds: ['complete-website-launch-checklist', 'content-planning-template'],
  },
  {
    id: 'website-maintenance-schedule',
    title: 'Annual Website Maintenance Schedule',
    description: 'Keep your website running smoothly with this month-by-month maintenance schedule. Includes tasks for security, backups, and performance.',
    featuredImage: {
      src: '/resources/thumbnails/maintenance-schedule.svg',
      alt: 'Website maintenance calendar schedule',
      width: 400,
      height: 300,
    },
    category: 'maintenance-tips',
    tags: [COMMON_RESOURCE_TAGS.maintenance, COMMON_RESOURCE_TAGS.security, COMMON_RESOURCE_TAGS.performance],
    downloadUrl: '/resources/downloads/website-maintenance-schedule.pdf',
    format: 'pdf',
    fileSize: '890 KB',
    publishedDate: '2024-01-05T08:30:00Z',
    featured: false,
    slug: 'website-maintenance-schedule',
    downloadCount: 876,
    relatedResourceIds: ['security-best-practices', 'complete-website-launch-checklist'],
  },
  {
    id: 'web-hosting-comparison',
    title: 'Web Hosting Comparison Spec Sheet',
    description: 'Compare different web hosting options side-by-side. Includes shared hosting, VPS, dedicated servers, and cloud hosting features.',
    featuredImage: {
      src: '/resources/thumbnails/hosting-comparison.svg',
      alt: 'Web hosting comparison chart',
      width: 400,
      height: 300,
    },
    category: 'spec-sheets',
    tags: [COMMON_RESOURCE_TAGS.hosting, COMMON_RESOURCE_TAGS.performance, COMMON_RESOURCE_TAGS.smallBusiness],
    downloadUrl: '/resources/downloads/web-hosting-comparison.pdf',
    format: 'pdf',
    fileSize: '1.8 MB',
    publishedDate: '2023-12-28T11:00:00Z',
    featured: false,
    slug: 'web-hosting-comparison',
    downloadCount: 654,
    relatedResourceIds: ['website-maintenance-schedule', 'security-best-practices'],
  },
  {
    id: 'security-best-practices',
    title: 'Website Security Best Practices Guide',
    description: 'Protect your website and customer data with these essential security practices. Covers SSL, passwords, backups, and malware prevention.',
    featuredImage: {
      src: '/resources/thumbnails/security-guide.svg',
      alt: 'Website security best practices with lock icon',
      width: 400,
      height: 300,
    },
    category: 'guides',
    tags: [COMMON_RESOURCE_TAGS.security, COMMON_RESOURCE_TAGS.maintenance, COMMON_RESOURCE_TAGS.smallBusiness],
    downloadUrl: '/resources/downloads/security-best-practices.pdf',
    format: 'pdf',
    fileSize: '2.1 MB',
    publishedDate: '2023-12-20T09:00:00Z',
    featured: false,
    slug: 'security-best-practices',
    downloadCount: 1123,
    relatedResourceIds: ['website-maintenance-schedule', 'web-hosting-comparison'],
  },
  {
    id: 'brand-style-guide-template',
    title: 'Brand Style Guide Template',
    description: 'Create a professional brand style guide for your business. Includes sections for logos, colors, typography, and brand voice.',
    featuredImage: {
      src: '/resources/thumbnails/brand-guide-template.svg',
      alt: 'Brand style guide template with color swatches',
      width: 400,
      height: 300,
    },
    category: 'templates',
    tags: [COMMON_RESOURCE_TAGS.branding, COMMON_RESOURCE_TAGS.webDesign, COMMON_RESOURCE_TAGS.smallBusiness],
    downloadUrl: '/resources/downloads/brand-style-guide-template.pdf',
    format: 'pdf',
    fileSize: '4.2 MB',
    publishedDate: '2023-12-15T14:00:00Z',
    featured: false,
    slug: 'brand-style-guide-template',
    downloadCount: 987,
    relatedResourceIds: ['content-planning-template', 'complete-website-launch-checklist'],
  },
  {
    id: 'mobile-optimization-checklist',
    title: 'Mobile Optimization Checklist',
    description: 'Ensure your website performs flawlessly on mobile devices. A 30-point checklist covering responsive design, touch targets, and speed.',
    featuredImage: {
      src: '/resources/thumbnails/mobile-checklist.svg',
      alt: 'Mobile optimization checklist with smartphone icon',
      width: 400,
      height: 300,
    },
    category: 'checklists',
    tags: [COMMON_RESOURCE_TAGS.mobile, COMMON_RESOURCE_TAGS.performance, COMMON_RESOURCE_TAGS.webDesign],
    downloadUrl: '/resources/downloads/mobile-optimization-checklist.pdf',
    format: 'pdf',
    fileSize: '980 KB',
    publishedDate: '2023-12-10T10:30:00Z',
    featured: false,
    slug: 'mobile-optimization-checklist',
    downloadCount: 765,
    relatedResourceIds: ['complete-website-launch-checklist', 'accessibility-guide'],
  },
  {
    id: 'content-planning-template',
    title: 'Content Planning Calendar Template',
    description: 'Plan your website and social media content with this comprehensive editorial calendar. Includes content types, publishing schedules, and tracking.',
    featuredImage: {
      src: '/resources/thumbnails/content-calendar.svg',
      alt: 'Content planning calendar with scheduling icons',
      width: 400,
      height: 300,
    },
    category: 'templates',
    tags: [COMMON_RESOURCE_TAGS.contentStrategy, COMMON_RESOURCE_TAGS.socialMedia, COMMON_RESOURCE_TAGS.smallBusiness],
    downloadUrl: '/resources/downloads/content-planning-template.xlsx',
    format: 'spreadsheet',
    fileSize: '245 KB',
    publishedDate: '2023-12-05T09:00:00Z',
    featured: false,
    slug: 'content-planning-template',
    downloadCount: 1456,
    relatedResourceIds: ['seo-optimization-guide', 'social-media-image-sizes'],
  },
  {
    id: 'accessibility-guide',
    title: 'Web Accessibility Fundamentals',
    description: 'Make your website accessible to all users. Learn about WCAG guidelines, screen readers, color contrast, and keyboard navigation.',
    featuredImage: {
      src: '/resources/thumbnails/accessibility-guide.svg',
      alt: 'Web accessibility guide with universal access symbol',
      width: 400,
      height: 300,
    },
    category: 'educational',
    tags: [COMMON_RESOURCE_TAGS.accessibility, COMMON_RESOURCE_TAGS.webDesign, COMMON_RESOURCE_TAGS.webDevelopment],
    downloadUrl: '/resources/downloads/accessibility-guide.pdf',
    format: 'pdf',
    fileSize: '2.8 MB',
    publishedDate: '2023-11-28T11:00:00Z',
    featured: false,
    slug: 'accessibility-guide',
    downloadCount: 543,
    relatedResourceIds: ['mobile-optimization-checklist', 'complete-website-launch-checklist'],
  },
  {
    id: 'analytics-setup-guide',
    title: 'Google Analytics 4 Setup Guide',
    description: 'Step-by-step instructions for setting up Google Analytics 4 on your website. Includes tracking events, conversions, and custom reports.',
    featuredImage: {
      src: '/resources/thumbnails/analytics-guide.svg',
      alt: 'Google Analytics setup guide with chart icons',
      width: 400,
      height: 300,
    },
    category: 'educational',
    tags: [COMMON_RESOURCE_TAGS.analytics, COMMON_RESOURCE_TAGS.seo, COMMON_RESOURCE_TAGS.smallBusiness],
    downloadUrl: '/resources/downloads/ga4-setup-guide.pdf',
    format: 'pdf',
    fileSize: '3.1 MB',
    publishedDate: '2023-11-20T08:00:00Z',
    featured: false,
    slug: 'analytics-setup-guide',
    downloadCount: 892,
    relatedResourceIds: ['seo-optimization-guide', 'content-planning-template'],
  },
  {
    id: 'ecommerce-platform-comparison',
    title: 'E-Commerce Platform Comparison',
    description: 'Compare Shopify, WooCommerce, BigCommerce, and other platforms. Includes pricing, features, pros/cons, and best use cases.',
    featuredImage: {
      src: '/resources/thumbnails/ecommerce-comparison.svg',
      alt: 'E-commerce platform comparison chart',
      width: 400,
      height: 300,
    },
    category: 'spec-sheets',
    tags: [COMMON_RESOURCE_TAGS.ecommerce, COMMON_RESOURCE_TAGS.smallBusiness, COMMON_RESOURCE_TAGS.webDevelopment],
    downloadUrl: '/resources/downloads/ecommerce-platform-comparison.pdf',
    format: 'pdf',
    fileSize: '2.4 MB',
    publishedDate: '2023-11-15T10:00:00Z',
    featured: false,
    slug: 'ecommerce-platform-comparison',
    downloadCount: 1234,
    relatedResourceIds: ['web-hosting-comparison', 'security-best-practices'],
  },
  {
    id: 'social-media-image-sizes',
    title: 'Social Media Image Size Cheat Sheet',
    description: 'Quick reference guide for all social media platform image dimensions. Covers Facebook, Instagram, LinkedIn, Twitter, and more.',
    featuredImage: {
      src: '/resources/thumbnails/social-media-sizes.svg',
      alt: 'Social media image size reference guide',
      width: 400,
      height: 300,
    },
    category: 'checklists',
    tags: [COMMON_RESOURCE_TAGS.socialMedia, COMMON_RESOURCE_TAGS.branding, COMMON_RESOURCE_TAGS.contentStrategy],
    downloadUrl: '/resources/downloads/social-media-image-sizes.pdf',
    format: 'infographic',
    fileSize: '1.5 MB',
    publishedDate: '2023-11-08T09:30:00Z',
    featured: false,
    slug: 'social-media-image-sizes',
    downloadCount: 2156,
    relatedResourceIds: ['content-planning-template', 'brand-style-guide-template'],
  },
];

/**
 * Section configuration for the resources page
 */
export const RESOURCES_PAGE_CONFIG = {
  /** Main heading for the section */
  heading: 'Resource Library',

  /** Subheading/description text */
  subheading: 'Free guides, templates, and tools to help your business succeed online. Download now and start improving your digital presence.',

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
