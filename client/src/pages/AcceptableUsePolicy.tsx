/**
 * Acceptable Use Policy Page — #176
 * Design: "Neon Operations"
 * Source of truth: "Acceptable Use Policy - Oplytics Digital" in the Legal
 * Documents Drive folder. Keep clause numbering in step with that document.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import LegalContentBlock from "@/components/shared/LegalContentBlock";
import SEOHead from "@/components/shared/SEOHead";

const intro = `This Acceptable Use Policy (this "Policy" or this "AUP") is issued by Oplytics Digital (the "Provider", "we", "us" or "our") and governs the access to and use of the Provider's cloud-based manufacturing software platform and all related services, applications, application programming interfaces (APIs) and integrations (together, the "Platform").

This Policy is incorporated by reference into, and forms part of, the SaaS Subscription Agreement and the Terms of Service entered into between the Provider and each customer (the "Customer"). In the event of any conflict between this Policy and the SaaS Subscription Agreement, the SaaS Subscription Agreement shall prevail, save in respect of the specific acceptable-use matters addressed in this Policy, which shall prevail to the extent of any inconsistency. Capitalised terms used but not defined in this Policy have the meanings given to them in the SaaS Subscription Agreement.`;

const aupSections = [
  {
    id: "purpose-scope",
    title: "Purpose and Scope",
    content: `1.1. The purpose of this Policy is to protect the Platform, the Provider, its other customers and third parties, and to ensure the lawful, secure and reliable operation of the Platform. This Policy sets out the standards of conduct that apply to all use of the Platform.

1.2. This Policy applies to the Customer and to every individual or entity that the Customer permits or enables to access or use the Platform, including the Customer's employees, contractors, agents and other authorised users (each an "Authorised User" and together the "Authorised Users"). References in this Policy to acts or omissions of the Customer include acts and omissions of its Authorised Users.

1.3. The Provider offers software for the manufacturing sector. Authorised Users may connect operational and production systems to the Platform, configure integrations with third-party and Customer systems, and upload operational, production and business data (together, "Customer Data"). This Policy applies to all such activity.

1.4. The Customer is responsible for ensuring that each of its Authorised Users is aware of and complies with this Policy. The Customer remains responsible and liable for all activity conducted through its account and through the accounts of its Authorised Users, whether or not authorised by the Customer.

1.5. This Policy is provided for a business-to-business context and is governed by, and shall be construed in accordance with, the laws of England and Wales, consistent with the SaaS Subscription Agreement.`,
  },
  {
    id: "prohibited-uses",
    title: "Prohibited Uses",
    content: `2.1. The Customer shall not, and shall ensure that its Authorised Users do not, use the Platform for any purpose or in any manner that is unlawful, fraudulent, or otherwise prohibited under this Policy. Without limiting the generality of the foregoing, the Customer shall NOT, and shall ensure that its Authorised Users do NOT:

(a) use the Platform in violation of any applicable law, regulation, or regulatory requirement, or to facilitate, promote or engage in any illegal activity;

(b) infringe, misappropriate or violate the intellectual property rights, trade secrets, privacy rights, or other rights of the Provider or any third party, or upload, transmit or make available any material that infringes such rights;

(c) upload, transmit, introduce or distribute any virus, worm, trojan horse, ransomware, time bomb, keystroke logger, spyware, or other malicious or harmful code, file, script, agent or program;

(d) gain or attempt to gain unauthorised access to the Platform, to any account, computer system, network or data connected to the Platform, or to any Provider or third-party systems, whether by hacking, password mining, credential stuffing, penetration testing, or any other means;

(e) conduct, attempt or facilitate any penetration test, vulnerability scan, load test, or security assessment of the Platform without the Provider's prior express written consent;

(f) impose an unreasonable or disproportionately large load on the Platform or its infrastructure, or carry out, facilitate or participate in any denial-of-service or distributed denial-of-service attack, flooding, or similar activity that impairs or is intended to impair the operation, availability or integrity of the Platform;

(g) circumvent, disable, or attempt to circumvent or disable any usage limits, access controls, rate limits, quotas, technical restrictions, or licensing measures applied to the Platform;

(h) access, index, scrape, harvest, crawl, spider or extract data from the Platform by automated or other means, except through interfaces and to the extent expressly permitted by the Provider in writing;

(i) resell, sublicense, rent, lease, distribute, or otherwise make the Platform available to any third party, or use the Platform to operate a service bureau or provide services to any third party, except as expressly permitted under the SaaS Subscription Agreement;

(j) use the Platform to store, transmit or process any unlawful, defamatory, obscene, harassing, or otherwise objectionable material; or

(k) copy, modify, translate, adapt, reverse engineer, decompile, or disassemble any part of the Platform, or attempt to derive its source code, except to the extent such restriction is expressly prohibited by applicable law.`,
  },
  {
    id: "content-data",
    title: "Content and Data Restrictions",
    content: `3.1. The Customer is solely responsible for all Customer Data that it or its Authorised Users upload to, transmit through, or process using the Platform, and for the legality, accuracy, quality and appropriateness of such Customer Data.

3.2. The Customer shall not, and shall ensure that its Authorised Users do not, upload, transmit, store or process through the Platform any data or material that:

(a) is unlawful, or the uploading, storage, transmission or processing of which would violate any applicable law or regulation;

(b) infringes, misappropriates or violates any intellectual property right, confidentiality obligation, or other right of any third party; or

(c) is harmful, malicious, or designed to interfere with, damage, or gain unauthorised access to any system, network, equipment or data.

3.3. Where the Customer or its Authorised Users upload, transmit or otherwise process any personal data (as defined in applicable data protection legislation) using the Platform, the Customer is responsible for ensuring that it has a valid lawful basis and all necessary rights, consents and authorisations to do so, and for complying with the Data Protection Act 2018, the UK General Data Protection Regulation, and all other applicable data protection laws (together, the "Data Protection Laws"). The processing of personal data by the Provider on behalf of the Customer is governed by the data processing terms set out in, or referenced by, the SaaS Subscription Agreement.

3.4. The Customer warrants that its use of the Platform, and all Customer Data, complies at all times with the Data Protection Laws and with this Policy.`,
  },
  {
    id: "security",
    title: "Security Obligations",
    content: `4.1. The Customer shall, and shall ensure that its Authorised Users, keep secure and confidential all access credentials, authentication tokens, API keys and passwords used to access the Platform, and shall not share, disclose or permit the use of such credentials by any unauthorised person.

4.2. The Customer shall promptly notify the Provider at paul@oplytics.digital upon becoming aware of any actual or suspected: (a) unauthorised access to or use of the Platform or any account; (b) loss, theft or compromise of any access credentials; or (c) security vulnerability, weakness or defect affecting the Platform.

4.3. The Customer shall not, and shall ensure that its Authorised Users do not, take any action that interferes with, disrupts, damages, or impairs the integrity, security, performance or proper functioning of the Platform, its infrastructure, or the use or enjoyment of the Platform by any other customer.

4.4. The Customer shall implement and maintain appropriate technical and organisational measures to safeguard its own systems, accounts and credentials used in connection with the Platform, and shall be responsible for all activity occurring under its account.`,
  },
  {
    id: "manufacturing",
    title: "Integrations and Operational Data — Manufacturing Responsibilities",
    content: `5.1. The Customer may connect operational technology (OT), industrial control systems (ICS), production equipment, sensors, and other systems to the Platform, and may configure integrations between the Platform and Customer or third-party systems. The Customer is solely responsible for its own systems, equipment, networks, and integrations, and for the security, configuration, maintenance and safe operation of its OT, ICS and production environments.

5.2. The Customer shall not use the Platform in any manner that endangers, or could reasonably be expected to endanger, the safety of any person, or the safe operation of any safety-critical, industrial, production or control system.

5.3. The Platform is a software service intended to support the Customer's operations. It is NOT designed or intended to function as, and shall NOT be used as, a substitute for the Customer's own independent safety controls, fail-safes, monitoring systems, or emergency procedures. The Customer shall maintain appropriate independent safety and control measures at all times and shall not rely on the Platform as the sole means of controlling, monitoring or ensuring the safety of any equipment, process or facility.

5.4. The Customer is responsible for ensuring that any data transmitted from its OT, ICS or production systems to the Platform, and any command, instruction or output transmitted from the Platform to such systems, is validated, monitored and used in a manner consistent with safe operating practice and applicable law and standards.

5.5. The Customer is responsible for the security of the connections, gateways, and network segments between its operational systems and the Platform, including the segregation of its industrial networks and the protection of such networks against unauthorised access.`,
  },
  {
    id: "suspension",
    title: "Suspension and Consequences of Breach",
    content: `6.1. The Provider may, at its sole discretion and without liability to the Customer, suspend or restrict the Customer's or any Authorised User's access to all or part of the Platform, with or without notice, where the Provider reasonably believes that: (a) the Customer or an Authorised User has breached, or is likely to breach, this Policy; (b) such suspension is necessary to protect the security, integrity or availability of the Platform, the Provider, or any third party; (c) the Provider is required to do so to comply with any applicable law, regulation, or request from a competent authority; or (d) continued access presents a risk of harm to any person, system or data.

6.2. Where practicable and consistent with the protection of the Platform and third parties, the Provider will endeavour to give the Customer notice of a suspension and an opportunity to remedy the relevant breach, but the Provider is not obliged to do so where it considers that immediate suspension is warranted.

6.3. The Provider may remove, disable access to, or delete any Customer Data or material that it reasonably believes breaches this Policy or applicable law.

6.4. A breach of this Policy constitutes a breach of the SaaS Subscription Agreement. Nothing in this Policy limits any other right or remedy available to the Provider. The Provider's termination rights, and the consequences of termination, are as set out in the SaaS Subscription Agreement, and any suspension under this Policy is without prejudice to those rights.

6.5. The Customer shall be liable for, and shall indemnify the Provider against, all losses, damages, liabilities, costs and expenses arising out of or in connection with any breach of this Policy by the Customer or its Authorised Users, to the extent provided in the SaaS Subscription Agreement.`,
  },
  {
    id: "reporting",
    title: "Reporting and Enforcement",
    content: `7.1. The Provider encourages the prompt reporting of any suspected breach of this Policy, misuse of the Platform, or security vulnerability. Reports and abuse notifications should be sent to the Provider at paul@oplytics.digital.

7.2. The Provider may, but is not obliged to, monitor use of the Platform and investigate any suspected breach of this Policy. The Customer shall provide the Provider with all reasonable cooperation and assistance in connection with any such investigation.

7.3. The Provider reserves the right to disclose information relating to a suspected breach of this Policy to law enforcement agencies, regulators, or other competent authorities where it is required to do so by law or where it reasonably considers such disclosure to be appropriate.

7.4. The Provider may amend this Policy from time to time in accordance with the change provisions of the SaaS Subscription Agreement. The Provider will make the current version of this Policy available to the Customer, and continued use of the Platform following any such amendment constitutes acceptance of the amended Policy.

7.5. Any failure or delay by the Provider in enforcing any provision of this Policy shall not constitute a waiver of that provision or of the Provider's right to enforce it subsequently.`,
  },
];

export default function AcceptableUsePolicy() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Acceptable Use Policy"
        description="The standards of conduct that apply to all use of the Oplytics Digital manufacturing platform, including security and OT/ICS integration responsibilities."
      />
      <div className="pt-16">
        <LegalContentBlock
          title="Acceptable Use Policy"
          lastUpdated="27 September 2026"
          intro={intro}
          sections={aupSections}
        />
      </div>
    </MarketingLayout>
  );
}
