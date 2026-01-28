/**
 * OG Image URL Utility
 * Helper functions for resolving OG image URLs for pages
 */

import { seoConfig } from '../config/seo.config';
import { getOGImageFilename, pageOGConfigs } from '../config/og-image.config';

/**
 * Get the OG image URL for a given page path
 * Returns the dynamically generated image if available, otherwise falls back to default
 *
 * @param pathname - The page URL path (e.g., '/about', '/services/hosting')
 * @param customImage - Optional custom image that overrides the generated one
 * @returns The full URL to the OG image
 */
export function getOGImageUrl(pathname: string, customImage?: string): string {
  const baseUrl = seoConfig.siteUrl.replace(/\/$/, '');

  // If a custom image is provided, use it
  if (customImage) {
    // If it's already an absolute URL, return as-is
    if (customImage.startsWith('http://') || customImage.startsWith('https://')) {
      return customImage;
    }
    // Convert relative URL to absolute
    return `${baseUrl}${customImage.startsWith('/') ? '' : '/'}${customImage}`;
  }

  // Normalize the pathname
  const normalizedPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;

  // Check if we have a pre-generated image for this path
  if (pageOGConfigs[normalizedPath]) {
    const filename = getOGImageFilename(normalizedPath);
    return `${baseUrl}/og-images/${filename}`;
  }

  // For blog posts and case studies, we could generate dynamic images
  // For now, use the default image
  if (normalizedPath.startsWith('/blog/') || normalizedPath.startsWith('/case-studies/')) {
    // These pages could have custom images from their frontmatter
    // Fall through to default
  }

  // Fall back to default OG image
  return `${baseUrl}/og-images/og-default.png`;
}

/**
 * Get the OG image path (without base URL) for a given page
 * Useful for pages that need to reference the image relatively
 *
 * @param pathname - The page URL path
 * @returns The path to the OG image (starting with /)
 */
export function getOGImagePath(pathname: string): string {
  // Normalize the pathname
  const normalizedPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;

  // Check if we have a pre-generated image for this path
  if (pageOGConfigs[normalizedPath]) {
    const filename = getOGImageFilename(normalizedPath);
    return `/og-images/${filename}`;
  }

  // Fall back to default
  return '/og-images/og-default.png';
}

/**
 * Check if a dynamically generated OG image exists for a path
 *
 * @param pathname - The page URL path
 * @returns True if a generated image exists for this path
 */
export function hasGeneratedOGImage(pathname: string): boolean {
  const normalizedPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;

  return normalizedPath in pageOGConfigs;
}
