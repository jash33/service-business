
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure for implementing a license-insurance-verification feature. I need to understand:\n\n1. What framework/language is being used (React, Vue, Angular, etc.)\n2. The project structure (src folder organization, components, pages, etc.)\n3. Any existing patterns for displaying business information or verification features\n4. Styling approach (CSS modules, Tailwind, styled-components, etc.)\n5. Any existing types/interfaces related to business, licenses, or verification\n\nPlease search thoroughly and provide a comprehensive overview of the codebase structure and relevant existing patterns.",
  "subagent_type": "Explore"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\service-business\" -type f -name \"package.json\" | head -5",
  "description": "Locate package.json files to understand project configuration"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro",
  "path": "C:\\Users\\James\\Repos\\service-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{ts,tsx,js,jsx}",
  "path": "C:\\Users\\James\\Repos\\service-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.css",
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
  "command": "ls -la \"C:\\Users\\James\\Repos\\service-business\\src\\\" | head -30",
  "description": "List main src directory structure"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\service-business\\src\"",
  "description": "List main src directory structure"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\index.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\trust-badge.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\service.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\contact-form.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TrustBadgesSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TrustBadgeCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\variables.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\globals.css",
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ContactForm.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ServiceCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\accreditations.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\layouts\\Layout.astro",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\service-business\\src\\pages\" | head -20",
  "description": "List pages directory structure"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\service-business\\src\\components\" | head -40",
  "description": "List components directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\analytics.ts",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\service-business\\src\" -type f -name \"*.ts\" -o -name \"*.tsx\" | wc -l",
  "description": "Count TypeScript files in src"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\utils\\validation.ts"
}

🔧 Tool: Bash
Input: {
  "command": "grep -r \"modal\\|Modal\\|popup\\|Popup\\|dialog\\|Dialog\" \"C:\\Users\\James\\Repos\\service-business\\src\\components\" --include=\"*.astro\" | head -20",
  "description": "Search for modal/dialog patterns in components"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\ExitIntentPopup.astro",
  "limit": 100
}
Excellent! Now I have a comprehensive understanding of the codebase. Let me read the key existing files to understand the patterns better before implementing the feature.

🔧 Tool: Read
Input: {
  "file_path": "/Users/jm/Dev/websites/service-business/src/types/trust-badge.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/jm/Dev/websites/service-business/src/components/TrustBadgeCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/jm/Dev/websites/service-business/src/components/TrustBadgesSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/jm/Dev/websites/service-business/src/config/accreditations.config.ts"
}
Let me find the actual project location and structure:

🔧 Tool: Bash
Input: {
  "command": "find /Users -maxdepth 5 -name \"package.json\" -type f 2>/dev/null | head -20",
  "description": "Find project root by locating package.json"
}

🔧 Tool: Bash
Input: {
  "command": "pwd && ls -la",
  "description": "Check current directory"
}
Now let me explore the actual project structure:

🔧 Tool: Bash
Input: {
  "command": "ls -la src/",
  "description": "List src directory contents"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Review existing trust-badge types and components",
      "status": "in_progress",
      "activeForm": "Reviewing existing trust-badge types and components"
    },
    {
      "content": "Extend trust-badge.ts with license/insurance verification fields",
      "status": "pending",
      "activeForm": "Extending trust-badge.ts with license/insurance verification fields"
    },
    {
      "content": "Create LicenseInsuranceCard.astro component",
      "status": "pending",
      "activeForm": "Creating LicenseInsuranceCard.astro component"
    },
    {
      "content": "Create LicenseInsuranceSection.astro component",
      "status": "pending",
      "activeForm": "Creating LicenseInsuranceSection.astro component"
    },
    {
      "content": "Create license-insurance.config.ts with sample data",
      "status": "pending",
      "activeForm": "Creating license-insurance.config.ts with sample data"
    },
    {
      "content": "Integrate component into index page",
      "status": "pending",
      "activeForm": "Integrating component into index page"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\trust-badge.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TrustBadgeCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\TrustBadgesSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\accreditations.config.ts"
}
Now let me also read the index page to see how it's used and check the styles:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\styles\\variables.css"
}
Now I have a thorough understanding of the codebase. Let me update my todo list and start implementing the feature.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Review existing trust-badge types and components",
      "status": "completed",
      "activeForm": "Reviewing existing trust-badge types and components"
    },
    {
      "content": "Extend trust-badge.ts with license/insurance verification fields",
      "status": "in_progress",
      "activeForm": "Extending trust-badge.ts with license/insurance verification fields"
    },
    {
      "content": "Create LicenseInsuranceCard.astro component",
      "status": "pending",
      "activeForm": "Creating LicenseInsuranceCard.astro component"
    },
    {
      "content": "Create LicenseInsuranceSection.astro component",
      "status": "pending",
      "activeForm": "Creating LicenseInsuranceSection.astro component"
    },
    {
      "content": "Create license-insurance.config.ts with sample data",
      "status": "pending",
      "activeForm": "Creating license-insurance.config.ts with sample data"
    },
    {
      "content": "Integrate component into index page",
      "status": "pending",
      "activeForm": "Integrating component into index page"
    }
  ]
}
Now let me extend the trust-badge.ts to add additional fields for license/insurance verification:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\trust-badge.ts",
  "old_string": "/**\n * Badge category types for filtering and styling\n */\nexport type TrustBadgeCategory = 'certification' | 'license' | 'insurance' | 'award' | 'membership';",
  "new_string": "/**\n * Badge category types for filtering and styling\n */\nexport type TrustBadgeCategory = 'certification' | 'license' | 'insurance' | 'award' | 'membership' | 'bonding';\n\n/**\n * Verification status for licenses and insurance\n */\nexport type VerificationStatus = 'verified' | 'pending' | 'expired' | 'not_verified';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\trust-badge.ts",
  "old_string": "/**\n * Represents a single trust badge/credential\n */\nexport interface TrustBadge {\n  /** Unique identifier for the badge */\n  id: string;\n  /** Badge/credential title (e.g., \"BBB Accredited\", \"Licensed & Insured\") */\n  title: string;\n  /** Brief description of the credential */\n  description?: string;\n  /** SVG icon content (raw SVG string) */\n  icon?: string;\n  /** Image URL for badge logo (alternative to icon) */\n  imageUrl?: string;\n  /** Alt text for image (required if imageUrl is provided) */\n  imageAlt?: string;\n  /** Issuing organization (e.g., \"Better Business Bureau\") */\n  issuer?: string;\n  /** Year the credential was obtained */\n  year?: string;\n  /** External verification URL */\n  verificationUrl?: string;\n  /** Category of the badge for styling/filtering */\n  category?: TrustBadgeCategory;\n}",
  "new_string": "/**\n * Represents a single trust badge/credential\n */\nexport interface TrustBadge {\n  /** Unique identifier for the badge */\n  id: string;\n  /** Badge/credential title (e.g., \"BBB Accredited\", \"Licensed & Insured\") */\n  title: string;\n  /** Brief description of the credential */\n  description?: string;\n  /** SVG icon content (raw SVG string) */\n  icon?: string;\n  /** Image URL for badge logo (alternative to icon) */\n  imageUrl?: string;\n  /** Alt text for image (required if imageUrl is provided) */\n  imageAlt?: string;\n  /** Issuing organization (e.g., \"Better Business Bureau\") */\n  issuer?: string;\n  /** Year the credential was obtained */\n  year?: string;\n  /** External verification URL */\n  verificationUrl?: string;\n  /** Category of the badge for styling/filtering */\n  category?: TrustBadgeCategory;\n}\n\n/**\n * Extended license/insurance/bonding credential with detailed verification information\n */\nexport interface LicenseInsuranceCredential {\n  /** Unique identifier for the credential */\n  id: string;\n  /** Credential title (e.g., \"General Contractor License\", \"Liability Insurance\") */\n  title: string;\n  /** Type of credential */\n  type: 'license' | 'insurance' | 'bonding';\n  /** Brief description of what the credential covers */\n  description?: string;\n  /** SVG icon content (raw SVG string) */\n  icon?: string;\n  /** License/policy number (partially masked for security if needed) */\n  credentialNumber?: string;\n  /** Issuing organization or insurance provider */\n  issuer: string;\n  /** State or jurisdiction where valid */\n  jurisdiction?: string;\n  /** Issue date (ISO string or display string) */\n  issueDate?: string;\n  /** Expiration date (ISO string or display string) */\n  expirationDate?: string;\n  /** Coverage amount for insurance/bonding (e.g., \"$1,000,000\") */\n  coverageAmount?: string;\n  /** Current verification status */\n  verificationStatus: VerificationStatus;\n  /** External verification URL */\n  verificationUrl?: string;\n  /** Additional notes or coverage details */\n  notes?: string;\n}\n\n/**\n * Props for the LicenseInsuranceCard component\n */\nexport interface LicenseInsuranceCardProps extends LicenseInsuranceCredential {\n  /** Additional CSS class names */\n  class?: string;\n}\n\n/**\n * Props for the LicenseInsuranceSection component\n */\nexport interface LicenseInsuranceSectionProps {\n  /** Section heading text */\n  heading?: string;\n  /** Section subheading/description text */\n  subheading?: string;\n  /** Array of credentials to display */\n  credentials: LicenseInsuranceCredential[];\n  /** Optional section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n  /** Number of columns for the grid (defaults to 3) */\n  columns?: 2 | 3 | 4;\n}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Review existing trust-badge types and components",
      "status": "completed",
      "activeForm": "Reviewing existing trust-badge types and components"
    },
    {
      "content": "Extend trust-badge.ts with license/insurance verification fields",
      "status": "completed",
      "activeForm": "Extending trust-badge.ts with license/insurance verification fields"
    },
    {
      "content": "Create LicenseInsuranceCard.astro component",
      "status": "in_progress",
      "activeForm": "Creating LicenseInsuranceCard.astro component"
    },
    {
      "content": "Create LicenseInsuranceSection.astro component",
      "status": "pending",
      "activeForm": "Creating LicenseInsuranceSection.astro component"
    },
    {
      "content": "Create license-insurance.config.ts with sample data",
      "status": "pending",
      "activeForm": "Creating license-insurance.config.ts with sample data"
    },
    {
      "content": "Integrate component into index page",
      "status": "pending",
      "activeForm": "Integrating component into index page"
    }
  ]
}
Now let me create the LicenseInsuranceCard component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\LicenseInsuranceCard.astro",
  "content": "---\n/**\n * LicenseInsuranceCard Component\n * A detailed card component for displaying business licenses, insurance certificates,\n * and bonding information with verification links. Critical trust-building element\n * for service businesses.\n *\n * Features:\n * - Clear credential type indicator (license/insurance/bonding)\n * - Credential number display with optional masking\n * - Expiration date with visual warning for upcoming expirations\n * - Coverage amount display for insurance/bonding\n * - Verification status badge with color coding\n * - Clickable verification link\n * - Responsive design with hover effects\n * - Accessible with proper semantics\n *\n * @example License card\n * ```astro\n * <LicenseInsuranceCard\n *   id=\"contractor-license\"\n *   title=\"General Contractor License\"\n *   type=\"license\"\n *   credentialNumber=\"GC-12345\"\n *   issuer=\"Texas Department of Licensing\"\n *   jurisdiction=\"Texas\"\n *   expirationDate=\"2025-12-31\"\n *   verificationStatus=\"verified\"\n *   verificationUrl=\"https://verify.texas.gov/12345\"\n * />\n * ```\n *\n * @example Insurance card\n * ```astro\n * <LicenseInsuranceCard\n *   id=\"liability-insurance\"\n *   title=\"General Liability Insurance\"\n *   type=\"insurance\"\n *   credentialNumber=\"POL-987654\"\n *   issuer=\"State Farm Insurance\"\n *   coverageAmount=\"$2,000,000\"\n *   expirationDate=\"2025-06-30\"\n *   verificationStatus=\"verified\"\n *   verificationUrl=\"https://certificates.example.com/verify\"\n * />\n * ```\n */\n\nimport type { LicenseInsuranceCardProps, VerificationStatus } from '../types/trust-badge';\n\ninterface Props extends LicenseInsuranceCardProps {}\n\nconst {\n  id,\n  title,\n  type,\n  description,\n  icon,\n  credentialNumber,\n  issuer,\n  jurisdiction,\n  issueDate,\n  expirationDate,\n  coverageAmount,\n  verificationStatus,\n  verificationUrl,\n  notes,\n  class: className = '',\n} = Astro.props;\n\n// Build CSS classes\nconst cardClasses = [\n  'license-insurance-card',\n  `license-insurance-card--${type}`,\n  `license-insurance-card--${verificationStatus}`,\n  className,\n].filter(Boolean).join(' ');\n\n// Determine if we should render as a link\nconst isClickable = !!verificationUrl;\nconst Tag = isClickable ? 'a' : 'article';\nconst linkProps = isClickable ? { href: verificationUrl, target: '_blank', rel: 'noopener noreferrer' } : {};\n\n// Check if expiration is upcoming (within 90 days)\nconst isExpiringsoon = (): boolean => {\n  if (!expirationDate) return false;\n  const expDate = new Date(expirationDate);\n  const now = new Date();\n  const daysUntilExpiration = Math.floor((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));\n  return daysUntilExpiration > 0 && daysUntilExpiration <= 90;\n};\n\nconst isExpired = (): boolean => {\n  if (!expirationDate) return false;\n  const expDate = new Date(expirationDate);\n  const now = new Date();\n  return expDate < now;\n};\n\n// Format date for display\nconst formatDate = (dateStr: string): string => {\n  const date = new Date(dateStr);\n  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });\n};\n\n// Get status label\nconst getStatusLabel = (status: VerificationStatus): string => {\n  switch (status) {\n    case 'verified': return 'Verified';\n    case 'pending': return 'Pending';\n    case 'expired': return 'Expired';\n    case 'not_verified': return 'Not Verified';\n    default: return 'Unknown';\n  }\n};\n\n// Get type label\nconst getTypeLabel = (t: string): string => {\n  switch (t) {\n    case 'license': return 'License';\n    case 'insurance': return 'Insurance';\n    case 'bonding': return 'Bond';\n    default: return t;\n  }\n};\n\n// Default icons for each type\nconst defaultIcons = {\n  license: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z\"/></svg>`,\n  insurance: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"/></svg>`,\n  bonding: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"/></svg>`,\n};\n\nconst displayIcon = icon || defaultIcons[type];\nconst expiringSoon = isExpiringsSoon();\nconst expired = isExpired();\n\nfunction isExpiringsSoon(): boolean {\n  if (!expirationDate) return false;\n  const expDate = new Date(expirationDate);\n  const now = new Date();\n  const daysUntilExpiration = Math.floor((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));\n  return daysUntilExpiration > 0 && daysUntilExpiration <= 90;\n}\n---\n\n<Tag class={cardClasses} id={`credential-${id}`} {...linkProps}>\n  <!-- Type Badge -->\n  <div class=\"license-insurance-card__type-badge\">\n    {getTypeLabel(type)}\n  </div>\n\n  <!-- Header with Icon and Title -->\n  <header class=\"license-insurance-card__header\">\n    <div class=\"license-insurance-card__icon\" aria-hidden=\"true\">\n      <Fragment set:html={displayIcon} />\n    </div>\n    <div class=\"license-insurance-card__title-group\">\n      <h3 class=\"license-insurance-card__title\">{title}</h3>\n      {issuer && (\n        <p class=\"license-insurance-card__issuer\">{issuer}</p>\n      )}\n    </div>\n  </header>\n\n  <!-- Credential Details -->\n  <div class=\"license-insurance-card__details\">\n    {credentialNumber && (\n      <div class=\"license-insurance-card__detail\">\n        <span class=\"license-insurance-card__detail-label\">\n          {type === 'insurance' ? 'Policy #' : type === 'bonding' ? 'Bond #' : 'License #'}\n        </span>\n        <span class=\"license-insurance-card__detail-value\">{credentialNumber}</span>\n      </div>\n    )}\n\n    {jurisdiction && (\n      <div class=\"license-insurance-card__detail\">\n        <span class=\"license-insurance-card__detail-label\">Jurisdiction</span>\n        <span class=\"license-insurance-card__detail-value\">{jurisdiction}</span>\n      </div>\n    )}\n\n    {coverageAmount && (\n      <div class=\"license-insurance-card__detail license-insurance-card__detail--coverage\">\n        <span class=\"license-insurance-card__detail-label\">Coverage</span>\n        <span class=\"license-insurance-card__detail-value license-insurance-card__coverage-amount\">{coverageAmount}</span>\n      </div>\n    )}\n\n    {expirationDate && (\n      <div class={`license-insurance-card__detail ${expiringSoon ? 'license-insurance-card__detail--warning' : ''} ${expired ? 'license-insurance-card__detail--expired' : ''}`}>\n        <span class=\"license-insurance-card__detail-label\">\n          {expired ? 'Expired' : 'Valid Through'}\n        </span>\n        <span class=\"license-insurance-card__detail-value\">\n          {formatDate(expirationDate)}\n          {expiringSoon && !expired && (\n            <span class=\"license-insurance-card__expiring-badge\">Renewing Soon</span>\n          )}\n        </span>\n      </div>\n    )}\n  </div>\n\n  {description && (\n    <p class=\"license-insurance-card__description\">{description}</p>\n  )}\n\n  <!-- Footer with Status and Verify Link -->\n  <footer class=\"license-insurance-card__footer\">\n    <div class={`license-insurance-card__status license-insurance-card__status--${verificationStatus}`}>\n      <svg class=\"license-insurance-card__status-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n        {verificationStatus === 'verified' ? (\n          <path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"/>\n        ) : verificationStatus === 'pending' ? (\n          <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"/>\n        ) : verificationStatus === 'expired' ? (\n          <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"/>\n        ) : (\n          <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4V7h2v6h-2z\"/>\n        )}\n      </svg>\n      <span class=\"license-insurance-card__status-text\">{getStatusLabel(verificationStatus)}</span>\n    </div>\n\n    {isClickable && (\n      <div class=\"license-insurance-card__verify\" aria-label=\"Click to verify credential\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n          <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/>\n          <polyline points=\"15 3 21 3 21 9\"/>\n          <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"/>\n        </svg>\n        <span class=\"license-insurance-card__verify-text\">Verify</span>\n      </div>\n    )}\n  </footer>\n</Tag>\n\n<style>\n  /* =================================================================\n   * LICENSE INSURANCE CARD COMPONENT STYLES\n   * =================================================================\n   * Detailed credential display for licenses, insurance, and bonding\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention\n   */\n\n  .license-insurance-card {\n    /* Layout */\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n\n    /* Box model */\n    padding: var(--spacing-5);\n\n    /* Positioning */\n    position: relative;\n\n    /* Visual */\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n\n    /* Overflow for effects */\n    overflow: hidden;\n\n    /* Animation */\n    transition:\n      box-shadow var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-out),\n      border-color var(--duration-300) var(--ease-out);\n  }\n\n  /* Link-specific styles */\n  a.license-insurance-card {\n    text-decoration: none;\n    color: inherit;\n    cursor: pointer;\n  }\n\n  a.license-insurance-card:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  .license-insurance-card:hover {\n    box-shadow: var(--shadow-lg), var(--glow-card-hover);\n    transform: translateY(-4px);\n    border-color: var(--color-primary-300);\n  }\n\n  /* Type Badge */\n  .license-insurance-card__type-badge {\n    position: absolute;\n    top: var(--spacing-3);\n    right: var(--spacing-3);\n    padding: var(--spacing-1) var(--spacing-2);\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-semibold);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wide);\n    border-radius: var(--radius-md);\n    background-color: var(--color-primary-100);\n    color: var(--color-primary-700);\n  }\n\n  /* Type-specific badge colors */\n  .license-insurance-card--license .license-insurance-card__type-badge {\n    background-color: #dbeafe;\n    color: #1d4ed8;\n  }\n\n  .license-insurance-card--insurance .license-insurance-card__type-badge {\n    background-color: #dcfce7;\n    color: #15803d;\n  }\n\n  .license-insurance-card--bonding .license-insurance-card__type-badge {\n    background-color: #fef3c7;\n    color: #b45309;\n  }\n\n  /* Header */\n  .license-insurance-card__header {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--spacing-3);\n    padding-right: var(--spacing-16); /* Space for type badge */\n  }\n\n  .license-insurance-card__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-12);\n    height: var(--spacing-12);\n    flex-shrink: 0;\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-50) 0%,\n      var(--color-primary-100) 100%\n    );\n    border-radius: var(--radius-lg);\n    color: var(--color-primary);\n    transition:\n      background var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-spring-soft);\n  }\n\n  .license-insurance-card__icon :global(svg) {\n    width: var(--spacing-6);\n    height: var(--spacing-6);\n  }\n\n  .license-insurance-card:hover .license-insurance-card__icon {\n    transform: scale(1.05);\n  }\n\n  /* Type-specific icon backgrounds */\n  .license-insurance-card--license .license-insurance-card__icon {\n    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);\n    color: #1d4ed8;\n  }\n\n  .license-insurance-card--insurance .license-insurance-card__icon {\n    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);\n    color: #15803d;\n  }\n\n  .license-insurance-card--bonding .license-insurance-card__icon {\n    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);\n    color: #b45309;\n  }\n\n  .license-insurance-card__title-group {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .license-insurance-card__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .license-insurance-card__issuer {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: var(--spacing-1) 0 0;\n  }\n\n  /* Details Grid */\n  .license-insurance-card__details {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-2);\n    padding: var(--spacing-3);\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-lg);\n  }\n\n  .license-insurance-card__detail {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--spacing-2);\n  }\n\n  .license-insurance-card__detail-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    color: var(--color-text-tertiary);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wide);\n  }\n\n  .license-insurance-card__detail-value {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-primary);\n    text-align: right;\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n  }\n\n  .license-insurance-card__coverage-amount {\n    font-weight: var(--font-weight-bold);\n    color: var(--color-success-dark);\n  }\n\n  .license-insurance-card__detail--warning .license-insurance-card__detail-value {\n    color: var(--color-warning-dark);\n  }\n\n  .license-insurance-card__detail--expired .license-insurance-card__detail-value {\n    color: var(--color-error-dark);\n  }\n\n  .license-insurance-card__expiring-badge {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-0-5) var(--spacing-1-5);\n    background-color: var(--color-warning-light);\n    color: var(--color-warning-text);\n    border-radius: var(--radius-full);\n    white-space: nowrap;\n  }\n\n  /* Description */\n  .license-insurance-card__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    margin: 0;\n  }\n\n  /* Footer */\n  .license-insurance-card__footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: var(--spacing-3);\n    border-top: 1px solid var(--color-border-light);\n    margin-top: auto;\n  }\n\n  /* Status Badge */\n  .license-insurance-card__status {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    padding: var(--spacing-1) var(--spacing-2);\n    border-radius: var(--radius-full);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .license-insurance-card__status-icon {\n    width: var(--spacing-4);\n    height: var(--spacing-4);\n  }\n\n  .license-insurance-card__status--verified {\n    background-color: var(--color-success-light);\n    color: var(--color-success-text);\n  }\n\n  .license-insurance-card__status--pending {\n    background-color: var(--color-warning-light);\n    color: var(--color-warning-text);\n  }\n\n  .license-insurance-card__status--expired {\n    background-color: var(--color-error-light);\n    color: var(--color-error-text);\n  }\n\n  .license-insurance-card__status--not_verified {\n    background-color: var(--color-background-muted);\n    color: var(--color-text-tertiary);\n  }\n\n  /* Verify Link */\n  .license-insurance-card__verify {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    font-size: var(--font-size-sm);\n    color: var(--color-primary);\n    opacity: 0;\n    transform: translateX(-8px);\n    transition:\n      opacity var(--duration-200) var(--ease-out),\n      transform var(--duration-200) var(--ease-out);\n  }\n\n  .license-insurance-card__verify svg {\n    width: var(--spacing-4);\n    height: var(--spacing-4);\n  }\n\n  .license-insurance-card:hover .license-insurance-card__verify {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * =================================================================\n   */\n\n  @media screen and (min-width: 768px) {\n    .license-insurance-card {\n      padding: var(--spacing-6);\n    }\n\n    .license-insurance-card__icon {\n      width: var(--spacing-14);\n      height: var(--spacing-14);\n    }\n\n    .license-insurance-card__icon :global(svg) {\n      width: var(--spacing-7);\n      height: var(--spacing-7);\n    }\n\n    .license-insurance-card__title {\n      font-size: var(--font-size-xl);\n    }\n\n    .license-insurance-card__details {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .license-insurance-card__detail--coverage {\n      grid-column: span 2;\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * =================================================================\n   */\n  @media (prefers-reduced-motion: reduce) {\n    .license-insurance-card,\n    .license-insurance-card__icon,\n    .license-insurance-card__verify {\n      transition: none;\n    }\n\n    .license-insurance-card:hover {\n      transform: none;\n    }\n\n    .license-insurance-card:hover .license-insurance-card__icon {\n      transform: none;\n    }\n\n    .license-insurance-card__verify {\n      opacity: 1;\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * =================================================================\n   */\n  @media (forced-colors: active) {\n    .license-insurance-card {\n      border: 2px solid CanvasText;\n    }\n\n    .license-insurance-card__type-badge,\n    .license-insurance-card__status {\n      border: 1px solid CanvasText;\n    }\n\n    a.license-insurance-card:focus-visible {\n      outline: 3px solid Highlight;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n  @media print {\n    .license-insurance-card {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n\n    .license-insurance-card:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .license-insurance-card__verify {\n      display: none;\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Review existing trust-badge types and components",
      "status": "completed",
      "activeForm": "Reviewing existing trust-badge types and components"
    },
    {
      "content": "Extend trust-badge.ts with license/insurance verification fields",
      "status": "completed",
      "activeForm": "Extending trust-badge.ts with license/insurance verification fields"
    },
    {
      "content": "Create LicenseInsuranceCard.astro component",
      "status": "completed",
      "activeForm": "Creating LicenseInsuranceCard.astro component"
    },
    {
      "content": "Create LicenseInsuranceSection.astro component",
      "status": "in_progress",
      "activeForm": "Creating LicenseInsuranceSection.astro component"
    },
    {
      "content": "Create license-insurance.config.ts with sample data",
      "status": "pending",
      "activeForm": "Creating license-insurance.config.ts with sample data"
    },
    {
      "content": "Integrate component into index page",
      "status": "pending",
      "activeForm": "Integrating component into index page"
    }
  ]
}
Now let me create the LicenseInsuranceSection component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\components\\LicenseInsuranceSection.astro",
  "content": "---\n/**\n * LicenseInsuranceSection Component\n * A responsive section displaying business licenses, insurance certificates,\n * and bonding information in a grid layout. Critical trust-building element\n * for service businesses that demonstrates compliance and protection.\n *\n * Features:\n * - Responsive grid: 1 column (mobile) -> 2-3 columns (tablet/desktop)\n * - Section heading with trust-focused messaging\n * - Category filtering support (future enhancement)\n * - Consistent card sizing and spacing\n * - Accessible with proper semantic structure\n * - Empty state handling\n * - Smooth staggered animations\n *\n * @example Basic usage\n * ```astro\n * <LicenseInsuranceSection\n *   heading=\"Licensed, Insured & Bonded\"\n *   subheading=\"Your protection is our priority\"\n *   credentials={[\n *     { id: 'license-1', title: 'Contractor License', type: 'license', ... },\n *     { id: 'insurance-1', title: 'Liability Insurance', type: 'insurance', ... },\n *   ]}\n * />\n * ```\n *\n * @example With custom columns\n * ```astro\n * <LicenseInsuranceSection\n *   heading=\"Our Credentials\"\n *   credentials={credentials}\n *   columns={2}\n * />\n * ```\n */\n\nimport type { LicenseInsuranceSectionProps, LicenseInsuranceCredential } from '../types/trust-badge';\nimport LicenseInsuranceCard from './LicenseInsuranceCard.astro';\n\ninterface Props extends LicenseInsuranceSectionProps {}\n\nconst {\n  heading = 'Licensed, Insured & Bonded',\n  subheading,\n  credentials = [],\n  id = 'license-insurance',\n  columns = 3,\n  class: className = '',\n} = Astro.props;\n\n// Build CSS classes\nconst sectionClasses = [\n  'license-insurance-section',\n  `license-insurance-section--cols-${columns}`,\n  className,\n].filter(Boolean).join(' ');\n\n// Check if we have credentials to display\nconst hasCredentials = credentials && credentials.length > 0;\n\n// Group credentials by type for potential filtering/organization\nconst licenseCount = credentials.filter(c => c.type === 'license').length;\nconst insuranceCount = credentials.filter(c => c.type === 'insurance').length;\nconst bondingCount = credentials.filter(c => c.type === 'bonding').length;\n---\n\n<section class={sectionClasses} id={id} aria-labelledby={`${id}-heading`}>\n  <div class=\"license-insurance-section__container\">\n    <!-- Section Header -->\n    <header class=\"license-insurance-section__header section-heading--decorated\">\n      <div class=\"license-insurance-section__header-content\">\n        <!-- Trust Icon -->\n        <div class=\"license-insurance-section__trust-icon\" aria-hidden=\"true\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n            <path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"/>\n          </svg>\n        </div>\n\n        <h2 id={`${id}-heading`} class=\"license-insurance-section__heading\">{heading}</h2>\n\n        {subheading && (\n          <p class=\"license-insurance-section__subheading\">{subheading}</p>\n        )}\n      </div>\n\n      <!-- Credential Type Summary -->\n      {hasCredentials && (\n        <div class=\"license-insurance-section__summary\" role=\"list\" aria-label=\"Credential summary\">\n          {licenseCount > 0 && (\n            <div class=\"license-insurance-section__summary-item license-insurance-section__summary-item--license\" role=\"listitem\">\n              <span class=\"license-insurance-section__summary-count\">{licenseCount}</span>\n              <span class=\"license-insurance-section__summary-label\">{licenseCount === 1 ? 'License' : 'Licenses'}</span>\n            </div>\n          )}\n          {insuranceCount > 0 && (\n            <div class=\"license-insurance-section__summary-item license-insurance-section__summary-item--insurance\" role=\"listitem\">\n              <span class=\"license-insurance-section__summary-count\">{insuranceCount}</span>\n              <span class=\"license-insurance-section__summary-label\">{insuranceCount === 1 ? 'Insurance Policy' : 'Insurance Policies'}</span>\n            </div>\n          )}\n          {bondingCount > 0 && (\n            <div class=\"license-insurance-section__summary-item license-insurance-section__summary-item--bonding\" role=\"listitem\">\n              <span class=\"license-insurance-section__summary-count\">{bondingCount}</span>\n              <span class=\"license-insurance-section__summary-label\">{bondingCount === 1 ? 'Bond' : 'Bonds'}</span>\n            </div>\n          )}\n        </div>\n      )}\n    </header>\n\n    <!-- Credentials Grid -->\n    {hasCredentials ? (\n      <div class=\"license-insurance-section__grid\" role=\"list\">\n        {credentials.map((credential) => (\n          <div class=\"license-insurance-section__card-wrapper\" role=\"listitem\">\n            <LicenseInsuranceCard\n              id={credential.id}\n              title={credential.title}\n              type={credential.type}\n              description={credential.description}\n              icon={credential.icon}\n              credentialNumber={credential.credentialNumber}\n              issuer={credential.issuer}\n              jurisdiction={credential.jurisdiction}\n              issueDate={credential.issueDate}\n              expirationDate={credential.expirationDate}\n              coverageAmount={credential.coverageAmount}\n              verificationStatus={credential.verificationStatus}\n              verificationUrl={credential.verificationUrl}\n              notes={credential.notes}\n            />\n          </div>\n        ))}\n      </div>\n    ) : (\n      <!-- Empty State -->\n      <div class=\"license-insurance-section__empty\" role=\"status\" aria-live=\"polite\">\n        <div class=\"license-insurance-section__empty-icon\" aria-hidden=\"true\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n            <path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z\"/>\n          </svg>\n        </div>\n        <p class=\"license-insurance-section__empty-text\">License and insurance information coming soon.</p>\n      </div>\n    )}\n\n    <!-- Trust Statement -->\n    {hasCredentials && (\n      <div class=\"license-insurance-section__trust-statement\">\n        <p>\n          <strong>Your Protection Matters:</strong> We maintain current licenses, comprehensive insurance coverage,\n          and bonding to ensure your project is protected. Click any credential above to verify directly with the issuing authority.\n        </p>\n      </div>\n    )}\n  </div>\n</section>\n\n<style>\n  /* =================================================================\n   * LICENSE INSURANCE SECTION COMPONENT STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .license-insurance-section {\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background);\n  }\n\n  .license-insurance-section__container {\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n  }\n\n  /* Section Header */\n  .license-insurance-section__header {\n    text-align: center;\n    margin-bottom: var(--spacing-10);\n  }\n\n  .license-insurance-section__header-content {\n    margin-bottom: var(--spacing-6);\n  }\n\n  .license-insurance-section__trust-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-16);\n    height: var(--spacing-16);\n    margin-bottom: var(--spacing-4);\n    background: linear-gradient(\n      135deg,\n      var(--color-success-light) 0%,\n      #bbf7d0 100%\n    );\n    border-radius: var(--radius-full);\n    color: var(--color-success-dark);\n  }\n\n  .license-insurance-section__trust-icon svg {\n    width: var(--spacing-8);\n    height: var(--spacing-8);\n  }\n\n  .license-insurance-section__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-3);\n    line-height: var(--line-height-tight);\n  }\n\n  .license-insurance-section__subheading {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    margin: 0;\n    max-width: 45rem;\n    margin-left: auto;\n    margin-right: auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* Credential Summary Pills */\n  .license-insurance-section__summary {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: var(--spacing-3);\n    margin-top: var(--spacing-6);\n  }\n\n  .license-insurance-section__summary-item {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    padding: var(--spacing-2) var(--spacing-4);\n    border-radius: var(--radius-full);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n  }\n\n  .license-insurance-section__summary-count {\n    font-weight: var(--font-weight-bold);\n  }\n\n  .license-insurance-section__summary-label {\n    color: inherit;\n    opacity: 0.9;\n  }\n\n  .license-insurance-section__summary-item--license {\n    background-color: #dbeafe;\n    color: #1d4ed8;\n  }\n\n  .license-insurance-section__summary-item--insurance {\n    background-color: #dcfce7;\n    color: #15803d;\n  }\n\n  .license-insurance-section__summary-item--bonding {\n    background-color: #fef3c7;\n    color: #b45309;\n  }\n\n  /* Credentials Grid */\n  .license-insurance-section__grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n  }\n\n  .license-insurance-section__card-wrapper {\n    display: contents;\n  }\n\n  /* Empty State */\n  .license-insurance-section__empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: var(--spacing-16) var(--spacing-8);\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-xl);\n    border: 2px dashed var(--color-border);\n  }\n\n  .license-insurance-section__empty-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-16);\n    height: var(--spacing-16);\n    margin-bottom: var(--spacing-4);\n    background-color: var(--color-background-muted);\n    border-radius: var(--radius-full);\n    color: var(--color-text-tertiary);\n  }\n\n  .license-insurance-section__empty-icon svg {\n    width: var(--spacing-8);\n    height: var(--spacing-8);\n  }\n\n  .license-insurance-section__empty-text {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-tertiary);\n    margin: 0;\n    text-align: center;\n  }\n\n  /* Trust Statement */\n  .license-insurance-section__trust-statement {\n    margin-top: var(--spacing-10);\n    padding: var(--spacing-6);\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-50) 0%,\n      var(--color-background-subtle) 100%\n    );\n    border-radius: var(--radius-xl);\n    border-left: 4px solid var(--color-primary);\n  }\n\n  .license-insurance-section__trust-statement p {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    margin: 0;\n    text-align: center;\n  }\n\n  .license-insurance-section__trust-statement strong {\n    color: var(--color-text-primary);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * =================================================================\n   */\n\n  /* Tablet (768px) */\n  @media screen and (min-width: 768px) {\n    .license-insurance-section {\n      padding: var(--spacing-20) var(--spacing-8);\n    }\n\n    .license-insurance-section__header {\n      margin-bottom: var(--spacing-12);\n    }\n\n    .license-insurance-section__heading {\n      font-size: var(--font-size-4xl);\n    }\n\n    .license-insurance-section__trust-icon {\n      width: var(--spacing-20);\n      height: var(--spacing-20);\n    }\n\n    .license-insurance-section__trust-icon svg {\n      width: var(--spacing-10);\n      height: var(--spacing-10);\n    }\n\n    /* Grid columns based on props - 2 columns on tablet */\n    .license-insurance-section__grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  /* Desktop (1024px) */\n  @media screen and (min-width: 1024px) {\n    .license-insurance-section--cols-2 .license-insurance-section__grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .license-insurance-section--cols-3 .license-insurance-section__grid {\n      grid-template-columns: repeat(3, 1fr);\n    }\n\n    .license-insurance-section--cols-4 .license-insurance-section__grid {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n\n  /* Large Desktop (1280px) */\n  @media screen and (min-width: 1280px) {\n    .license-insurance-section {\n      padding: var(--spacing-24) var(--spacing-8);\n    }\n  }\n\n  /* =================================================================\n   * ANIMATION - Staggered card appearance\n   * =================================================================\n   */\n  .license-insurance-section__grid > :global(*) {\n    animation: fadeSlideUp 0.4s ease-out backwards;\n  }\n\n  .license-insurance-section__grid > :global(*:nth-child(1)) { animation-delay: 0.05s; }\n  .license-insurance-section__grid > :global(*:nth-child(2)) { animation-delay: 0.1s; }\n  .license-insurance-section__grid > :global(*:nth-child(3)) { animation-delay: 0.15s; }\n  .license-insurance-section__grid > :global(*:nth-child(4)) { animation-delay: 0.2s; }\n  .license-insurance-section__grid > :global(*:nth-child(5)) { animation-delay: 0.25s; }\n  .license-insurance-section__grid > :global(*:nth-child(6)) { animation-delay: 0.3s; }\n\n  @keyframes fadeSlideUp {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * =================================================================\n   */\n  @media (prefers-reduced-motion: reduce) {\n    .license-insurance-section__grid > :global(*) {\n      animation: none;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n  @media print {\n    .license-insurance-section {\n      padding: var(--spacing-8) 0;\n      background-color: transparent;\n    }\n\n    .license-insurance-section__grid > :global(*) {\n      animation: none;\n    }\n\n    .license-insurance-section__trust-statement {\n      border-left: 2px solid var(--color-primary);\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Review existing trust-badge types and components",
      "status": "completed",
      "activeForm": "Reviewing existing trust-badge types and components"
    },
    {
      "content": "Extend trust-badge.ts with license/insurance verification fields",
      "status": "completed",
      "activeForm": "Extending trust-badge.ts with license/insurance verification fields"
    },
    {
      "content": "Create LicenseInsuranceCard.astro component",
      "status": "completed",
      "activeForm": "Creating LicenseInsuranceCard.astro component"
    },
    {
      "content": "Create LicenseInsuranceSection.astro component",
      "status": "completed",
      "activeForm": "Creating LicenseInsuranceSection.astro component"
    },
    {
      "content": "Create license-insurance.config.ts with sample data",
      "status": "in_progress",
      "activeForm": "Creating license-insurance.config.ts with sample data"
    },
    {
      "content": "Integrate component into index page",
      "status": "pending",
      "activeForm": "Integrating component into index page"
    }
  ]
}
Now let me create the configuration file with sample data:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\config\\license-insurance.config.ts",
  "content": "/**\n * License & Insurance Credentials Configuration\n *\n * This file contains the configuration for business licenses, insurance certificates,\n * and bonding information displayed on the website. These credentials demonstrate\n * compliance, professionalism, and protection for customers.\n *\n * Instructions for updating:\n * 1. To add/modify credentials, update the CREDENTIALS array below\n * 2. Each credential should include all required fields (id, title, type, issuer, verificationStatus)\n * 3. Add verificationUrl for clickable verification links to official sources\n * 4. Types available: 'license', 'insurance', 'bonding'\n * 5. Verification statuses: 'verified', 'pending', 'expired', 'not_verified'\n * 6. Update expiration dates regularly to keep information current\n * 7. Coverage amounts should be formatted as currency strings (e.g., \"$1,000,000\")\n *\n * IMPORTANT: Keep this information accurate and up-to-date.\n * Displaying false or outdated credential information may have legal implications.\n */\n\nimport type { LicenseInsuranceCredential } from '../types/trust-badge';\n\n/**\n * SVG icons for credential types\n * Using inline SVGs for optimal performance and styling flexibility\n */\nconst credentialIcons = {\n  /** Business license document icon */\n  businessLicense: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-9.18-6.95L7.4 14.46 10.94 18l5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z\"/></svg>`,\n\n  /** Professional license with checkmark */\n  professionalLicense: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>`,\n\n  /** Liability insurance shield icon */\n  liabilityInsurance: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"/></svg>`,\n\n  /** Workers compensation icon */\n  workersComp: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"/><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z\"/></svg>`,\n\n  /** Surety bond lock icon */\n  suretyBond: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"/></svg>`,\n\n  /** Professional errors & omissions */\n  professionalLiability: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z\"/></svg>`,\n};\n\n/**\n * Business licenses, insurance certificates, and bonding credentials\n *\n * Update this array with your actual business credentials.\n * Remove or modify sample data as needed.\n */\nexport const CREDENTIALS: LicenseInsuranceCredential[] = [\n  // Business License Example\n  {\n    id: 'business-license-houston',\n    title: 'City of Houston Business License',\n    type: 'license',\n    description: 'Authorized to conduct business within the City of Houston municipal limits.',\n    icon: credentialIcons.businessLicense,\n    credentialNumber: 'BL-2024-XXXXX',\n    issuer: 'City of Houston',\n    jurisdiction: 'Houston, TX',\n    issueDate: '2024-01-15',\n    expirationDate: '2025-01-14',\n    verificationStatus: 'verified',\n    verificationUrl: 'https://www.houstontx.gov/adminservices/license_verify.html',\n  },\n\n  // General Liability Insurance\n  {\n    id: 'general-liability',\n    title: 'General Liability Insurance',\n    type: 'insurance',\n    description: 'Comprehensive coverage protecting against third-party claims for bodily injury and property damage.',\n    icon: credentialIcons.liabilityInsurance,\n    credentialNumber: 'GL-XXXXX-2024',\n    issuer: 'State Farm Insurance',\n    coverageAmount: '$1,000,000 per occurrence',\n    expirationDate: '2025-06-30',\n    verificationStatus: 'verified',\n    verificationUrl: '#', // Replace with actual certificate verification link\n    notes: '$2,000,000 aggregate coverage',\n  },\n\n  // Professional Liability / E&O Insurance\n  {\n    id: 'professional-liability',\n    title: 'Professional Liability (E&O) Insurance',\n    type: 'insurance',\n    description: 'Errors and omissions coverage protecting against claims of negligence or inadequate work.',\n    icon: credentialIcons.professionalLiability,\n    credentialNumber: 'PL-XXXXX-2024',\n    issuer: 'Hartford Insurance',\n    coverageAmount: '$500,000 per claim',\n    expirationDate: '2025-06-30',\n    verificationStatus: 'verified',\n    verificationUrl: '#', // Replace with actual certificate verification link\n    notes: '$1,000,000 aggregate coverage',\n  },\n\n  // Workers Compensation (if applicable)\n  // Uncomment if you have employees\n  // {\n  //   id: 'workers-comp',\n  //   title: \"Workers' Compensation Insurance\",\n  //   type: 'insurance',\n  //   description: 'Coverage for employee injuries occurring during work-related activities.',\n  //   icon: credentialIcons.workersComp,\n  //   credentialNumber: 'WC-XXXXX-2024',\n  //   issuer: 'Texas Mutual Insurance',\n  //   jurisdiction: 'Texas',\n  //   expirationDate: '2025-06-30',\n  //   verificationStatus: 'verified',\n  //   verificationUrl: '#',\n  // },\n\n  // Surety Bond (if applicable for your industry)\n  // Uncomment if you maintain a surety bond\n  // {\n  //   id: 'surety-bond',\n  //   title: 'Surety Bond',\n  //   type: 'bonding',\n  //   description: 'Financial guarantee bond protecting clients against contractor non-performance.',\n  //   icon: credentialIcons.suretyBond,\n  //   credentialNumber: 'SB-XXXXX-2024',\n  //   issuer: 'Liberty Mutual Surety',\n  //   coverageAmount: '$25,000',\n  //   jurisdiction: 'Texas',\n  //   expirationDate: '2025-12-31',\n  //   verificationStatus: 'verified',\n  //   verificationUrl: '#',\n  // },\n];\n\n/**\n * Section configuration for the license & insurance credentials section\n * Customize the heading, subheading, and layout options\n */\nexport const LICENSE_INSURANCE_CONFIG = {\n  /** Main heading for the section */\n  heading: 'Licensed, Insured & Protected',\n\n  /** Subheading/description text */\n  subheading: 'Your peace of mind is our priority. We maintain current licenses and comprehensive insurance coverage to protect you and your project.',\n\n  /** Section ID for anchor linking */\n  id: 'license-insurance',\n\n  /** Number of columns for the grid (2-4) */\n  columns: 3 as const,\n};\n\n/**\n * Helper function to check if any credentials are expiring soon\n * Useful for admin notifications\n */\nexport function getExpiringCredentials(daysThreshold: number = 90): LicenseInsuranceCredential[] {\n  const now = new Date();\n  return CREDENTIALS.filter(credential => {\n    if (!credential.expirationDate) return false;\n    const expDate = new Date(credential.expirationDate);\n    const daysUntilExpiration = Math.floor((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));\n    return daysUntilExpiration > 0 && daysUntilExpiration <= daysThreshold;\n  });\n}\n\n/**\n * Helper function to check if any credentials have expired\n * Useful for admin notifications\n */\nexport function getExpiredCredentials(): LicenseInsuranceCredential[] {\n  const now = new Date();\n  return CREDENTIALS.filter(credential => {\n    if (!credential.expirationDate) return false;\n    const expDate = new Date(credential.expirationDate);\n    return expDate < now;\n  });\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Review existing trust-badge types and components",
      "status": "completed",
      "activeForm": "Reviewing existing trust-badge types and components"
    },
    {
      "content": "Extend trust-badge.ts with license/insurance verification fields",
      "status": "completed",
      "activeForm": "Extending trust-badge.ts with license/insurance verification fields"
    },
    {
      "content": "Create LicenseInsuranceCard.astro component",
      "status": "completed",
      "activeForm": "Creating LicenseInsuranceCard.astro component"
    },
    {
      "content": "Create LicenseInsuranceSection.astro component",
      "status": "completed",
      "activeForm": "Creating LicenseInsuranceSection.astro component"
    },
    {
      "content": "Create license-insurance.config.ts with sample data",
      "status": "completed",
      "activeForm": "Creating license-insurance.config.ts with sample data"
    },
    {
      "content": "Integrate component into index page",
      "status": "in_progress",
      "activeForm": "Integrating component into index page"
    }
  ]
}
Now let me integrate the component into the index page:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro",
  "old_string": "import TrustBadgesSection from '../components/TrustBadgesSection.astro';\nimport FAQAccordion from '../components/FAQAccordion.astro';\nimport ContactCTA from '../components/ContactCTA.astro';\nimport type { Service } from '../types/service';\nimport type { Differentiator } from '../types/differentiator';\nimport type { Testimonial } from '../types/testimonial';\nimport { DEFAULT_FAQ_ITEMS } from '../types/faq';\nimport { localBusinessSchema } from '../config/seo.config';\nimport { FEATURED_PROJECTS, FEATURED_PROJECTS_CONFIG } from '../config/featured-projects.config';\nimport { ACCREDITATION_BADGES, ACCREDITATION_BADGES_CONFIG } from '../config/accreditations.config';",
  "new_string": "import TrustBadgesSection from '../components/TrustBadgesSection.astro';\nimport LicenseInsuranceSection from '../components/LicenseInsuranceSection.astro';\nimport FAQAccordion from '../components/FAQAccordion.astro';\nimport ContactCTA from '../components/ContactCTA.astro';\nimport type { Service } from '../types/service';\nimport type { Differentiator } from '../types/differentiator';\nimport type { Testimonial } from '../types/testimonial';\nimport { DEFAULT_FAQ_ITEMS } from '../types/faq';\nimport { localBusinessSchema } from '../config/seo.config';\nimport { FEATURED_PROJECTS, FEATURED_PROJECTS_CONFIG } from '../config/featured-projects.config';\nimport { ACCREDITATION_BADGES, ACCREDITATION_BADGES_CONFIG } from '../config/accreditations.config';\nimport { CREDENTIALS, LICENSE_INSURANCE_CONFIG } from '../config/license-insurance.config';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\pages\\index.astro",
  "old_string": "\t\t<!-- Accreditation Badges Section -->\n\t\t<TrustBadgesSection\n\t\t\tid={ACCREDITATION_BADGES_CONFIG.id}\n\t\t\theading={ACCREDITATION_BADGES_CONFIG.heading}\n\t\t\tsubheading={ACCREDITATION_BADGES_CONFIG.subheading}\n\t\t\tbadges={ACCREDITATION_BADGES}\n\t\t\tcolumns={ACCREDITATION_BADGES_CONFIG.columns}\n\t\t\tlayout={ACCREDITATION_BADGES_CONFIG.layout}\n\t\t/>\n\n\t\t<!-- FAQ Section -->",
  "new_string": "\t\t<!-- Accreditation Badges Section -->\n\t\t<TrustBadgesSection\n\t\t\tid={ACCREDITATION_BADGES_CONFIG.id}\n\t\t\theading={ACCREDITATION_BADGES_CONFIG.heading}\n\t\t\tsubheading={ACCREDITATION_BADGES_CONFIG.subheading}\n\t\t\tbadges={ACCREDITATION_BADGES}\n\t\t\tcolumns={ACCREDITATION_BADGES_CONFIG.columns}\n\t\t\tlayout={ACCREDITATION_BADGES_CONFIG.layout}\n\t\t/>\n\n\t\t<!-- License & Insurance Verification Section -->\n\t\t<LicenseInsuranceSection\n\t\t\tid={LICENSE_INSURANCE_CONFIG.id}\n\t\t\theading={LICENSE_INSURANCE_CONFIG.heading}\n\t\t\tsubheading={LICENSE_INSURANCE_CONFIG.subheading}\n\t\t\tcredentials={CREDENTIALS}\n\t\t\tcolumns={LICENSE_INSURANCE_CONFIG.columns}\n\t\t/>\n\n\t\t<!-- FAQ Section -->"
}
Now let me update the types index file to export the new types:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\index.ts"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\index.ts",
  "old_string": "export type {\n  TrustBadgeCategory,\n  TrustBadge,\n  TrustBadgeCardProps,\n  TrustBadgesSectionProps,\n} from './trust-badge';",
  "new_string": "export type {\n  TrustBadgeCategory,\n  TrustBadge,\n  TrustBadgeCardProps,\n  TrustBadgesSectionProps,\n  VerificationStatus,\n  LicenseInsuranceCredential,\n  LicenseInsuranceCardProps,\n  LicenseInsuranceSectionProps,\n} from './trust-badge';"
}
Now let me verify the build works by running it:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/service-business && npm run build 2>&1 | head -100",
  "description": "Build the project to verify changes",
  "timeout": 120000
}
The build completed successfully. Let me mark the final task as complete and verify all components are properly created:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Review existing trust-badge types and components",
      "status": "completed",
      "activeForm": "Reviewing existing trust-badge types and components"
    },
    {
      "content": "Extend trust-badge.ts with license/insurance verification fields",
      "status": "completed",
      "activeForm": "Extending trust-badge.ts with license/insurance verification fields"
    },
    {
      "content": "Create LicenseInsuranceCard.astro component",
      "status": "completed",
      "activeForm": "Creating LicenseInsuranceCard.astro component"
    },
    {
      "content": "Create LicenseInsuranceSection.astro component",
      "status": "completed",
      "activeForm": "Creating LicenseInsuranceSection.astro component"
    },
    {
      "content": "Create license-insurance.config.ts with sample data",
      "status": "completed",
      "activeForm": "Creating license-insurance.config.ts with sample data"
    },
    {
      "content": "Integrate component into index page",
      "status": "completed",
      "activeForm": "Integrating component into index page"
    }
  ]
}
Let me read the final versions of the key files to verify they are complete:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\service-business\\src\\types\\trust-badge.ts"
}
All files have been created and integrated successfully. Let me provide the final summary:

<summary>
## Summary: Display Business Licenses, Insurance Certificates, and Bonding Information

### Changes Implemented
- Extended the `trust-badge.ts` type definitions with new types for license/insurance verification:
  - Added `VerificationStatus` type for tracking credential verification states
  - Added `LicenseInsuranceCredential` interface with detailed fields (credential number, issuer, jurisdiction, expiration date, coverage amount, verification status/URL)
  - Added `LicenseInsuranceCardProps` and `LicenseInsuranceSectionProps` interfaces
  - Added `bonding` to `TrustBadgeCategory` type

- Created `LicenseInsuranceCard.astro` component with:
  - Detailed credential display (license, insurance, bonding types)
  - Type-specific color coding (blue for licenses, green for insurance, amber for bonds)
  - Credential number display
  - Expiration date with visual warnings for upcoming expirations
  - Coverage amount display for insurance/bonding
  - Verification status badges (verified, pending, expired, not_verified)
  - Clickable verification links to external authorities
  - Responsive design with hover effects
  - Full accessibility support (ARIA labels, focus states, reduced motion)
  - High contrast mode and print styles

- Created `LicenseInsuranceSection.astro` component with:
  - Responsive grid layout (1→2→3 columns based on viewport)
  - Trust-focused header with shield icon
  - Credential type summary pills showing counts
  - Staggered entrance animations
  - Empty state handling
  - Trust statement footer with call-to-action
  - Full responsive and accessibility support

- Created `license-insurance.config.ts` configuration file with:
  - Sample credentials (business license, general liability, professional liability)
  - Customizable SVG icons for each credential type
  - Section configuration (heading, subheading, columns)
  - Helper functions for checking expiring/expired credentials
  - Well-documented instructions for customization

- Integrated the new section into the homepage (`index.astro`):
  - Added import for the new component and config
  - Placed the License & Insurance section after Accreditation Badges section

- Updated type exports in `src/types/index.ts`

### Files Modified
- `src/types/trust-badge.ts` - Extended with new types
- `src/types/index.ts` - Added new type exports
- `src/pages/index.astro` - Integrated new section

### Files Created
- `src/components/LicenseInsuranceCard.astro` - Individual credential card component
- `src/components/LicenseInsuranceSection.astro` - Section container component
- `src/config/license-insurance.config.ts` - Configuration and sample data

### Notes for Developer
- **Update Sample Data**: The configuration file contains placeholder data. Replace with actual business credentials:
  - Update credential numbers (currently masked as `XXXXX`)
  - Add real verification URLs
  - Update expiration dates
  - Add workers' compensation or surety bonds if applicable (commented examples included)

- **Verification URLs**: Ensure all verification URLs link to official sources (state licensing boards, insurance certificate verification systems, etc.)

- **Expiration Monitoring**: The config file includes helper functions (`getExpiringCredentials()`, `getExpiredCredentials()`) that can be used for admin notifications

- **Legal Compliance**: Keep credential information accurate and up-to-date. Displaying false or outdated credential information may have legal implications

- **Styling**: The component uses the existing design system variables and follows the BEM naming convention consistent with other components in the codebase
</summary>