/**
 * TASK-07 / TASK-14 / TASK-15: LegalContentBlock Component
 * Design: "Neon Operations" — formatted legal text with auto-generated TOC
 * Used on /privacy, /terms, /cookies, /aup, /dpa and /sla pages.
 *
 * Features:
 *   - Auto-generated table of contents from sections
 *   - Sticky desktop sidebar TOC with scroll-spy
 *   - Mobile dropdown TOC
 *   - Section numbering
 *   - Last updated date
 */
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";

interface LegalSection {
  id: string;
  title: string;
  content: string;
  /** Set false for annexes/schedules so clause numbers match the source document. */
  numbered?: boolean;
}

interface LegalContentBlockProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  /** Preamble shown above the contents (parties, background, scope). */
  intro?: string;
}

export default function LegalContentBlock({
  title,
  lastUpdated,
  sections,
  intro,
}: LegalContentBlockProps) {
  const [activeSection, setActiveSection] = useState("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Unnumbered sections (annexes) don't consume a clause number.
  let clause = 0;
  const labels = sections.map(section =>
    section.numbered === false ? section.title : `${++clause}. ${section.title}`
  );

  function scrollToSection(id: string) {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileTocOpen(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: "Montserrat" }}
        >
          {title}
        </h1>
        <p className="text-sm text-[#596475]">Last updated: {lastUpdated}</p>
        {intro && (
          <div className="mt-6 text-sm text-[#8890A0] leading-relaxed whitespace-pre-line">
            {intro}
          </div>
        )}
      </div>

      {/* Mobile TOC */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileTocOpen(!mobileTocOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#1E2738] bg-[#0D1220] text-sm"
        >
          <span className="flex items-center gap-2 text-[#8890A0]">
            <List className="w-4 h-4" />
            Table of Contents
          </span>
          {mobileTocOpen ? (
            <ChevronUp className="w-4 h-4 text-[#596475]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#596475]" />
          )}
        </button>
        {mobileTocOpen && (
          <div className="mt-2 p-4 rounded-lg border border-[#1E2738] bg-[#0D1220]">
            <ul className="space-y-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-xs leading-relaxed transition-colors ${
                      activeSection === section.id
                        ? "text-[#C084FC] font-medium"
                        : "text-[#596475] hover:text-[#8890A0]"
                    }`}
                  >
                    {labels[i]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
        {/* Desktop Table of Contents */}
        <nav className="hidden lg:block sticky top-24 self-start">
          <span className="section-label text-[#596475] mb-3 block">
            Contents
          </span>
          <ul className="space-y-2">
            {sections.map((section, i) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left block text-xs leading-relaxed transition-colors ${
                    activeSection === section.id
                      ? "text-[#C084FC] font-medium"
                      : "text-[#596475] hover:text-[#8890A0]"
                  }`}
                >
                  {labels[i]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              ref={el => {
                sectionRefs.current[section.id] = el;
              }}
            >
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "Montserrat" }}
              >
                {labels[i]}
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
