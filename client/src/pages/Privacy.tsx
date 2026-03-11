/**
 * Privacy Policy Page — TASK-14
 * Design: "Neon Operations"
 * GDPR-compliant privacy policy with comprehensive sections.
 * Note: Section numbering is now handled by LegalContentBlock.
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import LegalContentBlock from '@/components/shared/LegalContentBlock';

const privacySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: 'Oplytics.digital ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.\n\nBy accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access our services.',
  },
  {
    id: 'information-collected',
    title: 'Information We Collect',
    content: 'We collect information that you provide directly to us, including:\n\n• Name, email address, and company name when you fill out contact forms or register interest\n• Account information when you register for our services (name, email, role, organisation)\n• Payment and billing information when you subscribe to paid plans\n• Usage data and analytics when you interact with our platform\n• Device and browser information for security and optimisation purposes\n• Manufacturing operational data that you input into our services\n\nWe also collect certain information automatically when you visit our website, including IP address, browser type, operating system, referring URLs, and pages visited. We use analytics tools to understand how visitors interact with our website.',
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: 'We use the information we collect to:\n\n• Provide, maintain, and improve our services\n• Process transactions and send related information\n• Respond to your enquiries and provide customer support\n• Send you technical notices, updates, and administrative messages\n• Send marketing communications (with your consent, where required)\n• Monitor and analyse trends, usage, and activities\n• Detect, investigate, and prevent fraudulent transactions and other illegal activities\n• Personalise and improve your experience with our platform\n• Train and improve our AI models using anonymised and aggregated data only',
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    content: 'We process your personal data on the following legal bases under GDPR:\n\n• Contract: Processing necessary for the performance of our contract with you (providing our services)\n• Consent: Where you have given explicit consent for specific processing activities (marketing communications)\n• Legitimate Interest: Processing necessary for our legitimate business interests (improving our services, security)\n• Legal Obligation: Processing necessary to comply with legal requirements\n\nYou may withdraw your consent at any time by contacting us at privacy@oplytics.digital.',
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing and Third Parties',
    content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:\n\n• To trusted service providers who assist us in operating our platform (hosting, payment processing, analytics)\n• When required by law or to respond to legal process\n• To protect our rights, privacy, safety, or property\n• In connection with a merger, acquisition, or sale of assets (with prior notice)\n\nAll third-party service providers are contractually obligated to protect your data and process it only as instructed by us. Our primary infrastructure is hosted in UK/EU data centres.',
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: 'We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements.\n\n• Account data: Retained for the duration of your account plus 12 months after closure\n• Contact form submissions: Retained for 24 months\n• Analytics data: Retained in anonymised form indefinitely\n• Financial records: Retained for 7 years as required by law\n\nYou may request deletion of your data at any time, subject to legal retention requirements.',
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes:\n\n• Encryption at rest and in transit (TLS 1.3)\n• Regular security audits and penetration testing\n• Role-based access controls and principle of least privilege\n• Automated threat detection and monitoring\n• Regular backups with tested recovery procedures\n• Employee security awareness training\n\nWhile we strive to protect your personal data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.',
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking',
    content: 'We use cookies and similar tracking technologies to enhance your experience on our website. These include:\n\n• Essential cookies: Required for the website to function properly (session management, security)\n• Analytics cookies: Help us understand how visitors interact with our website (anonymised)\n• Preference cookies: Remember your settings and preferences\n\nWe do not use advertising or tracking cookies from third-party ad networks. You can control cookie settings through your browser preferences.',
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    content: 'Your data is primarily stored and processed in the United Kingdom and European Economic Area. If we need to transfer data outside the UK/EEA, we ensure appropriate safeguards are in place, including:\n\n• Standard Contractual Clauses approved by the European Commission\n• Adequacy decisions where applicable\n• Binding Corporate Rules where relevant\n\nWe will always inform you before transferring your data to a jurisdiction outside the UK/EEA.',
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: 'Under applicable data protection laws (GDPR and UK Data Protection Act 2018), you have the right to:\n\n• Access: Request a copy of the personal data we hold about you\n• Rectification: Request correction of inaccurate or incomplete data\n• Erasure: Request deletion of your personal data ("right to be forgotten")\n• Restriction: Request restriction of processing in certain circumstances\n• Portability: Request your data in a structured, machine-readable format\n• Objection: Object to processing based on legitimate interests or direct marketing\n• Automated decisions: Not be subject to decisions based solely on automated processing\n\nTo exercise these rights, please contact us at privacy@oplytics.digital. We will respond within 30 days.',
  },
  {
    id: 'childrens-privacy',
    title: 'Children\'s Privacy',
    content: 'Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.',
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: 'If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:\n\nData Protection Officer\nOplytics.digital\nEmail: privacy@oplytics.digital\nGeneral enquiries: hello@oplytics.digital\n\nYou also have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk if you believe your data protection rights have been violated.',
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
