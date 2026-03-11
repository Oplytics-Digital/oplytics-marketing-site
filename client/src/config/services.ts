/**
 * TASK-01: Service Status Configuration
 * Single source of truth for all service statuses across the marketing site.
 * Controls hero badges, CTAs, language, and card displays on all pages.
 */

export type ServiceStatus = 'live' | 'in-development';

export interface ServiceConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ServiceStatus;
  slug: string;
  icon: string; // lucide icon name
  accentColor: string;
  subdomain?: string;
  heroImage?: string;
}

export const services: ServiceConfig[] = [
  {
    id: 'oee-manager',
    name: 'OEE Manager',
    tagline: 'Real-time equipment effectiveness tracking',
    description: 'Monitor Overall Equipment Effectiveness in real-time. Track availability, performance, and quality metrics across your entire production floor.',
    status: 'live',
    slug: 'oee-manager',
    icon: 'Gauge',
    accentColor: '#8C34E9',
    subdomain: 'oeemanager.oplytics.digital',
    heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-oee-Th2ta3q9vx8SDihX3BBphp.webp',
  },
  {
    id: 'sqdcp',
    name: 'SQDCP Logic',
    tagline: 'Daily management boards, digitised',
    description: 'Digital SQDCP boards that drive daily accountability. Safety, Quality, Delivery, Cost, and People metrics at a glance for every team.',
    status: 'live',
    slug: 'sqdcp',
    icon: 'LayoutGrid',
    accentColor: '#1DB8CE',
  },
  {
    id: 'action-manager',
    name: 'Action Manager',
    tagline: 'Track every action to closure',
    description: 'Capture, assign, and track corrective and preventive actions from any source. Ensure nothing falls through the cracks.',
    status: 'in-development',
    slug: 'action-manager',
    icon: 'ClipboardCheck',
    accentColor: '#22C55E',
  },
  {
    id: 'safety-manager',
    name: 'Safety Manager',
    tagline: 'Proactive safety culture, powered by data',
    description: 'Incident reporting, hazard tracking, safety observations, and compliance management in one unified platform.',
    status: 'in-development',
    slug: 'safety-manager',
    icon: 'Shield',
    accentColor: '#EF4444',
    heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-safety-6GF7P32Rwd5xBFHfEtSxvq.webp',
  },
  {
    id: 'policy-deployment',
    name: 'Policy Deployment',
    tagline: 'Align strategy to execution',
    description: 'Hoshin Kanri and X-matrix planning. Cascade strategic objectives through every level of your organisation.',
    status: 'in-development',
    slug: 'policy-deployment',
    icon: 'Target',
    accentColor: '#F59E0B',
  },
  {
    id: 'connect',
    name: 'Oplytics Connect',
    tagline: 'Integrate machines, sensors, and systems',
    description: 'Industrial IoT connectivity layer. Connect PLCs, sensors, and legacy systems to the Oplytics platform with zero-code configuration.',
    status: 'in-development',
    slug: 'connect',
    icon: 'Plug',
    accentColor: '#1DB8CE',
    heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-connect-BLrEbXt4nBnvZdECMPpzLm.webp',
  },
  {
    id: 'quality-manager',
    name: 'Quality Manager',
    tagline: 'End-to-end quality assurance',
    description: 'Non-conformance tracking, CAPA management, audit scheduling, and quality metrics dashboards.',
    status: 'in-development',
    slug: 'quality-manager',
    icon: 'CheckCircle',
    accentColor: '#22C55E',
  },
  {
    id: 'certification-manager',
    name: 'Certification Manager',
    tagline: 'Stay audit-ready, always',
    description: 'Manage ISO, IATF, and other certification requirements. Document control, audit trails, and compliance tracking.',
    status: 'in-development',
    slug: 'certification-manager',
    icon: 'Award',
    accentColor: '#F97316',
  },
];

export const liveServices = services.filter(s => s.status === 'live');
export const inDevServices = services.filter(s => s.status === 'in-development');

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return services.find(s => s.slug === slug);
}

export function getServiceStatusLabel(status: ServiceStatus): string {
  return status === 'live' ? 'Live' : 'In Development';
}

export function getServiceStatusColor(status: ServiceStatus): string {
  return status === 'live' ? '#22C55E' : '#8C34E9';
}
