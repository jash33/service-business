/**
 * Instant Quote Calculator Type Definitions
 * Type definitions for the client-side quote calculator component.
 */

/**
 * Calculator option categories
 */
export type OptionCategory =
  | 'projectType'
  | 'siteSize'
  | 'features'
  | 'addons'
  | 'timeline';

/**
 * Individual calculator option
 */
export interface CalculatorOption {
  /** Unique identifier for the option */
  id: string;
  /** Display label */
  label: string;
  /** Option category */
  category: OptionCategory;
  /** Price in USD (can be negative for discounts) */
  price: number;
  /** Optional description */
  description?: string;
  /** Whether this option can be selected multiple times */
  quantity?: boolean;
  /** Maximum quantity if quantity is true */
  maxQuantity?: number;
  /** Default quantity if quantity is true */
  defaultQuantity?: number;
  /** Whether option is selected by default */
  defaultSelected?: boolean;
  /** Related options (e.g., selecting ecommerce might auto-select certain features) */
  relatedOptions?: string[];
  /** Options that this is incompatible with */
  incompatibleWith?: string[];
}

/**
 * Category configuration for display
 */
export interface CategoryConfig {
  /** Category ID */
  id: OptionCategory;
  /** Display title */
  title: string;
  /** Category description */
  description: string;
  /** Selection type */
  selectionType: 'single' | 'multiple';
  /** Whether category is required */
  required?: boolean;
  /** Display order */
  order: number;
}

/**
 * User selections in the calculator
 */
export interface CalculatorSelections {
  /** Project type selection */
  projectType: string | null;
  /** Site size selection */
  siteSize: string | null;
  /** Selected feature IDs */
  features: string[];
  /** Selected addon IDs */
  addons: string[];
  /** Timeline selection */
  timeline: string | null;
  /** Quantities for options that support it */
  quantities: Record<string, number>;
}

/**
 * Price breakdown item
 */
export interface PriceBreakdownItem {
  /** Item label */
  label: string;
  /** Item price */
  price: number;
  /** Original item ID */
  optionId: string;
  /** Category */
  category: OptionCategory;
  /** Quantity (if applicable) */
  quantity?: number;
}

/**
 * Calculator result
 */
export interface CalculatorResult {
  /** Base price before any options */
  basePrice: number;
  /** Price breakdown by category */
  breakdown: PriceBreakdownItem[];
  /** Subtotal before any adjustments */
  subtotal: number;
  /** Any discount applied */
  discount: number;
  /** Discount reason (if applicable) */
  discountReason?: string;
  /** Final total price */
  total: number;
  /** Estimated price range low */
  rangeLow: number;
  /** Estimated price range high */
  rangeHigh: number;
  /** Whether the quote is complete (all required fields filled) */
  isComplete: boolean;
  /** Any warnings or notes */
  notes: string[];
}

/**
 * Lead capture form data
 */
export interface QuoteLeadData {
  /** User's name */
  name: string;
  /** User's email */
  email: string;
  /** User's phone (optional) */
  phone?: string;
  /** Business name (optional) */
  businessName?: string;
  /** Additional notes */
  notes?: string;
  /** The calculator result */
  quote: CalculatorResult;
  /** The user's selections */
  selections: CalculatorSelections;
}

/**
 * Calculator component props
 */
export interface InstantQuoteCalculatorProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Whether to show the price range or exact price */
  showRange?: boolean;
  /** Whether to show the lead capture form */
  showLeadCapture?: boolean;
  /** Additional CSS classes */
  class?: string;
}

/**
 * Initial calculator selections
 */
export const INITIAL_SELECTIONS: CalculatorSelections = {
  projectType: null,
  siteSize: null,
  features: [],
  addons: [],
  timeline: null,
  quantities: {},
};

/**
 * Format price as currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Format price range
 */
export function formatPriceRange(low: number, high: number): string {
  if (low === high) {
    return formatPrice(low);
  }
  return `${formatPrice(low)} - ${formatPrice(high)}`;
}
