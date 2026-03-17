/**
 * ResourceArticle — Individual article detail page
 * Route: /resources/:slug
 *
 * Renders a single resource article. Content is static placeholder for now —
 * future CMS integration will replace the body text.
 */
import { useParams } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, BookOpen, FileText, TrendingUp, Zap } from 'lucide-react';
import MarketingLayout from '@/components/shared/MarketingLayout';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

type ResourceCategory = 'case-study' | 'guide' | 'insight' | 'update';

interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
  readTime: string;
  date: string;
  slug: string;
}

const categoryMeta: Record<ResourceCategory, { label: string; icon: typeof BookOpen; color: string }> = {
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
  },
  {
    id: '2',
    title: 'The Complete Guide to OEE: Measuring Manufacturing Efficiency',
    excerpt: 'Overall Equipment Effectiveness is the gold standard for measuring manufacturing productivity. This guide covers the formula, benchmarks, and how to move from manual tracking to automated OEE.',
    category: 'guide',
    readTime: '10 min',
    date: '2026-02-01',
    slug: 'complete-guide-oee',
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function ResourceArticle() {
  const params = useParams<{ slug: string }>();
  const article = resources.find(r => r.slug === params.slug);

  if (!article) {
    return (
      <MarketingLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Article Not Found
          </h1>
          <p className="text-[#8890A0] mb-8">The article you are looking for does not exist.</p>
          <Link href="/resources" className="text-[#8C34E9] hover:text-[#C084FC] transition-colors">
            Back to Resources
          </Link>
        </div>
      </MarketingLayout>
    );
  }

  const meta = categoryMeta[article.category];
  const Icon = meta.icon;

  // Related articles: same category, excluding current
  const related = resources
    .filter(r => r.category === article.category && r.id !== article.id)
    .slice(0, 2);

  return (
    <MarketingLayout>
      <SEOHead
        title={article.title}
        description={article.excerpt}
      />

      {/* Article Header */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll variant="slide-up">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#596475] hover:text-[#C084FC] transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                style={{ color: meta.color, borderColor: `${meta.color}33`, background: `${meta.color}10` }}
              >
                <Icon className="w-3.5 h-3.5" />
                {meta.label}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Montserrat' }}>
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-[#596475] mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} read
              </span>
            </div>

            <div className="h-px bg-[#1E2738]/60 mb-10" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Article Body — placeholder content */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll variant="slide-up">
            <div className="prose-oplytics">
              <p className="text-[#A0A8B8] text-lg leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="rounded-xl border border-[#1E2738] p-8 text-center my-10" style={{ background: '#0D1220' }}>
                <BookOpen className="w-10 h-10 text-[#8C34E9]/40 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Full Article Coming Soon
                </h3>
                <p className="text-sm text-[#596475] max-w-md mx-auto">
                  We are currently preparing the full content for this article. Check back soon or subscribe to our newsletter to be notified when it is published.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 px-4 border-t border-[#1E2738]/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat' }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map(r => {
                const rMeta = categoryMeta[r.category];
                const RIcon = rMeta.icon;
                return (
                  <Link
                    key={r.id}
                    href={`/resources/${r.slug}`}
                    className="group rounded-xl border border-[#1E2738] p-5 hover:border-[#8C34E9]/40 transition-all duration-300 block"
                    style={{ background: '#0D1220' }}
                  >
                    <div className="flex items-center gap-1.5 mb-3">
                      <RIcon className="w-3.5 h-3.5" style={{ color: rMeta.color }} />
                      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: rMeta.color }}>
                        {rMeta.label}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#C084FC] transition-colors line-clamp-2" style={{ fontFamily: 'Montserrat' }}>
                      {r.title}
                    </h3>
                    <p className="text-xs text-[#596475] mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {r.readTime}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </MarketingLayout>
  );
}
