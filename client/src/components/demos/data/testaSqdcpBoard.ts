/**
 * Testa Group — fictional SQDCP tier-board sample data for the public marketing demo.
 *
 * IMPORTANT: 100% fictional — no real customer or site names. Shape is a lightweight
 * version of the real SQDCP metric model (oplytics-subdomains/sqdcp), enough to drive
 * a faithful-looking tier board (status dots + trend sparklines + action counts).
 */

export type SqdcpStatus = 'green' | 'amber' | 'red' | 'none';

export interface SqdcpMetric {
  id: number;
  name: string;
  /** Short unit suffix rendered after the value, e.g. '%'. Empty for plain counts. */
  unit: string;
  value: number;
  target: number;
  status: SqdcpStatus;
  direction: 'up' | 'down';
  trend: number[];
}

export interface SqdcpPillar {
  code: 'S' | 'Q' | 'D' | 'C' | 'P';
  name: string;
  color: string;
  actionCount: number;
  metrics: SqdcpMetric[];
}

/** Pillar accent colours — mirrors CATEGORY_COLORS in the real SQDCPCard. */
export const SQDCP_CATEGORY_COLORS: Record<string, string> = {
  S: '#EF4444',
  Q: '#3b82f6',
  D: '#8C34E9',
  C: '#F59E0B',
  P: '#22C55E',
};

export const STATUS_COLORS: Record<SqdcpStatus, string> = {
  green: '#22C55E',
  amber: '#F59E0B',
  red: '#EF4444',
  none: '#596475',
};

export const TESTA_SQDCP_BOARD: SqdcpPillar[] = [
  {
    code: 'S', name: 'Safety', color: SQDCP_CATEGORY_COLORS.S, actionCount: 2,
    metrics: [
      { id: 1, name: 'Lost-time incidents', unit: '', value: 0, target: 0, status: 'green', direction: 'down', trend: [3, 2, 2, 1, 1, 0, 0, 0] },
      { id: 2, name: 'Near-miss reports', unit: '', value: 14, target: 10, status: 'green', direction: 'up', trend: [6, 8, 9, 11, 12, 13, 14, 14] },
      { id: 3, name: 'Safety audits complete', unit: '%', value: 92, target: 95, status: 'amber', direction: 'up', trend: [80, 84, 86, 88, 90, 91, 92, 92] },
    ],
  },
  {
    code: 'Q', name: 'Quality', color: SQDCP_CATEGORY_COLORS.Q, actionCount: 4,
    metrics: [
      { id: 4, name: 'First-pass yield', unit: '%', value: 96.4, target: 98, status: 'amber', direction: 'up', trend: [94.2, 94.8, 95.1, 95.4, 95.8, 96.0, 96.2, 96.4] },
      { id: 5, name: 'Scrap rate', unit: '%', value: 7.1, target: 5.5, status: 'red', direction: 'down', trend: [8.2, 8.0, 7.8, 7.6, 7.5, 7.3, 7.2, 7.1] },
      { id: 6, name: 'Customer complaints', unit: '', value: 3, target: 0, status: 'red', direction: 'down', trend: [6, 5, 5, 4, 4, 3, 3, 3] },
    ],
  },
  {
    code: 'D', name: 'Delivery', color: SQDCP_CATEGORY_COLORS.D, actionCount: 3,
    metrics: [
      { id: 7, name: 'On-time delivery', unit: '%', value: 94.2, target: 97, status: 'amber', direction: 'up', trend: [90.1, 91.0, 91.8, 92.5, 93.1, 93.6, 94.0, 94.2] },
      { id: 8, name: 'Schedule adherence', unit: '%', value: 88, target: 90, status: 'amber', direction: 'up', trend: [82, 83, 84, 85, 86, 87, 88, 88] },
      { id: 9, name: 'Order backlog', unit: '', value: 14, target: 10, status: 'red', direction: 'down', trend: [22, 20, 19, 18, 16, 15, 14, 14] },
    ],
  },
  {
    code: 'C', name: 'Cost', color: SQDCP_CATEGORY_COLORS.C, actionCount: 2,
    metrics: [
      { id: 10, name: 'OEE', unit: '%', value: 78.5, target: 85, status: 'amber', direction: 'up', trend: [70, 72, 73, 74, 75, 77, 78, 78.5] },
      { id: 11, name: 'Cost per unit (£)', unit: '', value: 12.4, target: 11.5, status: 'red', direction: 'down', trend: [13.6, 13.3, 13.1, 12.9, 12.7, 12.6, 12.5, 12.4] },
      { id: 12, name: 'Downtime hours', unit: '', value: 46, target: 35, status: 'amber', direction: 'down', trend: [62, 58, 55, 52, 50, 48, 47, 46] },
    ],
  },
  {
    code: 'P', name: 'People', color: SQDCP_CATEGORY_COLORS.P, actionCount: 1,
    metrics: [
      { id: 13, name: 'Attendance', unit: '%', value: 96.8, target: 97, status: 'green', direction: 'up', trend: [95.1, 95.5, 95.9, 96.1, 96.4, 96.6, 96.7, 96.8] },
      { id: 14, name: 'Training complete', unit: '%', value: 74, target: 80, status: 'amber', direction: 'up', trend: [60, 63, 66, 68, 70, 72, 73, 74] },
      { id: 15, name: 'CI engagement', unit: '%', value: 68, target: 80, status: 'amber', direction: 'up', trend: [52, 55, 58, 60, 63, 65, 67, 68] },
    ],
  },
];

export default TESTA_SQDCP_BOARD;
