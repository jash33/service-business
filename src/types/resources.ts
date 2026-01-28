/**
 * Resource Types
 * Type definitions for the resource download center, including guides,
 * spec sheets, maintenance tips, and educational content.
 */

/**
 * Resource category for organizing resources
 */
export type ResourceCategory =
  | 'guides'
  | 'spec-sheets'
  | 'maintenance-tips'
  | 'educational'
  | 'checklists'
  | 'templates';

/**
 * Resource file format/type
 */
export type ResourceFormat = 'pdf' | 'video' | 'spreadsheet' | 'document' | 'checklist' | 'infographic';

/**
 * Resource tag for classification
 */
export interface ResourceTag {
  /** Tag slug/identifier */
  slug: string;
  /** Display name */
  name: string;
}

/**
 * Image configuration for resources
 */
export interface ResourceImage {
  /** Main image source */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Width for aspect ratio */
  width?: number;
  /** Height for aspect ratio */
  height?: number;
}

/**
 * Represents a single downloadable resource
 */
export interface Resource {
  /** Unique identifier for the resource */
  id: string;
  /** Resource title */
  title: string;
  /** Brief description (1-2 sentences) */
  description: string;
  /** Full description (HTML supported) */
  longDescription?: string;
  /** Thumbnail/cover image */
  featuredImage: ResourceImage;
  /** Resource category */
  category: ResourceCategory;
  /** Array of tags */
  tags: ResourceTag[];
  /** Download URL */
  downloadUrl: string;
  /** File format */
  format: ResourceFormat;
  /** File size (e.g., "2.5 MB") */
  fileSize: string;
  /** Publication date (ISO 8601 format) */
  publishedDate: string;
  /** Last updated date (ISO 8601 format) */
  updatedDate?: string;
  /** Whether this is a featured resource */
  featured?: boolean;
  /** URL slug for the resource */
  slug: string;
  /** Number of downloads (for display) */
  downloadCount?: number;
  /** IDs of related resources */
  relatedResourceIds?: string[];
}

/**
 * Props for the ResourceCard component
 */
export interface ResourceCardProps extends Resource {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Filter option for resource filtering
 */
export interface ResourceFilterOption {
  /** Display label */
  label: string;
  /** Filter value */
  value: string;
  /** Number of resources matching this filter */
  count?: number;
}

/**
 * Props for the ResourceFilter component
 */
export interface ResourceFilterProps {
  /** Available categories to filter by */
  categories: ResourceFilterOption[];
  /** Available formats to filter by */
  formats?: ResourceFilterOption[];
  /** Available tags to filter by */
  tags?: ResourceFilterOption[];
  /** Currently selected category */
  selectedCategory?: string;
  /** Currently selected format */
  selectedFormat?: string;
  /** Currently selected tags */
  selectedTags?: string[];
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the ResourceSearch component
 */
export interface ResourceSearchProps {
  /** Current search query */
  query?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the ResourcePagination component
 */
export interface ResourcePaginationProps {
  /** Current page number (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Base URL for pagination links */
  baseUrl: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Available resource categories with labels
 */
export const RESOURCE_CATEGORIES: ResourceFilterOption[] = [
  { label: 'All Resources', value: 'all' },
  { label: 'Guides', value: 'guides' },
  { label: 'Spec Sheets', value: 'spec-sheets' },
  { label: 'Maintenance Tips', value: 'maintenance-tips' },
  { label: 'Educational', value: 'educational' },
  { label: 'Checklists', value: 'checklists' },
  { label: 'Templates', value: 'templates' },
];

/**
 * Available resource formats with labels
 */
export const RESOURCE_FORMATS: ResourceFilterOption[] = [
  { label: 'All Formats', value: 'all' },
  { label: 'PDF', value: 'pdf' },
  { label: 'Video', value: 'video' },
  { label: 'Spreadsheet', value: 'spreadsheet' },
  { label: 'Document', value: 'document' },
  { label: 'Checklist', value: 'checklist' },
  { label: 'Infographic', value: 'infographic' },
];

/**
 * Format icons mapping
 */
export const FORMAT_ICONS: Record<ResourceFormat, string> = {
  pdf: 'file-text',
  video: 'play-circle',
  spreadsheet: 'table',
  document: 'file',
  checklist: 'check-square',
  infographic: 'image',
};

/**
 * Format labels mapping
 */
export const FORMAT_LABELS: Record<ResourceFormat, string> = {
  pdf: 'PDF',
  video: 'Video',
  spreadsheet: 'Spreadsheet',
  document: 'Document',
  checklist: 'Checklist',
  infographic: 'Infographic',
};
