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
    id: 'faq-pricing',
    question: 'How much do your services cost?',
    answer: `Our pricing depends on the scope and complexity of your project. We offer a range of packages to fit different budgets and needs. Contact us for a free consultation and we'll provide a detailed quote tailored to your specific requirements.`,
    category: 'pricing',
  },
  {
    id: 'faq-timeline',
    question: 'How long does a typical project take?',
    answer: `Project timelines vary based on scope and complexity. We'll provide a clear timeline during our initial consultation and keep you informed throughout every stage of the process with regular updates and milestone reviews.`,
    category: 'timeline',
  },
  {
    id: 'faq-process',
    question: 'What does your process look like?',
    answer: `Our process has four clear phases: <strong>Discovery</strong> — We learn about your business, goals, and target audience. <strong>Planning</strong> — We create a detailed project plan for your approval. <strong>Execution</strong> — We deliver the work with quality and attention to detail. <strong>Review</strong> — We refine the results based on your feedback until you're completely satisfied.`,
    category: 'process',
  },
  {
    id: 'faq-getting-started',
    question: 'How do I get started?',
    answer: `Getting started is easy! Simply reach out through our contact form or give us a call to schedule a free consultation. We'll discuss your needs, answer any questions, and outline the best path forward for your project.`,
    category: 'general',
  },
  {
    id: 'faq-revisions',
    question: 'What if I need changes after the project is complete?',
    answer: `We want you to be completely satisfied with our work. Our packages include a revision period where we'll refine the deliverables based on your feedback. We also offer ongoing support plans to help with future updates and adjustments.`,
    category: 'process',
  },
  {
    id: 'faq-service-area',
    question: 'What areas do you serve?',
    answer: `We work with clients both locally and remotely. Whether you prefer to meet in person or connect via phone or video call, we're flexible and ready to accommodate your needs.`,
    category: 'general',
  },
];
