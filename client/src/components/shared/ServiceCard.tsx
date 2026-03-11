/**
 * TASK-05: ServiceCard Component
 * Design: "Neon Operations" — card with status badge, glow on hover
 *
 * Service name, tagline, icon/illustration.
 * Status badge (Live / In Development) driven by config.
 * Link to service solution page.
 * Consistent card sizing regardless of content length.
 */
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import type { ServiceConfig } from '@/config/services';
import { getServiceStatusLabel, getServiceStatusColor } from '@/config/services';

interface ServiceCardProps {
  service: ServiceConfig;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const statusColor = getServiceStatusColor(service.status);
  const statusLabel = getServiceStatusLabel(service.status);

  return (
    <Link href={`/solutions/${service.slug}`}>
      <div
        className="group relative h-full p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        style={{
          borderColor: '#1E2738',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = service.accentColor + '40';
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${service.accentColor}15`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = '#1E2738';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
          style={{ background: service.accentColor }}
        />

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
            style={{
              background: statusColor + '15',
              color: statusColor,
              border: `1px solid ${statusColor}30`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor }} />
            {statusLabel}
          </span>
        </div>

        {/* Service Name */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C084FC] transition-colors" style={{ fontFamily: 'Montserrat' }}>
          {service.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-[#8890A0] leading-relaxed flex-1 mb-4">
          {service.description}
        </p>

        {/* Link */}
        <div className="flex items-center gap-1 text-xs font-semibold text-[#8C34E9] group-hover:text-[#C084FC] transition-colors">
          Learn more
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
