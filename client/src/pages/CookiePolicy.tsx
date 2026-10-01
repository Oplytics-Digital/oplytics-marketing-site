/**
 * Cookie Policy Page — #176
 * Design: "Neon Operations"
 * Source of truth: "Cookie Policy - Oplytics Digital" in the Legal Documents
 * Drive folder (30 Sep version), corrected to match the live site per #209.
 * Keep clause numbering in step with that document.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import LegalContentBlock from "@/components/shared/LegalContentBlock";
import SEOHead from "@/components/shared/SEOHead";

const intro = `Oplytics Digital (the "Company", "we", "us" or "our")

This Cookie Policy explains how we use cookies and similar technologies on our website at https://oplytics.digital (the "Website") and, where applicable, in connection with the products and services we make available through it. It describes what these technologies are, the categories we use, the legal basis on which we use them, and how you can manage or withdraw your consent.

This Cookie Policy should be read together with our Privacy Policy, which explains in more detail how we collect, use, and protect personal data more generally. Where cookies or similar technologies collect information that identifies you or relates to you, the Privacy Policy governs our wider processing of that personal data.

We use cookies and similar technologies in accordance with the Privacy and Electronic Communications (EC Directive) Regulations 2003 (as amended) ("PECR") and, where personal data is processed, the retained EU law version of the General Data Protection Regulation ((EU) 2016/679) as it forms part of the law of England and Wales ("UK GDPR").

We use a Consent Tool (a cookie banner) on the Website to obtain your consent before placing any Non-Essential Cookies. The Consent Tool includes a Performance or Analytics category for Umami Analytics, as set out in the table in Clause 4. At the date of this Policy, Umami Analytics is not enabled on the Website, so no Non-Essential Cookies are set, whatever you choose in the Consent Tool. If we enable it, it will only run where you have given your consent through the Consent Tool, and we will update this Policy before doing so.`;

const cookieSections = [
  {
    id: "definitions",
    title: "Definitions and Interpretation",
    content: `1.1. In this Cookie Policy, the following definitions apply:

"Consent Tool" means the cookie banner and related consent management functionality on the Website that we use to obtain, record, and manage your consent preferences for Non-Essential Cookies.

"Cookie" means a small text file that is placed on your device (such as your computer, tablet, or mobile phone) when you visit a website, which allows the website or a third party to recognise your device and store certain information about your preferences or past actions.

"Non-Essential Cookies" means all Cookies other than Strictly Necessary Cookies, including functional or preference Cookies, performance or analytics Cookies, and targeting or advertising Cookies.

"Personal Data" has the meaning given to it in the UK GDPR and, in relation to this Cookie Policy, means any information collected by Cookies or similar technologies that relates to an identified or identifiable individual.

"Privacy Policy" means our privacy policy, available on the Website, which describes how we process Personal Data.

"Similar Technologies" means technologies that perform functions comparable to Cookies, including web beacons, pixels, tags, software development kits (SDKs), local storage, and device identifiers.

"Strictly Necessary Cookies" means Cookies that are essential to enable you to use the Website and its core features, and without which services you have requested cannot be provided.

"You" or "your" means the individual accessing or using the Website.

1.2. In this Cookie Policy, unless the context otherwise requires, references to Cookies include Similar Technologies, and words in the singular include the plural and vice versa.`,
  },
  {
    id: "what-cookies-are",
    title: "What Cookies and Similar Technologies Are",
    content: `2.1. Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to make them work more efficiently, and to provide information to the owners of the website.

2.2. We also use Similar Technologies, such as web beacons, pixels, tags, local storage, and device identifiers, which perform functions comparable to Cookies. In this Cookie Policy, references to Cookies include these Similar Technologies unless we state otherwise.

2.3. Cookies may be "session" Cookies, which are deleted when you close your browser, or "persistent" Cookies, which remain on your device for a set period or until you delete them. Cookies may be set by us ("first-party Cookies") or by a third party providing a service to us ("third-party Cookies"), as described in Clause 6.`,
  },
  {
    id: "categories",
    title: "Categories of Cookies We Use",
    content: `3.1. We group the Cookies we use into the following categories:

(a) Strictly Necessary Cookies — these Cookies are essential for the Website to function and to provide services you have requested, such as maintaining the security of the Website, enabling you to log in to your account, remembering items in a session, and load-balancing. Because these Cookies are essential, they cannot be switched off;

(b) Functional or Preference Cookies — these Cookies enable the Website to remember choices you make and provide enhanced, personalised features, such as remembering your language, region, or display preferences;

(c) Performance or Analytics Cookies — these Cookies collect information about how visitors use the Website, such as which pages are visited most often and whether visitors encounter errors, so that we can measure and improve the performance and content of the Website; and

(d) Targeting or Advertising Cookies — these Cookies are used to deliver content and advertising that is more relevant to you and your interests, to limit the number of times you see an advertisement, and to measure the effectiveness of advertising campaigns. They may be set through the Website by us or by our advertising partners.

3.2. Strictly Necessary Cookies are placed on your device without requiring your consent, as explained in Clause 5. The Consent Tool allows you to consent to Performance or Analytics Cookies within the meaning of Clause 3.1(c); at the date of this Policy, no such Cookies are set because the analytics service is not enabled. We do not currently use the categories described in Clauses 3.1(b) or 3.1(d). Non-Essential Cookies are not set until you have given your consent through the Consent Tool.`,
  },
  {
    id: "cookies-we-use",
    title: "Cookies We Use",
    content: `4.1. The specific Cookies currently used on the Website, including their names, providers, purposes, durations, and categories, are set out below.

Session / authentication cookie
• Provider: Oplytics Digital
• Purpose: Keeps you signed in and secures your session on the platform
• Duration: Session, or until logout
• Category: Strictly Necessary

__cf_bm, cf_clearance and related security cookies
• Provider: Cloudflare, Inc.
• Purpose: Bot protection, security filtering, and distinguishing genuine visitors from automated traffic
• Duration: Up to 30 minutes
• Category: Strictly Necessary

Consent preference record (oplytics-cookie-consent, browser local storage)
• Provider: Oplytics Digital
• Purpose: Remembers the choices you make in the Consent Tool, so that we do not ask you again on every visit
• Duration: 12 months, or until you clear your browser storage
• Category: Strictly Necessary

Umami Analytics
• Provider: Umami (self-hosted)
• Purpose: Measures website usage, such as which pages are visited, so that we can understand and improve the performance and content of the Website. Loaded only where you have given your consent through the Consent Tool.
• Status: Not currently enabled on the Website. No Umami script is loaded and no Umami identifier is set, whatever you choose in the Consent Tool.
• Duration: Not applicable while not enabled. Before enabling it, we will set out in this list any cookie or browser storage identifier it uses and its duration.
• Category: Performance or Analytics

4.2. Because the Cookies used may change from time to time, we will update this list accordingly.`,
  },
  {
    id: "legal-basis",
    title: "Legal Basis: Strictly Necessary Cookies and Consent",
    content: `5.1. We rely on two distinct legal bases for placing Cookies on your device:

(a) for Strictly Necessary Cookies, we rely on the exemption under PECR that permits the storing of information, or gaining access to information already stored, where it is strictly necessary for the provision of a service that you have expressly requested. Your consent is not required for these Cookies; and

(b) for all Non-Essential Cookies, we rely on your consent, obtained in accordance with the consent standard under the UK GDPR. This means we will only place such Cookies where you have given a freely given, specific, informed, and unambiguous indication of your agreement through a clear affirmative action.

5.2. Where Non-Essential Cookies collect Personal Data, we process that Personal Data on the basis of your consent, and our wider handling of that Personal Data is described in our Privacy Policy.

5.3. We do not treat continued use of the Website, or the mere act of scrolling or navigating, as consent. Non-Essential Cookies will not be set until you actively give consent through the Consent Tool.`,
  },
  {
    id: "third-party",
    title: "Third-Party Cookies and Analytics",
    content: `6.1. Some Cookies on the Website are set by third parties that provide services to us, such as our security and infrastructure providers. These third parties may act as our processors or, in some cases, as independent controllers of the Personal Data they collect.

6.2. We have configured Umami, a self-hosted website analytics tool, as a Performance or Analytics Cookie that is only loaded where you have given your consent through the Consent Tool. At the date of this Policy, Umami is not enabled on the Website. If we enable Umami, or introduce any further analytics service in future, it will be treated as a Non-Essential Cookie requiring your consent, and we will update this Policy before doing so.

6.3. Where third parties act as independent controllers, their own privacy and cookie notices govern their use of the information they collect. We encourage you to review those notices. Further information about the identity of the relevant third parties is available in the cookie list in Clause 4.`,
  },
  {
    id: "manage-consent",
    title: "How to Manage or Withdraw Your Consent",
    content: `7.1. You can manage your Cookie preferences at any time using the Consent Tool accessible on the Website (including through the "Cookie Settings" link in the Website footer), through which you can accept or reject each category of Non-Essential Cookies and change your preferences.

7.2. You may withdraw your consent to any category of Non-Essential Cookies at any time, and as easily as you gave it, by revisiting the Consent Tool and updating your preferences. Withdrawing consent does not affect the lawfulness of any Cookie use carried out before you withdrew it.

7.3. You can also control Cookies through your browser settings. Most browsers allow you to refuse or delete Cookies, or to be notified when a Cookie is set. The method for doing so varies from browser to browser, and you should consult the help function of your browser for guidance. Please note that if you block or delete Strictly Necessary Cookies, some parts of the Website may not function properly.

7.4. Deleting Cookies through your browser may remove Cookies that keep you signed in, in which case you may need to sign in again on your next visit.`,
  },
  {
    id: "changes",
    title: "Changes to This Cookie Policy",
    content: `8.1. We may update this Cookie Policy from time to time to reflect changes in the Cookies we use, in technology, or in legal or regulatory requirements.

8.2. Where we make material changes, we will notify you by updating the effective date at the top of this Cookie Policy and, where appropriate, by presenting an updated consent request through a Consent Tool or by other prominent notice on the Website. We encourage you to review this Cookie Policy periodically.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `9.1. If you have any questions about this Cookie Policy or about our use of Cookies, please contact us at paul@oplytics.digital.

9.2. For further information about how we process Personal Data more generally, including your rights in relation to that Personal Data, please refer to our Privacy Policy.`,
  },
];

export default function CookiePolicy() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Cookie Policy"
        description="How Oplytics Digital uses cookies and similar technologies on oplyticsdigital.net, and how to manage your preferences under PECR and UK GDPR."
      />
      <div className="pt-16">
        <LegalContentBlock
          title="Cookie Policy"
          lastUpdated="1 October 2026"
          intro={intro}
          sections={cookieSections}
        />
      </div>
    </MarketingLayout>
  );
}
