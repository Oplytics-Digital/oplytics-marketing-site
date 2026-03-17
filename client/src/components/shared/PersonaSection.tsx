/**
 * Batch 3: "Who Is Oplytics For?" section
 * Tab-based layout with 9 persona cards. OpEx/CI Leader is the champion (highlighted).
 */
import { useState } from 'react';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import {
  Target, Briefcase, Building2, DollarSign, HardHat,
  Shield, CheckCircle, Server, Wrench
} from 'lucide-react';

interface Persona {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  isChampion?: boolean;
}

const personas: Persona[] = [
  {
    id: 'opex',
    title: 'OpEx / CI Leader',
    icon: <Target className="w-5 h-5" />,
    description: 'You live and breathe continuous improvement. But without the right digital infrastructure, your CI programmes rely on spreadsheets, manual updates and people remembering to follow the process. Oplytics is built for you — Policy Deployment, SQDCP Dashboards, OEE tracking and structured problem solving, all connected in one platform. Finally, a system that works the way CI should.',
    isChampion: true,
  },
  {
    id: 'ops-director',
    title: 'Operations Director / President',
    icon: <Briefcase className="w-5 h-5" />,
    description: "You're accountable for performance across every site, every shift, every line. But your visibility depends on what people choose to report — and by the time it reaches you, it's already too late to act. Oplytics gives you a live operational picture from asset to enterprise, with AI-supported decision making that keeps your teams focused on what matters.",
  },
  {
    id: 'ceo',
    title: 'CEO',
    icon: <Building2 className="w-5 h-5" />,
    description: "You set the strategy. Oplytics deploys it. Policy Deployment cascades your objectives from enterprise level down to every site, area and asset — with live tracking of whether it's working. Your strategy doesn't stop at the boardroom door.",
  },
  {
    id: 'cfo',
    title: 'CFO / Finance',
    icon: <DollarSign className="w-5 h-5" />,
    description: "Every improvement initiative costs money before it saves it. Oplytics makes the ROI visible — real-time OEE data, structured action tracking, and policy deployment that connects strategy to shop floor execution. You'll see where the losses are, what's being done about them, and whether it's working.",
  },
  {
    id: 'plant-manager',
    title: 'Plant Managers & Supervisors',
    icon: <HardHat className="w-5 h-5" />,
    description: "You run the floor. You know every problem before it gets escalated — but you're spending your day in meetings, chasing updates and firefighting. Oplytics puts structured improvement into the hands of your teams, so problems get contained, root causes get found, and actions get closed. Less firefighting. More leading.",
  },
  {
    id: 'hse',
    title: 'HSE Leader',
    icon: <Shield className="w-5 h-5" />,
    description: "Near misses don't become incidents if your teams have the tools to act fast. Oplytics gives HSE leaders structured Stop Work Authority, LOTO workflows, and safety action tracking — all integrated into the same platform your operations teams use every day.",
  },
  {
    id: 'quality',
    title: 'Quality Leader',
    icon: <CheckCircle className="w-5 h-5" />,
    description: "Quality issues rarely have one cause. Oplytics gives your team 5 Whys, Fishbone, and 8D methodology built into every action — with containment approval routed to you before work continues. Structured. Traceable. Auditable.",
  },
  {
    id: 'it',
    title: 'IT',
    icon: <Server className="w-5 h-5" />,
    description: "You're asked to connect systems that were never designed to talk to each other. Oplytics gives you a single integration hub — OplyticsConnect — that manages data feeds in and out of the platform. Standard APIs, clear architecture, enterprise security. Something you can actually support.",
  },
  {
    id: 'operator',
    title: 'Asset Operators',
    icon: <Wrench className="w-5 h-5" />,
    description: "You're closest to the problem. Oplytics gives you the tools to report it, contain it, and fix it — without waiting for someone else to notice. Simple data entry, clear actions, and AI guidance when you need it.",
  },
];

export default function PersonaSection() {
  const [activeId, setActiveId] = useState('opex');
  const active = personas.find(p => p.id === activeId) || personas[0];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40" role="region" aria-label="Who is Oplytics for">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="slide-up" className="text-center mb-10 sm:mb-14">
          <span className="section-label text-[#F59E0B] mb-3 block">Convincing Your Colleagues</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
            Who Is Oplytics For?
          </h2>
          <p className="text-sm sm:text-base text-[#8890A0] mt-4 max-w-2xl mx-auto">
            Every role in your organisation benefits from a connected operational excellence platform. Here is how Oplytics speaks to each.
          </p>
        </AnimateOnScroll>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {personas.map(persona => (
            <button
              key={persona.id}
              onClick={() => setActiveId(persona.id)}
              className={`
                inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200
                ${activeId === persona.id
                  ? persona.isChampion
                    ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/40 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                    : 'bg-[#8C34E9]/15 text-[#C084FC] border border-[#8C34E9]/40'
                  : 'text-[#8890A0] border border-[#1E2738] hover:border-[#8C34E9]/30 hover:text-white bg-[#0D1220]/60'
                }
              `}
            >
              {persona.icon}
              <span className="hidden sm:inline">{persona.title}</span>
              <span className="sm:hidden">{persona.title.split('/')[0].split('&')[0].trim()}</span>
              {persona.isChampion && activeId === persona.id && (
                <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#F59E0B]/20 text-[#F59E0B] ml-1 hidden sm:inline">
                  Champion
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Persona Card */}
        <AnimateOnScroll variant="fade-in" key={active.id}>
          <div
            className={`
              relative max-w-3xl mx-auto p-6 sm:p-8 rounded-xl border transition-all duration-300
              ${active.isChampion
                ? 'border-[#F59E0B]/30 bg-gradient-to-br from-[#F59E0B]/5 via-[#0D1220] to-[#0D1220]'
                : 'border-[#1E2738] bg-[#0D1220]'
              }
            `}
            style={{
              boxShadow: active.isChampion
                ? '0 0 30px rgba(245,158,11,0.08), 0 4px 20px rgba(0,0,0,0.3)'
                : '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            {/* Champion badge */}
            {active.isChampion && (
              <div className="absolute -top-3 left-6 sm:left-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#F59E0B] text-[#0D1220]">
                  <Target className="w-3 h-3" />
                  Champion Role
                </span>
              </div>
            )}

            <div className="flex items-start gap-4 sm:gap-5">
              <div
                className={`
                  w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center flex-shrink-0
                  ${active.isChampion
                    ? 'bg-[#F59E0B]/10 border border-[#F59E0B]/20'
                    : 'bg-[#8C34E9]/10 border border-[#8C34E9]/20'
                  }
                `}
              >
                <div className={active.isChampion ? 'text-[#F59E0B]' : 'text-[#C084FC]'}>
                  {active.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-3 ${active.isChampion ? 'text-[#F59E0B]' : 'text-white'}`}
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {active.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A0A8B8] leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
