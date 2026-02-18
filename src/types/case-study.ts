/**
 * Case Study Types
 * Type definitions for long-form case study templates with problem-solution-results format,
 * project timeline, customer quotes, and multiple images.
 */

import type { ProjectImage, TechnologyTag, ProjectCategory } from './portfolio';

/**
 * Timeline milestone for project progress
 */
export interface TimelineMilestone {
  /** Phase/milestone title */
  title: string;
  /** Description of what happened during this phase */
  description: string;
  /** Duration (e.g., "2 weeks", "1 month") */
  duration: string;
  /** Start date (ISO 8601 format) */
  startDate?: string;
  /** End date (ISO 8601 format) */
  endDate?: string;
  /** Icon name for the milestone (optional) */
  icon?: 'discovery' | 'design' | 'development' | 'testing' | 'launch' | 'optimization';
}

/**
 * Result metric showing measurable outcome
 */
export interface ResultMetric {
  /** Metric label (e.g., "Increase in Traffic") */
  label: string;
  /** Metric value (e.g., "150%", "$50K", "3x") */
  value: string;
  /** Previous/before value for comparison (optional) */
  previousValue?: string;
  /** Description of the metric */
  description?: string;
  /** Icon name for the metric */
  icon?: 'traffic' | 'conversion' | 'revenue' | 'time' | 'satisfaction' | 'leads' | 'performance';
}

/**
 * Customer quote/testimonial for the case study
 */
export interface CustomerQuote {
  /** The quote text */
  quote: string;
  /** Person's name */
  name: string;
  /** Person's title/role */
  title: string;
  /** Company name */
  company: string;
  /** Avatar/photo URL (optional) */
  avatar?: string;
  /** When in the case study to show this quote (for positioning) */
  placement?: 'hero' | 'problem' | 'solution' | 'results' | 'conclusion';
}

/**
 * Case study image with caption and placement
 */
export interface CaseStudyImage extends ProjectImage {
  /** Image caption */
  caption?: string;
  /** Where to display the image */
  placement: 'hero' | 'problem' | 'solution' | 'results' | 'gallery';
  /** Order within placement group */
  order?: number;
}

/**
 * Challenge/problem item
 */
export interface ChallengeItem {
  /** Challenge title */
  title: string;
  /** Challenge description */
  description: string;
  /** Icon for the challenge */
  icon?: 'warning' | 'clock' | 'chart-down' | 'users' | 'mobile' | 'search' | 'security';
}

/**
 * Solution/approach item
 */
export interface SolutionItem {
  /** Solution title */
  title: string;
  /** Solution description */
  description: string;
  /** Technologies/tools used */
  technologies?: string[];
  /** Icon for the solution */
  icon?: 'check' | 'code' | 'design' | 'rocket' | 'shield' | 'chart-up' | 'users';
}

/**
 * Client/company information
 */
export interface ClientInfo {
  /** Company/client name */
  name: string;
  /** Company logo URL */
  logo?: string;
  /** Industry/sector */
  industry: string;
  /** Company size (e.g., "50-100 employees") */
  companySize?: string;
  /** Location */
  location?: string;
  /** Website URL */
  website?: string;
}

/**
 * Full case study data structure
 */
export interface CaseStudy {
  /** Unique identifier/slug */
  id: string;
  /** URL slug */
  slug: string;
  /** Case study title */
  title: string;
  /** Subtitle/tagline */
  subtitle?: string;
  /** Brief summary (2-3 sentences for cards/previews) */
  summary: string;
  /** SEO meta description */
  metaDescription?: string;

  /** Client information */
  client: ClientInfo;

  /** Project category */
  category: ProjectCategory;
  /** Technologies used */
  technologies: TechnologyTag[];
  /** Services provided */
  services: string[];

  /** Project dates */
  projectStartDate: string;
  projectEndDate: string;
  /** Total project duration (e.g., "3 months") */
  projectDuration: string;

  /** Hero/featured image */
  heroImage: CaseStudyImage;
  /** All images for the case study */
  images: CaseStudyImage[];

  /** Problem/challenge section */
  problem: {
    /** Overview paragraph */
    overview: string;
    /** Detailed challenges */
    challenges: ChallengeItem[];
  };

  /** Solution/approach section */
  solution: {
    /** Overview paragraph */
    overview: string;
    /** Detailed solutions */
    approaches: SolutionItem[];
  };

  /** Results section */
  results: {
    /** Overview paragraph */
    overview: string;
    /** Measurable metrics */
    metrics: ResultMetric[];
  };

  /** Project timeline */
  timeline: TimelineMilestone[];

  /** Customer quotes throughout the case study */
  quotes: CustomerQuote[];

  /** Call-to-action section */
  cta?: {
    /** CTA headline */
    headline: string;
    /** CTA description */
    description: string;
    /** Primary button text */
    primaryButtonText?: string;
    /** Primary button URL */
    primaryButtonUrl?: string;
    /** Secondary button text */
    secondaryButtonText?: string;
    /** Secondary button URL */
    secondaryButtonUrl?: string;
  };

  /** Related case study IDs */
  relatedCaseStudyIds?: string[];

  /** Publication/featured status */
  published: boolean;
  featured?: boolean;

  /** SEO keywords */
  keywords?: string[];
}

/**
 * Props for case study card component (preview/listing)
 */
export interface CaseStudyCardProps {
  /** Case study data */
  caseStudy: CaseStudy;
  /** Additional CSS class names */
  class?: string;
  /** Display variant */
  variant?: 'default' | 'featured' | 'compact';
}

/**
 * Props for case study timeline component
 */
export interface CaseStudyTimelineProps {
  /** Timeline milestones */
  milestones: TimelineMilestone[];
  /** Additional CSS class names */
  class?: string;
  /** Layout orientation */
  orientation?: 'vertical' | 'horizontal';
}

/**
 * Props for case study results component
 */
export interface CaseStudyResultsProps {
  /** Result metrics */
  metrics: ResultMetric[];
  /** Section overview text */
  overview?: string;
  /** Additional CSS class names */
  class?: string;
  /** Number of columns for grid */
  columns?: 2 | 3 | 4;
}

/**
 * Props for customer quote component
 */
export interface CustomerQuoteProps {
  /** Quote data */
  quote: CustomerQuote;
  /** Additional CSS class names */
  class?: string;
  /** Display variant */
  variant?: 'default' | 'featured' | 'inline';
}

/**
 * Available case study categories with labels
 */
export const CASE_STUDY_CATEGORIES = [
  { label: 'All Case Studies', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Renovation', value: 'renovation' },
  { label: 'Maintenance', value: 'maintenance' },
  { label: 'Custom', value: 'custom' },
];

/**
 * Icon mapping for timeline milestones
 */
export const TIMELINE_ICONS = {
  discovery: '🔍',
  design: '🎨',
  development: '💻',
  testing: '🧪',
  launch: '🚀',
  optimization: '📈',
};

/**
 * Icon mapping for result metrics
 */
export const METRIC_ICONS = {
  traffic: '📊',
  conversion: '🎯',
  revenue: '💰',
  time: '⏱️',
  satisfaction: '⭐',
  leads: '📈',
  performance: '⚡',
};
