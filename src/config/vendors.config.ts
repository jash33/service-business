/**
 * Vendor Directory Configuration
 * Contains vendor/supplier/service provider data for the vendor directory page.
 * This configuration file centralizes all vendor information for recommended
 * partners, suppliers, and complementary service providers.
 */

import type { Vendor, VendorCategory, VendorPageConfig } from '../types/vendor';

/**
 * Vendor directory page configuration
 */
export const VENDOR_PAGE_CONFIG: VendorPageConfig = {
  /** Main heading for the vendor page hero */
  heroHeading: 'Our Vendor Directory',
  /** Subheading for the vendor page hero */
  heroSubheading: 'Trusted partners and service providers we recommend to help your business succeed',
  /** Section heading for the vendor grid */
  sectionHeading: 'Recommended Partners',
  /** Section description */
  sectionDescription: 'We have carefully curated a list of vendors, suppliers, and service providers that we trust and recommend. These partners complement our services and share our commitment to quality.',
  /** SEO meta description */
  metaDescription: 'Explore our directory of recommended vendors, suppliers, and complementary service providers. Trusted partners that help Houston businesses succeed online.',
};

/**
 * Vendor categories for filtering
 */
export const VENDOR_CATEGORIES: VendorCategory[] = [
  {
    label: 'All Partners',
    value: 'all',
    description: 'View all recommended vendors and partners',
  },
  {
    label: 'Web Hosting',
    value: 'hosting',
    description: 'Reliable web hosting providers',
    icon: 'server',
  },
  {
    label: 'Domain Services',
    value: 'domains',
    description: 'Domain registration and management',
    icon: 'globe',
  },
  {
    label: 'Email & Communication',
    value: 'email',
    description: 'Professional email and communication tools',
    icon: 'mail',
  },
  {
    label: 'Marketing Tools',
    value: 'marketing',
    description: 'Digital marketing and analytics platforms',
    icon: 'chart',
  },
  {
    label: 'Payment Processing',
    value: 'payments',
    description: 'Secure payment and e-commerce solutions',
    icon: 'credit-card',
  },
  {
    label: 'Design & Media',
    value: 'design',
    description: 'Stock photos, graphics, and design tools',
    icon: 'image',
  },
  {
    label: 'Business Services',
    value: 'business',
    description: 'Legal, accounting, and business consulting',
    icon: 'briefcase',
  },
];

/**
 * Vendor directory data
 * Add, edit, or remove vendors here
 */
export const VENDORS: Vendor[] = [
  // Web Hosting Providers
  {
    id: 'cloudways',
    name: 'Cloudways',
    category: 'hosting',
    type: 'Managed Cloud Hosting',
    description: 'Cloudways offers managed cloud hosting on top providers like AWS, Google Cloud, and DigitalOcean. Their platform makes it easy to deploy and manage high-performance websites with excellent uptime and support.',
    logo: '/images/vendors/cloudways.png',
    services: ['Managed WordPress Hosting', 'Cloud Servers', 'CDN Integration', '24/7 Support'],
    contact: {
      email: 'sales@cloudways.com',
    },
    links: {
      website: 'https://www.cloudways.com',
      twitter: 'https://twitter.com/cloudaborneways',
      linkedin: 'https://www.linkedin.com/company/cloudways',
    },
    featured: true,
    partnershipLevel: 'Certified Partner',
    specialOffer: '20% off first 3 months with our referral link',
  },
  {
    id: 'siteground',
    name: 'SiteGround',
    category: 'hosting',
    type: 'Web Hosting Provider',
    description: 'SiteGround is known for excellent customer support and WordPress-optimized hosting. They offer fast servers, free SSL, daily backups, and a user-friendly interface perfect for businesses of all sizes.',
    logo: '/images/vendors/siteground.png',
    services: ['Shared Hosting', 'WordPress Hosting', 'WooCommerce Hosting', 'Cloud Hosting'],
    contact: {
      email: 'partners@siteground.com',
    },
    links: {
      website: 'https://www.siteground.com',
      twitter: 'https://twitter.com/siteground',
    },
    featured: true,
    partnershipLevel: 'Recommended Partner',
  },
  {
    id: 'wpengine',
    name: 'WP Engine',
    category: 'hosting',
    type: 'Premium WordPress Hosting',
    description: 'WP Engine provides enterprise-grade managed WordPress hosting with advanced security, automatic updates, and staging environments. Ideal for high-traffic websites and mission-critical applications.',
    logo: '/images/vendors/wpengine.png',
    services: ['Managed WordPress', 'Enterprise Hosting', 'Headless WordPress', 'eCommerce'],
    contact: {
      email: 'partners@wpengine.com',
      phone: '(877) 973-6446',
    },
    links: {
      website: 'https://wpengine.com',
      linkedin: 'https://www.linkedin.com/company/wp-engine',
    },
    featured: false,
    partnershipLevel: 'Agency Partner',
  },

  // Domain Services
  {
    id: 'namecheap',
    name: 'Namecheap',
    category: 'domains',
    type: 'Domain Registrar',
    description: 'Namecheap offers affordable domain registration with free WHOIS privacy protection. They provide excellent customer service and a wide range of TLDs at competitive prices.',
    logo: '/images/vendors/namecheap.png',
    services: ['Domain Registration', 'Domain Transfer', 'SSL Certificates', 'Private Email'],
    contact: {
      email: 'support@namecheap.com',
    },
    links: {
      website: 'https://www.namecheap.com',
      twitter: 'https://twitter.com/namecheap',
    },
    featured: true,
    specialOffer: 'Free WHOIS privacy on all domains',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'domains',
    type: 'DNS & Security Provider',
    description: 'Cloudflare provides DNS management, CDN services, and web security. Their free tier offers DDoS protection and SSL, while paid plans include advanced security features and performance optimization.',
    logo: '/images/vendors/cloudflare.png',
    services: ['DNS Management', 'CDN', 'DDoS Protection', 'SSL/TLS', 'Web Application Firewall'],
    contact: {
      email: 'enterprise@cloudflare.com',
    },
    links: {
      website: 'https://www.cloudflare.com',
      twitter: 'https://twitter.com/cloudflare',
      linkedin: 'https://www.linkedin.com/company/cloudflare',
    },
    featured: true,
    partnershipLevel: 'Certified Partner',
  },

  // Email & Communication
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    category: 'email',
    type: 'Business Email & Productivity',
    description: 'Google Workspace (formerly G Suite) provides professional email, cloud storage, video conferencing, and collaboration tools. Perfect for businesses needing reliable, scalable communication solutions.',
    logo: '/images/vendors/google-workspace.png',
    services: ['Business Email', 'Google Drive', 'Google Meet', 'Google Docs', 'Calendar'],
    contact: {
      email: 'workspace-sales@google.com',
    },
    links: {
      website: 'https://workspace.google.com',
    },
    featured: true,
    partnershipLevel: 'Authorized Reseller',
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    category: 'email',
    type: 'Email Marketing Platform',
    description: 'Mailchimp is an all-in-one marketing platform that helps businesses create email campaigns, landing pages, and automated marketing workflows. Great for businesses looking to grow their audience.',
    logo: '/images/vendors/mailchimp.png',
    services: ['Email Marketing', 'Marketing Automation', 'Landing Pages', 'Audience Management'],
    contact: {
      email: 'partnerships@mailchimp.com',
    },
    links: {
      website: 'https://mailchimp.com',
      twitter: 'https://twitter.com/mailchimp',
    },
    featured: false,
  },

  // Marketing Tools
  {
    id: 'semrush',
    name: 'Semrush',
    category: 'marketing',
    type: 'SEO & Marketing Platform',
    description: 'Semrush is a comprehensive SEO and digital marketing toolkit. It provides keyword research, competitor analysis, site audits, and content marketing tools to improve online visibility.',
    logo: '/images/vendors/semrush.png',
    services: ['SEO Tools', 'Keyword Research', 'Competitor Analysis', 'Content Marketing', 'PPC Research'],
    contact: {
      email: 'partners@semrush.com',
    },
    links: {
      website: 'https://www.semrush.com',
      twitter: 'https://twitter.com/semrush',
      linkedin: 'https://www.linkedin.com/company/semrush',
    },
    featured: true,
    partnershipLevel: 'Agency Partner',
    specialOffer: 'Extended 14-day free trial for our referrals',
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    category: 'marketing',
    type: 'Web Analytics',
    description: 'Google Analytics provides detailed insights into website traffic, user behavior, and conversion tracking. Essential for understanding your audience and making data-driven decisions.',
    logo: '/images/vendors/google-analytics.png',
    services: ['Traffic Analysis', 'User Behavior Tracking', 'Conversion Tracking', 'Custom Reports'],
    links: {
      website: 'https://analytics.google.com',
    },
    featured: false,
  },
  {
    id: 'hotjar',
    name: 'Hotjar',
    category: 'marketing',
    type: 'User Behavior Analytics',
    description: 'Hotjar provides heatmaps, session recordings, and user feedback tools to help understand how visitors interact with your website. Invaluable for improving user experience and conversions.',
    logo: '/images/vendors/hotjar.png',
    services: ['Heatmaps', 'Session Recordings', 'Surveys', 'Feedback Widgets'],
    contact: {
      email: 'partnerships@hotjar.com',
    },
    links: {
      website: 'https://www.hotjar.com',
      twitter: 'https://twitter.com/hotjar',
    },
    featured: false,
  },

  // Payment Processing
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payments',
    type: 'Payment Processing',
    description: 'Stripe provides online payment processing for internet businesses. Their platform handles everything from simple payments to complex marketplace solutions with excellent developer tools.',
    logo: '/images/vendors/stripe.png',
    services: ['Payment Processing', 'Subscription Billing', 'Invoicing', 'Fraud Prevention'],
    contact: {
      email: 'partnerships@stripe.com',
    },
    links: {
      website: 'https://stripe.com',
      twitter: 'https://twitter.com/stripe',
      linkedin: 'https://www.linkedin.com/company/stripe',
    },
    featured: true,
    partnershipLevel: 'Verified Partner',
  },
  {
    id: 'square',
    name: 'Square',
    category: 'payments',
    type: 'Payment & POS Solutions',
    description: 'Square offers payment processing, point-of-sale systems, and business management tools. Great for businesses with both online and physical retail presence.',
    logo: '/images/vendors/square.png',
    services: ['Payment Processing', 'POS Systems', 'Online Store', 'Invoicing', 'Payroll'],
    contact: {
      email: 'partnerships@squareup.com',
    },
    links: {
      website: 'https://squareup.com',
      twitter: 'https://twitter.com/square',
    },
    featured: false,
  },

  // Design & Media
  {
    id: 'shutterstock',
    name: 'Shutterstock',
    category: 'design',
    type: 'Stock Media Library',
    description: 'Shutterstock offers millions of high-quality stock photos, vectors, illustrations, and videos. Essential for creating professional marketing materials and website content.',
    logo: '/images/vendors/shutterstock.png',
    services: ['Stock Photos', 'Vector Graphics', 'Video Clips', 'Music', 'Editorial Content'],
    contact: {
      email: 'enterprise@shutterstock.com',
    },
    links: {
      website: 'https://www.shutterstock.com',
      twitter: 'https://twitter.com/shutterstock',
    },
    featured: true,
    specialOffer: '10% off annual subscriptions through our referral',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    type: 'Design & Prototyping',
    description: 'Figma is a collaborative design platform for creating interfaces, prototypes, and design systems. It enables real-time collaboration and seamless handoff to developers.',
    logo: '/images/vendors/figma.png',
    services: ['UI Design', 'Prototyping', 'Design Systems', 'Developer Handoff', 'FigJam'],
    contact: {
      email: 'sales@figma.com',
    },
    links: {
      website: 'https://www.figma.com',
      twitter: 'https://twitter.com/figma',
      linkedin: 'https://www.linkedin.com/company/figma',
    },
    featured: false,
  },

  // Business Services
  {
    id: 'legalzoom',
    name: 'LegalZoom',
    category: 'business',
    type: 'Legal Services',
    description: 'LegalZoom provides affordable legal services for small businesses, including LLC formation, trademark registration, and contract templates. Perfect for businesses needing legal support without high attorney fees.',
    logo: '/images/vendors/legalzoom.png',
    services: ['LLC Formation', 'Trademark Registration', 'Business Contracts', 'Registered Agent'],
    contact: {
      phone: '(800) 773-0888',
    },
    links: {
      website: 'https://www.legalzoom.com',
      twitter: 'https://twitter.com/legalzoom',
    },
    featured: false,
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    category: 'business',
    type: 'Accounting Software',
    description: 'QuickBooks is the leading accounting software for small businesses. It handles invoicing, expense tracking, payroll, and financial reporting to keep your business finances organized.',
    logo: '/images/vendors/quickbooks.png',
    services: ['Invoicing', 'Expense Tracking', 'Payroll', 'Financial Reports', 'Tax Preparation'],
    contact: {
      email: 'partnerships@intuit.com',
    },
    links: {
      website: 'https://quickbooks.intuit.com',
      twitter: 'https://twitter.com/quickbooks',
    },
    featured: true,
    partnershipLevel: 'ProAdvisor',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'business',
    type: 'CRM & Marketing Platform',
    description: 'HubSpot provides a complete CRM platform with marketing, sales, and customer service tools. Their free CRM is perfect for growing businesses, with paid tiers for advanced features.',
    logo: '/images/vendors/hubspot.png',
    services: ['CRM', 'Marketing Hub', 'Sales Hub', 'Service Hub', 'CMS Hub'],
    contact: {
      email: 'partners@hubspot.com',
    },
    links: {
      website: 'https://www.hubspot.com',
      twitter: 'https://twitter.com/hubspot',
      linkedin: 'https://www.linkedin.com/company/hubspot',
    },
    featured: true,
    partnershipLevel: 'Solutions Partner',
    specialOffer: 'Free CRM setup consultation for our clients',
  },
];

/**
 * Get all vendors
 */
export function getAllVendors(): Vendor[] {
  return VENDORS;
}

/**
 * Get featured vendors only
 */
export function getFeaturedVendors(): Vendor[] {
  return VENDORS.filter((vendor) => vendor.featured);
}

/**
 * Get vendors by category
 * @param category - Category value to filter by, or 'all' for all vendors
 */
export function getVendorsByCategory(category: string): Vendor[] {
  if (category === 'all') {
    return VENDORS;
  }
  return VENDORS.filter((vendor) => vendor.category === category);
}

/**
 * Get a vendor by ID
 */
export function getVendorById(id: string): Vendor | undefined {
  return VENDORS.find((vendor) => vendor.id === id);
}

/**
 * Get vendor count by category
 */
export function getVendorCountByCategory(category: string): number {
  return getVendorsByCategory(category).length;
}

/**
 * Get category label by value
 */
export function getCategoryLabel(value: string): string {
  const category = VENDOR_CATEGORIES.find((cat) => cat.value === value);
  return category?.label || value;
}
