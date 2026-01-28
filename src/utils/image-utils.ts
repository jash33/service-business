/**
 * Image Utilities
 *
 * Utility functions for image optimization, including:
 * - Generating low-quality blur placeholders (LQIP)
 * - Converting images to WebP format references
 * - Generating responsive srcset strings
 */

/**
 * Standard responsive image widths for srcset generation
 * These widths cover common device breakpoints
 */
export const RESPONSIVE_WIDTHS = [320, 480, 640, 768, 1024, 1280, 1536, 1920];

/**
 * Default sizes attribute for responsive images
 * Provides sensible defaults for common layouts
 */
export const DEFAULT_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

/**
 * A tiny SVG placeholder that can be used as a blur placeholder
 * This is a 10x10 gray gradient that will be blurred by the browser
 */
export const DEFAULT_PLACEHOLDER_SVG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjFmNWY5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTJlOGYwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+PC9zdmc+';

/**
 * Generates a simple SVG placeholder with a solid color
 * This can be used as a lightweight blur placeholder
 *
 * @param color - The color to use (hex format, defaults to light gray)
 * @param width - The width of the SVG
 * @param height - The height of the SVG
 * @returns A base64-encoded SVG data URL
 *
 * @example
 * ```ts
 * const placeholder = generateColorPlaceholder('#e2e8f0', 16, 9);
 * // Returns: "data:image/svg+xml;base64,..."
 * ```
 */
export function generateColorPlaceholder(
  color: string = '#e2e8f0',
  width: number = 16,
  height: number = 9
): string {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect fill="${color}" width="${width}" height="${height}"/></svg>`;
  const base64 = typeof btoa === 'function'
    ? btoa(svg)
    : Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Generates a gradient SVG placeholder
 * Creates a smooth gradient that looks good when blurred
 *
 * @param colorStart - Starting color (hex format)
 * @param colorEnd - Ending color (hex format)
 * @param width - The width of the SVG
 * @param height - The height of the SVG
 * @returns A base64-encoded SVG data URL
 *
 * @example
 * ```ts
 * const placeholder = generateGradientPlaceholder('#f1f5f9', '#e2e8f0', 16, 9);
 * ```
 */
export function generateGradientPlaceholder(
  colorStart: string = '#f1f5f9',
  colorEnd: string = '#e2e8f0',
  width: number = 16,
  height: number = 9
): string {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${colorStart}"/><stop offset="100%" stop-color="${colorEnd}"/></linearGradient></defs><rect fill="url(#g)" width="${width}" height="${height}"/></svg>`;
  const base64 = typeof btoa === 'function'
    ? btoa(svg)
    : Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Converts an image path to its WebP equivalent
 * Assumes WebP versions exist alongside original images
 *
 * @param imagePath - The original image path
 * @returns The path with .webp extension
 *
 * @example
 * ```ts
 * getWebPPath('/images/hero.jpg') // Returns: '/images/hero.webp'
 * getWebPPath('/images/icon.svg') // Returns: '/images/icon.svg' (unchanged)
 * ```
 */
export function getWebPPath(imagePath: string): string {
  if (imagePath.endsWith('.svg') || imagePath.endsWith('.webp')) {
    return imagePath;
  }
  const lastDot = imagePath.lastIndexOf('.');
  if (lastDot === -1) return imagePath;
  return imagePath.substring(0, lastDot) + '.webp';
}

/**
 * Generates a srcset string for responsive images
 *
 * @param imagePath - The base image path
 * @param widths - Array of widths to include in srcset
 * @param maxWidth - Maximum width to include (original image width)
 * @returns A srcset string
 *
 * @example
 * ```ts
 * generateSrcSet('/images/hero.jpg', [320, 640, 1280], 1200)
 * // Returns: '/images/hero.jpg 320w, /images/hero.jpg 640w, /images/hero.jpg 1200w'
 * ```
 */
export function generateSrcSet(
  imagePath: string,
  widths: number[] = RESPONSIVE_WIDTHS,
  maxWidth?: number
): string {
  let filteredWidths = maxWidth
    ? widths.filter(w => w <= maxWidth)
    : widths;

  // Always include the max width if provided and not already in the list
  if (maxWidth && !filteredWidths.includes(maxWidth)) {
    filteredWidths.push(maxWidth);
  }

  return filteredWidths
    .sort((a, b) => a - b)
    .map(w => `${imagePath} ${w}w`)
    .join(', ');
}

/**
 * Interface for image optimization options
 */
export interface ImageOptimizationOptions {
  /** Generate responsive srcset */
  responsive?: boolean;
  /** Include WebP format support */
  webp?: boolean;
  /** Maximum image width */
  maxWidth?: number;
  /** Custom sizes attribute */
  sizes?: string;
  /** Generate a placeholder */
  placeholder?: boolean;
  /** Custom placeholder color */
  placeholderColor?: string;
}

/**
 * Generates optimized image attributes for use in templates
 *
 * @param src - The image source path
 * @param options - Optimization options
 * @returns Object with optimized image attributes
 *
 * @example
 * ```ts
 * const attrs = getOptimizedImageAttrs('/images/hero.jpg', {
 *   responsive: true,
 *   webp: true,
 *   maxWidth: 1200,
 *   placeholder: true
 * });
 * ```
 */
export function getOptimizedImageAttrs(
  src: string,
  options: ImageOptimizationOptions = {}
) {
  const {
    responsive = true,
    webp = true,
    maxWidth,
    sizes = DEFAULT_SIZES,
    placeholder = false,
    placeholderColor,
  } = options;

  const result: {
    src: string;
    srcWebP?: string;
    srcset?: string;
    srcsetWebP?: string;
    sizes?: string;
    placeholder?: string;
  } = { src };

  if (webp) {
    result.srcWebP = getWebPPath(src);
  }

  if (responsive) {
    result.srcset = generateSrcSet(src, RESPONSIVE_WIDTHS, maxWidth);
    result.sizes = sizes;

    if (webp) {
      result.srcsetWebP = result.srcset.replace(/\.(jpg|jpeg|png|gif)/gi, '.webp');
    }
  }

  if (placeholder) {
    result.placeholder = placeholderColor
      ? generateColorPlaceholder(placeholderColor)
      : DEFAULT_PLACEHOLDER_SVG;
  }

  return result;
}

/**
 * Check if an image path is a remote URL
 */
export function isRemoteImage(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//');
}

/**
 * Check if an image is an SVG
 */
export function isSvgImage(src: string): boolean {
  return src.toLowerCase().endsWith('.svg');
}
