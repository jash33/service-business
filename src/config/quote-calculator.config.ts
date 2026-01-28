/**
 * Instant Quote Calculator Configuration
 * Defines pricing options, categories, and calculation logic for the quote calculator.
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
 */
export const CATEGORIES: CategoryConfig[] = [
  {
    id: 'projectType',
    title: 'Project Type',
    description: 'What type of project are you looking for?',
    selectionType: 'single',
    required: true,
    order: 1,
  },
  {
    id: 'siteSize',
    title: 'Website Size',
    description: 'How many pages do you need?',
    selectionType: 'single',
    required: true,
    order: 2,
  },
  {
    id: 'features',
    title: 'Key Features',
    description: 'Select the features you need',
    selectionType: 'multiple',
    required: false,
    order: 3,
  },
  {
    id: 'addons',
    title: 'Additional Services',
    description: 'Enhance your project with these add-ons',
    selectionType: 'multiple',
    required: false,
    order: 4,
  },
  {
    id: 'timeline',
    title: 'Timeline',
    description: 'When do you need your project completed?',
    selectionType: 'single',
    required: false,
    order: 5,
  },
];

/**
 * All calculator options
 */
export const CALCULATOR_OPTIONS: CalculatorOption[] = [
  // Project Types
  {
    id: 'new-website',
    label: 'New Website',
    category: 'projectType',
    price: 800,
    description: 'A brand new website built from scratch',
  },
  {
    id: 'website-redesign',
    label: 'Website Redesign',
    category: 'projectType',
    price: 600,
    description: 'Refresh your existing website with a new look',
  },
  {
    id: 'landing-page',
    label: 'Landing Page',
    category: 'projectType',
    price: 400,
    description: 'Single high-converting landing page',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce Store',
    category: 'projectType',
    price: 1500,
    description: 'Online store with product catalog and checkout',
    relatedOptions: ['payment-integration', 'product-catalog'],
  },

  // Site Sizes
  {
    id: 'size-small',
    label: '1-5 Pages',
    category: 'siteSize',
    price: 0,
    description: 'Perfect for simple business sites',
  },
  {
    id: 'size-medium',
    label: '6-10 Pages',
    category: 'siteSize',
    price: 400,
    description: 'Great for growing businesses',
  },
  {
    id: 'size-large',
    label: '11-20 Pages',
    category: 'siteSize',
    price: 800,
    description: 'Comprehensive business websites',
  },
  {
    id: 'size-enterprise',
    label: '20+ Pages',
    category: 'siteSize',
    price: 1500,
    description: 'Large-scale enterprise solutions',
  },

  // Features
  {
    id: 'contact-form',
    label: 'Contact Form',
    category: 'features',
    price: 0,
    description: 'Standard contact form with email notifications',
    defaultSelected: true,
  },
  {
    id: 'responsive-design',
    label: 'Mobile Responsive',
    category: 'features',
    price: 0,
    description: 'Looks great on all devices',
    defaultSelected: true,
  },
  {
    id: 'seo-basics',
    label: 'Basic SEO',
    category: 'features',
    price: 0,
    description: 'Search engine optimization fundamentals',
    defaultSelected: true,
  },
  {
    id: 'custom-graphics',
    label: 'Custom Graphics',
    category: 'features',
    price: 200,
    description: 'Custom icons, illustrations, and graphics',
  },
  {
    id: 'blog',
    label: 'Blog Section',
    category: 'features',
    price: 300,
    description: 'Blog with categories and search',
  },
  {
    id: 'gallery',
    label: 'Photo Gallery',
    category: 'features',
    price: 150,
    description: 'Beautiful image gallery with lightbox',
  },
  {
    id: 'testimonials',
    label: 'Testimonials Section',
    category: 'features',
    price: 100,
    description: 'Showcase customer reviews',
  },
  {
    id: 'booking-calendar',
    label: 'Booking Calendar',
    category: 'features',
    price: 400,
    description: 'Online appointment scheduling',
  },
  {
    id: 'payment-integration',
    label: 'Payment Integration',
    category: 'features',
    price: 350,
    description: 'Accept payments via Stripe/PayPal',
  },
  {
    id: 'product-catalog',
    label: 'Product Catalog',
    category: 'features',
    price: 500,
    description: 'Display products with filtering',
  },
  {
    id: 'newsletter',
    label: 'Newsletter Signup',
    category: 'features',
    price: 100,
    description: 'Email list building integration',
  },
  {
    id: 'social-integration',
    label: 'Social Media Integration',
    category: 'features',
    price: 100,
    description: 'Connect your social profiles',
  },
  {
    id: 'analytics',
    label: 'Analytics Setup',
    category: 'features',
    price: 100,
    description: 'Google Analytics configuration',
  },
  {
    id: 'live-chat',
    label: 'Live Chat Widget',
    category: 'features',
    price: 150,
    description: 'Real-time customer support chat',
  },

  // Add-ons
  {
    id: 'logo-design',
    label: 'Logo Design',
    category: 'addons',
    price: 300,
    description: 'Professional logo design package',
  },
  {
    id: 'copywriting',
    label: 'Website Copywriting',
    category: 'addons',
    price: 400,
    description: 'Professional content writing',
  },
  {
    id: 'seo-advanced',
    label: 'Advanced SEO Package',
    category: 'addons',
    price: 500,
    description: 'Comprehensive SEO optimization',
  },
  {
    id: 'hosting-annual',
    label: 'Annual Hosting',
    category: 'addons',
    price: 300,
    description: 'One year of managed hosting',
  },
  {
    id: 'maintenance-monthly',
    label: 'Monthly Maintenance',
    category: 'addons',
    price: 100,
    description: 'Ongoing updates and support (per month)',
    quantity: true,
    maxQuantity: 12,
    defaultQuantity: 1,
  },
  {
    id: 'training-session',
    label: 'Training Session',
    category: 'addons',
    price: 150,
    description: '1-hour training on managing your site',
    quantity: true,
    maxQuantity: 4,
    defaultQuantity: 1,
  },
  {
    id: 'ssl-certificate',
    label: 'SSL Certificate',
    category: 'addons',
    price: 0,
    description: 'Secure HTTPS for your site (included)',
    defaultSelected: true,
  },
  {
    id: 'domain-setup',
    label: 'Domain Setup',
    category: 'addons',
    price: 50,
    description: 'Domain registration and configuration',
  },
  {
    id: 'email-setup',
    label: 'Business Email Setup',
    category: 'addons',
    price: 100,
    description: 'Professional email configuration',
  },

  // Timeline options
  {
    id: 'timeline-standard',
    label: 'Standard (4-6 weeks)',
    category: 'timeline',
    price: 0,
    description: 'Normal project timeline',
  },
  {
    id: 'timeline-rush',
    label: 'Rush (2-3 weeks)',
    category: 'timeline',
    price: 500,
    description: '25% expedited timeline fee',
  },
  {
    id: 'timeline-urgent',
    label: 'Urgent (1-2 weeks)',
    category: 'timeline',
    price: 1000,
    description: '50% expedited timeline fee',
  },
  {
    id: 'timeline-flexible',
    label: 'Flexible Timeline',
    category: 'timeline',
    price: -100,
    description: 'Small discount for flexible scheduling',
  },
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
    notes.push('Please select a project type and site size for an accurate quote.');
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
    timeline: 'timeline-standard',
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
      lines.push(`Website Size: ${option.label}`);
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
