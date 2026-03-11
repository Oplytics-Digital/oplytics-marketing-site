/**
 * TASK-05: FeatureGrid Component
 * Design: "Neon Operations" — glowing cards with hover illumination
 *
 * Configurable grid (2, 3, or 4 columns).
 * Each card: icon, title, description with hover animation.
 */
import { type ReactNode } from 'react';

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  sectionLabel?: string;
  sectionTitle?: string;
}

export default function FeatureGrid({ items, columns = 3, sectionLabel, sectionTitle }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {(sectionLabel || sectionTitle) && (
          <div className="text-center mb-14">
            {sectionLabel && (
              <span className="section-label text-[#8C34E9] mb-3 block">{sectionLabel}</span>
            )}
            {sectionTitle && (
              <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
                {sectionTitle}
              </h2>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] hover:border-[#8C34E9]/30 transition-all duration-300 hover:-translate-y-0.5"
              style={{ transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(140,52,233,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4 bg-[#8C34E9]/10 text-[#C084FC] group-hover:bg-[#8C34E9]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                {item.title}
              </h3>
              <p className="text-sm text-[#8890A0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
