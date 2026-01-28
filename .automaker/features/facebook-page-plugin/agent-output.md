Let me first verify the current state of the implementation by checking if the files exist and are complete.

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*facebook*"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*Facebook*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\.env.example"
}
All the files exist. Let me read the implementation files to verify they are complete:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FacebookPage.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\facebook-page.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\facebook-page.config.ts"
}
All the implementation files exist and are complete. The implementation includes:

1. **Type definitions** (`src/types/facebook-page.ts`) - Complete with all interfaces and types
2. **Configuration** (`src/config/facebook-page.config.ts`) - Complete with environment variables and helper functions
3. **Component** (`src/components/FacebookPage.astro`) - Complete with full functionality, styling, and JavaScript
4. **Environment variables** (`.env.example`) - Updated with Facebook Page configuration

Now I need to verify the feature works correctly using Playwright. Let me first check the existing test setup and then create a verification test:

🔧 Tool: Glob
Input: {
  "pattern": "playwright.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/tests/**/*.spec.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\playwright.config.ts"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && ls -la package.json",
  "description": "Check package.json exists"
}
I see the Playwright tests use a preview server. First, let me check if there's a demo page that uses the FacebookPage component or if I need to create one for testing:

🔧 Tool: Grep
Input: {
  "pattern": "FacebookPage",
  "glob": "**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/**/*.astro"
}
The component is not yet used in any page. To verify it with Playwright, I need to:
1. Create a temporary test page that includes the FacebookPage component
2. Build the project
3. Run Playwright tests
4. Clean up

Let me first look at how other test pages or the existing test file is structured:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\formspree-integration.spec.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\contact.astro",
  "limit": 50
}
Now I understand the test structure. Let me create a temporary test page for the Facebook component and a Playwright test to verify it works. First, let me create the demo page:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro",
  "limit": 50
}
Now let me create a temporary test page for the Facebook Page component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\facebook-demo.astro",
  "content": "---\n/**\n * Facebook Page Plugin Demo Page (TEMPORARY - FOR TESTING ONLY)\n * This page is used to verify the Facebook Page Plugin component works correctly.\n * Delete this file after testing.\n */\n\nimport Layout from '../layouts/Layout.astro';\nimport FacebookPage from '../components/FacebookPage.astro';\n---\n\n<Layout\n  title=\"Facebook Page Plugin Demo\"\n  description=\"Demo page for testing the Facebook Page Plugin component.\"\n>\n  <main>\n    <!-- Demo Header -->\n    <section class=\"demo-header\">\n      <div class=\"demo-header__container\">\n        <h1 class=\"demo-header__title\">Facebook Page Plugin Demo</h1>\n        <p class=\"demo-header__subtitle\">Testing the Facebook Page Plugin component</p>\n      </div>\n    </section>\n\n    <!-- Facebook Page Component - Default (Unconfigured) -->\n    <section id=\"facebook-section\" class=\"demo-section\">\n      <FacebookPage\n        title=\"Connect With Us on Facebook\"\n        subtitle=\"Join our community for updates and tips\"\n      />\n    </section>\n\n    <!-- Test with custom props -->\n    <section id=\"facebook-section-custom\" class=\"demo-section\">\n      <FacebookPage\n        title=\"Custom Title\"\n        subtitle=\"Custom subtitle for testing\"\n        ctaText=\"Visit Our Page\"\n        className=\"custom-facebook-section\"\n      />\n    </section>\n  </main>\n</Layout>\n\n<style>\n  .demo-header {\n    padding: 3rem 1rem;\n    background-color: var(--color-background-subtle, #f9fafb);\n    text-align: center;\n  }\n\n  .demo-header__container {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n\n  .demo-header__title {\n    font-size: 2rem;\n    font-weight: bold;\n    color: var(--color-text-primary, #1f2937);\n    margin: 0 0 0.5rem;\n  }\n\n  .demo-header__subtitle {\n    font-size: 1.125rem;\n    color: var(--color-text-secondary, #6b7280);\n    margin: 0;\n  }\n\n  .demo-section {\n    margin: 2rem 0;\n  }\n</style>\n"
}
Now let me create the Playwright test:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\facebook-page-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Facebook Page Plugin Verification Test\n *\n * This test verifies that the Facebook Page Plugin component renders correctly,\n * including:\n * - Component structure and accessibility\n * - Loading states\n * - Fallback state (when not configured)\n * - CTA button functionality\n * - Styling and responsive design\n *\n * NOTE: This is a temporary verification test. Delete after verification.\n */\n\ntest.describe('Facebook Page Plugin Component', () => {\n  test.beforeEach(async ({ page }) => {\n    // Navigate to the demo page\n    await page.goto('/facebook-demo');\n    // Wait for the section to be visible\n    await expect(page.locator('#facebook-section')).toBeVisible();\n  });\n\n  test('component renders with correct structure', async ({ page }) => {\n    // Check the main section exists\n    const facebookSection = page.locator('#facebook-section .facebook-page');\n    await expect(facebookSection).toBeVisible();\n\n    // Check the header elements\n    await expect(page.locator('#facebook-section .facebook-page__header')).toBeVisible();\n    await expect(page.locator('#facebook-section .facebook-page__title')).toHaveText('Connect With Us on Facebook');\n    await expect(page.locator('#facebook-section .facebook-page__subtitle')).toHaveText('Join our community for updates and tips');\n\n    // Check the container exists\n    await expect(page.locator('#facebook-section .facebook-page__container')).toBeVisible();\n  });\n\n  test('component has proper heading accessibility', async ({ page }) => {\n    // The title should have an id for aria-labelledby\n    const title = page.locator('#facebook-section #facebook-page-heading');\n    await expect(title).toBeVisible();\n    await expect(title).toHaveAttribute('id', 'facebook-page-heading');\n\n    // The section should reference the heading\n    const section = page.locator('#facebook-section .facebook-page');\n    await expect(section).toHaveAttribute('aria-labelledby', 'facebook-page-heading');\n  });\n\n  test('shows fallback state when not configured', async ({ page }) => {\n    // Without PUBLIC_FACEBOOK_PAGE_URL set, it should show the fallback\n    const fallback = page.locator('#facebook-section .facebook-page__fallback');\n    await expect(fallback).toBeVisible();\n\n    // Fallback should have Facebook icon\n    await expect(page.locator('#facebook-section .facebook-page__fallback-icon')).toBeVisible();\n\n    // Fallback should show title and message\n    await expect(page.locator('#facebook-section .facebook-page__fallback-title')).toHaveText('Follow Us on Facebook');\n    await expect(page.locator('#facebook-section .facebook-page__fallback-text')).toContainText('Connect with us on Facebook');\n\n    // Fallback should show configuration hint\n    await expect(page.locator('#facebook-section .facebook-page__fallback-hint')).toContainText('PUBLIC_FACEBOOK_PAGE_URL');\n    await expect(page.locator('#facebook-section .facebook-page__fallback-hint code')).toBeVisible();\n  });\n\n  test('custom props are applied correctly', async ({ page }) => {\n    // Check the custom section\n    const customSection = page.locator('#facebook-section-custom .facebook-page');\n    await expect(customSection).toBeVisible();\n\n    // Check custom title and subtitle\n    await expect(page.locator('#facebook-section-custom .facebook-page__title')).toHaveText('Custom Title');\n    await expect(page.locator('#facebook-section-custom .facebook-page__subtitle')).toHaveText('Custom subtitle for testing');\n\n    // Check custom class is applied\n    await expect(customSection).toHaveClass(/custom-facebook-section/);\n  });\n\n  test('component has correct visual styling', async ({ page }) => {\n    // Check the container has expected styling\n    const container = page.locator('#facebook-section .facebook-page__container');\n    await expect(container).toBeVisible();\n\n    // Check that the container has background color applied\n    const containerStyle = await container.evaluate((el) => {\n      const styles = window.getComputedStyle(el);\n      return {\n        borderRadius: styles.borderRadius,\n        boxShadow: styles.boxShadow,\n        backgroundColor: styles.backgroundColor,\n      };\n    });\n\n    // Container should have border-radius applied\n    expect(containerStyle.borderRadius).not.toBe('0px');\n    // Container should have box-shadow applied\n    expect(containerStyle.boxShadow).not.toBe('none');\n    // Container should have background color\n    expect(containerStyle.backgroundColor).not.toBe('transparent');\n  });\n\n  test('fallback icon uses Facebook brand color', async ({ page }) => {\n    const icon = page.locator('#facebook-section .facebook-page__fallback-icon');\n    await expect(icon).toBeVisible();\n\n    // Check that the icon has the Facebook blue color\n    const iconColor = await icon.evaluate((el) => {\n      return window.getComputedStyle(el).color;\n    });\n\n    // Facebook blue is rgb(24, 119, 242) or #1877f2\n    expect(iconColor).toMatch(/rgb\\(24,\\s*119,\\s*242\\)/);\n  });\n\n  test('component is responsive', async ({ page }) => {\n    // Test at mobile viewport\n    await page.setViewportSize({ width: 375, height: 667 });\n\n    // Component should still be visible\n    await expect(page.locator('#facebook-section .facebook-page')).toBeVisible();\n    await expect(page.locator('#facebook-section .facebook-page__container')).toBeVisible();\n\n    // Reset to desktop\n    await page.setViewportSize({ width: 1280, height: 720 });\n    await expect(page.locator('#facebook-section .facebook-page')).toBeVisible();\n  });\n\n  test('page title and meta are set correctly', async ({ page }) => {\n    // Check page title\n    await expect(page).toHaveTitle(/Facebook Page Plugin Demo/);\n  });\n});\n"
}
Now let me build the project and run the Playwright tests:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && npm run build 2>&1",
  "description": "Build the Astro project",
  "timeout": 180000
}
The build succeeded. I can see the facebook-demo page was built. Now let's run the Playwright tests:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && npx playwright test tests/facebook-page-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright tests for Facebook Page",
  "timeout": 180000
}
All 8 tests passed. Now let me clean up the temporary test files:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && rm -f tests/facebook-page-verification.spec.ts src/pages/facebook-demo.astro && echo \"Temporary test files cleaned up\"",
  "description": "Remove temporary test files"
}
Let me verify the files were deleted:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && ls -la tests/facebook-page-verification.spec.ts src/pages/facebook-demo.astro 2>&1 || echo \"Files successfully deleted\"",
  "description": "Verify files were deleted"
}
The temporary test files have been cleaned up. The implementation is complete and verified.

<summary>
## Summary: Embed Facebook Page Plugin

### Changes Implemented
- Created a complete Facebook Page Plugin feature for embedding Facebook Page content showing recent posts, page likes, and social proof
- Type definitions with full TypeScript support for all configuration options
- Configuration file with environment variable support for easy setup
- Reusable Astro component with loading states, error handling, and fallback UI
- Facebook SDK lazy-loading with retry mechanism
- Analytics tracking integration with Google Analytics 4
- Astro View Transitions support for SPA-like navigation
- Responsive design with mobile-first approach
- Accessibility features (ARIA labels, reduced motion support, high contrast mode)
- Dark mode support

### Files Modified
- `src/types/facebook-page.ts` - Type definitions for Facebook Page Plugin
- `src/config/facebook-page.config.ts` - Configuration with environment variables
- `src/components/FacebookPage.astro` - Main component with full functionality
- `.env.example` - Added Facebook Page environment variables documentation

### Component Features
- **Timeline Posts**: Displays recent posts from your Facebook Page
- **Social Proof**: Shows page likes and friends who liked the page (facepile)
- **Configurable Tabs**: Support for timeline, events, and messages tabs
- **Responsive Width**: Adapts to container width automatically
- **Loading State**: Animated spinner while SDK loads
- **Error State**: Graceful fallback with direct link to Facebook Page
- **Fallback State**: Helpful message when not configured
- **CTA Button**: Prominent "Follow Us on Facebook" button

### Usage Example
```astro
---
import FacebookPage from '../components/FacebookPage.astro';
---
<FacebookPage
  title="Connect With Us on Facebook"
  subtitle="Join our community for updates and tips"
/>
```

### Environment Variables
```bash
PUBLIC_FACEBOOK_PAGE_URL=https://www.facebook.com/YourPageName
PUBLIC_FACEBOOK_APP_ID=your_app_id  # Optional
PUBLIC_FACEBOOK_PAGE_ENABLED=true   # Optional
```

### Verification Status
- Created temporary Playwright test with 8 test cases covering:
  - Component structure and rendering
  - Accessibility (ARIA labels, heading references)
  - Fallback state display when not configured
  - Custom props application
  - Visual styling verification
  - Facebook brand color usage
  - Responsive design at mobile and desktop viewports
  - Page title and meta tags
- All 8 tests passed successfully in 4.7 seconds on Chromium
- Temporary test file (`tests/facebook-page-verification.spec.ts`) and demo page (`src/pages/facebook-demo.astro`) were removed after verification

### Notes for Developer
- The component requires `PUBLIC_FACEBOOK_PAGE_URL` environment variable to be set for the widget to display
- Without configuration, a helpful fallback message is shown with setup instructions
- The Facebook App ID is optional but enables enhanced analytics features
- The SDK loads lazily to minimize impact on page performance
- The component follows existing codebase patterns (similar to GoogleReviewsSection and BookingCalendar)
- To use the component, import it into any page and add `<FacebookPage />` with optional props for customization
</summary>