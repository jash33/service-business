/**
 * Service JSON-LD Generator
 * Generates comprehensive schema.org Service structured data
 * for enhanced Google search results and rich snippets on service pages
 *
 * @see https://schema.org/Service
 * @see https://developers.google.com/search/docs/appearance/structured-data/local-business
 */

import type {
  ServiceSchema,
  ServiceOfferSchema,
  ServiceArea,
  OpeningHoursSpecification,
  AggregateRating,
  PostalAddress,
} from '../types/seo';
import { toAbsoluteUrl, escapeHtml } from '../config/seo.config';

/**
 * Generate schema.org PostalAddress object for service provider
 */
function generateProviderAddress(address: PostalAddress): object {
  return {
    '@type': 'PostalAddress',
    streetAddress: address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postalCode: address.postalCode,
    addressCountry: address.addressCountry,
  };
}

/**
 * Generate schema.org OpeningHoursSpecification array for service availability
 */
function generateHoursAvailable(specs: OpeningHoursSpecification[]): object[] {
  return specs.map((spec) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: Array.isArray(spec.dayOfWeek)
      ? spec.dayOfWeek.map((day) => `https://schema.org/${day}`)
      : `https://schema.org/${spec.dayOfWeek}`,
    opens: spec.opens,
    closes: spec.closes,
    validFrom: spec.validFrom,
    validThrough: spec.validThrough,
  }));
}

/**
 * Generate schema.org ServiceArea/GeoShape objects
 */
function generateAreaServed(
  areas: ServiceArea | ServiceArea[] | string | string[]
): object | object[] | string | string[] {
  if (typeof areas === 'string') {
    return areas;
  }
  if (Array.isArray(areas)) {
    if (areas.length === 0) return undefined as unknown as object[];
    if (typeof areas[0] === 'string') {
      return areas as string[];
    }
    return (areas as ServiceArea[]).map((area) => generateSingleAreaServed(area));
  }
  return generateSingleAreaServed(areas as ServiceArea);
}

function generateSingleAreaServed(area: ServiceArea): object {
  switch (area.type) {
    case 'GeoCircle':
      return {
        '@type': 'GeoCircle',
        geoMidpoint: area.geoMidpoint
          ? {
              '@type': 'GeoCoordinates',
              latitude: area.geoMidpoint.latitude,
              longitude: area.geoMidpoint.longitude,
            }
          : undefined,
        geoRadius: area.geoRadius,
      };
    case 'PostalCode':
      return {
        '@type': 'PostalAddress',
        postalCode: area.postalCode,
        addressCountry: area.addressCountry,
      };
    case 'City':
      return {
        '@type': 'City',
        name: area.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: area.addressLocality,
          addressRegion: area.addressRegion,
          addressCountry: area.addressCountry,
        },
      };
    case 'State':
      return {
        '@type': 'State',
        name: area.name || area.addressRegion,
        address: {
          '@type': 'PostalAddress',
          addressRegion: area.addressRegion,
          addressCountry: area.addressCountry,
        },
      };
    case 'AdministrativeArea':
    default:
      return {
        '@type': 'AdministrativeArea',
        name: area.name,
        address: area.addressLocality || area.addressRegion
          ? {
              '@type': 'PostalAddress',
              addressLocality: area.addressLocality,
              addressRegion: area.addressRegion,
              addressCountry: area.addressCountry,
            }
          : undefined,
      };
  }
}

/**
 * Generate schema.org Offer object for service pricing
 */
function generateServiceOffer(offer: ServiceOfferSchema, siteUrl: string): object {
  // Parse price to ensure numeric value if needed
  const priceValue = typeof offer.price === 'string'
    ? parseFloat(offer.price.replace(/[^0-9.]/g, ''))
    : offer.price;

  return {
    '@type': 'Offer',
    price: priceValue || undefined,
    priceCurrency: offer.priceCurrency || 'USD',
    priceSpecification: offer.priceSpecification
      ? {
          '@type': 'PriceSpecification',
          price: priceValue,
          priceCurrency: offer.priceCurrency || 'USD',
          valueAddedTaxIncluded: false,
          description: offer.priceSpecification,
        }
      : undefined,
    availability: offer.availability
      ? `https://schema.org/${offer.availability}`
      : 'https://schema.org/InStock',
    url: offer.url ? toAbsoluteUrl(offer.url, siteUrl) : undefined,
    validFrom: offer.validFrom,
    validThrough: offer.validThrough,
  };
}

/**
 * Generate schema.org AggregateRating object
 */
function generateAggregateRating(rating: AggregateRating): object {
  return {
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
    ratingCount: rating.ratingCount,
    reviewCount: rating.reviewCount,
  };
}

/**
 * Generate comprehensive Service JSON-LD schema
 * This follows schema.org Service vocabulary for service pages
 *
 * @param schema - ServiceSchema configuration
 * @param siteUrl - Base URL of the site
 * @returns Complete JSON-LD object for Service
 */
export function generateServiceSchema(
  schema: ServiceSchema,
  siteUrl: string
): object {
  // Process images
  const images = schema.image
    ? Array.isArray(schema.image)
      ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))
      : [toAbsoluteUrl(schema.image, siteUrl)]
    : undefined;

  // Process offers (can be single or array)
  let offers: object | object[] | undefined;
  if (schema.offers) {
    if (Array.isArray(schema.offers)) {
      offers = schema.offers.map((offer) => generateServiceOffer(offer, siteUrl));
    } else {
      offers = generateServiceOffer(schema.offers, siteUrl);
    }
  }

  // Build the JSON-LD object
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    // === Service Identity ===
    name: escapeHtml(schema.name),
    description: schema.description ? escapeHtml(schema.description) : undefined,
    url: schema.url ? toAbsoluteUrl(schema.url, siteUrl) : undefined,
    image: images,
    serviceType: schema.serviceType,
    serviceOutput: schema.serviceOutput ? escapeHtml(schema.serviceOutput) : undefined,

    // === Service Provider ===
    provider: schema.provider
      ? {
          '@type': schema.provider.type || 'LocalBusiness',
          name: escapeHtml(schema.provider.name),
          url: schema.provider.url || siteUrl,
          telephone: schema.provider.telephone,
          address: schema.provider.address
            ? generateProviderAddress(schema.provider.address)
            : undefined,
          priceRange: schema.provider.priceRange,
        }
      : undefined,

    // === Service Area & Availability ===
    areaServed: schema.areaServed ? generateAreaServed(schema.areaServed) : undefined,
    hoursAvailable: schema.hoursAvailable
      ? generateHoursAvailable(schema.hoursAvailable)
      : undefined,

    // === Pricing ===
    offers: offers,

    // === Ratings & Reviews ===
    aggregateRating: schema.aggregateRating
      ? generateAggregateRating(schema.aggregateRating)
      : undefined,

    // === Brand & Audience ===
    brand: schema.brand
      ? {
          '@type': 'Brand',
          name: escapeHtml(schema.brand),
        }
      : undefined,
    audience: schema.audience
      ? {
          '@type': schema.audience.type || 'Audience',
          name: schema.audience.name,
          audienceType: schema.audience.audienceType,
        }
      : undefined,

    // === Related Services ===
    isRelatedTo: schema.isRelatedTo?.length
      ? schema.isRelatedTo.map((service) => ({
          '@type': 'Service',
          name: escapeHtml(service),
        }))
      : undefined,

    // === Service Features/Catalog ===
    hasOfferCatalog: schema.hasOfferCatalog
      ? {
          '@type': 'OfferCatalog',
          name: escapeHtml(schema.hasOfferCatalog.name),
          itemListElement: schema.hasOfferCatalog.itemListElement.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: escapeHtml(item),
            },
          })),
        }
      : undefined,

    // === Terms of Service ===
    termsOfService: schema.termsOfService
      ? toAbsoluteUrl(schema.termsOfService, siteUrl)
      : undefined,
  };

  return jsonLd;
}

/**
 * Helper function to create a ServiceSchema from service page data
 * This simplifies creating service schemas from the existing service data structure
 */
export function createServiceSchemaFromData(
  serviceData: {
    id: string;
    name: string;
    shortDescription: string;
    benefits: string[];
    startingPrice: string;
    priceNote: string;
    ctaHref: string;
  },
  providerInfo: {
    name: string;
    url?: string;
    telephone?: string;
    address?: PostalAddress;
    priceRange?: string;
  },
  options?: {
    serviceType?: string;
    areaServed?: ServiceArea | ServiceArea[] | string | string[];
    hoursAvailable?: OpeningHoursSpecification[];
    image?: string | string[];
    aggregateRating?: AggregateRating;
    relatedServices?: string[];
  }
): ServiceSchema {
  // Parse the price from the startingPrice string (e.g., "$499" -> 499)
  const priceMatch = serviceData.startingPrice.match(/[\d,.]+/);
  const priceValue = priceMatch ? parseFloat(priceMatch[0].replace(/,/g, '')) : undefined;

  return {
    type: 'Service',
    name: serviceData.name,
    description: serviceData.shortDescription,
    url: serviceData.ctaHref,
    serviceType: options?.serviceType || serviceData.name,
    provider: {
      type: 'ProfessionalService',
      name: providerInfo.name,
      url: providerInfo.url,
      telephone: providerInfo.telephone,
      address: providerInfo.address,
      priceRange: providerInfo.priceRange as any,
    },
    offers: {
      price: priceValue,
      priceCurrency: 'USD',
      priceSpecification: serviceData.priceNote,
      availability: 'InStock',
      url: serviceData.ctaHref,
    },
    areaServed: options?.areaServed,
    hoursAvailable: options?.hoursAvailable,
    image: options?.image,
    aggregateRating: options?.aggregateRating,
    hasOfferCatalog: serviceData.benefits.length > 0
      ? {
          name: `${serviceData.name} Features`,
          itemListElement: serviceData.benefits,
        }
      : undefined,
    isRelatedTo: options?.relatedServices,
  };
}
