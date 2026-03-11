/**
 * Service Status Page
 * Design: "Neon Operations"
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import { services, getServiceStatusColor, getServiceStatusLabel } from '@/config/services';
import { CheckCircle, Clock } from 'lucide-react';

export default function Status() {
  return (
    <MarketingLayout>
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]" />
              </span>
              <span className="text-sm font-medium text-[#22C55E]">All Systems Operational</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Service Status
            </h1>
            <p className="text-[#8890A0]">
              Current status of all Oplytics.digital platform services.
            </p>
          </div>

          <div className="space-y-3">
            {services.map(service => (
              <div
                key={service.id}
                className="flex items-center justify-between p-4 rounded-lg border border-[#1E2738] bg-[#0D1220]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: getServiceStatusColor(service.status) }}
                  />
                  <span className="text-sm font-medium text-white">{service.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {service.status === 'live' ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                      <span className="text-xs font-medium text-[#22C55E]">Operational</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 text-[#8C34E9]" />
                      <span className="text-xs font-medium text-[#8C34E9]">{getServiceStatusLabel(service.status)}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
