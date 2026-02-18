

I'll implement all the changes systematically. Let me start by reading the key files I need to modify.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Phase 1: Hero Section & Homepage Cleanup (T001-T004)",
      "status": "pending",
      "activeForm": "Cleaning up Hero Section & Homepage"
    },
    {
      "content": "Phase 2: Services Page Overhaul (T005-T007)",
      "status": "pending",
      "activeForm": "Overhauling Services Page"
    },
    {
      "content": "Phase 3: Contact Form & Type Definitions (T008-T009)",
      "status": "pending",
      "activeForm": "Updating Contact Form & Types"
    },
    {
      "content": "Phase 4: Blog, Resources & Checklist Configs (T010-T015)",
      "status": "pending",
      "activeForm": "Updating Blog, Resources & Checklist Configs"
    },
    {
      "content": "Phase 5: Component Default Text & Breadcrumbs (T016-T018)",
      "status": "pending",
      "activeForm": "Updating Component Default Text & Breadcrumbs"
    },
    {
      "content": "Phase 6: SEO Config & Documentation (T019-T020)",
      "status": "pending",
      "activeForm": "Updating SEO Config & Documentation"
    },
    {
      "content": "Verify: grep for remaining web-design references & build",
      "status": "pending",
      "activeForm": "Verifying no remaining web-design references"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\contact-form.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\blog.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\blog.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\resources.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\service-checklists.config.ts"
}
Now let me read the remaining files I need to modify:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FeaturedProjectsPreview.astro",
  "limit": 30
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BeforeAfterGallery.astro",
  "limit": 30
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Breadcrumb.astro",
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md"
}
Now I need to find the `formatProjectType` function in ContactForm.astro and also check the FeaturedProjectsPreview and BeforeAfterGallery defaults more closely.

🔧 Tool: Grep
Input: {
  "pattern": "formatProjectType|web.?design|web.?development|Houston Web",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "output_mode": "content"
}

🔧 Tool: Grep
Input: {
  "pattern": "subheading.*=|default.*subheading",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FeaturedProjectsPreview.astro",
  "output_mode": "content"
}

🔧 Tool: Grep
Input: {
  "pattern": "subheading.*=|default.*subheading",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BeforeAfterGallery.astro",
  "output_mode": "content"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "offset": 1235,
  "limit": 40
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "offset": 270,
  "limit": 15
}
Now I have a complete picture. Let me implement all changes systematically. I'll start with Phase 1.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Phase 1: Hero Section & Homepage Cleanup (T001-T004)",
      "status": "in_progress",
      "activeForm": "Cleaning up Hero Section & Homepage"
    },
    {
      "content": "Phase 2: Services Page Overhaul (T005-T007)",
      "status": "pending",
      "activeForm": "Overhauling Services Page"
    },
    {
      "content": "Phase 3: Contact Form & Type Definitions (T008-T009)",
      "status": "pending",
      "activeForm": "Updating Contact Form & Types"
    },
    {
      "content": "Phase 4: Blog, Resources & Checklist Configs (T010-T015)",
      "status": "pending",
      "activeForm": "Updating Blog, Resources & Checklist Configs"
    },
    {
      "content": "Phase 5: Component Default Text & Breadcrumbs (T016-T018)",
      "status": "pending",
      "activeForm": "Updating Component Default Text & Breadcrumbs"
    },
    {
      "content": "Phase 6: SEO Config & Documentation (T019-T020)",
      "status": "pending",
      "activeForm": "Updating SEO Config & Documentation"
    },
    {
      "content": "Verify: grep for remaining web-design references & build",
      "status": "pending",
      "activeForm": "Verifying no remaining web-design references"
    }
  ]
}
The HeroSection.astro is already clean - I checked and there's no browser mockup element, no "Houston" references, and the trust badges are already generic. The `index.astro` homepage is also already fully generic. Phase 1 is already done! Let me verify with a quick grep:

🔧 Tool: Grep
Input: {
  "pattern": "Houston|mockup|web.?design|Fast.?loading|search.?friendly|visitors into customers",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\HeroSection.astro",
  "output_mode": "content"
}

🔧 Tool: Grep
Input: {
  "pattern": "Houston|mockup|web.?design|webDesign|existingWebsite",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro",
  "output_mode": "content"
}
Phase 1 is already clean. Now let me check what still has the CSS comment "HOUSTON SKYLINE":

🔧 Tool: Grep
Input: {
  "pattern": "HOUSTON",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "output_mode": "content"
}
I should fix these too. Let me now implement all changes in parallel, starting with the files that need changes:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\HeroSection.astro",
  "old_string": "   * HOUSTON SKYLINE",
  "new_string": "   * DECORATIVE SKYLINE"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\globals.css",
  "old_string": " * HOUSTON WEB SERVICES - GLOBAL STYLES",
  "new_string": " * SERVICE BUSINESS STARTER - GLOBAL STYLES"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\variables.css",
  "old_string": " * HOUSTON WEB SERVICES - DESIGN SYSTEM FOUNDATION",
  "new_string": " * SERVICE BUSINESS STARTER - DESIGN SYSTEM FOUNDATION"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\performance.css",
  "old_string": " * HOUSTON WEB SERVICES - PERFORMANCE STYLES",
  "new_string": " * SERVICE BUSINESS STARTER - PERFORMANCE STYLES"
}
I need to read these files first:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\globals.css",
  "limit": 5
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\variables.css",
  "limit": 5
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\performance.css",
  "limit": 5
}
Now let me make all the Phase 1 edits plus start on Phase 2-6 edits in parallel:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\HeroSection.astro",
  "old_string": "   * HOUSTON SKYLINE",
  "new_string": "   * DECORATIVE SKYLINE"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\globals.css",
  "old_string": " * HOUSTON WEB SERVICES - GLOBAL STYLES",
  "new_string": " * SERVICE BUSINESS STARTER - GLOBAL STYLES"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\variables.css",
  "old_string": " * HOUSTON WEB SERVICES - DESIGN SYSTEM FOUNDATION",
  "new_string": " * SERVICE BUSINESS STARTER - DESIGN SYSTEM FOUNDATION"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\performance.css",
  "old_string": " * HOUSTON WEB SERVICES - PERFORMANCE STYLES",
  "new_string": " * SERVICE BUSINESS STARTER - PERFORMANCE STYLES"
}
HeroSection needs to be re-read since it was read earlier but the tool doesn't seem to have it cached. Let me re-read the specific section:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\HeroSection.astro",
  "offset": 695,
  "limit": 10
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\HeroSection.astro",
  "old_string": "   * HOUSTON SKYLINE",
  "new_string": "   * DECORATIVE SKYLINE"
}
Good. Now let me tackle Phase 2 - the services page. The service data is already generic (Service One, Two, Three), but the hero visual preview cards and detail sections still reference web design content. I need to:
1. Update the hero preview cards to match the 3 generic services
2. Remove the extra detail sections (there are 5 referencing `services[3]` and `services[4]` which don't exist)
3. Update section IDs and comments

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Phase 1: Hero Section & Homepage Cleanup (T001-T004)",
      "status": "completed",
      "activeForm": "Cleaning up Hero Section & Homepage"
    },
    {
      "content": "Phase 2: Services Page Overhaul (T005-T007)",
      "status": "in_progress",
      "activeForm": "Overhauling Services Page"
    },
    {
      "content": "Phase 3: Contact Form & Type Definitions (T008-T009)",
      "status": "pending",
      "activeForm": "Updating Contact Form & Types"
    },
    {
      "content": "Phase 4: Blog, Resources & Checklist Configs (T010-T015)",
      "status": "pending",
      "activeForm": "Updating Blog, Resources & Checklist Configs"
    },
    {
      "content": "Phase 5: Component Default Text & Breadcrumbs (T016-T018)",
      "status": "pending",
      "activeForm": "Updating Component Default Text & Breadcrumbs"
    },
    {
      "content": "Phase 6: SEO Config & Documentation (T019-T020)",
      "status": "pending",
      "activeForm": "Updating SEO Config & Documentation"
    },
    {
      "content": "Verify: grep for remaining web-design references & build",
      "status": "pending",
      "activeForm": "Verifying no remaining web-design references"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "            <div class=\"services-hero__preview-card services-hero__preview-card--1\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h16v9H4V6zm0 11h16v1H4v-1z\"/>\n                  <path d=\"M6 8h3v3H6V8zm5 0h7v1h-7V8zm0 2h5v1h-5v-1z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Website Design</span>\n              <span class=\"services-hero__preview-price\">From $499</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--2\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Maintenance</span>\n              <span class=\"services-hero__preview-price\">From $49/mo</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--3\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7h-2V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Automation</span>\n              <span class=\"services-hero__preview-price\">From $299</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--4\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Site Support</span>\n              <span class=\"services-hero__preview-price\">From $75/hr</span>\n            </div>",
  "new_string": "            <div class=\"services-hero__preview-card services-hero__preview-card--1\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Service One</span>\n              <span class=\"services-hero__preview-price\">From $99</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--2\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Service Two</span>\n              <span class=\"services-hero__preview-price\">From $199/mo</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--3\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Service Three</span>\n              <span class=\"services-hero__preview-price\">From $499</span>\n            </div>"
}
The services.astro was read earlier but the tool seems to have lost it. Let me re-read and edit:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "offset": 215,
  "limit": 60
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "            <div class=\"services-hero__preview-card services-hero__preview-card--1\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h16v9H4V6zm0 11h16v1H4v-1z\"/>\n                  <path d=\"M6 8h3v3H6V8zm5 0h7v1h-7V8zm0 2h5v1h-5v-1z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Website Design</span>\n              <span class=\"services-hero__preview-price\">From $499</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--2\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Maintenance</span>\n              <span class=\"services-hero__preview-price\">From $49/mo</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--3\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7h-2V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Automation</span>\n              <span class=\"services-hero__preview-price\">From $299</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--4\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Site Support</span>\n              <span class=\"services-hero__preview-price\">From $75/hr</span>\n            </div>",
  "new_string": "            <div class=\"services-hero__preview-card services-hero__preview-card--1\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Service One</span>\n              <span class=\"services-hero__preview-price\">From $99</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--2\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Service Two</span>\n              <span class=\"services-hero__preview-price\">From $199/mo</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--3\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Service Three</span>\n              <span class=\"services-hero__preview-price\">From $499</span>\n            </div>"
}
Now update the stats to say "3+" instead of "5+" services, and update the hero stat:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "              <span class=\"services-hero__stat-value\">5+</span>\n              <span class=\"services-hero__stat-label\">Services</span>",
  "new_string": "              <span class=\"services-hero__stat-value\">3+</span>\n              <span class=\"services-hero__stat-label\">Services</span>"
}
Now I need to remove the extra service detail sections (services[3] and services[4] don't exist in the 3-service array) and update the remaining section IDs/comments. Let me read the detail sections:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "offset": 289,
  "limit": 195
}
Now I need to:
1. Update the comment "Website Design Detail Section" → "Service One Detail Section" and its ID
2. Update "Website Maintenance Detail Section" → "Service Two Detail Section" and its ID
3. Update "Web Hosting Detail Section" → "Service Three Detail Section" and its ID
4. Remove the services[3] and services[4] sections entirely

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "    <!-- Website Design Detail Section -->\n    <section id=\"website-design\" class=\"service-detail\" aria-labelledby=\"website-design-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[0].icon} />\n          <h2 id=\"website-design-heading\" class=\"service-detail__heading\">",
  "new_string": "    <!-- Service One Detail Section -->\n    <section id=\"service-one\" class=\"service-detail\" aria-labelledby=\"service-one-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[0].icon} />\n          <h2 id=\"service-one-heading\" class=\"service-detail__heading\">"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "    <!-- Website Maintenance Detail Section -->\n    <section id=\"maintenance\" class=\"service-detail\" aria-labelledby=\"maintenance-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[1].icon} />\n          <h2 id=\"maintenance-heading\" class=\"service-detail__heading\">",
  "new_string": "    <!-- Service Two Detail Section -->\n    <section id=\"service-two\" class=\"service-detail\" aria-labelledby=\"service-two-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[1].icon} />\n          <h2 id=\"service-two-heading\" class=\"service-detail__heading\">"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "    <!-- Web Hosting Detail Section -->\n    <section id=\"hosting\" class=\"service-detail\" aria-labelledby=\"hosting-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[2].icon} />\n          <h2 id=\"hosting-heading\" class=\"service-detail__heading\">",
  "new_string": "    <!-- Service Three Detail Section -->\n    <section id=\"service-three\" class=\"service-detail\" aria-labelledby=\"service-three-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[2].icon} />\n          <h2 id=\"service-three-heading\" class=\"service-detail__heading\">"
}
Now remove the two extra sections (services[3] and services[4]):

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "    <!-- Existing Website Support Detail Section -->\n    <section id=\"existing-website-support\" class=\"service-detail\" aria-labelledby=\"existing-website-support-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[3].icon} />\n          <h2 id=\"existing-website-support-heading\" class=\"service-detail__heading\">\n            {services[3].name}\n          </h2>\n          <p class=\"service-detail__description\">\n            {services[3].shortDescription}\n          </p>\n          <ul class=\"service-detail__benefits\">\n            {services[3].benefits.map((benefit) => (\n              <li class=\"service-detail__benefit\">\n                <svg class=\"service-detail__check\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n                  <path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\"/>\n                </svg>\n                {benefit}\n              </li>\n            ))}\n          </ul>\n          <div class=\"service-detail__pricing\">\n            <span class=\"service-detail__price\">{services[3].startingPrice}</span>\n            <span class=\"service-detail__price-note\">{services[3].priceNote}</span>\n          </div>\n          <div class=\"service-detail__cta\">\n            <Button\n              text={services[3].ctaText}\n              href={services[3].ctaHref}\n              variant=\"primary\"\n              size=\"large\"\n            />\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Business Process Automation Detail Section -->\n    <section id=\"business-process-automation\" class=\"service-detail\" aria-labelledby=\"business-process-automation-heading\">\n      <div class=\"service-detail__container\">\n        <div class=\"service-detail__content\">\n          <div class=\"service-detail__icon\" aria-hidden=\"true\" set:html={services[4].icon} />\n          <h2 id=\"business-process-automation-heading\" class=\"service-detail__heading\">\n            {services[4].name}\n          </h2>\n          <p class=\"service-detail__description\">\n            {services[4].shortDescription}\n          </p>\n          <ul class=\"service-detail__benefits\">\n            {services[4].benefits.map((benefit) => (\n              <li class=\"service-detail__benefit\">\n                <svg class=\"service-detail__check\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n                  <path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\"/>\n                </svg>\n                {benefit}\n              </li>\n            ))}\n          </ul>\n          <div class=\"service-detail__pricing\">\n            <span class=\"service-detail__price\">{services[4].startingPrice}</span>\n            <span class=\"service-detail__price-note\">{services[4].priceNote}</span>\n          </div>\n          <div class=\"service-detail__cta\">\n            <Button\n              text={services[4].ctaText}\n              href={services[4].ctaHref}\n              variant=\"primary\"\n              size=\"large\"\n            />\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- CTA Section -->",
  "new_string": "    <!-- CTA Section -->"
}
Now update the services grid CSS from 5 columns to 3:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\services.astro",
  "old_string": "    .services-overview__cards {\n      grid-template-columns: repeat(5, 1fr);\n    }",
  "new_string": "    .services-overview__cards {\n      grid-template-columns: repeat(3, 1fr);\n    }"
}
Now let me do Phases 3-6 in parallel using multiple edits. Phase 3: Contact Form types:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\contact-form.ts",
  "old_string": "export type ProjectType =\n  | ''\n  | 'website-design'\n  | 'website-redesign'\n  | 'e-commerce'\n  | 'web-application'\n  | 'business-automation'\n  | 'existing-website-support'\n  | 'maintenance'\n  | 'consultation'\n  | 'other';",
  "new_string": "export type ProjectType =\n  | ''\n  | 'service-inquiry'\n  | 'estimate-request'\n  | 'maintenance-request'\n  | 'consultation'\n  | 'other';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\contact-form.ts",
  "old_string": "export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [\n  { value: '', label: 'Select a project type' },\n  { value: 'website-design', label: 'New Website Design' },\n  { value: 'website-redesign', label: 'Website Redesign' },\n  { value: 'e-commerce', label: 'E-Commerce Store' },\n  { value: 'web-application', label: 'Web Application' },\n  { value: 'business-automation', label: 'Business Automation' },\n  { value: 'existing-website-support', label: 'Existing Website Support' },\n  { value: 'maintenance', label: 'Website Maintenance' },\n  { value: 'consultation', label: 'Consultation' },\n  { value: 'other', label: 'Other' },\n];",
  "new_string": "export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [\n  { value: '', label: 'Select an inquiry type' },\n  { value: 'service-inquiry', label: 'Service Inquiry' },\n  { value: 'estimate-request', label: 'Estimate Request' },\n  { value: 'maintenance-request', label: 'Maintenance Request' },\n  { value: 'consultation', label: 'Consultation' },\n  { value: 'other', label: 'Other' },\n];"
}
Now update ContactForm.astro's formatProjectType and the Houston reference:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "old_string": "  function formatProjectType(value: string): string {\n    const labels: Record<string, string> = {\n      'website-design': 'New Website Design',\n      'website-redesign': 'Website Redesign',\n      'e-commerce': 'E-Commerce Store',\n      'web-application': 'Web Application',\n      'business-automation': 'Business Automation',\n      'existing-website-support': 'Existing Website Support',\n      'maintenance': 'Website Maintenance',\n      'consultation': 'Consultation',\n      'other': 'Other',\n    };\n    return labels[value] || value;\n  }",
  "new_string": "  function formatProjectType(value: string): string {\n    const labels: Record<string, string> = {\n      'service-inquiry': 'Service Inquiry',\n      'estimate-request': 'Estimate Request',\n      'maintenance-request': 'Maintenance Request',\n      'consultation': 'Consultation',\n      'other': 'Other',\n    };\n    return labels[value] || value;\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "old_string": "          Submitting will send your information to Houston Web Services",
  "new_string": "          Submitting will send your information to our team"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "offset": 1240,
  "limit": 20
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "offset": 275,
  "limit": 8
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "old_string": "  function formatProjectType(value: string): string {\n    const labels: Record<string, string> = {\n      'website-design': 'New Website Design',\n      'website-redesign': 'Website Redesign',\n      'e-commerce': 'E-Commerce Store',\n      'web-application': 'Web Application',\n      'business-automation': 'Business Automation',\n      'existing-website-support': 'Existing Website Support',\n      'maintenance': 'Website Maintenance',\n      'consultation': 'Consultation',\n      'other': 'Other',\n    };\n    return labels[value] || value;\n  }",
  "new_string": "  function formatProjectType(value: string): string {\n    const labels: Record<string, string> = {\n      'service-inquiry': 'Service Inquiry',\n      'estimate-request': 'Estimate Request',\n      'maintenance-request': 'Maintenance Request',\n      'consultation': 'Consultation',\n      'other': 'Other',\n    };\n    return labels[value] || value;\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "old_string": "          Submitting will send your information to Houston Web Services",
  "new_string": "          Submitting will send your information to our team"
}
Now Phase 4 - Blog types, configs, resources, checklists. Let me do all these edits:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\blog.ts",
  "old_string": "export type BlogCategory =\n  | 'web-design'\n  | 'web-development'\n  | 'seo'\n  | 'digital-marketing'\n  | 'business-tips'\n  | 'case-studies'\n  | 'tutorials'\n  | 'industry-news';",
  "new_string": "export type BlogCategory =\n  | 'service-tips'\n  | 'how-to-guides'\n  | 'industry-news'\n  | 'business-tips'\n  | 'case-studies'\n  | 'tutorials'\n  | 'maintenance'\n  | 'seasonal';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\blog.ts",
  "old_string": "export const BLOG_CATEGORIES: BlogFilterOption[] = [\n  { label: 'All Articles', value: 'all' },\n  { label: 'Web Design', value: 'web-design' },\n  { label: 'Web Development', value: 'web-development' },\n  { label: 'SEO', value: 'seo' },\n  { label: 'Digital Marketing', value: 'digital-marketing' },\n  { label: 'Business Tips', value: 'business-tips' },\n  { label: 'Case Studies', value: 'case-studies' },\n  { label: 'Tutorials', value: 'tutorials' },\n  { label: 'Industry News', value: 'industry-news' },\n];",
  "new_string": "export const BLOG_CATEGORIES: BlogFilterOption[] = [\n  { label: 'All Articles', value: 'all' },\n  { label: 'Service Tips', value: 'service-tips' },\n  { label: 'How-To Guides', value: 'how-to-guides' },\n  { label: 'Industry News', value: 'industry-news' },\n  { label: 'Business Tips', value: 'business-tips' },\n  { label: 'Case Studies', value: 'case-studies' },\n  { label: 'Tutorials', value: 'tutorials' },\n  { label: 'Maintenance', value: 'maintenance' },\n  { label: 'Seasonal', value: 'seasonal' },\n];"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\blog.ts",
  "old_string": "export const DEFAULT_AUTHOR: BlogAuthor = {\n  name: 'Houston Web Services',\n  avatar: '/images/team/default-author.svg',\n  bio: 'Expert web design and development team serving Houston businesses.',\n};",
  "new_string": "export const DEFAULT_AUTHOR: BlogAuthor = {\n  name: 'Your Business Name',\n  avatar: '/images/team/default-author.svg',\n  bio: 'Your business description goes here.',\n};"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\blog.ts",
  "limit": 20
}
It looks like a linter or formatter already changed this file. Let me read the full current state:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\blog.ts",
  "offset": 208,
  "limit": 50
}
It seems the blog.ts was already partially cleaned up (maybe by another process). The BlogCategory type and BLOG_CATEGORIES are already generic, and DEFAULT_AUTHOR is already genericized. Let me verify the other config files were also updated:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\blog.config.ts",
  "limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\resources.config.ts",
  "limit": 40
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\service-checklists.config.ts",
  "limit": 45
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts",
  "offset": 18,
  "limit": 30
}
Good - blog.config.ts and blog.ts are already cleaned up. Now I need to update:
1. `resources.config.ts` - COMMON_RESOURCE_TAGS (still has webDesign, webDevelopment, wordpress, etc.)
2. `service-checklists.config.ts` - COMMON_CHECKLIST_TAGS (same issue)
3. `service-checklist.ts` - ServiceType, SERVICE_TYPES, SERVICE_TYPE_LABELS

Let me also re-read the SERVICE_TYPES and SERVICE_TYPE_LABELS:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts",
  "offset": 185,
  "limit": 55
}
Now let me make all the remaining Phase 4 edits:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\resources.config.ts",
  "old_string": "export const COMMON_RESOURCE_TAGS: Record<string, ResourceTag> = {\n  webDesign: { slug: 'web-design', name: 'Web Design' },\n  webDevelopment: { slug: 'web-development', name: 'Web Development' },\n  seo: { slug: 'seo', name: 'SEO' },\n  performance: { slug: 'performance', name: 'Performance' },\n  security: { slug: 'security', name: 'Security' },\n  hosting: { slug: 'hosting', name: 'Hosting' },\n  maintenance: { slug: 'maintenance', name: 'Maintenance' },\n  smallBusiness: { slug: 'small-business', name: 'Small Business' },\n  ecommerce: { slug: 'ecommerce', name: 'E-Commerce' },\n  wordpress: { slug: 'wordpress', name: 'WordPress' },\n  analytics: { slug: 'analytics', name: 'Analytics' },\n  branding: { slug: 'branding', name: 'Branding' },\n  mobile: { slug: 'mobile', name: 'Mobile' },\n  accessibility: { slug: 'accessibility', name: 'Accessibility' },\n  contentStrategy: { slug: 'content-strategy', name: 'Content Strategy' },\n  socialMedia: { slug: 'social-media', name: 'Social Media' },\n};",
  "new_string": "export const COMMON_RESOURCE_TAGS: Record<string, ResourceTag> = {\n  // TODO: Replace with tags relevant to your service business\n  tipsAndTricks: { slug: 'tips-and-tricks', name: 'Tips & Tricks' },\n  howTo: { slug: 'how-to', name: 'How-To' },\n  maintenance: { slug: 'maintenance', name: 'Maintenance' },\n  safety: { slug: 'safety', name: 'Safety' },\n  seasonal: { slug: 'seasonal', name: 'Seasonal' },\n  smallBusiness: { slug: 'small-business', name: 'Small Business' },\n  budgeting: { slug: 'budgeting', name: 'Budgeting' },\n  diy: { slug: 'diy', name: 'DIY' },\n  hiring: { slug: 'hiring', name: 'Hiring a Pro' },\n  branding: { slug: 'branding', name: 'Branding' },\n  customerService: { slug: 'customer-service', name: 'Customer Service' },\n  operations: { slug: 'operations', name: 'Operations' },\n};"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\service-checklists.config.ts",
  "old_string": "export const COMMON_CHECKLIST_TAGS: Record<string, ChecklistTag> = {\n  webDesign: { slug: 'web-design', name: 'Web Design' },\n  webDevelopment: { slug: 'web-development', name: 'Web Development' },\n  seo: { slug: 'seo', name: 'SEO' },\n  performance: { slug: 'performance', name: 'Performance' },\n  security: { slug: 'security', name: 'Security' },\n  hosting: { slug: 'hosting', name: 'Hosting' },\n  maintenance: { slug: 'maintenance', name: 'Maintenance' },\n  smallBusiness: { slug: 'small-business', name: 'Small Business' },\n  ecommerce: { slug: 'ecommerce', name: 'E-Commerce' },\n  wordpress: { slug: 'wordpress', name: 'WordPress' },\n  backup: { slug: 'backup', name: 'Backup' },\n  updates: { slug: 'updates', name: 'Updates' },\n  content: { slug: 'content', name: 'Content' },\n  analytics: { slug: 'analytics', name: 'Analytics' },\n  mobile: { slug: 'mobile', name: 'Mobile' },\n  accessibility: { slug: 'accessibility', name: 'Accessibility' },\n};",
  "new_string": "export const COMMON_CHECKLIST_TAGS: Record<string, ChecklistTag> = {\n  // TODO: Replace with tags relevant to your service business\n  preparation: { slug: 'preparation', name: 'Preparation' },\n  maintenance: { slug: 'maintenance', name: 'Maintenance' },\n  safety: { slug: 'safety', name: 'Safety' },\n  seasonal: { slug: 'seasonal', name: 'Seasonal' },\n  smallBusiness: { slug: 'small-business', name: 'Small Business' },\n  budgeting: { slug: 'budgeting', name: 'Budgeting' },\n  scheduling: { slug: 'scheduling', name: 'Scheduling' },\n  qualityControl: { slug: 'quality-control', name: 'Quality Control' },\n  customerService: { slug: 'customer-service', name: 'Customer Service' },\n  operations: { slug: 'operations', name: 'Operations' },\n};"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts",
  "old_string": "export type ServiceType =\n  | 'web-design'\n  | 'web-development'\n  | 'hosting'\n  | 'maintenance'\n  | 'seo'\n  | 'ecommerce'\n  | 'general';",
  "new_string": "export type ServiceType =\n  | 'service-one'\n  | 'service-two'\n  | 'service-three'\n  | 'maintenance'\n  | 'operations'\n  | 'general';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts",
  "old_string": "export const SERVICE_TYPES: ChecklistFilterOption[] = [\n  { label: 'All Services', value: 'all' },\n  { label: 'Web Design', value: 'web-design' },\n  { label: 'Web Development', value: 'web-development' },\n  { label: 'Hosting', value: 'hosting' },\n  { label: 'Maintenance', value: 'maintenance' },\n  { label: 'SEO', value: 'seo' },\n  { label: 'E-Commerce', value: 'ecommerce' },\n  { label: 'General', value: 'general' },\n];",
  "new_string": "export const SERVICE_TYPES: ChecklistFilterOption[] = [\n  { label: 'All Services', value: 'all' },\n  { label: 'Service One', value: 'service-one' },\n  { label: 'Service Two', value: 'service-two' },\n  { label: 'Service Three', value: 'service-three' },\n  { label: 'Maintenance', value: 'maintenance' },\n  { label: 'Operations', value: 'operations' },\n  { label: 'General', value: 'general' },\n];"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts",
  "old_string": "export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {\n  'web-design': 'Web Design',\n  'web-development': 'Web Development',\n  'hosting': 'Hosting',\n  'maintenance': 'Maintenance',\n  'seo': 'SEO',\n  'ecommerce': 'E-Commerce',\n  'general': 'General',\n};",
  "new_string": "export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {\n  'service-one': 'Service One',\n  'service-two': 'Service Two',\n  'service-three': 'Service Three',\n  'maintenance': 'Maintenance',\n  'operations': 'Operations',\n  'general': 'General',\n};"
}
The service-checklist.ts file got modified. Let me re-read:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts",
  "offset": 18,
  "limit": 15
}
Seems the linter already modified it slightly differently. Let me read the full bottom section:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service-checklist.ts",
  "offset": 185,
  "limit": 55
}
The service-checklist.ts has already been updated by the linter/another process. Great, it's already clean. Now let me do Phase 5 - Components:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FeaturedProjectsPreview.astro",
  "offset": 50,
  "limit": 15
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BeforeAfterGallery.astro",
  "offset": 38,
  "limit": 12
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Breadcrumb.astro",
  "offset": 62,
  "limit": 20
}
The FeaturedProjectsPreview and BeforeAfterGallery have already been partially updated (no web design references in their current defaults). The Breadcrumb is also already updated with generic service names. Let me verify they're fully clean:

🔧 Tool: Grep
Input: {
  "pattern": "web.?design|web.?development|Houston|website.?design",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\FeaturedProjectsPreview.astro",
  "output_mode": "content"
}

🔧 Tool: Grep
Input: {
  "pattern": "web.?design|web.?development|Houston|website.?design",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BeforeAfterGallery.astro",
  "output_mode": "content"
}

🔧 Tool: Grep
Input: {
  "pattern": "web.?design|web.?development|Houston|website.?design",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Breadcrumb.astro",
  "output_mode": "content"
}
Just a comment in Breadcrumb. Let me fix it:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\Breadcrumb.astro",
  "old_string": "  /** Current page path for auto-generation (e.g., '/services/website-design') */",
  "new_string": "  /** Current page path for auto-generation (e.g., '/services/service-one') */"
}
Now Phase 6 - SEO Config & Documentation:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\seo.config.ts",
  "old_string": "  makesOffer: [\n    // Configure: List of services offered\n    // Example: 'Custom Website Design', 'Web Development', 'SEO Optimization',\n  ],\n  knowsAbout: [\n    // Configure: List of expertise/knowledge areas\n    // Example: 'Web Design', 'Web Development', 'Search Engine Optimization',\n  ],",
  "new_string": "  makesOffer: [\n    // Configure: List of services offered\n    // Example: 'Service One', 'Service Two', 'Maintenance',\n  ],\n  knowsAbout: [\n    // Configure: List of expertise/knowledge areas\n    // Example: 'Your Industry', 'Your Specialty', 'Customer Service',\n  ],"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\seo.config.ts",
  "offset": 52,
  "limit": 15
}
The seo.config.ts is already cleaned up. Now let me update the SEO docs:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "offset": 25,
  "limit": 40
}
Now let me fix the SEO docs. There are multiple references to Houston Web Services and web design:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "  description=\"Learn about Houston Web Services and our mission to help small businesses succeed online.\"",
  "new_string": "  description=\"Learn about our company and our mission to help customers succeed.\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "      description=\"Explore our web design and development services.\"\n      canonicalUrl=\"https://houstonwebservices.com/services\"",
  "new_string": "      description=\"Explore our professional services for your business.\"\n      canonicalUrl=\"https://example.com/services\""
}
Now fix the homepage example in the docs:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "  title=\"Houston Web Services\"\n  description=\"Professional web design and development services for small businesses in West Houston.\"",
  "new_string": "  title=\"Your Business Name\"\n  description=\"Professional services for your local area. Contact us for a free estimate.\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "    name: 'Houston Web Services',\n    url: 'https://houstonwebservices.com',\n    logo: 'https://houstonwebservices.com/images/logo.png',\n    description: 'Professional web design services in West Houston.',\n    sameAs: [\n      'https://www.facebook.com/houstonwebservices',\n      'https://www.linkedin.com/company/houstonwebservices',\n    ],",
  "new_string": "    name: 'Your Business Name',\n    url: 'https://example.com',\n    logo: 'https://example.com/images/logo.png',\n    description: 'Professional services for your local area.',\n    sameAs: [\n      'https://www.facebook.com/yourbusiness',\n      'https://www.linkedin.com/company/yourbusiness',\n    ],"
}
Now fix the service page with breadcrumbs and the product/service examples:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "  title=\"Web Design Services\"\n  description=\"Custom web design services tailored for small businesses.\"\n  jsonLd={[\n    {\n      type: 'WebPage',\n      name: 'Web Design Services',\n      description: 'Custom web design services tailored for small businesses.',\n    },\n    {\n      type: 'BreadcrumbList',\n      items: [\n        { name: 'Home', url: '/' },\n        { name: 'Services', url: '/services' },\n        { name: 'Web Design', url: '/services/web-design' },\n      ],\n    },\n  ]}",
  "new_string": "  title=\"Our Services\"\n  description=\"Professional services tailored for your needs.\"\n  jsonLd={[\n    {\n      type: 'WebPage',\n      name: 'Our Services',\n      description: 'Professional services tailored for your needs.',\n    },\n    {\n      type: 'BreadcrumbList',\n      items: [\n        { name: 'Home', url: '/' },\n        { name: 'Services', url: '/services' },\n        { name: 'Service One', url: '/services/service-one' },\n      ],\n    },\n  ]}"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "  title=\"Starter Website Package\"\n  description=\"Affordable website package for small businesses - starting at $999.\"\n  jsonLd={{\n    type: 'Product',\n    name: 'Starter Website Package',\n    description: 'Professional 5-page website for small businesses.',",
  "new_string": "  title=\"Starter Service Package\"\n  description=\"Affordable service package for your business - starting at $999.\"\n  jsonLd={{\n    type: 'Product',\n    name: 'Starter Service Package',\n    description: 'Professional service package for small businesses.',"
}
Now fix the blog post example and remaining references:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "  title: '10 Tips for Small Business Websites',\n  description: 'Learn the essential tips for creating an effective small business website.',",
  "new_string": "  title: '10 Tips for Growing Your Service Business',\n  description: 'Learn the essential tips for growing an effective service business.',"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "  image: '/images/blog/small-business-tips.jpg',",
  "new_string": "  image: '/images/blog/business-tips.jpg',"
}
Now let me check for the LocalBusiness Houston example in the docs:

🔧 Tool: Grep
Input: {
  "pattern": "Houston|web.?design|houstonweb|website.?design|web development",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "output_mode": "content",
  "-n": true
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "offset": 382,
  "limit": 15
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\docs\\SEO_COMPONENT.md",
  "old_string": "    addressLocality: 'Houston',\n    addressRegion: 'TX',\n    postalCode: '77077',",
  "new_string": "    addressLocality: 'Your City',\n    addressRegion: 'ST',\n    postalCode: '00000',"
}
Now let me update the todo list and do the final verification - grepping the entire src/ directory for any remaining web-design references:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Phase 1: Hero Section & Homepage Cleanup (T001-T004)",
      "status": "completed",
      "activeForm": "Cleaning up Hero Section & Homepage"
    },
    {
      "content": "Phase 2: Services Page Overhaul (T005-T007)",
      "status": "completed",
      "activeForm": "Overhauling Services Page"
    },
    {
      "content": "Phase 3: Contact Form & Type Definitions (T008-T009)",
      "status": "completed",
      "activeForm": "Updating Contact Form & Types"
    },
    {
      "content": "Phase 4: Blog, Resources & Checklist Configs (T010-T015)",
      "status": "completed",
      "activeForm": "Updating Blog, Resources & Checklist Configs"
    },
    {
      "content": "Phase 5: Component Default Text & Breadcrumbs (T016-T018)",
      "status": "completed",
      "activeForm": "Updating Component Default Text & Breadcrumbs"
    },
    {
      "content": "Phase 6: SEO Config & Documentation (T019-T020)",
      "status": "completed",
      "activeForm": "Updating SEO Config & Documentation"
    },
    {
      "content": "Verify: grep for remaining web-design references & build",
      "status": "in_progress",
      "activeForm": "Verifying no remaining web-design references"
    }
  ]
}

🔧 Tool: Grep
Input: {
  "pattern": "web.?design|web.?development|Houston Web|houstonweb|website.?design|Fast.?loading.*search|visitors into customers",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "output_mode": "content",
  "-i": true
}
Found more files that need cleaning! Let me fix these:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\404.astro",
  "offset": 175,
  "limit": 15
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BlogArticleCard.astro",
  "offset": 18,
  "limit": 20
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BlogFilter.astro",
  "offset": 14,
  "limit": 10
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\case-study.ts",
  "offset": 262,
  "limit": 10
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "offset": 1,
  "limit": 10
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "offset": 70,
  "limit": 10
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "offset": 315,
  "limit": 10
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ServiceCard.astro",
  "offset": 15,
  "limit": 25
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ServicesSection.astro",
  "offset": 17,
  "limit": 10
}
Good news - the 404.astro is already clean (the grep was matching old cached results). Let me look at what actually needs fixing. The case-study.ts looks fine too (it said "Website Design" but the read shows "Residential", "Commercial", etc.). Let me re-grep to be sure, then fix the remaining comment-only references:

🔧 Tool: Grep
Input: {
  "pattern": "Website Design",
  "path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\case-study.ts",
  "output_mode": "content"
}
Good, case-study.ts is already clean. Now fix the remaining comment-only references in the components:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BlogArticleCard.astro",
  "old_string": " * <BlogArticleCard\n *   id=\"article-1\"\n *   title=\"Web Design Trends 2024\"\n *   excerpt=\"Discover the latest trends...\"\n *   featuredImage={{ src: '/blog/trends.jpg', alt: 'Trends' }}\n *   category=\"web-design\"\n *   tags={[{ slug: 'design', name: 'Design' }]}\n *   author={{ name: 'Team' }}\n *   publishedDate=\"2024-01-15\"\n *   readingTime={8}\n *   slug=\"web-design-trends-2024\"\n * />",
  "new_string": " * <BlogArticleCard\n *   id=\"article-1\"\n *   title=\"Service Tips for Spring\"\n *   excerpt=\"Discover the latest tips...\"\n *   featuredImage={{ src: '/blog/tips.jpg', alt: 'Tips' }}\n *   category=\"service-tips\"\n *   tags={[{ slug: 'tips', name: 'Tips' }]}\n *   author={{ name: 'Team' }}\n *   publishedDate=\"2024-01-15\"\n *   readingTime={8}\n *   slug=\"service-tips-for-spring\"\n * />"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BlogFilter.astro",
  "old_string": " *     { label: 'Web Design', value: 'web-design', count: 5 },",
  "new_string": " *     { label: 'Service Tips', value: 'service-tips', count: 5 },"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": " * for Houston Web Services. Includes custom styling, markers for key locations,",
  "new_string": " * for your service business. Includes custom styling, markers for key locations,"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "  ariaLabel = 'Interactive map showing Houston Web Services coverage area including Downtown Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress, and surrounding areas',",
  "new_string": "  ariaLabel = 'Interactive map showing our service coverage area',"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "   * the Houston Web Services coverage area.",
  "new_string": "   * the service business coverage area."
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ServiceCard.astro",
  "old_string": " * <ServiceCard\n *   id=\"web-design\"\n *   title=\"Website Design\"\n *   description=\"Custom, responsive websites tailored to your business.\"\n * />\n * ```\n *\n * @example With icon and CTA\n * ```astro\n * <ServiceCard\n *   id=\"web-design\"\n *   title=\"Website Design\"\n *   description=\"Custom, responsive websites tailored to your business.\"\n *   icon=\"<svg>...</svg>\"\n *   cta={{ text: 'Learn More', href: '/services/web-design' }}\n * />",
  "new_string": " * <ServiceCard\n *   id=\"service-one\"\n *   title=\"Service One\"\n *   description=\"Professional service tailored to your needs.\"\n * />\n * ```\n *\n * @example With icon and CTA\n * ```astro\n * <ServiceCard\n *   id=\"service-one\"\n *   title=\"Service One\"\n *   description=\"Professional service tailored to your needs.\"\n *   icon=\"<svg>...</svg>\"\n *   cta={{ text: 'Learn More', href: '/services/service-one' }}\n * />"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ServicesSection.astro",
  "old_string": " *     { id: 'web', title: 'Web Design', description: '...' },\n *     { id: 'seo', title: 'SEO', description: '...' },",
  "new_string": " *     { id: 'one', title: 'Service One', description: '...' },\n *     { id: 'two', title: 'Service Two', description: '...' },"
}
The linter keeps modifying files. Let me re-read these and edit:

🔧 Tool: Grep
Input: {
  "pattern": "web.?design|Web Design|website.?design|Website Design|Houston Web",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "output_mode": "content",
  "-i": true
}
Only 2 remaining. Let me read and fix them:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BlogArticleCard.astro",
  "offset": 18,
  "limit": 18
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "offset": 315,
  "limit": 10
}
The InteractiveServiceMap line 319 is already fixed ("business service coverage area"). Just need to fix the BlogArticleCard slug:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\BlogArticleCard.astro",
  "old_string": " *   slug=\"web-design-trends-2024\"",
  "new_string": " *   slug=\"tips-for-maintaining-your-home\""
}
Let me do one more verification grep:

🔧 Tool: Grep
Input: {
  "pattern": "web.?design|Web Design|website.?design|Website Design|Houston Web|houstonweb|Fast.?loading.*search|visitors into customers|web.?development|Web Development",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "output_mode": "content",
  "-i": true
}
Zero matches. Let me also check for "Houston" specifically:

🔧 Tool: Grep
Input: {
  "pattern": "Houston",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "output_mode": "content"
}
There are still many Houston references in other files. Let me fix these systematically:

🔧 Tool: Task
Input: {
  "description": "Fix remaining Houston references",
  "prompt": "I need to fix all remaining \"Houston\" references in the codebase at C:\\Users\\James\\Repos\\service-business\\src. These are vestigial references from when this was a Houston-based web design business. Replace them with generic placeholders.\n\nHere are the files and what needs changing:\n\n1. `src/types/contact-cta.ts:37` - \"west Houston businesses\" → generic\n2. `src/config/seo.config.ts:35` - \"Houston\" in a comment example → generic\n3. `src/pages/blog.astro:232` - \"Houston business succeed online\" → generic\n4. `src/components/ContactCTA.astro:5,21,64` - Houston references in comments and default value\n5. `src/components/DifferentiatorCard.astro:20` - \"Houston\" in example comment\n6. `src/types/testimonial.ts:15` - \"Houston, TX\" in comment example\n7. `src/components/InteractiveServiceMap.astro:51,53,111,421,530` - Houston coordinates/labels\n8. `src/components/ServiceRequestForm.astro:415` - \"Houston\" placeholder\n9. `src/components/TestimonialsSection.astro:21` - \"Houston, TX\" in example\n10. `src/components/TrustBadgeCard.astro:43,44` - \"Houston\" in examples\n11. `src/components/TestimonialCard.astro:20` - \"Houston, TX\" in example\n12. `src/components/VideoTestimonialCard.astro:22` - \"Houston, TX\" in example\n13. `src/components/VideoTestimonialsSection.astro:24` - \"Houston, TX\" in example\n\nFor each file:\n- Read it first\n- Replace \"Houston\" references with generic placeholders like \"Your City\", \"Your Area\", \"your local area\", etc.\n- For coordinates, replace with 0,0 or generic defaults\n- For example comments, use \"Your City, ST\" instead of \"Houston, TX\"\n- For the seo.config.ts, update the example comment\n- For InteractiveServiceMap, replace Houston-specific defaults with generic defaults\n\nMake ALL the edits. Don't skip any.",
  "subagent_type": "general-purpose"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\contact-cta.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\blog.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactCTA.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\DifferentiatorCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\testimonial.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ServiceRequestForm.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TestimonialsSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TrustBadgeCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TestimonialCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\VideoTestimonialCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\VideoTestimonialsSection.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\contact-cta.ts",
  "old_string": "  /** Supporting text that mentions west Houston businesses and addresses their needs */",
  "new_string": "  /** Supporting text that mentions local businesses and addresses their needs */"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\seo.config.ts",
  "old_string": "    // Example: { type: 'City', name: 'Houston', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },",
  "new_string": "    // Example: { type: 'City', name: 'Your City', addressLocality: 'Your City', addressRegion: 'ST', addressCountry: 'US' },"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\blog.astro",
  "old_string": "    subheading=\"Let's discuss how we can help your Houston business succeed online.\"",
  "new_string": "    subheading=\"Let's discuss how we can help your business succeed online.\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactCTA.astro",
  "old_string": " * from users before they exit. Targets  Houston businesses with persuasive copy",
  "new_string": " * from users before they exit. Targets local businesses with persuasive copy"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactCTA.astro",
  "old_string": " *   supportingText=\"Join dozens of successful  Houston businesses who trust us...\"",
  "new_string": " *   supportingText=\"Join dozens of successful local businesses who trust us...\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactCTA.astro",
  "old_string": "    value: ' Houston',\n    label: 'Proudly Serving',",
  "new_string": "    value: 'Your Area',\n    label: 'Proudly Serving',"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\DifferentiatorCard.astro",
  "old_string": " *   description=\"I live and work in  Houston, so I understand the local market.\"",
  "new_string": " *   description=\"I live and work in your area, so I understand the local market.\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\testimonial.ts",
  "old_string": "  /** Customer's location (e.g., \"Houston, TX\") */",
  "new_string": "  /** Customer's location (e.g., \"Your City, ST\") */"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "// Houston area coordinates and key service locations\nconst defaultMarkers: MarkerLocation[] = [\n  { name: 'Downtown Houston', lat: 29.7604, lng: -95.3698, isPrimary: true },\n  { name: 'The Woodlands', lat: 30.1658, lng: -95.4613, isPrimary: true },\n  { name: 'Katy', lat: 29.7858, lng: -95.8245, isPrimary: true },\n  { name: 'Sugar Land', lat: 29.6197, lng: -95.6349, isPrimary: true },\n  { name: 'Pearland', lat: 29.5636, lng: -95.2860, isPrimary: true },\n  { name: 'Cypress', lat: 29.9691, lng: -95.6970, isPrimary: true },\n  { name: 'Galleria/Uptown', lat: 29.7399, lng: -95.4610, isPrimary: true },\n  { name: 'Energy Corridor', lat: 29.7773, lng: -95.6286, isPrimary: true },\n  { name: 'Texas Medical Center', lat: 29.7068, lng: -95.3987, isPrimary: true },\n  { name: 'The Heights', lat: 29.7905, lng: -95.4008, isPrimary: true },\n  { name: 'Clear Lake', lat: 29.5474, lng: -95.1113 },\n  { name: 'Humble', lat: 29.9988, lng: -95.2622 },\n];",
  "new_string": "// Default service area coordinates and key service locations\n// Configure: Replace with your actual service area locations and coordinates\nconst defaultMarkers: MarkerLocation[] = [\n  // Configure: Add your service area markers here\n  // Example: { name: 'Downtown', lat: 0, lng: 0, isPrimary: true },\n];"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "  centerLat = 29.7604,\n  centerLng = -95.5,",
  "new_string": "  centerLat = 0,\n  centerLng = 0,"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "      <span class=\"interactive-map__fallback-label\">Greater Houston Metro Area</span>\n      <span class=\"interactive-map__fallback-sublabel\">Serving Harris, Fort Bend, Montgomery, Brazoria, & Galveston Counties</span>",
  "new_string": "      <span class=\"interactive-map__fallback-label\">Our Service Area</span>\n      <span class=\"interactive-map__fallback-sublabel\">Serving your local area and surrounding communities</span>"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "    const centerLat = parseFloat(mapElement.dataset.centerLat || '29.7604');\n    const centerLng = parseFloat(mapElement.dataset.centerLng || '-95.5');",
  "new_string": "    const centerLat = parseFloat(mapElement.dataset.centerLat || '0');\n    const centerLng = parseFloat(mapElement.dataset.centerLng || '0');"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "        center: { lat: 29.7604, lng: -95.3698 }, // Downtown Houston\n        radius: 65000, // ~40 miles radius",
  "new_string": "        center: { lat: centerLat, lng: centerLng }, // Configure: Business center coordinates\n        radius: 65000, // Configure: Service area radius in meters"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\InteractiveServiceMap.astro",
  "old_string": "            <span class=\"interactive-map__fallback-label\" style=\"font-family: var(--font-heading); font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-primary);\">Greater Houston Metro Area</span>\n            <span class=\"interactive-map__fallback-sublabel\" style=\"font-family: var(--font-body); font-size: var(--font-size-sm); color: var(--color-text-secondary); text-align: center;\">Serving Harris, Fort Bend, Montgomery, Brazoria, & Galveston Counties</span>",
  "new_string": "            <span class=\"interactive-map__fallback-label\" style=\"font-family: var(--font-heading); font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-primary);\">Our Service Area</span>\n            <span class=\"interactive-map__fallback-sublabel\" style=\"font-family: var(--font-body); font-size: var(--font-size-sm); color: var(--color-text-secondary); text-align: center;\">Serving your local area and surrounding communities</span>"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ServiceRequestForm.astro",
  "old_string": "              placeholder=\"Houston\"",
  "new_string": "              placeholder=\"Your City\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TestimonialsSection.astro",
  "old_string": " *     { id: 'client-1', name: 'John Smith', location: 'Houston, TX', quote: '...' },",
  "new_string": " *     { id: 'client-1', name: 'John Smith', location: 'Your City, ST', quote: '...' },"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TrustBadgeCard.astro",
  "old_string": " *   title=\"Best of Houston 2024\"\n *   issuer=\"Houston Business Journal\"",
  "new_string": " *   title=\"Best of Your City 2024\"\n *   issuer=\"Local Business Journal\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TestimonialCard.astro",
  "old_string": " *   location=\"Houston, TX\"",
  "new_string": " *   location=\"Your City, ST\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\VideoTestimonialCard.astro",
  "old_string": " *   location=\"Houston, TX\"",
  "new_string": " *   location=\"Your City, ST\""
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\VideoTestimonialsSection.astro",
  "old_string": " *       location: 'Houston, TX',",
  "new_string": " *       location: 'Your City, ST',"
}

🔧 Tool: Grep
Input: {
  "pattern": "Houston",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "output_mode": "content"
}


Now let me do a final comprehensive verification and build:

🔧 Tool: Grep
Input: {
  "pattern": "Houston|web.?design|Web Design|website.?design|Website Design|houstonweb|Fast.?loading.*search|visitors into customers|web.?development|Web Development",
  "path": "C:\\Users\\James\\Repos\\service-business\\src",
  "output_mode": "content",
  "-i": true
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\service-business\" && npm run build 2>&1 | tail -30",
  "description": "Build the project to verify",
  "timeout": 120000
}
All checks pass. Let me update the todo list:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Phase 1: Hero Section & Homepage Cleanup (T001-T004)",
      "status": "completed",
      "activeForm": "Cleaning up Hero Section & Homepage"
    },
    {
      "content": "Phase 2: Services Page Overhaul (T005-T007)",
      "status": "completed",
      "activeForm": "Overhauling Services Page"
    },
    {
      "content": "Phase 3: Contact Form & Type Definitions (T008-T009)",
      "status": "completed",
      "activeForm": "Updating Contact Form & Types"
    },
    {
      "content": "Phase 4: Blog, Resources & Checklist Configs (T010-T015)",
      "status": "completed",
      "activeForm": "Updating Blog, Resources & Checklist Configs"
    },
    {
      "content": "Phase 5: Component Default Text & Breadcrumbs (T016-T018)",
      "status": "completed",
      "activeForm": "Updating Component Default Text & Breadcrumbs"
    },
    {
      "content": "Phase 6: SEO Config & Documentation (T019-T020)",
      "status": "completed",
      "activeForm": "Updating SEO Config & Documentation"
    },
    {
      "content": "Verify: grep for remaining web-design references & build",
      "status": "completed",
      "activeForm": "Verifying no remaining web-design references"
    }
  ]
}
All tasks are complete. Here's a summary of everything that was done:

## Implementation Summary

### ✅ All Success Metrics Met
- **Zero occurrences** of "web design," "website design," "web development," "Houston Web Services," or "Fast-loading, search-friendly" in any `src/` file
- **Build succeeds** — 17 pages built in 2.71s with no errors
- All service offerings use **generic placeholder names** (Service One, Two, Three)
- Contact form project types are **generic service inquiry types**
- Blog categories and tags are **generic** (no web-design-specific categories)

### Changes by Phase

**Phase 1 — Hero & Homepage:** Updated CSS comment headers in `globals.css`, `variables.css`, `performance.css`, and `HeroSection.astro` from "HOUSTON WEB SERVICES" to "SERVICE BUSINESS STARTER"

**Phase 2 — Services Page:** Replaced 4 web-design preview cards with 3 generic service cards; updated section IDs from `website-design`/`maintenance`/`hosting` to `service-one`/`service-two`/`service-three`; removed 2 extra detail sections (`services[3]` and `services[4]`); updated grid from 5 to 3 columns; updated stats from "5+" to "3+" services

**Phase 3 — Contact Form:** Replaced `ProjectType` union from 9 web-design types to 5 generic types (`service-inquiry`, `estimate-request`, `maintenance-request`, `consultation`, `other`); updated `formatProjectType` labels in `ContactForm.astro`; replaced "Houston Web Services" submit hint with "our team"

**Phase 4 — Blog/Resources/Checklists:** Replaced `COMMON_RESOURCE_TAGS` and `COMMON_CHECKLIST_TAGS` with generic service business tags; updated `ServiceType` union and `SERVICE_TYPE_LABELS` from web-design types to generic service types

**Phase 5 — Components:** Fixed remaining JSDoc examples in `BlogArticleCard`, `BlogFilter`, `ServiceCard`, `ServicesSection`, `Breadcrumb` (comment path example)

**Phase 6 — SEO & Docs:** Updated all `SEO_COMPONENT.md` examples from Houston Web Services/web design to generic business examples; fixed address examples

**Bonus cleanup:** Fixed all Houston-specific references across 13+ additional component files including `InteractiveServiceMap`, `ContactCTA`, `DifferentiatorCard`, `TestimonialCard`, `TrustBadgeCard`, `ServiceRequestForm`, `blog.astro`, and others.