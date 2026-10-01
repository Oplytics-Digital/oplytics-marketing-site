/**
 * Terms of Service Page — #209
 * Design: "Neon Operations"
 * Source of truth: "Terms of Service - Oplytics Digital" in the Legal Documents
 * Drive folder (27 Sep version). Keep clause numbering in step with that
 * document.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import LegalContentBlock from "@/components/shared/LegalContentBlock";
import SEOHead from "@/components/shared/SEOHead";

const intro = `These terms of service (the "Terms") are published by Oplytics Digital, a company incorporated in England and Wales with company number 17475820, whose registered office is at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom (the "Provider", "Company", "we", "us" or "our").

These Terms take effect on 27 September 2026 and govern your access to and use of the Oplytics platform, software and website at https://oplyticsdigital.net.`;

const termsSections = [
  {
    id: "acceptance",
    title: "About These Terms and Acceptance",
    content: `1.1. These Terms constitute a legally binding agreement between the Provider and the business or organisation accessing or using the Platform (the "User", "Customer", "you" or "your").

1.2. By accessing, registering for, or using the Platform, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree to these Terms, you must not access or use the Platform.

1.3. You represent and warrant that you are accessing and using the Platform in the course of a business, trade, craft or profession, and not as a consumer. These Terms are intended solely for business users, and no consumer-protection rights or remedies arise under them.

1.4. Where you accept these Terms or use the Platform on behalf of an organisation, you represent and warrant that you have authority to bind that organisation, and references to "you" mean that organisation.

1.5. We recommend that you print or save a copy of these Terms for your records.`,
  },
  {
    id: "definitions",
    title: "Definitions and Interpretation",
    content: `2.1. In these Terms, unless the context otherwise requires, the following definitions apply:

"Acceptable Use Policy" means the Provider's acceptable use policy, as made available on the Platform or the Website and updated from time to time, which sets out the rules governing use of the Platform.

"Account" means the account created by or for a User to access and use the Platform.

"Business Day" means a day other than a Saturday, Sunday or public holiday in England on which banks in London are open for business.

"Confidential Information" means any information disclosed by one party to the other that is marked as confidential or would reasonably be understood to be confidential, including the Software, the Platform, and any non-public technical or commercial information relating to the Provider.

"Content" means any text, data, graphics, images, software, documentation and other materials made available by or on behalf of the Provider on or through the Platform or the Website.

"Cookie Policy" means the Provider's cookie policy, as made available on the Website and updated from time to time.

"EULA" means the end user licence agreement governing use of any downloadable or client-side software component of the Platform, as made available by the Provider and updated from time to time.

"Intellectual Property Rights" means patents, rights to inventions, copyright and related rights, trade marks, trade names, domain names, rights in get-up, goodwill, database rights, rights in confidential information (including know-how) and all other intellectual property rights, in each case whether registered or unregistered, and including all applications and rights to apply for and be granted, renewals or extensions of, and rights to claim priority from, such rights, and all similar or equivalent rights subsisting now or in the future anywhere in the world.

"Platform" means the Oplytics software-as-a-service application, together with the Website, application programming interfaces, and all associated features, tools and functionality made available by the Provider.

"Privacy Policy" means the Provider's privacy policy, as made available on the Website and updated from time to time, which describes how the Provider processes personal data.

"Software" means the software, source code, object code, algorithms, and underlying technology comprising or used to operate the Platform.

"Subscription Agreement" means any SaaS Subscription Agreement entered into in writing between the Provider and a Customer governing that Customer's paid subscription to the Platform.

"Trial Features" means any features, functionality or portions of the Platform made available to you free of charge, on a trial, beta, evaluation or preview basis.

"Website" means the website operated by the Provider at https://oplyticsdigital.net.

2.2. In these Terms: (a) a reference to a clause is to a clause of these Terms; (b) headings are for convenience only and do not affect interpretation; (c) the words "including", "include" and "in particular" are illustrative and do not limit the words preceding them; (d) a reference to writing includes email; and (e) any reference to a statute or statutory provision is a reference to it as amended, extended or re-enacted from time to time.`,
  },
  {
    id: "eligibility",
    title: "Who May Use the Platform",
    content: `3.1. The Platform is made available solely to businesses and organisations, and to individuals acting on their behalf in a business capacity. The Platform is not intended for, and must not be used by, consumers.

3.2. To use the Platform you must be able to form a legally binding contract and must not be barred from using the Platform under any applicable law.

3.3. We may, at our discretion, refuse to make the Platform available to any person or organisation, and may impose eligibility conditions on access to or use of the Platform or any of its features.`,
  },
  {
    id: "accounts",
    title: "Account Registration and Security",
    content: `4.1. To access certain parts of the Platform you must register for an Account and provide accurate, current and complete information. You must keep your Account information up to date.

4.2. You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account, whether or not authorised by you.

4.3. You shall: (a) keep all login credentials secure and confidential; (b) not share credentials or permit any unauthorised person to access the Platform through your Account; and (c) notify us promptly at paul@oplytics.digital if you become aware of any unauthorised access to or use of your Account.

4.4. We may suspend or disable your Account or credentials at any time where we reasonably believe that you have failed to comply with these Terms or that Account security has been compromised.`,
  },
  {
    id: "right-to-use",
    title: "Right to Use the Platform",
    content: `5.1. Subject to your compliance with these Terms and, where applicable, the Subscription Agreement and the EULA, the Provider grants you a limited, non-exclusive, non-transferable, non-sublicensable and revocable right to access and use the Platform for your internal business purposes for the period during which you are permitted to use the Platform.

5.2. The right granted under clause 5.1 is a right to access and use the Platform only. No rights are granted to you in the Software or any other part of the Platform except as expressly set out in these Terms, the Subscription Agreement or the EULA.

5.3. All rights not expressly granted to you are reserved by the Provider and its licensors.`,
  },
  {
    id: "other-documents",
    title: "Relationship to the Subscription Agreement and Other Documents",
    content: `6.1. These Terms apply to all Users of the Platform. Where a Customer has entered into a signed Subscription Agreement with the Provider, that Subscription Agreement governs that Customer's paid subscription to the Platform in addition to these Terms.

6.2. In the event of any conflict or inconsistency between these Terms and a signed Subscription Agreement, the Subscription Agreement shall prevail to the extent of the conflict in relation to the subject matter it addresses. In all other respects these Terms continue to apply.

6.3. The following documents are incorporated into and form part of these Terms by reference: the Acceptable Use Policy, the Privacy Policy, the Cookie Policy and, in respect of any downloadable or client-side software, the EULA. In the event of any conflict between these Terms and an incorporated document, these Terms prevail unless the incorporated document expressly states otherwise, save that the Subscription Agreement takes precedence in accordance with clause 6.2.`,
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: `7.1. You shall use the Platform only in accordance with these Terms and the Acceptable Use Policy, which is incorporated into these Terms by reference.

7.2. Without limiting the Acceptable Use Policy, you shall not: (a) use the Platform in any way that is unlawful, fraudulent or harmful, or in connection with any unlawful, fraudulent or harmful purpose or activity; (b) introduce or transmit any viruses, malware or other harmful code; (c) attempt to gain unauthorised access to the Platform, the Software, or any systems or networks connected to the Platform; (d) interfere with, disrupt or impose an unreasonable load on the Platform or its infrastructure; or (e) use the Platform to build, train or develop a competing product or service.

7.3. We may investigate any suspected breach of the Acceptable Use Policy and may take such action as we consider appropriate, including suspending or terminating access in accordance with clause 15.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property and Protection of Software",
    content: `8.1. The Platform, the Software, the Website and all Content, and all Intellectual Property Rights in each of them, are and shall remain the exclusive property of the Provider and its licensors. Nothing in these Terms transfers to you any Intellectual Property Rights in the Platform, the Software, the Website or the Content.

8.2. The Provider's name, logos, and product and service names are trade marks of the Provider. You must not use any such marks without the Provider's prior written consent.

8.3. You shall not, and shall not permit any third party to: (a) copy, modify, adapt, translate or create derivative works of the Software or any part of the Platform; (b) reverse engineer, decompile, disassemble or otherwise attempt to derive or access the source code, structure or algorithms of the Software, except to the extent such restriction is expressly prohibited by applicable law; (c) remove, obscure or alter any proprietary notices on the Platform or Content; or (d) access or use the Platform in order to copy its features, functions, interface or graphics, or to develop any competing product.

8.4. Where applicable law permits you to decompile the Software in order to achieve interoperability, you shall first request the information necessary to achieve interoperability from the Provider, and the Provider may impose reasonable conditions on the provision of such information.

8.5. You grant the Provider a non-exclusive, worldwide, royalty-free licence to use any feedback, suggestions or ideas you provide relating to the Platform, without restriction and without any obligation to you.`,
  },
  {
    id: "third-party",
    title: "Third-Party Services and Integrations",
    content: `9.1. The Platform may enable access to, or integration with, services, applications, websites or content operated by third parties ("Third-Party Services"). Third-Party Services are provided by the relevant third party and not by the Provider.

9.2. Your use of any Third-Party Service is subject to the terms and privacy practices of the relevant third party. The Provider does not control and is not responsible for any Third-Party Service, and gives no warranty in respect of it.

9.3. The Provider may add, modify, suspend or remove any integration with a Third-Party Service at any time. The Provider is not liable for any loss arising from the unavailability of, or any change to, any Third-Party Service.`,
  },
  {
    id: "fees",
    title: "Fees",
    content: `10.1. Access to certain features of the Platform is free of charge. Access to paid features is subject to payment of the applicable fees.

10.2. Where you subscribe to a paid plan, the fees, billing arrangements and payment terms are set out in the applicable Subscription Agreement. In the event of any conflict between this clause and the Subscription Agreement in relation to fees, the Subscription Agreement prevails.

10.3. Except as expressly stated in these Terms or a Subscription Agreement, all fees are non-refundable.`,
  },
  {
    id: "privacy-cookies",
    title: "Privacy and Cookies",
    content: `11.1. The Provider processes personal data in connection with the Platform in accordance with the Privacy Policy. The Website uses cookies and similar technologies in accordance with the Cookie Policy.

11.2. By using the Platform you acknowledge the Privacy Policy and the Cookie Policy. You are responsible for ensuring that you have a lawful basis for any personal data you input into or process through the Platform, and for complying with all applicable data protection laws in respect of that data.`,
  },
  {
    id: "disclaimers",
    title: 'Disclaimers and Provision "As Is"',
    content: `12.1. The Platform is provided on an "as is" and "as available" basis. Except as expressly set out in a Subscription Agreement, the Provider gives no warranty, representation or undertaking in respect of the Platform.

12.2. To the fullest extent permitted by law, the Provider excludes all warranties, conditions and terms implied by statute, common law or otherwise, including any implied terms as to satisfactory quality, fitness for a particular purpose, and the use of reasonable care and skill.

12.3. The Provider does not warrant that the Platform will be uninterrupted, error-free, secure, or free from viruses or other harmful components, or that any defect will be corrected.

12.4. Any Trial Features are provided "as is", without any warranty of any kind and without any service commitment. The Provider may modify, suspend or withdraw any Trial Feature at any time. To the fullest extent permitted by law, the Provider shall have no liability arising out of or in connection with any Trial Feature.`,
  },
  {
    id: "liability",
    title: "Limitation and Exclusion of Liability",
    content: `13.1. Nothing in these Terms excludes or limits the Provider's liability for: (a) death or personal injury caused by its negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited under applicable law.

13.2. Subject to clause 13.1, the Provider shall not be liable to you, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any: (a) loss of profits; (b) loss of sales, business or revenue; (c) loss of or damage to goodwill or reputation; (d) loss of anticipated savings; (e) loss of or corruption of data or information; (f) business interruption; or (g) any indirect, special or consequential loss, in each case whether or not the loss was foreseeable and even if the Provider was advised of the possibility of such loss.

13.3. Subject to clause 13.1, the Provider's total aggregate liability to you arising out of or in connection with these Terms and your use of the Platform, whether in contract, tort (including negligence), breach of statutory duty or otherwise, shall not exceed: (a) where you have paid fees for the Platform in the twelve months preceding the event giving rise to the liability, the total fees paid by you in that period; or (b) where you have not paid any fees, one hundred pounds (£100).

13.4. The limitations and exclusions in this clause 13 apply to the fullest extent permitted by law and reflect the fact that the Platform, including any free or Trial Features, is provided on terms designed to allocate risk between the parties. Where a Customer has a Subscription Agreement, the liability provisions of that Subscription Agreement prevail in relation to the subject matter it addresses in accordance with clause 6.2.

13.5. You acknowledge that the Provider is not liable for any loss arising from your failure to maintain the security of your Account, your use of Third-Party Services, or your failure to comply with these Terms.`,
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: `14.1. You shall indemnify and hold harmless the Provider, and its officers, employees and agents, against all liabilities, costs, expenses, damages and losses (including reasonable legal costs) suffered or incurred by the Provider arising out of or in connection with: (a) your use of the Platform in breach of these Terms, the Acceptable Use Policy or applicable law; (b) any content or data you input into or process through the Platform; (c) any claim that your use of the Platform infringes the rights of a third party; or (d) any breach by you of clause 8.

14.2. This clause 14 shall survive termination of these Terms and the cessation of your access to the Platform.`,
  },
  {
    id: "suspension",
    title: "Suspension and Termination of Access",
    content: `15.1. The Provider may, at its discretion and without liability to you, suspend, restrict or terminate your access to all or part of the Platform, immediately and without prior notice, where: (a) you breach these Terms or the Acceptable Use Policy; (b) the Provider is required to do so by law or by a regulatory or governmental authority; (c) the Provider reasonably believes that continued access presents a security, legal or reputational risk; or (d) you fail to pay any fees when due.

15.2. The Provider may also cease to provide, or withdraw access to, any free feature or Trial Feature at any time and for any reason.

15.3. Where a Customer has a Subscription Agreement, suspension and termination of that Customer's paid subscription are governed by the Subscription Agreement in relation to the subject matter it addresses.

15.4. On termination of your access for any reason: (a) all rights granted to you under these Terms cease immediately; (b) you must cease all use of the Platform; and (c) any provision of these Terms that expressly or by implication is intended to survive termination shall continue in full force and effect, including clauses 8, 13, 14 and 17.`,
  },
  {
    id: "changes",
    title: "Changes to the Platform and to These Terms",
    content: `16.1. The Provider may modify, update, enhance, suspend or discontinue any part of the Platform, including any feature or Trial Feature, at any time and at its discretion. The Provider will use reasonable efforts to avoid material degradation of paid features, subject to any applicable Subscription Agreement.

16.2. The Provider may amend these Terms at any time by publishing the amended Terms on the Website or otherwise notifying you. The amended Terms take effect from the date of publication or from any later date specified.

16.3. Your continued access to or use of the Platform after the amended Terms take effect constitutes your acceptance of the amended Terms. If you do not agree to the amended Terms, you must stop using the Platform.`,
  },
  {
    id: "general",
    title: "General Provisions",
    content: `17.1. Assignment. You may not assign, transfer, charge, sub-contract or otherwise deal with any of your rights or obligations under these Terms without the Provider's prior written consent. The Provider may assign, transfer or otherwise deal with any of its rights and obligations under these Terms at any time.

17.2. Entire Agreement. These Terms, together with the documents incorporated by reference and, where applicable, the Subscription Agreement, constitute the entire agreement between you and the Provider in relation to their subject matter and supersede all prior arrangements, understandings or agreements between the parties relating to it. You acknowledge that you have not relied on any statement, representation or warranty that is not set out in these Terms.

17.3. Third-Party Rights. A person who is not a party to these Terms has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of these Terms.

17.4. Waiver. No failure or delay by the Provider to exercise any right or remedy under these Terms shall constitute a waiver of that or any other right or remedy, nor shall it prevent or restrict its further exercise.

17.5. Severance. If any provision of these Terms is or becomes invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such modification is not possible, the relevant provision shall be deemed deleted, and the deletion shall not affect the validity and enforceability of the rest of these Terms.

17.6. Notices. Any notice given to the Provider under these Terms must be sent in writing to paul@oplytics.digital. The Provider may give notice to you by email to the address associated with your Account, by posting on the Platform, or by publishing on the Website.

17.7. Force Majeure. The Provider shall not be in breach of these Terms, nor liable for any failure or delay in performance, arising from any event or circumstance beyond its reasonable control.

17.8. Governing Law. These Terms and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with them or their subject matter or formation are governed by and construed in accordance with the law of England and Wales.

17.9. Jurisdiction. Each party irrevocably agrees that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with these Terms or their subject matter or formation.`,
  },
];

export default function Terms() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Terms of Service"
        description="The terms of service governing business access to and use of the Oplytics platform, software and website."
      />
      <div className="pt-16">
        <LegalContentBlock
          title="Terms of Service"
          lastUpdated="27 September 2026"
          intro={intro}
          sections={termsSections}
        />
      </div>
    </MarketingLayout>
  );
}
