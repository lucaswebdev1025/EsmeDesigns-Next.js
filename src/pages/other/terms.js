import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { LayoutTwo } from "../../components/Layout";

const Terms = () => {
  const [modalStatus, isOpen] = useState(false);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="About"
        backgroundImage="/assets/images/esme-images/products_banner.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>About</li>
        </ul>
      </BreadcrumbOne>
      {/* about content */}
      <div className="about-content space-mt--r130 space-mb--r130">
        <div className="section-title-container space-mb--40">
          <Container>
            <Row>
              <Col lg={8} className="ml-auto mr-auto">
                {/* section title */}
                <div className="about-title-container text-left">
                  <p className="dark-title space-mb--35">Terms & Conditions</p>
                  <h2 className="title space-mb--15">
                    TERMS OF USE
                  </h2>
                  <p className="title-text">
                    This Terms of Use Agreement (this “Agreement”) is a legal agreement between you (“you” or “your”) and Emse Designs, LLC), its affiliates, and each of their respective successors and assigns governing your use of www.esme-designs.com  (the “Site”). You hereby agree implicitly and without express written consent that you have read and agree to be bound by the outlined terms and conditions. If you do not agree to abide by these Terms of Use, please refrain from using www.esme-designs.com.<br />
                    Emse Designs, LLC reserves the right to modify the terms and conditions of this Agreement or its policies relating to the Site at any time, effective upon posting of an updated version of this Agreement on the Site. You are responsible for regularly reviewing this Agreement. Continued use of the Site after any such changes shall constitute your consent to such changes.<br />
                    <h5 className="m-4">Prices & Orders</h5>
                    All prices displayed on the Emse Designs, LLC website are quoted in U.S. Dollars.  Emse Designs, LLC may restrict delivery to addresses within the United States and Canada.  Emse Designs, LLC will add shipping and handling fees as necessary. Resale tax certificate is required for BRICK AND MORTAR STORES ONLY . ..  Emse Designs, LLC reserves the right without prior notice to discontinue or change specifications and prices on products and services offered on the  Emse Designs, LLC website without incurring any obligation to you. Products displayed on the  Emse Designs, LLC   website are available while supplies last. The receipt by you of an order confirmation does not constitute  Emse Designs, LLC acceptance of an order. Prior to  Emse Designs, LLC acceptance of an order, verification of information may be required and current credit card on file  Emse Designs, LLC   reserves the right at any time after receipt of your order to accept or decline your order, or any portion thereof, due (to customer not in good standing)  even after your receipt of an order confirmation from  Emse Designs, LLC  , for any reason.  Emse Designs, LLC   reserves the right to limit the order quantity on any item and to refuse service to any customer without prior notification. In the event that a product or service is listed at an incorrect price due to supplier pricing information or typographical error,  Emse Designs, LLC   shall have the right to refuse or cancel orders placed for the product listed at the incorrect price, regardless of whether the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is canceled,  Emse Designs, LLC   shall promptly issue a credit to your credit card account in the amount of the incorrect price.<br />
                    <h5 className="m-4">Shipping Risks</h5>
                    Emse Designs, LLC will provide customers with tracking information including expected shipping dates, but Emse Designs, LLC   will not be held responsible for any delays, damages or losses due to (but not limited to) natural disasters, acts of federal, state or local government, fires, floods, strikes, lockouts, freight embargoes, and acts of God.<br />
                    <h5 className="m-4">Return and Refund Policy</h5>
                    Emse Designs, LLC product that has been produced explicitly for our stores.  Each return is considered on a case by case basis.<br />
                    <h5 className="m-4">Termination of Use</h5>
                    Emse Designs, LLC may, in its sole discretion, terminate your account or your use of the Site at anytime. You are personally liable for any orders that you place or charges that you incur prior to termination. Emse Designs, LLC   reserves the right to change, suspend or discontinue all or any aspects of the Site at any time without prior notice.<br />
                    <h5 className="m-4">Collections</h5>
                    In the event  Emse Designs, LLC   must pursue collections of any debt owed to the company resulting from a sales transaction, not limited to fraud, credit card reversals, credit accounts, etc.,  Emse Designs, LLC   will be entitled to actual costs associated with the collections, including, but not limited to, actual legal fees and costs, travel fees, airfare, mileage, lodging, and other necessary costs associated with the collections.<br />
                    <h5 className="m-4">Postings</h5>
                    Emse Designs, LLC may from time to time monitor, review, and in its discretion edit or delete, discussions, chats, profiles, and postings on our Site; however,  Emse Designs, LLC  is under no obligation to do so and assumes no responsibility or liability arising from the content of any such transmissions or for any error, defamation, libel, slander, omission, falsehood, obscenity, pornography, profanity, hate speech, danger, illegality, solicitations or inaccuracy contained in any information transmitted to any such locations on our Site.   Emse Designs, LLC   will cooperate with law enforcement or a court order requesting or directing Emse Designs, LLC   to disclose the identity of anyone posting any information or material prohibited by this Agreement.   Emse Designs, LLC   may also disclose such information if such disclosure is reasonably necessary to protect the rights, property, or personal safety of Emse Designs, LLC, its clients, or the public.<br />
                    <h5 className="m-4">User Comments, Feedback and Other Submissions</h5>
                    All comments, feedback, suggestions, ideas, and other submissions disclosed, submitted, or offered to Emse Designs, LLC   on or by this Site or otherwise disclosed, submitted, or offered in connection with your use of this Site or otherwise (collectively, "Comments") shall be and remain Emse Designs, LLC property.  Such disclosure, submission, or offer of any Comments shall constitute an assignment to Emse Designs, LLC   of all worldwide rights, titles, and interests in all copyrights and other intellectual property in the Comments.  Thus, Emse Designs, LLC   will own exclusively all such rights, title, and interest and shall not be limited in any way in its use, commercial or otherwise, of any Comments.   Emse Designs, LLC   is and shall be under no obligation (1) to maintain any Comments in confidence; (2) to pay to user any compensation for any Comments; or (3) to respond to any Comments.<br />
                    <h5 className="m-4">Compliance with Laws</h5>
                    You agree to comply with all applicable laws, statutes, ordinances and regulations regarding your use of the Emse Designs, LLC website and your purchase of items from Emse Designs, LLC (if applicable) on the Emse Designs, LLC website.<br />
                    <h5 className="m-4">Intellectual Property Ownership</h5>
                    All right, title and interest in the Site, including all copyrights, patents, trade secrets, trade dress and other proprietary rights, and any derivative works thereof, shall belong solely and exclusively to Emse Designs, LLC   or its licensors, and you shall have no rights whatsoever in any of the foregoing. All design and content featured on the  Emse Designs, LLC   website, including the text, images, photographs, graphics, logos, button icons, audio clips, information, forms, graphs, videos, typefaces, music, sounds, illustrations, descriptions, data, and other material and software, as well as the selection, assembly and arrangement thereof, are referred to collectively as the "content", and are copyrights, trademarks, trade dress, and/or intellectual property that are owned, controlled, or licensed by  Emse Designs, LLC   This website in its entirety is protected by copyright and applicable trade dress. The content may contain errors, omissions, or typographical errors or may be out of date.  Emse Designs, LLC   may change, delete, or update any content at any time and without prior notice. The content is provided for informational purposes only and is not binding on Emse Designs, LLC   in any way except to the extent it is specifically indicated to be so. You may view and use the content only for your personal, noncommercial use, and for shopping and ordering on the www.esme-designs.com  website, and for no other purpose, and you shall retain intact all copyright and other proprietary notices. Except as provided in the foregoing,  Emse Designs, LLC   does not grant to you or any person any right to use, reproduce, copy, modify, transmit, display, publish, sell, license, create derivative works, publicly perform, create derivative works from, or distribute by any means, method, or process whatsoever, now known or hereafter developed, any of the content on or transmitted through the www.esme-designs.com   website, including without limitation by transferring, downloading or otherwise copying any content onto any disk drive or other storage medium. Any use of the content, except as specifically permitted in these terms, or as otherwise expressly permitted in the content or in writing signed by  Emse Designs, LLC  , is strictly prohibited. You understand and acknowledge that unauthorized disclosure, use or copying of the proprietary products and services provided pursuant to this Agreement may cause Emse Designs, LLC  and its licensors irreparable injury, which may not be remedied at law, and you agree that Emse Designs, LLC  and its licensors' remedies for breach of this Agreement may be in equity by way of injunctive or other equitable relief.<br />
                    <h5 className="m-4">Linked Third Party Sites</h5>
                    Links to other internet websites operated by third parties do not constitute sponsorship, endorsement, or approval by  Emse Designs, LLC   of the content, policies, or practices of such linked sites. Linked sites are not operated, controlled, or maintained by  Emse Designs, LLC  , and  Emse Designs, LLC   is not responsible for the availability, content, security, policies, or practices of linked sites, including without limitation privacy policies and practices. Links to other sites are provided for your convenience only, and you access them at your own risk. We encourage you to carefully read the privacy statement of any Web site you visit.<br />
                    <h5 className="m-4">Disclaimer of Warranties</h5>
                    EXCEPT AS OTHERWISE EXPRESSLY PROVIDED IN THIS AGREEMENT, (A) THE SITE IS PROVIDED “AS-IS” AND “WITH ALL FAULTS,” AND, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, Emse Designs, LLC , INCLUDING ITS AFFILIATES, SUBSIDIARIES, LICENSORS, SUBCONTRACTORS, DISTRIBUTORS, SERVICES PARTNERS, AGENTS AND MARKETING PARTNERS) AND EACH OF THEIR RESPECTIVE EMPLOYEES, DIRECTORS AND OFFICERS (COLLECTIVELY, THE “Emse Designs, LLC  PARTIES”) DISCLAIM ALL REPRESENTATIONS, WARRANTIES AND CONDITIONS OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE SITE, OR OTHERWISE RELATING TO THIS AGREEMENT, INCLUDING WARRANTIES AND CONDITIONS OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, MERCHANTABLE QUALITY, NON-INFRINGEMENT AND ACCURACY AND NON-INTERFERENCE; (B) NEITHER EMSE DESIGNS, LLC NOR ANY EMSE DESIGNS, LLC PARTY WARRANTS THAT (i) THE SITE IS OR WILL BE SECURE, ACCURATE, COMPLETE, UNINTERRUPTED, WITHOUT ERROR, OR FREE OF VIRUSES, WORMS, OTHER HARMFUL COMPONENTS, OR OTHER PROGRAM LIMITATIONS, (ii) THE SITE WILL MEET YOUR REQUIREMENTS, (iii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SITE WILL BE ACCURATE OR RELIABLE, (iv) ANY ERRORS IN THE SITE WILL BE CORRECTED; (C) YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION OF PROBLEMS CAUSED BY VIRUSES OR OTHER HARMFUL COMPONENTS, UNLESS SUCH ERRORS OR VIRUSES ARE THE DIRECT RESULT OF  ESME-DESIGN  GROSS NEGLIGENCE OR WILLFUL MISCONDUCT; (D) EMSE DESIGNS, LLC AND THE EMSE DESIGNS, LLC PARTIES, JOINTLY AND SEVERALLY, DISCLAIM AND MAKE NO WARRANTIES OR REPRESENTATIONS AS TO THE ACCURACY, QUALITY, RELIABILITY, SUITABILITY, COMPLETENESS, TRUTHFULNESS, USEFULNESS, OR EFFECTIVENESS OF THE FORMS, DATA, REPORTS, RESULTS OR OTHER INFORMATION OBTAINED, GENERATED OR OTHERWISE RECEIVED BY YOU FROM ACCESSING AND/OR USING THE SITE OR OTHERWISE RELATING TO THIS AGREEMENT, AND (E) USE OF THE SITE IS ENTIRELY AT YOUR OWN RISK AND NEITHER EMSE DESIGNS, LLC NOR ANY OF THE EMSE DESIGNS, LLC PARTIES SHALL HAVE ANY LIABILITY OR RESPONSIBILITY THEREFOR.<br />
                    <h5 className="m-4">Limitation of Liability</h5>
                    NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, IN NO EVENT WHATSOEVER SHALL  EMSE DESIGNS, LLC  BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOST TIME OR GOOD WILL, EVEN IF EMSE DESIGNS, LLC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE.   Emse Designs, LLC   SHALL NOT BE LIABLE FOR ANY CLAIMS AGAINST YOU BY THIRD PARTIES. YOU ACKNOWLEDGE THAT THESE LIMITATIONS OF LIABILITY SHALL APPLY EVEN IF THE REMEDIES FAIL THEIR ESSENTIAL PURPOSE.<br />
                    User hereby acknowledges that this paragraph shall apply to all content, merchandise and services available through the Site. Certain states and/or jurisdictions do not allow the exclusion of implied warranties or limitation of liability for incidental, consequential or certain other types of damages, so the exclusions set forth above may not apply to you.<br />
                    <h5 className="m-4">Representations and Warranties</h5>
                    By using the Site, you represent and warrant that (a) you understand and agree that this Agreement is a legally binding agreement and the equivalent of a signed, written contract; (b) you will use the Site in a manner consistent with all applicable laws and regulations and in accordance with the terms and conditions of this Agreement; (c) you are authorized to sign for and bind any entity for whom you are acting a representative or other agent; (d) you will not impersonate any person or entity, misrepresent any affiliation with another person, entity or association, use false headers or otherwise conceal your identity from  Emse Designs, LLC   for any purpose.<br />
                    <h5 className="m-4">Indemnification</h5>
                    You agree to indemnify, defend and hold harmless  Emse Designs, LLC  and the  Emse Designs, LLC   Parties from and against any and all claims and expenses, including reasonable attorneys’ fee, arising out of or related in any way to your use of the Site, violation of this Agreement, violation of any law or regulation or violation of any proprietary or privacy right.<br />
                    <h5 className="m-4">Account Access</h5>
                    Where use of the Site is contingent on you and your users accessing an "account" and/or inserting a "user-identification" and/or "password,” you agree that you will be solely responsible for the user-ids and passwords that are provided to you (as such passwords may be changed from time to time in accordance with features of the Site) to log-in.  You and your users shall keep any correspondence you receive relating to or through the use of the Site (including, but not limited to, your user-id, passwords, and other registration or sign-in information) confidential and in a safe place and not disclose it to any third party.  You will be responsible and liable for all communications and actions that take place through the use of your user-ids, including without limitation, any actions that occur without your authorization. Accordingly, it is your responsibility to take appropriate actions immediately if any password has been stolen, leaked, compromised or otherwise used without proper consent.<br />
                    <h5 className="m-4">Use by Children</h5>
                    The Site is intended for use by individuals 13 years of age or older. Users under the age of 13 should get the assistance of a parent or guardian.<br />
                    <h5 className="m-4">General</h5>
                    This Agreement shall be governed United States federal law, without regard to the choice or conflicts of law provisions of any jurisdiction or the United Nations Convention on the International Sale of Goods, and any disputes, actions, claims or causes of action arising out of or in connection with this Agreement or the Site, w.  You may not under any circumstances commence or maintain against Emse Designs, LLC   any class action, class arbitration, or other representative action or proceeding. In the event that this arbitration agreement is for any reason held to be unenforceable, any litigation against.<br />
                    Any cause of action you may have with respect to your use of the Site must be commenced within one (1) year after the claim or cause of action arises.<br />
                    If any provision of this Agreement is held by a court of competent jurisdiction to be invalid or unenforceable, then such provisions shall be construed, as nearly as possible, to reflect the intentions of the invalid or unenforceable provisions, with all other provisions remaining in full force and effect.<br />
                    It may be necessary for  Emse Designs, LLC   to perform scheduled or unscheduled repairs, maintenance, or upgrades and such activities may temporarily degrade the quality of the Site or result in a partial or complete outage of the Site.   Emse Designs, LLC   provides no assurance that you will receive advance notification of such activities or that the Site will be uninterrupted or error-free.  Any degradation or interruption in the Site shall not give rise to a refund or credit of any fees paid by you.<br />
                    No joint venture, partnership, employment, or agency relationship exists between you and  Emse Designs, LLC   as a result of this agreement or use of the Site. The failure of  Emse Designs, LLC   to enforce any right or provision in this Agreement shall not constitute a waiver of such right or provision unless acknowledged and agreed to by  Emse Designs, LLC   in writing.<br />
                    Neither party shall be liable to the other party for any failure to perform any of its obligations (except payment obligations) under this Agreement during any period in which such performance is delayed by circumstances beyond its reasonable control including, but not limited to, fire, flood, war, embargo, strike, riot or the intervention of any governmental authority.<br />
                    If you have not entered into another agreement with  Emse Designs, LLC   regarding the subject matter contained herein, then this Agreement comprises the entire agreement between you and  Emse Designs, LLC  and supersedes all prior or contemporaneous negotiations, discussions or agreements, whether written or oral, between the parties regarding such subject matter. However, if you and Emse Designs, LLC   have entered into another agreement regarding the subject matter set forth herein that is a written and signed agreement between you and  Emse Designs, LLC  , then this Agreement should be read and interpreted in conjunction with such agreement and, in the event of a conflict between this Agreement and a written, signed agreement between the parties, the written, signed agreement shall govern and control.<br />
                    SUBSCRIBE TO OUR NEWSLETTER!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

export default Terms;