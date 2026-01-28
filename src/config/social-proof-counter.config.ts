/**
 * Social Proof Counter Configuration
 *
 * This file contains the configuration and data for the social proof counter section.
 * Edit the metrics below to update the business statistics displayed on the homepage.
 *
 * Tips:
 * - Use round numbers that are impressive but believable
 * - Keep labels concise (2-4 words)
 * - Update these values periodically to reflect business growth
 */

import type { CounterMetric, SocialProofCounterConfig } from '../types/social-proof-counter';

/**
 * SVG icons for the counter metrics
 */
const counterIcons = {
  projects: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
  years: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>`,
  customers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  satisfaction: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>`,
};

/**
 * Business metrics to display in the social proof counter section
 *
 * Update these values to reflect your actual business statistics:
 * - value: The number to animate to
 * - suffix: Use "+" for "X+", "%" for percentages, "K" for thousands
 * - label: Short, descriptive text (2-4 words)
 */
export const SOCIAL_PROOF_METRICS: CounterMetric[] = [
  {
    id: 'projects-completed',
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    icon: counterIcons.projects,
    description: 'Websites designed and launched for local businesses',
  },
  {
    id: 'years-experience',
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    icon: counterIcons.years,
    description: 'Years of professional web development expertise',
  },
  {
    id: 'satisfied-customers',
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    icon: counterIcons.customers,
    description: 'Satisfied business owners across Houston',
  },
  {
    id: 'satisfaction-rate',
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: counterIcons.satisfaction,
    description: 'Of our clients would recommend our services',
  },
];

/**
 * Section configuration
 */
export const SOCIAL_PROOF_COUNTER_CONFIG: SocialProofCounterConfig = {
  id: 'social-proof',
  heading: 'Trusted by Houston Businesses',
  subheading: 'Numbers that reflect our commitment to helping local businesses succeed online.',
  columns: 4,
  animationDuration: 2000,
};
