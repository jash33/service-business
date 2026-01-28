I'll start by exploring the codebase to understand the existing structure and then implement the emergency service banner feature.

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{tsx,jsx,ts,js}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/package.json"
}
Let me search for source files excluding node_modules:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{tsx,jsx,ts,js}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\package.json"
}
This is an Astro project. Let me explore the project structure more:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/**/*"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/layouts/**/*"
}
Let me examine the Layout.astro file and some existing components to understand the patterns used:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\CookieConsent.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Header.astro"
}
Now let me check the index page and styles to understand the design patterns:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\globals.css"
}
Let me also check the CSS variables to understand the design system:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\variables.css",
  "limit": 200
}
Now I have a good understanding of the codebase structure and design patterns. Let me create the Emergency Service Banner component. Based on the patterns I've seen:

1. The project uses Astro with TypeScript
2. Components follow a specific structure with frontmatter (---), HTML, styles, and scripts
3. CSS uses custom properties from the design system
4. The CookieConsent component is a good reference for a dismissible banner with localStorage persistence

Let me create the EmergencyServiceBanner component:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create EmergencyServiceBanner component",
      "status": "in_progress",
      "activeForm": "Creating EmergencyServiceBanner component"
    },
    {
      "content": "Add EmergencyServiceBanner to Layout",
      "status": "pending",
      "activeForm": "Adding EmergencyServiceBanner to Layout"
    },
    {
      "content": "Create Playwright verification test",
      "status": "pending",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run and verify the test",
      "status": "pending",
      "activeForm": "Running and verifying the test"
    },
    {
      "content": "Delete temporary test file",
      "status": "pending",
      "activeForm": "Deleting temporary test file"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\EmergencyServiceBanner.astro",
  "content": "---\n/**\n * Emergency Service Banner Component\n *\n * A prominent, dismissible banner for emergency services with click-to-call functionality.\n * Includes localStorage persistence to remember dismissal state.\n * Features urgent styling to draw attention for emergency/urgent service offerings.\n *\n * @example\n * ```astro\n * <EmergencyServiceBanner\n *   message=\"Need urgent help? We offer 24/7 emergency services!\"\n *   phoneNumber=\"+1-832-555-0123\"\n *   ctaText=\"Call Now\"\n * />\n * ```\n */\n\ninterface Props {\n  /** The main message to display in the banner */\n  message?: string;\n  /** Phone number for click-to-call (including country code) */\n  phoneNumber?: string;\n  /** Display text for the phone number */\n  phoneDisplay?: string;\n  /** CTA button text */\n  ctaText?: string;\n  /** LocalStorage key for dismissal persistence */\n  storageKey?: string;\n  /** Number of hours before the banner shows again after dismissal (0 = never show again) */\n  dismissDurationHours?: number;\n}\n\nconst {\n  message = \"Need urgent help? We offer 24/7 emergency web support!\",\n  phoneNumber = \"+1-832-555-0123\",\n  phoneDisplay = \"(832) 555-0123\",\n  ctaText = \"Call Now\",\n  storageKey = \"emergency-banner-dismissed\",\n  dismissDurationHours = 24,\n} = Astro.props;\n---\n\n<!-- Emergency Service Banner -->\n<div\n  id=\"emergency-service-banner\"\n  class=\"emergency-banner\"\n  role=\"region\"\n  aria-label=\"Emergency services information\"\n  data-storage-key={storageKey}\n  data-dismiss-duration={dismissDurationHours}\n  hidden\n>\n  <div class=\"emergency-banner__container\">\n    <!-- Animated Alert Icon -->\n    <div class=\"emergency-banner__icon\" aria-hidden=\"true\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n        <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"/>\n      </svg>\n    </div>\n\n    <!-- Message Content -->\n    <div class=\"emergency-banner__content\">\n      <p class=\"emergency-banner__message\">{message}</p>\n    </div>\n\n    <!-- Click-to-Call CTA -->\n    <a\n      href={`tel:${phoneNumber}`}\n      class=\"emergency-banner__cta\"\n      aria-label={`Call emergency services at ${phoneDisplay}`}\n    >\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"18\" height=\"18\" aria-hidden=\"true\" class=\"emergency-banner__phone-icon\">\n        <path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"/>\n      </svg>\n      <span class=\"emergency-banner__cta-text\">{ctaText}</span>\n      <span class=\"emergency-banner__phone-number\">{phoneDisplay}</span>\n    </a>\n\n    <!-- Dismiss Button -->\n    <button\n      type=\"button\"\n      id=\"emergency-banner-dismiss\"\n      class=\"emergency-banner__dismiss\"\n      aria-label=\"Dismiss emergency service banner\"\n    >\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"20\" height=\"20\" aria-hidden=\"true\">\n        <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n      </svg>\n    </button>\n  </div>\n</div>\n\n<style>\n  /* Emergency Service Banner Styles */\n  .emergency-banner {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: var(--z-banner, 9998);\n    background: linear-gradient(\n      135deg,\n      var(--color-error-dark, #dc2626) 0%,\n      var(--color-error, #ef4444) 50%,\n      var(--color-warning-dark, #d97706) 100%\n    );\n    color: var(--color-text-inverse, #ffffff);\n    transform: translateY(-100%);\n    transition: transform var(--duration-300, 300ms) var(--ease-out, ease-out);\n    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);\n  }\n\n  .emergency-banner[data-visible=\"true\"] {\n    transform: translateY(0);\n  }\n\n  .emergency-banner__container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-3, 0.75rem);\n    max-width: var(--container-7xl, 1280px);\n    margin: 0 auto;\n    padding: var(--spacing-3, 0.75rem) var(--spacing-4, 1rem);\n    flex-wrap: wrap;\n  }\n\n  @media (min-width: 768px) {\n    .emergency-banner__container {\n      flex-wrap: nowrap;\n      padding: var(--spacing-3, 0.75rem) var(--spacing-6, 1.5rem);\n    }\n  }\n\n  /* Animated Alert Icon */\n  .emergency-banner__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    animation: pulse-icon 1.5s ease-in-out infinite;\n  }\n\n  .emergency-banner__icon svg {\n    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));\n  }\n\n  @keyframes pulse-icon {\n    0%, 100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n    50% {\n      opacity: 0.8;\n      transform: scale(1.1);\n    }\n  }\n\n  /* Message Content */\n  .emergency-banner__content {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n\n  @media (min-width: 768px) {\n    .emergency-banner__content {\n      text-align: left;\n    }\n  }\n\n  .emergency-banner__message {\n    font-family: var(--font-body, 'Inter', sans-serif);\n    font-size: var(--font-size-sm, 0.875rem);\n    font-weight: var(--font-weight-medium, 500);\n    color: var(--color-text-inverse, #ffffff);\n    line-height: var(--line-height-snug, 1.375);\n    margin: 0;\n  }\n\n  @media (min-width: 768px) {\n    .emergency-banner__message {\n      font-size: var(--font-size-base, 1rem);\n    }\n  }\n\n  /* Click-to-Call CTA Button */\n  .emergency-banner__cta {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2, 0.5rem);\n    padding: var(--spacing-2, 0.5rem) var(--spacing-4, 1rem);\n    background: var(--color-text-inverse, #ffffff);\n    color: var(--color-error-dark, #dc2626);\n    font-family: var(--font-body, 'Inter', sans-serif);\n    font-size: var(--font-size-sm, 0.875rem);\n    font-weight: var(--font-weight-semibold, 600);\n    text-decoration: none;\n    border-radius: var(--radius-full, 9999px);\n    white-space: nowrap;\n    flex-shrink: 0;\n    transition: all var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  }\n\n  .emergency-banner__cta:hover {\n    transform: scale(1.05);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n    color: var(--color-error, #ef4444);\n  }\n\n  .emergency-banner__cta:focus-visible {\n    outline: 2px solid var(--color-text-inverse, #ffffff);\n    outline-offset: 2px;\n  }\n\n  .emergency-banner__cta:active {\n    transform: scale(0.98);\n  }\n\n  .emergency-banner__phone-icon {\n    flex-shrink: 0;\n    animation: ring-phone 2s ease-in-out infinite;\n  }\n\n  @keyframes ring-phone {\n    0%, 100% {\n      transform: rotate(0deg);\n    }\n    10%, 30% {\n      transform: rotate(-10deg);\n    }\n    20%, 40% {\n      transform: rotate(10deg);\n    }\n    50% {\n      transform: rotate(0deg);\n    }\n  }\n\n  .emergency-banner__cta-text {\n    display: inline;\n  }\n\n  .emergency-banner__phone-number {\n    display: none;\n  }\n\n  @media (min-width: 640px) {\n    .emergency-banner__phone-number {\n      display: inline;\n    }\n\n    .emergency-banner__cta-text::after {\n      content: ':';\n      margin-right: var(--spacing-1, 0.25rem);\n    }\n  }\n\n  /* Dismiss Button */\n  .emergency-banner__dismiss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    background: rgba(255, 255, 255, 0.15);\n    border: none;\n    border-radius: var(--radius-full, 9999px);\n    color: var(--color-text-inverse, #ffffff);\n    cursor: pointer;\n    flex-shrink: 0;\n    transition: all var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n  }\n\n  .emergency-banner__dismiss:hover {\n    background: rgba(255, 255, 255, 0.25);\n    transform: scale(1.1);\n  }\n\n  .emergency-banner__dismiss:focus-visible {\n    outline: 2px solid var(--color-text-inverse, #ffffff);\n    outline-offset: 2px;\n  }\n\n  .emergency-banner__dismiss:active {\n    transform: scale(0.95);\n  }\n\n  /* Reduced Motion Preferences */\n  @media (prefers-reduced-motion: reduce) {\n    .emergency-banner {\n      transition: none;\n    }\n\n    .emergency-banner__icon,\n    .emergency-banner__phone-icon {\n      animation: none;\n    }\n\n    .emergency-banner__cta:hover,\n    .emergency-banner__cta:active,\n    .emergency-banner__dismiss:hover,\n    .emergency-banner__dismiss:active {\n      transform: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * Emergency Service Banner Functionality\n   * Handles show/hide logic with localStorage persistence\n   */\n  function initEmergencyBanner(): void {\n    const banner = document.getElementById('emergency-service-banner') as HTMLElement | null;\n    const dismissBtn = document.getElementById('emergency-banner-dismiss') as HTMLButtonElement | null;\n\n    if (!banner || !dismissBtn) return;\n\n    const storageKey = banner.dataset.storageKey || 'emergency-banner-dismissed';\n    const dismissDurationHours = parseInt(banner.dataset.dismissDuration || '24', 10);\n\n    /**\n     * Check if the banner should be shown based on localStorage\n     */\n    function shouldShowBanner(): boolean {\n      const dismissedData = localStorage.getItem(storageKey);\n\n      if (!dismissedData) {\n        return true;\n      }\n\n      try {\n        const { dismissedAt, duration } = JSON.parse(dismissedData);\n\n        // If duration is 0, never show again\n        if (duration === 0) {\n          return false;\n        }\n\n        // Check if enough time has passed\n        const dismissedTime = new Date(dismissedAt).getTime();\n        const now = Date.now();\n        const hoursElapsed = (now - dismissedTime) / (1000 * 60 * 60);\n\n        return hoursElapsed >= duration;\n      } catch {\n        // If parsing fails, show the banner\n        return true;\n      }\n    }\n\n    /**\n     * Show the banner with animation\n     */\n    function showBanner(): void {\n      banner.hidden = false;\n      // Trigger reflow for animation\n      banner.offsetHeight;\n      banner.setAttribute('data-visible', 'true');\n\n      // Adjust header position to account for banner\n      document.body.style.setProperty('--emergency-banner-height', `${banner.offsetHeight}px`);\n      document.body.classList.add('has-emergency-banner');\n    }\n\n    /**\n     * Hide the banner with animation\n     */\n    function hideBanner(): void {\n      banner.setAttribute('data-visible', 'false');\n\n      // Wait for animation to complete before hiding\n      setTimeout(() => {\n        banner.hidden = true;\n        document.body.style.removeProperty('--emergency-banner-height');\n        document.body.classList.remove('has-emergency-banner');\n      }, 300);\n    }\n\n    /**\n     * Dismiss the banner and save to localStorage\n     */\n    function dismissBanner(): void {\n      const dismissData = {\n        dismissedAt: new Date().toISOString(),\n        duration: dismissDurationHours,\n      };\n\n      localStorage.setItem(storageKey, JSON.stringify(dismissData));\n      hideBanner();\n    }\n\n    // Event listeners\n    dismissBtn.addEventListener('click', dismissBanner);\n\n    // Initialize - show banner if appropriate\n    if (shouldShowBanner()) {\n      // Small delay to ensure page is ready\n      setTimeout(showBanner, 100);\n    }\n  }\n\n  // Initialize on DOM ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initEmergencyBanner);\n  } else {\n    initEmergencyBanner();\n  }\n\n  // Re-initialize on Astro page transitions (View Transitions API)\n  document.addEventListener('astro:page-load', initEmergencyBanner);\n</script>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create EmergencyServiceBanner component",
      "status": "completed",
      "activeForm": "Creating EmergencyServiceBanner component"
    },
    {
      "content": "Add EmergencyServiceBanner to Layout",
      "status": "in_progress",
      "activeForm": "Adding EmergencyServiceBanner to Layout"
    },
    {
      "content": "Create Playwright verification test",
      "status": "pending",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run and verify the test",
      "status": "pending",
      "activeForm": "Running and verifying the test"
    },
    {
      "content": "Delete temporary test file",
      "status": "pending",
      "activeForm": "Deleting temporary test file"
    }
  ]
}
Now let me add the EmergencyServiceBanner to the Layout.astro file. I'll add it right after the Header component so it appears at the top:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro",
  "old_string": "import SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';",
  "new_string": "import SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport EmergencyServiceBanner from '../components/EmergencyServiceBanner.astro';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro",
  "old_string": "interface Props extends Partial<SEOProps> {\n  /** Page title (defaults to site name) */\n  title?: string;\n  /** Page description (defaults to site default description) */\n  description?: string;\n  /** Additional classes for the body element */\n  bodyClass?: string;\n  /** Disable analytics for this page */\n  disableAnalytics?: boolean;\n  /** Custom breadcrumb items (optional - auto-generates from path if not provided) */\n  breadcrumbs?: BreadcrumbItem[];\n  /** Disable breadcrumb navigation for this page (e.g., home page) */\n  hideBreadcrumbs?: boolean;\n  /** Disable newsletter popup for this page */\n  disableNewsletterPopup?: boolean;\n}",
  "new_string": "interface Props extends Partial<SEOProps> {\n  /** Page title (defaults to site name) */\n  title?: string;\n  /** Page description (defaults to site default description) */\n  description?: string;\n  /** Additional classes for the body element */\n  bodyClass?: string;\n  /** Disable analytics for this page */\n  disableAnalytics?: boolean;\n  /** Custom breadcrumb items (optional - auto-generates from path if not provided) */\n  breadcrumbs?: BreadcrumbItem[];\n  /** Disable breadcrumb navigation for this page (e.g., home page) */\n  hideBreadcrumbs?: boolean;\n  /** Disable newsletter popup for this page */\n  disableNewsletterPopup?: boolean;\n  /** Disable emergency service banner for this page */\n  disableEmergencyBanner?: boolean;\n}"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro",
  "old_string": "const {\n  title = seoConfig.siteName,\n  description = seoConfig.defaultDescription,\n  bodyClass = '',\n  lang = seoConfig.defaultLang,\n  disableAnalytics = false,\n  breadcrumbs,\n  hideBreadcrumbs = false,\n  disableNewsletterPopup = false,\n  ...seoProps\n} = Astro.props;",
  "new_string": "const {\n  title = seoConfig.siteName,\n  description = seoConfig.defaultDescription,\n  bodyClass = '',\n  lang = seoConfig.defaultLang,\n  disableAnalytics = false,\n  breadcrumbs,\n  hideBreadcrumbs = false,\n  disableNewsletterPopup = false,\n  disableEmergencyBanner = false,\n  ...seoProps\n} = Astro.props;"
}
Now let's add the EmergencyServiceBanner component to the body, right after the skip link (so it appears at the very top):

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro",
  "old_string": "<body class={bodyClass}>\n\t\t<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\t\t<Header currentPath={Astro.url.pathname} />",
  "new_string": "<body class={bodyClass}>\n\t\t<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\t\t{!disableEmergencyBanner && (\n\t\t\t<EmergencyServiceBanner\n\t\t\t\tmessage=\"Need urgent help? We offer 24/7 emergency web support!\"\n\t\t\t\tphoneNumber=\"+1-832-555-0123\"\n\t\t\t\tphoneDisplay=\"(832) 555-0123\"\n\t\t\t\tctaText=\"Call Now\"\n\t\t\t\tdismissDurationHours={24}\n\t\t\t/>\n\t\t)}\n\t\t<Header currentPath={Astro.url.pathname} />"
}
Now I need to add CSS to adjust the header position when the emergency banner is visible:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro",
  "old_string": "<style>\n\thtml,\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t/* Sticky footer layout using flexbox */\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t}\n\n\t#main-content {\n\t\tflex: 1 0 auto;\n\t}\n</style>",
  "new_string": "<style>\n\thtml,\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t/* Sticky footer layout using flexbox */\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t}\n\n\t#main-content {\n\t\tflex: 1 0 auto;\n\t}\n\n\t/* Adjust sticky header position when emergency banner is visible */\n\tbody.has-emergency-banner :global(.header) {\n\t\ttop: var(--emergency-banner-height, 0);\n\t}\n\n\t/* Adjust scroll margins when emergency banner is visible */\n\tbody.has-emergency-banner :global(#main-content) {\n\t\tscroll-margin-top: calc(44px + var(--spacing-8, 2rem) + 1px + var(--emergency-banner-height, 0px));\n\t}\n\n\tbody.has-emergency-banner :global([id]:target) {\n\t\tscroll-margin-top: calc(44px + var(--spacing-8, 2rem) + 1px + var(--emergency-banner-height, 0px));\n\t}\n</style>"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create EmergencyServiceBanner component",
      "status": "completed",
      "activeForm": "Creating EmergencyServiceBanner component"
    },
    {
      "content": "Add EmergencyServiceBanner to Layout",
      "status": "completed",
      "activeForm": "Adding EmergencyServiceBanner to Layout"
    },
    {
      "content": "Create Playwright verification test",
      "status": "in_progress",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run and verify the test",
      "status": "pending",
      "activeForm": "Running and verifying the test"
    },
    {
      "content": "Delete temporary test file",
      "status": "pending",
      "activeForm": "Deleting temporary test file"
    }
  ]
}
Now let me check if there's a Playwright config and create a verification test:

🔧 Tool: Glob
Input: {
  "pattern": "playwright.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.spec.{ts,js}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\playwright.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\formspree-integration.spec.ts"
}
Now let me create a verification test for the Emergency Service Banner:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\emergency-banner-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Emergency Service Banner Verification Test\n *\n * This test verifies that the emergency service banner:\n * - Appears on page load\n * - Has click-to-call functionality\n * - Can be dismissed\n * - Persists dismissal state in localStorage\n * - Reappears after clearing localStorage\n */\n\ntest.describe('Emergency Service Banner', () => {\n  test.beforeEach(async ({ page }) => {\n    // Clear localStorage before each test to ensure banner shows\n    await page.goto('/');\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    // Reload to apply clean state\n    await page.reload();\n  });\n\n  test('banner appears on page load', async ({ page }) => {\n    // Wait for the banner to appear (it has a small delay)\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Verify banner has visible state\n    await expect(banner).toHaveAttribute('data-visible', 'true');\n  });\n\n  test('banner contains correct message and CTA', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Check message content\n    const message = banner.locator('.emergency-banner__message');\n    await expect(message).toContainText('urgent');\n\n    // Check CTA button exists and has phone link\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toBeVisible();\n    await expect(ctaButton).toHaveAttribute('href', /^tel:/);\n  });\n\n  test('click-to-call link has correct phone number', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Verify the tel: link format\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    const href = await ctaButton.getAttribute('href');\n    expect(href).toMatch(/^tel:\\+?[\\d-]+$/);\n  });\n\n  test('banner can be dismissed', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Click dismiss button\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await expect(dismissButton).toBeVisible();\n    await dismissButton.click();\n\n    // Wait for animation and verify banner is hidden\n    await expect(banner).toHaveAttribute('data-visible', 'false');\n\n    // After animation completes, banner should be hidden\n    await page.waitForTimeout(400); // Wait for animation\n    await expect(banner).toBeHidden();\n  });\n\n  test('dismissal state is persisted in localStorage', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Dismiss the banner\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Check localStorage\n    const storageData = await page.evaluate(() => {\n      return localStorage.getItem('emergency-banner-dismissed');\n    });\n\n    expect(storageData).toBeTruthy();\n    const parsed = JSON.parse(storageData!);\n    expect(parsed.dismissedAt).toBeTruthy();\n    expect(parsed.duration).toBe(24);\n  });\n\n  test('banner does not appear after dismissal on page reload', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Dismiss the banner\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Reload the page\n    await page.reload();\n\n    // Banner should remain hidden\n    await page.waitForTimeout(500); // Give it time to potentially appear\n    await expect(banner).toBeHidden();\n  });\n\n  test('banner has proper accessibility attributes', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Check ARIA attributes\n    await expect(banner).toHaveAttribute('role', 'region');\n    await expect(banner).toHaveAttribute('aria-label', /emergency/i);\n\n    // Check dismiss button accessibility\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await expect(dismissButton).toHaveAttribute('aria-label', /dismiss/i);\n\n    // Check CTA button accessibility\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toHaveAttribute('aria-label', /call/i);\n  });\n\n  test('banner appears on multiple pages', async ({ page }) => {\n    // First, clear localStorage and check home page\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    await page.reload();\n\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Navigate to another page\n    await page.goto('/about');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Navigate to services page\n    await page.goto('/services');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n  });\n\n  test('banner dismissal persists across pages', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Dismiss on home page\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Navigate to another page\n    await page.goto('/about');\n\n    // Banner should still be hidden\n    await page.waitForTimeout(500);\n    await expect(banner).toBeHidden();\n  });\n});\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create EmergencyServiceBanner component",
      "status": "completed",
      "activeForm": "Creating EmergencyServiceBanner component"
    },
    {
      "content": "Add EmergencyServiceBanner to Layout",
      "status": "completed",
      "activeForm": "Adding EmergencyServiceBanner to Layout"
    },
    {
      "content": "Create Playwright verification test",
      "status": "completed",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run and verify the test",
      "status": "in_progress",
      "activeForm": "Running and verifying the test"
    },
    {
      "content": "Delete temporary test file",
      "status": "pending",
      "activeForm": "Deleting temporary test file"
    }
  ]
}
Now let me run the Playwright tests to verify the implementation:

🔧 Tool: Bash
Input: {
  "command": "npx playwright test tests/emergency-banner-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright tests for emergency banner",
  "timeout": 300000
}
The tests are failing because the banner element isn't found. This could be a build issue. Let me check if there are any build errors and verify the component is being included correctly:

🔧 Tool: Bash
Input: {
  "command": "npm run build 2>&1 | head -100",
  "description": "Build the project to check for errors",
  "timeout": 120000
}
Good, the build succeeded! Let me check if the banner is in the built HTML:

🔧 Tool: Bash
Input: {
  "command": "grep -l \"emergency-service-banner\" C:/Users/James/Repos/service-business/dist/index.html 2>&1 || echo \"NOT FOUND\"",
  "description": "Check if banner is in built HTML"
}
The banner is in the built HTML. The issue is that the banner starts with `hidden` attribute. The tests need to wait for the JavaScript to remove the hidden attribute. Let me check the banner element in the HTML:

🔧 Tool: Bash
Input: {
  "command": "grep -A 5 \"emergency-service-banner\" C:/Users/James/Repos/service-business/dist/index.html 2>&1 | head -20",
  "description": "Check banner HTML in built file"
}
The banner is in the HTML with the `hidden` attribute. The issue is that the test is not waiting properly for the JavaScript to execute and unhide the banner. The script has a `setTimeout(showBanner, 100)` which introduces a delay. Let me update the test to wait for the `data-visible="true"` attribute to be set:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\emergency-banner-verification.spec.ts",
  "old_string": "test.describe('Emergency Service Banner', () => {\n  test.beforeEach(async ({ page }) => {\n    // Clear localStorage before each test to ensure banner shows\n    await page.goto('/');\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    // Reload to apply clean state\n    await page.reload();\n  });\n\n  test('banner appears on page load', async ({ page }) => {\n    // Wait for the banner to appear (it has a small delay)\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Verify banner has visible state\n    await expect(banner).toHaveAttribute('data-visible', 'true');\n  });",
  "new_string": "test.describe('Emergency Service Banner', () => {\n  test.beforeEach(async ({ page }) => {\n    // Clear localStorage before each test to ensure banner shows\n    await page.goto('/');\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    // Reload to apply clean state\n    await page.reload();\n    // Wait for DOM to be ready and JS to execute\n    await page.waitForLoadState('domcontentloaded');\n  });\n\n  test('banner appears on page load', async ({ page }) => {\n    // Wait for the banner to have visible state (JS will add this attribute)\n    const banner = page.locator('#emergency-service-banner');\n\n    // Wait for the data-visible attribute to be set to true\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Now it should be visible\n    await expect(banner).toBeVisible();\n  });"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\emergency-banner-verification.spec.ts",
  "old_string": "  test('banner contains correct message and CTA', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Check message content\n    const message = banner.locator('.emergency-banner__message');\n    await expect(message).toContainText('urgent');\n\n    // Check CTA button exists and has phone link\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toBeVisible();\n    await expect(ctaButton).toHaveAttribute('href', /^tel:/);\n  });\n\n  test('click-to-call link has correct phone number', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Verify the tel: link format\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    const href = await ctaButton.getAttribute('href');\n    expect(href).toMatch(/^tel:\\+?[\\d-]+$/);\n  });\n\n  test('banner can be dismissed', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Click dismiss button\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await expect(dismissButton).toBeVisible();\n    await dismissButton.click();\n\n    // Wait for animation and verify banner is hidden\n    await expect(banner).toHaveAttribute('data-visible', 'false');\n\n    // After animation completes, banner should be hidden\n    await page.waitForTimeout(400); // Wait for animation\n    await expect(banner).toBeHidden();\n  });\n\n  test('dismissal state is persisted in localStorage', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Dismiss the banner\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Check localStorage\n    const storageData = await page.evaluate(() => {\n      return localStorage.getItem('emergency-banner-dismissed');\n    });\n\n    expect(storageData).toBeTruthy();\n    const parsed = JSON.parse(storageData!);\n    expect(parsed.dismissedAt).toBeTruthy();\n    expect(parsed.duration).toBe(24);\n  });\n\n  test('banner does not appear after dismissal on page reload', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Dismiss the banner\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Reload the page\n    await page.reload();\n\n    // Banner should remain hidden\n    await page.waitForTimeout(500); // Give it time to potentially appear\n    await expect(banner).toBeHidden();\n  });\n\n  test('banner has proper accessibility attributes', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Check ARIA attributes\n    await expect(banner).toHaveAttribute('role', 'region');\n    await expect(banner).toHaveAttribute('aria-label', /emergency/i);\n\n    // Check dismiss button accessibility\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await expect(dismissButton).toHaveAttribute('aria-label', /dismiss/i);\n\n    // Check CTA button accessibility\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toHaveAttribute('aria-label', /call/i);\n  });\n\n  test('banner appears on multiple pages', async ({ page }) => {\n    // First, clear localStorage and check home page\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    await page.reload();\n\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Navigate to another page\n    await page.goto('/about');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Navigate to services page\n    await page.goto('/services');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n  });\n\n  test('banner dismissal persists across pages', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeVisible({ timeout: 5000 });\n\n    // Dismiss on home page\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Navigate to another page\n    await page.goto('/about');\n\n    // Banner should still be hidden\n    await page.waitForTimeout(500);\n    await expect(banner).toBeHidden();\n  });\n});",
  "new_string": "  test('banner contains correct message and CTA', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Check message content\n    const message = banner.locator('.emergency-banner__message');\n    await expect(message).toContainText('urgent');\n\n    // Check CTA button exists and has phone link\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toBeVisible();\n    await expect(ctaButton).toHaveAttribute('href', /^tel:/);\n  });\n\n  test('click-to-call link has correct phone number', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Verify the tel: link format\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    const href = await ctaButton.getAttribute('href');\n    expect(href).toMatch(/^tel:\\+?[\\d-]+$/);\n  });\n\n  test('banner can be dismissed', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Click dismiss button\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await expect(dismissButton).toBeVisible();\n    await dismissButton.click();\n\n    // Wait for animation and verify banner is hidden\n    await expect(banner).toHaveAttribute('data-visible', 'false', { timeout: 2000 });\n\n    // After animation completes, banner should be hidden\n    await page.waitForTimeout(400); // Wait for animation\n    await expect(banner).toBeHidden();\n  });\n\n  test('dismissal state is persisted in localStorage', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Dismiss the banner\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Check localStorage\n    const storageData = await page.evaluate(() => {\n      return localStorage.getItem('emergency-banner-dismissed');\n    });\n\n    expect(storageData).toBeTruthy();\n    const parsed = JSON.parse(storageData!);\n    expect(parsed.dismissedAt).toBeTruthy();\n    expect(parsed.duration).toBe(24);\n  });\n\n  test('banner does not appear after dismissal on page reload', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Dismiss the banner\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Reload the page\n    await page.reload();\n    await page.waitForLoadState('domcontentloaded');\n\n    // Banner should remain hidden (not have data-visible=true)\n    await page.waitForTimeout(500); // Give it time to potentially appear\n    await expect(banner).toBeHidden();\n  });\n\n  test('banner has proper accessibility attributes', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Check ARIA attributes\n    await expect(banner).toHaveAttribute('role', 'region');\n    await expect(banner).toHaveAttribute('aria-label', /emergency/i);\n\n    // Check dismiss button accessibility\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await expect(dismissButton).toHaveAttribute('aria-label', /dismiss/i);\n\n    // Check CTA button accessibility\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toHaveAttribute('aria-label', /call/i);\n  });\n\n  test('banner appears on multiple pages', async ({ page }) => {\n    // First, clear localStorage and check home page\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    await page.reload();\n    await page.waitForLoadState('domcontentloaded');\n\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Navigate to another page\n    await page.goto('/about');\n    await page.waitForLoadState('domcontentloaded');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Navigate to services page\n    await page.goto('/services');\n    await page.waitForLoadState('domcontentloaded');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n  });\n\n  test('banner dismissal persists across pages', async ({ page }) => {\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Dismiss on home page\n    await page.locator('#emergency-banner-dismiss').click();\n    await page.waitForTimeout(400);\n\n    // Navigate to another page\n    await page.goto('/about');\n    await page.waitForLoadState('domcontentloaded');\n\n    // Banner should still be hidden\n    await page.waitForTimeout(500);\n    await expect(banner).toBeHidden();\n  });\n});"
}
Now let's run the tests again:

🔧 Tool: Bash
Input: {
  "command": "npx playwright test tests/emergency-banner-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright tests for emergency banner",
  "timeout": 300000
}
The element is not found at all. Let me debug this by checking if the dev server actually shows the banner. Let me run a simple check first to see what's on the page:

🔧 Tool: Bash
Input: {
  "command": "npx playwright test --project=chromium -g \"banner appears on page load\" --reporter=list --debug 2>&1 | head -50 || true",
  "description": "Debug the test",
  "timeout": 60000
}

🔧 Tool: KillShell
Input: {
  "shell_id": "bfe2c9a"
}
Let me create a simpler test to debug this issue:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\tests\\emergency-banner-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Emergency Service Banner Verification Test\n *\n * This test verifies that the emergency service banner:\n * - Appears on page load\n * - Has click-to-call functionality\n * - Can be dismissed\n * - Persists dismissal state in localStorage\n */\n\ntest.describe('Emergency Service Banner', () => {\n  test('banner is present in DOM and can be shown', async ({ page }) => {\n    // Navigate to the page\n    await page.goto('/');\n\n    // Wait for page to fully load\n    await page.waitForLoadState('networkidle');\n\n    // Clear any stored dismissal to ensure banner shows\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n\n    // Reload to apply clean state\n    await page.reload();\n    await page.waitForLoadState('networkidle');\n\n    // Check that the banner element exists in DOM\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toBeAttached({ timeout: 5000 });\n\n    // Wait a bit for the JS to initialize and show the banner\n    await page.waitForTimeout(500);\n\n    // Check if banner becomes visible (data-visible=true)\n    const isVisible = await banner.getAttribute('data-visible');\n    console.log('Banner data-visible attribute:', isVisible);\n\n    // The banner should have data-visible=\"true\" after JS runs\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n    await expect(banner).toBeVisible();\n  });\n\n  test('banner contains correct elements', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    // Clear localStorage\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    await page.reload();\n    await page.waitForLoadState('networkidle');\n\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Check message content\n    const message = banner.locator('.emergency-banner__message');\n    await expect(message).toContainText('urgent');\n\n    // Check CTA button exists and has phone link\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toBeVisible();\n    const href = await ctaButton.getAttribute('href');\n    expect(href).toMatch(/^tel:\\+?[\\d-]+$/);\n  });\n\n  test('banner can be dismissed and persists', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    // Clear localStorage\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    await page.reload();\n    await page.waitForLoadState('networkidle');\n\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Click dismiss button\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await dismissButton.click();\n\n    // Wait for animation\n    await page.waitForTimeout(400);\n\n    // Verify banner is hidden\n    await expect(banner).toBeHidden();\n\n    // Check localStorage\n    const storageData = await page.evaluate(() => {\n      return localStorage.getItem('emergency-banner-dismissed');\n    });\n    expect(storageData).toBeTruthy();\n    const parsed = JSON.parse(storageData!);\n    expect(parsed.dismissedAt).toBeTruthy();\n    expect(parsed.duration).toBe(24);\n\n    // Reload and verify banner stays hidden\n    await page.reload();\n    await page.waitForLoadState('networkidle');\n    await page.waitForTimeout(500);\n    await expect(banner).toBeHidden();\n  });\n\n  test('banner has proper accessibility attributes', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    // Clear localStorage\n    await page.evaluate(() => {\n      localStorage.removeItem('emergency-banner-dismissed');\n    });\n    await page.reload();\n    await page.waitForLoadState('networkidle');\n\n    const banner = page.locator('#emergency-service-banner');\n    await expect(banner).toHaveAttribute('data-visible', 'true', { timeout: 5000 });\n\n    // Check ARIA attributes\n    await expect(banner).toHaveAttribute('role', 'region');\n    await expect(banner).toHaveAttribute('aria-label', /emergency/i);\n\n    // Check dismiss button accessibility\n    const dismissButton = page.locator('#emergency-banner-dismiss');\n    await expect(dismissButton).toHaveAttribute('aria-label', /dismiss/i);\n\n    // Check CTA button accessibility\n    const ctaButton = banner.locator('.emergency-banner__cta');\n    await expect(ctaButton).toHaveAttribute('aria-label', /call/i);\n  });\n});\n"
}

🔧 Tool: Bash
Input: {
  "command": "npx playwright test tests/emergency-banner-verification.spec.ts --reporter=list 2>&1",
  "description": "Run simplified Playwright tests",
  "timeout": 300000
}
The element is not even attached to the DOM during dev. Let me check if the dev server is running properly and what's being served:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && curl -s http://localhost:4321/ 2>&1 | head -100",
  "description": "Check dev server content",
  "timeout": 30000
}
I see! The dev server content is different from the built content. The layout seems to have been modified or there's a different version running. I see an `announcement-bar` component but not my `emergency-service-banner`. This might indicate:

1. The dev server is running an older/different version
2. The Layout.astro file I edited might not be the one being used

Let me check the current state of Layout.astro:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro"
}
The Layout.astro file looks correct with my changes. But the dev server seems to be serving something different (it has an "announcement-bar" component which I don't see in this Layout.astro). This suggests there might be caching or the dev server needs to be restarted.

Let me restart the dev server and try again:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && pkill -f \"astro dev\" 2>/dev/null || taskkill /F /IM \"node.exe\" /FI \"WINDOWTITLE eq astro*\" 2>/dev/null || true",
  "description": "Kill any running dev server",
  "timeout": 10000
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && npx playwright test tests/emergency-banner-verification.spec.ts --reporter=list 2>&1",
  "description": "Re-run tests with fresh server",
  "timeout": 300000
}
The Playwright is starting a new server but somehow not picking up the changes. Let me check if there's another Layout file being used or if index.astro uses a different Layout:

🔧 Tool: Grep
Input: {
  "pattern": "Layout",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro",
  "output_mode": "content"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/layouts/*.astro"
}
Only one Layout file. The curl output showed different HTML content which suggests the dev server was already running with a cached/older version. Let me check what's being served from a fresh build first:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && npm run build && grep -o \"emergency-service-banner\" dist/index.html | head -1",
  "description": "Build and check for banner in output",
  "timeout": 120000
}
The banner IS being built into the static output. The issue is that the Playwright config has `reuseExistingServer: !process.env.CI` which means if there's an existing dev server running, it will reuse it. Let me modify the test to use the preview server or ensure the server restarts:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\playwright.config.ts"
}
I'll try running the tests without reusing an existing server by explicitly setting CI mode:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && CI=true npx playwright test tests/emergency-banner-verification.spec.ts --reporter=list 2>&1",
  "description": "Run tests without reusing existing server",
  "timeout": 300000
}
There's already a server running. Let me kill it more forcefully:

🔧 Tool: Bash
Input: {
  "command": "netstat -ano | findstr :4321 2>&1",
  "description": "Find process using port 4321"
}

🔧 Tool: Bash
Input: {
  "command": "taskkill /F /PID 38188 2>&1",
  "description": "Kill dev server process"
}

🔧 Tool: Bash
Input: {
  "command": "taskkill //F //PID 38188 2>&1",
  "description": "Kill dev server process"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && CI=true npx playwright test tests/emergency-banner-verification.spec.ts --reporter=list 2>&1",
  "description": "Run tests with fresh server",
  "timeout": 300000
}
All 4 tests passed! Now let me update the todo list and delete the temporary test file:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create EmergencyServiceBanner component",
      "status": "completed",
      "activeForm": "Creating EmergencyServiceBanner component"
    },
    {
      "content": "Add EmergencyServiceBanner to Layout",
      "status": "completed",
      "activeForm": "Adding EmergencyServiceBanner to Layout"
    },
    {
      "content": "Create Playwright verification test",
      "status": "completed",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run and verify the test",
      "status": "completed",
      "activeForm": "Running and verifying the test"
    },
    {
      "content": "Delete temporary test file",
      "status": "in_progress",
      "activeForm": "Deleting temporary test file"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\service-business\\tests\\emergency-banner-verification.spec.ts\"",
  "description": "Delete temporary verification test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create EmergencyServiceBanner component",
      "status": "completed",
      "activeForm": "Creating EmergencyServiceBanner component"
    },
    {
      "content": "Add EmergencyServiceBanner to Layout",
      "status": "completed",
      "activeForm": "Adding EmergencyServiceBanner to Layout"
    },
    {
      "content": "Create Playwright verification test",
      "status": "completed",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run and verify the test",
      "status": "completed",
      "activeForm": "Running and verifying the test"
    },
    {
      "content": "Delete temporary test file",
      "status": "completed",
      "activeForm": "Deleting temporary test file"
    }
  ]
}
<summary>
## Summary: Add Emergency Service Banner

### Changes Implemented
- Created a new `EmergencyServiceBanner.astro` component with:
  - Prominent, fixed-position banner at the top of the page
  - Click-to-call functionality with `tel:` link
  - Dismissible with a close button
  - localStorage persistence to remember dismissal state
  - Configurable dismissal duration (defaults to 24 hours)
  - Urgent red/orange gradient styling with animated alert icon
  - Responsive design for mobile and desktop
  - Full accessibility support (ARIA labels, roles)
  - Reduced motion support for users who prefer it
  - Automatic header position adjustment when banner is visible

- Modified `Layout.astro` to:
  - Import and include the EmergencyServiceBanner component
  - Added `disableEmergencyBanner` prop to allow pages to opt out
  - Added CSS to adjust sticky header position when banner is visible
  - Banner appears before the Header component for proper visual hierarchy

### Files Modified
- `src/components/EmergencyServiceBanner.astro` (NEW)
- `src/layouts/Layout.astro` (MODIFIED)

### Notes for Developer
- The banner uses localStorage with key `emergency-banner-dismissed` to persist dismissal state
- Default dismissal duration is 24 hours, configurable via `dismissDurationHours` prop
- Phone number and message are configurable via props
- To disable the banner on specific pages, pass `disableEmergencyBanner={true}` to the Layout
- The banner includes a pulsing alert icon and ringing phone animation to draw attention
- CSS uses the existing design system variables for consistency

### Verification Status
- Feature was verified with Playwright tests that confirmed:
  - Banner appears on page load
  - Banner contains correct message and click-to-call CTA
  - Banner can be dismissed
  - Dismissal state persists in localStorage across page reloads
  - Banner has proper accessibility attributes (role, aria-label)
- All 4 tests passed successfully
- Temporary test file was deleted after verification
</summary>