/**
 * Login Page — Placeholder that redirects to the platform.
 * Design: "Neon Operations"
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import { Link } from 'wouter';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export default function Login() {
  const handleSignIn = () => {
    toast.info('Sign-in will redirect to the Oplytics platform when connected.');
  };

  return (
    <MarketingLayout>
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#8C34E9' }}>
            <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Montserrat' }}>O</span>
          </div>
          <h1 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
            Sign In
          </h1>
          <p className="text-[#8890A0] mb-8">
            Access the Oplytics.digital platform to manage your operational excellence tools.
          </p>

          <button
            onClick={handleSignIn}
            className="inline-flex items-center gap-2 w-full justify-center px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple mb-4"
            style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
          >
            Sign In to Platform
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-xs text-[#596475]">
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
