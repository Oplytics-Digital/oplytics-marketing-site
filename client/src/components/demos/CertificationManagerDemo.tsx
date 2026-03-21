/**
 * Certification Manager Demo — Coming Soon placeholder
 * Replaces manufactured animated demo with a simple static placeholder
 * until real screenshots are available from the live service.
 */
import { Award } from 'lucide-react';

export default function CertificationManagerDemo() {
  return (
    <div className="aspect-video flex flex-col items-center justify-center p-8 text-center relative">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-6 border border-[#F59E0B]/20">
          <Award className="w-7 h-7 text-[#F59E0B]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
          Coming Soon
        </h3>
        <p className="text-sm text-[#8890A0] max-w-md mx-auto">
          Certification Manager is currently in development. Full interactive demos will be available when the service launches.
        </p>
      </div>
    </div>
  );
}
