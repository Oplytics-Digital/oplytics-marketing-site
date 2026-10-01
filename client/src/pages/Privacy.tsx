/**
 * Privacy Policy Page — #209
 * Design: "Neon Operations"
 * Source of truth: "Privacy Policy - Oplytics Digital" in the Legal Documents
 * Drive folder (27 Sep version). Clause 5.1 is aligned with the Cookie Policy
 * per #209. Keep clause numbering in step with that document.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import LegalContentBlock from "@/components/shared/LegalContentBlock";
import SEOHead from "@/components/shared/SEOHead";

const privacySections = [
  {
    id: "introduction",
    title: "Introduction and Scope",
    content: `1.1. This Privacy Policy explains how Oplytics Digital (the "Company", "we", "us" or "our") collects, uses, shares and protects personal data, and describes the rights available to individuals under the UK General Data Protection Regulation (the "UK GDPR") and the Data Protection Act 2018 (together, "Data Protection Law").

1.2. The Company provides a business-to-business software-as-a-service platform for the manufacturing sector. This Policy applies to personal data that the Company processes as a controller — that is, where the Company determines the purposes and means of the processing. In particular, it covers personal data relating to:

(a) visitors to our website and users of our online services;

(b) prospective customers and business contacts (including through marketing and sales activities); and

(c) the individual users and representatives of our business customers, such as account contacts, administrators and billing contacts.

1.3. This Policy does not apply to personal data that the Company processes on behalf of its business customers within the platform. Where a customer uploads or otherwise makes available personal data through the platform in the course of using our services, the customer is the controller of that data and the Company acts as processor. That processing is governed by the Data Processing Agreement (the "DPA") entered into between the Company and the relevant customer, and not by this Policy. If you are an individual whose personal data has been provided to the platform by one of our customers, please contact that customer in the first instance.

1.4. By using our website or services, or by otherwise providing personal data to us, you acknowledge that your personal data will be handled as described in this Policy.`,
  },
  {
    id: "controller",
    title: "Controller Identity and Contact Details",
    content: `2.1. The controller responsible for your personal data is Oplytics Digital, whose registered office is at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.

2.2. If you have any questions about this Policy or about how we handle personal data, or if you wish to exercise any of your rights, you can contact us at paul@oplytics.digital.

2.3. As a small business, the Company has not appointed a formal Data Protection Officer. Data protection matters are overseen directly by the Company's founder and can be reached using the contact details in clause 2.2.`,
  },
  {
    id: "data-collected",
    title: "Categories of Personal Data We Collect and Their Sources",
    content: `3.1. Depending on how you interact with us, we may collect and process the following categories of personal data:

(a) identity and contact data — name, job title, employer or business name, business email address, business telephone number and business postal address;

(b) account data — login credentials, user role and permissions, and account preferences for individuals who administer or use a customer account;

(c) billing and financial data — billing contact details, purchase order references and payment-related information (we do not store full payment card numbers, which are handled by our payment processor);

(d) marketing and communications data — your marketing preferences, your responses to our communications, and records of your interactions with our sales and marketing activities;

(e) usage and technical data — IP address, device and browser information, log data, and information about how you use our website and services, collected in part through cookies and similar technologies; and

(f) correspondence data — the content of enquiries, support requests and other communications you send to us.

3.2. We collect personal data from the following sources:

(a) directly from you, when you complete forms, create or use an account, contact us, subscribe to communications, or otherwise interact with us;

(b) from the business customer or organisation you represent, for example when your employer sets you up as a user, administrator or billing contact;

(c) automatically, through cookies and similar technologies when you use our website and services (see clause 5); and

(d) from third-party sources, such as publicly available business directories, professional networking platforms, event organisers, and marketing or data-enrichment providers, where they are permitted to share that data with us.

3.3. We do not deliberately collect special categories of personal data (such as data revealing health, racial or ethnic origin, or religious beliefs) through our website or services. Please do not provide such data to us unless we specifically request it.`,
  },
  {
    id: "purposes",
    title: "Purposes of Processing and Lawful Bases",
    content: `4.1. We only process personal data where we have a lawful basis to do so under Article 6 of the UK GDPR. The purposes for which we process personal data, and the lawful basis we rely on for each, are set out below.

Providing, administering and supporting access to our services, and managing customer accounts and user relationships
• Data: identity and contact data; account data; usage and technical data
• Lawful basis: performance of a contract (Article 6(1)(b)); and, where the individual is not the contracting party, our legitimate interests in delivering the services to our business customers (Article 6(1)(f))

Processing orders, invoicing and collecting payment
• Data: identity and contact data; billing and financial data
• Lawful basis: performance of a contract (Article 6(1)(b)); and our legitimate interests in managing our commercial relationships (Article 6(1)(f))

Responding to enquiries and providing customer support
• Data: identity and contact data; correspondence data
• Lawful basis: legitimate interests in responding to and assisting our contacts (Article 6(1)(f))

Direct marketing to business contacts and prospects, and sending service and relationship communications
• Data: identity and contact data; marketing and communications data
• Lawful basis: legitimate interests in promoting our business (Article 6(1)(f)); or consent where required (Article 6(1)(a))

Operating, securing, maintaining and improving our website and services, including analytics
• Data: usage and technical data; account data
• Lawful basis: legitimate interests in running and improving a secure and effective service (Article 6(1)(f)); or consent for non-essential cookies (see clause 5)

Complying with our legal and regulatory obligations (including accounting, tax and responding to lawful requests)
• Data: any relevant categories
• Lawful basis: compliance with a legal obligation (Article 6(1)(c))

Establishing, exercising or defending legal claims, and protecting our rights and property
• Data: any relevant categories
• Lawful basis: legitimate interests in protecting our business, and where applicable compliance with a legal obligation (Article 6(1)(f) and 6(1)(c))

4.2. Where we rely on legitimate interests as our lawful basis, we have carried out a balancing assessment to ensure that our interests are not overridden by your interests, rights or freedoms. You have the right to object to processing based on legitimate interests, as described in clause 9.

4.3. Where we rely on your consent (for example, for certain marketing communications or non-essential cookies), you may withdraw that consent at any time by contacting us at paul@oplytics.digital or by using the unsubscribe mechanism in our communications. Withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal.`,
  },
  {
    id: "cookies",
    title: "Cookies and Analytics",
    content: `5.1. We and our service providers use cookies and similar technologies on our website and services to enable core functionality and, only where you have given your consent, to measure and analyse how our website and services are used. Our Cookie Policy sets out which of these are currently in use.

5.2. Non-essential cookies, including analytics cookies, are only used where you have given your consent through our cookie banner or preference tools. Essential cookies that are strictly necessary for the operation of our website do not require consent.

5.3. Full details of the cookies we use, their purposes and durations, and how you can manage your cookie preferences, are set out in our Cookie Policy, which forms part of and should be read together with this Privacy Policy.`,
  },
  {
    id: "sharing",
    title: "Recipients and Sharing of Personal Data",
    content: `6.1. We do not sell your personal data. We share personal data only as described in this clause and in accordance with Data Protection Law.

6.2. We may share personal data with the following categories of recipients:

(a) service providers and processors — third parties who process personal data on our behalf to provide services to us, including hosting and cloud infrastructure providers, payment processors, analytics providers, email and communications platforms, and customer relationship management and support tools. These providers act on our documented instructions under written contracts that meet the requirements of Article 28 of the UK GDPR;

(b) sub-processors — where a processor engages another party to assist in delivering services to us, subject to appropriate contractual protections;

(c) professional advisers — including our lawyers, accountants, auditors and insurers, where necessary for the administration and protection of our business;

(d) corporate transaction counterparties — potential or actual buyers, investors or their advisers in connection with any actual or proposed reorganisation, merger, sale, acquisition or financing of our business; and

(e) regulators, courts and law enforcement — where we are required or permitted to disclose personal data to comply with a legal obligation, court order or lawful request, or to establish, exercise or defend legal claims.

6.3. Where personal data is processed within the platform on behalf of a customer, sharing with sub-processors is governed by the DPA rather than this Policy.`,
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    content: `7.1. The Company is based in the United Kingdom. Some of our service providers and recipients may be located outside the UK, which may involve the transfer of personal data to countries that are not recognised as providing an adequate level of data protection.

7.2. Where we transfer personal data outside the UK, we put in place appropriate safeguards required by Data Protection Law to ensure that your personal data continues to be protected to the standard required in the UK. These safeguards include:

(a) transferring to countries or territories that are the subject of UK adequacy regulations; or

(b) using the UK International Data Transfer Agreement (the "IDTA"), or the European Commission's Standard Contractual Clauses together with the UK Addendum, and carrying out a transfer risk assessment where required.

7.3. You may request further information about the safeguards we apply to international transfers, and a copy of the relevant safeguard, by contacting us at paul@oplytics.digital.`,
  },
  {
    id: "retention",
    title: "Retention of Personal Data",
    content: `8.1. We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, tax or reporting requirements, and to establish, exercise or defend legal claims.

8.2. To determine the appropriate retention period, we consider the nature and sensitivity of the personal data, the purposes for which we process it, the potential risk of harm from unauthorised use or disclosure, and applicable legal requirements.

8.3. Our current retention periods for the principal categories of personal data are as follows: identity, contact and account data is retained for the duration of the business relationship and for up to 6 years afterwards to meet our legal, accounting and tax obligations; billing and financial data is retained for 6 years in accordance with UK tax record-keeping requirements; marketing and communications data is retained until you unsubscribe or object, or for up to 2 years of inactivity; and usage and technical data is retained for up to 12 months for security, support and analytics purposes.

8.4. Where personal data is no longer required, we will securely delete it or anonymise it so that it can no longer be associated with you.`,
  },
  {
    id: "your-rights",
    title: "Your Rights Under UK GDPR",
    content: `9.1. Subject to the conditions and exemptions in Data Protection Law, you have the following rights in relation to your personal data:

(a) the right of access — to obtain confirmation of whether we process your personal data and a copy of that data;

(b) the right to rectification — to have inaccurate personal data corrected and incomplete data completed;

(c) the right to erasure — to have your personal data deleted in certain circumstances (also known as the "right to be forgotten");

(d) the right to restriction — to have the processing of your personal data restricted in certain circumstances;

(e) the right to data portability — to receive personal data you have provided to us in a structured, commonly used and machine-readable format, and to have it transmitted to another controller where technically feasible;

(f) the right to object — to object to processing based on our legitimate interests, and to object at any time to processing for direct marketing purposes; and

(g) rights relating to automated decision-making — the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects concerning you or similarly significantly affects you. We do not currently make decisions of this kind about you using solely automated means; if this changes, we will update this Policy and provide the information required by Data Protection Law.

9.2. To exercise any of these rights, please contact us at paul@oplytics.digital. We may need to verify your identity before responding. We will respond to your request within the timeframes required by Data Protection Law (normally within one month), which we may extend where permitted for complex or numerous requests. Exercising these rights is normally free of charge, although we may charge a reasonable fee or refuse to act on requests that are manifestly unfounded or excessive.`,
  },
  {
    id: "complaints",
    title: "Right to Complain to the ICO",
    content: `10.1. If you have concerns about how we handle your personal data, we encourage you to contact us first at paul@oplytics.digital so that we can try to resolve the matter.

10.2. You also have the right to lodge a complaint with the Information Commissioner's Office (the "ICO"), the UK supervisory authority for data protection. The ICO can be contacted at https://ico.org.uk, by telephone on 0303 123 1113, or by post at Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF.`,
  },
  {
    id: "security",
    title: "Security",
    content: `11.1. We implement appropriate technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access, taking into account the state of the art, the costs of implementation, and the nature, scope, context and purposes of processing.

11.2. These measures include, as appropriate, access controls, encryption of data in transit and at rest, network and application security controls, staff confidentiality obligations and training, and procedures for detecting, reporting and responding to personal data breaches in accordance with our legal obligations.

11.3. While we take reasonable steps to protect personal data, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `12.1. We may update this Policy from time to time to reflect changes in our practices, our services, or legal requirements. The "Last updated" date at the top of this Policy indicates when it was last revised.

12.2. Where changes are material, we will take reasonable steps to bring them to your attention, for example by posting a prominent notice on our website or by contacting you directly where appropriate. We encourage you to review this Policy periodically.

12.3. Your continued use of our website or services after any update takes effect constitutes acknowledgement of the revised Policy, to the extent permitted by Data Protection Law.`,
  },
];

export default function Privacy() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Privacy Policy"
        description="How Oplytics Digital collects, uses, shares and protects personal data, and your rights under the UK GDPR and the Data Protection Act 2018."
      />
      <div className="pt-16">
        <LegalContentBlock
          title="Privacy Policy"
          lastUpdated="1 October 2026"
          sections={privacySections}
        />
      </div>
    </MarketingLayout>
  );
}
