import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
}

const META_BY_PATH: Record<string, PageMeta> = {
  '/': {
    title: 'Managed By Luna | Premium Websites & Social Media Management',
    description:
      'Managed By Luna builds premium websites and manages social media, content and digital campaigns for businesses looking to strengthen their online presence.',
    canonicalPath: '/',
  },
  '/about': {
    title: 'About Managed By Luna | Creative Digital Team',
    description:
      'Meet the creative minds behind Managed By Luna — bringing together web development, strategy, content, photography and editing.',
    canonicalPath: '/about',
  },
  '/services': {
    title: 'Digital Services | Managed By Luna',
    description:
      "Explore Managed By Luna's website development, social media management, content creation and digital advertising services.",
    canonicalPath: '/services',
  },
  '/website-services': {
    title: 'Website Development Services | Managed By Luna',
    description:
      'Premium, custom and responsive website development for businesses, brands, portfolios and creative projects.',
    canonicalPath: '/website-services',
  },
  '/social-media': {
    title: 'Social Media Management | Managed By Luna',
    description:
      'Social media management, content planning, reel editing, SEO-focused content, community management and Meta advertising.',
    canonicalPath: '/social-media',
  },
  '/contact': {
    title: 'Contact Managed By Luna | Start Your Project',
    description:
      'Contact Managed By Luna for premium website development, social media management, content creation and digital growth services.',
    canonicalPath: '/contact',
  },
};

const BASE_URL = 'https://managedbyluna.com';

function updateMetaTag(selector: string, attr: 'content' | 'href', value: string) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el && selector.startsWith('meta')) {
    el = document.createElement('meta');
    // Parse selector to assign attributes
    const nameMatch = selector.match(/name="([^"]+)"/);
    const propMatch = selector.match(/property="([^"]+)"/);
    if (nameMatch) el.setAttribute('name', nameMatch[1]);
    if (propMatch) el.setAttribute('property', propMatch[1]);
    document.head.appendChild(el);
  }
  if (el) {
    el.setAttribute(attr, value);
  }
}

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const pageMeta =
      META_BY_PATH[pathname] || {
        title: 'Lost in the Luna | 404 | Managed By Luna',
        description: 'Looks like this page disappeared into space.',
        canonicalPath: pathname,
      };

    // Update document title
    document.title = pageMeta.title;

    // Update Meta Description
    updateMetaTag('meta[name="description"]', 'content', pageMeta.description);

    // Canonical URL
    const cleanCanonical = `${BASE_URL}${pageMeta.canonicalPath === '/' ? '/' : pageMeta.canonicalPath}`;
    updateMetaTag('link[rel="canonical"]', 'href', cleanCanonical);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'content', pageMeta.title);
    updateMetaTag('meta[property="og:description"]', 'content', pageMeta.description);
    updateMetaTag('meta[property="og:url"]', 'content', cleanCanonical);

    // Twitter
    updateMetaTag('meta[name="twitter:title"]', 'content', pageMeta.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', pageMeta.description);
  }, [location.pathname]);

  return null;
}
