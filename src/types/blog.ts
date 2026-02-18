/**
 * Blog Types
 * Type definitions for blog articles, categories, tags, and blog-related components.
 */

/**
 * Blog category for organizing articles
 */
export type BlogCategory =
  | 'tips-and-tricks'
  | 'how-to-guides'
  | 'industry-insights'
  | 'business-tips'
  | 'case-studies'
  | 'tutorials'
  | 'industry-news'
  | 'behind-the-scenes';

/**
 * Blog tag for article classification
 */
export interface BlogTag {
  /** Tag slug/identifier */
  slug: string;
  /** Display name */
  name: string;
}

/**
 * Author information for blog articles
 */
export interface BlogAuthor {
  /** Author name */
  name: string;
  /** Author avatar image URL */
  avatar?: string;
  /** Author bio/description */
  bio?: string;
  /** Author website or social link */
  url?: string;
}

/**
 * Image configuration for blog articles
 */
export interface BlogImage {
  /** Main image source */
  src: string;
  /** WebP format source for modern browsers */
  srcWebP?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Width for aspect ratio and lazy loading */
  width?: number;
  /** Height for aspect ratio and lazy loading */
  height?: number;
  /** Placeholder/blur-up image (base64 or low-res URL) */
  placeholder?: string;
}

/**
 * Table of contents heading item
 */
export interface TableOfContentsItem {
  /** Heading level (2, 3, or 4) */
  level: 2 | 3 | 4;
  /** Anchor ID for the heading */
  id: string;
  /** Display text */
  text: string;
}

/**
 * Represents a single blog article
 */
export interface BlogArticle {
  /** Unique identifier/slug for the article */
  id: string;
  /** Article title */
  title: string;
  /** Brief excerpt/summary (2-3 sentences) */
  excerpt: string;
  /** Full article content (HTML or Markdown) */
  content?: string;
  /** Featured image configuration */
  featuredImage: BlogImage;
  /** Article category */
  category: BlogCategory;
  /** Array of tags */
  tags: BlogTag[];
  /** Author information */
  author: BlogAuthor;
  /** Publication date (ISO 8601 format) */
  publishedDate: string;
  /** Last updated date (ISO 8601 format) */
  updatedDate?: string;
  /** Estimated reading time in minutes */
  readingTime: number;
  /** Whether this is a featured article */
  featured?: boolean;
  /** URL slug for the article */
  slug: string;
  /** Word count for schema markup */
  wordCount?: number;
  /** Table of contents items extracted from content */
  tableOfContents?: TableOfContentsItem[];
  /** IDs of related articles */
  relatedPostIds?: string[];
}

/**
 * Props for the BlogArticleCard component
 */
export interface BlogArticleCardProps extends BlogArticle {
  /** Additional CSS class names */
  class?: string;
  /** Whether to show the image loading state */
  showLoadingState?: boolean;
  /** Whether to display as a featured card (larger) */
  displayAsFeatured?: boolean;
}

/**
 * Filter option for blog filtering
 */
export interface BlogFilterOption {
  /** Display label */
  label: string;
  /** Filter value */
  value: string;
  /** Number of articles matching this filter */
  count?: number;
}

/**
 * Props for the BlogFilter component
 */
export interface BlogFilterProps {
  /** Available categories to filter by */
  categories: BlogFilterOption[];
  /** Available tags to filter by */
  tags: BlogFilterOption[];
  /** Currently selected category */
  selectedCategory?: string;
  /** Currently selected tags */
  selectedTags?: string[];
  /** Callback when category changes */
  onCategoryChange?: (category: string) => void;
  /** Callback when tags change */
  onTagsChange?: (tags: string[]) => void;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the BlogSearch component
 */
export interface BlogSearchProps {
  /** Current search query */
  query?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Callback when search query changes */
  onSearch?: (query: string) => void;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the BlogPagination component
 */
export interface BlogPaginationProps {
  /** Current page number (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Base URL for pagination links */
  baseUrl: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the BlogListing page/section
 */
export interface BlogListingProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of articles to display */
  articles: BlogArticle[];
  /** Number of articles per page */
  articlesPerPage?: number;
  /** Current page number */
  currentPage?: number;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Whether to enable filtering */
  enableFiltering?: boolean;
  /** Whether to enable search */
  enableSearch?: boolean;
  /** Whether to show featured article prominently */
  showFeaturedFirst?: boolean;
}

/**
 * Available blog categories with labels
 */
export const BLOG_CATEGORIES: BlogFilterOption[] = [
  { label: 'All Articles', value: 'all' },
  { label: 'Tips & Tricks', value: 'tips-and-tricks' },
  { label: 'How-To Guides', value: 'how-to-guides' },
  { label: 'Industry Insights', value: 'industry-insights' },
  { label: 'Business Tips', value: 'business-tips' },
  { label: 'Case Studies', value: 'case-studies' },
  { label: 'Tutorials', value: 'tutorials' },
  { label: 'Industry News', value: 'industry-news' },
  { label: 'Behind the Scenes', value: 'behind-the-scenes' },
];

/**
 * Default author for blog articles
 */
export const DEFAULT_AUTHOR: BlogAuthor = {
  name: 'Author Name', // TODO: Update with your business name
  avatar: '/images/team/default-author.svg',
  bio: 'Author bio goes here.', // TODO: Update with your actual author bio
};

/**
 * RSS feed configuration
 */
export interface RSSFeedConfig {
  /** Feed title */
  title: string;
  /** Feed description */
  description: string;
  /** Site URL */
  siteUrl: string;
  /** Feed URL */
  feedUrl: string;
  /** Language code */
  language: string;
  /** Copyright notice */
  copyright: string;
  /** Managing editor email */
  managingEditor?: string;
  /** Webmaster email */
  webMaster?: string;
}
