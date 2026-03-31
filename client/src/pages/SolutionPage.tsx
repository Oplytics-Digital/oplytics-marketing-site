/**
 * SolutionPage — Standardised service page template (TASK-16 + BATCH-4)
 * All 8 service pages use this template: /solutions/:slug
 *
 * Sections (in order):
 *   1. Hero — Service name, tagline, status badge, primary CTA
 *   2. Problem — What problem does this service solve?
 *   3. Features — 4-6 key features with icons (FeatureGrid)
 *   4. Demo — See It In Action (moved above How It Works)
 *   5. How It Works — Step-by-step process (3-4 phases)
 *   6. Results — Verified metrics, research-backed stats, or neutral language
 *   7. AI Features — Built-in AI capabilities
 *   8. Custom Sections — Service-specific sections (IoT, Protocols, Tier Meetings)
 *   9. Cross-Sell — Related services
 *  10. CTA — Inline contact form
 *
 * CLAIMS POLICY: Results section enforces tier labels.
 * No pricing on service pages — CTAs link to /pricing.
 */
import { Suspense } from 'react';
import { useParams } from 'wouter';
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import ServiceCard from '@/components/shared/ServiceCard';
import ContactForm from '@/components/shared/ContactForm';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll, { StaggerContainer } from '@/components/shared/AnimateOnScroll';
import { AIFeatureList } from '@/components/shared/AIBadge';
import IoTShowcaseSection from '@/components/shared/IoTShowcaseSection';
import ConnectRolesProtocolsSection from '@/components/shared/ConnectRolesProtocolsSection';
import TierMeetingSection from '@/components/shared/TierMeetingSection';
import { getServiceBySlug, getCrossSellServices, getClaimTierLabel } from '@/config/services';
import { demoComponents } from '@/components/demos';
import { Link } from 'wouter';
import {
  Gauge, LayoutGrid, ClipboardCheck, Shield, Target,
  Plug, CheckCircle, Award, BarChart3, Zap, TrendingUp,
  Users, ArrowRight, Play, Monitor, AlertTriangle, BookOpen
} from 'lucide-react';

/** Service-specific feature data */
const serviceFeatures: Record<string, { icon: React.ReactNode; title: string; description: string }[]> = {
  'oee-manager': [
    { icon: <Gauge className="w-5 h-5" />, title: 'Real-Time OEE Tracking', description: 'Monitor availability, performance, and quality metrics as they happen across every machine and line.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Loss Categorisation', description: 'Automatically categorise downtime and speed losses. Pareto analysis identifies your biggest improvement opportunities.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Trend Analysis', description: 'Historical OEE trends by shift, line, product, and operator. Spot patterns before they become problems.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Automated Data Collection', description: 'Connect directly to PLCs and sensors via SmartConnect. Eliminate manual data entry errors.' },
    { icon: <Users className="w-5 h-5" />, title: 'Shift Handover', description: 'Digital shift handover reports with OEE summaries, open actions, and key events from the previous shift.' },
    { icon: <Target className="w-5 h-5" />, title: 'Target Management', description: 'Set OEE targets by line, product, and shift. Visual indicators show performance against target in real time.' },
  ],
  'sqdcp': [
    { icon: <LayoutGrid className="w-5 h-5" />, title: 'Digital Tier Boards', description: 'Replace whiteboards with real-time digital SQDCP boards. Accessible from any device, anywhere.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Safety First', description: 'Safety metrics front and centre. Track incidents, near-misses, and safety observations daily.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Quality Tracking', description: 'First-pass yield, scrap rates, and customer complaints. Quality data integrated from your QMS.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Delivery Performance', description: 'On-time delivery, schedule adherence, and backlog visibility. Keep your customers happy.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Cost Management', description: 'Track operational costs, waste, and efficiency metrics. Drive cost reduction initiatives.' },
    { icon: <Users className="w-5 h-5" />, title: 'People and Skills', description: 'Attendance, training matrices, and skills development tracking. Invest in your team.' },
  ],
  'action-manager': [
    { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Action Capture', description: 'Capture actions from any source — audits, incidents, meetings, tier boards. One unified action register.' },
    { icon: <Users className="w-5 h-5" />, title: 'Assignment and Ownership', description: 'Assign actions to individuals with clear due dates. Automatic escalation for overdue items.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Progress Tracking', description: 'Visual status tracking from open to verified closure. Nothing falls through the cracks.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics Dashboard', description: 'Action completion rates, ageing analysis, and source breakdown. Measure your improvement culture.' },
  ],
  'safety-manager': [
    { icon: <Shield className="w-5 h-5" />, title: 'Incident Reporting', description: 'Simple, mobile-first incident reporting. Capture details, photos, and witness statements in minutes.' },
    { icon: <Target className="w-5 h-5" />, title: 'Hazard Tracking', description: 'Identify, assess, and control hazards systematically. Risk matrices and control hierarchies built in.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Safety Observations', description: 'Encourage proactive safety culture with behavioural safety observations. Track positive and at-risk behaviours.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Compliance Dashboard', description: 'Track regulatory compliance, training requirements, and audit findings in one place.' },
  ],
  'policy-deployment': [
    { icon: <Target className="w-5 h-5" />, title: 'Hoshin Kanri', description: 'Cascade strategic objectives through every level of your organisation using the Hoshin planning methodology.' },
    { icon: <LayoutGrid className="w-5 h-5" />, title: 'X-Matrix Planning', description: 'Visual X-matrix links strategies to tactics, metrics, and owners. See the full picture at a glance.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Catchball Process', description: 'Facilitate the catchball process digitally. Align top-down objectives with bottom-up feedback.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Progress Reviews', description: 'Monthly and quarterly review cadence with automated status updates and bowling charts.' },
  ],
  'connect': [
    { icon: <Plug className="w-5 h-5" />, title: 'Machine Connectivity', description: 'Connect to PLCs, SCADA systems, and industrial sensors. Support for OPC-UA, MQTT, Modbus, and more.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Zero-Code Configuration', description: 'Visual configuration interface. Map machine signals to Oplytics data points without writing code.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Data Transformation', description: 'Transform raw machine data into meaningful metrics. Built-in calculation engine for OEE, cycle times, and more.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Edge Computing', description: 'Process data at the edge for low-latency responses. Local buffering ensures no data loss during connectivity issues.' },
  ],
  'quality-manager': [
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Non-Conformance Tracking', description: 'Capture and manage non-conformances from detection to disposition. Full traceability and audit trail.' },
    { icon: <ClipboardCheck className="w-5 h-5" />, title: 'CAPA Management', description: 'Structured corrective and preventive action workflow. Root cause analysis tools built in.' },
    { icon: <Target className="w-5 h-5" />, title: 'Audit Scheduling', description: 'Plan and execute internal and external audits. Track findings and corrective actions to closure.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Quality Metrics', description: 'First-pass yield, defect rates, cost of quality, and customer complaint tracking dashboards.' },
  ],
  'certification-manager': [
    { icon: <Award className="w-5 h-5" />, title: 'Standards Management', description: 'Manage ISO 9001, ISO 14001, IATF 16949, and other certification requirements in one place.' },
    { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Document Control', description: 'Version-controlled document management with approval workflows and distribution tracking.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Audit Trail', description: 'Complete audit trail for every document, process, and decision. Always audit-ready.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Compliance Tracking', description: 'Track compliance status across all standards. Gap analysis and improvement planning tools.' },
  ],
};

export default function SolutionPage() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug || '');

  if (!service) {
    return (
      <MarketingLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Solution Not Found
          </h1>
          <p className="text-[#8890A0] mb-8">The solution you are looking for does not exist.</p>
          <Link href="/" className="text-[#8C34E9] hover:text-[#C084FC] transition-colors">
            Return to homepage
          </Link>
        </div>
      </MarketingLayout>
    );
  }

  const features = serviceFeatures[service.slug] || [];
  const crossSellServices = getCrossSellServices(service);

  return (
    <MarketingLayout>
      <SEOHead
        title={service.name}
        description={service.description}
        ogImage={service.heroImage}
      />

      {/* ── 1. HERO ── */}
      <HeroSection
        headline={service.name}
        subheadline={service.tagline}
        subtext={service.description}
        status={service.status}
        backgroundImage={service.heroImage}
      />

      {/* ── 2. PROBLEM ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E2738]/40">
        <AnimateOnScroll variant="slide-up" className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="hidden sm:flex w-14 h-14 rounded-lg bg-[#EF4444]/10 items-center justify-center flex-shrink-0 border border-[#EF4444]/20">
              <AlertTriangle className="w-6 h-6 text-[#EF4444]" />
            </div>
            <div>
              <span className="section-label text-[#EF4444]/80 mb-3 block">The Problem</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5" style={{ fontFamily: 'Montserrat' }}>
                Why {service.name}?
              </h2>
              <p className="text-[#A0A8B8] text-lg leading-relaxed">
                {service.problem}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── 3. FEATURES ── */}
      {features.length > 0 && (
        <FeatureGrid
          items={features}
          columns={features.length <= 4 ? 2 : 3}
          sectionLabel="Key Features"
          sectionTitle={`What ${service.name} Delivers`}
        />
      )}

      {/* ── 4. DEMO (above How It Works) ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-[#8C34E9] mb-3 block">See It In Action</span>
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
              {service.name} Demo
            </h2>
            <p className="text-[#8890A0] max-w-xl mx-auto">
              {service.status === 'live'
                ? `Experience ${service.name} with a live interactive walkthrough. See how it works in a real manufacturing environment.`
                : `Preview the ${service.name} experience. Full interactive demos will be available when the service launches.`}
            </p>
          </div>

          {/* Slugs whose DemoComponent is a static screenshot (no browser mockup frame) */}
          {(() => {
            const staticScreenshotSlugs = ['sqdcp'];
            const isStatic = staticScreenshotSlugs.includes(service.slug);
            const DemoComponent = demoComponents[service.slug];

            /* ── Static screenshot path: image + "Try It Live" overlay, no browser chrome ── */
            if (isStatic && DemoComponent) {
              return (
                <div className="relative rounded-lg border border-[#1E2738] bg-[#0D1220] overflow-hidden group">
                  <Suspense fallback={
                    <div className="aspect-video flex items-center justify-center">
                      <div className="animate-pulse text-[#596475] text-sm">Loading demo...</div>
                    </div>
                  }>
                    <DemoComponent />
                  </Suspense>
                  <div className="absolute inset-0 bg-[#080C16]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#8C34E9]/20 flex items-center justify-center mb-4 border border-[#8C34E9]/30">
                      {service.status === 'live' ? (
                        <Play className="w-7 h-7 text-[#C084FC] ml-1" />
                      ) : (
                        <Monitor className="w-7 h-7 text-[#C084FC]" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                      {service.status === 'live' ? 'Try It Live' : 'Preview Coming Soon'}
                    </h3>
                    <p className="text-sm text-[#A0A8B8] max-w-md mx-auto mb-4 text-center px-4">
                      {service.status === 'live'
                        ? `Launch a guided walkthrough of ${service.name} with sample manufacturing data.`
                        : `Register your interest to be notified when ${service.name} launches.`}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
                    >
                      {service.status === 'live' ? 'Request Live Demo' : 'Register Interest'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            }

            /* ── Default path: browser mockup frame wrapping animated demos / demoImage / placeholder ── */
            return (
              <div className="relative rounded-lg border border-[#1E2738] bg-[#0D1220] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2738] bg-[#080C16]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/60" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60" />
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[#1E2738] rounded-md px-3 py-1.5 text-xs text-[#596475] font-mono">
                      {service.subdomain || `${service.slug}.oplytics.digital`}
                    </div>
                  </div>
                </div>

                {(() => {
                  if (DemoComponent) {
                    return (
                      <Suspense fallback={
                        <div className="aspect-video flex items-center justify-center">
                          <div className="animate-pulse text-[#596475] text-sm">Loading demo...</div>
                        </div>
                      }>
                        <DemoComponent />
                      </Suspense>
                    );
                  }
                  if (service.demoImage) {
                    return (
                      <div className="relative group">
                        <img
                          src={service.demoImage}
                          alt={`${service.name} dashboard screenshot`}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#080C16]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#8C34E9]/20 flex items-center justify-center mb-4 border border-[#8C34E9]/30">
                            {service.status === 'live' ? (
                              <Play className="w-7 h-7 text-[#C084FC] ml-1" />
                            ) : (
                              <Monitor className="w-7 h-7 text-[#C084FC]" />
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                            {service.status === 'live' ? 'Try It Live' : 'Preview Coming Soon'}
                          </h3>
                          <p className="text-sm text-[#A0A8B8] max-w-md mx-auto mb-4 text-center px-4">
                            {service.status === 'live'
                              ? `Launch a guided walkthrough of ${service.name} with sample manufacturing data.`
                              : `Register your interest to be notified when ${service.name} launches.`}
                          </p>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
                          >
                            {service.status === 'live' ? 'Request Live Demo' : 'Register Interest'}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="aspect-video flex flex-col items-center justify-center p-8 text-center relative">
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'linear-gradient(#8C34E9 1px, transparent 1px), linear-gradient(90deg, #8C34E9 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }} />
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-[#8C34E9]/10 flex items-center justify-center mx-auto mb-6 border border-[#8C34E9]/20">
                          {service.status === 'live' ? (
                            <Play className="w-7 h-7 text-[#C084FC] ml-1" />
                          ) : (
                            <Monitor className="w-7 h-7 text-[#C084FC]" />
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                          {service.status === 'live' ? 'Interactive Demo' : 'Preview Coming Soon'}
                        </h3>
                        <p className="text-sm text-[#8890A0] max-w-md mx-auto mb-6">
                          {service.status === 'live'
                            ? `Click below to launch a guided walkthrough of ${service.name} with sample manufacturing data.`
                            : `We are building the ${service.name} demo experience. Register your interest to be notified when it is ready.`}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
                        >
                          {service.status === 'live' ? 'Launch Demo' : 'Request Preview'}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })()}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      {service.howItWorks.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40" style={{ background: 'linear-gradient(180deg, #080C16 0%, #0D1220 100%)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="section-label text-[#1DB8CE] mb-3 block">How It Works</span>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
                Getting Started with {service.name}
              </h2>
            </div>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#1DB8CE]/40 via-[#8C34E9]/40 to-transparent hidden sm:block" />

              <div className="space-y-8">
                {service.howItWorks.map((step, i) => (
                  <div key={step.step} className="flex items-start gap-5 sm:gap-8 relative">
                    {/* Step number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl border-2"
                        style={{
                          fontFamily: 'Montserrat',
                          background: `linear-gradient(135deg, ${i % 2 === 0 ? '#8C34E9' : '#1DB8CE'}20, transparent)`,
                          borderColor: i % 2 === 0 ? '#8C34E9' : '#1DB8CE',
                        }}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="pt-1 sm:pt-3 pb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                        {step.title}
                      </h3>
                      <p className="text-[#8890A0] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 6. RESULTS ── */}
      {service.results.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="section-label text-[#22C55E] mb-3 block">Expected Outcomes</span>
              <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
                What You Can Expect
              </h2>
              <p className="text-[#8890A0] text-sm max-w-lg mx-auto">
                All metrics are clearly labelled by evidence tier. We only publish claims we can substantiate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.results.map((result, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] hover:border-[#22C55E]/30 transition-colors"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
                      {result.value}
                    </span>
                    {getClaimTierLabel(result.tier) && (
                      <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-semibold ${
                        result.tier === 'verified'
                          ? 'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20'
                          : 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20'
                      }`}>
                        {getClaimTierLabel(result.tier)}
                      </span>
                    )}
                  </div>
                  <p className="text-[#A0A8B8] text-sm leading-relaxed">{result.label}</p>
                  {result.source && (
                    <p className="text-[#596475] text-xs mt-2 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" />
                      {result.source}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. AI FEATURES ── */}
      {service.aiFeatures.length > 0 && (
        <AIFeatureList features={service.aiFeatures} />
      )}

      {/* ── 8. CUSTOM SECTIONS ── */}
      {/* Task 6: OEE Manager — IoT Device Showcase */}
      {service.slug === 'oee-manager' && <IoTShowcaseSection />}

      {/* Task 7: OplyticsConnect — Value Proposals by Role & Supported Protocols */}
      {service.slug === 'smartconnect' && <ConnectRolesProtocolsSection />}

      {/* Task 8: SQDCP Dashboard — Tier Meeting Workflow */}
      {service.slug === 'sqdcp-hub' && <TierMeetingSection />}

      {/* ── 9. CROSS-SELL ── */}
      {crossSellServices.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll variant="slide-up" className="text-center mb-10">
              <span className="section-label text-[#596475] mb-3 block">Works Great With</span>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
                Related Solutions
              </h2>
            </AnimateOnScroll>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" variant="slide-up" staggerDelay={0.1}>
              {crossSellServices.map(s => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── 10. CTA with Inline Contact Form (BATCH-4 TASK-5) ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E2738]/40" style={{ background: '#080C16' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Copy */}
            <div className="lg:pt-4">
              <AnimateOnScroll variant="slide-up">
                <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Ready to see it in action?
                </h2>
                <p className="text-[#8890A0] mb-6 leading-relaxed">
                  Get in touch with our team. Tell us about your operation and we will show you how {service.name} can help.
                </p>
                <div className="space-y-3 text-sm text-[#596475]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                    <span>Personalised demo with your data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right — Inline Contact Form */}
            <AnimateOnScroll variant="slide-up">
              <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                <ContactForm context={service.name} compact />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
