/**
 * Case Studies Configuration
 * Add your case studies to the CASE_STUDIES array below.
 * Each case study follows the CaseStudy type definition.
 */

import type { CaseStudy } from '../types/case-study';

/**
 * Case studies data
 */
export const CASE_STUDIES: CaseStudy[] = [];

/**
 * Get a case study by slug
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

/**
 * Get all published case studies
 */
export function getPublishedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.published);
}

/**
 * Get featured case studies
 */
export function getFeaturedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.published && cs.featured);
}

/**
 * Get related case studies
 */
export function getRelatedCaseStudies(caseStudy: CaseStudy): CaseStudy[] {
  if (!caseStudy.relatedCaseStudyIds) return [];
  return caseStudy.relatedCaseStudyIds
    .map((id) => CASE_STUDIES.find((cs) => cs.id === id))
    .filter((cs): cs is CaseStudy => cs !== undefined && cs.published);
}
