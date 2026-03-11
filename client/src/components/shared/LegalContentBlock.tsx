/**
 * TASK-07: LegalContentBlock Component
 * Design: "Neon Operations" — formatted legal text with auto-generated TOC
 * Used on /privacy and /terms pages.
 */
import { useState, useEffect, useRef } from 'react';

interface LegalSection {
  id: string;
  title: string;
  content: string;
}

interface LegalContentBlockProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalContentBlock({ title, lastUpdated, sections }: LegalContentBlockProps) {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
          {title}
        </h1>
        <p className="text-sm text-[#596475]">Last updated: {lastUpdated}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
        {/* Table of Contents */}
        <nav className="hidden lg:block sticky top-24 self-start">
          <span className="section-label text-[#596475] mb-3 block">Contents</span>
          <ul className="space-y-2">
            {sections.map(section => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block text-xs leading-relaxed transition-colors ${
                    activeSection === section.id
                      ? 'text-[#C084FC] font-medium'
                      : 'text-[#596475] hover:text-[#8890A0]'
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="space-y-10">
          {sections.map(section => (
            <section
              key={section.id}
              id={section.id}
              ref={el => { sectionRefs.current[section.id] = el; }}
            >
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                {section.title}
              </h2>
              <div className="text-sm text-[#8890A0] leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
