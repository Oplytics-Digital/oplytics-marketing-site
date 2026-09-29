/**
 * Service Level Agreement Page — #176
 * Design: "Neon Operations"
 * Source of truth: "Service Level Agreement - Oplytics Digital" in the Legal
 * Documents Drive folder. Keep clause numbering in step with that document.
 * Published as the standard form; it takes effect as an annex to each
 * customer's SaaS Subscription Agreement.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import LegalContentBlock from "@/components/shared/LegalContentBlock";
import SEOHead from "@/components/shared/SEOHead";

const intro = `This Service Level Agreement (the "SLA") is an annex to, and forms part of, the SaaS Subscription Agreement entered into between the parties. It takes effect on the effective date of that agreement.

BETWEEN:

(1) Oplytics Digital, a company incorporated in England and Wales with registered number 17475820 whose registered office is at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom (the "Provider"); and

(2) the customer identified in the SaaS Subscription Agreement (the "Customer").

BACKGROUND:

(A) The Provider makes available a business-to-business software-as-a-service platform used by manufacturing organisations to support their production and operational activities (the "Platform").

(B) The Provider and the Customer have entered into the SaaS Subscription Agreement under which the Provider provides the Customer with access to the Platform.

(C) This SLA sets out the availability commitment, support arrangements, maintenance arrangements, and service credits regime applicable to the Platform. It is an annex to, and forms part of, the SaaS Subscription Agreement.

IT IS AGREED as follows:`;

const slaSections = [
  {
    id: "definitions",
    title: "Definitions and Interpretation",
    content: `1.1. In this SLA, the following terms shall have the meanings set out below. Capitalised terms used but not defined in this SLA have the meanings given to them in the SaaS Subscription Agreement:

"Availability" means the percentage of time in a given Month during which the Platform is available for access and use by the Customer, calculated in accordance with Clause 4.

"Business Day" means a day other than a Saturday, Sunday, or public holiday in England and Wales.

"Emergency Maintenance" means maintenance which the Provider reasonably determines is necessary to protect the security, integrity, or continued operation of the Platform and which cannot reasonably be deferred to a Scheduled Maintenance window.

"Month" means a calendar month.

"Platform" means the software-as-a-service application made available by the Provider under the SaaS Subscription Agreement, as more particularly described in that agreement.

"SaaS Subscription Agreement" means the software-as-a-service subscription agreement entered into between the Provider and the Customer to which this SLA is annexed and of which it forms part.

"Scheduled Maintenance" means planned maintenance of the Platform carried out by the Provider in accordance with Clause 5.

"Service Credit" means a credit calculated and applied in accordance with Clause 7.

"Severity Level" means the classification of a Support Request in accordance with the severity definitions set out in Clause 6.

"Support Hours" means 08:00 to 12:00 UK time (GMT/BST) on Business Days, or such other hours as are specified in the SaaS Subscription Agreement. Support Hours reflect the Provider's arrangements during the Beta Cohort period referred to in Clause 3.4 and are expected to be extended as the Provider's team and operations grow.

"Support Request" means a request for Support Services logged by the Customer through the Provider's designated support channel.

"Support Services" means the technical support services provided by the Provider in accordance with Clause 6.

"Target Uptime" means 99.0% monthly during the Beta Cohort period referred to in Clause 3.4, or such other percentage as is specified in the SaaS Subscription Agreement.

1.2. In this SLA, unless the context otherwise requires:

(a) references to Clauses are to the clauses of this SLA;

(b) headings are for convenience only and shall not affect interpretation;

(c) words in the singular include the plural and vice versa.`,
  },
  {
    id: "relationship",
    title: "Relationship with the SaaS Subscription Agreement",
    content: `2.1. This SLA is an annex to, and forms part of, the SaaS Subscription Agreement. It must be read together with, and is subject to, the terms of the SaaS Subscription Agreement.

2.2. All matters not expressly addressed in this SLA, including without limitation the limitation and exclusion of liability, indemnities, warranties, data protection, term, and termination, are governed by the SaaS Subscription Agreement.

2.3. The remedies set out in this SLA operate subject to, and within, the limitations and exclusions of liability set out in the SaaS Subscription Agreement.

2.4. In the event of any conflict or inconsistency between this SLA and the body of the SaaS Subscription Agreement in relation to service levels, support, maintenance, or service credits, this SLA shall prevail. In relation to all other matters, the body of the SaaS Subscription Agreement shall prevail.`,
  },
  {
    id: "availability",
    title: "Availability Commitment",
    content: `3.1. The Provider shall use commercially reasonable efforts to make the Platform available with an Availability of at least the Target Uptime, measured over each Month in accordance with Clause 4.

3.2. The availability commitment in Clause 3.1 does not constitute a guarantee of uninterrupted or error-free operation of the Platform.

3.3. The Customer acknowledges that the Platform may be used to support its production and operational activities and that the Customer remains responsible for maintaining its own business continuity, backup, and contingency arrangements appropriate to its reliance on the Platform.

3.4. The Target Uptime and Support Hours set out in Clause 1.1 apply to Customers onboarded as part of the Provider's initial Beta Cohort while the Platform and the Provider's support operations are scaled up. The Provider intends to review and, where appropriate, increase the Target Uptime and Support Hours no later than 6 months after the date of this SLA, and will notify the Customer of any resulting update to this SLA in accordance with Clause 9.1.`,
  },
  {
    id: "measurement",
    title: "Measurement of Availability and Exclusions",
    content: `4.1. Availability is calculated for each Month as follows:

Availability (%) = ((Total Minutes in the Month − Excluded Minutes − Downtime Minutes) / (Total Minutes in the Month − Excluded Minutes)) × 100

where "Downtime Minutes" means the number of minutes during the Month in which the Platform was not available for access and use, as measured by the Provider's monitoring systems, and "Excluded Minutes" means minutes attributable to any of the matters set out in Clause 4.3.

4.2. The Provider's monitoring and measurement records shall be the primary basis for determining Availability, save in the case of manifest error.

4.3. The following are excluded from the calculation of Availability and shall not count as Downtime Minutes, nor give rise to any Service Credit:

(a) Scheduled Maintenance carried out in accordance with Clause 5;

(b) Emergency Maintenance;

(c) any unavailability, suspension, or degradation caused by the acts or omissions of the Customer or any of its users, including misuse of the Platform, failure to follow the Provider's reasonable instructions, or breach of the SaaS Subscription Agreement;

(d) any issue arising from the Customer's equipment, software, systems, configuration, connectivity, or network, or from the public internet outside the Provider's reasonable control;

(e) any event or circumstance amounting to force majeure under the SaaS Subscription Agreement;

(f) any failure, unavailability, or degradation of any third-party product, service, platform, hosting provider, or integration not under the Provider's direct control;

(g) any suspension of the Platform which the Provider is entitled to make under the SaaS Subscription Agreement, including suspension for non-payment or security reasons; and

(h) any beta, trial, evaluation, or free-of-charge features of the Platform.`,
  },
  {
    id: "maintenance",
    title: "Maintenance Windows",
    content: `5.1. The Provider may carry out Scheduled Maintenance of the Platform. The Provider shall use reasonable efforts to schedule such maintenance outside the Customer's core business hours where practicable.

5.2. The Provider shall give the Customer at least 5 Business Days prior notice of any Scheduled Maintenance that is likely to affect the Availability of the Platform. Notice may be given by email or through the Platform.

5.3. The Provider may carry out Emergency Maintenance at any time and, where reasonably practicable, shall give the Customer such advance notice as the circumstances permit. Where advance notice is not practicable, the Provider shall notify the Customer as soon as reasonably practicable thereafter.

5.4. Time spent on Scheduled Maintenance and Emergency Maintenance is excluded from the calculation of Availability in accordance with Clause 4.3.`,
  },
  {
    id: "support",
    title: "Support Services and Response Times",
    content: `6.1. The Provider shall provide Support Services to the Customer during Support Hours through its designated support channel.

6.2. The Customer shall log each Support Request through the Provider's designated support channel and shall provide sufficient information to enable the Provider to assess and classify the request, including a description of the issue and its impact on the Customer's operations.

6.3. The Provider shall assign each Support Request a Severity Level, acting reasonably and in accordance with the definitions below. The Provider shall use commercially reasonable efforts to meet the target response and resolution times set out below, measured during Support Hours from the time the Support Request is logged.

P1 — Critical
Platform is wholly unavailable or a critical function is inoperable, with a severe impact on the Customer's production or operations, and no workaround is available.
• Target response time: 2 Support Hours
• Target resolution time: 1 Business Day

P2 — High
A major function is significantly impaired or unavailable, with a substantial impact on operations, but a limited workaround may be available.
• Target response time: 4 Support Hours
• Target resolution time: 2 Business Days

P3 — Medium
A minor function is impaired or the Platform is operating with reduced performance, with a limited impact on operations, and a workaround is available.
• Target response time: 1 Business Day
• Target resolution time: 5 Business Days

P4 — Low
A cosmetic issue, general query, or request for information or enhancement, with no material impact on operations.
• Target response time: 2 Business Days
• Target resolution time: As reasonably practicable

6.4. The target response and resolution times set out in Clause 6.3 are targets only. A failure to meet a target resolution time shall not, of itself, constitute a breach of this SLA or the SaaS Subscription Agreement, provided the Provider continues to use commercially reasonable efforts to resolve the Support Request. The Customer's remedy for failure to meet the Availability commitment is limited to Service Credits in accordance with Clause 7 and Clause 8.

6.5. The Provider may reasonably reclassify a Support Request following investigation. Where a workaround is provided that materially restores the affected function, the Provider may downgrade the Severity Level accordingly.

6.6. The Provider shall have no obligation to provide Support Services in respect of any matter falling within the exclusions in Clause 4.3.`,
  },
  {
    id: "service-credits",
    title: "Service Credits",
    content: `7.1. If the Provider fails to meet the Target Uptime in any Month, the Customer shall, subject to this Clause 7 and Clause 8, be entitled to a Service Credit calculated as a percentage of the fees payable for the Platform in respect of the affected Month, as follows:

• Below Target Uptime but at or above 98.0% Availability: 5% of monthly fees for the Platform
• Below 98.0% but at or above 96.0% Availability: 10% of monthly fees for the Platform
• Below 96.0% Availability: 15% of monthly fees for the Platform

7.2. To claim a Service Credit, the Customer must submit a written claim to the Provider within 30 days of the end of the Month in respect of which the Service Credit is claimed. The claim must identify the affected Month and include reasonable supporting details of the failure to meet the Target Uptime. A Service Credit claim submitted after this period shall not be valid, and the Customer shall be deemed to have waived any entitlement to that Service Credit.

7.3. The Provider shall assess each valid claim against its monitoring records and, where the claim is verified, shall apply the applicable Service Credit against future fees payable by the Customer under the SaaS Subscription Agreement.

7.4. Service Credits:

(a) shall be applied only against future fees and shall not be payable or redeemable in cash;

(b) shall not accrue where the fees for the affected Month have not been paid in full;

(c) shall not be payable in respect of any failure attributable to any of the matters excluded under Clause 4.3.

7.5. The total aggregate Service Credits payable to the Customer in respect of any single Month shall not exceed 15% of the fees payable for the Platform in respect of that Month, and the total aggregate Service Credits payable in respect of any rolling twelve (12) Month period shall not exceed 100% of the fees payable for the Platform in respect of one Month.

7.6. A failure to meet the Target Uptime in any Month shall not of itself give the Customer any right to terminate the SaaS Subscription Agreement. Any right of termination arising from persistent or material failure to meet the Target Uptime is governed exclusively by the SaaS Subscription Agreement.`,
  },
  {
    id: "sole-remedy",
    title: "Sole and Exclusive Remedy",
    content: `8.1. The Service Credits set out in Clause 7 are the Customer's sole and exclusive remedy, and the Provider's sole and exclusive liability, for any failure to meet the Target Uptime or any other service level under this SLA.

8.2. The Customer shall not be entitled to any refund, damages, or other remedy in respect of a failure to meet a service level, save for the Service Credits set out in Clause 7 and save as expressly provided in the SaaS Subscription Agreement.

8.3. This Clause 8 operates subject to, and does not exclude or limit, any liability that cannot lawfully be excluded or limited, as further addressed in the SaaS Subscription Agreement.`,
  },
  {
    id: "general",
    title: "General",
    content: `9.1. This SLA may be amended by the Provider from time to time in accordance with the amendment provisions of the SaaS Subscription Agreement.

9.2. This SLA shall be governed by and construed in accordance with the laws of England and Wales, and the parties submit to the exclusive jurisdiction of the courts of England and Wales, in accordance with the SaaS Subscription Agreement.

9.3. Except as expressly set out in this SLA, all provisions of the SaaS Subscription Agreement remain in full force and effect.`,
  },
];

export default function ServiceLevelAgreement() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Service Level Agreement"
        description="Oplytics Digital's Service Level Agreement: availability target, support hours and response times, maintenance windows and service credits."
      />
      <div className="pt-16">
        <LegalContentBlock
          title="Service Level Agreement"
          lastUpdated="28 September 2026"
          intro={intro}
          sections={slaSections}
        />
      </div>
    </MarketingLayout>
  );
}
