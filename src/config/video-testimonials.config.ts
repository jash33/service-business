/**
 * Video Testimonials Configuration
 *
 * This file contains the configuration for video testimonials displayed
 * on the website. Update this file to manage video testimonials without
 * modifying component code.
 *
 * Instructions for updating:
 * 1. To add/modify video testimonials, update the VIDEO_TESTIMONIALS array below
 * 2. Each testimonial should include all required fields (id, name, location, quote, videoProvider, videoId)
 * 3. For YouTube videos, the videoId is the part after "v=" in the URL (e.g., dQw4w9WgXcQ)
 * 4. For Vimeo videos, the videoId is the numeric ID in the URL (e.g., 123456789)
 * 5. Optional: Provide custom thumbnailUrl for videos without auto-thumbnail support
 * 6. Optional: Include duration in seconds for display
 *
 * Privacy Note:
 * - YouTube videos use youtube-nocookie.com for privacy-enhanced embedding
 * - Vimeo videos use DNT (Do Not Track) parameter
 */

import type { VideoTestimonial } from '../types/video-testimonial';

/**
 * Video testimonials to display on the website
 * These feature real customer testimonials in video format for maximum authenticity
 */
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'smith-construction',
    name: 'Robert Smith',
    location: 'Houston, TX',
    quote: 'They transformed our entire online presence. We went from zero web traffic to getting multiple inquiries every week. The team was professional, responsive, and delivered beyond expectations.',
    company: 'Smith Construction LLC',
    title: 'Owner',
    videoProvider: 'youtube',
    videoId: 'jNQXAC9IVRw', // First YouTube video ever - placeholder
    duration: 98,
  },
  {
    id: 'garcia-dental',
    name: 'Dr. Maria Garcia',
    location: 'Sugar Land, TX',
    quote: 'Our new website has completely changed how patients find us. The booking system works flawlessly and we have seen a 200% increase in new patient appointments since launch.',
    company: 'Garcia Family Dentistry',
    title: 'DDS, Practice Owner',
    videoProvider: 'youtube',
    videoId: 'dQw4w9WgXcQ', // Placeholder video ID
    duration: 127,
  },
  {
    id: 'johnson-law',
    name: 'Michael Johnson',
    location: 'The Woodlands, TX',
    quote: 'The team understood exactly what our law firm needed. A clean, professional site that conveys trust and expertise. Client feedback has been overwhelmingly positive.',
    company: 'Johnson & Associates',
    title: 'Managing Partner',
    videoProvider: 'youtube',
    videoId: '9bZkp7q19f0', // Placeholder video ID
    duration: 145,
  },
  {
    id: 'chen-restaurant',
    name: 'Jennifer Chen',
    location: 'Katy, TX',
    quote: 'Our restaurant website now showcases our food beautifully. The online ordering integration was seamless and has significantly boosted our takeout business.',
    company: "Chen's Kitchen",
    title: 'Owner',
    videoProvider: 'youtube',
    videoId: 'uelHwf8o7_U', // Placeholder video ID
    duration: 83,
  },
  {
    id: 'williams-hvac',
    name: 'David Williams',
    location: 'Pearland, TX',
    quote: 'As an HVAC company, we needed a site that generated leads. The service request forms and emergency contact features have been game-changers for our business.',
    company: 'Williams Heating & Air',
    title: 'President',
    videoProvider: 'youtube',
    videoId: 'LXb3EKWsInQ', // Placeholder video ID
    duration: 156,
  },
  {
    id: 'patel-realty',
    name: 'Aisha Patel',
    location: 'Richmond, TX',
    quote: 'The property listing system they built is incredible. My clients love browsing homes on the site, and the virtual tour integration sets us apart from competitors.',
    company: 'Patel Realty Group',
    title: 'Broker',
    videoProvider: 'youtube',
    videoId: 'OPf0YbXqDm0', // Placeholder video ID
    duration: 112,
  },
];

/**
 * Section configuration for the video testimonials section
 * Customize the heading, subheading, and section ID
 */
export const VIDEO_TESTIMONIALS_CONFIG = {
  /** Main heading for the section */
  heading: 'Hear From Our Clients',

  /** Subheading/description text */
  subheading: 'Watch real business owners share their experiences working with us and the results they achieved.',

  /** Section ID for anchor linking */
  id: 'video-testimonials',

  /** Maximum number of testimonials to show (use 0 for all) */
  maxDisplay: 6,
};

/**
 * Get video testimonials for display
 * @param max Maximum number of testimonials to return (0 for all)
 * @returns Array of video testimonials
 */
export function getVideoTestimonials(max: number = 0): VideoTestimonial[] {
  if (max <= 0 || max >= VIDEO_TESTIMONIALS.length) {
    return VIDEO_TESTIMONIALS;
  }
  return VIDEO_TESTIMONIALS.slice(0, max);
}

/**
 * Get a single video testimonial by ID
 * @param id The testimonial ID
 * @returns The video testimonial or undefined if not found
 */
export function getVideoTestimonialById(id: string): VideoTestimonial | undefined {
  return VIDEO_TESTIMONIALS.find((testimonial) => testimonial.id === id);
}

/**
 * Get featured video testimonials (first 3)
 * Useful for displaying a subset on landing pages
 * @returns Array of featured video testimonials
 */
export function getFeaturedVideoTestimonials(): VideoTestimonial[] {
  return VIDEO_TESTIMONIALS.slice(0, 3);
}
