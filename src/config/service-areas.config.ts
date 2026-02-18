/**
 * Service Areas Configuration
 * Defines all neighborhoods and districts served by the business.
 * Used for the service areas page, local SEO optimization, and schema markup.
 */

export interface ServiceAreaData {
  /** Unique identifier for the area */
  id: string;
  /** Display name of the neighborhood/district */
  name: string;
  /** Brief description for display in cards */
  shortDescription: string;
  /** Type of area (neighborhood, district, suburb, etc.) */
  type: 'neighborhood' | 'district' | 'suburb' | 'city';
  /** Whether this is a primary service area */
  isPrimary?: boolean;
  /** Representative ZIP codes for this area */
  zipCodes?: string[];
  /** General region (for grouping) */
  region: 'central' | 'north' | 'south' | 'east' | 'west' | 'northwest' | 'northeast' | 'southwest' | 'southeast';
}

/**
 * All neighborhoods and districts served
 * Organized for local SEO and user navigation
 */
export const serviceAreas: ServiceAreaData[] = [
  // Add your service areas here
];

/**
 * Get primary service areas for featured display
 */
export function getPrimaryServiceAreas(): ServiceAreaData[] {
  return serviceAreas.filter(area => area.isPrimary);
}

/**
 * Get service areas grouped by region
 */
export function getServiceAreasByRegion(): Record<string, ServiceAreaData[]> {
  return serviceAreas.reduce((acc, area) => {
    if (!acc[area.region]) {
      acc[area.region] = [];
    }
    acc[area.region].push(area);
    return acc;
  }, {} as Record<string, ServiceAreaData[]>);
}

/**
 * Format region name for display
 */
export function formatRegionName(region: string): string {
  const regionNames: Record<string, string> = {
    // Add region display names here, e.g.:
    // central: 'Central',
    // north: 'North',
  };
  return regionNames[region] || region;
}

/**
 * Get all unique ZIP codes served
 */
export function getAllZipCodes(): string[] {
  const zipCodes = new Set<string>();
  serviceAreas.forEach(area => {
    area.zipCodes?.forEach(zip => zipCodes.add(zip));
  });
  return Array.from(zipCodes).sort();
}

/**
 * Total count of areas served
 */
export const totalAreasServed = serviceAreas.length;

/**
 * Service area statistics for display
 */
export const serviceAreaStats = {
  totalAreas: serviceAreas.length,
  totalZipCodes: getAllZipCodes().length,
  regions: Object.keys(getServiceAreasByRegion()).length,
};
