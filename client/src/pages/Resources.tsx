/**
 * TASK-31: Resources / Blog Section Scaffold
 * Design: "Neon Operations" — filterable resource index with article cards
 *
 * Categories: Case Studies, Guides, Industry Insights, Product Updates
 * Content is static for now — future CMS integration flagged.
 */
import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { BookOpen, FileText, TrendingUp, Zap, ArrowRight, Clock, Tag } from 'lucide-react';
import MarketingLayout from '@/components/shared/MarketingLayout';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll, { StaggerContainer } from '@/components/shared/AnimateOnScroll';

type ResourceCategory = 'all' | 'case-study' | 'guide' | 'insight' | 'update';

interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<ResourceCategory, 'all'>;
  readTime: string;
  date: string;
  slug: string;
  featured?: boolean;
}

const categoryMeta: Record<Exclude<ResourceCategory, 'all'>, { label: string; icon: typeof BookOpen; color: string }> = {
  'case-study': { label: 'Case Study', icon: FileText, color: '#22C55E' },
  'guide': { label: 'Guide', icon: BookOpen, color: '#8C34E9' },
  'insight': { label: 'Industry Insight', icon: TrendingUp, color: '#1DB8CE' },
  'update': { label: 'Product Update', icon: Zap, color: '#F97316' },
};

const resources: Resource[] = [
  {
    id: '1',
    title: 'How Digital SQDCP Boards Reduced Meeting Time by 40%',
    excerpt: 'A UK automotive manufacturer replaced physical tier boards with Oplytics SQDCP Dashboard. Daily stand-ups became faster, data became real-time, and accountability improved across three shifts.',
    category: 'case-study',
    readTime: '6 min',
    date: '2026-02-15',
    slug: 'digital-sqdcp-boards-case-study',
    featured: true,
  },
  {
    id: '2',
    title: 'The Complete Guide to OEE: Measuring Manufacturing Efficiency',
    excerpt: 'Overall Equipment Effectiveness is the gold standard for measuring manufacturing productivity. This guide covers the formula, benchmarks, and how to move from manual tracking to automated OEE.',
    category: 'guide',
    readTime: '10 min',
    date: '2026-02-01',
    slug: 'complete-guide-oee',
    featured: true,
  },
  {
    id: '3',
    title: 'AI in Manufacturing: Beyond the Hype',
    excerpt: 'Separating practical AI applications from marketing noise. We explore where AI genuinely adds value on the manufacturing floor — predictive maintenance, anomaly detection, and process optimisation.',
    category: 'insight',
    readTime: '8 min',
    date: '2026-01-20',
    slug: 'ai-manufacturing-beyond-hype',
  },
  {
    id: '4',
    title: 'Policy Deployment: Aligning Strategy to the Manufacturing Floor',
    excerpt: 'Hoshin Kanri meets digital. How policy deployment software bridges the gap between boardroom strategy and daily manufacturing operations through cascading objectives and real-time tracking.',
    category: 'guide',
    readTime: '7 min',
    date: '2026-01-10',
    slug: 'policy-deployment-guide',
  },
  {
    id: '5',
    title: 'OplyticsConnect Launch: IoT Integration for Real-Time Data',
    excerpt: 'Introducing OplyticsConnect — our new IoT integration layer that connects PLCs, SCADA systems, and sensors directly to the Oplytics platform for automated, real-time data collection.',
    category: 'update',
    readTime: '4 min',
    date: '2025-12-15',
    slug: 'oplyticsconnect-launch',
  },
  {
    id: '6',
    title: 'Reducing Incident Response Time with Digital Safety Management',
    excerpt: 'A food manufacturing plant implemented Oplytics Safety Manager to digitise incident reporting. Near-miss reporting increased 300% and average response time dropped from 48 hours to 4 hours.',
    category: 'case-study',
    readTime: '5 min',
    date: '2025-12-01',
    slug: 'safety-management-case-study',
  },
];

const filters: { key: ResourceCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'case-study', label: 'Case Studies' },
  { key: 'guide', label: 'Guides' },
  { key: 'insight', label: 'Insights' },
  { key: 'update', label: 'Updates' },
];

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState<ResourceCategory>('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return resources;
    return resources.filter(r => r.category === activeFilter);
  }, [activeFilter]);

  const featured = resources.filter(r => r.featured);

  return (
    <MarketingLayout>
      <SEOHead
        title="Resources"
        description="Articles, case studies, guides, and product updates from Oplytics.digital. Learn how manufacturers achieve operational excellence."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-radial-purple">
        <div className="max-w-7xl mx-auto text-center">
          <AnimateOnScroll variant="slide-up">
            <span className="section-label text-[#8C34E9] mb-4 block">Resources</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Knowledge for{' '}
              <span className="text-gradient-purple">Operational Excellence</span>
            </h1>
            <p className="text-lg text-[#8890A0] max-w-2xl mx-auto">
              Case studies, practical guides, industry insights, and product updates to help you transform manufacturing operations.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-[#596475] mb-8 block">Featured</span>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" variant="slide-up">
              {featured.map(article => {
                const meta = categoryMeta[article.category];
                const Icon = meta.icon;
                return (
                  <div
                    key={article.id}
                    className="group relative rounded-xl border border-[#1E2738] p-6 sm:p-8 hover:border-[#8C34E9]/40 transition-all duration-300"
                    style={{ background: '#0D1220' }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-4 h-4" style={{ color: meta.color }} />
                      <span className="text-xs font-semibold" style={{ color: meta.color }}>{meta.label}</span>
                      <span className="text-[10px] text-[#596475] ml-auto flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C084FC] transition-colors" style={{ fontFamily: 'Montserrat' }}>
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#8890A0] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C34E9] hover:text-[#C084FC] transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Filter bar */}
      <section className="py-4 px-4 border-t border-b border-[#1E2738]/40">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
          <Tag className="w-4 h-4 text-[#596475] shrink-0" />
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === f.key
                  ? 'bg-[#8C34E9]/20 text-[#C084FC] border border-[#8C34E9]/40'
                  : 'text-[#596475] hover:text-white border border-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variant="slide-up">
            {filtered.map(article => {
              const meta = categoryMeta[article.category];
              const Icon = meta.icon;
              return (
                <div
                  key={article.id}
                  className="group rounded-xl border border-[#1E2738] p-6 hover:border-[#8C34E9]/40 transition-all duration-300"
                  style={{ background: '#0D1220' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-3.5 h-3.5" style={{ color: meta.color }} />
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: meta.color }}>
                      {meta.label}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#C084FC] transition-colors line-clamp-2" style={{ fontFamily: 'Montserrat' }}>
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#8890A0] leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#596475] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="text-xs font-bold text-[#8C34E9] hover:text-[#C084FC] transition-colors flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#596475]">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 border-t border-[#1E2738]/40">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
            <h2 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
              Stay Updated
            </h2>
            <p className="text-sm text-[#8890A0] mb-6">
              Get the latest articles, case studies, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0D1220] border border-[#1E2738] text-sm text-white placeholder-[#596475] focus:outline-none focus:border-[#8C34E9]/50 transition-colors"
              />
              <button
                className="px-6 py-3 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
                onClick={() => import('sonner').then(({ toast }) => toast.info('Newsletter signup coming soon'))}
              >
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-[#596475] mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </MarketingLayout>
  );
}
