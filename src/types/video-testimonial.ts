/**
 * Video Testimonial Types
 * Type definitions for video testimonials with YouTube/Vimeo integration.
 * Extends the base testimonial types with video-specific properties.
 */

import type { Testimonial } from './testimonial';

/**
 * Supported video providers
 */
export type VideoProvider = 'youtube' | 'vimeo';

/**
 * Represents a video testimonial with embedded video support
 */
export interface VideoTestimonial extends Testimonial {
  /** Video provider (youtube or vimeo) */
  videoProvider: VideoProvider;
  /** Video ID from the provider (e.g., YouTube video ID) */
  videoId: string;
  /** Optional custom thumbnail URL (auto-generated if not provided) */
  thumbnailUrl?: string;
  /** Video duration in seconds */
  duration?: number;
  /** Optional transcript or summary of the video */
  transcript?: string;
}

/**
 * Props for the VideoPlayer component
 */
export interface VideoPlayerProps {
  /** Video provider (youtube or vimeo) */
  videoProvider: VideoProvider;
  /** Video ID from the provider */
  videoId: string;
  /** Alt text for the thumbnail image */
  thumbnailAlt: string;
  /** Optional custom thumbnail URL */
  thumbnailUrl?: string;
  /** Title for accessibility (used in iframe title) */
  title: string;
  /** Whether to lazy load the video (default: true) */
  lazyLoad?: boolean;
  /** Aspect ratio (default: 16/9) */
  aspectRatio?: number;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the VideoTestimonialCard component
 */
export interface VideoTestimonialCardProps extends VideoTestimonial {
  /** Whether to lazy load the video (default: true) */
  lazyLoad?: boolean;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the VideoTestimonialsSection component
 */
export interface VideoTestimonialsSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of video testimonials to display */
  testimonials: VideoTestimonial[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Utility function to get YouTube thumbnail URL
 * @param videoId YouTube video ID
 * @param quality Thumbnail quality (default: 'maxresdefault')
 * @returns Thumbnail URL
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault' = 'hqdefault'
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Utility function to get Vimeo thumbnail URL
 * Note: Vimeo requires API call to get thumbnail, so this returns a placeholder
 * For production, implement Vimeo API integration or provide thumbnailUrl
 * @param videoId Vimeo video ID
 * @returns Placeholder message (Vimeo requires API access for thumbnails)
 */
export function getVimeoThumbnailPlaceholder(videoId: string): string {
  // Vimeo requires API access for thumbnails
  // Use the oEmbed endpoint or provide custom thumbnailUrl
  return `https://vumbnail.com/${videoId}.jpg`;
}

/**
 * Utility function to get the embed URL for a video
 * @param provider Video provider
 * @param videoId Video ID
 * @returns Embed URL with privacy-enhanced options
 */
export function getVideoEmbedUrl(provider: VideoProvider, videoId: string): string {
  switch (provider) {
    case 'youtube':
      // Use youtube-nocookie.com for enhanced privacy
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${videoId}?dnt=1&byline=0&portrait=0`;
    default:
      return '';
  }
}

/**
 * Utility function to format video duration
 * @param seconds Duration in seconds
 * @returns Formatted duration string (e.g., "2:30" or "1:05:30")
 */
export function formatVideoDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}
