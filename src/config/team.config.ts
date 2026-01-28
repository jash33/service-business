/**
 * Team Configuration
 * Contains team member data for the team page.
 * This configuration file centralizes all team member information.
 */

import type { TeamMember } from '../types/team';

/**
 * Team page configuration
 */
export const TEAM_PAGE_CONFIG = {
  /** Main heading for the team page hero */
  heroHeading: 'Meet Our Team',
  /** Subheading for the team page hero */
  heroSubheading: 'The talented people behind Houston Web Services',
  /** Section heading for the team grid */
  sectionHeading: 'Our Experts',
  /** Section description */
  sectionDescription: 'Every member of our team brings unique skills and passion to help your business succeed online.',
};

/**
 * Team members data
 * Add, edit, or remove team members here
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Founder & Lead Developer',
    bio: 'With over 8 years of experience in web development, James founded Houston Web Services to help local businesses establish a strong online presence. He specializes in creating high-performance websites that drive results.',
    photo: '/images/team/james-wilson.jpg',
    specializations: ['Web Development', 'React', 'Performance Optimization', 'SEO'],
    email: 'james@houstonwebservices.com',
    phone: '(832) 555-0101',
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      github: 'https://github.com/jameswilson',
      twitter: 'https://twitter.com/jameswilson',
    },
    yearsExperience: 8,
    certifications: ['Google Analytics Certified', 'AWS Solutions Architect'],
    featured: true,
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Senior UI/UX Designer',
    bio: 'Sarah brings creativity and user-centered design thinking to every project. Her designs have helped dozens of Houston businesses improve their conversion rates and customer engagement.',
    photo: '/images/team/sarah-chen.jpg',
    specializations: ['UI/UX Design', 'Brand Identity', 'User Research', 'Figma'],
    email: 'sarah@houstonwebservices.com',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      website: 'https://sarahchendesign.com',
    },
    yearsExperience: 6,
    certifications: ['Google UX Design Certificate'],
    featured: true,
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Full Stack Developer',
    bio: 'Michael is our go-to expert for complex web applications. He loves solving challenging technical problems and building scalable solutions that grow with your business.',
    photo: '/images/team/michael-rodriguez.jpg',
    specializations: ['Node.js', 'React', 'PostgreSQL', 'API Development'],
    email: 'michael@houstonwebservices.com',
    social: {
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      github: 'https://github.com/michaelrodriguez',
    },
    yearsExperience: 5,
    featured: false,
  },
  {
    id: 'emily-thompson',
    name: 'Emily Thompson',
    role: 'Digital Marketing Specialist',
    bio: 'Emily helps our clients get found online through strategic SEO and content marketing. Her data-driven approach has helped numerous businesses increase their organic traffic.',
    photo: '/images/team/emily-thompson.jpg',
    specializations: ['SEO', 'Content Strategy', 'Google Ads', 'Analytics'],
    email: 'emily@houstonwebservices.com',
    social: {
      linkedin: 'https://linkedin.com/in/emilythompson',
      twitter: 'https://twitter.com/emilythompson',
    },
    yearsExperience: 4,
    certifications: ['Google Ads Certified', 'HubSpot Content Marketing'],
    featured: true,
  },
  {
    id: 'david-nguyen',
    name: 'David Nguyen',
    role: 'WordPress Specialist',
    bio: 'David is our WordPress guru with expertise in custom themes and plugins. He ensures every WordPress site we build is secure, fast, and easy to manage.',
    photo: '/images/team/david-nguyen.jpg',
    specializations: ['WordPress', 'PHP', 'WooCommerce', 'Site Migration'],
    email: 'david@houstonwebservices.com',
    social: {
      linkedin: 'https://linkedin.com/in/davidnguyen',
    },
    yearsExperience: 6,
    featured: false,
  },
  {
    id: 'jessica-martinez',
    name: 'Jessica Martinez',
    role: 'Project Manager',
    bio: 'Jessica keeps our projects running smoothly and ensures clear communication between our team and clients. She is passionate about delivering exceptional results on time and within budget.',
    photo: '/images/team/jessica-martinez.jpg',
    specializations: ['Project Management', 'Client Relations', 'Agile', 'Quality Assurance'],
    email: 'jessica@houstonwebservices.com',
    phone: '(832) 555-0102',
    social: {
      linkedin: 'https://linkedin.com/in/jessicamartinez',
    },
    yearsExperience: 7,
    certifications: ['PMP Certified', 'Scrum Master'],
    featured: false,
  },
];

/**
 * Get featured team members only
 */
export function getFeaturedTeamMembers(): TeamMember[] {
  return TEAM_MEMBERS.filter((member) => member.featured);
}

/**
 * Get a team member by ID
 */
export function getTeamMemberById(id: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((member) => member.id === id);
}
