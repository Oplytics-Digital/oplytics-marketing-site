/**
 * Login Page — Redirects to the platform login.
 * Preserves the marketing site layout briefly while redirecting.
 */
import { useEffect } from 'react';
import MarketingLayout from '@/components/shared/MarketingLayout';
import { Link } from 'wouter';
import { ExternalLink, Loader2 } from 'lucide-react';

const PLATFORM_LOGIN_URL = 'https://portal.oplyticsdigital.net/login';

export default function Login() {
  useEffect(() => {
    // Redirect to platform login
    window.location.href = PLATFORM_LOGIN_URL;
  }, []);

  return (
    <MarketingLayout>
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#8C34E9' }}>
            <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Montserrat' }}>O</span>
          </div>
          <h1 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
            Redirecting to Sign In
          </h1>
          <p className="text-[#8890A0] mb-8">
            You are being redirected to the Oplytics platform to sign in.
          </p>

          <Loader2 className="w-6 h-6 text-[#8C34E9] animate-spin mx-auto mb-6" />

          <p className="text-xs text-[#596475]">
            Not redirected?{' '}
            <a
              href={PLATFORM_LOGIN_URL}
              className="text-[#8C34E9] hover:text-[#C084FC] transition-colors inline-flex items-center gap-1"
            >
              Click here to sign in
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>

          <p className="text-xs text-[#596475] mt-4">
            Don't have an account?{' '}
            <Link href="/contact" className="text-[#8C34E9] hover:text-[#C084FC] transition-colors">
              Get started
            </Link>
          </p>
        </div>
      </section>
    </MarketingLayout>
  );
}
