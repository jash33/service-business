/**
 * Service Checklist Types
 * Type definitions for downloadable service preparation checklists and maintenance guides.
 * Implements gated content functionality for lead generation through email capture.
 */

/**
 * Checklist category for organization
 */
export type ChecklistCategory =
  | 'preparation'
  | 'maintenance'
  | 'launch'
  | 'troubleshooting'
  | 'security'
  | 'optimization';

/**
 * Service type the checklist relates to
 */
export type ServiceType =
  | 'service-one'
  | 'service-two'
  | 'service-three'
  | 'maintenance'
  | 'general';

/**
 * Individual checklist item
 */
export interface ChecklistItem {
  /** Unique identifier for the item */
  id: string;
  /** Main text of the checklist item */
  text: string;
  /** Optional detailed description */
  description?: string;
  /** Optional priority level (1-3, 1 being highest) */
  priority?: 1 | 2 | 3;
  /** Optional grouping/section name */
  section?: string;
}

/**
 * Checklist section grouping multiple items
 */
export interface ChecklistSection {
  /** Section identifier */
  id: string;
  /** Section title */
  title: string;
  /** Section description */
  description?: string;
  /** Items in this section */
  items: ChecklistItem[];
}

/**
 * Image configuration for checklists
 */
export interface ChecklistImage {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
}

/**
 * Tag for classification
 */
export interface ChecklistTag {
  /** Tag slug/identifier */
  slug: string;
  /** Display name */
  name: string;
}

/**
 * Represents a single service checklist
 */
export interface ServiceChecklist {
  /** Unique identifier */
  id: string;
  /** URL-friendly slug */
  slug: string;
  /** Checklist title */
  title: string;
  /** Short description (1-2 sentences) */
  description: string;
  /** Extended description (supports HTML) */
  longDescription?: string;
  /** Cover/thumbnail image */
  featuredImage: ChecklistImage;
  /** Category of the checklist */
  category: ChecklistCategory;
  /** Related service type */
  serviceType: ServiceType;
  /** Tags for filtering */
  tags: ChecklistTag[];
  /** Sections with checklist items */
  sections: ChecklistSection[];
  /** Total item count (auto-calculated if not provided) */
  totalItems?: number;
  /** PDF download URL (ungated preview or full) */
  downloadUrl?: string;
  /** Full PDF URL (for gated content) */
  gatedDownloadUrl?: string;
  /** File size for display */
  fileSize?: string;
  /** Estimated completion time */
  estimatedTime?: string;
  /** Publication date (ISO 8601) */
  publishedDate: string;
  /** Last updated date (ISO 8601) */
  updatedDate?: string;
  /** Whether this is featured */
  featured?: boolean;
  /** Download count */
  downloadCount?: number;
  /** Is this gated content (requires email) */
  isGated?: boolean;
  /** Related checklist IDs */
  relatedChecklistIds?: string[];
}

/**
 * Props for the ServiceChecklistCard component
 */
export interface ServiceChecklistCardProps extends ServiceChecklist {
  /** Additional CSS class names */
  class?: string;
  /** Show full item preview */
  showPreview?: boolean;
}

/**
 * Props for the GatedContentForm component
 */
export interface GatedContentFormProps {
  /** Checklist ID for tracking */
  checklistId: string;
  /** Checklist title for display */
  checklistTitle: string;
  /** Download URL to provide after form submission */
  downloadUrl: string;
  /** Optional file size to display */
  fileSize?: string;
  /** Optional heading override */
  heading?: string;
  /** Optional description override */
  description?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Filter option for checklist filtering
 */
export interface ChecklistFilterOption {
  /** Display label */
  label: string;
  /** Filter value */
  value: string;
  /** Number of items matching this filter */
  count?: number;
}

/**
 * Available checklist categories with labels
 */
export const CHECKLIST_CATEGORIES: ChecklistFilterOption[] = [
  { label: 'All Checklists', value: 'all' },
  { label: 'Preparation', value: 'preparation' },
  { label: 'Maintenance', value: 'maintenance' },
  { label: 'Launch', value: 'launch' },
  { label: 'Troubleshooting', value: 'troubleshooting' },
  { label: 'Security', value: 'security' },
  { label: 'Optimization', value: 'optimization' },
];

/**
 * Available service types with labels
 */
export const SERVICE_TYPES: ChecklistFilterOption[] = [
  { label: 'All Services', value: 'all' },
  // TODO: Update these labels to match your actual service names
  { label: 'Service One', value: 'service-one' },
  { label: 'Service Two', value: 'service-two' },
  { label: 'Service Three', value: 'service-three' },
  { label: 'Maintenance', value: 'maintenance' },
  { label: 'General', value: 'general' },
];

/**
 * Category icon mapping
 */
export const CATEGORY_ICONS: Record<ChecklistCategory, string> = {
  preparation: 'clipboard-list',
  maintenance: 'wrench',
  launch: 'rocket',
  troubleshooting: 'search',
  security: 'shield',
  optimization: 'zap',
};

/**
 * Category labels mapping
 */
export const CATEGORY_LABELS: Record<ChecklistCategory, string> = {
  preparation: 'Preparation',
  maintenance: 'Maintenance',
  launch: 'Launch',
  troubleshooting: 'Troubleshooting',
  security: 'Security',
  optimization: 'Optimization',
};

/**
 * Service type labels mapping
 */
export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  // TODO: Update these labels to match your actual service names
  'service-one': 'Service One',
  'service-two': 'Service Two',
  'service-three': 'Service Three',
  'maintenance': 'Maintenance',
  'general': 'General',
};
