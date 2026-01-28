/**
 * Service Checklists Configuration
 *
 * This file contains the configuration for downloadable service preparation checklists
 * and maintenance guides. These are gated content items that generate email leads.
 *
 * Instructions for updating:
 * 1. To add new checklists, add to the SERVICE_CHECKLISTS array below
 * 2. Each checklist should include all required fields
 * 3. PDF files should be placed in /public/resources/downloads/checklists/
 * 4. Thumbnails should be placed in /public/resources/thumbnails/checklists/
 */

import type {
  ServiceChecklist,
  ChecklistTag,
  ChecklistFilterOption,
} from '../types/service-checklist';

/**
 * Common tags used across checklists
 */
export const COMMON_CHECKLIST_TAGS: Record<string, ChecklistTag> = {
  webDesign: { slug: 'web-design', name: 'Web Design' },
  webDevelopment: { slug: 'web-development', name: 'Web Development' },
  seo: { slug: 'seo', name: 'SEO' },
  performance: { slug: 'performance', name: 'Performance' },
  security: { slug: 'security', name: 'Security' },
  hosting: { slug: 'hosting', name: 'Hosting' },
  maintenance: { slug: 'maintenance', name: 'Maintenance' },
  smallBusiness: { slug: 'small-business', name: 'Small Business' },
  ecommerce: { slug: 'ecommerce', name: 'E-Commerce' },
  wordpress: { slug: 'wordpress', name: 'WordPress' },
  backup: { slug: 'backup', name: 'Backup' },
  updates: { slug: 'updates', name: 'Updates' },
  content: { slug: 'content', name: 'Content' },
  analytics: { slug: 'analytics', name: 'Analytics' },
  mobile: { slug: 'mobile', name: 'Mobile' },
  accessibility: { slug: 'accessibility', name: 'Accessibility' },
};

/**
 * Service Checklists
 * Sorted by publishedDate (newest first) when rendered
 */
export const SERVICE_CHECKLISTS: ServiceChecklist[] = [
  {
    id: 'website-maintenance-monthly-checklist',
    slug: 'website-maintenance-monthly-checklist',
    title: 'Monthly Website Maintenance Checklist',
    description: 'Keep your website running smoothly with this comprehensive monthly maintenance checklist. Covers security, backups, performance, and content updates.',
    longDescription: `<p>Regular website maintenance is crucial for security, performance, and user experience. This comprehensive monthly checklist ensures you never miss a critical task.</p>
    <p>Whether you manage your own website or oversee a team, this checklist provides a systematic approach to keeping your site healthy and secure.</p>`,
    featuredImage: {
      src: '/resources/thumbnails/checklists/monthly-maintenance-checklist.svg',
      alt: 'Monthly website maintenance checklist preview',
      width: 400,
      height: 300,
    },
    category: 'maintenance',
    serviceType: 'maintenance',
    tags: [
      COMMON_CHECKLIST_TAGS.maintenance,
      COMMON_CHECKLIST_TAGS.security,
      COMMON_CHECKLIST_TAGS.backup,
      COMMON_CHECKLIST_TAGS.performance,
    ],
    sections: [
      {
        id: 'security-checks',
        title: 'Security Checks',
        description: 'Essential security tasks to protect your website',
        items: [
          { id: 'sec-1', text: 'Update CMS core to latest version', priority: 1, section: 'security-checks' },
          { id: 'sec-2', text: 'Update all plugins and extensions', priority: 1, section: 'security-checks' },
          { id: 'sec-3', text: 'Update website themes', priority: 2, section: 'security-checks' },
          { id: 'sec-4', text: 'Review and remove unused plugins', priority: 2, section: 'security-checks' },
          { id: 'sec-5', text: 'Check SSL certificate expiration', priority: 1, section: 'security-checks' },
          { id: 'sec-6', text: 'Review user accounts and permissions', priority: 2, section: 'security-checks' },
          { id: 'sec-7', text: 'Scan for malware and vulnerabilities', priority: 1, section: 'security-checks' },
          { id: 'sec-8', text: 'Review security logs for suspicious activity', priority: 2, section: 'security-checks' },
        ],
      },
      {
        id: 'backup-recovery',
        title: 'Backup & Recovery',
        description: 'Ensure your data is safe and recoverable',
        items: [
          { id: 'bak-1', text: 'Verify automated backups are running', priority: 1, section: 'backup-recovery' },
          { id: 'bak-2', text: 'Test backup restoration process', priority: 1, section: 'backup-recovery' },
          { id: 'bak-3', text: 'Download and store offsite backup', priority: 2, section: 'backup-recovery' },
          { id: 'bak-4', text: 'Review backup retention policy', priority: 3, section: 'backup-recovery' },
          { id: 'bak-5', text: 'Verify database backup integrity', priority: 1, section: 'backup-recovery' },
        ],
      },
      {
        id: 'performance',
        title: 'Performance Optimization',
        description: 'Keep your website fast and responsive',
        items: [
          { id: 'perf-1', text: 'Run page speed tests (Google PageSpeed)', priority: 1, section: 'performance' },
          { id: 'perf-2', text: 'Clear and optimize caches', priority: 2, section: 'performance' },
          { id: 'perf-3', text: 'Optimize new images uploaded this month', priority: 2, section: 'performance' },
          { id: 'perf-4', text: 'Review and clean up database', priority: 3, section: 'performance' },
          { id: 'perf-5', text: 'Check server response time', priority: 2, section: 'performance' },
          { id: 'perf-6', text: 'Review CDN performance metrics', priority: 3, section: 'performance' },
        ],
      },
      {
        id: 'content-seo',
        title: 'Content & SEO',
        description: 'Maintain fresh, optimized content',
        items: [
          { id: 'cont-1', text: 'Check for broken links (404 errors)', priority: 1, section: 'content-seo' },
          { id: 'cont-2', text: 'Update outdated content and information', priority: 2, section: 'content-seo' },
          { id: 'cont-3', text: 'Review and respond to new comments', priority: 3, section: 'content-seo' },
          { id: 'cont-4', text: 'Check Google Search Console for issues', priority: 1, section: 'content-seo' },
          { id: 'cont-5', text: 'Review analytics for traffic trends', priority: 2, section: 'content-seo' },
          { id: 'cont-6', text: 'Update sitemap if needed', priority: 3, section: 'content-seo' },
        ],
      },
      {
        id: 'functionality',
        title: 'Functionality Testing',
        description: 'Ensure all features work correctly',
        items: [
          { id: 'func-1', text: 'Test all contact forms', priority: 1, section: 'functionality' },
          { id: 'func-2', text: 'Test checkout/payment process (if applicable)', priority: 1, section: 'functionality' },
          { id: 'func-3', text: 'Test user registration and login', priority: 2, section: 'functionality' },
          { id: 'func-4', text: 'Verify email notifications are working', priority: 2, section: 'functionality' },
          { id: 'func-5', text: 'Test on multiple browsers', priority: 2, section: 'functionality' },
          { id: 'func-6', text: 'Test on mobile devices', priority: 1, section: 'functionality' },
        ],
      },
    ],
    downloadUrl: '/resources/downloads/checklists/monthly-maintenance-checklist-preview.pdf',
    gatedDownloadUrl: '/resources/downloads/checklists/monthly-maintenance-checklist-full.pdf',
    fileSize: '1.8 MB',
    estimatedTime: '2-3 hours',
    publishedDate: '2024-01-20T10:00:00Z',
    featured: true,
    downloadCount: 2450,
    isGated: true,
    relatedChecklistIds: ['website-security-audit-checklist', 'website-launch-preparation-checklist'],
  },
  {
    id: 'website-launch-preparation-checklist',
    slug: 'website-launch-preparation-checklist',
    title: 'Website Launch Preparation Checklist',
    description: 'Ensure a flawless website launch with this comprehensive 60-point checklist. Covers pre-launch testing, SEO setup, security, and go-live procedures.',
    longDescription: `<p>Launching a website involves hundreds of small details that can make or break the user experience. This checklist ensures nothing falls through the cracks.</p>
    <p>From final content reviews to technical SEO setup, security hardening to performance optimization, every critical step is covered.</p>`,
    featuredImage: {
      src: '/resources/thumbnails/checklists/website-launch-checklist.svg',
      alt: 'Website launch preparation checklist preview',
      width: 400,
      height: 300,
    },
    category: 'launch',
    serviceType: 'web-development',
    tags: [
      COMMON_CHECKLIST_TAGS.webDevelopment,
      COMMON_CHECKLIST_TAGS.seo,
      COMMON_CHECKLIST_TAGS.performance,
      COMMON_CHECKLIST_TAGS.security,
    ],
    sections: [
      {
        id: 'content-review',
        title: 'Content Review',
        description: 'Final content checks before launch',
        items: [
          { id: 'cr-1', text: 'Proofread all page content', priority: 1, section: 'content-review' },
          { id: 'cr-2', text: 'Verify all images have alt text', priority: 1, section: 'content-review' },
          { id: 'cr-3', text: 'Check all internal links work', priority: 1, section: 'content-review' },
          { id: 'cr-4', text: 'Verify external links open in new tabs', priority: 2, section: 'content-review' },
          { id: 'cr-5', text: 'Review contact information accuracy', priority: 1, section: 'content-review' },
          { id: 'cr-6', text: 'Check copyright year is current', priority: 2, section: 'content-review' },
          { id: 'cr-7', text: 'Verify privacy policy is complete', priority: 1, section: 'content-review' },
          { id: 'cr-8', text: 'Review terms of service', priority: 2, section: 'content-review' },
        ],
      },
      {
        id: 'seo-setup',
        title: 'SEO Setup',
        description: 'Search engine optimization essentials',
        items: [
          { id: 'seo-1', text: 'Set unique title tags for each page', priority: 1, section: 'seo-setup' },
          { id: 'seo-2', text: 'Write meta descriptions for all pages', priority: 1, section: 'seo-setup' },
          { id: 'seo-3', text: 'Implement proper heading hierarchy (H1-H6)', priority: 1, section: 'seo-setup' },
          { id: 'seo-4', text: 'Create and submit XML sitemap', priority: 1, section: 'seo-setup' },
          { id: 'seo-5', text: 'Set up robots.txt file', priority: 1, section: 'seo-setup' },
          { id: 'seo-6', text: 'Implement canonical URLs', priority: 2, section: 'seo-setup' },
          { id: 'seo-7', text: 'Add structured data/schema markup', priority: 2, section: 'seo-setup' },
          { id: 'seo-8', text: 'Set up Google Search Console', priority: 1, section: 'seo-setup' },
          { id: 'seo-9', text: 'Set up Google Analytics', priority: 1, section: 'seo-setup' },
          { id: 'seo-10', text: 'Configure 301 redirects for old URLs', priority: 1, section: 'seo-setup' },
        ],
      },
      {
        id: 'technical-checks',
        title: 'Technical Checks',
        description: 'Technical requirements and testing',
        items: [
          { id: 'tech-1', text: 'Install and configure SSL certificate', priority: 1, section: 'technical-checks' },
          { id: 'tech-2', text: 'Force HTTPS redirect', priority: 1, section: 'technical-checks' },
          { id: 'tech-3', text: 'Test website on all major browsers', priority: 1, section: 'technical-checks' },
          { id: 'tech-4', text: 'Test responsive design on mobile devices', priority: 1, section: 'technical-checks' },
          { id: 'tech-5', text: 'Verify favicon is set', priority: 2, section: 'technical-checks' },
          { id: 'tech-6', text: 'Check 404 error page is custom', priority: 2, section: 'technical-checks' },
          { id: 'tech-7', text: 'Minify CSS and JavaScript files', priority: 2, section: 'technical-checks' },
          { id: 'tech-8', text: 'Enable browser caching', priority: 2, section: 'technical-checks' },
          { id: 'tech-9', text: 'Optimize images for web', priority: 1, section: 'technical-checks' },
          { id: 'tech-10', text: 'Test page load speed', priority: 1, section: 'technical-checks' },
        ],
      },
      {
        id: 'functionality-testing',
        title: 'Functionality Testing',
        description: 'Test all interactive features',
        items: [
          { id: 'ft-1', text: 'Test all forms and submissions', priority: 1, section: 'functionality-testing' },
          { id: 'ft-2', text: 'Verify form confirmation emails', priority: 1, section: 'functionality-testing' },
          { id: 'ft-3', text: 'Test search functionality', priority: 2, section: 'functionality-testing' },
          { id: 'ft-4', text: 'Verify social sharing works', priority: 2, section: 'functionality-testing' },
          { id: 'ft-5', text: 'Test newsletter subscription', priority: 2, section: 'functionality-testing' },
          { id: 'ft-6', text: 'Check all download links work', priority: 1, section: 'functionality-testing' },
        ],
      },
      {
        id: 'go-live',
        title: 'Go-Live Procedures',
        description: 'Final steps for launch',
        items: [
          { id: 'gl-1', text: 'Create full backup before launch', priority: 1, section: 'go-live' },
          { id: 'gl-2', text: 'Update DNS records', priority: 1, section: 'go-live' },
          { id: 'gl-3', text: 'Remove "noindex" from robots.txt', priority: 1, section: 'go-live' },
          { id: 'gl-4', text: 'Submit sitemap to search engines', priority: 1, section: 'go-live' },
          { id: 'gl-5', text: 'Announce launch on social media', priority: 3, section: 'go-live' },
          { id: 'gl-6', text: 'Monitor analytics post-launch', priority: 1, section: 'go-live' },
          { id: 'gl-7', text: 'Set up uptime monitoring', priority: 2, section: 'go-live' },
        ],
      },
    ],
    downloadUrl: '/resources/downloads/checklists/website-launch-checklist-preview.pdf',
    gatedDownloadUrl: '/resources/downloads/checklists/website-launch-checklist-full.pdf',
    fileSize: '2.4 MB',
    estimatedTime: '4-6 hours',
    publishedDate: '2024-01-15T09:00:00Z',
    featured: true,
    downloadCount: 3120,
    isGated: true,
    relatedChecklistIds: ['website-maintenance-monthly-checklist', 'seo-audit-checklist'],
  },
  {
    id: 'website-security-audit-checklist',
    slug: 'website-security-audit-checklist',
    title: 'Website Security Audit Checklist',
    description: 'Comprehensive security audit checklist to identify vulnerabilities and protect your website from threats. Perfect for quarterly security reviews.',
    longDescription: `<p>Website security is not a one-time task but an ongoing process. This checklist helps you systematically audit your website's security posture.</p>
    <p>From authentication and access controls to data protection and incident response, cover all critical security areas.</p>`,
    featuredImage: {
      src: '/resources/thumbnails/checklists/security-audit-checklist.svg',
      alt: 'Website security audit checklist preview',
      width: 400,
      height: 300,
    },
    category: 'security',
    serviceType: 'maintenance',
    tags: [
      COMMON_CHECKLIST_TAGS.security,
      COMMON_CHECKLIST_TAGS.maintenance,
      COMMON_CHECKLIST_TAGS.hosting,
    ],
    sections: [
      {
        id: 'access-control',
        title: 'Access Control',
        description: 'User access and authentication security',
        items: [
          { id: 'ac-1', text: 'Review all user accounts and roles', priority: 1, section: 'access-control' },
          { id: 'ac-2', text: 'Remove inactive user accounts', priority: 1, section: 'access-control' },
          { id: 'ac-3', text: 'Enforce strong password policies', priority: 1, section: 'access-control' },
          { id: 'ac-4', text: 'Enable two-factor authentication', priority: 1, section: 'access-control' },
          { id: 'ac-5', text: 'Review admin access permissions', priority: 1, section: 'access-control' },
          { id: 'ac-6', text: 'Audit login attempt logs', priority: 2, section: 'access-control' },
        ],
      },
      {
        id: 'software-security',
        title: 'Software Security',
        description: 'CMS and plugin security',
        items: [
          { id: 'ss-1', text: 'Update CMS to latest version', priority: 1, section: 'software-security' },
          { id: 'ss-2', text: 'Update all plugins/extensions', priority: 1, section: 'software-security' },
          { id: 'ss-3', text: 'Remove unused plugins and themes', priority: 1, section: 'software-security' },
          { id: 'ss-4', text: 'Verify plugin sources are reputable', priority: 2, section: 'software-security' },
          { id: 'ss-5', text: 'Check for known vulnerabilities', priority: 1, section: 'software-security' },
        ],
      },
      {
        id: 'data-protection',
        title: 'Data Protection',
        description: 'Protect sensitive data',
        items: [
          { id: 'dp-1', text: 'Verify SSL certificate is valid', priority: 1, section: 'data-protection' },
          { id: 'dp-2', text: 'Ensure all forms use HTTPS', priority: 1, section: 'data-protection' },
          { id: 'dp-3', text: 'Review data encryption practices', priority: 2, section: 'data-protection' },
          { id: 'dp-4', text: 'Audit database access controls', priority: 2, section: 'data-protection' },
          { id: 'dp-5', text: 'Verify PCI compliance (if applicable)', priority: 1, section: 'data-protection' },
        ],
      },
      {
        id: 'backup-recovery',
        title: 'Backup & Recovery',
        description: 'Data backup and disaster recovery',
        items: [
          { id: 'br-1', text: 'Verify backups run automatically', priority: 1, section: 'backup-recovery' },
          { id: 'br-2', text: 'Test backup restoration', priority: 1, section: 'backup-recovery' },
          { id: 'br-3', text: 'Store backups in multiple locations', priority: 2, section: 'backup-recovery' },
          { id: 'br-4', text: 'Document disaster recovery procedures', priority: 2, section: 'backup-recovery' },
        ],
      },
      {
        id: 'monitoring',
        title: 'Security Monitoring',
        description: 'Ongoing security monitoring',
        items: [
          { id: 'mon-1', text: 'Set up security scanning', priority: 1, section: 'monitoring' },
          { id: 'mon-2', text: 'Configure intrusion detection', priority: 2, section: 'monitoring' },
          { id: 'mon-3', text: 'Enable file integrity monitoring', priority: 2, section: 'monitoring' },
          { id: 'mon-4', text: 'Set up security alerts', priority: 1, section: 'monitoring' },
          { id: 'mon-5', text: 'Review security logs regularly', priority: 2, section: 'monitoring' },
        ],
      },
    ],
    downloadUrl: '/resources/downloads/checklists/security-audit-checklist-preview.pdf',
    gatedDownloadUrl: '/resources/downloads/checklists/security-audit-checklist-full.pdf',
    fileSize: '1.5 MB',
    estimatedTime: '3-4 hours',
    publishedDate: '2024-01-10T11:00:00Z',
    featured: false,
    downloadCount: 1890,
    isGated: true,
    relatedChecklistIds: ['website-maintenance-monthly-checklist', 'website-launch-preparation-checklist'],
  },
  {
    id: 'seo-audit-checklist',
    slug: 'seo-audit-checklist',
    title: 'SEO Audit Checklist',
    description: 'Complete SEO audit checklist to improve your search engine rankings. Covers technical SEO, on-page optimization, content, and backlinks.',
    longDescription: `<p>Search engine optimization is crucial for driving organic traffic to your website. This comprehensive audit checklist helps identify opportunities and issues.</p>
    <p>From technical foundations to content optimization, ensure your website is set up for search success.</p>`,
    featuredImage: {
      src: '/resources/thumbnails/checklists/seo-audit-checklist.svg',
      alt: 'SEO audit checklist preview',
      width: 400,
      height: 300,
    },
    category: 'optimization',
    serviceType: 'seo',
    tags: [
      COMMON_CHECKLIST_TAGS.seo,
      COMMON_CHECKLIST_TAGS.content,
      COMMON_CHECKLIST_TAGS.analytics,
      COMMON_CHECKLIST_TAGS.performance,
    ],
    sections: [
      {
        id: 'technical-seo',
        title: 'Technical SEO',
        description: 'Technical foundation for SEO success',
        items: [
          { id: 'tseo-1', text: 'Check site crawlability with robots.txt', priority: 1, section: 'technical-seo' },
          { id: 'tseo-2', text: 'Review XML sitemap accuracy', priority: 1, section: 'technical-seo' },
          { id: 'tseo-3', text: 'Verify mobile-friendliness', priority: 1, section: 'technical-seo' },
          { id: 'tseo-4', text: 'Check page load speed', priority: 1, section: 'technical-seo' },
          { id: 'tseo-5', text: 'Verify SSL implementation', priority: 1, section: 'technical-seo' },
          { id: 'tseo-6', text: 'Check for duplicate content', priority: 1, section: 'technical-seo' },
          { id: 'tseo-7', text: 'Review URL structure', priority: 2, section: 'technical-seo' },
          { id: 'tseo-8', text: 'Implement canonical tags', priority: 2, section: 'technical-seo' },
        ],
      },
      {
        id: 'on-page-seo',
        title: 'On-Page SEO',
        description: 'Page-level optimization',
        items: [
          { id: 'opseo-1', text: 'Optimize title tags (unique, keyword-rich)', priority: 1, section: 'on-page-seo' },
          { id: 'opseo-2', text: 'Write compelling meta descriptions', priority: 1, section: 'on-page-seo' },
          { id: 'opseo-3', text: 'Use proper heading hierarchy', priority: 1, section: 'on-page-seo' },
          { id: 'opseo-4', text: 'Optimize images (alt text, compression)', priority: 1, section: 'on-page-seo' },
          { id: 'opseo-5', text: 'Implement internal linking strategy', priority: 2, section: 'on-page-seo' },
          { id: 'opseo-6', text: 'Add structured data markup', priority: 2, section: 'on-page-seo' },
        ],
      },
      {
        id: 'content-audit',
        title: 'Content Audit',
        description: 'Content quality and optimization',
        items: [
          { id: 'ca-1', text: 'Identify thin or low-quality content', priority: 1, section: 'content-audit' },
          { id: 'ca-2', text: 'Check for keyword cannibalization', priority: 2, section: 'content-audit' },
          { id: 'ca-3', text: 'Review content freshness', priority: 2, section: 'content-audit' },
          { id: 'ca-4', text: 'Optimize for featured snippets', priority: 3, section: 'content-audit' },
          { id: 'ca-5', text: 'Add FAQ sections where relevant', priority: 3, section: 'content-audit' },
        ],
      },
      {
        id: 'analytics-tracking',
        title: 'Analytics & Tracking',
        description: 'Measurement and monitoring',
        items: [
          { id: 'at-1', text: 'Verify Google Analytics setup', priority: 1, section: 'analytics-tracking' },
          { id: 'at-2', text: 'Check Google Search Console', priority: 1, section: 'analytics-tracking' },
          { id: 'at-3', text: 'Set up conversion tracking', priority: 1, section: 'analytics-tracking' },
          { id: 'at-4', text: 'Review organic traffic trends', priority: 2, section: 'analytics-tracking' },
          { id: 'at-5', text: 'Monitor keyword rankings', priority: 2, section: 'analytics-tracking' },
        ],
      },
    ],
    downloadUrl: '/resources/downloads/checklists/seo-audit-checklist-preview.pdf',
    gatedDownloadUrl: '/resources/downloads/checklists/seo-audit-checklist-full.pdf',
    fileSize: '2.1 MB',
    estimatedTime: '4-5 hours',
    publishedDate: '2024-01-05T10:00:00Z',
    featured: false,
    downloadCount: 2780,
    isGated: true,
    relatedChecklistIds: ['website-launch-preparation-checklist', 'website-maintenance-monthly-checklist'],
  },
  {
    id: 'ecommerce-launch-checklist',
    slug: 'ecommerce-launch-checklist',
    title: 'E-Commerce Store Launch Checklist',
    description: 'Launch your online store with confidence using this comprehensive e-commerce checklist. Covers products, payments, shipping, and legal requirements.',
    longDescription: `<p>Launching an e-commerce store requires careful attention to many details that directly impact your ability to make sales and serve customers.</p>
    <p>From product setup to payment processing, shipping configuration to legal compliance, this checklist ensures you\'re ready to sell.</p>`,
    featuredImage: {
      src: '/resources/thumbnails/checklists/ecommerce-launch-checklist.svg',
      alt: 'E-commerce store launch checklist preview',
      width: 400,
      height: 300,
    },
    category: 'launch',
    serviceType: 'ecommerce',
    tags: [
      COMMON_CHECKLIST_TAGS.ecommerce,
      COMMON_CHECKLIST_TAGS.webDevelopment,
      COMMON_CHECKLIST_TAGS.security,
    ],
    sections: [
      {
        id: 'product-setup',
        title: 'Product Setup',
        description: 'Product catalog configuration',
        items: [
          { id: 'ps-1', text: 'Add all products with descriptions', priority: 1, section: 'product-setup' },
          { id: 'ps-2', text: 'Upload high-quality product images', priority: 1, section: 'product-setup' },
          { id: 'ps-3', text: 'Set accurate pricing and inventory', priority: 1, section: 'product-setup' },
          { id: 'ps-4', text: 'Configure product categories', priority: 1, section: 'product-setup' },
          { id: 'ps-5', text: 'Set up product variants (size, color)', priority: 2, section: 'product-setup' },
          { id: 'ps-6', text: 'Write SEO-optimized product titles', priority: 2, section: 'product-setup' },
        ],
      },
      {
        id: 'payment-processing',
        title: 'Payment Processing',
        description: 'Secure payment configuration',
        items: [
          { id: 'pp-1', text: 'Set up payment gateway', priority: 1, section: 'payment-processing' },
          { id: 'pp-2', text: 'Test checkout process end-to-end', priority: 1, section: 'payment-processing' },
          { id: 'pp-3', text: 'Verify PCI compliance', priority: 1, section: 'payment-processing' },
          { id: 'pp-4', text: 'Configure tax calculations', priority: 1, section: 'payment-processing' },
          { id: 'pp-5', text: 'Set up order confirmation emails', priority: 1, section: 'payment-processing' },
        ],
      },
      {
        id: 'shipping-setup',
        title: 'Shipping Configuration',
        description: 'Shipping and fulfillment setup',
        items: [
          { id: 'ship-1', text: 'Configure shipping zones and rates', priority: 1, section: 'shipping-setup' },
          { id: 'ship-2', text: 'Set up carrier integrations', priority: 2, section: 'shipping-setup' },
          { id: 'ship-3', text: 'Define shipping policies', priority: 1, section: 'shipping-setup' },
          { id: 'ship-4', text: 'Test shipping calculations', priority: 1, section: 'shipping-setup' },
        ],
      },
      {
        id: 'legal-compliance',
        title: 'Legal & Compliance',
        description: 'Legal requirements for online selling',
        items: [
          { id: 'lc-1', text: 'Create privacy policy', priority: 1, section: 'legal-compliance' },
          { id: 'lc-2', text: 'Write terms of service', priority: 1, section: 'legal-compliance' },
          { id: 'lc-3', text: 'Add return/refund policy', priority: 1, section: 'legal-compliance' },
          { id: 'lc-4', text: 'Ensure GDPR compliance (if applicable)', priority: 1, section: 'legal-compliance' },
          { id: 'lc-5', text: 'Set up cookie consent', priority: 2, section: 'legal-compliance' },
        ],
      },
    ],
    downloadUrl: '/resources/downloads/checklists/ecommerce-launch-checklist-preview.pdf',
    gatedDownloadUrl: '/resources/downloads/checklists/ecommerce-launch-checklist-full.pdf',
    fileSize: '2.0 MB',
    estimatedTime: '5-8 hours',
    publishedDate: '2023-12-20T09:00:00Z',
    featured: false,
    downloadCount: 1560,
    isGated: true,
    relatedChecklistIds: ['website-launch-preparation-checklist', 'website-security-audit-checklist'],
  },
];

/**
 * Page configuration for the service checklists section
 */
export const SERVICE_CHECKLISTS_PAGE_CONFIG = {
  /** Main heading */
  heading: 'Service Checklists & Guides',
  /** Subheading/description */
  subheading: 'Download our free preparation checklists and maintenance guides to keep your website running smoothly. Get expert guidance for your next project.',
  /** Number of checklists per page */
  checklistsPerPage: 6,
  /** Section ID for anchor linking */
  id: 'service-checklists',
  /** Enable filtering */
  enableFiltering: true,
  /** Show featured first */
  showFeaturedFirst: true,
  /** CTA for gated content */
  gatedContentCTA: {
    heading: 'Get the Full Checklist',
    description: 'Enter your email to download the complete checklist with all items, printable format, and bonus tips.',
    buttonText: 'Download Now',
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all checklists
 */
export function getAllChecklists(): ServiceChecklist[] {
  return SERVICE_CHECKLISTS;
}

/**
 * Get a single checklist by ID
 */
export function getChecklistById(id: string): ServiceChecklist | undefined {
  return SERVICE_CHECKLISTS.find(checklist => checklist.id === id);
}

/**
 * Get a single checklist by slug
 */
export function getChecklistBySlug(slug: string): ServiceChecklist | undefined {
  return SERVICE_CHECKLISTS.find(checklist => checklist.slug === slug);
}

/**
 * Get checklists by category
 */
export function getChecklistsByCategory(category: string): ServiceChecklist[] {
  if (category === 'all') return SERVICE_CHECKLISTS;
  return SERVICE_CHECKLISTS.filter(checklist => checklist.category === category);
}

/**
 * Get checklists by service type
 */
export function getChecklistsByServiceType(serviceType: string): ServiceChecklist[] {
  if (serviceType === 'all') return SERVICE_CHECKLISTS;
  return SERVICE_CHECKLISTS.filter(checklist => checklist.serviceType === serviceType);
}

/**
 * Get featured checklists
 */
export function getFeaturedChecklists(): ServiceChecklist[] {
  return SERVICE_CHECKLISTS.filter(checklist => checklist.featured);
}

/**
 * Sort checklists by date (newest first)
 */
export function sortChecklistsByDate(checklists: ServiceChecklist[]): ServiceChecklist[] {
  return [...checklists].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

/**
 * Sort checklists by downloads (most popular first)
 */
export function sortChecklistsByDownloads(checklists: ServiceChecklist[]): ServiceChecklist[] {
  return [...checklists].sort((a, b) =>
    (b.downloadCount || 0) - (a.downloadCount || 0)
  );
}

/**
 * Get total items in a checklist
 */
export function getChecklistTotalItems(checklist: ServiceChecklist): number {
  if (checklist.totalItems) return checklist.totalItems;
  return checklist.sections.reduce((total, section) => total + section.items.length, 0);
}

/**
 * Get all unique tags from checklists
 */
export function getAllChecklistTags(): ChecklistTag[] {
  const tagMap = new Map<string, ChecklistTag>();
  SERVICE_CHECKLISTS.forEach(checklist => {
    checklist.tags.forEach(tag => {
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, tag);
      }
    });
  });
  return Array.from(tagMap.values());
}

/**
 * Paginate checklists
 */
export function paginateChecklists(
  checklists: ServiceChecklist[],
  page: number,
  perPage: number
): { checklists: ServiceChecklist[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(checklists.length / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    checklists: checklists.slice(start, end),
    totalPages,
    currentPage,
  };
}

/**
 * Get related checklists
 */
export function getRelatedChecklists(checklist: ServiceChecklist): ServiceChecklist[] {
  if (!checklist.relatedChecklistIds || checklist.relatedChecklistIds.length === 0) {
    return [];
  }
  return checklist.relatedChecklistIds
    .map(id => getChecklistById(id))
    .filter((c): c is ServiceChecklist => c !== undefined);
}
