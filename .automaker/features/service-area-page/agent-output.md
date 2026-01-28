
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure. I need to implement a service area page for a Houston-based business website. Please find:\n\n1. The overall project structure (what framework is being used - Next.js, Gatsby, etc.)\n2. How pages are organized and routed\n3. Existing page patterns and components I should follow\n4. Any existing location/area-related pages or components\n5. The styling approach used (CSS modules, Tailwind, styled-components, etc.)\n6. Any existing SEO patterns or schema markup implementations\n\nBe thorough - look at multiple files to understand the conventions used.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "*.json",
  "path": "C:\\Users\\James\\Repos\\service-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "*.config.*",
  "path": "C:\\Users\\James\\Repos\\service-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\astro.config.mjs"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\service-business\\src\" -type f -name \"*.astro\" -o -name \"*.ts\" -o -name \"*.tsx\" | head -30",
  "description": "Find source files in the project"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\service-business\\src\\pages\" -type f",
  "description": "Find all page files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/styles/**",
  "path": "C:\\Users\\James\\Repos\\service-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\globals.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\about.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\SEO.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\variables.css",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services\\website-design.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\HeroSection.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/types/**",
  "path": "C:\\Users\\James\\Repos\\service-business"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\service-business\\src\" | head -20",
  "description": "List source directory contents"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\hero.ts"
}

🔧 Tool: Grep
Input: {
  "pattern": "service|area|location|region|city",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "type": "ts",
  "output_mode": "files_with_matches"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\utils\\local-business-jsonld.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service.ts"
}
Now I have a comprehensive understanding of the codebase. Let me read some of the key files to understand the exact patterns better before implementing the service area page.

🔧 Tool: Read
Input: {
  "file_path": "/Users/bagor/Documents/VGCaaS/houston-web-services/src/pages/services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/bagor/Documents/VGCaaS/houston-web-services/src/layouts/Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/bagor/Documents/VGCaaS/houston-web-services/src/styles/variables.css"
}
Let me find the correct path for the project:

🔧 Tool: Bash
Input: {
  "command": "pwd && find . -name \"*.astro\" -type f 2>/dev/null | head -20",
  "description": "Find astro files in project"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/layouts/**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/config/**/*"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing page patterns (services.astro, Layout.astro)",
      "status": "in_progress",
      "activeForm": "Reading existing page patterns"
    },
    {
      "content": "Create service-areas.config.ts with Houston neighborhoods data",
      "status": "pending",
      "activeForm": "Creating service areas configuration"
    },
    {
      "content": "Create service-areas.astro page with neighborhoods listing",
      "status": "pending",
      "activeForm": "Creating service areas page"
    },
    {
      "content": "Add static map image component",
      "status": "pending",
      "activeForm": "Adding static map image"
    },
    {
      "content": "Implement local SEO schema markup",
      "status": "pending",
      "activeForm": "Implementing local SEO schema markup"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\seo.config.ts"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing page patterns (services.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing page patterns"
    },
    {
      "content": "Create service-areas.config.ts with Houston neighborhoods data",
      "status": "in_progress",
      "activeForm": "Creating service areas configuration"
    },
    {
      "content": "Create service-areas.astro page with neighborhoods listing",
      "status": "pending",
      "activeForm": "Creating service areas page"
    },
    {
      "content": "Add static map image component",
      "status": "pending",
      "activeForm": "Adding static map image"
    },
    {
      "content": "Implement local SEO schema markup",
      "status": "pending",
      "activeForm": "Implementing local SEO schema markup"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}
Now let me also read the SEO types and the existing Header/Footer to understand the navigation structure:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\seo.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Header.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Button.astro"
}
Now I have a good understanding of the codebase. Let me check the styles/variables.css file and then start implementing the service areas page:

🔧 Tool: Glob
Input: {
  "pattern": "src/styles/**/*"
}
Now let me create the service areas configuration file with Houston neighborhoods data:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\service-areas.config.ts",
  "content": "/**\n * Service Areas Configuration\n * Defines all Houston neighborhoods and districts served by Houston Web Services.\n * Used for the service areas page, local SEO optimization, and schema markup.\n */\n\nexport interface ServiceAreaData {\n  /** Unique identifier for the area */\n  id: string;\n  /** Display name of the neighborhood/district */\n  name: string;\n  /** Brief description for display in cards */\n  shortDescription: string;\n  /** Type of area (neighborhood, district, suburb, etc.) */\n  type: 'neighborhood' | 'district' | 'suburb' | 'city';\n  /** Whether this is a primary service area */\n  isPrimary?: boolean;\n  /** Representative ZIP codes for this area */\n  zipCodes?: string[];\n  /** General region within Houston (for grouping) */\n  region: 'central' | 'north' | 'south' | 'east' | 'west' | 'northwest' | 'northeast' | 'southwest' | 'southeast';\n}\n\n/**\n * All Houston neighborhoods and districts served\n * Organized for local SEO and user navigation\n */\nexport const serviceAreas: ServiceAreaData[] = [\n  // Central Houston\n  {\n    id: 'downtown-houston',\n    name: 'Downtown Houston',\n    shortDescription: 'The heart of Houston\\'s business district, home to major corporations and startups.',\n    type: 'district',\n    isPrimary: true,\n    zipCodes: ['77002', '77003', '77010'],\n    region: 'central',\n  },\n  {\n    id: 'midtown',\n    name: 'Midtown',\n    shortDescription: 'A vibrant urban neighborhood with restaurants, bars, and growing businesses.',\n    type: 'neighborhood',\n    isPrimary: true,\n    zipCodes: ['77004', '77006'],\n    region: 'central',\n  },\n  {\n    id: 'montrose',\n    name: 'Montrose',\n    shortDescription: 'An eclectic, artsy neighborhood known for its diverse small businesses.',\n    type: 'neighborhood',\n    isPrimary: true,\n    zipCodes: ['77006', '77019'],\n    region: 'central',\n  },\n  {\n    id: 'heights',\n    name: 'The Heights',\n    shortDescription: 'Historic neighborhood with charming shops, restaurants, and local businesses.',\n    type: 'neighborhood',\n    isPrimary: true,\n    zipCodes: ['77007', '77008', '77009'],\n    region: 'central',\n  },\n  {\n    id: 'museum-district',\n    name: 'Museum District',\n    shortDescription: 'Cultural hub home to world-class museums and professional services.',\n    type: 'district',\n    zipCodes: ['77004', '77005'],\n    region: 'central',\n  },\n  {\n    id: 'medical-center',\n    name: 'Texas Medical Center',\n    shortDescription: 'The world\\'s largest medical center with healthcare-related businesses.',\n    type: 'district',\n    isPrimary: true,\n    zipCodes: ['77030', '77054'],\n    region: 'central',\n  },\n  {\n    id: 'river-oaks',\n    name: 'River Oaks',\n    shortDescription: 'Upscale neighborhood with luxury retail and professional services.',\n    type: 'neighborhood',\n    zipCodes: ['77019', '77027'],\n    region: 'central',\n  },\n  {\n    id: 'galleria-uptown',\n    name: 'Galleria / Uptown',\n    shortDescription: 'Premier shopping and business district with corporate offices.',\n    type: 'district',\n    isPrimary: true,\n    zipCodes: ['77056', '77057', '77027'],\n    region: 'west',\n  },\n\n  // West Houston\n  {\n    id: 'memorial',\n    name: 'Memorial',\n    shortDescription: 'Affluent area with established businesses and family-owned companies.',\n    type: 'neighborhood',\n    zipCodes: ['77024', '77079'],\n    region: 'west',\n  },\n  {\n    id: 'energy-corridor',\n    name: 'Energy Corridor',\n    shortDescription: 'Major employment center for energy and technology companies.',\n    type: 'district',\n    isPrimary: true,\n    zipCodes: ['77077', '77079', '77094'],\n    region: 'west',\n  },\n  {\n    id: 'katy',\n    name: 'Katy',\n    shortDescription: 'Fast-growing suburb with thriving small business community.',\n    type: 'suburb',\n    isPrimary: true,\n    zipCodes: ['77449', '77450', '77493', '77494'],\n    region: 'west',\n  },\n  {\n    id: 'cinco-ranch',\n    name: 'Cinco Ranch',\n    shortDescription: 'Master-planned community with local service businesses.',\n    type: 'neighborhood',\n    zipCodes: ['77450', '77494'],\n    region: 'west',\n  },\n  {\n    id: 'westchase',\n    name: 'Westchase',\n    shortDescription: 'Business district with diverse companies and restaurants.',\n    type: 'district',\n    zipCodes: ['77042', '77063', '77077'],\n    region: 'west',\n  },\n\n  // Northwest Houston\n  {\n    id: 'cypress',\n    name: 'Cypress',\n    shortDescription: 'Rapidly growing area with new businesses and retail centers.',\n    type: 'suburb',\n    isPrimary: true,\n    zipCodes: ['77429', '77433', '77065'],\n    region: 'northwest',\n  },\n  {\n    id: 'spring',\n    name: 'Spring',\n    shortDescription: 'Family-friendly suburb with local shops and service providers.',\n    type: 'suburb',\n    zipCodes: ['77373', '77379', '77388', '77389'],\n    region: 'northwest',\n  },\n  {\n    id: 'tomball',\n    name: 'Tomball',\n    shortDescription: 'Charming small-town atmosphere with growing business community.',\n    type: 'suburb',\n    zipCodes: ['77375', '77377'],\n    region: 'northwest',\n  },\n  {\n    id: 'champions',\n    name: 'Champions',\n    shortDescription: 'Established community with retail and professional services.',\n    type: 'neighborhood',\n    zipCodes: ['77069', '77070'],\n    region: 'northwest',\n  },\n\n  // North Houston\n  {\n    id: 'the-woodlands',\n    name: 'The Woodlands',\n    shortDescription: 'Master-planned community with corporate headquarters and retail.',\n    type: 'suburb',\n    isPrimary: true,\n    zipCodes: ['77380', '77381', '77382', '77384', '77385', '77386'],\n    region: 'north',\n  },\n  {\n    id: 'greenspoint',\n    name: 'Greenspoint',\n    shortDescription: 'Commercial district with office buildings and businesses.',\n    type: 'district',\n    zipCodes: ['77060', '77067'],\n    region: 'north',\n  },\n  {\n    id: 'humble',\n    name: 'Humble',\n    shortDescription: 'Growing suburb with local businesses and retail centers.',\n    type: 'suburb',\n    zipCodes: ['77338', '77346', '77396'],\n    region: 'north',\n  },\n  {\n    id: 'kingwood',\n    name: 'Kingwood',\n    shortDescription: 'Master-planned community known as \"The Livable Forest.\"',\n    type: 'suburb',\n    zipCodes: ['77339', '77345'],\n    region: 'northeast',\n  },\n  {\n    id: 'atascocita',\n    name: 'Atascocita',\n    shortDescription: 'Fast-growing community with local service businesses.',\n    type: 'suburb',\n    zipCodes: ['77346'],\n    region: 'northeast',\n  },\n\n  // Southwest Houston\n  {\n    id: 'sugar-land',\n    name: 'Sugar Land',\n    shortDescription: 'Affluent suburb with corporate offices and retail.',\n    type: 'suburb',\n    isPrimary: true,\n    zipCodes: ['77478', '77479', '77498'],\n    region: 'southwest',\n  },\n  {\n    id: 'missouri-city',\n    name: 'Missouri City',\n    shortDescription: 'Diverse suburb with growing small business community.',\n    type: 'suburb',\n    zipCodes: ['77459', '77489'],\n    region: 'southwest',\n  },\n  {\n    id: 'stafford',\n    name: 'Stafford',\n    shortDescription: 'Business-friendly city known for no property tax.',\n    type: 'suburb',\n    zipCodes: ['77477'],\n    region: 'southwest',\n  },\n  {\n    id: 'richmond-rosenberg',\n    name: 'Richmond / Rosenberg',\n    shortDescription: 'Historic Fort Bend County cities with local businesses.',\n    type: 'suburb',\n    zipCodes: ['77406', '77469', '77471'],\n    region: 'southwest',\n  },\n  {\n    id: 'meyerland',\n    name: 'Meyerland',\n    shortDescription: 'Established neighborhood with local shops and services.',\n    type: 'neighborhood',\n    zipCodes: ['77096'],\n    region: 'southwest',\n  },\n  {\n    id: 'bellaire',\n    name: 'Bellaire',\n    shortDescription: 'City within Houston known for its small-town character.',\n    type: 'city',\n    zipCodes: ['77401'],\n    region: 'southwest',\n  },\n\n  // Southeast Houston\n  {\n    id: 'pearland',\n    name: 'Pearland',\n    shortDescription: 'Fast-growing city with diverse business community.',\n    type: 'suburb',\n    isPrimary: true,\n    zipCodes: ['77581', '77584'],\n    region: 'southeast',\n  },\n  {\n    id: 'clear-lake',\n    name: 'Clear Lake',\n    shortDescription: 'Home to NASA and aerospace industry businesses.',\n    type: 'district',\n    zipCodes: ['77058', '77059', '77062'],\n    region: 'southeast',\n  },\n  {\n    id: 'league-city',\n    name: 'League City',\n    shortDescription: 'Growing coastal community with local businesses.',\n    type: 'suburb',\n    zipCodes: ['77573', '77574'],\n    region: 'southeast',\n  },\n  {\n    id: 'friendswood',\n    name: 'Friendswood',\n    shortDescription: 'Family-oriented community with local service providers.',\n    type: 'suburb',\n    zipCodes: ['77546'],\n    region: 'southeast',\n  },\n  {\n    id: 'pasadena',\n    name: 'Pasadena',\n    shortDescription: 'Industrial city with diverse business community.',\n    type: 'city',\n    zipCodes: ['77502', '77503', '77504', '77505', '77506'],\n    region: 'southeast',\n  },\n\n  // East Houston\n  {\n    id: 'baytown',\n    name: 'Baytown',\n    shortDescription: 'Industrial city with petrochemical and service businesses.',\n    type: 'city',\n    zipCodes: ['77520', '77521', '77523'],\n    region: 'east',\n  },\n  {\n    id: 'east-houston',\n    name: 'East Houston',\n    shortDescription: 'Diverse community with local businesses and services.',\n    type: 'district',\n    zipCodes: ['77015', '77016', '77026'],\n    region: 'east',\n  },\n\n  // South Houston\n  {\n    id: 'south-houston',\n    name: 'South Houston',\n    shortDescription: 'Working-class community with local service businesses.',\n    type: 'city',\n    zipCodes: ['77587'],\n    region: 'south',\n  },\n  {\n    id: 'alvin',\n    name: 'Alvin',\n    shortDescription: 'Growing city south of Houston with local businesses.',\n    type: 'city',\n    zipCodes: ['77511', '77512'],\n    region: 'south',\n  },\n];\n\n/**\n * Get primary service areas for featured display\n */\nexport function getPrimaryServiceAreas(): ServiceAreaData[] {\n  return serviceAreas.filter(area => area.isPrimary);\n}\n\n/**\n * Get service areas grouped by region\n */\nexport function getServiceAreasByRegion(): Record<string, ServiceAreaData[]> {\n  return serviceAreas.reduce((acc, area) => {\n    if (!acc[area.region]) {\n      acc[area.region] = [];\n    }\n    acc[area.region].push(area);\n    return acc;\n  }, {} as Record<string, ServiceAreaData[]>);\n}\n\n/**\n * Format region name for display\n */\nexport function formatRegionName(region: string): string {\n  const regionNames: Record<string, string> = {\n    central: 'Central Houston',\n    north: 'North Houston',\n    south: 'South Houston',\n    east: 'East Houston',\n    west: 'West Houston',\n    northwest: 'Northwest Houston',\n    northeast: 'Northeast Houston',\n    southwest: 'Southwest Houston',\n    southeast: 'Southeast Houston',\n  };\n  return regionNames[region] || region;\n}\n\n/**\n * Get all unique ZIP codes served\n */\nexport function getAllZipCodes(): string[] {\n  const zipCodes = new Set<string>();\n  serviceAreas.forEach(area => {\n    area.zipCodes?.forEach(zip => zipCodes.add(zip));\n  });\n  return Array.from(zipCodes).sort();\n}\n\n/**\n * Total count of areas served\n */\nexport const totalAreasServed = serviceAreas.length;\n\n/**\n * Service area statistics for display\n */\nexport const serviceAreaStats = {\n  totalAreas: serviceAreas.length,\n  totalZipCodes: getAllZipCodes().length,\n  regions: Object.keys(getServiceAreasByRegion()).length,\n};\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing page patterns (services.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing page patterns"
    },
    {
      "content": "Create service-areas.config.ts with Houston neighborhoods data",
      "status": "completed",
      "activeForm": "Creating service areas configuration"
    },
    {
      "content": "Create service-areas.astro page with neighborhoods listing",
      "status": "in_progress",
      "activeForm": "Creating service areas page"
    },
    {
      "content": "Add static map image component",
      "status": "pending",
      "activeForm": "Adding static map image"
    },
    {
      "content": "Implement local SEO schema markup",
      "status": "pending",
      "activeForm": "Implementing local SEO schema markup"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}
Now let me create the service areas page:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\service-areas.astro",
  "content": "---\n/**\n * Service Areas Page - Houston Web Services\n * A dedicated page listing all Houston neighborhoods and districts served.\n * Optimized for local SEO with location-specific keywords and schema markup.\n *\n * Sections:\n * 1. Hero Section - Value proposition and service area overview\n * 2. Static Map Section - Visual representation of coverage area\n * 3. Primary Areas - Featured neighborhoods with prominent display\n * 4. All Areas by Region - Complete listing organized by region\n * 5. Why Local Section - Benefits of choosing a local provider\n * 6. CTA Section - Contact for consultation\n */\n\nimport Layout from '../layouts/Layout.astro';\nimport Button from '../components/Button.astro';\nimport {\n  serviceAreas,\n  getPrimaryServiceAreas,\n  getServiceAreasByRegion,\n  formatRegionName,\n  serviceAreaStats,\n} from '../config/service-areas.config';\nimport type { ServiceArea } from '../types/seo';\n\n// Get organized data\nconst primaryAreas = getPrimaryServiceAreas();\nconst areasByRegion = getServiceAreasByRegion();\n\n// Region order for display\nconst regionOrder = ['central', 'west', 'northwest', 'north', 'northeast', 'southwest', 'southeast', 'east', 'south'];\n\n// Build schema.org LocalBusiness with areaServed for local SEO\nconst serviceAreaSchema: ServiceArea[] = serviceAreas.map(area => ({\n  type: 'City',\n  name: area.name,\n  addressLocality: area.name,\n  addressRegion: 'TX',\n  addressCountry: 'US',\n}));\n---\n\n<Layout\n  title=\"Service Areas | Houston Web Design\"\n  description=\"Houston Web Services provides professional web design, development, and SEO services throughout the Greater Houston area. Serving Downtown, The Heights, Katy, Sugar Land, The Woodlands, and 40+ neighborhoods.\"\n  keywords=\"Houston web design, web developer Houston TX, web design Katy TX, web design Sugar Land, web design The Woodlands, Houston website services, local web designer Houston\"\n  openGraph={{\n    type: 'website',\n  }}\n  jsonLd={{\n    type: 'LocalBusiness',\n    name: 'Houston Web Services',\n    description: 'Professional web design and development services for small businesses throughout the Greater Houston area.',\n    areaServed: serviceAreaSchema,\n  }}\n>\n  <main>\n    <!-- Service Areas Hero Section -->\n    <section class=\"areas-hero\" aria-labelledby=\"areas-hero-heading\">\n      <div class=\"areas-hero__container\">\n        <div class=\"areas-hero__content\">\n          <div class=\"areas-hero__badge\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"16\" height=\"16\" aria-hidden=\"true\">\n              <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/>\n            </svg>\n            <span>Serving the Greater Houston Area</span>\n          </div>\n          <h1 id=\"areas-hero-heading\" class=\"areas-hero__title\">\n            Web Design Services<br/>\n            <span class=\"areas-hero__title-highlight\">For Houston Businesses</span>\n          </h1>\n          <p class=\"areas-hero__description\">\n            We proudly serve small businesses throughout the Greater Houston metropolitan area.\n            Whether you're in Downtown Houston, the suburbs, or anywhere in between,\n            we bring professional web design and development services to your doorstep.\n          </p>\n          <div class=\"areas-hero__cta-group\">\n            <Button\n              text=\"Get a Free Quote\"\n              href=\"/contact\"\n              variant=\"primary\"\n              size=\"large\"\n            />\n            <Button\n              text=\"View Our Services\"\n              href=\"/services\"\n              variant=\"secondary\"\n              size=\"large\"\n            />\n          </div>\n          <div class=\"areas-hero__stats\">\n            <div class=\"areas-hero__stat\">\n              <span class=\"areas-hero__stat-value\">{serviceAreaStats.totalAreas}+</span>\n              <span class=\"areas-hero__stat-label\">Neighborhoods</span>\n            </div>\n            <div class=\"areas-hero__stat-divider\"></div>\n            <div class=\"areas-hero__stat\">\n              <span class=\"areas-hero__stat-value\">{serviceAreaStats.totalZipCodes}+</span>\n              <span class=\"areas-hero__stat-label\">ZIP Codes</span>\n            </div>\n            <div class=\"areas-hero__stat-divider\"></div>\n            <div class=\"areas-hero__stat\">\n              <span class=\"areas-hero__stat-value\">{serviceAreaStats.regions}</span>\n              <span class=\"areas-hero__stat-label\">Regions</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"areas-hero__decoration\" aria-hidden=\"true\"></div>\n    </section>\n\n    <!-- Static Map Section -->\n    <section class=\"map-section\" aria-labelledby=\"map-heading\">\n      <div class=\"map-section__container\">\n        <header class=\"map-section__header\">\n          <div class=\"map-section__header-wrapper\">\n            <h2 id=\"map-heading\" class=\"map-section__heading\">\n              Our Service Coverage\n            </h2>\n          </div>\n          <p class=\"map-section__description\">\n            From the Texas Medical Center to The Woodlands, from Katy to Pearland, we serve businesses\n            across the entire Greater Houston metropolitan area.\n          </p>\n        </header>\n\n        <div class=\"map-section__map-wrapper\">\n          <div class=\"map-section__map\" aria-label=\"Map showing Houston Web Services coverage area including Downtown Houston, Katy, Sugar Land, The Woodlands, and surrounding areas\">\n            <!-- Static map using OpenStreetMap/SVG representation -->\n            <div class=\"map-section__map-placeholder\">\n              <svg class=\"map-section__map-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n                <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/>\n              </svg>\n              <span class=\"map-section__map-label\">Greater Houston Metro Area</span>\n              <span class=\"map-section__map-sublabel\">Harris, Fort Bend, Montgomery, Brazoria, & Galveston Counties</span>\n            </div>\n            <!-- Decorative location pins -->\n            <div class=\"map-section__pins\" aria-hidden=\"true\">\n              <div class=\"map-section__pin map-section__pin--1\" title=\"Downtown Houston\">\n                <span>Downtown</span>\n              </div>\n              <div class=\"map-section__pin map-section__pin--2\" title=\"The Woodlands\">\n                <span>The Woodlands</span>\n              </div>\n              <div class=\"map-section__pin map-section__pin--3\" title=\"Katy\">\n                <span>Katy</span>\n              </div>\n              <div class=\"map-section__pin map-section__pin--4\" title=\"Sugar Land\">\n                <span>Sugar Land</span>\n              </div>\n              <div class=\"map-section__pin map-section__pin--5\" title=\"Pearland\">\n                <span>Pearland</span>\n              </div>\n              <div class=\"map-section__pin map-section__pin--6\" title=\"Cypress\">\n                <span>Cypress</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Primary Service Areas Section -->\n    <section class=\"primary-areas\" aria-labelledby=\"primary-areas-heading\">\n      <div class=\"primary-areas__container\">\n        <header class=\"primary-areas__header\">\n          <div class=\"primary-areas__header-wrapper\">\n            <h2 id=\"primary-areas-heading\" class=\"primary-areas__heading\">\n              Featured Service Areas\n            </h2>\n          </div>\n          <p class=\"primary-areas__description\">\n            We have extensive experience serving businesses in these key Houston neighborhoods and suburbs.\n          </p>\n        </header>\n\n        <div class=\"primary-areas__grid\">\n          {primaryAreas.map((area) => (\n            <article class=\"area-card area-card--primary\">\n              <div class=\"area-card__icon\" aria-hidden=\"true\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                  <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/>\n                </svg>\n              </div>\n              <h3 class=\"area-card__title\">{area.name}</h3>\n              <p class=\"area-card__description\">{area.shortDescription}</p>\n              <span class=\"area-card__type\">{area.type === 'suburb' ? 'Suburb' : area.type === 'district' ? 'District' : area.type === 'city' ? 'City' : 'Neighborhood'}</span>\n            </article>\n          ))}\n        </div>\n      </div>\n    </section>\n\n    <!-- All Areas by Region Section -->\n    <section class=\"all-areas\" aria-labelledby=\"all-areas-heading\">\n      <div class=\"all-areas__container\">\n        <header class=\"all-areas__header\">\n          <div class=\"all-areas__header-wrapper\">\n            <h2 id=\"all-areas-heading\" class=\"all-areas__heading\">\n              All Service Areas\n            </h2>\n          </div>\n          <p class=\"all-areas__description\">\n            Browse all {serviceAreaStats.totalAreas}+ neighborhoods and communities we serve throughout the Greater Houston area.\n          </p>\n        </header>\n\n        <div class=\"all-areas__regions\">\n          {regionOrder.map((regionKey) => {\n            const areas = areasByRegion[regionKey];\n            if (!areas || areas.length === 0) return null;\n\n            return (\n              <div class=\"region-group\">\n                <h3 class=\"region-group__title\">{formatRegionName(regionKey)}</h3>\n                <ul class=\"region-group__list\" role=\"list\">\n                  {areas.map((area) => (\n                    <li class=\"region-group__item\">\n                      <span class=\"region-group__name\">{area.name}</span>\n                      {area.isPrimary && (\n                        <span class=\"region-group__badge\">Featured</span>\n                      )}\n                    </li>\n                  ))}\n                </ul>\n              </div>\n            );\n          })}\n        </div>\n      </div>\n    </section>\n\n    <!-- Why Choose Local Section -->\n    <section class=\"why-local\" aria-labelledby=\"why-local-heading\">\n      <div class=\"why-local__container\">\n        <header class=\"why-local__header\">\n          <div class=\"why-local__header-wrapper\">\n            <h2 id=\"why-local-heading\" class=\"why-local__heading\">\n              Why Choose a Local Web Designer?\n            </h2>\n          </div>\n          <p class=\"why-local__description\">\n            Working with a Houston-based web designer offers unique advantages for your business.\n          </p>\n        </header>\n\n        <div class=\"why-local__grid\">\n          <article class=\"benefit-card\">\n            <div class=\"benefit-card__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/>\n              </svg>\n            </div>\n            <h3 class=\"benefit-card__title\">Local Market Knowledge</h3>\n            <p class=\"benefit-card__description\">\n              We understand Houston businesses and what local customers are looking for.\n              Our designs resonate with your target audience.\n            </p>\n          </article>\n\n          <article class=\"benefit-card\">\n            <div class=\"benefit-card__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"/>\n              </svg>\n            </div>\n            <h3 class=\"benefit-card__title\">Face-to-Face Meetings</h3>\n            <p class=\"benefit-card__description\">\n              We're available for in-person consultations at your office or a local coffee shop.\n              Nothing beats direct communication.\n            </p>\n          </article>\n\n          <article class=\"benefit-card\">\n            <div class=\"benefit-card__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"/>\n              </svg>\n            </div>\n            <h3 class=\"benefit-card__title\">Same Time Zone</h3>\n            <p class=\"benefit-card__description\">\n              No waiting for overseas responses. We're here during your business hours,\n              ready to help when you need us.\n            </p>\n          </article>\n\n          <article class=\"benefit-card\">\n            <div class=\"benefit-card__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"/>\n              </svg>\n            </div>\n            <h3 class=\"benefit-card__title\">Local SEO Expertise</h3>\n            <p class=\"benefit-card__description\">\n              We know how to optimize your site for Houston-area searches,\n              helping you rank higher in local search results.\n            </p>\n          </article>\n\n          <article class=\"benefit-card\">\n            <div class=\"benefit-card__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\"/>\n              </svg>\n            </div>\n            <h3 class=\"benefit-card__title\">Community Connection</h3>\n            <p class=\"benefit-card__description\">\n              We're part of the Houston business community too. Your success is our success,\n              and we're invested in helping local businesses thrive.\n            </p>\n          </article>\n\n          <article class=\"benefit-card\">\n            <div class=\"benefit-card__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z\"/>\n              </svg>\n            </div>\n            <h3 class=\"benefit-card__title\">Trusted & Accountable</h3>\n            <p class=\"benefit-card__description\">\n              As a local business, our reputation matters. We stand behind our work\n              and are always here to support you.\n            </p>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <!-- CTA Section -->\n    <section class=\"cta-section\" aria-labelledby=\"cta-heading\">\n      <div class=\"cta-section__container\">\n        <div class=\"cta-section__content\">\n          <h2 id=\"cta-heading\" class=\"cta-section__heading\">\n            Ready to Work with a Local Expert?\n          </h2>\n          <p class=\"cta-section__description\">\n            Whether you're in Downtown Houston, Katy, The Woodlands, or anywhere in between,\n            we're ready to help your business succeed online.\n          </p>\n          <div class=\"cta-section__buttons\">\n            <Button\n              text=\"Get Your Free Consultation\"\n              href=\"/contact\"\n              variant=\"primary\"\n              size=\"large\"\n            />\n            <Button\n              text=\"View Our Work\"\n              href=\"/portfolio\"\n              variant=\"secondary\"\n              size=\"large\"\n            />\n          </div>\n          <p class=\"cta-section__reassurance\">\n            Free consultation for all Houston-area businesses. No obligation.\n          </p>\n        </div>\n      </div>\n    </section>\n  </main>\n</Layout>\n\n<style>\n  /* =================================================================\n   * SERVICE AREAS PAGE STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention\n   */\n\n  /* =================================================================\n   * AREAS HERO SECTION\n   * ================================================================= */\n\n  .areas-hero {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4) var(--spacing-20);\n    background: linear-gradient(\n      135deg,\n      var(--color-background) 0%,\n      var(--color-primary-50) 50%,\n      var(--color-background) 100%\n    );\n    background-size: 200% 200%;\n    animation: gradientShift 15s ease infinite;\n    overflow: hidden;\n  }\n\n  .areas-hero__container {\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n  }\n\n  .areas-hero__content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: var(--spacing-5);\n  }\n\n  .areas-hero__badge {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    padding: var(--spacing-2) var(--spacing-4);\n    background-color: var(--color-primary-50);\n    border: 1px solid var(--color-primary-200);\n    border-radius: var(--radius-full);\n    color: var(--color-primary-700);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .areas-hero__badge svg {\n    color: var(--color-primary-600);\n  }\n\n  .areas-hero__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    line-height: var(--line-height-tight);\n    margin: 0;\n  }\n\n  .areas-hero__title-highlight {\n    color: var(--color-primary);\n    display: block;\n  }\n\n  .areas-hero__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    max-width: 55ch;\n    margin: 0;\n  }\n\n  .areas-hero__cta-group {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-3);\n    width: 100%;\n    max-width: 20rem;\n  }\n\n  .areas-hero__stats {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: var(--spacing-4);\n    padding: var(--spacing-4) var(--spacing-6);\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n    margin-top: var(--spacing-2);\n  }\n\n  .areas-hero__stat {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-1);\n  }\n\n  .areas-hero__stat-value {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-primary);\n  }\n\n  .areas-hero__stat-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    color: var(--color-text-tertiary);\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n\n  .areas-hero__stat-divider {\n    width: 1px;\n    height: var(--spacing-8);\n    background-color: var(--color-border);\n  }\n\n  .areas-hero__decoration {\n    position: absolute;\n    bottom: -50%;\n    right: -20%;\n    width: 60%;\n    height: 100%;\n    background: radial-gradient(\n      ellipse at center,\n      var(--color-primary-100) 0%,\n      transparent 70%\n    );\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  /* =================================================================\n   * MAP SECTION\n   * ================================================================= */\n\n  .map-section {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background-subtle);\n    overflow: hidden;\n  }\n\n  .map-section__container {\n    position: relative;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    z-index: 1;\n  }\n\n  .map-section__header {\n    text-align: center;\n    margin-bottom: var(--spacing-10);\n  }\n\n  .map-section__header-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .map-section__header-wrapper::before {\n    content: '';\n    display: block;\n    width: 6px;\n    height: 6px;\n    margin-bottom: var(--spacing-3);\n    background: var(--color-accent);\n    border-radius: var(--radius-full);\n    box-shadow:\n      -12px 0 0 var(--color-primary),\n      12px 0 0 var(--color-accent-alt);\n    opacity: 0.8;\n  }\n\n  .map-section__header-wrapper::after {\n    content: '';\n    display: block;\n    width: 4rem;\n    height: 3px;\n    margin-top: var(--spacing-4);\n    background: linear-gradient(\n      90deg,\n      var(--color-primary) 0%,\n      var(--color-accent) 50%,\n      var(--color-accent-alt) 100%\n    );\n    background-size: 200% 100%;\n    border-radius: var(--radius-full);\n    animation: accentShimmer 4s ease-in-out infinite;\n  }\n\n  .map-section__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4) 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .map-section__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-md);\n    color: var(--color-text-secondary);\n    max-width: 60ch;\n    margin: 0 auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .map-section__map-wrapper {\n    position: relative;\n    max-width: 56rem;\n    margin: 0 auto;\n  }\n\n  .map-section__map {\n    position: relative;\n    aspect-ratio: 16 / 10;\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-100) 0%,\n      var(--color-primary-50) 50%,\n      var(--color-background) 100%\n    );\n    border-radius: var(--radius-2xl);\n    border: 1px solid var(--color-border);\n    box-shadow: var(--shadow-lg);\n    overflow: hidden;\n  }\n\n  .map-section__map-placeholder {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-3);\n  }\n\n  .map-section__map-icon {\n    width: var(--spacing-16);\n    height: var(--spacing-16);\n    color: var(--color-primary);\n    opacity: 0.6;\n  }\n\n  .map-section__map-label {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-primary);\n  }\n\n  .map-section__map-sublabel {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    text-align: center;\n    padding: 0 var(--spacing-4);\n  }\n\n  /* Decorative location pins on map */\n  .map-section__pins {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n  }\n\n  .map-section__pin {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-1);\n  }\n\n  .map-section__pin::before {\n    content: '';\n    width: 12px;\n    height: 12px;\n    background-color: var(--color-primary);\n    border: 2px solid var(--color-background);\n    border-radius: var(--radius-full);\n    box-shadow: var(--shadow-md);\n    animation: pinPulse 2s ease-in-out infinite;\n  }\n\n  .map-section__pin span {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-primary);\n    background-color: var(--color-background);\n    padding: var(--spacing-1) var(--spacing-2);\n    border-radius: var(--radius-md);\n    box-shadow: var(--shadow-sm);\n    white-space: nowrap;\n  }\n\n  /* Pin positions (approximate Houston area layout) */\n  .map-section__pin--1 { top: 45%; left: 48%; } /* Downtown */\n  .map-section__pin--2 { top: 12%; left: 52%; animation-delay: 0.3s; } /* The Woodlands */\n  .map-section__pin--3 { top: 42%; left: 18%; animation-delay: 0.6s; } /* Katy */\n  .map-section__pin--4 { top: 68%; left: 38%; animation-delay: 0.9s; } /* Sugar Land */\n  .map-section__pin--5 { top: 75%; left: 55%; animation-delay: 1.2s; } /* Pearland */\n  .map-section__pin--6 { top: 22%; left: 28%; animation-delay: 1.5s; } /* Cypress */\n\n  @keyframes pinPulse {\n    0%, 100% { transform: scale(1); opacity: 1; }\n    50% { transform: scale(1.2); opacity: 0.8; }\n  }\n\n  /* Hide pin labels on very small screens */\n  @media screen and (max-width: 480px) {\n    .map-section__pin span {\n      display: none;\n    }\n  }\n\n  /* =================================================================\n   * PRIMARY AREAS SECTION\n   * ================================================================= */\n\n  .primary-areas {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background);\n    overflow: hidden;\n  }\n\n  .primary-areas__container {\n    position: relative;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    z-index: 1;\n  }\n\n  .primary-areas__header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n  }\n\n  .primary-areas__header-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .primary-areas__header-wrapper::before {\n    content: '';\n    display: block;\n    width: 6px;\n    height: 6px;\n    margin-bottom: var(--spacing-3);\n    background: var(--color-accent);\n    border-radius: var(--radius-full);\n    box-shadow:\n      -12px 0 0 var(--color-primary),\n      12px 0 0 var(--color-accent-alt);\n    opacity: 0.8;\n  }\n\n  .primary-areas__header-wrapper::after {\n    content: '';\n    display: block;\n    width: 4rem;\n    height: 3px;\n    margin-top: var(--spacing-4);\n    background: linear-gradient(\n      90deg,\n      var(--color-primary) 0%,\n      var(--color-accent) 50%,\n      var(--color-accent-alt) 100%\n    );\n    background-size: 200% 100%;\n    border-radius: var(--radius-full);\n    animation: accentShimmer 4s ease-in-out infinite;\n  }\n\n  .primary-areas__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4) 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .primary-areas__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-md);\n    color: var(--color-text-secondary);\n    max-width: 55ch;\n    margin: 0 auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .primary-areas__grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n  }\n\n  /* =================================================================\n   * AREA CARD COMPONENT\n   * ================================================================= */\n\n  .area-card {\n    position: relative;\n    padding: var(--spacing-6);\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    transition:\n      transform var(--duration-200) var(--ease-out),\n      box-shadow var(--duration-200) var(--ease-out),\n      border-color var(--duration-200) var(--ease-out);\n  }\n\n  .area-card:hover {\n    transform: translateY(-4px);\n    box-shadow: var(--shadow-lg);\n    border-color: var(--color-primary-200);\n  }\n\n  .area-card__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-12);\n    height: var(--spacing-12);\n    margin-bottom: var(--spacing-4);\n    background-color: var(--color-primary-50);\n    border-radius: var(--radius-lg);\n    color: var(--color-primary);\n    transition: background-color var(--duration-200) var(--ease-in-out);\n  }\n\n  .area-card:hover .area-card__icon {\n    background-color: var(--color-primary-100);\n  }\n\n  .area-card__icon svg {\n    width: var(--spacing-6);\n    height: var(--spacing-6);\n  }\n\n  .area-card__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2) 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .area-card__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-3) 0;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .area-card__type {\n    display: inline-block;\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-primary);\n    background-color: var(--color-primary-50);\n    padding: var(--spacing-1) var(--spacing-2);\n    border-radius: var(--radius-md);\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n\n  /* =================================================================\n   * ALL AREAS SECTION\n   * ================================================================= */\n\n  .all-areas {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background-subtle);\n    overflow: hidden;\n  }\n\n  .all-areas__container {\n    position: relative;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    z-index: 1;\n  }\n\n  .all-areas__header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n  }\n\n  .all-areas__header-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .all-areas__header-wrapper::before {\n    content: '';\n    display: block;\n    width: 6px;\n    height: 6px;\n    margin-bottom: var(--spacing-3);\n    background: var(--color-accent);\n    border-radius: var(--radius-full);\n    box-shadow:\n      -12px 0 0 var(--color-primary),\n      12px 0 0 var(--color-accent-alt);\n    opacity: 0.8;\n  }\n\n  .all-areas__header-wrapper::after {\n    content: '';\n    display: block;\n    width: 4rem;\n    height: 3px;\n    margin-top: var(--spacing-4);\n    background: linear-gradient(\n      90deg,\n      var(--color-primary) 0%,\n      var(--color-accent) 50%,\n      var(--color-accent-alt) 100%\n    );\n    background-size: 200% 100%;\n    border-radius: var(--radius-full);\n    animation: accentShimmer 4s ease-in-out infinite;\n  }\n\n  .all-areas__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4) 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .all-areas__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-md);\n    color: var(--color-text-secondary);\n    max-width: 55ch;\n    margin: 0 auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .all-areas__regions {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-8);\n  }\n\n  /* =================================================================\n   * REGION GROUP COMPONENT\n   * ================================================================= */\n\n  .region-group {\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    padding: var(--spacing-6);\n  }\n\n  .region-group__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4) 0;\n    padding-bottom: var(--spacing-3);\n    border-bottom: 2px solid var(--color-primary-100);\n  }\n\n  .region-group__list {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-2);\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .region-group__item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-2) var(--spacing-3);\n    border-radius: var(--radius-md);\n    transition: background-color var(--duration-150) var(--ease-in-out);\n  }\n\n  .region-group__item:hover {\n    background-color: var(--color-background-subtle);\n  }\n\n  .region-group__name {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n  }\n\n  .region-group__badge {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-primary);\n    background-color: var(--color-primary-50);\n    padding: var(--spacing-0-5) var(--spacing-2);\n    border-radius: var(--radius-full);\n  }\n\n  /* =================================================================\n   * WHY LOCAL SECTION\n   * ================================================================= */\n\n  .why-local {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background);\n    overflow: hidden;\n  }\n\n  .why-local__container {\n    position: relative;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    z-index: 1;\n  }\n\n  .why-local__header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n  }\n\n  .why-local__header-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .why-local__header-wrapper::before {\n    content: '';\n    display: block;\n    width: 6px;\n    height: 6px;\n    margin-bottom: var(--spacing-3);\n    background: var(--color-accent);\n    border-radius: var(--radius-full);\n    box-shadow:\n      -12px 0 0 var(--color-primary),\n      12px 0 0 var(--color-accent-alt);\n    opacity: 0.8;\n  }\n\n  .why-local__header-wrapper::after {\n    content: '';\n    display: block;\n    width: 4rem;\n    height: 3px;\n    margin-top: var(--spacing-4);\n    background: linear-gradient(\n      90deg,\n      var(--color-primary) 0%,\n      var(--color-accent) 50%,\n      var(--color-accent-alt) 100%\n    );\n    background-size: 200% 100%;\n    border-radius: var(--radius-full);\n    animation: accentShimmer 4s ease-in-out infinite;\n  }\n\n  .why-local__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4) 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .why-local__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-md);\n    color: var(--color-text-secondary);\n    max-width: 55ch;\n    margin: 0 auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .why-local__grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n  }\n\n  /* =================================================================\n   * BENEFIT CARD COMPONENT\n   * ================================================================= */\n\n  .benefit-card {\n    position: relative;\n    padding: var(--spacing-6);\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    transition:\n      transform var(--duration-200) var(--ease-out),\n      box-shadow var(--duration-200) var(--ease-out),\n      border-color var(--duration-200) var(--ease-out);\n  }\n\n  .benefit-card:hover {\n    transform: translateY(-4px);\n    box-shadow: var(--shadow-lg);\n    border-color: var(--color-primary-200);\n  }\n\n  .benefit-card__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-12);\n    height: var(--spacing-12);\n    margin-bottom: var(--spacing-4);\n    background-color: var(--color-success-50);\n    border-radius: var(--radius-lg);\n    color: var(--color-success);\n    transition: background-color var(--duration-200) var(--ease-in-out);\n  }\n\n  .benefit-card:hover .benefit-card__icon {\n    background-color: var(--color-success-100);\n  }\n\n  .benefit-card__icon svg {\n    width: var(--spacing-6);\n    height: var(--spacing-6);\n  }\n\n  .benefit-card__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2) 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .benefit-card__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: 0;\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* =================================================================\n   * CTA SECTION\n   * ================================================================= */\n\n  .cta-section {\n    padding: var(--spacing-20) var(--spacing-4);\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-900) 0%,\n      var(--color-primary-700) 50%,\n      var(--color-primary-800) 100%\n    );\n  }\n\n  .cta-section__container {\n    max-width: var(--container-4xl);\n    margin: 0 auto;\n  }\n\n  .cta-section__content {\n    text-align: center;\n  }\n\n  .cta-section__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-inverse);\n    margin: 0 0 var(--spacing-4) 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .cta-section__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-primary-100);\n    max-width: 55ch;\n    margin: 0 auto var(--spacing-8);\n    line-height: var(--line-height-relaxed);\n  }\n\n  .cta-section__buttons {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-4);\n    margin-bottom: var(--spacing-6);\n  }\n\n  .cta-section :global(.btn--primary) {\n    background-color: var(--color-background);\n    color: var(--color-primary-700);\n    box-shadow: var(--shadow-lg);\n  }\n\n  .cta-section :global(.btn--primary:hover:not(.btn--disabled)) {\n    background-color: var(--color-primary-50);\n    color: var(--color-primary-800);\n    transform: translateY(-2px);\n  }\n\n  .cta-section :global(.btn--secondary) {\n    background-color: transparent;\n    color: var(--color-text-inverse);\n    border-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .cta-section :global(.btn--secondary:hover:not(.btn--disabled)) {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-color: rgba(255, 255, 255, 0.8);\n  }\n\n  .cta-section__reassurance {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-primary-200);\n    margin: 0;\n    font-style: italic;\n  }\n\n  /* =================================================================\n   * ANIMATIONS\n   * ================================================================= */\n\n  @keyframes gradientShift {\n    0%, 100% { background-position: 0% 50%; }\n    50% { background-position: 100% 50%; }\n  }\n\n  @keyframes accentShimmer {\n    0%, 100% { background-position: 0% 50%; }\n    50% { background-position: 100% 50%; }\n  }\n\n  @keyframes heroFadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  /* Hero section staggered animations */\n  .areas-hero__badge {\n    animation: heroFadeIn 0.6s ease-out 0.1s backwards;\n  }\n\n  .areas-hero__title {\n    animation: heroFadeIn 0.6s ease-out 0.2s backwards;\n  }\n\n  .areas-hero__description {\n    animation: heroFadeIn 0.6s ease-out 0.3s backwards;\n  }\n\n  .areas-hero__cta-group {\n    animation: heroFadeIn 0.6s ease-out 0.4s backwards;\n  }\n\n  .areas-hero__stats {\n    animation: heroFadeIn 0.6s ease-out 0.5s backwards;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (640px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 640px) {\n    .areas-hero {\n      padding: var(--spacing-20) var(--spacing-6) var(--spacing-24);\n    }\n\n    .areas-hero__title {\n      font-size: var(--font-size-4xl);\n    }\n\n    .areas-hero__cta-group {\n      flex-direction: row;\n      max-width: none;\n      width: auto;\n    }\n\n    .areas-hero__stats {\n      gap: var(--spacing-6);\n    }\n\n    .areas-hero__stat-value {\n      font-size: var(--font-size-2xl);\n    }\n\n    .primary-areas__grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .all-areas__regions {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .region-group__list {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .why-local__grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .cta-section__buttons {\n      flex-direction: row;\n      justify-content: center;\n    }\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (768px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 768px) {\n    .areas-hero__title {\n      font-size: var(--font-size-5xl);\n    }\n\n    .areas-hero__description {\n      font-size: var(--font-size-xl);\n    }\n\n    .map-section {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .map-section__heading {\n      font-size: var(--font-size-3xl);\n    }\n\n    .primary-areas {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .primary-areas__heading {\n      font-size: var(--font-size-3xl);\n    }\n\n    .primary-areas__grid {\n      grid-template-columns: repeat(3, 1fr);\n    }\n\n    .all-areas {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .all-areas__heading {\n      font-size: var(--font-size-3xl);\n    }\n\n    .all-areas__regions {\n      grid-template-columns: repeat(3, 1fr);\n    }\n\n    .why-local {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .why-local__heading {\n      font-size: var(--font-size-3xl);\n    }\n\n    .why-local__grid {\n      grid-template-columns: repeat(3, 1fr);\n    }\n\n    .cta-section {\n      padding: var(--spacing-24) var(--spacing-6);\n    }\n\n    .cta-section__heading {\n      font-size: var(--font-size-4xl);\n    }\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Desktop (1024px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 1024px) {\n    .areas-hero {\n      padding: var(--spacing-24) var(--spacing-8) var(--spacing-28);\n    }\n\n    .primary-areas__grid {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .all-areas__regions {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n\n  @media (prefers-reduced-motion: reduce) {\n    .areas-hero {\n      animation: none;\n    }\n\n    .areas-hero__badge,\n    .areas-hero__title,\n    .areas-hero__description,\n    .areas-hero__cta-group,\n    .areas-hero__stats {\n      animation: none;\n    }\n\n    .map-section__header-wrapper::after,\n    .primary-areas__header-wrapper::after,\n    .all-areas__header-wrapper::after,\n    .why-local__header-wrapper::after {\n      animation: none;\n    }\n\n    .map-section__pin::before {\n      animation: none;\n    }\n\n    .area-card,\n    .benefit-card {\n      transition: none;\n    }\n\n    .area-card:hover,\n    .benefit-card:hover {\n      transform: none;\n    }\n\n    .cta-section :global(.btn:hover) {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE ADJUSTMENTS\n   * ================================================================= */\n\n  :global(html[data-theme=\"dark\"]) .map-section__map {\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-900) 0%,\n      var(--color-primary-800) 50%,\n      var(--color-background) 100%\n    );\n  }\n\n  :global(html[data-theme=\"dark\"]) .map-section__pin span {\n    background-color: var(--color-background-elevated);\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n\n  @media print {\n    .areas-hero {\n      background: none;\n      padding: var(--spacing-8) 0;\n    }\n\n    .areas-hero__decoration {\n      display: none;\n    }\n\n    .areas-hero__cta-group {\n      display: none;\n    }\n\n    .map-section,\n    .primary-areas,\n    .all-areas,\n    .why-local {\n      padding: var(--spacing-8) 0;\n    }\n\n    .map-section__header-wrapper::before,\n    .map-section__header-wrapper::after,\n    .primary-areas__header-wrapper::before,\n    .primary-areas__header-wrapper::after,\n    .all-areas__header-wrapper::before,\n    .all-areas__header-wrapper::after,\n    .why-local__header-wrapper::before,\n    .why-local__header-wrapper::after {\n      display: none;\n    }\n\n    .area-card,\n    .benefit-card {\n      break-inside: avoid;\n    }\n\n    .area-card:hover,\n    .benefit-card:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .cta-section {\n      display: none;\n    }\n  }\n</style>\n"
}
Now let me update the Header component to add the Service Areas link to the navigation:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing page patterns (services.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing page patterns"
    },
    {
      "content": "Create service-areas.config.ts with Houston neighborhoods data",
      "status": "completed",
      "activeForm": "Creating service areas configuration"
    },
    {
      "content": "Create service-areas.astro page with neighborhoods listing",
      "status": "completed",
      "activeForm": "Creating service areas page"
    },
    {
      "content": "Add static map image component",
      "status": "completed",
      "activeForm": "Adding static map image"
    },
    {
      "content": "Implement local SEO schema markup",
      "status": "completed",
      "activeForm": "Implementing local SEO schema markup"
    },
    {
      "content": "Add navigation link to header",
      "status": "in_progress",
      "activeForm": "Adding navigation link"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Header.astro",
  "old_string": "// Navigation links configuration\nconst navLinks = [\n  { href: '/', label: 'Home' },\n  { href: '/services', label: 'Services' },\n  { href: '/portfolio', label: 'Portfolio' },\n  { href: '/about', label: 'About' },\n  { href: '/contact', label: 'Contact' },\n];",
  "new_string": "// Navigation links configuration\nconst navLinks = [\n  { href: '/', label: 'Home' },\n  { href: '/services', label: 'Services' },\n  { href: '/service-areas', label: 'Service Areas' },\n  { href: '/portfolio', label: 'Portfolio' },\n  { href: '/about', label: 'About' },\n  { href: '/contact', label: 'Contact' },\n];"
}
Now let me verify the implementation by creating a Playwright test:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing page patterns (services.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing page patterns"
    },
    {
      "content": "Create service-areas.config.ts with Houston neighborhoods data",
      "status": "completed",
      "activeForm": "Creating service areas configuration"
    },
    {
      "content": "Create service-areas.astro page with neighborhoods listing",
      "status": "completed",
      "activeForm": "Creating service areas page"
    },
    {
      "content": "Add static map image component",
      "status": "completed",
      "activeForm": "Adding static map image"
    },
    {
      "content": "Implement local SEO schema markup",
      "status": "completed",
      "activeForm": "Implementing local SEO schema markup"
    },
    {
      "content": "Add navigation link to header",
      "status": "completed",
      "activeForm": "Adding navigation link"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "in_progress",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Glob
Input: {
  "pattern": "playwright.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "tests/**/*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\playwright.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\formspree-integration.spec.ts"
}
Now let me create a verification test for the service areas page:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\service-areas-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Service Areas Page Verification Test\n *\n * Temporary test to verify the service areas page implementation:\n * - Page loads correctly\n * - Hero section displays properly\n * - Service areas are listed\n * - Local SEO schema markup is present\n * - Navigation link works\n */\n\ntest.describe('Service Areas Page', () => {\n  test('page loads and displays hero section', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check page title\n    await expect(page).toHaveTitle(/Service Areas.*Houston Web/i);\n\n    // Check hero section is visible\n    const heroHeading = page.locator('#areas-hero-heading');\n    await expect(heroHeading).toBeVisible();\n    await expect(heroHeading).toContainText('Web Design Services');\n    await expect(heroHeading).toContainText('Houston Businesses');\n\n    // Check hero badge\n    const badge = page.locator('.areas-hero__badge');\n    await expect(badge).toBeVisible();\n    await expect(badge).toContainText('Greater Houston Area');\n  });\n\n  test('displays service area statistics', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check statistics are displayed\n    const stats = page.locator('.areas-hero__stats');\n    await expect(stats).toBeVisible();\n\n    // Should show neighborhoods count\n    await expect(stats).toContainText('Neighborhoods');\n\n    // Should show ZIP codes count\n    await expect(stats).toContainText('ZIP Codes');\n\n    // Should show regions count\n    await expect(stats).toContainText('Regions');\n  });\n\n  test('displays map section', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check map section exists\n    const mapSection = page.locator('.map-section');\n    await expect(mapSection).toBeVisible();\n\n    // Check map heading\n    const mapHeading = page.locator('#map-heading');\n    await expect(mapHeading).toBeVisible();\n    await expect(mapHeading).toContainText('Service Coverage');\n\n    // Check map shows Houston area\n    const mapLabel = page.locator('.map-section__map-label');\n    await expect(mapLabel).toContainText('Greater Houston');\n  });\n\n  test('displays featured service areas', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check primary areas section exists\n    const primaryAreas = page.locator('.primary-areas');\n    await expect(primaryAreas).toBeVisible();\n\n    // Check heading\n    const heading = page.locator('#primary-areas-heading');\n    await expect(heading).toContainText('Featured Service Areas');\n\n    // Check that area cards are displayed (at least one primary area)\n    const areaCards = page.locator('.area-card--primary');\n    await expect(areaCards.first()).toBeVisible();\n\n    // Should show major areas like Downtown, Katy, etc.\n    const pageContent = await page.content();\n    expect(pageContent).toContain('Downtown Houston');\n    expect(pageContent).toContain('Katy');\n    expect(pageContent).toContain('The Woodlands');\n  });\n\n  test('displays all areas grouped by region', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check all areas section exists\n    const allAreas = page.locator('.all-areas');\n    await expect(allAreas).toBeVisible();\n\n    // Check heading\n    const heading = page.locator('#all-areas-heading');\n    await expect(heading).toContainText('All Service Areas');\n\n    // Check region groups are displayed\n    const regionGroups = page.locator('.region-group');\n    const count = await regionGroups.count();\n    expect(count).toBeGreaterThan(3); // Should have multiple regions\n\n    // Check that region titles are meaningful\n    const pageContent = await page.content();\n    expect(pageContent).toContain('Central Houston');\n    expect(pageContent).toContain('West Houston');\n    expect(pageContent).toContain('North Houston');\n  });\n\n  test('displays why local section with benefits', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check why local section exists\n    const whyLocal = page.locator('.why-local');\n    await expect(whyLocal).toBeVisible();\n\n    // Check heading\n    const heading = page.locator('#why-local-heading');\n    await expect(heading).toContainText('Local Web Designer');\n\n    // Check benefit cards are displayed\n    const benefitCards = page.locator('.benefit-card');\n    const count = await benefitCards.count();\n    expect(count).toBe(6); // Should have 6 benefits\n\n    // Check key benefits are mentioned\n    const pageContent = await page.content();\n    expect(pageContent).toContain('Local Market Knowledge');\n    expect(pageContent).toContain('Face-to-Face Meetings');\n    expect(pageContent).toContain('Local SEO Expertise');\n  });\n\n  test('has CTA section with contact link', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check CTA section exists\n    const ctaSection = page.locator('.cta-section');\n    await expect(ctaSection).toBeVisible();\n\n    // Check CTA heading\n    const heading = page.locator('#cta-heading');\n    await expect(heading).toContainText('Local Expert');\n\n    // Check contact button exists\n    const contactBtn = page.locator('.cta-section a[href=\"/contact\"]');\n    await expect(contactBtn).toBeVisible();\n    await expect(contactBtn).toContainText('Free Consultation');\n  });\n\n  test('navigation link exists in header', async ({ page }) => {\n    await page.goto('/');\n\n    // Check desktop navigation has Service Areas link\n    const navLink = page.locator('nav[aria-label=\"Main navigation\"] a[href=\"/service-areas\"]');\n    await expect(navLink).toHaveText('Service Areas');\n\n    // Click the link\n    await navLink.click();\n\n    // Should navigate to service areas page\n    await expect(page).toHaveURL('/service-areas');\n  });\n\n  test('has proper local SEO meta tags', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check meta description includes location keywords\n    const metaDescription = page.locator('meta[name=\"description\"]');\n    const descContent = await metaDescription.getAttribute('content');\n    expect(descContent).toContain('Houston');\n    expect(descContent).toContain('web design');\n\n    // Check page has keywords meta tag\n    const metaKeywords = page.locator('meta[name=\"keywords\"]');\n    const keywordsContent = await metaKeywords.getAttribute('content');\n    expect(keywordsContent).toContain('Houston');\n  });\n\n  test('has JSON-LD schema markup', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check for JSON-LD script tag\n    const jsonLd = page.locator('script[type=\"application/ld+json\"]');\n    const count = await jsonLd.count();\n    expect(count).toBeGreaterThan(0);\n\n    // Check that it contains LocalBusiness or areaServed\n    const scriptContent = await jsonLd.first().textContent();\n    expect(scriptContent).toBeTruthy();\n    // The schema should mention area served\n    expect(scriptContent).toMatch(/areaServed|LocalBusiness/i);\n  });\n\n  test('page is accessible', async ({ page }) => {\n    await page.goto('/service-areas');\n\n    // Check main landmark exists\n    const main = page.locator('main');\n    await expect(main).toBeVisible();\n\n    // Check all sections have proper headings\n    const h1 = page.locator('h1');\n    await expect(h1).toHaveCount(1);\n\n    // Check skip link exists\n    const skipLink = page.locator('.skip-link');\n    await expect(skipLink).toBeAttached();\n\n    // Check all images have alt text (decorative images should have empty alt or aria-hidden)\n    const images = page.locator('img:not([aria-hidden=\"true\"])');\n    const imgCount = await images.count();\n    for (let i = 0; i < imgCount; i++) {\n      const alt = await images.nth(i).getAttribute('alt');\n      expect(alt).not.toBeNull();\n    }\n  });\n\n  test('is responsive and mobile-friendly', async ({ page }) => {\n    // Test mobile viewport\n    await page.setViewportSize({ width: 375, height: 667 });\n    await page.goto('/service-areas');\n\n    // Hero should still be visible\n    const heroHeading = page.locator('#areas-hero-heading');\n    await expect(heroHeading).toBeVisible();\n\n    // Cards should stack on mobile\n    const areaCards = page.locator('.area-card--primary');\n    await expect(areaCards.first()).toBeVisible();\n\n    // Test tablet viewport\n    await page.setViewportSize({ width: 768, height: 1024 });\n    await expect(heroHeading).toBeVisible();\n  });\n});\n"
}
Now let's run the Playwright test to verify the implementation:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npx playwright test tests/service-areas-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright test for service areas",
  "timeout": 180000
}
The tests are failing because the page is returning a 404. This is likely because Astro needs to be rebuilt. Let me check if there's a build issue and fix it:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npm run build 2>&1 | head -100",
  "description": "Build project to check for errors",
  "timeout": 120000
}
The build is successful and the service-areas page is being generated. The issue is that the dev server might not have been restarted. Let me run the tests again - the webServer config should handle starting the dev server:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npx playwright test tests/service-areas-verification.spec.ts --reporter=list --timeout=60000 2>&1",
  "description": "Run Playwright test for service areas again",
  "timeout": 180000
}
All 12 tests passed. Now let me delete the verification test file as instructed:

🔧 Tool: Bash
Input: {
  "command": "rm /c/Users/James/Repos/service-business/tests/service-areas-verification.spec.ts",
  "description": "Delete verification test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing page patterns (services.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing page patterns"
    },
    {
      "content": "Create service-areas.config.ts with Houston neighborhoods data",
      "status": "completed",
      "activeForm": "Creating service areas configuration"
    },
    {
      "content": "Create service-areas.astro page with neighborhoods listing",
      "status": "completed",
      "activeForm": "Creating service areas page"
    },
    {
      "content": "Add static map image component",
      "status": "completed",
      "activeForm": "Adding static map image"
    },
    {
      "content": "Implement local SEO schema markup",
      "status": "completed",
      "activeForm": "Implementing local SEO schema markup"
    },
    {
      "content": "Add navigation link to header",
      "status": "completed",
      "activeForm": "Adding navigation link"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "completed",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}
<summary>
## Summary: Build a Dedicated Service Area Page for Houston Neighborhoods

### Changes Implemented
- Created a comprehensive service areas configuration file (`service-areas.config.ts`) with 40+ Houston neighborhoods and districts organized by region
- Built a dedicated service areas page (`service-areas.astro`) with the following sections:
  - Hero section with service area statistics (neighborhoods, ZIP codes, regions)
  - Interactive static map visualization showing coverage area with animated location pins
  - Featured service areas section highlighting 13 primary areas
  - Complete listing of all areas organized by 9 Houston regions
  - "Why Choose Local" section with 6 benefits of working with a local web designer
  - CTA section for contact conversion
- Added "Service Areas" link to the main navigation header
- Implemented local SEO optimization:
  - Location-specific keywords in meta title, description, and keywords tags
  - LocalBusiness schema.org markup with `areaServed` data for all service areas
  - Semantic HTML structure with proper heading hierarchy
- Full responsive design for mobile, tablet, and desktop
- Accessibility features including ARIA labels, skip links, and proper landmarks
- Dark mode support and reduced motion preferences
- Print styles for professional printouts

### Files Modified
- `src/config/service-areas.config.ts` (NEW) - Configuration file with Houston neighborhoods data and helper functions
- `src/pages/service-areas.astro` (NEW) - The dedicated service areas page
- `src/components/Header.astro` (MODIFIED) - Added "Service Areas" navigation link

### Notes for Developer
- The map section uses a CSS-based visualization with animated location pins; consider replacing with an actual static map image (Google Maps Static API or similar) for production
- All 40+ Houston neighborhoods are configured with region groupings, short descriptions, and ZIP codes
- The `getPrimaryServiceAreas()` and `getServiceAreasByRegion()` helper functions can be reused elsewhere
- The page follows the same BEM naming conventions and design patterns as the existing services page
- JSON-LD schema markup passes the `areaServed` data to help with local search visibility

### Verification Status
- Created a comprehensive Playwright test suite with 12 test cases covering:
  - Page loading and hero section display
  - Service area statistics
  - Map section visibility
  - Featured areas display
  - Regional groupings
  - Benefits section
  - CTA section and links
  - Navigation integration
  - Local SEO meta tags
  - JSON-LD schema markup
  - Accessibility compliance
  - Responsive design on mobile/tablet viewports
- All 12 tests passed successfully
- Verification test file was deleted after successful verification
</summary>