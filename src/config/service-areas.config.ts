/**
 * Service Areas Configuration
 * Defines all Houston neighborhoods and districts served by Houston Web Services.
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
  /** General region within Houston (for grouping) */
  region: 'central' | 'north' | 'south' | 'east' | 'west' | 'northwest' | 'northeast' | 'southwest' | 'southeast';
}

/**
 * All Houston neighborhoods and districts served
 * Organized for local SEO and user navigation
 */
export const serviceAreas: ServiceAreaData[] = [
  // Central Houston
  {
    id: 'downtown-houston',
    name: 'Downtown Houston',
    shortDescription: 'The heart of Houston\'s business district, home to major corporations and startups.',
    type: 'district',
    isPrimary: true,
    zipCodes: ['77002', '77003', '77010'],
    region: 'central',
  },
  {
    id: 'midtown',
    name: 'Midtown',
    shortDescription: 'A vibrant urban neighborhood with restaurants, bars, and growing businesses.',
    type: 'neighborhood',
    isPrimary: true,
    zipCodes: ['77004', '77006'],
    region: 'central',
  },
  {
    id: 'montrose',
    name: 'Montrose',
    shortDescription: 'An eclectic, artsy neighborhood known for its diverse small businesses.',
    type: 'neighborhood',
    isPrimary: true,
    zipCodes: ['77006', '77019'],
    region: 'central',
  },
  {
    id: 'heights',
    name: 'The Heights',
    shortDescription: 'Historic neighborhood with charming shops, restaurants, and local businesses.',
    type: 'neighborhood',
    isPrimary: true,
    zipCodes: ['77007', '77008', '77009'],
    region: 'central',
  },
  {
    id: 'museum-district',
    name: 'Museum District',
    shortDescription: 'Cultural hub home to world-class museums and professional services.',
    type: 'district',
    zipCodes: ['77004', '77005'],
    region: 'central',
  },
  {
    id: 'medical-center',
    name: 'Texas Medical Center',
    shortDescription: 'The world\'s largest medical center with healthcare-related businesses.',
    type: 'district',
    isPrimary: true,
    zipCodes: ['77030', '77054'],
    region: 'central',
  },
  {
    id: 'river-oaks',
    name: 'River Oaks',
    shortDescription: 'Upscale neighborhood with luxury retail and professional services.',
    type: 'neighborhood',
    zipCodes: ['77019', '77027'],
    region: 'central',
  },
  {
    id: 'galleria-uptown',
    name: 'Galleria / Uptown',
    shortDescription: 'Premier shopping and business district with corporate offices.',
    type: 'district',
    isPrimary: true,
    zipCodes: ['77056', '77057', '77027'],
    region: 'west',
  },

  // West Houston
  {
    id: 'memorial',
    name: 'Memorial',
    shortDescription: 'Affluent area with established businesses and family-owned companies.',
    type: 'neighborhood',
    zipCodes: ['77024', '77079'],
    region: 'west',
  },
  {
    id: 'energy-corridor',
    name: 'Energy Corridor',
    shortDescription: 'Major employment center for energy and technology companies.',
    type: 'district',
    isPrimary: true,
    zipCodes: ['77077', '77079', '77094'],
    region: 'west',
  },
  {
    id: 'katy',
    name: 'Katy',
    shortDescription: 'Fast-growing suburb with thriving small business community.',
    type: 'suburb',
    isPrimary: true,
    zipCodes: ['77449', '77450', '77493', '77494'],
    region: 'west',
  },
  {
    id: 'cinco-ranch',
    name: 'Cinco Ranch',
    shortDescription: 'Master-planned community with local service businesses.',
    type: 'neighborhood',
    zipCodes: ['77450', '77494'],
    region: 'west',
  },
  {
    id: 'westchase',
    name: 'Westchase',
    shortDescription: 'Business district with diverse companies and restaurants.',
    type: 'district',
    zipCodes: ['77042', '77063', '77077'],
    region: 'west',
  },

  // Northwest Houston
  {
    id: 'cypress',
    name: 'Cypress',
    shortDescription: 'Rapidly growing area with new businesses and retail centers.',
    type: 'suburb',
    isPrimary: true,
    zipCodes: ['77429', '77433', '77065'],
    region: 'northwest',
  },
  {
    id: 'spring',
    name: 'Spring',
    shortDescription: 'Family-friendly suburb with local shops and service providers.',
    type: 'suburb',
    zipCodes: ['77373', '77379', '77388', '77389'],
    region: 'northwest',
  },
  {
    id: 'tomball',
    name: 'Tomball',
    shortDescription: 'Charming small-town atmosphere with growing business community.',
    type: 'suburb',
    zipCodes: ['77375', '77377'],
    region: 'northwest',
  },
  {
    id: 'champions',
    name: 'Champions',
    shortDescription: 'Established community with retail and professional services.',
    type: 'neighborhood',
    zipCodes: ['77069', '77070'],
    region: 'northwest',
  },

  // North Houston
  {
    id: 'the-woodlands',
    name: 'The Woodlands',
    shortDescription: 'Master-planned community with corporate headquarters and retail.',
    type: 'suburb',
    isPrimary: true,
    zipCodes: ['77380', '77381', '77382', '77384', '77385', '77386'],
    region: 'north',
  },
  {
    id: 'greenspoint',
    name: 'Greenspoint',
    shortDescription: 'Commercial district with office buildings and businesses.',
    type: 'district',
    zipCodes: ['77060', '77067'],
    region: 'north',
  },
  {
    id: 'humble',
    name: 'Humble',
    shortDescription: 'Growing suburb with local businesses and retail centers.',
    type: 'suburb',
    zipCodes: ['77338', '77346', '77396'],
    region: 'north',
  },
  {
    id: 'kingwood',
    name: 'Kingwood',
    shortDescription: 'Master-planned community known as "The Livable Forest."',
    type: 'suburb',
    zipCodes: ['77339', '77345'],
    region: 'northeast',
  },
  {
    id: 'atascocita',
    name: 'Atascocita',
    shortDescription: 'Fast-growing community with local service businesses.',
    type: 'suburb',
    zipCodes: ['77346'],
    region: 'northeast',
  },

  // Southwest Houston
  {
    id: 'sugar-land',
    name: 'Sugar Land',
    shortDescription: 'Affluent suburb with corporate offices and retail.',
    type: 'suburb',
    isPrimary: true,
    zipCodes: ['77478', '77479', '77498'],
    region: 'southwest',
  },
  {
    id: 'missouri-city',
    name: 'Missouri City',
    shortDescription: 'Diverse suburb with growing small business community.',
    type: 'suburb',
    zipCodes: ['77459', '77489'],
    region: 'southwest',
  },
  {
    id: 'stafford',
    name: 'Stafford',
    shortDescription: 'Business-friendly city known for no property tax.',
    type: 'suburb',
    zipCodes: ['77477'],
    region: 'southwest',
  },
  {
    id: 'richmond-rosenberg',
    name: 'Richmond / Rosenberg',
    shortDescription: 'Historic Fort Bend County cities with local businesses.',
    type: 'suburb',
    zipCodes: ['77406', '77469', '77471'],
    region: 'southwest',
  },
  {
    id: 'meyerland',
    name: 'Meyerland',
    shortDescription: 'Established neighborhood with local shops and services.',
    type: 'neighborhood',
    zipCodes: ['77096'],
    region: 'southwest',
  },
  {
    id: 'bellaire',
    name: 'Bellaire',
    shortDescription: 'City within Houston known for its small-town character.',
    type: 'city',
    zipCodes: ['77401'],
    region: 'southwest',
  },

  // Southeast Houston
  {
    id: 'pearland',
    name: 'Pearland',
    shortDescription: 'Fast-growing city with diverse business community.',
    type: 'suburb',
    isPrimary: true,
    zipCodes: ['77581', '77584'],
    region: 'southeast',
  },
  {
    id: 'clear-lake',
    name: 'Clear Lake',
    shortDescription: 'Home to NASA and aerospace industry businesses.',
    type: 'district',
    zipCodes: ['77058', '77059', '77062'],
    region: 'southeast',
  },
  {
    id: 'league-city',
    name: 'League City',
    shortDescription: 'Growing coastal community with local businesses.',
    type: 'suburb',
    zipCodes: ['77573', '77574'],
    region: 'southeast',
  },
  {
    id: 'friendswood',
    name: 'Friendswood',
    shortDescription: 'Family-oriented community with local service providers.',
    type: 'suburb',
    zipCodes: ['77546'],
    region: 'southeast',
  },
  {
    id: 'pasadena',
    name: 'Pasadena',
    shortDescription: 'Industrial city with diverse business community.',
    type: 'city',
    zipCodes: ['77502', '77503', '77504', '77505', '77506'],
    region: 'southeast',
  },

  // East Houston
  {
    id: 'baytown',
    name: 'Baytown',
    shortDescription: 'Industrial city with petrochemical and service businesses.',
    type: 'city',
    zipCodes: ['77520', '77521', '77523'],
    region: 'east',
  },
  {
    id: 'east-houston',
    name: 'East Houston',
    shortDescription: 'Diverse community with local businesses and services.',
    type: 'district',
    zipCodes: ['77015', '77016', '77026'],
    region: 'east',
  },

  // South Houston
  {
    id: 'south-houston',
    name: 'South Houston',
    shortDescription: 'Working-class community with local service businesses.',
    type: 'city',
    zipCodes: ['77587'],
    region: 'south',
  },
  {
    id: 'alvin',
    name: 'Alvin',
    shortDescription: 'Growing city south of Houston with local businesses.',
    type: 'city',
    zipCodes: ['77511', '77512'],
    region: 'south',
  },
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
    central: 'Central Houston',
    north: 'North Houston',
    south: 'South Houston',
    east: 'East Houston',
    west: 'West Houston',
    northwest: 'Northwest Houston',
    northeast: 'Northeast Houston',
    southwest: 'Southwest Houston',
    southeast: 'Southeast Houston',
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
