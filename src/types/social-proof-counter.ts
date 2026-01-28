/**
 * Social Proof Counter Types
 * Type definitions for the social proof counter component that displays
 * key business metrics with animated counting effects.
 */

/**
 * Represents a single metric item to be displayed in the counter
 */
export interface CounterMetric {
  /** Unique identifier for the metric */
  id: string;
  /** The numeric value to count up to */
  value: number;
  /** Optional prefix to display before the number (e.g., "$") */
  prefix?: string;
  /** Optional suffix to display after the number (e.g., "+", "%", "K") */
  suffix?: string;
  /** Label displayed below the number */
  label: string;
  /** Optional icon SVG string */
  icon?: string;
  /** Optional description text */
  description?: string;
}

/**
 * Props for the CounterCard component
 */
export interface CounterCardProps extends CounterMetric {
  /** Duration of the counting animation in milliseconds */
  animationDuration?: number;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the SocialProofCounterSection component
 */
export interface SocialProofCounterSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of metrics to display */
  metrics: CounterMetric[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Duration of counting animation in milliseconds */
  animationDuration?: number;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Configuration for the Social Proof Counter section
 */
export interface SocialProofCounterConfig {
  /** Section ID */
  id: string;
  /** Section heading */
  heading: string;
  /** Section subheading */
  subheading: string;
  /** Number of columns */
  columns: 2 | 3 | 4;
  /** Animation duration in milliseconds */
  animationDuration: number;
}
