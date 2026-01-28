/**
 * OG Image Generation Script
 * Generates Open Graph images for all pages at build time
 *
 * Usage: npx tsx scripts/generate-og-images.ts
 */

import fs from 'fs/promises';
import path from 'path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import {
  ogImageConfig,
  pageOGConfigs,
  getOGImageFilename,
  type PageOGConfig,
  type OGImageConfig,
} from '../src/config/og-image.config';

// Output directory for generated images
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'og-images');

// Use system fonts or fallback to Google Fonts API for TTF
// These are the raw TTF URLs from Google Fonts (not woff2 which Satori doesn't support)
const ROBOTO_REGULAR_URL = 'https://github.com/google/fonts/raw/main/apache/roboto/Roboto%5Bwdth%2Cwght%5D.ttf';
const ROBOTO_FALLBACK_URL = 'https://cdn.jsdelivr.net/npm/@fontsource/roboto@5.0.8/files/roboto-latin-400-normal.woff';

/**
 * Fetch font data from URL with fallback
 */
async function fetchFont(url: string, fallbackUrl?: string): Promise<ArrayBuffer> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.arrayBuffer();
  } catch (error) {
    if (fallbackUrl) {
      console.log(`  ⚠️ Primary font failed, trying fallback...`);
      const response = await fetch(fallbackUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch font: ${response.statusText}`);
      }
      return response.arrayBuffer();
    }
    throw error;
  }
}

/**
 * Load Noto Sans from Google Fonts (TTF format)
 * Noto Sans is available as TTF from Google Fonts git repo
 */
async function loadFonts(): Promise<Array<{ name: string; data: ArrayBuffer; weight: number; style: 'normal' | 'italic' }>> {
  // Use Noto Sans which is available in TTF format
  const NOTO_SANS_REGULAR = 'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-400-normal.ttf';
  const NOTO_SANS_BOLD = 'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-700-normal.ttf';

  try {
    const [regularData, boldData] = await Promise.all([
      fetchFont(NOTO_SANS_REGULAR),
      fetchFont(NOTO_SANS_BOLD),
    ]);

    return [
      { name: 'Noto Sans', data: regularData, weight: 400, style: 'normal' as const },
      { name: 'Noto Sans', data: boldData, weight: 700, style: 'normal' as const },
    ];
  } catch (error) {
    console.log('  ⚠️ Primary fonts failed, using fallback fonts...');

    // Fallback to a different CDN with TTF fonts
    const OPEN_SANS_REGULAR = 'https://cdn.jsdelivr.net/fontsource/fonts/open-sans@latest/latin-400-normal.ttf';
    const OPEN_SANS_BOLD = 'https://cdn.jsdelivr.net/fontsource/fonts/open-sans@latest/latin-700-normal.ttf';

    const [regularData, boldData] = await Promise.all([
      fetchFont(OPEN_SANS_REGULAR),
      fetchFont(OPEN_SANS_BOLD),
    ]);

    return [
      { name: 'Open Sans', data: regularData, weight: 400, style: 'normal' as const },
      { name: 'Open Sans', data: boldData, weight: 700, style: 'normal' as const },
    ];
  }
}

/**
 * Create the OG image element structure for Satori
 */
function createOGImageElement(
  pageConfig: PageOGConfig,
  config: OGImageConfig,
  fontFamily: string
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
        fontFamily: `${fontFamily}, sans-serif`,
        position: 'relative',
        overflow: 'hidden',
      },
      children: [
        // Decorative background circle - top right
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '200px',
              background: 'rgba(255, 255, 255, 0.05)',
            },
          },
        },
        // Decorative background circle - bottom left
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '-150px',
              left: '-50px',
              width: '300px',
              height: '300px',
              borderRadius: '150px',
              background: 'rgba(255, 255, 255, 0.03)',
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
                        fontWeight: 600,
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
              flex: '1',
              justifyContent: 'center',
            },
            children: [
              // Title
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: title.length > 40 ? '52px' : '64px',
                    fontWeight: 700,
                    color: textColor,
                    marginBottom: '20px',
                    lineHeight: '1.2',
                    maxWidth: '900px',
                  },
                  children: title,
                },
              },
              // Subtitle
              subtitle
                ? {
                    type: 'div',
                    props: {
                      style: {
                        fontSize: '28px',
                        fontWeight: 400,
                        color: lightTextColor,
                        lineHeight: '1.4',
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
              // Brand name with logo
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  },
                  children: [
                    // Logo placeholder
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
                          fontWeight: 700,
                          color: '#1a202c',
                        },
                        children: 'HW',
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '24px',
                          fontWeight: 600,
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
                    color: lightTextColor,
                    fontSize: '20px',
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
 * Generate a single OG image
 */
async function generateImage(
  pageConfig: PageOGConfig,
  fonts: Array<{ name: string; data: ArrayBuffer; weight: number; style: 'normal' | 'italic' }>,
  config: OGImageConfig
): Promise<Buffer> {
  const fontFamily = fonts[0]?.name || 'sans-serif';
  const element = createOGImageElement(pageConfig, config, fontFamily);

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
 * Main function to generate all OG images
 */
async function main() {
  console.log('🖼️  Starting OG Image Generation...\n');

  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  console.log(`📁 Output directory: ${OUTPUT_DIR}\n`);

  // Fetch fonts
  console.log('📥 Fetching fonts...');
  const fonts = await loadFonts();
  console.log(`✅ Fonts loaded (${fonts[0]?.name || 'unknown'})\n`);

  // Generate images for all configured pages
  const pages = Object.entries(pageOGConfigs);
  console.log(`📄 Generating ${pages.length} OG images...\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const [pagePath, pageConfig] of pages) {
    const filename = getOGImageFilename(pagePath);
    const outputPath = path.join(OUTPUT_DIR, filename);

    try {
      const imageBuffer = await generateImage(pageConfig, fonts, ogImageConfig);
      await fs.writeFile(outputPath, imageBuffer);
      console.log(`  ✅ ${filename} (${pagePath})`);
      successCount++;
    } catch (error) {
      console.error(`  ❌ ${filename} (${pagePath}): ${error}`);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`🎉 OG Image Generation Complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  if (errorCount > 0) {
    console.log(`   ❌ Errors: ${errorCount}`);
  }
  console.log('='.repeat(50) + '\n');

  // Generate a default/fallback image
  console.log('📄 Generating default fallback image...');
  const defaultConfig: PageOGConfig = {
    title: 'Houston Web Services',
    subtitle: 'Professional Web Design & Development for Small Businesses',
    category: 'Web Services',
  };

  try {
    const defaultImage = await generateImage(defaultConfig, fonts, ogImageConfig);
    await fs.writeFile(path.join(OUTPUT_DIR, 'og-default.png'), defaultImage);
    console.log('  ✅ og-default.png\n');
  } catch (error) {
    console.error(`  ❌ og-default.png: ${error}\n`);
  }
}

// Run the script
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
