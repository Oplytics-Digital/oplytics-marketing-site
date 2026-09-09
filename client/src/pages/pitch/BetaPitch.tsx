/**
 * /pitch/beta — the intro sales engagement deck.
 *
 * A scrolling, artifact-style document for a first look at Oplytics. Built for
 * the free beta cohort: introduce the platform, the value prop, and the hooks,
 * ending on the ask — join the first cohort, six months, full platform, free.
 *
 * Deliberately NOT wrapped in MarketingLayout: a pitch wants no nav chrome. Its
 * own minimal shell (brand mark + one persistent "you are here" cascade rail)
 * so it reads as a focused document, not a website page.
 *
 * It's a VISUAL first look — every section carries a real screenshot from the
 * live Testa environment (see client/public/screenshots/, SCREENSHOT-MANIFEST.md),
 * framed like the app. Opi — the platform AI — gets its own visual signature
 * (the purple orb, a purple-glow "Opi says" panel) so the AI story reads at a
 * glance and stands apart from the site's teal accent.
 *
 * Voice: a UK operator who's stood on the shop floor. Plain English, no
 * corpo-speak, no Americanisms. Every claim maps to something that's actually
 * built (see the AI + Obeya splash, PR #127).
 *
 * All colour/type tokens are the site's own brand system (client/src/index.css).
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import SEOHead from "@/components/shared/SEOHead";
import {
  ArrowRight,
  ArrowDown,
  Check,
  Target,
  LayoutGrid,
  ClipboardCheck,
  Box,
  Sparkles,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────────
   The cascade. The deck's structure mirrors the platform's: strategy at the
   top, the shop floor at the bottom, results tracked all the way through. The
   rail on the left is the real org hierarchy, and your scroll position travels
   down it — the same path an issue takes on its way back up.
   ──────────────────────────────────────────────────────────────────────────── */
const TIERS = [
  { id: "top", label: "First look", tier: "" },
  { id: "problem", label: "The gap", tier: "Enterprise" },
  { id: "platform", label: "One platform", tier: "Enterprise" },
  { id: "strategy", label: "Policy Deployment", tier: "Business Unit" },
  { id: "daily", label: "SQDCP boards", tier: "Site" },
  { id: "obeya", label: "The Obeya Room", tier: "Area" },
  { id: "actions", label: "Action Manager", tier: "Area" },
  { id: "opi", label: "Opi", tier: "Every tier" },
  { id: "founder", label: "Who's behind it", tier: "" },
  { id: "offer", label: "The offer", tier: "" },
];

const RAIL_ICON: Record<string, typeof Target> = {
  strategy: Target,
  daily: LayoutGrid,
  obeya: Box,
  actions: ClipboardCheck,
  opi: Sparkles,
};

/* ── How many sites we're taking. One place to change it. ── */
const COHORT_SITES = "ten";

/* A live-looking SQDCP pillar strip — the thing on the wall of every huddle.
   Values shift once on mount so the first frame is a real board, then it
   settles (respects reduced-motion). */
type Rag = "green" | "amber" | "red";
const PILLARS: { code: string; name: string; from: Rag; to: Rag }[] = [
  { code: "S", name: "Safety", from: "amber", to: "red" },
  { code: "Q", name: "Quality", from: "green", to: "green" },
  { code: "D", name: "Delivery", from: "amber", to: "green" },
  { code: "C", name: "Cost", from: "green", to: "green" },
  { code: "P", name: "People", from: "red", to: "red" },
];
const RAG_HEX: Record<Rag, string> = {
  green: "#22C55E",
  amber: "#F59E0B",
  red: "#EF4444",
};

function PillarStrip() {
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setSettled(true);
      return;
    }
    const t = setTimeout(() => setSettled(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="pd-strip"
      role="img"
      aria-label="SQDCP board — Safety red, People red, the rest on track"
    >
      {PILLARS.map((p, i) => {
        const rag = settled ? p.to : p.from;
        return (
          <div
            key={p.code}
            className="pd-cell"
            style={{
              borderColor: `${RAG_HEX[rag]}66`,
              background: `linear-gradient(180deg, ${RAG_HEX[rag]}1F, ${RAG_HEX[rag]}0A)`,
              transitionDelay: `${i * 90}ms`,
            }}
          >
            <span className="pd-code" style={{ color: RAG_HEX[rag] }}>
              {p.code}
            </span>
            <span className="pd-name">{p.name}</span>
            <span
              className="pd-dot"
              style={{
                background: RAG_HEX[rag],
                boxShadow: `0 0 10px ${RAG_HEX[rag]}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ── A framed product screenshot. Reads like the app — a slim title bar with
   traffic lights — and degrades to a labelled placeholder if the image is
   missing, so the deck is reviewable before shots land. All shots are from the
   live Testa environment. ── */
function PitchShot({
  src,
  alt,
  label,
  caption,
  tone = "teal",
}: {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  tone?: "teal" | "purple";
}) {
  const [missing, setMissing] = useState(false);
  return (
    <figure className={`shot shot-${tone}`}>
      <div className="shot-frame">
        <div className="shot-bar">
          <span className="shot-dot" />
          <span className="shot-dot" />
          <span className="shot-dot" />
          <span className="shot-bar-label">{label}</span>
        </div>
        <div className="shot-body">
          {missing ? (
            <div className="shot-ph">
              <span className="shot-ph-label">{label}</span>
              <span className="shot-ph-file">{src.split("/").pop()}</span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onError={() => setMissing(true)}
            />
          )}
        </div>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/* ── Opi's own voice. Purple orb + purple-glow panel, so the AI story reads at
   a glance and stands apart from the site's teal. Used for Opi's actual words,
   pulled from real findings and huddle lines. ── */
function OpiSays({
  children,
  context,
}: {
  children: React.ReactNode;
  context: string;
}) {
  return (
    <div className="opi-says" role="figure" aria-label={`Opi — ${context}`}>
      <span className="opi-orb" aria-hidden="true" />
      <div className="opi-says-body">
        <span className="opi-says-tag">Opi &middot; {context}</span>
        <p className="opi-says-text">{children}</p>
      </div>
    </div>
  );
}

/* One deck section. `n` drives the rail highlight via IntersectionObserver. */
function Tier({
  id,
  eyebrow,
  tier,
  children,
  onSeen,
}: {
  id: string;
  eyebrow: string;
  tier?: string;
  children: React.ReactNode;
  onSeen: (id: string) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) onSeen(id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id, onSeen]);

  return (
    <section ref={ref} id={id} className="tier">
      <div className="tier-inner">
        <div className="tier-head">
          <span className="eyebrow">{eyebrow}</span>
          {tier ? <span className="tier-badge">{tier}</span> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function BetaPitch() {
  const [active, setActive] = useState("top");

  const railIndex = TIERS.findIndex(t => t.id === active);

  return (
    <div className="pitch">
      <SEOHead
        title="Oplytics Beta Cohort"
        description="A first look at Oplytics for the free beta cohort — one platform that runs your strategy deployment, your daily SQDCP boards, your huddle and your actions, with an AI that reads the data for you. Six months, full platform, no cost. We're taking ten sites."
        ogType="website"
      />
      <style>{STYLES}</style>

      {/* Minimal shell — brand mark + the persistent cascade rail */}
      <header className="pitch-top">
        <Link href="/" className="brand" aria-label="Oplytics home">
          <span className="brand-mark">O</span>
          <span className="brand-word">
            Oplytics<span className="brand-tld">.digital</span>
          </span>
        </Link>
        <span className="pitch-kicker">Beta cohort · first look</span>
      </header>

      <nav className="rail" aria-label="Deck sections">
        <ol>
          {TIERS.map((t, i) => {
            const Icon = RAIL_ICON[t.id];
            const state =
              i < railIndex ? "done" : i === railIndex ? "here" : "todo";
            return (
              <li key={t.id} className={`rail-item ${state}`}>
                <a href={`#${t.id}`}>
                  <span className="rail-dot">
                    {Icon ? <Icon size={11} strokeWidth={2.5} /> : null}
                  </span>
                  <span className="rail-text">
                    <span className="rail-label">{t.label}</span>
                    {t.tier ? (
                      <span className="rail-tier">{t.tier}</span>
                    ) : null}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <main className="deck">
        {/* ── First look — the thesis ── */}
        <Tier id="top" eyebrow="A first look" onSeen={setActive}>
          <h1 className="hero-h">
            Your whole operation, cascading from the boardroom to the shop floor
            — on one platform.
          </h1>
          <p className="hero-sub">
            Strategy deployment, daily SQDCP boards, the huddle and every action
            — connected, so an improvement you make on Tuesday can be traced to
            the objective it serves and the result it delivered.
          </p>
          <PillarStrip />
          <p className="hero-note">
            That strip is a live SQDCP board. Safety and People are red today.
            The next few screens are the rest of the picture — actual product,
            actual data.
          </p>
          <a href="#offer" className="cta cta-ghost">
            Skip to the offer
            <ArrowDown size={15} />
          </a>
        </Tier>

        {/* ── The gap ── */}
        <Tier
          id="problem"
          eyebrow="The gap"
          tier="Enterprise"
          onSeen={setActive}
        >
          <h2 className="tier-h">
            You&rsquo;ve got the method. The method is stuck in spreadsheets.
          </h2>
          <div className="two-col">
            <p>
              Most manufacturers we talk to are already doing the right things.
              There&rsquo;s a Hoshin plan. There are SQDCP boards on the wall.
              The tier meetings happen. The actions get raised.
            </p>
            <p>
              But the plan lives in one file, the boards in another, the actions
              on sticky notes and in someone&rsquo;s inbox. Nothing joins up. So
              the tier meeting runs on last week&rsquo;s numbers, the same
              problems come back because the root cause was never properly
              chased, and when finance asks what the improvement programme
              actually delivered, nobody can point to the line.
            </p>
          </div>
          <ul className="gap-list">
            <li>
              <span className="gap-x" style={{ color: RAG_HEX.red }}>
                ✕
              </span>
              The strategy and the daily boards never actually meet
            </li>
            <li>
              <span className="gap-x" style={{ color: RAG_HEX.red }}>
                ✕
              </span>
              Red on a board, but no action against it — and no one notices
            </li>
            <li>
              <span className="gap-x" style={{ color: RAG_HEX.red }}>
                ✕
              </span>
              Weeks lost every quarter pulling reports together by hand
            </li>
          </ul>
        </Tier>

        {/* ── One platform ── */}
        <Tier
          id="platform"
          eyebrow="One platform"
          tier="Enterprise"
          onSeen={setActive}
        >
          <h2 className="tier-h">
            One data model, from the annual objective to the machine.
          </h2>
          <p className="lead">
            Not four tools with an integration bolted between them. One platform
            where the objective, the board, the huddle and the action are the
            same set of records — so the thread from strategy to result is never
            broken.
          </p>
          <PitchShot
            src="/screenshots/obeya/01-room.png"
            alt="The Obeya Room in Oplytics — a 3D huddle room with the S, Q, D, C, P pillars live on the wall"
            label="SQDCP · Obeya Room · Testa Midlands Plant"
            caption="The daily huddle room, live. Every pillar on the wall, RAG from real targets — this is one screen of the platform, not a mock-up."
          />
          <div className="cascade">
            <div className="casc-node casc-strategy">
              Policy Deployment
              <span>the 3&ndash;5 year objectives, cascaded</span>
            </div>
            <div className="casc-arrow">
              cascades into
              <ArrowDown size={14} />
            </div>
            <div className="casc-node casc-daily">
              SQDCP Dashboard
              <span>the daily boards, one per team</span>
            </div>
            <div className="casc-arrow">
              runs its huddle in
              <ArrowDown size={14} />
            </div>
            <div className="casc-node casc-obeya">
              The Obeya Room
              <span>the immersive daily huddle</span>
            </div>
            <div className="casc-arrow">
              raises work into
              <ArrowDown size={14} />
            </div>
            <div className="casc-node casc-actions">
              Action Manager
              <span>every action, tracked to verified closure</span>
            </div>
          </div>
          <p className="hook">
            When an OEE loss triggers an action, that action lands on the SQDCP
            board, links to the Hoshin objective it affects, and tracks through
            to closure. One thread, end to end.
          </p>
        </Tier>

        {/* ── Policy Deployment ── */}
        <Tier
          id="strategy"
          eyebrow="Policy Deployment"
          tier="Business Unit"
          onSeen={setActive}
        >
          <h2 className="tier-h">
            Strategy that reaches the floor, not the shelf.
          </h2>
          <div className="two-col">
            <p>
              Set your breakthrough objectives and annual priorities the Hoshin
              Kanri way. Build the X-matrix so every tactic, project, metric and
              owner is visible in one place. Cascade it down through catchball —
              top-down goals meeting bottom-up reality at every level.
            </p>
            <p>
              Then it&rsquo;s not a document you review once a quarter. Opi
              scores the cascade live — which pillars are anchored, how many
              metrics are actually wired to a real target, whether data is
              coming back from sites — and names the gap and the next move, in
              plain English.
            </p>
          </div>
          <PitchShot
            src="/screenshots/ai/opi-insights-pd.png"
            alt="The Policy Deployment dashboard in Oplytics with the Opi Insights panel open, showing an execution-gap score and prioritised findings"
            label="Policy Deployment · Testa 2026 Strategic Plan"
            caption="The X-matrix plan on the left; Opi's live read of the cascade on the right — an execution-gap score and the specific pillars carrying the plan."
            tone="purple"
          />
          <OpiSays context="Policy Deployment, live">
            &ldquo;Delivery has targets but zero projects to hit them, while
            Safety and People are completely undeployed. Add execution projects
            and tracking KPIs directly to the Delivery pillar.&rdquo;
          </OpiSays>
        </Tier>

        {/* ── SQDCP boards ── */}
        <Tier
          id="daily"
          eyebrow="SQDCP Dashboard"
          tier="Site"
          onSeen={setActive}
        >
          <h2 className="tier-h">
            The whiteboard, digitised &mdash; and finally addable-up.
          </h2>
          <div className="two-col">
            <p>
              Digital SQDCP boards for every team, cell or value stream. Safety,
              Quality, Delivery, Cost and People, with real targets and RAG
              bands. Teams update at the start of the shift; connected systems
              feed the rest in on their own.
            </p>
            <p>
              Because it&rsquo;s data, not a photo of a whiteboard, it rolls up.
              Area to site, site to business unit, business unit to enterprise
              &mdash; the same numbers, aggregated, no spreadsheet on a Friday
              afternoon. And a metric heading the wrong way gets flagged as
              &ldquo;watch&rdquo; before it goes red.
            </p>
          </div>
          <PitchShot
            src="/screenshots/obeya/x-admin-cascade.png"
            alt="The SQDCP admin screen in Oplytics showing metrics tagged 'Cascaded from Enterprise PD', 'Business Unit PD' and 'Site PD'"
            label="SQDCP · Admin · Metrics &amp; KPIs"
            caption="Every metric on the board carries its lineage — cascaded from Enterprise, Business Unit or Site Policy Deployment. The strategy and the daily board are the same records."
          />
          <p className="hook">
            Every tier &mdash; shop floor to enterprise &mdash; sees the same
            board, at its own level of detail.
          </p>
        </Tier>

        {/* ── The Obeya Room ── the headline feature ── */}
        <Tier
          id="obeya"
          eyebrow="The Obeya Room"
          tier="Area"
          onSeen={setActive}
        >
          <h2 className="tier-h">Your daily huddle, in a room built for it.</h2>
          <p className="lead">
            Not a screen-share of a dashboard. Walk into a 3D war room with
            every pillar on the wall, live. A readiness gate that won&rsquo;t
            let you start on missing data. A board walk with PDCA and a 5-Why on
            every red. A close-out that carries forward to tomorrow.
          </p>
          <PitchShot
            src="/screenshots/obeya/02-seats.png"
            alt="The Obeya Room lobby in Oplytics — pillar status and representatives, with an Auto-assign seats button and an AI-assisted toggle"
            label="SQDCP · Obeya Room · lobby"
            caption="Before you start: a rep on every pillar, live RAG, and the AI-assisted toggle. Safety and People red, Actions with 16 overdue — you see it before the huddle begins."
          />
          <ol className="flow">
            <li>
              <span className="flow-n">1</span>
              <div>
                <strong>Readiness gate</strong>
                Checks every pillar has data and thresholds, and names the ones
                that don&rsquo;t. No huddle on missing data.
              </div>
            </li>
            <li>
              <span className="flow-n">2</span>
              <div>
                <strong>Check in</strong>A rep on every pillar for today. Safety
                and People are red, Actions has 16 overdue &mdash; you can see
                it before you start.
              </div>
            </li>
            <li>
              <span className="flow-n">3</span>
              <div>
                <strong>Board walk</strong>
                The camera focuses each pillar. Greens acknowledged; reds get a
                PDCA panel and a 5-Why stepper docked alongside.
              </div>
            </li>
            <li>
              <span className="flow-n">4</span>
              <div>
                <strong>Action on every red</strong>A red metric raises an
                action automatically, routed to the right owner through your
                reporting line.
              </div>
            </li>
            <li>
              <span className="flow-n">5</span>
              <div>
                <strong>Close out</strong>
                Win of the day, the issues that matter, tomorrow&rsquo;s
                priorities. It carries into the next huddle.
              </div>
            </li>
          </ol>
          <PitchShot
            src="/screenshots/obeya/04-board-walk.png"
            alt="The board walk in the Obeya Room — a pillar in focus on the 3D wall with a PDCA panel and measures docked alongside"
            label="Obeya Room · board walk"
            caption="A red pillar in focus on the wall. Measures, trend and the PDCA panel docked alongside — worked in the room, not after it."
          />
          <p className="hook">
            One room per team, feeding the one above it. An issue that
            can&rsquo;t be sorted at one level escalates to the room a tier up
            &mdash; resolved live from your org structure, not hard-wired.
          </p>
        </Tier>

        {/* ── Action Manager ── */}
        <Tier
          id="actions"
          eyebrow="Action Manager"
          tier="Area"
          onSeen={setActive}
        >
          <h2 className="tier-h">One register. Nothing falls off the board.</h2>
          <div className="two-col">
            <p>
              Every action &mdash; from an audit, an incident, the huddle, an
              OEE loss &mdash; in one place, with an owner, a due date and a
              path to verified closure. Overdue items escalate on their own, up
              the reporting line: manager, then pillar leader, then enterprise
              admin.
            </p>
            <p>
              Opi reads the whole portfolio &mdash; backlog ageing, whether
              closure is keeping up with inflow, where actions pile up on one
              owner, what&rsquo;s stalled &mdash; and hands back a prioritised
              list with the next move on each.
            </p>
          </div>
          <PitchShot
            src="/screenshots/obeya/06-actions.png"
            alt="The actions step of an Obeya Room huddle in Oplytics — an Opi accountability brief over a list of 16 overdue actions grouped by pillar"
            label="Obeya Room · actions step"
            caption="The overdue list, grouped by pillar and owner, with Opi's accountability brief up top — worked one at a time for a firm commitment date on each."
            tone="purple"
          />
          <OpiSays context="Action Manager backlog">
            &ldquo;Closure rate is behind inflow two weeks running, and 60% of
            open actions sit with one owner. The backlog is
            concentrating.&rdquo;
          </OpiSays>
        </Tier>

        {/* ── Opi ── the AI age, its own colour world ── */}
        <OpiTier onSeen={setActive} />

        {/* ── Founder ── */}
        <Tier id="founder" eyebrow="Who's behind it" onSeen={setActive}>
          <h2 className="tier-h">
            Built by someone who&rsquo;s run the meeting.
          </h2>
          <div className="two-col">
            <p>
              Twenty years driving continuous improvement across aerospace and
              defence, HVAC and chemical manufacturing. Stood at the board, run
              the tier meeting, felt the drag of paper systems and tools that
              fight the process.
            </p>
            <p>
              We&rsquo;re early. No wall of customer logos yet &mdash;
              that&rsquo;s the honest reason for the beta. We want a handful of
              real sites using the full platform, telling us what&rsquo;s wrong
              and what&rsquo;s missing, while it&rsquo;s still cheap to change.
            </p>
          </div>
        </Tier>

        {/* ── The offer ── the ask ── */}
        <Tier id="offer" eyebrow="The offer" onSeen={setActive}>
          <h2 className="tier-h offer-h">
            Six months. The full platform. No cost. {COHORT_SITES} sites.
          </h2>
          <p className="lead">
            We&rsquo;re taking {COHORT_SITES} sites into the first cohort. You
            get the fully functional service &mdash; every live module, the
            Obeya Room, Opi &mdash; free for six months. In return: you actually
            use it, and you tell us the truth.
          </p>
          <ul className="offer-list">
            <li>
              <Check size={16} strokeWidth={3} />
              Full platform &mdash; Policy Deployment, SQDCP, OEE Manager,
              Action Manager, the Obeya Room and Opi
            </li>
            <li>
              <Check size={16} strokeWidth={3} />
              Six months, no card, no auto-charge at the end
            </li>
            <li>
              <Check size={16} strokeWidth={3} />A direct line to the person
              building it, and a say in the roadmap
            </li>
            <li>
              <Check size={16} strokeWidth={3} />
              Preferential pricing locked in for life if you carry on
            </li>
          </ul>
          <div className="offer-cta">
            <Link
              href="/contact"
              data-umami-event="cta_click"
              data-umami-event-button="apply_to_beta"
              data-umami-event-location="pitch_offer"
              className="cta cta-primary"
            >
              Put your site forward
              <ArrowRight size={16} />
            </Link>
            <span className="offer-fine">
              A 30-minute conversation, then a walkthrough on data that looks
              like yours. If it fits, you&rsquo;re in the cohort.
            </span>
          </div>
        </Tier>

        <footer className="pitch-foot">
          <Link href="/" className="foot-link">
            oplytics.digital
          </Link>
          <span>·</span>
          <Link href="/obeya" className="foot-link">
            The Obeya Room
          </Link>
          <span>·</span>
          <Link href="/ai" className="foot-link">
            Platform AI
          </Link>
        </footer>
      </main>
    </div>
  );
}

/* ── The Opi section, pulled out so it can own its colour world. Same Tier
   mechanics (IntersectionObserver → rail), but wrapped in .tier-opi which
   repaints the accent purple and drops in an ambient glow. ── */
function OpiTier({ onSeen }: { onSeen: (id: string) => void }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) onSeen("opi");
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onSeen]);

  return (
    <section ref={ref} id="opi" className="tier tier-opi">
      <div className="tier-inner">
        <div className="tier-head">
          <span className="opi-eyebrow">
            <span className="opi-orb opi-orb-sm" aria-hidden="true" />
            Opi
          </span>
          <span className="tier-badge">Every tier</span>
        </div>
        <h2 className="tier-h">
          An AI CI engineer that reads the data so your team doesn&rsquo;t have
          to.
        </h2>
        <p className="lead">
          Opi is one AI in three places: reading a live snapshot of your Policy
          Deployment, SQDCP or Action Manager screen for the findings a busy
          shift would walk past; drafting the facilitation for your huddle; and
          answering questions in the sidebar of every service. Opi drafts and
          surfaces &mdash; your team makes every call.
        </p>
        <PitchShot
          src="/screenshots/obeya/05-opi-line.png"
          alt="The Obeya Room mid-huddle — the Safety pillar red, with an Opi facilitator line and a Confirm owner control"
          label="Obeya Room · Safety pillar · mid-huddle"
          caption="Opi mid-huddle: reads the red pillar, drafts the action, names the owner. Sarah Chen confirms — Opi never does."
          tone="purple"
        />
        <div className="opi-grid">
          <div className="opi-card">
            <span className="opi-label">Opi Insights</span>A real language
            model, a structured snapshot of your data, a scored and prioritised
            findings list. Nothing runs until you open the panel.
          </div>
          <div className="opi-card">
            <span className="opi-label">AI Facilitator</span>
            In the huddle: a line at each stage, a read on every red pillar, the
            next 5-Why step, an accountability prompt per overdue action, a
            close-out recap. You edit and confirm.
          </div>
          <div className="opi-card">
            <span className="opi-label">Under real governance</span>
            Off outside production by default. Platform and per-enterprise kill
            switches, no deploy. Gated to your plan. Every call metered against
            a budget that cuts off on its own.
          </div>
        </div>
        <OpiSays context="mid-huddle">
          &ldquo;Safety is red due to Lost Time Injuries, so Sarah Chen, please
          confirm the drafted action waiting on you.&rdquo;
        </OpiSays>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Styles — scoped to .pitch. Tokens are the site's brand system, restated here
   as plain hex so this page holds even if the global CSS layer changes. The
   page commits to the site's dark "Neon Operations" world, so it's single-theme
   by design — but every colour and the background are painted explicitly.
   ──────────────────────────────────────────────────────────────────────────── */
const STYLES = `
.pitch {
  --navy: #0A0E1A;
  --surface: #0D1220;
  --surface-2: #111827;
  --line: #1E2738;
  --ink: #E2E8F0;
  --ink-dim: #8890A0;
  --ink-faint: #596475;
  --purple: #8C34E9;
  --purple-lt: #C084FC;
  --teal: #1DB8CE;
  --green: #22C55E;
  --amber: #F59E0B;
  --red: #EF4444;

  background: var(--navy);
  color: var(--ink);
  font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
.pitch *,
.pitch *::before,
.pitch *::after { box-sizing: border-box; }

.pitch a { color: inherit; text-decoration: none; }
.pitch a:focus-visible {
  outline: 2px solid var(--teal);
  outline-offset: 3px;
  border-radius: 3px;
}

/* ── Top shell ── */
.pitch-top {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px clamp(16px, 4vw, 40px);
  background: color-mix(in srgb, var(--navy) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid color-mix(in srgb, var(--line) 60%, transparent);
}
.brand { display: flex; align-items: center; gap: 10px; }
.brand-mark {
  width: 28px; height: 28px;
  display: grid; place-items: center;
  border-radius: 999px;
  background: var(--purple);
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 14px;
}
.brand-word {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: -0.01em;
}
.brand-tld { color: var(--ink-faint); font-weight: 300; }
.pitch-kicker {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

/* ── Cascade rail ── */
.rail {
  position: fixed;
  left: max(20px, calc((100vw - 1220px) / 2));
  top: 50%;
  transform: translateY(-50%);
  z-index: 15;
  width: 190px;
  display: none;
}
@media (min-width: 1240px) { .rail { display: block; } }
.rail ol { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1px; }
.rail-item a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 8px;
  border-radius: 8px;
  transition: background 160ms ease;
}
.rail-item a:hover { background: color-mix(in srgb, var(--surface) 80%, transparent); }
.rail-dot {
  width: 20px; height: 20px;
  flex: none;
  display: grid; place-items: center;
  border-radius: 999px;
  border: 1.5px solid var(--line);
  color: var(--ink-faint);
  transition: all 200ms ease;
}
.rail-text { display: flex; flex-direction: column; line-height: 1.25; }
.rail-label {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-faint);
  transition: color 200ms ease;
  white-space: nowrap;
}
.rail-tier {
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--ink-faint) 70%, transparent);
}
.rail-item.done .rail-dot { border-color: var(--purple); color: var(--purple-lt); background: color-mix(in srgb, var(--purple) 14%, transparent); }
.rail-item.done .rail-label { color: var(--ink-dim); }
.rail-item.here .rail-dot { border-color: var(--teal); color: var(--teal); background: color-mix(in srgb, var(--teal) 16%, transparent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--teal) 10%, transparent); }
.rail-item.here .rail-label { color: var(--ink); }

/* ── Deck ── */
.deck { position: relative; }
.tier {
  padding: clamp(56px, 9vh, 92px) clamp(20px, 6vw, 40px);
  border-bottom: 1px solid color-mix(in srgb, var(--line) 45%, transparent);
  scroll-margin-top: 72px;
}
.tier:nth-child(even) { background: var(--surface); }
.tier-inner {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}
/* Give the two anchor sections a little more room to breathe */
#top, #offer { padding-top: clamp(64px, 11vh, 112px); padding-bottom: clamp(64px, 11vh, 112px); }
.tier-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}
.eyebrow {
  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--teal);
}
.tier-badge {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 3px 8px;
}

/* ── Type ── */
.hero-h {
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: clamp(32px, 5.4vw, 52px);
  line-height: 1.06;
  letter-spacing: -0.02em;
  text-wrap: balance;
  margin: 0 0 22px;
}
.tier-h {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: clamp(24px, 3.6vw, 36px);
  line-height: 1.12;
  letter-spacing: -0.015em;
  text-wrap: balance;
  margin: 0 0 20px;
}
.hero-sub {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--ink-dim);
  max-width: 62ch;
  margin: 0 0 34px;
}
.hero-note {
  font-size: 13px;
  color: var(--ink-faint);
  margin: 20px 0 30px;
  max-width: 54ch;
}
.lead {
  font-size: clamp(15px, 1.8vw, 18px);
  color: var(--ink-dim);
  max-width: 64ch;
  margin: 0 0 30px;
}
.tier p { max-width: 62ch; margin: 0 0 16px; color: var(--ink-dim); }
.two-col { display: grid; gap: 18px 40px; margin-bottom: 28px; }
@media (min-width: 720px) { .two-col { grid-template-columns: 1fr 1fr; } .two-col p { margin: 0; } }

.hook {
  border-left: 2px solid var(--teal);
  padding-left: 16px;
  font-size: 14.5px;
  color: var(--ink-dim);
  max-width: 60ch;
  margin-top: 30px;
}

/* ── Pillar strip ── */
.pd-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin: 6px 0;
  max-width: 520px;
}
.pd-cell {
  position: relative;
  border: 1px solid;
  border-radius: 10px;
  padding: 14px 10px 12px;
  text-align: center;
  transition: border-color 500ms ease, background 500ms ease;
}
.pd-code {
  display: block;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 18px;
  line-height: 1;
}
.pd-name {
  display: block;
  margin-top: 5px;
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-dim);
}
.pd-dot {
  position: absolute;
  top: 8px; right: 8px;
  width: 6px; height: 6px;
  border-radius: 999px;
}

/* ── Framed screenshots ── */
.shot {
  margin: 28px 0 8px;
}
.shot-frame {
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
  background: #080C16;
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.6);
}
.shot-teal .shot-frame { box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px color-mix(in srgb, var(--teal) 10%, transparent); }
.shot-purple .shot-frame { box-shadow: 0 20px 60px -20px rgba(140, 52, 233, 0.35), 0 0 0 1px color-mix(in srgb, var(--purple) 22%, transparent); }
.shot-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--line);
}
.shot-dot {
  width: 8px; height: 8px;
  border-radius: 999px;
  background: var(--line);
}
.shot-purple .shot-dot:first-child { background: color-mix(in srgb, var(--purple) 60%, transparent); }
.shot-teal .shot-dot:first-child { background: color-mix(in srgb, var(--teal) 55%, transparent); }
.shot-bar-label {
  margin-left: 8px;
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-faint);
  font-weight: 600;
}
.shot-body {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}
.shot-body img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}
.shot-ph {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 24px;
  text-align: center;
  background-image: linear-gradient(#1E2738 1px, transparent 1px), linear-gradient(90deg, #1E2738 1px, transparent 1px);
  background-size: 40px 40px;
}
.shot-ph-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #4A5668;
}
.shot-ph-file { font-size: 11px; color: #3A4658; }
.shot figcaption {
  margin-top: 12px;
  font-size: 13px;
  color: var(--ink-faint);
  max-width: 62ch;
}
/* ── Opi's own voice ── */
.opi-orb {
  width: 20px; height: 20px;
  flex: none;
  border-radius: 999px;
  background: radial-gradient(circle at 32% 30%, #E9D5FF 0%, #C084FC 30%, #8C34E9 70%, #5B1FA6 100%);
  box-shadow: 0 0 14px rgba(140, 52, 233, 0.6), inset 0 0 6px rgba(255, 255, 255, 0.35);
}
.opi-orb-sm { width: 15px; height: 15px; box-shadow: 0 0 10px rgba(140, 52, 233, 0.55); }

.opi-says {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  margin: 28px 0 8px;
  padding: 16px 18px;
  border: 1px solid color-mix(in srgb, var(--purple) 34%, transparent);
  border-radius: 12px;
  background:
    radial-gradient(120% 140% at 0% 0%, rgba(140, 52, 233, 0.14), transparent 60%),
    color-mix(in srgb, var(--surface-2) 75%, transparent);
  max-width: 64ch;
}
.opi-says-body { display: flex; flex-direction: column; gap: 6px; }
.opi-says-tag {
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--purple-lt);
}
.opi-says-text {
  margin: 0 !important;
  max-width: none !important;
  font-size: 15px;
  color: var(--ink) !important;
  line-height: 1.5;
}

/* ── Gap list ── */
.gap-list, .offer-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.gap-list li, .offer-list li {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  font-size: 14.5px;
  color: var(--ink-dim);
  max-width: 60ch;
}
.gap-x { flex: none; font-weight: 700; line-height: 1.5; }
.offer-list { margin-top: 24px; }
.offer-list li { color: var(--ink); }
.offer-list svg { flex: none; margin-top: 3px; color: var(--green); }

/* ── Cascade diagram ── */
.cascade { display: flex; flex-direction: column; align-items: center; gap: 4px; margin: 30px 0 28px; }
.casc-node {
  width: 100%;
  max-width: 380px;
  text-align: center;
  border: 1px solid;
  border-radius: 12px;
  padding: 14px 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--ink);
}
.casc-node span {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: var(--ink-faint);
  margin-top: 3px;
  letter-spacing: 0;
}
.casc-strategy { border-color: color-mix(in srgb, var(--amber) 45%, transparent); background: linear-gradient(180deg, color-mix(in srgb, var(--amber) 12%, transparent), color-mix(in srgb, var(--amber) 4%, transparent)); }
.casc-daily    { border-color: color-mix(in srgb, var(--teal) 45%, transparent);  background: linear-gradient(180deg, color-mix(in srgb, var(--teal) 12%, transparent),  color-mix(in srgb, var(--teal) 4%, transparent)); }
.casc-obeya    { border-color: color-mix(in srgb, var(--purple) 50%, transparent); background: linear-gradient(180deg, color-mix(in srgb, var(--purple) 14%, transparent), color-mix(in srgb, var(--purple) 4%, transparent)); }
.casc-actions  { border-color: color-mix(in srgb, var(--green) 45%, transparent); background: linear-gradient(180deg, color-mix(in srgb, var(--green) 12%, transparent), color-mix(in srgb, var(--green) 4%, transparent)); }
.casc-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
  padding: 6px 0;
}

/* ── Obeya flow ── */
.flow { list-style: none; margin: 28px 0 8px; padding: 0; display: flex; flex-direction: column; gap: 14px; counter-reset: none; }
.flow li { display: flex; gap: 14px; align-items: flex-start; }
.flow-n {
  flex: none;
  width: 26px; height: 26px;
  display: grid; place-items: center;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--purple) 40%, transparent);
  background: color-mix(in srgb, var(--purple) 12%, transparent);
  color: var(--purple-lt);
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.flow li div { max-width: 56ch; }
.flow strong {
  display: block;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--ink);
  margin-bottom: 2px;
}
.flow li div { font-size: 13.5px; color: var(--ink-dim); }

/* ── The Opi section — its own colour world ── */
.tier-opi {
  position: relative;
  background:
    radial-gradient(60% 50% at 82% 0%, rgba(140, 52, 233, 0.13), transparent 70%),
    radial-gradient(50% 40% at 0% 100%, rgba(29, 184, 206, 0.06), transparent 70%),
    var(--surface) !important;
  border-top: 1px solid color-mix(in srgb, var(--purple) 24%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--purple) 24%, transparent);
}
.opi-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--purple-lt);
}
.tier-opi .flow-n,
.tier-opi .opi-label { color: var(--purple-lt); }

/* ── Opi grid ── */
.opi-grid { display: grid; gap: 12px; margin: 30px 0 8px; }
@media (min-width: 720px) { .opi-grid { grid-template-columns: repeat(3, 1fr); } }
.opi-card {
  border: 1px solid color-mix(in srgb, var(--purple) 20%, transparent);
  background: color-mix(in srgb, var(--surface-2) 70%, transparent);
  border-radius: 12px;
  padding: 16px;
  font-size: 13px;
  color: var(--ink-dim);
}
.opi-label {
  display: block;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: var(--ink);
  margin-bottom: 7px;
}

/* ── CTAs ── */
.cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  letter-spacing: 0.01em;
  border-radius: 8px;
  padding: 12px 20px;
  transition: transform 140ms ease, opacity 140ms ease;
}
.cta:hover { transform: translateY(-1px); }
.cta-primary {
  color: #fff;
  background: linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%);
  box-shadow: 0 0 30px rgba(140, 52, 233, 0.3), 0 0 60px rgba(140, 52, 233, 0.08);
}
.cta-ghost {
  color: var(--ink-dim);
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--surface) 60%, transparent);
}
.cta-ghost:hover { color: var(--ink); border-color: color-mix(in srgb, var(--purple) 40%, transparent); }

/* ── Offer ── */
.offer-h { font-size: clamp(26px, 4.4vw, 42px); }
.offer-cta { margin-top: 30px; display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
.offer-fine { font-size: 12.5px; color: var(--ink-faint); max-width: 48ch; }

/* ── Footer ── */
.pitch-foot {
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 40px 20px 56px;
  font-size: 12px;
  color: var(--ink-faint);
}
.foot-link:hover { color: var(--ink-dim); }

@media (prefers-reduced-motion: reduce) {
  .pd-cell { transition: none; }
  .cta:hover { transform: none; }
}
`;
