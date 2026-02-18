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
  // TODO: Replace with tags relevant to your service business
  tipsAndTricks: { slug: 'tips-and-tricks', name: 'Tips & Tricks' },
  howTo: { slug: 'how-to', name: 'How-To' },
  maintenance: { slug: 'maintenance', name: 'Maintenance' },
  seasonal: { slug: 'seasonal', name: 'Seasonal' },
  smallBusiness: { slug: 'small-business', name: 'Small Business' },
  localBusiness: { slug: 'local-business', name: 'Local Business' },
  customerService: { slug: 'customer-service', name: 'Customer Service' },
  behindTheScenes: { slug: 'behind-the-scenes', name: 'Behind the Scenes' },
  safety: { slug: 'safety', name: 'Safety' },
  budgeting: { slug: 'budgeting', name: 'Budgeting' },
  diy: { slug: 'diy', name: 'DIY' },
  hiring: { slug: 'hiring', name: 'Hiring a Pro' },
};

/**
 * Default author for blog articles
 * TODO: Update with your actual author information
 */
export const DEFAULT_AUTHOR = {
  name: 'Author Name',
  avatar: '/images/team/default-author.svg',
  bio: 'Author bio goes here.',
};

/**
 * Blog articles to display
 * Sorted by publishedDate (newest first) when rendered
 *
 * TODO: Add your blog articles here. Example format:
 * {
 *   id: 'my-article-slug',
 *   title: 'My Article Title',
 *   excerpt: 'Brief description of the article...',
 *   featuredImage: { src: '/blog/image.svg', alt: 'Image description', width: 1200, height: 630 },
 *   category: 'tips-and-tricks',
 *   tags: [COMMON_TAGS.tipsAndTricks],
 *   author: DEFAULT_AUTHOR,
 *   publishedDate: '2024-01-15T09:00:00Z',
 *   readingTime: 8,
 *   featured: false,
 *   slug: 'my-article-slug',
 * }
 */
export const BLOG_ARTICLES: BlogArticle[] = [];

/**
 * Section configuration for the blog listing page
 */
export const BLOG_LISTING_CONFIG = {
  /** Main heading for the section */
  heading: 'Our Blog',

  /** Subheading/description text */
  subheading: 'Insights, tips, and resources to help your business succeed.',

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
  title: '', // Configure: Blog RSS feed title
  description: '', // Configure: Blog RSS feed description
  siteUrl: '', // Configure: Production URL (e.g., https://example.com)
  feedUrl: '', // Configure: RSS feed URL (e.g., https://example.com/blog/rss.xml)
  language: 'en-us',
  copyright: `Copyright ${new Date().getFullYear()}. All rights reserved.`, // Configure: Add business name
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
