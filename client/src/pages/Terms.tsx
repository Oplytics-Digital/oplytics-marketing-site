/**
 * Terms of Service Page — TASK-15
 * Design: "Neon Operations"
 * Comprehensive terms with SaaS-specific clauses.
 * Note: Section numbering is now handled by LegalContentBlock.
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import LegalContentBlock from '@/components/shared/LegalContentBlock';
import SEOHead from '@/components/shared/SEOHead';

const termsSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: 'By accessing and using Oplytics.digital services ("Services"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you should not use our Services.\n\nThese Terms constitute a legally binding agreement between you (or the organisation you represent) and Oplytics.digital. If you are accepting these Terms on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation.',
  },
  {
    id: 'services',
    title: 'Description of Services',
    content: 'Oplytics.digital provides a cloud-based operational excellence platform for manufacturing organisations. Our Services include but are not limited to:\n\n• OEE Manager — Real-time equipment effectiveness tracking\n• SQDCP Dashboard — Digital daily management boards\n• Policy Deployment — Hoshin Kanri and X-matrix planning\n• Action Manager — Corrective and preventive action tracking\n• SmartConnect — Industrial IoT connectivity (in development)\n• Quality Manager — Non-conformance and CAPA management (in development)\n• Safety Manager — Incident reporting and safety management (in development)\n• Certification Manager — ISO and standards compliance (in development)\n\nServices marked "in development" are not yet generally available. Features, pricing, and availability are subject to change. We reserve the right to modify, suspend, or discontinue any part of our Services at any time with reasonable notice.',
  },
  {
    id: 'accounts',
    title: 'User Accounts',
    content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:\n\n• Provide accurate and complete registration information\n• Maintain and promptly update your account information\n• Notify us immediately of any unauthorised use of your account\n• Not share your account credentials with third parties\n• Ensure all users within your organisation comply with these Terms\n\nWe reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe are being used fraudulently.',
  },
  {
    id: 'subscription',
    title: 'Subscription and Payment',
    content: 'Access to our Services requires a paid subscription. By subscribing, you agree to:\n\n• Pay all fees associated with your chosen plan\n• Provide accurate billing information\n• Authorise us to charge your payment method on a recurring basis\n\nPrices are quoted in GBP and are exclusive of VAT unless stated otherwise. We may change our pricing with 30 days written notice. Annual subscriptions are billed upfront and are non-refundable except as required by law.\n\nIf payment fails, we will notify you and provide a grace period of 14 days. If payment is not received within the grace period, we may suspend your access to the Services.',
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    content: 'You agree not to use our Services to:\n\n• Violate any applicable laws or regulations\n• Infringe on the intellectual property rights of others\n• Transmit malicious code or interfere with our systems\n• Attempt to gain unauthorised access to our systems or other users\' accounts\n• Use the Services for any purpose other than their intended use\n• Reverse engineer, decompile, or disassemble any part of the Services\n• Use automated tools to scrape, crawl, or extract data from the Services\n• Resell, sublicense, or redistribute the Services without our written consent\n\nWe reserve the right to investigate and take appropriate action against anyone who violates these provisions.',
  },
  {
    id: 'data-ownership',
    title: 'Data Ownership and Processing',
    content: 'Your data remains your property. We do not claim ownership of any data you upload to our platform ("Customer Data"). You grant us a limited licence to process your Customer Data solely for the purpose of providing the Services.\n\nWe will:\n\n• Process your data in accordance with our Privacy Policy and applicable data protection laws\n• Not access your data except as necessary to provide the Services or as required by law\n• Implement appropriate technical and organisational security measures\n• Notify you promptly of any data breach affecting your Customer Data\n\nYou are responsible for ensuring that you have the right to upload and process any data you provide to our platform, including obtaining necessary consents from data subjects.',
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: 'All content, features, and functionality of our Services — including software, designs, text, graphics, logos, and trademarks — are owned by Oplytics.digital and are protected by international copyright, trademark, and other intellectual property laws.\n\nYou may not copy, modify, distribute, sell, or lease any part of our Services without our written consent. You may not use our trademarks or branding without prior written approval.\n\nAny feedback, suggestions, or ideas you provide about our Services may be used by us without obligation to you.',
  },
  {
    id: 'ai-features',
    title: 'AI Features and Automated Processing',
    content: 'Certain features of our Services use artificial intelligence and machine learning ("AI Features"). By using AI Features, you acknowledge that:\n\n• AI-generated outputs are provided as suggestions and should be reviewed by qualified personnel before acting upon them\n• We do not guarantee the accuracy, completeness, or reliability of AI-generated outputs\n• AI models may be improved over time using anonymised and aggregated data\n• You remain responsible for all decisions made based on AI-generated outputs\n• AI Features are not a substitute for professional judgement in safety-critical applications\n\nWe will clearly label features that use AI processing within the platform.',
  },
  {
    id: 'sla',
    title: 'Service Level Agreement',
    content: 'We target 99.9% uptime for our Services, measured on a monthly basis, excluding scheduled maintenance windows. Scheduled maintenance will be communicated at least 48 hours in advance.\n\nIn the event of downtime exceeding our target, Professional and Enterprise customers may be eligible for service credits as defined in their specific service agreement.\n\nWe do not guarantee uninterrupted or error-free operation of the Services. We will use commercially reasonable efforts to resolve issues promptly.',
  },
  {
    id: 'limitation',
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by law, Oplytics.digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our Services, including but not limited to:\n\n• Loss of profits, revenue, or business opportunities\n• Loss of data or data corruption\n• Business interruption\n• Cost of procurement of substitute services\n\nOur total aggregate liability shall not exceed the amount you paid for the Services in the twelve months preceding the claim. Nothing in these Terms excludes liability for death, personal injury, or fraud.',
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: 'You agree to indemnify and hold harmless Oplytics.digital and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from:\n\n• Your use of the Services\n• Your violation of these Terms\n• Your violation of any third-party rights\n• Any Customer Data you upload to the platform',
  },
  {
    id: 'termination',
    title: 'Termination',
    content: 'Either party may terminate the service agreement with 30 days written notice. We may terminate or suspend your access immediately if:\n\n• You breach these Terms\n• You fail to pay fees when due\n• We are required to do so by law\n• We cease to offer the Services\n\nUpon termination, you will have 30 days to export your data. After this period, we may delete your data in accordance with our data retention policy. Sections relating to intellectual property, limitation of liability, and governing law survive termination.',
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Disputes',
    content: 'These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.\n\nAny disputes arising from these Terms shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to the exclusive jurisdiction of the courts of England and Wales.\n\nNothing in this clause prevents either party from seeking injunctive or other equitable relief in any court of competent jurisdiction.',
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    content: 'We may update these Terms from time to time. We will notify you of material changes at least 30 days before they take effect by email or through the Services. Your continued use of the Services after changes take effect constitutes acceptance of the updated Terms.\n\nIf you do not agree with the updated Terms, you may terminate your subscription before the changes take effect.',
  },
  {
    id: 'contact',
    title: 'Contact',
    content: 'For questions about these Terms of Service, please contact us at:\n\nLegal Department\nOplytics.digital\nEmail: legal@oplytics.digital\nGeneral enquiries: hello@oplytics.digital\nUnited Kingdom',
  },
];

export default function Terms() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Terms of Service"
        description="Oplytics.digital terms of service. Legal terms and conditions governing the use of our operational excellence platform."
      />
      <div className="pt-16">
        <LegalContentBlock
          title="Terms of Service"
          lastUpdated="1 March 2026"
          sections={termsSections}
        />
      </div>
    </MarketingLayout>
  );
}
