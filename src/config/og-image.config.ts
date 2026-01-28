/**
 * OG Image Configuration
 * Settings for generating Open Graph images for social media sharing
 */

export interface OGImageConfig {
  /** Width of generated OG images (recommended: 1200) */
  width: number;
  /** Height of generated OG images (recommended: 630) */
  height: number;
  /** Brand/company name to display */
  brandName: string;
  /** Brand tagline to display below brand name */
  brandTagline: string;
  /** Primary brand color (background gradient start) */
  primaryColor: string;
  /** Secondary brand color (background gradient end) */
  secondaryColor: string;
  /** Accent color for decorative elements */
  accentColor: string;
  /** Text color for main content */
  textColor: string;
  /** Light text color for secondary content */
  lightTextColor: string;
  /** Font family for titles */
  titleFont: string;
  /** Font family for body text */
  bodyFont: string;
  /** Website URL to display */
  websiteUrl: string;
}

/**
 * Default OG Image Configuration
 * Matches the Houston Web Services brand identity
 */
export const ogImageConfig: OGImageConfig = {
  width: 1200,
  height: 630,
  brandName: 'Houston Web Services',
  brandTagline: 'Professional Web Design for Local Businesses',
  primaryColor: '#1a365d', // Navy blue - matches theme color
  secondaryColor: '#2c5282', // Lighter navy
  accentColor: '#ed8936', // Orange accent
  textColor: '#ffffff',
  lightTextColor: '#e2e8f0',
  titleFont: 'Inter',
  bodyFont: 'Inter',
  websiteUrl: 'houstonwebservices.com',
};

/**
 * Page-specific OG image configurations
 * Maps page paths to custom visual configurations
 */
export interface PageOGConfig {
  /** Page title to display on the OG image */
  title: string;
  /** Subtitle/description to display */
  subtitle?: string;
  /** Category/type badge text */
  category?: string;
  /** Custom icon identifier */
  icon?: string;
  /** Override background gradient colors */
  backgroundColors?: [string, string];
}

/**
 * Pre-defined page configurations for consistent OG images
 */
export const pageOGConfigs: Record<string, PageOGConfig> = {
  '/': {
    title: 'Houston Web Services',
    subtitle: 'Professional Web Design & Development for Small Businesses',
    category: 'Web Services',
  },
  '/about': {
    title: 'About Us',
    subtitle: 'Meet the Team Behind Houston Web Services',
    category: 'About',
  },
  '/contact': {
    title: 'Contact Us',
    subtitle: 'Get Your Free Consultation Today',
    category: 'Contact',
  },
  '/portfolio': {
    title: 'Our Portfolio',
    subtitle: 'Showcasing Our Best Work for Houston Businesses',
    category: 'Portfolio',
  },
  '/services': {
    title: 'Our Services',
    subtitle: 'Comprehensive Web Solutions for Your Business',
    category: 'Services',
  },
  '/services/website-design': {
    title: 'Website Design',
    subtitle: 'Custom, Responsive Websites That Convert',
    category: 'Service',
    icon: 'design',
  },
  '/services/maintenance': {
    title: 'Website Maintenance',
    subtitle: 'Keep Your Site Secure & Up-to-Date',
    category: 'Service',
    icon: 'maintenance',
  },
  '/services/hosting': {
    title: 'Web Hosting',
    subtitle: 'Fast, Reliable Hosting for Your Business',
    category: 'Service',
    icon: 'hosting',
  },
  '/services/seo': {
    title: 'SEO Services',
    subtitle: 'Get Found by More Customers Online',
    category: 'Service',
    icon: 'seo',
  },
  '/blog': {
    title: 'Blog',
    subtitle: 'Tips & Insights for Small Business Owners',
    category: 'Blog',
  },
  '/booking': {
    title: 'Book a Consultation',
    subtitle: 'Schedule Your Free Strategy Session',
    category: 'Booking',
  },
  '/financing': {
    title: 'Financing Options',
    subtitle: 'Affordable Payment Plans for Your Website',
    category: 'Financing',
  },
  '/service-areas': {
    title: 'Service Areas',
    subtitle: 'Serving Houston & Surrounding Communities',
    category: 'Service Areas',
  },
  '/service-request': {
    title: 'Service Request',
    subtitle: 'Submit Your Project Requirements',
    category: 'Request',
  },
};

/**
 * Get OG image configuration for a specific page path
 * @param path - The page URL path
 * @param overrides - Optional overrides for the page config
 * @returns The merged OG configuration for the page
 */
export function getPageOGConfig(
  path: string,
  overrides?: Partial<PageOGConfig>
): PageOGConfig {
  // Normalize path
  const normalizedPath = path.endsWith('/') && path !== '/'
    ? path.slice(0, -1)
    : path;

  // Get pre-defined config or create default
  const baseConfig = pageOGConfigs[normalizedPath] || {
    title: 'Houston Web Services',
    subtitle: 'Professional Web Design for Local Businesses',
    category: 'Web Services',
  };

  // Merge with overrides
  return {
    ...baseConfig,
    ...overrides,
  };
}

/**
 * Generate the OG image filename for a given path
 * @param path - The page URL path
 * @returns The filename for the OG image
 */
export function getOGImageFilename(path: string): string {
  if (path === '/' || path === '') {
    return 'og-home.png';
  }

  // Convert path to filename: /services/website-design -> services-website-design.png
  const filename = path
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .replace(/\//g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');

  return `og-${filename}.png`;
}

/**
 * Generate the full URL path to an OG image
 * @param path - The page URL path
 * @param baseUrl - The site base URL
 * @returns The full URL to the OG image
 */
export function getOGImageUrl(path: string, baseUrl: string): string {
  const filename = getOGImageFilename(path);
  const cleanBase = baseUrl.replace(/\/$/, '');
  return `${cleanBase}/og-images/${filename}`;
}
