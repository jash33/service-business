I'll continue the implementation of the FAQPage schema markup feature. Let me first explore the codebase to understand what exists and what needs to be done.

🔧 Tool: Glob
Input: {
  "pattern": "**/*faq*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*accordion*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*schema*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\faq.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/**/*.{astro,tsx,jsx}"
}
I found the FAQ types and the FAQAccordion component. Let me read the existing FAQAccordion component to understand its structure:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FAQAccordion.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\SEO.astro"
}
Now I have a good understanding of the codebase. I can see:

1. The `FAQAccordion.astro` component exists with a well-structured FAQ display
2. The `SEO.astro` component already has JSON-LD support for various schema types including `FAQPage`
3. The FAQ types are defined in `src/types/faq.ts`

Now I need to:
1. Add a FAQPage schema generator function to the SEO component (or add it directly to the FAQAccordion)
2. Update the FAQAccordion to include the FAQPage schema markup

Let me check the SEO types to understand the existing schema patterns:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\seo.ts"
}
I see that the current SEO types have a `WebPageSchema` type that includes `FAQPage`, but it doesn't actually handle the FAQ items properly. The FAQPage schema requires a specific structure with `mainEntity` containing the Question and Answer items.

Let me add a proper `FAQPageSchema` type and implement the schema generation. First, let me check where FAQ data is used in pages:

🔧 Tool: Grep
Input: {
  "pattern": "FAQAccordion",
  "output_mode": "content"
}
I found that the `FAQAccordion` is used on `index.astro` and `financing.astro` pages. Now I have enough information to implement the FAQPage schema markup. Let me create a plan:

1. Add a `FAQPageSchema` type to `src/types/seo.ts`
2. Add a function to generate the FAQPage JSON-LD in the SEO component OR directly in FAQAccordion
3. Update the `FAQAccordion` component to include the schema markup

The best approach is to add the schema directly to the `FAQAccordion` component since it has direct access to the FAQ items.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Add FAQPageSchema type to SEO types",
      "status": "in_progress",
      "activeForm": "Adding FAQPageSchema type to SEO types"
    },
    {
      "content": "Add FAQPage JSON-LD schema markup to FAQAccordion component",
      "status": "pending",
      "activeForm": "Adding FAQPage schema markup to FAQAccordion"
    },
    {
      "content": "Verify FAQPage schema with Playwright test",
      "status": "pending",
      "activeForm": "Verifying FAQPage schema with Playwright"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\seo.ts",
  "old_string": "/**\n * WebPage structured data\n */\nexport interface WebPageSchema {\n  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';\n  /** Page name */\n  name: string;\n  /** Page description */\n  description?: string;\n  /** Page URL */\n  url?: string;\n  /** Last reviewed date */\n  lastReviewed?: string;\n  /** Primary image */\n  primaryImageOfPage?: string;\n}",
  "new_string": "/**\n * WebPage structured data\n */\nexport interface WebPageSchema {\n  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';\n  /** Page name */\n  name: string;\n  /** Page description */\n  description?: string;\n  /** Page URL */\n  url?: string;\n  /** Last reviewed date */\n  lastReviewed?: string;\n  /** Primary image */\n  primaryImageOfPage?: string;\n}\n\n/**\n * FAQPage structured data for rich snippets\n * @see https://schema.org/FAQPage\n * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage\n */\nexport interface FAQPageSchema {\n  type: 'FAQPage';\n  /** Array of FAQ items with questions and answers */\n  mainEntity: FAQQuestionSchema[];\n}\n\n/**\n * Question structured data for FAQPage\n * @see https://schema.org/Question\n */\nexport interface FAQQuestionSchema {\n  /** The question text */\n  question: string;\n  /** The answer text (can include HTML) */\n  answer: string;\n}"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\seo.ts",
  "old_string": "/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema;",
  "new_string": "/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema\n  | FAQPageSchema;"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Add FAQPageSchema type to SEO types",
      "status": "completed",
      "activeForm": "Adding FAQPageSchema type to SEO types"
    },
    {
      "content": "Add FAQPage JSON-LD schema markup to FAQAccordion component",
      "status": "in_progress",
      "activeForm": "Adding FAQPage schema markup to FAQAccordion"
    },
    {
      "content": "Verify FAQPage schema with Playwright test",
      "status": "pending",
      "activeForm": "Verifying FAQPage schema with Playwright"
    }
  ]
}
Now let me update the FAQAccordion component to include the FAQPage JSON-LD schema markup:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FAQAccordion.astro",
  "old_string": "---\n/**\n * FAQ Accordion Component\n * A fully accessible accordion component for displaying frequently asked questions.\n *\n * Features:\n * - WCAG 2.1 AA compliant accessibility\n * - Full keyboard navigation (Tab, Enter, Space, Arrow keys)\n * - Proper ARIA attributes (aria-expanded, aria-controls, aria-labelledby, role=\"region\")\n * - Smooth expand/collapse animations with reduced motion support\n * - Single or multiple panels open simultaneously\n * - Focus management when expanding/collapsing\n * - Responsive design for mobile, tablet, and desktop\n * - Visual indicators for expanded/collapsed states\n * - Screen reader friendly announcements\n *\n * @example Basic usage\n * ```astro\n * <FAQAccordion items={faqItems} />\n * ```\n *\n * @example With heading and multiple panels\n * ```astro\n * <FAQAccordion\n *   items={faqItems}\n *   heading=\"Frequently Asked Questions\"\n *   subheading=\"Find answers to common questions about our services.\"\n *   allowMultiple={true}\n *   initialExpanded={0}\n * />\n * ```\n */\n\nimport type { FAQAccordionProps, FAQItem } from '../types/faq';\n\ninterface Props extends FAQAccordionProps {}",
  "new_string": "---\n/**\n * FAQ Accordion Component\n * A fully accessible accordion component for displaying frequently asked questions.\n *\n * Features:\n * - WCAG 2.1 AA compliant accessibility\n * - Full keyboard navigation (Tab, Enter, Space, Arrow keys)\n * - Proper ARIA attributes (aria-expanded, aria-controls, aria-labelledby, role=\"region\")\n * - Smooth expand/collapse animations with reduced motion support\n * - Single or multiple panels open simultaneously\n * - Focus management when expanding/collapsing\n * - Responsive design for mobile, tablet, and desktop\n * - Visual indicators for expanded/collapsed states\n * - Screen reader friendly announcements\n * - FAQPage schema markup for rich snippets in search results\n *\n * @example Basic usage\n * ```astro\n * <FAQAccordion items={faqItems} />\n * ```\n *\n * @example With heading and multiple panels\n * ```astro\n * <FAQAccordion\n *   items={faqItems}\n *   heading=\"Frequently Asked Questions\"\n *   subheading=\"Find answers to common questions about our services.\"\n *   allowMultiple={true}\n *   initialExpanded={0}\n * />\n * ```\n *\n * @example Disable schema markup (useful when multiple FAQ sections exist on a page)\n * ```astro\n * <FAQAccordion items={faqItems} includeSchema={false} />\n * ```\n */\n\nimport type { FAQAccordionProps, FAQItem } from '../types/faq';\n\ninterface Props extends FAQAccordionProps {\n  /** Whether to include FAQPage schema markup (default: true) */\n  includeSchema?: boolean;\n}"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FAQAccordion.astro",
  "old_string": "const {\n  items,\n  heading = 'Frequently Asked Questions',\n  subheading,\n  allowMultiple = false,\n  initialExpanded = null,\n  id = 'faq',\n  class: className = '',\n} = Astro.props;",
  "new_string": "const {\n  items,\n  heading = 'Frequently Asked Questions',\n  subheading,\n  allowMultiple = false,\n  initialExpanded = null,\n  id = 'faq',\n  class: className = '',\n  includeSchema = true,\n} = Astro.props;"
}
Now let me add the helper function to strip HTML tags (for the schema) and generate the JSON-LD schema:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FAQAccordion.astro",
  "old_string": "// Build CSS classes\nconst sectionClasses = [\n  'faq-section',\n  className,\n].filter(Boolean).join(' ');",
  "new_string": "// Build CSS classes\nconst sectionClasses = [\n  'faq-section',\n  className,\n].filter(Boolean).join(' ');\n\n/**\n * Generates FAQPage schema markup for rich snippets in search results\n * @see https://schema.org/FAQPage\n * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage\n */\nfunction generateFAQPageSchema(faqItems: FAQItem[]): object {\n  return {\n    '@context': 'https://schema.org',\n    '@type': 'FAQPage',\n    mainEntity: faqItems.map((item) => ({\n      '@type': 'Question',\n      name: item.question,\n      acceptedAnswer: {\n        '@type': 'Answer',\n        text: item.answer,\n      },\n    })),\n  };\n}\n\n// Generate the FAQPage schema if enabled\nconst faqPageSchema = includeSchema ? generateFAQPageSchema(items) : null;"
}
Now let me add the JSON-LD script tag to the component's HTML output. I'll add it right after the closing `</section>` tag:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FAQAccordion.astro",
  "offset": 85,
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FAQAccordion.astro",
  "offset": 160,
  "limit": 30
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FAQAccordion.astro",
  "old_string": "    <!-- Screen reader announcement region -->\n    <div\n      class=\"sr-only\"\n      role=\"status\"\n      aria-live=\"polite\"\n      aria-atomic=\"true\"\n      id={`${id}-announcer`}\n    ></div>\n  </div>\n</section>\n\n<style>",
  "new_string": "    <!-- Screen reader announcement region -->\n    <div\n      class=\"sr-only\"\n      role=\"status\"\n      aria-live=\"polite\"\n      aria-atomic=\"true\"\n      id={`${id}-announcer`}\n    ></div>\n  </div>\n</section>\n\n<!-- FAQPage Schema Markup for Rich Snippets -->\n{faqPageSchema && (\n  <script\n    type=\"application/ld+json\"\n    set:html={JSON.stringify(faqPageSchema, null, 0)}\n  />\n)}\n\n<style>"
}
Now let me also update the `FAQAccordionProps` type in `src/types/faq.ts` to include the new `includeSchema` prop:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\faq.ts",
  "old_string": "/**\n * Props for the FAQAccordion component\n */\nexport interface FAQAccordionProps {\n  /** Array of FAQ items to display */\n  items: FAQItem[];\n  /** Section heading text */\n  heading?: string;\n  /** Section subheading/description text */\n  subheading?: string;\n  /** Whether multiple panels can be open at once */\n  allowMultiple?: boolean;\n  /** Index of initially expanded item (null for all collapsed) */\n  initialExpanded?: number | null;\n  /** Optional section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n}",
  "new_string": "/**\n * Props for the FAQAccordion component\n */\nexport interface FAQAccordionProps {\n  /** Array of FAQ items to display */\n  items: FAQItem[];\n  /** Section heading text */\n  heading?: string;\n  /** Section subheading/description text */\n  subheading?: string;\n  /** Whether multiple panels can be open at once */\n  allowMultiple?: boolean;\n  /** Index of initially expanded item (null for all collapsed) */\n  initialExpanded?: number | null;\n  /** Optional section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to include FAQPage schema markup for rich snippets (default: true) */\n  includeSchema?: boolean;\n}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Add FAQPageSchema type to SEO types",
      "status": "completed",
      "activeForm": "Adding FAQPageSchema type to SEO types"
    },
    {
      "content": "Add FAQPage JSON-LD schema markup to FAQAccordion component",
      "status": "completed",
      "activeForm": "Adding FAQPage schema markup to FAQAccordion"
    },
    {
      "content": "Verify FAQPage schema with Playwright test",
      "status": "in_progress",
      "activeForm": "Verifying FAQPage schema with Playwright"
    }
  ]
}
Now let me check if Playwright is installed and create a verification test:

🔧 Tool: Bash
Input: {
  "command": "cat package.json | grep -i playwright",
  "description": "Check for Playwright in package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "playwright.config.*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\playwright.config.ts"
}
Now I'll create a verification test. The test will verify that the FAQPage schema markup is present on pages with FAQ accordions:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\faq-schema-verification.spec.ts",
  "content": "/**\n * Temporary verification test for FAQPage schema markup feature\n * This test verifies that the FAQPage structured data is correctly\n * added to pages that use the FAQAccordion component.\n *\n * DELETE THIS FILE after successful verification.\n */\n\nimport { test, expect } from '@playwright/test';\n\ntest.describe('FAQPage Schema Markup', () => {\n  test('homepage contains valid FAQPage schema', async ({ page }) => {\n    await page.goto('/');\n\n    // Find the FAQPage schema script\n    const schemaScript = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    // Find the FAQPage schema among all JSON-LD scripts\n    let faqSchema: any = null;\n    for (const script of schemaScript) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'FAQPage') {\n            faqSchema = parsed;\n            break;\n          }\n        } catch (e) {\n          // Not valid JSON, skip\n        }\n      }\n    }\n\n    // Verify FAQPage schema exists\n    expect(faqSchema).not.toBeNull();\n    expect(faqSchema['@context']).toBe('https://schema.org');\n    expect(faqSchema['@type']).toBe('FAQPage');\n\n    // Verify mainEntity array exists and has items\n    expect(faqSchema.mainEntity).toBeDefined();\n    expect(Array.isArray(faqSchema.mainEntity)).toBe(true);\n    expect(faqSchema.mainEntity.length).toBeGreaterThan(0);\n\n    // Verify first FAQ item has correct structure\n    const firstItem = faqSchema.mainEntity[0];\n    expect(firstItem['@type']).toBe('Question');\n    expect(firstItem.name).toBeDefined();\n    expect(typeof firstItem.name).toBe('string');\n    expect(firstItem.name.length).toBeGreaterThan(0);\n\n    // Verify acceptedAnswer structure\n    expect(firstItem.acceptedAnswer).toBeDefined();\n    expect(firstItem.acceptedAnswer['@type']).toBe('Answer');\n    expect(firstItem.acceptedAnswer.text).toBeDefined();\n    expect(typeof firstItem.acceptedAnswer.text).toBe('string');\n    expect(firstItem.acceptedAnswer.text.length).toBeGreaterThan(0);\n\n    console.log(`✅ FAQPage schema found with ${faqSchema.mainEntity.length} questions`);\n    console.log(`First question: \"${firstItem.name.substring(0, 50)}...\"`);\n  });\n\n  test('FAQ accordion section is visible on homepage', async ({ page }) => {\n    await page.goto('/');\n\n    // Verify the FAQ section exists\n    const faqSection = page.locator('#faq');\n    await expect(faqSection).toBeVisible();\n\n    // Verify FAQ heading is present\n    const faqHeading = page.locator('#faq-heading');\n    await expect(faqHeading).toBeVisible();\n    await expect(faqHeading).toContainText('Frequently Asked Questions');\n\n    // Verify FAQ items exist\n    const faqItems = page.locator('.faq-item');\n    const count = await faqItems.count();\n    expect(count).toBeGreaterThan(0);\n\n    console.log(`✅ FAQ section found with ${count} accordion items`);\n  });\n\n  test('financing page contains valid FAQPage schema', async ({ page }) => {\n    await page.goto('/financing');\n\n    // Find the FAQPage schema script\n    const schemaScript = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    // Find the FAQPage schema among all JSON-LD scripts\n    let faqSchema: any = null;\n    for (const script of schemaScript) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'FAQPage') {\n            faqSchema = parsed;\n            break;\n          }\n        } catch (e) {\n          // Not valid JSON, skip\n        }\n      }\n    }\n\n    // Verify FAQPage schema exists\n    expect(faqSchema).not.toBeNull();\n    expect(faqSchema['@context']).toBe('https://schema.org');\n    expect(faqSchema['@type']).toBe('FAQPage');\n\n    // Verify mainEntity array exists and has items\n    expect(faqSchema.mainEntity).toBeDefined();\n    expect(Array.isArray(faqSchema.mainEntity)).toBe(true);\n    expect(faqSchema.mainEntity.length).toBeGreaterThan(0);\n\n    console.log(`✅ FAQPage schema found on financing page with ${faqSchema.mainEntity.length} questions`);\n  });\n});\n"
}
Now let me build the project and run the tests:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npm run build 2>&1 | tail -30",
  "description": "Build Astro project",
  "timeout": 180000
}
The build succeeded. Now let me run the Playwright tests:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npx playwright test tests/faq-schema-verification.spec.ts --reporter=line 2>&1",
  "description": "Run FAQ schema verification tests",
  "timeout": 180000
}
The FAQ section is visible with 10 items, but the schema isn't being found. This could be because the build output needs to be refreshed. Let me check the built HTML to see if the schema is present:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && grep -o 'FAQPage' dist/index.html | head -5",
  "description": "Check if FAQPage schema exists in built HTML"
}
The schema is in the built output. Let me check the full content:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && grep -o '\"@type\":\"FAQPage\"' dist/index.html",
  "description": "Check FAQPage schema format"
}
The schema is in the HTML. The issue might be with how the test locates the scripts. Let me verify the actual script tag format:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && grep -o '<script type=\"application/ld+json\">[^<]*FAQPage[^<]*</script>' dist/index.html | head -1 | cut -c1-200",
  "description": "Check FAQPage script tag format"
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && cat dist/index.html | grep -B1 -A1 FAQPage | head -20",
  "description": "Check FAQPage context in HTML"
}
The FAQPage schema is definitely in the HTML and looks correct. The issue with the test might be the way it's iterating through the scripts. Let me update the test to be more robust:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\faq-schema-verification.spec.ts",
  "content": "/**\n * Temporary verification test for FAQPage schema markup feature\n * This test verifies that the FAQPage structured data is correctly\n * added to pages that use the FAQAccordion component.\n *\n * DELETE THIS FILE after successful verification.\n */\n\nimport { test, expect } from '@playwright/test';\n\ntest.describe('FAQPage Schema Markup', () => {\n  test('homepage contains valid FAQPage schema', async ({ page }) => {\n    await page.goto('/');\n\n    // Wait for page to fully load\n    await page.waitForLoadState('domcontentloaded');\n\n    // Get all JSON-LD scripts and find FAQPage schema\n    const faqSchemaContent = await page.evaluate(() => {\n      const scripts = document.querySelectorAll('script[type=\"application/ld+json\"]');\n      for (const script of scripts) {\n        const content = script.textContent;\n        if (content && content.includes('\"@type\":\"FAQPage\"')) {\n          try {\n            return JSON.parse(content);\n          } catch (e) {\n            console.error('Failed to parse JSON-LD:', e);\n            return null;\n          }\n        }\n      }\n      return null;\n    });\n\n    // Verify FAQPage schema exists\n    expect(faqSchemaContent).not.toBeNull();\n    expect(faqSchemaContent['@context']).toBe('https://schema.org');\n    expect(faqSchemaContent['@type']).toBe('FAQPage');\n\n    // Verify mainEntity array exists and has items\n    expect(faqSchemaContent.mainEntity).toBeDefined();\n    expect(Array.isArray(faqSchemaContent.mainEntity)).toBe(true);\n    expect(faqSchemaContent.mainEntity.length).toBeGreaterThan(0);\n\n    // Verify first FAQ item has correct structure\n    const firstItem = faqSchemaContent.mainEntity[0];\n    expect(firstItem['@type']).toBe('Question');\n    expect(firstItem.name).toBeDefined();\n    expect(typeof firstItem.name).toBe('string');\n    expect(firstItem.name.length).toBeGreaterThan(0);\n\n    // Verify acceptedAnswer structure\n    expect(firstItem.acceptedAnswer).toBeDefined();\n    expect(firstItem.acceptedAnswer['@type']).toBe('Answer');\n    expect(firstItem.acceptedAnswer.text).toBeDefined();\n    expect(typeof firstItem.acceptedAnswer.text).toBe('string');\n    expect(firstItem.acceptedAnswer.text.length).toBeGreaterThan(0);\n\n    console.log(`✅ FAQPage schema found with ${faqSchemaContent.mainEntity.length} questions`);\n    console.log(`First question: \"${firstItem.name.substring(0, 50)}...\"`);\n  });\n\n  test('FAQ accordion section is visible on homepage', async ({ page }) => {\n    await page.goto('/');\n\n    // Verify the FAQ section exists\n    const faqSection = page.locator('#faq');\n    await expect(faqSection).toBeVisible();\n\n    // Verify FAQ heading is present\n    const faqHeading = page.locator('#faq-heading');\n    await expect(faqHeading).toBeVisible();\n    await expect(faqHeading).toContainText('Frequently Asked Questions');\n\n    // Verify FAQ items exist\n    const faqItems = page.locator('.faq-item');\n    const count = await faqItems.count();\n    expect(count).toBeGreaterThan(0);\n\n    console.log(`✅ FAQ section found with ${count} accordion items`);\n  });\n\n  test('financing page contains valid FAQPage schema', async ({ page }) => {\n    await page.goto('/financing');\n\n    // Wait for page to fully load\n    await page.waitForLoadState('domcontentloaded');\n\n    // Get all JSON-LD scripts and find FAQPage schema\n    const faqSchemaContent = await page.evaluate(() => {\n      const scripts = document.querySelectorAll('script[type=\"application/ld+json\"]');\n      for (const script of scripts) {\n        const content = script.textContent;\n        if (content && content.includes('\"@type\":\"FAQPage\"')) {\n          try {\n            return JSON.parse(content);\n          } catch (e) {\n            console.error('Failed to parse JSON-LD:', e);\n            return null;\n          }\n        }\n      }\n      return null;\n    });\n\n    // Verify FAQPage schema exists\n    expect(faqSchemaContent).not.toBeNull();\n    expect(faqSchemaContent['@context']).toBe('https://schema.org');\n    expect(faqSchemaContent['@type']).toBe('FAQPage');\n\n    // Verify mainEntity array exists and has items\n    expect(faqSchemaContent.mainEntity).toBeDefined();\n    expect(Array.isArray(faqSchemaContent.mainEntity)).toBe(true);\n    expect(faqSchemaContent.mainEntity.length).toBeGreaterThan(0);\n\n    console.log(`✅ FAQPage schema found on financing page with ${faqSchemaContent.mainEntity.length} questions`);\n  });\n\n  test('FAQPage schema follows Google guidelines', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('domcontentloaded');\n\n    // Get the FAQPage schema\n    const faqSchemaContent = await page.evaluate(() => {\n      const scripts = document.querySelectorAll('script[type=\"application/ld+json\"]');\n      for (const script of scripts) {\n        const content = script.textContent;\n        if (content && content.includes('\"@type\":\"FAQPage\"')) {\n          try {\n            return JSON.parse(content);\n          } catch (e) {\n            return null;\n          }\n        }\n      }\n      return null;\n    });\n\n    expect(faqSchemaContent).not.toBeNull();\n\n    // Validate all questions follow Google's requirements\n    for (const item of faqSchemaContent.mainEntity) {\n      // Must have @type: Question\n      expect(item['@type']).toBe('Question');\n\n      // Must have name (the question text)\n      expect(item.name).toBeDefined();\n      expect(item.name.length).toBeGreaterThan(0);\n\n      // Must have acceptedAnswer\n      expect(item.acceptedAnswer).toBeDefined();\n\n      // acceptedAnswer must be type Answer\n      expect(item.acceptedAnswer['@type']).toBe('Answer');\n\n      // acceptedAnswer must have text\n      expect(item.acceptedAnswer.text).toBeDefined();\n      expect(item.acceptedAnswer.text.length).toBeGreaterThan(0);\n    }\n\n    console.log(`✅ All ${faqSchemaContent.mainEntity.length} FAQ items follow Google structured data guidelines`);\n  });\n});\n"
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npx playwright test tests/faq-schema-verification.spec.ts --reporter=line 2>&1",
  "description": "Run FAQ schema verification tests",
  "timeout": 180000
}
This is strange - the schema is definitely present in the HTML. The issue must be with the preview server reusing cached content. Let me restart the preview server and rerun the build:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npm run build 2>&1 | tail -15",
  "description": "Rebuild Astro project",
  "timeout": 180000
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npx playwright test tests/faq-schema-verification.spec.ts --reporter=line --retries=0 2>&1",
  "description": "Run tests with fresh server",
  "timeout": 180000
}
Let me check if there's a server already running and start it manually:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npm run preview &\nsleep 5\ncurl -s http://localhost:4321 | grep -o '\"@type\":\"FAQPage\"' | head -1",
  "description": "Start preview server and check schema",
  "timeout": 60000
}

🔧 Tool: Bash
Input: {
  "command": "curl -s http://localhost:4321 | grep -o '\"@type\":\"FAQPage\"' | head -1",
  "description": "Check schema on running server"
}
Good, the server is running and the schema is present. Now let me run the tests:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npx playwright test tests/faq-schema-verification.spec.ts --reporter=line 2>&1",
  "description": "Run Playwright tests",
  "timeout": 120000
}
All 4 tests passed! The FAQPage schema markup is working correctly. Now let me clean up the test file as instructed:

🔧 Tool: Bash
Input: {
  "command": "rm /c/Users/James/Repos/service-business/tests/faq-schema-verification.spec.ts",
  "description": "Remove temporary test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Add FAQPageSchema type to SEO types",
      "status": "completed",
      "activeForm": "Adding FAQPageSchema type to SEO types"
    },
    {
      "content": "Add FAQPage JSON-LD schema markup to FAQAccordion component",
      "status": "completed",
      "activeForm": "Adding FAQPage schema markup to FAQAccordion"
    },
    {
      "content": "Verify FAQPage schema with Playwright test",
      "status": "completed",
      "activeForm": "Verifying FAQPage schema with Playwright"
    }
  ]
}
Let me also kill the background server:

🔧 Tool: KillShell
Input: {
  "shell_id": "b131aa5"
}
<summary>
## Summary: Add FAQPage Schema Markup to FAQ Accordion

### Changes Implemented
- Added `FAQPageSchema` and `FAQQuestionSchema` types to the SEO type definitions for proper TypeScript support
- Updated `JsonLdSchema` union type to include `FAQPageSchema`
- Enhanced the `FAQAccordion` component with automatic FAQPage schema markup generation
- Added `includeSchema` prop (default: `true`) to control schema output on a per-instance basis
- The schema follows Google's structured data guidelines for FAQPage rich results
- Updated `FAQAccordionProps` interface to document the new `includeSchema` property

### Files Modified
- `src/types/seo.ts` - Added FAQPageSchema and FAQQuestionSchema types
- `src/types/faq.ts` - Added includeSchema prop to FAQAccordionProps
- `src/components/FAQAccordion.astro` - Added FAQPage JSON-LD schema generation and output

### Notes for Developer
- The FAQPage schema is automatically generated for all FAQ accordions by default
- To disable schema markup (e.g., when multiple FAQ sections exist on a page to avoid duplicate schemas), use: `<FAQAccordion items={items} includeSchema={false} />`
- The schema includes all required fields per Google's guidelines: `@context`, `@type: FAQPage`, `mainEntity` array with `Question` and `Answer` types
- HTML in answer text is preserved in the schema (Google accepts HTML in answer text)
- The homepage FAQ section now generates a schema with 10 questions, and the financing page with 6 questions

### Verification Status
- Verified with Playwright tests that:
  - ✅ Homepage contains valid FAQPage schema with 10 questions
  - ✅ Financing page contains valid FAQPage schema with 6 questions
  - ✅ FAQ accordion section is visible with 10 items on homepage
  - ✅ All FAQ items follow Google's structured data guidelines (correct @type, name, acceptedAnswer structure)
- Temporary test file was deleted after successful verification
</summary>