export const CONTACT = {
  phoneDisplay: '+91 93118 57277',
  phoneTel: '+919311857277',
  whatsapp: 'https://wa.me/919311857277',
  email: 'managedbyluna@gmail.com',
} as const;

export const PROJECTS = [
  {
    id: '01',
    name: 'URVI',
    category: 'Project / Repository',
    href: 'https://github.com/adi049/urvi',
    cta: 'VIEW PROJECT',
  },
  {
    id: '02',
    name: 'ANSH MAKEOVERS',
    category: 'Beauty / Creative Website',
    href: 'https://anshmakeovers.com/',
    cta: 'VIEW WEBSITE',
  },
  {
    id: '03',
    name: '24SEVEN LIBRARY MANAGEMENT',
    category: 'Education / Management',
    href: 'https://24sevenlibrary.in/',
    cta: 'VIEW WEBSITE',
  },
  {
    id: '04',
    name: 'SKIN REVITAL',
    category: 'Wellness / Aesthetic',
    href: 'https://skinrevital.in/',
    cta: 'VIEW WEBSITE',
  },
  {
    id: '05',
    name: '24SEVEN LIBRARY',
    category: 'Education / Platform',
    href: 'https://24sevenlibrary.in/',
    cta: 'VIEW WEBSITE',
  },
  {
    id: '06',
    name: 'THE DENTAL POINT',
    category: 'Healthcare / Clinic',
    href: 'https://thedentalpoint.org/',
    cta: 'VIEW WEBSITE',
  },
  {
    id: '07',
    name: 'NEW RPL',
    category: 'Digital / Experimental',
    href: 'https://adi049.github.io/newRPL/',
    cta: 'VIEW WEBSITE',
  },
  {
    id: '08',
    name: 'DAMANDEEP KAUR',
    category: 'Personal / Portfolio',
    href: 'https://damandeepkaur.in/',
    cta: 'VIEW WEBSITE',
  },
] as const;

/** Portfolio index used on the dedicated Website Services page.
 *  URVI is a GitHub repository — never labelled as a live website. */
export const WEBSITE_PROJECTS = [
  { id: '01', name: 'URVI', category: 'PROJECT / REPOSITORY', href: 'https://github.com/adi049/urvi', cta: 'VIEW PROJECT' },
  { id: '02', name: 'ANSH MAKEOVERS', category: 'LIVE WEBSITE', href: 'https://anshmakeovers.com/', cta: 'VIEW WEBSITE' },
  { id: '03', name: '24SEVEN LIBRARY MANAGEMENT', category: 'LIVE WEBSITE', href: 'https://24sevenlibrary.in/', cta: 'VIEW WEBSITE' },
  { id: '04', name: 'SKIN REVITAL', category: 'LIVE WEBSITE', href: 'https://skinrevital.in/', cta: 'VIEW WEBSITE' },
  { id: '05', name: '24SEVEN LIBRARY', category: 'LIVE WEBSITE', href: 'https://24sevenlibrary.in/', cta: 'VIEW WEBSITE' },
  { id: '06', name: 'THE DENTAL POINT', category: 'LIVE WEBSITE', href: 'https://thedentalpoint.org/', cta: 'VIEW WEBSITE' },
  { id: '07', name: 'NEW RPL', category: 'LIVE WEBSITE', href: 'https://adi049.github.io/newRPL/', cta: 'VIEW WEBSITE' },
  { id: '08', name: 'DAMANDEEP KAUR', category: 'LIVE WEBSITE', href: 'https://damandeepkaur.in/', cta: 'VIEW WEBSITE' },
] as const;

export type WebsiteType = {
  id: string;
  title: string;
  desc: string;
  /** abstract preview glyph key */
  glyph: 'business' | 'luxury' | 'classic' | 'aesthetic' | 'portfolio' | 'landing' | 'creative' | 'custom';
};

export const WEBSITE_TYPES: WebsiteType[] = [
  { id: '01', title: 'BUSINESS WEBSITES', desc: 'Professional digital presence for businesses, services and local brands.', glyph: 'business' },
  { id: '02', title: 'LUXURY WEBSITES', desc: 'High-end visual experiences focused on premium brand positioning.', glyph: 'luxury' },
  { id: '03', title: 'CLASSIC WEBSITES', desc: 'Elegant, clean and timeless layouts for businesses that prefer a sophisticated identity.', glyph: 'classic' },
  { id: '04', title: 'AESTHETIC WEBSITES', desc: 'Visually expressive websites built around strong design, photography and branding.', glyph: 'aesthetic' },
  { id: '05', title: 'PORTFOLIO WEBSITES', desc: 'Personal and professional portfolios designed to showcase work effectively.', glyph: 'portfolio' },
  { id: '06', title: 'LANDING PAGES', desc: 'Focused pages designed around a specific campaign, service or conversion goal.', glyph: 'landing' },
  { id: '07', title: 'CREATIVE WEBSITES', desc: 'Experimental and visually distinctive digital experiences.', glyph: 'creative' },
  { id: '08', title: 'CUSTOM BUSINESS WEBSITES', desc: 'Custom-built websites based on the exact requirements of a business.', glyph: 'custom' },
];

export type NavItem = {
  label: string;
  path: string;
  scrollTo?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'SERVICES', path: '/services' },
  { label: 'WEBSITE SERVICES', path: '/website-services' },
  { label: 'SOCIAL MEDIA', path: '/social-media' },
  { label: 'CONTACT', path: '/', scrollTo: 'contact' },
];
