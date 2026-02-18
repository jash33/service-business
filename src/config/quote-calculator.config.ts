/**
 * Instant Quote Calculator Configuration
 * Defines pricing options, categories, and calculation logic for the quote calculator.
 *
 * TODO: Configure this file with your business-specific pricing options.
 * Add your service categories and options to the CATEGORIES and CALCULATOR_OPTIONS arrays below.
 */

import type {
  CalculatorOption,
  CategoryConfig,
  CalculatorSelections,
  CalculatorResult,
  PriceBreakdownItem,
  OptionCategory,
} from '../types/quote-calculator';
import { formatPrice } from '../types/quote-calculator';

/**
 * Base price for any project (minimum engagement)
 */
export const BASE_PRICE = 0;

/**
 * Price variance percentage for range calculations
 */
export const PRICE_VARIANCE = 0.15; // 15% variance

/**
 * Category configurations
 *
 * TODO: Define your service categories here.
 * Each category groups related pricing options together.
 *
 * Example:
 * {
 *   id: 'projectType',
 *   title: 'Project Type',
 *   description: 'What type of project are you looking for?',
 *   selectionType: 'single',
 *   required: true,
 *   order: 1,
 * }
 */
export const CATEGORIES: CategoryConfig[] = [
  // TODO: Add your service categories
];

/**
 * All calculator options
 *
 * TODO: Define your pricing options here.
 * Each option belongs to a category and has a price.
 *
 * Example:
 * {
 *   id: 'basic-service',
 *   label: 'Basic Service',
 *   category: 'projectType',
 *   price: 500,
 *   description: 'Our standard service package',
 * }
 */
export const CALCULATOR_OPTIONS: CalculatorOption[] = [
  // TODO: Add your pricing options
];

/**
 * Get options by category
 */
export function getOptionsByCategory(category: OptionCategory): CalculatorOption[] {
  return CALCULATOR_OPTIONS.filter((opt) => opt.category === category);
}

/**
 * Get option by ID
 */
export function getOptionById(id: string): CalculatorOption | undefined {
  return CALCULATOR_OPTIONS.find((opt) => opt.id === id);
}

/**
 * Get category config by ID
 */
export function getCategoryById(id: OptionCategory): CategoryConfig | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}

/**
 * Calculate quote based on selections
 */
export function calculateQuote(selections: CalculatorSelections): CalculatorResult {
  const breakdown: PriceBreakdownItem[] = [];
  const notes: string[] = [];
  let subtotal = BASE_PRICE;

  // Process project type
  if (selections.projectType) {
    const option = getOptionById(selections.projectType);
    if (option) {
      breakdown.push({
        label: option.label,
        price: option.price,
        optionId: option.id,
        category: option.category,
      });
      subtotal += option.price;
    }
  }

  // Process site size
  if (selections.siteSize) {
    const option = getOptionById(selections.siteSize);
    if (option && option.price > 0) {
      breakdown.push({
        label: option.label,
        price: option.price,
        optionId: option.id,
        category: option.category,
      });
      subtotal += option.price;
    }
  }

  // Process features
  for (const featureId of selections.features) {
    const option = getOptionById(featureId);
    if (option && option.price > 0) {
      breakdown.push({
        label: option.label,
        price: option.price,
        optionId: option.id,
        category: option.category,
      });
      subtotal += option.price;
    }
  }

  // Process addons with quantities
  for (const addonId of selections.addons) {
    const option = getOptionById(addonId);
    if (option) {
      const quantity = option.quantity
        ? (selections.quantities[addonId] || option.defaultQuantity || 1)
        : 1;
      const totalPrice = option.price * quantity;

      if (totalPrice !== 0) {
        breakdown.push({
          label: option.label,
          price: totalPrice,
          optionId: option.id,
          category: option.category,
          quantity: option.quantity ? quantity : undefined,
        });
        subtotal += totalPrice;
      }
    }
  }

  // Process timeline
  let discount = 0;
  let discountReason: string | undefined;

  if (selections.timeline) {
    const option = getOptionById(selections.timeline);
    if (option) {
      if (option.price > 0) {
        breakdown.push({
          label: option.label,
          price: option.price,
          optionId: option.id,
          category: option.category,
        });
        subtotal += option.price;
        notes.push(`Rush fee applied: ${option.description}`);
      } else if (option.price < 0) {
        discount = Math.abs(option.price);
        discountReason = 'Flexible timeline discount';
      }
    }
  }

  // Calculate total
  const total = Math.max(0, subtotal - discount);

  // Calculate price range
  const variance = total * PRICE_VARIANCE;
  const rangeLow = Math.max(0, Math.round((total - variance) / 50) * 50);
  const rangeHigh = Math.round((total + variance) / 50) * 50;

  // Check if quote is complete
  const isComplete = !!(selections.projectType && selections.siteSize);

  if (!isComplete) {
    notes.push('Please select required options for an accurate quote.');
  }

  return {
    basePrice: BASE_PRICE,
    breakdown,
    subtotal,
    discount,
    discountReason,
    total,
    rangeLow,
    rangeHigh,
    isComplete,
    notes,
  };
}

/**
 * Get default selections (pre-selected options)
 */
export function getDefaultSelections(): CalculatorSelections {
  const defaultFeatures = CALCULATOR_OPTIONS
    .filter((opt) => opt.category === 'features' && opt.defaultSelected)
    .map((opt) => opt.id);

  const defaultAddons = CALCULATOR_OPTIONS
    .filter((opt) => opt.category === 'addons' && opt.defaultSelected)
    .map((opt) => opt.id);

  // Build default quantities
  const quantities: Record<string, number> = {};
  CALCULATOR_OPTIONS
    .filter((opt) => opt.quantity && opt.defaultQuantity)
    .forEach((opt) => {
      quantities[opt.id] = opt.defaultQuantity!;
    });

  return {
    projectType: null,
    siteSize: null,
    features: defaultFeatures,
    addons: defaultAddons,
    timeline: null,
    quantities,
  };
}

/**
 * Generate quote summary text
 */
export function generateQuoteSummary(
  selections: CalculatorSelections,
  result: CalculatorResult
): string {
  const lines: string[] = ['=== Project Quote Summary ===', ''];

  if (selections.projectType) {
    const option = getOptionById(selections.projectType);
    if (option) {
      lines.push(`Project Type: ${option.label}`);
    }
  }

  if (selections.siteSize) {
    const option = getOptionById(selections.siteSize);
    if (option) {
      lines.push(`Size: ${option.label}`);
    }
  }

  if (selections.features.length > 0) {
    lines.push('');
    lines.push('Features:');
    for (const featureId of selections.features) {
      const option = getOptionById(featureId);
      if (option) {
        lines.push(`  - ${option.label}`);
      }
    }
  }

  if (selections.addons.length > 0) {
    lines.push('');
    lines.push('Add-ons:');
    for (const addonId of selections.addons) {
      const option = getOptionById(addonId);
      if (option) {
        const qty = option.quantity ? ` (x${selections.quantities[addonId] || 1})` : '';
        lines.push(`  - ${option.label}${qty}`);
      }
    }
  }

  if (selections.timeline) {
    const option = getOptionById(selections.timeline);
    if (option) {
      lines.push('');
      lines.push(`Timeline: ${option.label}`);
    }
  }

  lines.push('');
  lines.push('---');
  lines.push(`Estimated Total: ${formatPrice(result.total)}`);

  if (result.discount > 0) {
    lines.push(`(Includes ${formatPrice(result.discount)} discount)`);
  }

  return lines.join('\n');
}
