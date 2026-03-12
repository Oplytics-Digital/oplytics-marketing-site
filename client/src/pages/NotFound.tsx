/**
 * TASK-29: Enhanced 404 Page with search and navigation suggestions
 * Design: "Neon Operations" — branded error page with search, quick links, and service suggestions
 */
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'wouter';
import { Search, ArrowLeft, Home, DollarSign, Mail, Cog } from 'lucide-react';
import MarketingLayout from '@/components/shared/MarketingLayout';
import SEOHead from '@/components/shared/SEOHead';
import { liveServices, services } from '@/config/services';

interface SearchResult {
  title: string;
  path: string;
  description: string;
}

const allPages: SearchResult[] = [
  { title: 'Home', path: '/', description: 'Operational excellence platform overview' },
  { title: 'Pricing', path: '/pricing', description: 'Plans, ROI calculator, and FAQ' },
  { title: 'About', path: '/about', description: 'Our mission, team, and values' },
  { title: 'Contact', path: '/contact', description: 'Get in touch, request a demo' },
  { title: 'Why Oplytics', path: '/why-us', description: 'Why manufacturers choose Oplytics' },
  { title: 'Resources', path: '/resources', description: 'Articles, case studies, and guides' },
  { title: 'Privacy Policy', path: '/privacy', description: 'How we handle your data' },
  { title: 'Terms of Service', path: '/terms', description: 'Legal terms and conditions' },
  ...services.map(s => ({
    title: s.name,
    path: `/solutions/${s.slug}`,
    description: s.tagline,
  })),
];

export default function NotFound() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.title = 'Page Not Found — Oplytics.digital';
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allPages.filter(
      p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [query]);

  return (
    <MarketingLayout>
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist. Browse our solutions or search for what you need."
      />

      <section className="pt-32 pb-20 px-4 bg-radial-purple">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated gear icon */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="relative">
              <Cog className="w-20 h-20 text-[#1E2738] animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-extrabold text-[#8C34E9]" style={{ fontFamily: 'Montserrat' }}>?</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Page Not Found
          </h1>
          <p className="text-lg text-[#8890A0] mb-8 max-w-lg mx-auto">
            The page you are looking for does not exist or has been moved. Try searching below or browse our popular pages.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#596475]" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search pages and services..."
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0D1220] border border-[#1E2738] text-sm text-white placeholder-[#596475] focus:outline-none focus:border-[#8C34E9]/50 transition-colors"
            />
          </div>

          {/* Search results */}
          {results.length > 0 && (
            <div className="max-w-md mx-auto mb-8 bg-[#0D1220] border border-[#1E2738] rounded-lg overflow-hidden text-left">
              {results.map(r => (
                <Link
                  key={r.path}
                  href={r.path}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#1E2738]/60 transition-colors border-b border-[#1E2738]/40 last:border-0"
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{r.title}</div>
                    <div className="text-xs text-[#596475]">{r.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Go Back button */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-[#8890A0] border border-[#1E2738] hover:border-[#8C34E9]/50 hover:text-white transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          {/* Quick links */}
          <div className="mb-16">
            <span className="section-label text-[#596475] mb-6 block">Quick Links</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto">
              {[
                { icon: Home, label: 'Home', path: '/' },
                { icon: Cog, label: 'Solutions', path: '/solutions/oee-manager' },
                { icon: DollarSign, label: 'Pricing', path: '/pricing' },
                { icon: Mail, label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#1E2738] hover:border-[#8C34E9]/40 hover:bg-[#0D1220] transition-all group"
                >
                  <link.icon className="w-5 h-5 text-[#596475] group-hover:text-[#8C34E9] transition-colors" />
                  <span className="text-xs font-medium text-[#8890A0] group-hover:text-white transition-colors">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Live service suggestions */}
          {liveServices.length > 0 && (
            <div>
              <span className="section-label text-[#8C34E9] mb-6 block">Live Services</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {liveServices.slice(0, 4).map(service => (
                  <Link
                    key={service.id}
                    href={`/solutions/${service.slug}`}
                    className="flex items-center gap-3 p-4 rounded-lg border border-[#1E2738] hover:border-[#8C34E9]/40 hover:bg-[#0D1220] transition-all group text-left"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#22C55E' }} />
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#C084FC] transition-colors">
                        {service.name}
                      </div>
                      <div className="text-xs text-[#596475]">{service.tagline}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </MarketingLayout>
  );
}
