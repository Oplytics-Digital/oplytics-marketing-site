/**
 * SolutionPage — Generic solution page driven by service config.
 * Used for all 8 service pages: /solutions/:slug
 * Design: "Neon Operations"
 */
import { useParams } from 'wouter';
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import ContactForm from '@/components/shared/ContactForm';
import ServiceCard from '@/components/shared/ServiceCard';
import { getServiceBySlug, services } from '@/config/services';
import { Link } from 'wouter';
import {
  Gauge, LayoutGrid, ClipboardCheck, Shield, Target,
  Plug, CheckCircle, Award, BarChart3, Zap, TrendingUp,
  Users, ArrowRight
} from 'lucide-react';

/** Service-specific feature data */
const serviceFeatures: Record<string, { icon: React.ReactNode; title: string; description: string }[]> = {
  'oee-manager': [
    { icon: <Gauge className="w-5 h-5" />, title: 'Real-Time OEE Tracking', description: 'Monitor availability, performance, and quality metrics as they happen across every machine and line.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Loss Categorisation', description: 'Automatically categorise downtime and speed losses. Pareto analysis identifies your biggest improvement opportunities.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Trend Analysis', description: 'Historical OEE trends by shift, line, product, and operator. Spot patterns before they become problems.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Automated Data Collection', description: 'Connect directly to PLCs and sensors via Oplytics Connect. Eliminate manual data entry errors.' },
    { icon: <Users className="w-5 h-5" />, title: 'Shift Handover', description: 'Digital shift handover reports with OEE summaries, open actions, and key events from the previous shift.' },
    { icon: <Target className="w-5 h-5" />, title: 'Target Management', description: 'Set OEE targets by line, product, and shift. Visual indicators show performance against target in real time.' },
  ],
  'sqdcp': [
    { icon: <LayoutGrid className="w-5 h-5" />, title: 'Digital Tier Boards', description: 'Replace whiteboards with real-time digital SQDCP boards. Accessible from any device, anywhere.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Safety First', description: 'Safety metrics front and centre. Track incidents, near-misses, and safety observations daily.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Quality Tracking', description: 'First-pass yield, scrap rates, and customer complaints. Quality data integrated from your QMS.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Delivery Performance', description: 'On-time delivery, schedule adherence, and backlog visibility. Keep your customers happy.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Cost Management', description: 'Track operational costs, waste, and efficiency metrics. Drive cost reduction initiatives.' },
    { icon: <Users className="w-5 h-5" />, title: 'People & Skills', description: 'Attendance, training matrices, and skills development tracking. Invest in your team.' },
  ],
  'action-manager': [
    { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Action Capture', description: 'Capture actions from any source — audits, incidents, meetings, tier boards. One unified action register.' },
    { icon: <Users className="w-5 h-5" />, title: 'Assignment & Ownership', description: 'Assign actions to individuals with clear due dates. Automatic escalation for overdue items.' },
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
  const crossSellServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <MarketingLayout>
      {/* Hero */}
      <HeroSection
        headline={service.name}
        subtext={service.description}
        status={service.status}
        backgroundImage={service.heroImage}
      />

      {/* Features */}
      {features.length > 0 && (
        <FeatureGrid
          items={features}
          columns={features.length <= 4 ? 2 : 3}
          sectionLabel="Key Features"
          sectionTitle={`What ${service.name} Delivers`}
        />
      )}

      {/* Contact / Early Access Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#080C16' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-[#8C34E9] mb-3 block">
              {service.status === 'live' ? 'Get Started' : 'Early Access'}
            </span>
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
              {service.status === 'live'
                ? `Start Using ${service.name} Today`
                : `Be First to Try ${service.name}`}
            </h2>
            <p className="text-[#8890A0]">
              {service.status === 'live'
                ? 'Get in touch and we\'ll have you up and running in no time.'
                : 'Register your interest and we\'ll notify you as soon as early access is available.'}
            </p>
          </div>
          <div className="p-8 rounded-lg border border-[#1E2738] bg-[#0D1220]">
            <ContactForm context={service.name} />
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-[#596475] mb-3 block">Explore More</span>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              Other Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {crossSellServices.map(s => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
