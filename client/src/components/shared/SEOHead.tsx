/**
 * TASK-26: SEOHead — Dynamic meta tags, Open Graph, Twitter Cards, and JSON-LD
 * Sets document.title and injects/updates <meta> tags in <head>.
 * Used on every page via MarketingLayout or directly.
 */
import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = 'Oplytics.digital';
const DEFAULT_OG_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-main-8i2QPeXPF5Zif5HP36QHAA.webp';
const BASE_URL = 'https://oplytics.digital';

function setMetaTag(property: string, content: string, isName = false) {
  const attr = isName ? 'name' : 'property';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data: Record<string, unknown>) {
  let el = document.querySelector('script[data-seo-jsonld]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-seo-jsonld', 'true');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  jsonLd,
}: SEOHeadProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const canonical = canonicalUrl || `${BASE_URL}${window.location.pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    // Standard meta
    setMetaTag('description', description, true);

    // Open Graph
    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', canonical);
    setMetaTag('og:type', ogType);
    setMetaTag('og:site_name', SITE_NAME);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', fullTitle, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', image, true);

    // Canonical
    setLinkTag('canonical', canonical);

    // JSON-LD
    if (jsonLd) {
      setJsonLd(jsonLd);
    }
  }, [fullTitle, description, image, canonical, ogType, jsonLd]);

  return null;
}

/** Pre-built JSON-LD for the Organisation */
export const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oplytics.digital',
  url: 'https://oplytics.digital',
  logo: 'https://oplytics.digital/logo.png',
  description: 'Operational excellence platform for manufacturing. Real-time visibility, digital management, and continuous improvement.',
  sameAs: [
    'https://www.linkedin.com/company/oplytics',
  ],
};
