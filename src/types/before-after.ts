/**
 * Before/After Slider Types
 * Type definitions for the interactive before/after image comparison component.
 */

import type { ProjectImage } from './portfolio';

/**
 * Configuration for a single before/after comparison
 */
export interface BeforeAfterComparison {
  /** Unique identifier for the comparison */
  id: string;
  /** Title for the transformation */
  title: string;
  /** Description of the transformation */
  description?: string;
  /** The "before" image */
  beforeImage: ProjectImage;
  /** The "after" image */
  afterImage: ProjectImage;
  /** Category for filtering (e.g., 'redesign', 'branding', 'ecommerce') */
  category?: string;
  /** Client/project name */
  clientName?: string;
  /** Date of completion */
  completedDate?: string;
}

/**
 * Props for the BeforeAfterSlider component
 */
export interface BeforeAfterSliderProps {
  /** Unique identifier for the slider */
  id: string;
  /** The "before" image */
  beforeImage: ProjectImage;
  /** The "after" image */
  afterImage: ProjectImage;
  /** Initial slider position (0-100, default 50) */
  initialPosition?: number;
  /** Show "Before" and "After" labels */
  showLabels?: boolean;
  /** Custom label for "before" side */
  labelBefore?: string;
  /** Custom label for "after" side */
  labelAfter?: string;
  /** Slider handle width in pixels */
  handleWidth?: number;
  /** Enable keyboard navigation */
  enableKeyboard?: boolean;
  /** Enable touch/swipe gestures */
  enableTouch?: boolean;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the BeforeAfterGallery component
 */
export interface BeforeAfterGalleryProps {
  /** Section heading */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Array of comparisons to display */
  comparisons: BeforeAfterComparison[];
  /** Enable filtering by category */
  enableFiltering?: boolean;
  /** Number of columns (2 or 3) */
  columns?: 2 | 3;
  /** Section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Filter option for gallery filtering
 */
export interface GalleryFilterOption {
  /** Display label */
  label: string;
  /** Filter value */
  value: string;
  /** Number of items matching this filter */
  count?: number;
}

/**
 * Available categories for before/after comparisons
 */
export const COMPARISON_CATEGORIES: GalleryFilterOption[] = [
  { label: 'All Transformations', value: 'all' },
  { label: 'Renovations', value: 'renovation' },
  { label: 'Repairs', value: 'repair' },
  { label: 'Installations', value: 'installation' },
  { label: 'Upgrades', value: 'upgrade' },
  { label: 'Maintenance', value: 'maintenance' },
];
