/**
 * Privacy Policy Page
 * Design: "Neon Operations"
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import LegalContentBlock from '@/components/shared/LegalContentBlock';

const privacySections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: 'Oplytics.digital ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.\n\nBy accessing or using our services, you agree to the collection and use of information in accordance with this policy.',
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    content: 'We collect information that you provide directly to us, including:\n\n• Name, email address, and company name when you fill out contact forms\n• Account information when you register for our services\n• Usage data and analytics when you interact with our platform\n• Device and browser information for security and optimisation purposes\n\nWe do not collect sensitive personal data unless explicitly required for service delivery.',
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: 'We use the information we collect to:\n\n• Provide, maintain, and improve our services\n• Respond to your enquiries and provide customer support\n• Send you technical notices, updates, and administrative messages\n• Monitor and analyse trends, usage, and activities\n• Detect, investigate, and prevent fraudulent transactions and other illegal activities',
  },
  {
    id: 'data-sharing',
    title: '4. Data Sharing',
    content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:\n\n• To trusted service providers who assist us in operating our platform\n• When required by law or to respond to legal process\n• To protect our rights, privacy, safety, or property',
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    content: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encryption at rest and in transit, regular security audits, and access controls.',
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    content: 'Under applicable data protection laws, you have the right to:\n\n• Access your personal data\n• Rectify inaccurate data\n• Request deletion of your data\n• Object to processing of your data\n• Data portability\n\nTo exercise these rights, please contact us at privacy@oplytics.digital.',
  },
  {
    id: 'contact',
    title: '7. Contact Us',
    content: 'If you have any questions about this Privacy Policy, please contact us at:\n\nEmail: privacy@oplytics.digital\nOplytics.digital\nUnited Kingdom',
  },
];

export default function Privacy() {
  return (
    <MarketingLayout>
      <div className="pt-16">
        <LegalContentBlock
          title="Privacy Policy"
          lastUpdated="1 March 2026"
          sections={privacySections}
        />
      </div>
    </MarketingLayout>
  );
}
