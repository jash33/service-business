/**
 * OG Image Generator Utility
 * Generates Open Graph images using Satori and Sharp
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { ogImageConfig, type PageOGConfig, type OGImageConfig } from '../config/og-image.config';

// Font loading will be handled by the build script
// This module focuses on the rendering logic

/**
 * Create the OG image React-like element structure
 * Satori uses a React-like JSX structure for rendering
 */
function createOGImageElement(
  pageConfig: PageOGConfig,
  config: OGImageConfig = ogImageConfig
): Record<string, unknown> {
  const { title, subtitle, category } = pageConfig;
  const {
    width,
    height,
    brandName,
    primaryColor,
    secondaryColor,
    accentColor,
    textColor,
    lightTextColor,
    websiteUrl,
  } = config;

  // Main container with gradient background
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        padding: '60px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      },
      children: [
        // Decorative background elements
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: `rgba(255, 255, 255, 0.05)`,
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '-150px',
              left: '-50px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: `rgba(255, 255, 255, 0.03)`,
            },
          },
        },
        // Category badge
        category
          ? {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '24px',
                },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: {
                        background: accentColor,
                        color: '#1a202c',
                        padding: '8px 20px',
                        borderRadius: '6px',
                        fontSize: '18px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      },
                      children: category,
                    },
                  },
                ],
              },
            }
          : null,
        // Main content area
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
            },
            children: [
              // Title
              {
                type: 'h1',
                props: {
                  style: {
                    fontSize: title.length > 40 ? '52px' : '64px',
                    fontWeight: '700',
                    color: textColor,
                    margin: '0 0 20px 0',
                    lineHeight: 1.2,
                    maxWidth: '900px',
                  },
                  children: title,
                },
              },
              // Subtitle
              subtitle
                ? {
                    type: 'p',
                    props: {
                      style: {
                        fontSize: '28px',
                        fontWeight: '400',
                        color: lightTextColor,
                        margin: 0,
                        lineHeight: 1.4,
                        maxWidth: '800px',
                      },
                      children: subtitle,
                    },
                  }
                : null,
            ].filter(Boolean),
          },
        },
        // Footer with branding
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 'auto',
              paddingTop: '40px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            },
            children: [
              // Brand name
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  },
                  children: [
                    // Logo/Icon placeholder
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '48px',
                          height: '48px',
                          borderRadius: '10px',
                          background: accentColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#1a202c',
                        },
                        children: 'HW',
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontSize: '24px',
                          fontWeight: '600',
                          color: textColor,
                        },
                        children: brandName,
                      },
                    },
                  ],
                },
              },
              // Website URL
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: lightTextColor,
                    fontSize: '20px',
                  },
                  children: [
                    {
                      type: 'span',
                      props: {
                        style: {
                          opacity: 0.8,
                        },
                        children: websiteUrl,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ].filter(Boolean),
    },
  };
}

/**
 * Generate an OG image as a PNG buffer
 * @param pageConfig - Configuration for the specific page
 * @param fonts - Array of font data for Satori
 * @param config - Global OG image configuration
 * @returns PNG image buffer
 */
export async function generateOGImage(
  pageConfig: PageOGConfig,
  fonts: Array<{ name: string; data: ArrayBuffer; weight: number; style: 'normal' | 'italic' }>,
  config: OGImageConfig = ogImageConfig
): Promise<Buffer> {
  // Create the element structure
  const element = createOGImageElement(pageConfig, config);

  // Generate SVG using Satori
  const svg = await satori(element as React.ReactNode, {
    width: config.width,
    height: config.height,
    fonts: fonts.map((font) => ({
      name: font.name,
      data: font.data,
      weight: font.weight as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
      style: font.style,
    })),
  });

  // Convert SVG to PNG using resvg
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: config.width,
    },
  });

  const pngData = resvg.render();
  return Buffer.from(pngData.asPng());
}

/**
 * Create blog post OG image element
 * Special template for blog articles with date and read time
 */
function createBlogPostOGImageElement(
  pageConfig: PageOGConfig & {
    date?: string;
    readTime?: string;
    author?: string;
  },
  config: OGImageConfig = ogImageConfig
): Record<string, unknown> {
  const { title, subtitle, category, date, readTime } = pageConfig;
  const {
    width,
    height,
    brandName,
    primaryColor,
    secondaryColor,
    accentColor,
    textColor,
    lightTextColor,
    websiteUrl,
  } = config;

  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        padding: '60px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      },
      children: [
        // Decorative elements
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: `rgba(255, 255, 255, 0.05)`,
            },
          },
        },
        // Header with category and metadata
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
            },
            children: [
              // Category badge
              {
                type: 'div',
                props: {
                  style: {
                    background: accentColor,
                    color: '#1a202c',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  },
                  children: category || 'Blog',
                },
              },
              // Date and read time
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    color: lightTextColor,
                    fontSize: '16px',
                  },
                  children: [
                    date
                      ? {
                          type: 'span',
                          props: {
                            children: date,
                          },
                        }
                      : null,
                    readTime
                      ? {
                          type: 'span',
                          props: {
                            children: `${readTime} read`,
                          },
                        }
                      : null,
                  ].filter(Boolean),
                },
              },
            ],
          },
        },
        // Main content
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
            },
            children: [
              // Title
              {
                type: 'h1',
                props: {
                  style: {
                    fontSize: title.length > 60 ? '44px' : title.length > 40 ? '52px' : '60px',
                    fontWeight: '700',
                    color: textColor,
                    margin: '0 0 16px 0',
                    lineHeight: 1.2,
                    maxWidth: '950px',
                  },
                  children: title,
                },
              },
              // Subtitle
              subtitle
                ? {
                    type: 'p',
                    props: {
                      style: {
                        fontSize: '24px',
                        fontWeight: '400',
                        color: lightTextColor,
                        margin: 0,
                        lineHeight: 1.4,
                        maxWidth: '850px',
                      },
                      children: subtitle,
                    },
                  }
                : null,
            ].filter(Boolean),
          },
        },
        // Footer
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 'auto',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: accentColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#1a202c',
                        },
                        children: 'HW',
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontSize: '20px',
                          fontWeight: '600',
                          color: textColor,
                        },
                        children: brandName,
                      },
                    },
                  ],
                },
              },
              {
                type: 'span',
                props: {
                  style: {
                    color: lightTextColor,
                    fontSize: '18px',
                    opacity: 0.8,
                  },
                  children: websiteUrl,
                },
              },
            ],
          },
        },
      ].filter(Boolean),
    },
  };
}

/**
 * Generate a blog post OG image
 */
export async function generateBlogPostOGImage(
  pageConfig: PageOGConfig & {
    date?: string;
    readTime?: string;
    author?: string;
  },
  fonts: Array<{ name: string; data: ArrayBuffer; weight: number; style: 'normal' | 'italic' }>,
  config: OGImageConfig = ogImageConfig
): Promise<Buffer> {
  const element = createBlogPostOGImageElement(pageConfig, config);

  const svg = await satori(element as React.ReactNode, {
    width: config.width,
    height: config.height,
    fonts: fonts.map((font) => ({
      name: font.name,
      data: font.data,
      weight: font.weight as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
      style: font.style,
    })),
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: config.width,
    },
  });

  const pngData = resvg.render();
  return Buffer.from(pngData.asPng());
}

export { ogImageConfig, type PageOGConfig, type OGImageConfig };
