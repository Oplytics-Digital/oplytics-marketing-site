/**
 * Data Processing Agreement Page — #176
 * Design: "Neon Operations"
 * Source of truth: "Data Processing Agreement - Oplytics Digital" in the Legal
 * Documents Drive folder. Keep clause numbering in step with that document.
 * Published as the standard form; the signed copy is executed alongside the
 * SaaS Subscription Agreement, so the signature block is omitted here.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import LegalContentBlock from "@/components/shared/LegalContentBlock";
import SEOHead from "@/components/shared/SEOHead";

const intro = `This Data Processing Agreement forms part of, and is a companion annex to, the SaaS Subscription Agreement entered into between the parties. It takes effect on the effective date of that agreement.

BETWEEN:

(1) Oplytics Digital, a company incorporated in England and Wales whose registered office is at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom (the "Provider"); and

(2) the Customer identified in the SaaS Subscription Agreement, whose registered office is at the address stated in that agreement (the "Customer"),

each a "party" and together the "parties".

BACKGROUND:

(A) The parties have entered into a SaaS Subscription Agreement under which the Provider makes available a business-to-business manufacturing software-as-a-service platform to the Customer (the "Principal Agreement").

(B) In the course of providing the services under the Principal Agreement, the Provider processes personal data on behalf of the Customer.

(C) This Agreement sets out the terms on which the Provider processes such personal data and is entered into to satisfy the requirements of Article 28 of the UK GDPR. This Agreement is a companion annex to, and shall be read together with, the Principal Agreement.

IT IS AGREED as follows:`;

const dpaSections = [
  {
    id: "definitions",
    title: "Definitions and Interpretation",
    content: `1.1. In this Agreement, the following definitions apply:

"Data Protection Legislation" means the UK GDPR, the Data Protection Act 2018, and all other laws relating to the processing of personal data and privacy that apply to a party in the United Kingdom, including any statutory codes of practice and guidance issued by the Information Commissioner.

"UK GDPR" means Regulation (EU) 2016/679 as it forms part of the law of England and Wales, Scotland and Northern Ireland by virtue of section 3 of the European Union (Withdrawal) Act 2018 and as amended by the Data Protection, Privacy and Electronic Communications (Amendments etc.) (EU Exit) Regulations 2019.

"Controller", "Processor", "Data Subject", "Personal Data", "Personal Data Breach", "Processing", "Special Categories of Personal Data" and "Supervisory Authority" have the meanings given to them in the Data Protection Legislation.

"Customer Personal Data" means the Personal Data described in Annex 1 that is processed by the Provider on behalf of the Customer under or in connection with the Principal Agreement.

"IDTA" means the International Data Transfer Agreement issued by the Information Commissioner under section 119A of the Data Protection Act 2018, as revised or replaced from time to time.

"Restricted Transfer" means a transfer of Customer Personal Data to, or access to Customer Personal Data from, a country or territory outside the United Kingdom which would be prohibited by the Data Protection Legislation in the absence of an appropriate transfer mechanism.

"Sub-Processor" means any third party engaged by the Provider to process Customer Personal Data on behalf of the Customer.

"UK Addendum" means the International Data Transfer Addendum to the EU Commission Standard Contractual Clauses issued by the Information Commissioner under section 119A of the Data Protection Act 2018, as revised or replaced from time to time.

1.2. In this Agreement:

(a) a reference to the Principal Agreement includes this Agreement, and in the event of any conflict between this Agreement and the Principal Agreement in relation to the processing of Customer Personal Data, this Agreement shall prevail;

(b) a reference to any legislation includes a reference to that legislation as amended, extended or re-enacted from time to time;

(c) clause and Annex headings do not affect the interpretation of this Agreement.`,
  },
  {
    id: "status-scope",
    title: "Status of the Parties and Scope",
    content: `2.1. The parties acknowledge and agree that, in respect of the processing of Customer Personal Data under the Principal Agreement, the Customer is the Controller and the Provider is the Processor.

2.2. The Customer retains control of the Customer Personal Data and remains responsible for its compliance obligations as Controller under the Data Protection Legislation, including for establishing a lawful basis for the processing and for the accuracy and quality of the instructions given to the Provider.

2.3. The subject-matter, duration, nature and purpose of the processing, the types of Personal Data and the categories of Data Subjects are set out in Annex 1.

2.4. This Agreement applies for so long as the Provider processes Customer Personal Data on behalf of the Customer under the Principal Agreement.`,
  },
  {
    id: "processing",
    title: "Processing of Personal Data",
    content: `3.1. The Provider shall process Customer Personal Data only on documented instructions from the Customer, including with regard to Restricted Transfers, unless the Provider is required to process Customer Personal Data by law to which it is subject. Where the Provider processes Customer Personal Data pursuant to a legal requirement, the Provider shall inform the Customer of that legal requirement before processing, unless that law prohibits such notification on important grounds of public interest.

3.2. The Customer's documented instructions are set out in this Agreement, the Principal Agreement and Annex 1, together with any further instructions given by the Customer in writing from time to time in accordance with the Principal Agreement.

3.3. The Provider shall promptly inform the Customer if, in the Provider's opinion, an instruction infringes the Data Protection Legislation. For the avoidance of doubt, the Provider is not obliged to carry out an independent legal review of the Customer's instructions and shall have no liability for any instruction that infringes the Data Protection Legislation where such infringement was not manifestly apparent to the Provider.

3.4. The Provider shall not process Customer Personal Data for any purpose other than the performance of its obligations under the Principal Agreement, and shall not sell, rent or otherwise make Customer Personal Data available to any third party except as permitted under this Agreement.`,
  },
  {
    id: "provider-obligations",
    title: "Provider Obligations",
    content: `4.1. The Provider shall comply with its obligations as a Processor under the Data Protection Legislation.

4.2. Taking into account the nature of the processing and the information available to the Provider, the Provider shall assist the Customer in ensuring compliance with the obligations set out in Articles 32 to 36 of the UK GDPR, as further described in clause 8.

4.3. The Provider shall make available to the Customer all information reasonably necessary to demonstrate compliance with the obligations set out in Article 28 of the UK GDPR and this Agreement, in accordance with clause 12.`,
  },
  {
    id: "confidentiality",
    title: "Confidentiality of Personnel",
    content: `5.1. The Provider shall ensure that any personnel authorised to process Customer Personal Data:

(a) are subject to a binding contractual or statutory obligation of confidentiality in respect of the Customer Personal Data;

(b) are informed of the confidential nature of the Customer Personal Data and their obligations under this Agreement; and

(c) access Customer Personal Data only to the extent necessary to perform the Provider's obligations under the Principal Agreement.

5.2. The Provider shall take reasonable steps to ensure the reliability of any of its personnel who have access to Customer Personal Data.`,
  },
  {
    id: "security",
    title: "Security Measures",
    content: `6.1. Taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing, as well as the risk of varying likelihood and severity for the rights and freedoms of Data Subjects, the Provider shall implement appropriate technical and organisational measures to ensure a level of security appropriate to that risk, in accordance with Article 32 of the UK GDPR.

6.2. The technical and organisational measures implemented by the Provider as at the date of this Agreement are set out in Annex 2.

6.3. In assessing the appropriate level of security, the Provider shall take account in particular of the risks presented by the processing, in particular from accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to Customer Personal Data.

6.4. The Provider may update or modify the security measures set out in Annex 2 from time to time, provided that such updates do not materially reduce the overall level of security of the Customer Personal Data.`,
  },
  {
    id: "sub-processing",
    title: "Sub-Processing",
    content: `7.1. The Customer grants the Provider general written authorisation to engage Sub-Processors to process Customer Personal Data, subject to this clause 7. The Sub-Processors engaged as at the date of this Agreement are listed in Annex 3.

7.2. The Provider shall inform the Customer of any intended addition or replacement of a Sub-Processor, thereby giving the Customer the opportunity to object to such changes. The Customer may object to the appointment of a new Sub-Processor on reasonable data-protection grounds by giving written notice within 30 days of being informed. If the parties are unable to resolve the objection, either party may terminate the affected services under the Principal Agreement in accordance with its terms.

7.3. Where the Provider engages a Sub-Processor, the Provider shall put in place a written contract with the Sub-Processor that imposes on the Sub-Processor substantially the same data-protection obligations as those imposed on the Provider under this Agreement, in particular providing sufficient guarantees to implement appropriate technical and organisational measures as required by Article 28(4) of the UK GDPR.

7.4. The Provider shall remain fully liable to the Customer for the performance of each Sub-Processor's data-protection obligations to the extent set out in clause 13.`,
  },
  {
    id: "assistance",
    title: "Assistance to the Customer",
    content: `8.1. Taking into account the nature of the processing, the Provider shall assist the Customer by appropriate technical and organisational measures, insofar as this is possible, for the fulfilment of the Customer's obligation to respond to requests from Data Subjects exercising their rights under Chapter III of the UK GDPR.

8.2. The Provider shall promptly notify the Customer if it receives a request from a Data Subject in respect of Customer Personal Data, and shall not respond to that request except on the documented instructions of the Customer or as required by law.

8.3. Taking into account the nature of the processing and the information available to the Provider, the Provider shall assist the Customer in ensuring compliance with the Customer's obligations under:

(a) Article 32 of the UK GDPR (security of processing);

(b) Articles 33 and 34 of the UK GDPR (notification and communication of a Personal Data Breach);

(c) Article 35 of the UK GDPR (data protection impact assessments); and

(d) Article 36 of the UK GDPR (prior consultation with the Supervisory Authority).

8.4. The Provider may charge the Customer a reasonable fee for assistance provided under this clause 8 and clause 12 that goes beyond the ordinary functionality of the platform, to the extent permitted under the Data Protection Legislation.`,
  },
  {
    id: "breach",
    title: "Personal Data Breach",
    content: `9.1. The Provider shall notify the Customer without undue delay after becoming aware of a Personal Data Breach affecting Customer Personal Data.

9.2. The notification under clause 9.1 shall, to the extent then available to the Provider, describe the nature of the Personal Data Breach, the categories and approximate number of Data Subjects and records concerned, the likely consequences of the Personal Data Breach, and the measures taken or proposed to be taken by the Provider to address it, including measures to mitigate its possible adverse effects.

9.3. Where the Provider cannot provide all of the information referred to in clause 9.2 at the same time, it may provide that information in phases without undue further delay.

9.4. The Provider shall take reasonable steps to contain and remediate any Personal Data Breach and shall cooperate with the Customer and take such reasonable commercial steps as are directed by the Customer to assist in the investigation, mitigation and remediation of the Personal Data Breach.

9.5. The Provider shall not make any notification of a Personal Data Breach directly to a Data Subject or the Supervisory Authority on behalf of the Customer unless required to do so by law or expressly instructed in writing by the Customer.`,
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    content: `10.1. The Provider shall not make a Restricted Transfer of Customer Personal Data except in accordance with the Customer's documented instructions and this clause 10.

10.2. Where the Provider makes a Restricted Transfer, it shall ensure that an appropriate transfer mechanism is in place as required by the Data Protection Legislation, which may include:

(a) the IDTA; or

(b) the EU Commission Standard Contractual Clauses as supplemented by the UK Addendum,

together with any supplementary measures necessary to ensure that the level of protection required by the Data Protection Legislation is not undermined. The relevant transfer mechanism and the details of any such transfer are set out in Annex 3 or as otherwise agreed between the parties in writing.

10.3. To the extent that any Restricted Transfer relies on a transfer mechanism that ceases to be valid, the parties shall cooperate in good faith to implement an alternative lawful transfer mechanism without undue delay.`,
  },
  {
    id: "deletion-return",
    title: "Deletion or Return of Personal Data",
    content: `11.1. On termination or expiry of the Principal Agreement, or otherwise on the Customer's written request, the Provider shall, at the choice of the Customer, delete or return all Customer Personal Data to the Customer and delete existing copies, unless the Provider is required by law to retain the Customer Personal Data.

11.2. The Customer may export or retrieve Customer Personal Data using the functionality of the platform at any time during the term of the Principal Agreement, and shall do so before the end of any post-termination retrieval period of 30 days.

11.3. Where the Provider is required by law to retain any Customer Personal Data after the date referred to in clause 11.1, the Provider shall retain only the minimum Customer Personal Data required, shall continue to protect it in accordance with this Agreement, and shall process it only to the extent and for so long as required by that law.

11.4. The Provider shall, on the Customer's written request, certify in writing that it has complied with this clause 11.`,
  },
  {
    id: "audits",
    title: "Audits and Information",
    content: `12.1. The Provider shall make available to the Customer all information reasonably necessary to demonstrate compliance with the obligations laid down in Article 28 of the UK GDPR and shall allow for and contribute to audits, including inspections, conducted by the Customer or an auditor mandated by the Customer, in accordance with this clause 12.

12.2. Any audit or inspection under clause 12.1 shall be conducted:

(a) on at least 30 days' prior written notice, save where an audit is required by a Supervisory Authority or following a Personal Data Breach;

(b) during the Provider's normal business hours;

(c) no more than once in any 12-month period, unless otherwise required by a Supervisory Authority or following a Personal Data Breach; and

(d) subject to reasonable confidentiality and security requirements, and in a manner that does not disrupt the Provider's business or compromise the security or confidentiality of any other customer's data.

12.3. The Provider may satisfy its obligations under this clause 12 by providing the Customer with copies of relevant third-party certifications, audit reports or summaries (such as ISO 27001 certification or an equivalent independent audit report) where these reasonably address the Customer's audit requirements.

12.4. The Customer shall bear its own costs in relation to any audit, and shall reimburse the Provider's reasonable costs incurred in providing assistance beyond the provision of standard documentation and certifications.`,
  },
  {
    id: "liability",
    title: "Liability and Indemnity",
    content: `13.1. The liability of each party under or in connection with this Agreement is subject to the exclusions and limitations of liability set out in the Principal Agreement, which shall apply to this Agreement as if set out in full herein. This Agreement and the Principal Agreement shall be treated as one agreement for the purpose of any aggregate cap on liability.

13.2. Nothing in this Agreement or the Principal Agreement limits or excludes either party's liability to the extent that such liability cannot be limited or excluded under the Data Protection Legislation or other applicable law.

13.3. The Customer shall indemnify and hold harmless the Provider against all losses, claims, damages, liabilities, fines, costs and expenses (including reasonable legal fees) arising out of or in connection with any breach by the Customer of its obligations under this Agreement or the Data Protection Legislation, including any instruction given by the Customer that causes the Provider to be in breach of the Data Protection Legislation.

13.4. Where both parties are responsible for any damage caused by processing, each party shall be liable only for its own proportionate share of the responsibility for the damage, and the Provider's liability shall in no event exceed the share of responsibility that is directly attributable to its own acts or omissions.

13.5. To the maximum extent permitted by law, the Provider shall not be liable for any claim brought by a Data Subject arising from any act or omission of the Provider to the extent that such act or omission was a direct result of the Customer's instructions.`,
  },
  {
    id: "general",
    title: "General",
    content: `14.1. This Agreement is a companion annex to the Principal Agreement and shall be governed by and construed in accordance with the laws of England and Wales.

14.2. The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this Agreement.

14.3. If any provision of this Agreement is or becomes invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable, and the remaining provisions shall continue in full force and effect.

14.4. No variation of this Agreement shall be effective unless it is in writing and signed by or on behalf of each party.

14.5. The Provider's data protection contact for the purposes of this Agreement is paul@oplytics.digital.`,
  },
  {
    id: "annex-1",
    title: "Annex 1 — Details of Processing",
    numbered: false,
    content: `This Annex sets out the details of the processing of Customer Personal Data as required by Article 28(3) of the UK GDPR.

Subject-matter of the processing
The provision of the manufacturing SaaS platform under the Principal Agreement.

Duration of the processing
For the term of the Principal Agreement and any post-termination retrieval or retention period described in clause 11.

Nature and purpose of the processing
Hosting, storage, transmission and support of Customer Data in connection with the platform, including AI-assisted analysis of operational data using third-party AI models to power in-platform features.

Types of Personal Data
Contact details (name, email address, job title), account credentials, user identifiers, usage and log data, and any operational or business data the Customer uploads to the platform.

Categories of Data Subjects
The Customer's employees, personnel and Authorised Users.

Special Categories of Personal Data (if any)
None processed by the Provider by design. The Customer shall not submit Special Categories of Personal Data to the platform unless separately agreed in writing.

Frequency of the processing
Continuous, for as long as the Customer uses the platform.`,
  },
  {
    id: "annex-2",
    title: "Annex 2 — Technical and Organisational Security Measures",
    numbered: false,
    content: `This Annex sets out the technical and organisational security measures implemented by the Provider in accordance with Article 32 of the UK GDPR and clause 6.

Access control
Role-based access, unique credentials per user, and multi-factor authentication enforced on hosting, source control and administrative accounts.

Encryption
TLS encryption of data in transit; encryption at rest on the database and cloud storage.

Secrets management
Credentials and API keys are stored in a dedicated secrets manager and are not held in source code or plaintext configuration.

Network security
Web application firewall and DDoS protection in front of the platform, with firewalled access to underlying infrastructure.

Confidentiality, integrity and availability
Access logging and monitoring, and least-privilege access to production systems.

Business continuity
Automated database backups and a documented recovery process.

Testing and evaluation
Periodic review of access permissions and ongoing dependency and security patching.

Physical security
Provided by the Provider's infrastructure hosting partner's data centre controls.

Certifications
None held directly by the Provider. Underlying infrastructure providers hold their own relevant certifications (including ISO 27001 and SOC 2), details of which are available on request.`,
  },
  {
    id: "annex-3",
    title: "Annex 3 — Sub-Processors",
    numbered: false,
    content: `This Annex lists the Sub-Processors engaged by the Provider as at the date of this Agreement in accordance with clause 7. Where a Sub-Processor is located outside the United Kingdom or the European Economic Area, the transfer is protected by the UK International Data Transfer Agreement (IDTA), the EU Commission Standard Contractual Clauses as supplemented by the UK Addendum, or the Sub-Processor's participation in an equivalent recognised transfer framework, as applicable. The Provider will update this Annex in accordance with clause 7.2.

• Hetzner Online GmbH — Cloud infrastructure and server hosting
• PingCAP (TiDB Cloud) — Database hosting
• Cloudflare, Inc. — Content delivery network, DNS, and web application firewall / DDoS protection
• Infisical — Secrets and credentials management
• Resend — Transactional email delivery
• Google LLC (Google AI Studio / Gemini API) — AI-assisted analysis of operational data to power in-platform features`,
  },
];

export default function DataProcessingAgreement() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Data Processing Agreement"
        description="Oplytics Digital's UK GDPR Article 28 Data Processing Agreement, including processing details, security measures and the current sub-processor list."
      />
      <div className="pt-16">
        <LegalContentBlock
          title="Data Processing Agreement"
          lastUpdated="27 September 2026"
          intro={intro}
          sections={dpaSections}
        />
      </div>
    </MarketingLayout>
  );
}
