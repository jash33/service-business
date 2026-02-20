/**
 * FAQ Accordion Types
 * Type definitions for the FAQ accordion component.
 */

/**
 * Represents a single FAQ item
 */
export interface FAQItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question text */
  question: string;
  /** The answer content (can include HTML for formatting) */
  answer: string;
  /** Optional category for grouping FAQs */
  category?: FAQCategory;
}

/**
 * FAQ category options for organizing questions
 */
export type FAQCategory =
  | 'pricing'
  | 'timeline'
  | 'services'
  | 'process'
  | 'general';

/**
 * Props for the FAQAccordion component
 */
export interface FAQAccordionProps {
  /** Array of FAQ items to display */
  items: FAQItem[];
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Whether multiple panels can be open at once */
  allowMultiple?: boolean;
  /** Index of initially expanded item (null for all collapsed) */
  initialExpanded?: number | null;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Whether to include FAQPage schema markup for rich snippets (default: true) */
  includeSchema?: boolean;
}

/**
 * State for a single accordion item
 */
export interface FAQAccordionItemState {
  /** Whether the item is currently expanded */
  isExpanded: boolean;
  /** Unique ID for ARIA relationships */
  triggerId: string;
  /** Unique ID for the panel content */
  panelId: string;
}

/**
 * Default FAQ items for a service business
 * Covering pricing, timelines, services, and process
 * Customize these with your own business-specific questions and answers
 */
export const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-ac-repair-cost',
    question: 'How much does AC repair cost?',
    answer: `Most repairs range from $150–$500 depending on the issue. We provide upfront pricing before any work begins — no surprises.`,
    category: 'pricing',
  },
  {
    id: 'faq-financing',
    question: 'Do you offer financing?',
    answer: `Yes! We partner with trusted lenders to offer flexible financing on new system installations. Apply in minutes, get approved same-day.`,
    category: 'pricing',
  },
  {
    id: 'faq-service-frequency',
    question: 'How often should I service my AC?',
    answer: `We recommend a tune-up twice a year — once before summer and once before winter. Regular maintenance prevents 90% of breakdowns.`,
    category: 'services',
  },
  {
    id: 'faq-service-area',
    question: 'What areas do you serve?',
    answer: `We serve the Greater Houston area including Katy, Sugar Land, Memorial, Energy Corridor, The Woodlands, and surrounding communities.`,
    category: 'general',
  },
  {
    id: 'faq-emergency-service',
    question: 'Do you offer emergency service?',
    answer: `Absolutely. Our 24/7 line is always staffed. AC emergencies don't wait, and neither do we.`,
    category: 'services',
  },
];
