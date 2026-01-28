/**
 * Case Studies Configuration
 * Contains sample case study data demonstrating the long-form case study template
 * with problem-solution-results format, project timeline, customer quotes, and images.
 */

import type { CaseStudy } from '../types/case-study';

/**
 * Sample case studies for the Houston Web Services portfolio
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'houston-dental-care',
    slug: 'houston-dental-care',
    title: 'Houston Family Dental Care: Digital Transformation',
    subtitle: 'How we increased patient bookings by 150% with a modern website redesign',
    summary: 'Complete website redesign for a dental practice in Houston, TX. Includes online appointment booking, patient portal integration, and HIPAA-compliant contact forms.',
    metaDescription: 'Case study: How Houston Family Dental Care increased patient bookings by 150% with a modern website redesign featuring online scheduling and patient portal integration.',

    client: {
      name: 'Houston Family Dental Care',
      logo: '/case-studies/dental-care/logo.svg',
      industry: 'Healthcare / Dental',
      companySize: '15-25 employees',
      location: 'Houston, TX',
      website: 'https://example-dental.com',
    },

    category: 'web-app',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'fullstack' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'Stripe', category: 'ecommerce' },
      { name: 'TypeScript', category: 'frontend' },
    ],
    services: ['Website Design', 'Web Development', 'UX/UI Design', 'SEO Optimization', 'Hosting & Maintenance'],

    projectStartDate: '2024-07-01',
    projectEndDate: '2024-10-20',
    projectDuration: '4 months',

    heroImage: {
      src: '/case-studies/dental-care/hero.svg',
      alt: 'Houston Family Dental Care website homepage showcasing modern design with appointment booking',
      width: 1200,
      height: 630,
      placement: 'hero',
    },

    images: [
      {
        src: '/case-studies/dental-care/before.svg',
        alt: 'Original Houston Family Dental website with outdated design',
        width: 800,
        height: 600,
        placement: 'problem',
        caption: 'The original website had an outdated design and no online booking capabilities',
        order: 1,
      },
      {
        src: '/case-studies/dental-care/wireframes.svg',
        alt: 'Wireframe designs for the new dental website',
        width: 800,
        height: 600,
        placement: 'solution',
        caption: 'User-centered wireframes focused on easy appointment scheduling',
        order: 1,
      },
      {
        src: '/case-studies/dental-care/homepage.svg',
        alt: 'New homepage design with hero section and booking CTA',
        width: 800,
        height: 600,
        placement: 'solution',
        caption: 'The new homepage prominently features online booking',
        order: 2,
      },
      {
        src: '/case-studies/dental-care/booking-system.svg',
        alt: 'Online appointment booking interface',
        width: 800,
        height: 600,
        placement: 'solution',
        caption: 'Streamlined 3-step booking process reduces friction',
        order: 3,
      },
      {
        src: '/case-studies/dental-care/mobile.svg',
        alt: 'Mobile responsive design of the dental website',
        width: 400,
        height: 800,
        placement: 'gallery',
        caption: 'Fully responsive design for mobile patients',
        order: 1,
      },
      {
        src: '/case-studies/dental-care/patient-portal.svg',
        alt: 'Patient portal dashboard',
        width: 800,
        height: 600,
        placement: 'gallery',
        caption: 'Secure patient portal for managing appointments and records',
        order: 2,
      },
      {
        src: '/case-studies/dental-care/analytics.svg',
        alt: 'Analytics dashboard showing improved metrics',
        width: 800,
        height: 600,
        placement: 'results',
        caption: 'Real-time analytics showing dramatic improvement in bookings',
        order: 1,
      },
    ],

    problem: {
      overview: 'Houston Family Dental Care had been operating with an outdated website that was built over 8 years ago. The practice was losing potential patients to competitors with modern online booking systems. Their existing website was not mobile-friendly, had no online scheduling capability, and failed to convey the warm, professional environment of their practice.',
      challenges: [
        {
          title: 'No Online Booking',
          description: 'Patients could only schedule appointments by phone during business hours, leading to missed opportunities and frustrated potential patients who expected online convenience.',
          icon: 'clock',
        },
        {
          title: 'Poor Mobile Experience',
          description: 'Over 60% of their traffic came from mobile devices, but the old site was not responsive, causing high bounce rates and lost conversions.',
          icon: 'mobile',
        },
        {
          title: 'Outdated Design',
          description: 'The visual design looked dated compared to competitors, failing to inspire confidence in the quality of care patients could expect.',
          icon: 'chart-down',
        },
        {
          title: 'Low Search Visibility',
          description: 'The practice ranked on page 3+ for local dental searches, making it nearly invisible to potential new patients searching online.',
          icon: 'search',
        },
      ],
    },

    solution: {
      overview: 'We designed and developed a comprehensive digital solution that transformed Houston Family Dental Care\'s online presence. Our approach focused on patient experience, combining beautiful design with powerful functionality to make scheduling appointments effortless.',
      approaches: [
        {
          title: 'Modern, Trust-Building Design',
          description: 'Created a warm, professional design that showcases the practice\'s friendly environment with high-quality photography, patient testimonials, and clear service information.',
          technologies: ['Figma', 'React', 'Tailwind CSS'],
          icon: 'design',
        },
        {
          title: 'Integrated Online Booking System',
          description: 'Built a custom booking system that syncs with the practice management software, allowing patients to see real-time availability and book appointments 24/7.',
          technologies: ['Next.js', 'PostgreSQL', 'API Integration'],
          icon: 'code',
        },
        {
          title: 'HIPAA-Compliant Patient Portal',
          description: 'Developed a secure patient portal where patients can view records, complete forms, and manage their appointments online.',
          technologies: ['TypeScript', 'Encryption', 'Stripe'],
          icon: 'shield',
        },
        {
          title: 'Local SEO Optimization',
          description: 'Implemented comprehensive local SEO strategy including Google Business Profile optimization, local schema markup, and content optimization for dental keywords.',
          technologies: ['Schema.org', 'Google Analytics', 'Search Console'],
          icon: 'chart-up',
        },
      ],
    },

    results: {
      overview: 'The new website launched in October 2024 and immediately began delivering measurable results. Within the first three months, Houston Family Dental Care saw dramatic improvements across all key metrics.',
      metrics: [
        {
          label: 'Increase in Online Bookings',
          value: '150%',
          previousValue: 'From 0 to 150+/month',
          description: 'Monthly appointment bookings through the new online system',
          icon: 'leads',
        },
        {
          label: 'Mobile Conversion Rate',
          value: '3.2x',
          previousValue: 'Up from 0.8%',
          description: 'Conversion rate improvement on mobile devices',
          icon: 'conversion',
        },
        {
          label: 'Local Search Ranking',
          value: '#3',
          previousValue: 'Previously page 3+',
          description: 'Google ranking for "dentist near me" in Houston',
          icon: 'traffic',
        },
        {
          label: 'Time Saved Weekly',
          value: '15 hrs',
          description: 'Staff time saved on phone scheduling and paperwork',
          icon: 'time',
        },
        {
          label: 'Patient Satisfaction',
          value: '4.9/5',
          previousValue: 'Up from 4.2/5',
          description: 'Average rating mentioning website experience',
          icon: 'satisfaction',
        },
        {
          label: 'Revenue Growth',
          value: '35%',
          description: 'Year-over-year revenue increase attributed to new patients',
          icon: 'revenue',
        },
      ],
    },

    timeline: [
      {
        title: 'Discovery & Strategy',
        description: 'Conducted stakeholder interviews, competitor analysis, patient journey mapping, and defined project goals and KPIs.',
        duration: '2 weeks',
        startDate: '2024-07-01',
        endDate: '2024-07-14',
        icon: 'discovery',
      },
      {
        title: 'UX Research & Design',
        description: 'Created user personas, information architecture, wireframes, and high-fidelity mockups with multiple rounds of client feedback.',
        duration: '4 weeks',
        startDate: '2024-07-15',
        endDate: '2024-08-11',
        icon: 'design',
      },
      {
        title: 'Development & Integration',
        description: 'Built the frontend and backend, integrated with practice management software, implemented booking system, and developed patient portal.',
        duration: '8 weeks',
        startDate: '2024-08-12',
        endDate: '2024-10-06',
        icon: 'development',
      },
      {
        title: 'Testing & QA',
        description: 'Comprehensive testing including accessibility audit, security review, HIPAA compliance verification, and cross-browser/device testing.',
        duration: '1 week',
        startDate: '2024-10-07',
        endDate: '2024-10-13',
        icon: 'testing',
      },
      {
        title: 'Launch & Training',
        description: 'Deployed to production, conducted staff training on the new systems, and monitored initial performance.',
        duration: '1 week',
        startDate: '2024-10-14',
        endDate: '2024-10-20',
        icon: 'launch',
      },
    ],

    quotes: [
      {
        quote: 'The new website has completely transformed how we connect with patients. We went from zero online bookings to over 150 a month. It\'s been a game-changer for our practice.',
        name: 'Dr. Sarah Mitchell',
        title: 'Owner & Lead Dentist',
        company: 'Houston Family Dental Care',
        avatar: '/case-studies/dental-care/dr-mitchell.svg',
        placement: 'hero',
      },
      {
        quote: 'Before the redesign, we were losing patients to competitors simply because they couldn\'t book online. Patients expect convenience, and we couldn\'t provide it.',
        name: 'Maria Rodriguez',
        title: 'Office Manager',
        company: 'Houston Family Dental Care',
        placement: 'problem',
      },
      {
        quote: 'The Houston Web Services team really understood our needs. They didn\'t just build a website—they created a system that makes our patients\' lives easier and our team more efficient.',
        name: 'Dr. Sarah Mitchell',
        title: 'Owner & Lead Dentist',
        company: 'Houston Family Dental Care',
        avatar: '/case-studies/dental-care/dr-mitchell.svg',
        placement: 'solution',
      },
      {
        quote: 'I love being able to book my appointments online at any time. The patient portal makes it so easy to manage my family\'s dental care.',
        name: 'Jennifer Thompson',
        title: 'Patient',
        company: 'Houston Family Dental Care',
        placement: 'results',
      },
    ],

    cta: {
      headline: 'Ready to Transform Your Practice?',
      description: 'Let\'s discuss how we can help you attract more patients and streamline your operations with a modern website.',
      primaryButtonText: 'Get a Free Consultation',
      primaryButtonUrl: '/contact',
      secondaryButtonText: 'View Our Services',
      secondaryButtonUrl: '/services',
    },

    relatedCaseStudyIds: ['houston-law-group', 'nonprofit-redesign'],

    published: true,
    featured: true,
    keywords: ['dental website design', 'healthcare web development', 'online booking system', 'HIPAA compliant', 'Houston dental'],
  },
  {
    id: 'houston-law-group',
    slug: 'houston-law-group',
    title: 'Houston Law Group: Professional Legal Presence',
    subtitle: 'Building trust and generating leads with a sophisticated web presence',
    summary: 'Professional legal services website with practice area pages, attorney profiles, and secure client intake forms. Optimized for local SEO to attract Houston-area clients.',
    metaDescription: 'Case study: How Houston Law Group increased qualified leads by 200% with a professional website redesign featuring attorney profiles and secure intake forms.',

    client: {
      name: 'Houston Law Group',
      logo: '/case-studies/law-group/logo.svg',
      industry: 'Legal Services',
      companySize: '25-50 employees',
      location: 'Houston, TX',
      website: 'https://example-law.com',
    },

    category: 'website',
    technologies: [
      { name: 'WordPress', category: 'cms' },
      { name: 'PHP', category: 'backend' },
      { name: 'ACF Pro', category: 'cms' },
      { name: 'JavaScript', category: 'frontend' },
    ],
    services: ['Website Design', 'CMS Development', 'SEO Optimization', 'Content Strategy'],

    projectStartDate: '2024-04-15',
    projectEndDate: '2024-07-30',
    projectDuration: '3.5 months',

    heroImage: {
      src: '/case-studies/law-group/hero.svg',
      alt: 'Houston Law Group professional website homepage',
      width: 1200,
      height: 630,
      placement: 'hero',
    },

    images: [
      {
        src: '/case-studies/law-group/before.svg',
        alt: 'Original Houston Law Group website',
        width: 800,
        height: 600,
        placement: 'problem',
        caption: 'The original website lacked professionalism and trust signals',
        order: 1,
      },
      {
        src: '/case-studies/law-group/attorney-profiles.svg',
        alt: 'Attorney profile pages',
        width: 800,
        height: 600,
        placement: 'solution',
        caption: 'Professional attorney profiles build credibility',
        order: 1,
      },
      {
        src: '/case-studies/law-group/practice-areas.svg',
        alt: 'Practice area pages',
        width: 800,
        height: 600,
        placement: 'solution',
        caption: 'Detailed practice area pages for SEO and client education',
        order: 2,
      },
    ],

    problem: {
      overview: 'Houston Law Group\'s existing website was template-based and failed to differentiate them from competitors. The firm was struggling to generate qualified leads online and losing potential clients to firms with more professional digital presences.',
      challenges: [
        {
          title: 'Lack of Trust Signals',
          description: 'The website didn\'t showcase case results, client testimonials, or attorney credentials effectively.',
          icon: 'users',
        },
        {
          title: 'Poor Lead Quality',
          description: 'Generic contact forms attracted unqualified inquiries, wasting attorney time on consultations that didn\'t convert.',
          icon: 'chart-down',
        },
        {
          title: 'Invisible in Search',
          description: 'The firm didn\'t rank for key practice area terms, missing out on potential clients actively searching for legal help.',
          icon: 'search',
        },
      ],
    },

    solution: {
      overview: 'We created a sophisticated, trust-building website that positions Houston Law Group as the premier choice for legal services in the Houston area.',
      approaches: [
        {
          title: 'Authority-Building Design',
          description: 'Professional design with prominent case results, client testimonials, and attorney credentials that establish immediate credibility.',
          technologies: ['WordPress', 'ACF Pro'],
          icon: 'design',
        },
        {
          title: 'Smart Lead Qualification',
          description: 'Multi-step intake forms that pre-qualify leads based on case type, gathering essential information before the initial consultation.',
          technologies: ['JavaScript', 'PHP'],
          icon: 'users',
        },
        {
          title: 'Practice Area SEO',
          description: 'Comprehensive content strategy with detailed practice area pages optimized for local legal searches.',
          technologies: ['Schema.org', 'Yoast SEO'],
          icon: 'chart-up',
        },
      ],
    },

    results: {
      overview: 'The new website transformed Houston Law Group\'s digital presence and lead generation capabilities.',
      metrics: [
        {
          label: 'Qualified Leads',
          value: '200%',
          description: 'Increase in qualified consultation requests',
          icon: 'leads',
        },
        {
          label: 'Search Rankings',
          value: 'Top 5',
          description: 'For 15+ practice area keywords',
          icon: 'traffic',
        },
        {
          label: 'Consultation Rate',
          value: '65%',
          previousValue: 'Up from 25%',
          description: 'Lead-to-consultation conversion rate',
          icon: 'conversion',
        },
        {
          label: 'Time to Qualify',
          value: '-50%',
          description: 'Reduction in time spent qualifying leads',
          icon: 'time',
        },
      ],
    },

    timeline: [
      {
        title: 'Discovery & Planning',
        description: 'Analyzed competitor landscape, conducted stakeholder interviews, and defined content strategy.',
        duration: '2 weeks',
        icon: 'discovery',
      },
      {
        title: 'Design & Content',
        description: 'Created visual design, wrote practice area content, and photographed attorneys.',
        duration: '4 weeks',
        icon: 'design',
      },
      {
        title: 'Development',
        description: 'Built WordPress theme, implemented intake forms, and integrated with CRM.',
        duration: '6 weeks',
        icon: 'development',
      },
      {
        title: 'Launch & SEO',
        description: 'Deployed site, implemented SEO strategy, and began content marketing.',
        duration: '2 weeks',
        icon: 'launch',
      },
    ],

    quotes: [
      {
        quote: 'Our new website pays for itself many times over each month in new client acquisition. The quality of leads we receive now is dramatically better.',
        name: 'James Morrison',
        title: 'Managing Partner',
        company: 'Houston Law Group',
        avatar: '/case-studies/law-group/morrison.svg',
        placement: 'hero',
      },
      {
        quote: 'The intake forms save us hours every week. We only spend time on consultations that are likely to convert to cases.',
        name: 'Amanda Chen',
        title: 'Client Relations Manager',
        company: 'Houston Law Group',
        placement: 'results',
      },
    ],

    cta: {
      headline: 'Elevate Your Firm\'s Digital Presence',
      description: 'Let\'s create a website that builds trust and generates qualified leads for your practice.',
      primaryButtonText: 'Schedule a Consultation',
      primaryButtonUrl: '/contact',
      secondaryButtonText: 'See Our Work',
      secondaryButtonUrl: '/portfolio',
    },

    relatedCaseStudyIds: ['houston-dental-care'],

    published: true,
    featured: false,
    keywords: ['law firm website', 'legal web design', 'attorney website', 'law firm SEO', 'Houston legal'],
  },
];

/**
 * Get a case study by slug
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

/**
 * Get all published case studies
 */
export function getPublishedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.published);
}

/**
 * Get featured case studies
 */
export function getFeaturedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.published && cs.featured);
}

/**
 * Get related case studies
 */
export function getRelatedCaseStudies(caseStudy: CaseStudy): CaseStudy[] {
  if (!caseStudy.relatedCaseStudyIds) return [];
  return caseStudy.relatedCaseStudyIds
    .map((id) => CASE_STUDIES.find((cs) => cs.id === id))
    .filter((cs): cs is CaseStudy => cs !== undefined && cs.published);
}
