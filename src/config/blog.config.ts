/**
 * Blog Configuration
 *
 * This file contains the configuration for the blog listing page including
 * sample articles, categories, and RSS feed settings.
 *
 * Instructions for updating:
 * 1. To add new articles, add to the BLOG_ARTICLES array below
 * 2. Each article should include all required fields
 * 3. Images should be placed in the /public/blog/ directory
 * 4. Use WebP format for better performance when available
 */

import type { BlogArticle, BlogTag, RSSFeedConfig } from '../types/blog';

/**
 * Common tags used across articles
 */
export const COMMON_TAGS: Record<string, BlogTag> = {
  webDesign: { slug: 'web-design', name: 'Web Design' },
  webDevelopment: { slug: 'web-development', name: 'Web Development' },
  seo: { slug: 'seo', name: 'SEO' },
  performance: { slug: 'performance', name: 'Performance' },
  accessibility: { slug: 'accessibility', name: 'Accessibility' },
  ux: { slug: 'ux', name: 'UX Design' },
  smallBusiness: { slug: 'small-business', name: 'Small Business' },
  ecommerce: { slug: 'ecommerce', name: 'E-Commerce' },
  localBusiness: { slug: 'local-business', name: 'Local Business' },
  houston: { slug: 'houston', name: 'Houston' },
  responsive: { slug: 'responsive', name: 'Responsive Design' },
  wordpress: { slug: 'wordpress', name: 'WordPress' },
  astro: { slug: 'astro', name: 'Astro' },
  react: { slug: 'react', name: 'React' },
  typescript: { slug: 'typescript', name: 'TypeScript' },
  analytics: { slug: 'analytics', name: 'Analytics' },
  conversion: { slug: 'conversion', name: 'Conversion' },
  branding: { slug: 'branding', name: 'Branding' },
  mobile: { slug: 'mobile', name: 'Mobile' },
  security: { slug: 'security', name: 'Security' },
};

/**
 * Default author for blog articles
 */
const DEFAULT_AUTHOR = {
  name: 'Houston Web Services Team',
  avatar: '/images/team/default-author.svg',
  bio: 'Expert web design and development team serving Houston businesses since 2015.',
};

/**
 * Blog articles to display
 * Sorted by publishedDate (newest first) when rendered
 */
export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'why-your-houston-business-needs-professional-website-2024',
    title: 'Why Your Houston Business Needs a Professional Website in 2024',
    excerpt: 'Discover why having a professional website is essential for Houston businesses in 2024. Learn about local SEO benefits, customer trust factors, and how to compete in the digital marketplace.',
    featuredImage: {
      src: '/blog/houston-business-website.svg',
      alt: 'Houston skyline with digital elements representing business websites',
      width: 1200,
      height: 630,
    },
    category: 'business-tips',
    tags: [COMMON_TAGS.smallBusiness, COMMON_TAGS.houston, COMMON_TAGS.localBusiness, COMMON_TAGS.seo],
    author: DEFAULT_AUTHOR,
    publishedDate: '2024-01-15T09:00:00Z',
    readingTime: 8,
    featured: true,
    slug: 'why-your-houston-business-needs-professional-website-2024',
    wordCount: 1600,
    tableOfContents: [
      { level: 2, id: 'digital-landscape', text: 'The Digital Landscape for Houston Businesses' },
      { level: 2, id: 'first-impressions', text: 'First Impressions Matter More Than Ever' },
      { level: 3, id: 'trust-credibility', text: 'Building Trust and Credibility' },
      { level: 2, id: 'local-seo-benefits', text: 'Local SEO Benefits for Houston Businesses' },
      { level: 3, id: 'google-business', text: 'Google Business Profile Integration' },
      { level: 3, id: 'local-keywords', text: 'Targeting Local Keywords' },
      { level: 2, id: 'competitive-advantage', text: 'Gaining a Competitive Advantage' },
      { level: 2, id: 'getting-started', text: 'Getting Started with Your Website' },
    ],
    relatedPostIds: [
      'ultimate-guide-local-seo-houston-businesses',
      'content-marketing-strategies-local-businesses',
      '10-web-design-trends-dominating-2024',
    ],
    content: `
<h2 id="digital-landscape">The Digital Landscape for Houston Businesses</h2>

<p>In 2024, the digital landscape has evolved dramatically. For Houston businesses, having a professional website isn't just a nice-to-have—it's a critical business asset. With over <strong>4.3 million residents</strong> in the Houston metropolitan area and countless businesses competing for attention, your website is often the first point of contact between your business and potential customers.</p>

<p>Studies show that <strong>97% of consumers</strong> search online for local businesses before making a purchase decision. If your Houston business doesn't have a professional website, you're essentially invisible to a vast majority of potential customers.</p>

<h2 id="first-impressions">First Impressions Matter More Than Ever</h2>

<p>It takes just <strong>0.05 seconds</strong> for visitors to form an opinion about your website. That first impression determines whether they'll stay to learn more about your services or click away to a competitor. A professional website design immediately communicates:</p>

<ul>
  <li>Your business is established and legitimate</li>
  <li>You care about quality and attention to detail</li>
  <li>You're invested in serving your customers well</li>
  <li>Your business is current and relevant</li>
</ul>

<h3 id="trust-credibility">Building Trust and Credibility</h3>

<p>Trust is the foundation of any successful business relationship. Your website serves as a 24/7 ambassador for your brand, building credibility even when you're not available to speak with customers directly.</p>

<blockquote>
  <p>"75% of consumers judge a company's credibility based on their website design."</p>
</blockquote>

<p>A professional website includes elements that build trust: customer testimonials, professional photography, clear contact information, and secure connections (HTTPS). These elements work together to assure visitors that your Houston business is reliable and trustworthy.</p>

<h2 id="local-seo-benefits">Local SEO Benefits for Houston Businesses</h2>

<p>One of the most powerful advantages of having a professional website is the ability to appear in local search results. When Houston residents search for services you offer, a well-optimized website helps you appear at the top of search results.</p>

<h3 id="google-business">Google Business Profile Integration</h3>

<p>Your website works hand-in-hand with your Google Business Profile. When both are optimized and connected, you're more likely to appear in:</p>

<ul>
  <li>Google's local 3-pack (the map results)</li>
  <li>Organic search results</li>
  <li>Google Maps searches</li>
  <li>Voice search results</li>
</ul>

<h3 id="local-keywords">Targeting Local Keywords</h3>

<p>A professional website allows you to target Houston-specific keywords that your customers are actively searching for. Keywords like "Houston plumber," "web design in Houston," or "Houston restaurant near me" can drive highly qualified traffic to your site.</p>

<p>With proper on-page SEO, your Houston business can rank for hundreds of relevant local search terms, driving a steady stream of new customers to your door.</p>

<h2 id="competitive-advantage">Gaining a Competitive Advantage</h2>

<p>While many businesses have websites, not all websites are created equal. A professional, well-designed website gives you a significant competitive advantage:</p>

<ul>
  <li><strong>Better User Experience:</strong> Professional websites are easy to navigate and provide a seamless experience across all devices.</li>
  <li><strong>Faster Load Times:</strong> Optimized websites load quickly, reducing bounce rates and improving conversions.</li>
  <li><strong>Clear Call-to-Actions:</strong> Strategic design guides visitors toward taking action, whether that's calling, filling out a form, or making a purchase.</li>
  <li><strong>Mobile Optimization:</strong> With over 60% of searches coming from mobile devices, a mobile-friendly website is essential.</li>
</ul>

<h2 id="getting-started">Getting Started with Your Website</h2>

<p>Ready to take your Houston business to the next level with a professional website? Here are the steps to get started:</p>

<ol>
  <li><strong>Define Your Goals:</strong> What do you want your website to accomplish? Generate leads? Sell products? Build brand awareness?</li>
  <li><strong>Know Your Audience:</strong> Understanding your Houston customers helps create a website that resonates with them.</li>
  <li><strong>Choose the Right Partner:</strong> Work with a professional web design agency that understands the Houston market.</li>
  <li><strong>Plan Your Content:</strong> Great websites start with great content. Plan your messaging carefully.</li>
  <li><strong>Launch and Optimize:</strong> Your website launch is just the beginning. Continuous optimization keeps you ahead of the competition.</li>
</ol>

<p>At Houston Web Services, we specialize in creating professional websites for Houston businesses. Our team understands the local market and can help you create a website that drives real results. <a href="/contact">Contact us today</a> to get started.</p>
`,
  },
  {
    id: '10-web-design-trends-dominating-2024',
    title: '10 Web Design Trends Dominating 2024',
    excerpt: 'Stay ahead of the curve with these top 10 web design trends for 2024. From AI-powered interfaces to sustainable design practices, learn what\'s shaping the future of web design.',
    featuredImage: {
      src: '/blog/web-design-trends-2024.svg',
      alt: 'Modern web design trends illustration showing various UI elements',
      width: 1200,
      height: 630,
    },
    category: 'web-design',
    tags: [COMMON_TAGS.webDesign, COMMON_TAGS.ux, COMMON_TAGS.responsive],
    author: DEFAULT_AUTHOR,
    publishedDate: '2024-01-10T10:00:00Z',
    readingTime: 12,
    featured: true,
    slug: '10-web-design-trends-dominating-2024',
  },
  {
    id: 'ultimate-guide-local-seo-houston-businesses',
    title: 'The Ultimate Guide to Local SEO for Houston Businesses',
    excerpt: 'Master local SEO and get your Houston business found online. This comprehensive guide covers Google Business Profile optimization, local keywords, and citation building strategies.',
    featuredImage: {
      src: '/blog/local-seo-guide.svg',
      alt: 'Local SEO illustration showing map pins and search results',
      width: 1200,
      height: 630,
    },
    category: 'seo',
    tags: [COMMON_TAGS.seo, COMMON_TAGS.localBusiness, COMMON_TAGS.houston, COMMON_TAGS.smallBusiness],
    author: DEFAULT_AUTHOR,
    publishedDate: '2024-01-05T08:30:00Z',
    readingTime: 15,
    featured: false,
    slug: 'ultimate-guide-local-seo-houston-businesses',
  },
  {
    id: 'website-speed-optimization-complete-guide',
    title: 'Website Speed Optimization: A Complete Guide for 2024',
    excerpt: 'Learn how to dramatically improve your website\'s loading speed. From image optimization to code minification, discover techniques that boost performance and user experience.',
    featuredImage: {
      src: '/blog/speed-optimization.svg',
      alt: 'Website speed metrics dashboard illustration',
      width: 1200,
      height: 630,
    },
    category: 'web-development',
    tags: [COMMON_TAGS.performance, COMMON_TAGS.webDevelopment, COMMON_TAGS.seo],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-12-28T11:00:00Z',
    readingTime: 10,
    featured: false,
    slug: 'website-speed-optimization-complete-guide',
  },
  {
    id: 'how-we-increased-conversion-rates-150-percent',
    title: 'How We Increased Conversion Rates by 150% for a Houston Law Firm',
    excerpt: 'Case study: Learn the exact strategies we used to help a Houston law firm increase their website conversion rates by 150% in just 3 months through strategic redesign and optimization.',
    featuredImage: {
      src: '/blog/conversion-case-study.svg',
      alt: 'Conversion rate optimization chart showing growth',
      width: 1200,
      height: 630,
    },
    category: 'case-studies',
    tags: [COMMON_TAGS.conversion, COMMON_TAGS.webDesign, COMMON_TAGS.houston, COMMON_TAGS.ux],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-12-20T09:00:00Z',
    readingTime: 7,
    featured: false,
    slug: 'how-we-increased-conversion-rates-150-percent',
  },
  {
    id: 'accessibility-matters-making-website-inclusive',
    title: 'Why Accessibility Matters: Making Your Website Inclusive',
    excerpt: 'Web accessibility isn\'t just the right thing to do—it\'s good for business. Learn how to make your website accessible to all users and comply with ADA requirements.',
    featuredImage: {
      src: '/blog/accessibility-guide.svg',
      alt: 'Web accessibility icons and inclusive design elements',
      width: 1200,
      height: 630,
    },
    category: 'web-development',
    tags: [COMMON_TAGS.accessibility, COMMON_TAGS.webDevelopment, COMMON_TAGS.ux],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-12-15T14:00:00Z',
    readingTime: 9,
    featured: false,
    slug: 'accessibility-matters-making-website-inclusive',
  },
  {
    id: 'choosing-right-ecommerce-platform-2024',
    title: 'Choosing the Right E-Commerce Platform in 2024',
    excerpt: 'Shopify, WooCommerce, or custom solution? Compare the top e-commerce platforms and find the perfect fit for your online store based on features, pricing, and scalability.',
    featuredImage: {
      src: '/blog/ecommerce-platforms.svg',
      alt: 'E-commerce platform comparison illustration',
      width: 1200,
      height: 630,
    },
    category: 'tutorials',
    tags: [COMMON_TAGS.ecommerce, COMMON_TAGS.webDevelopment, COMMON_TAGS.smallBusiness],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-12-10T10:30:00Z',
    readingTime: 11,
    featured: false,
    slug: 'choosing-right-ecommerce-platform-2024',
  },
  {
    id: 'importance-mobile-first-design',
    title: 'The Importance of Mobile-First Design in 2024',
    excerpt: 'With over 60% of web traffic coming from mobile devices, mobile-first design is no longer optional. Learn the principles and best practices for creating mobile-optimized websites.',
    featuredImage: {
      src: '/blog/mobile-first-design.svg',
      alt: 'Mobile-first design concept with responsive layouts',
      width: 1200,
      height: 630,
    },
    category: 'web-design',
    tags: [COMMON_TAGS.mobile, COMMON_TAGS.responsive, COMMON_TAGS.webDesign, COMMON_TAGS.ux],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-12-05T09:00:00Z',
    readingTime: 8,
    featured: false,
    slug: 'importance-mobile-first-design',
  },
  {
    id: 'google-analytics-4-complete-setup-guide',
    title: 'Google Analytics 4: Complete Setup Guide for Small Businesses',
    excerpt: 'Step-by-step guide to setting up Google Analytics 4 for your business website. Learn how to track visitors, understand user behavior, and make data-driven decisions.',
    featuredImage: {
      src: '/blog/ga4-setup-guide.svg',
      alt: 'Google Analytics 4 dashboard interface illustration',
      width: 1200,
      height: 630,
    },
    category: 'tutorials',
    tags: [COMMON_TAGS.analytics, COMMON_TAGS.smallBusiness, COMMON_TAGS.seo],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-11-28T11:00:00Z',
    readingTime: 13,
    featured: false,
    slug: 'google-analytics-4-complete-setup-guide',
  },
  {
    id: 'building-brand-identity-through-web-design',
    title: 'Building a Strong Brand Identity Through Web Design',
    excerpt: 'Your website is often the first impression customers have of your brand. Learn how to use web design elements to create a cohesive and memorable brand identity.',
    featuredImage: {
      src: '/blog/brand-identity.svg',
      alt: 'Brand identity elements including logo, colors, and typography',
      width: 1200,
      height: 630,
    },
    category: 'web-design',
    tags: [COMMON_TAGS.branding, COMMON_TAGS.webDesign, COMMON_TAGS.ux],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-11-20T08:00:00Z',
    readingTime: 9,
    featured: false,
    slug: 'building-brand-identity-through-web-design',
  },
  {
    id: 'website-security-best-practices-2024',
    title: 'Website Security Best Practices for 2024',
    excerpt: 'Protect your website and your customers with these essential security best practices. From SSL certificates to secure hosting, learn how to keep your site safe.',
    featuredImage: {
      src: '/blog/website-security.svg',
      alt: 'Website security illustration with shield and lock icons',
      width: 1200,
      height: 630,
    },
    category: 'web-development',
    tags: [COMMON_TAGS.security, COMMON_TAGS.webDevelopment, COMMON_TAGS.smallBusiness],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-11-15T10:00:00Z',
    readingTime: 10,
    featured: false,
    slug: 'website-security-best-practices-2024',
  },
  {
    id: 'content-marketing-strategies-local-businesses',
    title: 'Content Marketing Strategies for Local Houston Businesses',
    excerpt: 'Learn effective content marketing strategies tailored for local Houston businesses. From blog posts to social media, discover how to attract and engage your local audience.',
    featuredImage: {
      src: '/blog/content-marketing.svg',
      alt: 'Content marketing strategy illustration with various content types',
      width: 1200,
      height: 630,
    },
    category: 'digital-marketing',
    tags: [COMMON_TAGS.localBusiness, COMMON_TAGS.houston, COMMON_TAGS.smallBusiness],
    author: DEFAULT_AUTHOR,
    publishedDate: '2023-11-08T09:30:00Z',
    readingTime: 11,
    featured: false,
    slug: 'content-marketing-strategies-local-businesses',
  },
];

/**
 * Section configuration for the blog listing page
 */
export const BLOG_LISTING_CONFIG = {
  /** Main heading for the section */
  heading: 'Our Blog',

  /** Subheading/description text */
  subheading: 'Insights, tips, and resources to help your Houston business succeed online.',

  /** Number of articles per page */
  articlesPerPage: 9,

  /** Section ID for anchor linking */
  id: 'blog',

  /** Enable filtering by category and tags */
  enableFiltering: true,

  /** Enable search functionality */
  enableSearch: true,

  /** Show featured articles prominently */
  showFeaturedFirst: true,
};

/**
 * RSS feed configuration
 */
export const RSS_FEED_CONFIG: RSSFeedConfig = {
  title: 'Houston Web Services Blog',
  description: 'Web design, development, and digital marketing insights for Houston businesses.',
  siteUrl: 'https://houston-web-services.com',
  feedUrl: 'https://houston-web-services.com/blog/rss.xml',
  language: 'en-us',
  copyright: `Copyright ${new Date().getFullYear()} Houston Web Services. All rights reserved.`,
};

/**
 * Helper function to get articles by category
 */
export function getArticlesByCategory(category: string): BlogArticle[] {
  if (category === 'all') return BLOG_ARTICLES;
  return BLOG_ARTICLES.filter(article => article.category === category);
}

/**
 * Helper function to get articles by tag
 */
export function getArticlesByTag(tagSlug: string): BlogArticle[] {
  return BLOG_ARTICLES.filter(article =>
    article.tags.some(tag => tag.slug === tagSlug)
  );
}

/**
 * Helper function to get featured articles
 */
export function getFeaturedArticles(): BlogArticle[] {
  return BLOG_ARTICLES.filter(article => article.featured);
}

/**
 * Helper function to sort articles by date (newest first)
 */
export function sortArticlesByDate(articles: BlogArticle[]): BlogArticle[] {
  return [...articles].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

/**
 * Helper function to get all unique tags from articles
 */
export function getAllTags(): BlogTag[] {
  const tagMap = new Map<string, BlogTag>();
  BLOG_ARTICLES.forEach(article => {
    article.tags.forEach(tag => {
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, tag);
      }
    });
  });
  return Array.from(tagMap.values());
}

/**
 * Helper function to paginate articles
 */
export function paginateArticles(
  articles: BlogArticle[],
  page: number,
  perPage: number
): { articles: BlogArticle[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(articles.length / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    articles: articles.slice(start, end),
    totalPages,
    currentPage,
  };
}
