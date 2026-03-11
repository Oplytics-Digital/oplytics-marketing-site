/**
 * TASK-07: ContactForm Component
 * Design: "Neon Operations" — dark form with glowing focus states
 *
 * Fields: Name, Email, Company, Message
 * Form validation. Reusable across /contact and service pages.
 */
import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormProps {
  /** Optional context for where the form is embedded */
  context?: string;
  compact?: boolean;
}

export default function ContactForm({ context, compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast.success('Message sent! We\'ll be in touch shortly.');
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center ${compact ? 'py-8' : 'py-16'} text-center`}>
        <div className="w-14 h-14 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-7 h-7 text-[#22C55E]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
          Message Sent
        </h3>
        <p className="text-sm text-[#8890A0] max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-md text-sm text-white placeholder-[#596475] bg-[#0D1220] border transition-all duration-200 focus:outline-none focus:ring-1 ${
      errors[field]
        ? 'border-[#EF4444] focus:ring-[#EF4444]/50'
        : 'border-[#1E2738] focus:border-[#8C34E9]/50 focus:ring-[#8C34E9]/30'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {context && <input type="hidden" name="context" value={context} />}

      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-5'}>
        <div>
          <label className="block text-xs font-medium text-[#8890A0] mb-1.5">Name *</label>
          <input
            type="text"
            className={inputClass('name')}
            placeholder="Your name"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
          {errors.name && <p className="text-xs text-[#EF4444] mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-[#8890A0] mb-1.5">Email *</label>
          <input
            type="email"
            className={inputClass('email')}
            placeholder="you@company.com"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
          {errors.email && <p className="text-xs text-[#EF4444] mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#8890A0] mb-1.5">Company</label>
        <input
          type="text"
          className={inputClass('company')}
          placeholder="Your company name"
          value={formData.company}
          onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#8890A0] mb-1.5">Message *</label>
        <textarea
          className={`${inputClass('message')} resize-none`}
          rows={compact ? 3 : 5}
          placeholder="Tell us about your needs..."
          value={formData.message}
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
        {errors.message && <p className="text-xs text-[#EF4444] mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider transition-all duration-200 hover:opacity-90 disabled:opacity-50 glow-purple"
        style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
