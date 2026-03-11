/**
 * Terms of Service Page
 * Design: "Neon Operations"
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import LegalContentBlock from '@/components/shared/LegalContentBlock';

const termsSections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: 'By accessing and using Oplytics.digital services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you should not use our services.',
  },
  {
    id: 'services',
    title: '2. Description of Services',
    content: 'Oplytics.digital provides a cloud-based operational excellence platform for manufacturing organisations. Our services include OEE tracking, SQDCP digital boards, action management, safety management, and related tools.\n\nWe reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.',
  },
  {
    id: 'accounts',
    title: '3. User Accounts',
    content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:\n\n• Provide accurate and complete registration information\n• Maintain and promptly update your account information\n• Notify us immediately of any unauthorised use of your account\n• Not share your account credentials with third parties',
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use',
    content: 'You agree not to use our services to:\n\n• Violate any applicable laws or regulations\n• Infringe on the intellectual property rights of others\n• Transmit malicious code or interfere with our systems\n• Attempt to gain unauthorised access to our systems or other users\' accounts\n• Use the services for any purpose other than their intended use',
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    content: 'All content, features, and functionality of our services are owned by Oplytics.digital and are protected by international copyright, trademark, and other intellectual property laws.\n\nYour data remains your property. We do not claim ownership of any data you upload to our platform.',
  },
  {
    id: 'limitation',
    title: '6. Limitation of Liability',
    content: 'To the maximum extent permitted by law, Oplytics.digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.\n\nOur total liability shall not exceed the amount you paid for the services in the twelve months preceding the claim.',
  },
  {
    id: 'termination',
    title: '7. Termination',
    content: 'Either party may terminate the service agreement with 30 days written notice. Upon termination, you will have 30 days to export your data. After this period, we may delete your data in accordance with our data retention policy.',
  },
  {
    id: 'governing-law',
    title: '8. Governing Law',
    content: 'These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.',
  },
  {
    id: 'contact',
    title: '9. Contact',
    content: 'For questions about these Terms of Service, please contact us at:\n\nEmail: legal@oplytics.digital\nOplytics.digital\nUnited Kingdom',
  },
];

export default function Terms() {
  return (
    <MarketingLayout>
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
