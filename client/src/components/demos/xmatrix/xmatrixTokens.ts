/**
 * SQDCP pillar tokens — inlined from @pablo2410/core-server + oplytics-policy-deployment's
 * lib/store.ts so the marketing demo has zero dependency on the product packages.
 * Keep these values in sync with SQDCP_PILLAR_COLORS in @pablo2410/core-server.
 */
export const SQDCP_PILLARS = ['safety', 'quality', 'delivery', 'cost', 'people'] as const;

export const SQDCP_PILLAR_COLORS: Record<string, string> = {
  safety: '#ef4444',
  quality: '#3b82f6',
  delivery: '#f59e0b',
  cost: '#10b981',
  people: '#a855f7',
};

export const SQDCP_PILLAR_LABELS: Record<string, string> = {
  safety: 'Safety',
  quality: 'Quality',
  delivery: 'Delivery',
  cost: 'Cost',
  people: 'People',
};

/** Mirrors getCategoryColor() in oplytics-policy-deployment/client/src/lib/store.ts */
export function getCategoryColor(category: string): string {
  return SQDCP_PILLAR_COLORS[category] ?? '#64748b';
}

export const STATUS_COLORS: Record<string, string> = {
  'on-track': '#10b981',
  'at-risk': '#f59e0b',
  'off-track': '#ef4444',
  'not-started': '#596475',
  'completed': '#10b981',
};

/** Mirrors getStatusColor() in oplytics-policy-deployment/client/src/lib/store.ts */
export function getStatusColor(status: string): string {
  return STATUS_COLORS[status] ?? '#596475';
}
