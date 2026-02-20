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
    id: 'faq-plumbing-cost',
    question: 'How much does plumbing repair cost?',
    answer: `Most repairs range from $150–$500 depending on the issue. Unlike other companies, we price by the job — not by the hour — so there are no surprises. We'll diagnose the problem, explain your options, and give you an upfront quote before any work begins.`,
    category: 'pricing',
  },
  {
    id: 'faq-financing',
    question: 'Do you offer financing?',
    answer: `Yes! We understand major plumbing work like water heater replacement or repiping is a significant investment. We partner with trusted lenders to offer flexible financing options with affordable monthly payments. Apply in minutes, get approved same-day.`,
    category: 'pricing',
  },
  {
    id: 'faq-clogged-drain',
    question: 'Why does my drain keep clogging?',
    answer: `Recurring clogs usually mean there's a deeper issue — buildup in the pipes, tree roots, or a damaged sewer line. Our video inspection can show exactly what's going on so we can fix the root cause, not just the symptom. No more repeat visits.`,
    category: 'services',
  },
  {
    id: 'faq-service-area',
    question: 'What areas do you serve?',
    answer: `We proudly serve the Greater Houston area including Katy, Sugar Land, Memorial, Energy Corridor, The Woodlands, and surrounding communities. Our trucks are stocked and ready to roll — most appointments are same-day or next-day. Not sure if we service your area? Give us a call!`,
    category: 'general',
  },
  {
    id: 'faq-emergency-service',
    question: 'Do you offer 24/7 emergency service?',
    answer: `Absolutely — we're ready to leap into action any time of day, any day of the year. Plumbing emergencies don't wait, and neither do we. Call our 24/7 line and a real person will answer, not a machine. We'll have a technician to your door fast.`,
    category: 'services',
  },
  {
    id: 'faq-satisfaction-guarantee',
    question: 'What if I\'m not satisfied with the work?',
    answer: `Your satisfaction is 100% guaranteed. If you're not completely happy with our service, we'll make it right at no extra cost. That's our promise. We've built our reputation on quality work and honest service — and we stand behind every job.`,
    category: 'general',
  },
];
