/**
 * TASK-30: CookieConsent — GDPR/PECR compliant cookie consent banner
 * Design: "Neon Operations" — dark card fixed to bottom, does not obstruct chatbot
 *
 * Categories: Essential (always on), Analytics (Umami), Preferences (localStorage)
 * Consent stored in localStorage key 'oplytics-cookie-consent'.
 * Revocable via "Cookie Settings" link in footer.
 */
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { X, Shield, ChevronDown, ChevronUp } from 'lucide-react';

interface ConsentState {
  essential: boolean; // always true
  analytics: boolean;
  preferences: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'oplytics-cookie-consent';
const EXPIRY_MS = 365 * 24 * 60 * 60 * 1000; // 12 months

function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    // Check expiry
    if (Date.now() - parsed.timestamp > EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

/** Disable Umami analytics if consent not given */
function applyAnalyticsConsent(allowed: boolean) {
  if (!allowed) {
    // Remove Umami script if present
    const umamiScript = document.querySelector('script[data-website-id]');
    if (umamiScript) {
      umamiScript.remove();
    }
    // Set Umami disable flag
    (window as unknown as Record<string, unknown>)['umami.disabled'] = true;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // No consent yet — show banner after a short delay
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    // Apply stored consent
    applyAnalyticsConsent(stored.analytics);
  }, []);

  const acceptAll = useCallback(() => {
    const consent: ConsentState = {
      essential: true,
      analytics: true,
      preferences: true,
      timestamp: Date.now(),
    };
    saveConsent(consent);
    setVisible(false);
  }, []);

  const savePreferences = useCallback(() => {
    const consent: ConsentState = {
      essential: true,
      analytics,
      preferences,
      timestamp: Date.now(),
    };
    saveConsent(consent);
    applyAnalyticsConsent(analytics);
    setVisible(false);
  }, [analytics, preferences]);

  const rejectNonEssential = useCallback(() => {
    const consent: ConsentState = {
      essential: true,
      analytics: false,
      preferences: false,
      timestamp: Date.now(),
    };
    saveConsent(consent);
    applyAnalyticsConsent(false);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6" style={{ marginBottom: '0' }}>
      <div
        className="max-w-2xl mx-auto rounded-xl border border-[#1E2738] p-5 sm:p-6"
        style={{ background: '#0D1220', boxShadow: '0 -4px 40px rgba(0,0,0,0.5)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#8C34E9] shrink-0" />
            <h3 className="text-sm font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              Cookie Preferences
            </h3>
          </div>
          <button
            onClick={rejectNonEssential}
            className="text-[#596475] hover:text-white transition-colors shrink-0"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#8890A0] leading-relaxed mb-4">
          We use cookies to improve your experience and analyse site usage.
          Essential cookies are always active.
          See our{' '}
          <Link href="/privacy" className="text-[#8C34E9] hover:text-[#C084FC] underline transition-colors">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>

        {/* Manage Preferences (collapsible) */}
        <button
          onClick={() => setShowPrefs(!showPrefs)}
          className="flex items-center gap-1.5 text-xs font-medium text-[#8890A0] hover:text-white transition-colors mb-3"
        >
          Manage Preferences
          {showPrefs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showPrefs && (
          <div className="space-y-3 mb-4 pl-1">
            {/* Essential — always on */}
            <label className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-white">Essential</span>
                <p className="text-[10px] text-[#596475]">Required for site functionality. Cannot be disabled.</p>
              </div>
              <div className="w-9 h-5 rounded-full bg-[#22C55E]/30 flex items-center justify-end px-0.5 cursor-not-allowed opacity-60">
                <div className="w-4 h-4 rounded-full bg-[#22C55E]" />
              </div>
            </label>

            {/* Analytics */}
            <label className="flex items-center justify-between gap-3 cursor-pointer">
              <div>
                <span className="text-xs font-semibold text-white">Analytics</span>
                <p className="text-[10px] text-[#596475]">Anonymous usage data to improve the site.</p>
              </div>
              <button
                onClick={() => setAnalytics(!analytics)}
                className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                  analytics ? 'bg-[#8C34E9]/40 justify-end' : 'bg-[#1E2738] justify-start'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-colors ${analytics ? 'bg-[#8C34E9]' : 'bg-[#596475]'}`} />
              </button>
            </label>

            {/* Preferences */}
            <label className="flex items-center justify-between gap-3 cursor-pointer">
              <div>
                <span className="text-xs font-semibold text-white">Preferences</span>
                <p className="text-[10px] text-[#596475]">Remember your theme and display settings.</p>
              </div>
              <button
                onClick={() => setPreferences(!preferences)}
                className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                  preferences ? 'bg-[#8C34E9]/40 justify-end' : 'bg-[#1E2738] justify-start'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-colors ${preferences ? 'bg-[#8C34E9]' : 'bg-[#596475]'}`} />
              </button>
            </label>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={acceptAll}
            className="flex-1 px-4 py-2.5 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
          >
            Accept All
          </button>
          {showPrefs ? (
            <button
              onClick={savePreferences}
              className="flex-1 px-4 py-2.5 rounded-lg text-xs font-bold text-white border border-[#1E2738] hover:border-[#8C34E9]/50 transition-all"
              style={{ background: 'transparent' }}
            >
              Save Preferences
            </button>
          ) : (
            <button
              onClick={rejectNonEssential}
              className="flex-1 px-4 py-2.5 rounded-lg text-xs font-bold text-[#8890A0] border border-[#1E2738] hover:border-[#8C34E9]/50 hover:text-white transition-all"
              style={{ background: 'transparent' }}
            >
              Reject Non-Essential
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/** Re-open cookie preferences — call from footer "Cookie Settings" link */
export function reopenCookieConsent() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}
