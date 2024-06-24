import React from 'react';
import Router from "next/router";

import { HOME_PATH } from "@/constants";

import styles from './Docs.module.css';

export default function PrivacyPolicy() {

    function backToHomePage() {
        Router.push(HOME_PATH);
    }

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.logo} onClick={ backToHomePage }/>
            <div className={styles.content}>
                <p style={{ textAlign: 'center' }}><strong>PRIVACY POLICY&nbsp;</strong></p>
                <p style={{ textAlign: 'center' }}>www.memodigi.com</p>
                <p style={{ textAlign: 'center' }}>Effective date: 1st April 2023</p>
                <p>Elyyon UG (&ldquo;Memodigi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo;) respects your privacy and is committed to taking reasonable steps towards protecting your privacy online and managing your information responsibly, in order to best understand the services that are most useful to you. This Privacy Policy is intended to notify you of our online privacy practices, the type and categories of information that may be collected, disclosed and stored, how the information is used, with whom the information may be shared, what choices are available to you regarding the collection, use and distribution of the information, what kind of security procedures are in place to protect the loss, misuse or alteration of information under our control, your rights regarding your personal information and who to contact with questions or concerns.</p>
                <p>This Privacy Policy applies to the Memodigi website located at www.memodigi.com (collectively, the &quot;Website&quot;), to any phone, fax, and/or mail operations concerning processing of services, as well as our marketing contacts with you.&nbsp;</p>
                <p>We take data protection very seriously and abide by the <strong>EU General Data Protection Regulation (GDPR)</strong> and other relevant privacy laws that govern our jurisdiction. The data controller within the meaning of Article 4 (7) of the EU General Data Protection Regulation (GDPR) which is responsible for the processing of your personal data is Memodigi.</p>
                <p><strong>BY USING THE WEBSITE AND/OR BY CONTACTING US AND PROVIDING ANY PERSONAL INFORMATION, YOU CONSENT TO THE COLLECTION AND USE OF INFORMATION BY US IN ACCORDANCE WITH THIS PRIVACY POLICY, AS WELL AS TERMS AND CONDITIONS. IF WE DECIDE TO CHANGE OUR PRIVACY POLICY, WE WILL POST THOSE CHANGES ON THIS PAGE AND, AT THE TOP OF THIS PRIVACY POLICY, INDICATE THE DATE THAT CHANGES WERE LAST MADE.</strong></p>
                <p><strong>PERSONAL INFORMATION WE COLLECT</strong></p>
                <p><strong>Personal information you provide to us.</strong>&nbsp; Personal information you may provide to us through the Service or otherwise includes:</p>
                <ul>
                    <li><strong>Contact data</strong>, personal or business contact information such as your first and last name, email and mailing addresses, phone number and professional title.</li>
                    <li><strong>Registration data,&nbsp;</strong>such as information that you provide to register for an account including your date of birth.</li>
                    <li><strong>Profile data</strong>, such as your username and password that you may set to establish an online account with us and your interests and preferences.</li>
                    <li><strong>Communications</strong>, such as information you provide when you contact us with questions, feedback, survey responses, or otherwise correspond with us,</li>
                    <li><strong>Marketing data,&nbsp;</strong>such as the email address or contact details that we use to send marketing communications and your preferences for receiving communications about our activities, events, sweepstakes and contests.</li>
                    <li><strong>Purchase data</strong>, including your purchase history and information needed to process and fulfill your purchase, including purchase details, billing address.</li>
                    <li><strong>Other information</strong>&nbsp;that we may collect which is not specifically listed here, but which we will use in accordance with this Privacy Policy or as otherwise disclosed at the time of collection.</li>
                </ul>
                <p><strong>Data from other sources.</strong>&nbsp; We may also collect information about you from:</p>
                <ul>
                    <li>Business partners, such as advertising and joint marketing partners.</li>
                    <li>Data providers, such as information services and data licensors.</li>
                    <li>Public sources, such as blogs, forums or social media platforms.</li>
                </ul>
                <p><strong>Automatic Collection.</strong>&nbsp; We and our service providers may automatically log information about you, your computer or mobile device, and your activity occurring on or through the Sites, such as:</p>
                <ul>
                    <li><strong>Device data,&nbsp;</strong>such as your computer or mobile device operating system type and version number, manufacturer and model, browser type, screen resolution, IP address, the website you visited before browsing our site, and general location information such as city, state or geographic area.</li>
                    <li><strong>Online activity data,</strong>&nbsp;such as pages or screens you viewed, how long you spent on a page or screen, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access.</li>
                </ul>
                <p><strong>Cookies and similar technologies.&nbsp;</strong>&nbsp;Some of our automatic data collection is facilitated by cookies and similar technologies.&nbsp;&nbsp;</p>
                <p><strong>Referrals.</strong>&nbsp; Users of the Service may have the opportunity to refer friends or other contacts to us.&nbsp; If you are an existing user, you may only submit a referral if you have permission to provide their contact information to us so that we may contact them.</p>
                <p><strong>HOW WE USE YOUR PERSONAL INFORMATION</strong></p>
                <p>We use your personal information for the following purposes and as otherwise described in this Privacy Policy or at the time of collection:</p>
                <p><strong>Service delivery.</strong>&nbsp; We may use your personal information to:</p>
                <ul>
                    <li>provide, operate and improve the Service;</li>
                    <li>establish and maintain your account on the Service;</li>
                    <li>communicate with you about the Service, including by sending you announcements, updates, security alerts, and support and administrative messages;</li>
                    <li>provide customer support and maintenance for the Service;</li>
                    <li>facilitate your login to the Sites via third party platforms, such as Google and Facebook; and</li>
                    <li>enable security features of the Sites, such as by sending you security codes via email or SMS, and remembering devices from which you have previously logged in.</li>
                </ul>
                <p><strong>Direct Marketing.</strong>&nbsp; We may use your personal information to send you Memodigi-related marketing communications as permitted by law.&nbsp; You will have the ability to opt-out of our marketing and promotional communications as described in the&nbsp;Your Choices&nbsp;section below.</p>
                <p><strong>For research and development.</strong>&nbsp; We may use your personal information for research and development purposes, including to analyze and improve the Service and our business.&nbsp;</p>
                <p><strong>To create anonymous data.</strong>&nbsp; We may create aggregated, de-identified or other anonymous data records from your personal information and other individuals whose personal information we collect.&nbsp; We make personal information into anonymous data by excluding information (such as your name) that makes the data personally identifiable to you.&nbsp; We may use this anonymous data and share it with third parties for our lawful business purposes, including to analyze and improve the Service and promote our business.</p>
                <p><strong>Interest-based advertising.</strong>&nbsp; We may contract with third-party advertising companies and social media companies to display ads on our Service and other sites. &nbsp;These companies may use cookies and similar technologies to collect information about you (including the device data, online activity data and/or geolocation data described above) over time across our Service and other sites and services or your interaction with our emails, and use that information to serve ads that they think will interest you. &nbsp;</p>
                <p><strong>To comply with laws and regulations.</strong>&nbsp; We use your personal information as we believe necessary or appropriate to comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or requests from government authorities.&nbsp;</p>
                <p><strong>For compliance, fraud prevention and safety.</strong>&nbsp; We may use your personal information and disclose it to law enforcement, government authorities, and private parties as we believe necessary or appropriate to: (a) protect our, your or others&rsquo; rights, privacy, safety or property (including by making and defending legal claims); (b) audit our internal processes for compliance with legal and contractual requirements; (c) enforce the terms and conditions that govern the Service; and&nbsp;(d) protect, investigate and deter against fraudulent, harmful, unauthorized, unethical or illegal activity, including cyber attacks and identity theft.</p>
                <p><strong>With your consent.</strong>&nbsp; In some cases we may specifically ask for your consent to collect, use or share your personal information, such as when required by law.&nbsp;</p>
                <p><strong>HOW WE SHARE YOUR PERSONAL INFORMATION</strong></p>
                <p>We may share your personal information with the following third parties and as otherwise described in this Privacy Policy or at the time of collection:</p>
                <p><strong>Affiliates.</strong>&nbsp; Our subsidiaries and affiliates, for purposes consistent with this Privacy Policy.</p>
                <p><strong>Service providers</strong>.&nbsp; Companies and individuals that provide services on our behalf or help us operate the Service or our business (such as service fulfillment, customer support, hosting, analytics, email delivery, marketing, database management services, returns processing and risk and fraud mitigation).&nbsp;</p>
                <p><strong>Advertising partners.</strong>&nbsp; Third party advertising companies that collect information about your activity on the Site and other online services to help us advertise our services, and/or use hashed customer lists that we share with them to deliver ads to them and similar users on their platforms.&nbsp;</p>
                <p><strong>Third party platforms.</strong>&nbsp; Social media and other third party platforms that you connect to the Service, such as when you use options to access the Service by logging into a social media platform.&nbsp; Please note, we do not control the third party&rsquo;s use of your personal information.</p>
                <p><strong>The public.</strong>&nbsp; Other users of the Service and the public, when you disclose personal information for public use.&nbsp;We do not control how other users or third parties use any personal information that you make available to them. Please be aware that any information you post publicly can be cached, copied, screen captured or stored elsewhere by others (e.g., search engines) before you have a chance to edit or remove it.</p>
                <p><strong>Professional advisors.</strong>&nbsp; Professional advisors, such as lawyers, bankers, auditors and insurers, where necessary in the course of the professional services that they render to us.</p>
                <p><strong>Authorities and others.&nbsp;</strong>&nbsp;Law enforcement, government authorities, and private parties, as we believe in good faith to be necessary or appropriate to comply with law or for the compliance, fraud prevention and safety purposes described above.</p>
                <p><strong>Business transferees.</strong>&nbsp; We may sell, transfer, or otherwise share some or all of your personal information in connection with or during negotiation of any merger, financing, acquisition or dissolution, transaction or proceeding involving sale, transfer, divestiture, or disclosure of all or a portion of our business or assets, or in the event of an insolvency, bankruptcy, or receivership.</p>
                <p><strong>YOUR CHOICES</strong></p>
                <p>In this section, we describe the rights and choices available to all users.</p>
                <p><strong>Access or update your account information.</strong>&nbsp; If you have registered for an account with us, you may review and update certain personal information in your account profile by logging into the account.</p>
                <p><strong>Opt out of marketing communications.</strong>&nbsp;&nbsp;You may opt out of marketing-related emails by following the opt-out or unsubscribe instructions located at the bottom of the email.&nbsp; You may continue to receive service-related and other non-marketing emails.&nbsp; If you receive marketing text messages from us, you may opt out of receiving further marketing text messages from us by replying STOP to our marketing message.</p>
                <p><strong>Cookies.</strong>&nbsp; Most browsers let you remove and/or stop accepting cookies from the websites you visit. &nbsp;To do this, follow the instructions in your browser&rsquo;s settings.&nbsp;.</p>
                <p><strong>Advertising Choices.</strong>&nbsp; You may opt-out of interest-based advertising.&nbsp;</p>
                <p><strong>Do Not Track.</strong>&nbsp; Some Internet browsers may be configured to send &ldquo;Do Not Track&rdquo; signals to the online services that you visit.&nbsp; We currently do not respond to &ldquo;Do Not Track&rdquo; or similar signals.&nbsp; To find out more about &ldquo;Do Not Track,&rdquo; please visit&nbsp;http://www.allaboutdnt.com</p>
                <p><strong>Privacy settings and location data.</strong>&nbsp; Users of our App can disable our access to their device&rsquo;s precise geo-location in their mobile device settings.</p>
                <p><strong>Choosing not to share your personal information.</strong>&nbsp; If you do not provide information that we need to provide the Service, we may not be able to provide you with the Service or certain features.&nbsp; We will tell you what information you must provide to receive the Service when we request it.</p>
                <p><strong>Third-party platforms or social media networks.</strong>&nbsp; If you choose to create an account through or connect the Service with another third-party platform, you may have the ability to limit the information that we may obtain from the third-party at the time you log in to the Service using the third-party&rsquo;s authentication service or otherwise connect your account.&nbsp; You may also be able to control your settings through the third-party&rsquo;s platform or service after you have connected your accounts.</p>
                <p><strong>OTHER SITES, MOBILE APPLICATIONS AND SERVICES</strong></p>
                <p>The Sites may contain links to other websites and online services operated by third parties.&nbsp; These links are not an endorsement of, or representation that we are affiliated with, any third party.&nbsp; In addition, our content may be included on web pages or online services that are not associated with us.&nbsp; We do not control third party websites or online services, and we are not responsible for their actions.&nbsp; Other websites and services follow different rules regarding the collection, use and sharing of your personal information.&nbsp; We encourage you to read the privacy policies of the other websites and online services you use.</p>
                <p><strong>ANALYTICS</strong></p>
                <p><strong>Google Analytics</strong></p>
                <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Services. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                <p>You can opt-out of having made your activity on the Services available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>
                <p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page:&nbsp;http://www.google.com/intl/en/policies/privacy/</p>
                <p><strong>SECURITY PRACTICES</strong></p>
                <p>The security of your personal information is important to us.&nbsp; We employ a number of organizational, technical and physical safeguards designed to protect the personal information we collect.&nbsp; However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information.</p>
                <p><strong>INTERNATIONAL DATA TRANSFERS</strong></p>
                <p>Memodigi is headquartered in Germany and may have service providers in other countries.&nbsp;The data can transfer to other countries.</p>
                <p><strong>CHILDREN</strong></p>
                <p>The Service is not intended for use by children under 13 years of age (COPPA), and we do not knowingly collect information about children under age 13 through the Service.&nbsp; If we learn that we have collected personal information of a child without the consent of the child&rsquo;s parent or guardian as required by law, we will delete it.</p>
                <p><strong>CHANGES TO THIS PRIVACY POLICY</strong></p>
                <p>We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Sites. If required by law we will also provide notification of changes in another way that we believe is reasonably likely to reach you, such as via e-mail or another manner through the Service.</p>
                <p>Any modifications to this Privacy Policy will be effective upon our posting the modified version. In all cases, your continued use of the Service after the posting of any modified Privacy Policy indicates your acceptance of the terms of the modified Privacy Policy.</p>
                <p><strong>DATA PROTECTION RIGHTS UNDER THE GDPR</strong></p>
                <p>Memodigi is committed to ensuring fair and transparent processing.&nbsp;That is why it is important to us that data subjects can not only exercise their right to object but also the following rights where the respective legal requirements are satisfied:</p>
                <ul>
                    <li>Right to information, Art. 15 of the GDPR</li>
                    <li>Right to correction, Art. 16 of the GDPR</li>
                    <li>Right to deletion (&ldquo;Right to be forgotten&rdquo;), Art. 17 of the GDPR</li>
                    <li>Right to limit processing, Art. 18 of the GDPR</li>
                    <li>Right to data transmissibility, Art. 20 of the GDPR</li>
                    <li>Right to object, Art. 21 of the GDPR</li>
                </ul>
                <p>To exercise your right, please contact us as indicated in the &quot;Contact Us&quot; section below.</p>
                <p>In order to be able to process your request, as well as for identification purposes, please note that we will use your personal information in accordance with Art. 6 para.&nbsp;1 (c) of the GDPR.</p>
                <p>You also have the right to lodge a complaint with a supervisory authority pursuant to Art. 77 GDPR in combination with Section 19 GDPR.</p>
                <p><strong>CCPA</strong></p>
                <p>We are required by the California Consumer Privacy Act (&ldquo;CCPA&rdquo;) to provide to California residents an explanation of how we collect, use and share their Personal Information, and of the rights and choices, we offer to California residents concerning that Personal Information.&nbsp;</p>
                <p><strong>Personal information that we collect, use, and share.&nbsp;&nbsp;</strong>We do not sell personal information.&nbsp; As we explain in this Privacy Policy, we use cookies and other tracking tools to analyze website traffic and facilitate advertising.&nbsp;&nbsp;</p>
                <p><strong>Your California privacy rights.&nbsp;&nbsp;</strong>The CCPA grants California residents the following rights.&nbsp; However, these rights are not absolute, and in certain cases we may decline your request as permitted by law.</p>
                <ul>
                    <li><strong>Information.&nbsp;</strong>You can request information about how we have collected, used and shared and used your Personal Information during the past 12 months.</li>
                    <ul>
                        <li>The categories of Personal Information that we have collected.</li>
                        <li>The categories of sources from which we collected Personal Information.</li>
                        <li>The business or commercial purpose for collecting and/or selling Personal Information.</li>
                        <li>The categories of third parties with whom we share Personal Information.</li>
                        <li>Whether we have disclosed your Personal Information for a business purpose, and if so, the categories of Personal Information received by each category of third party recipient.</li>
                        <li>Whether we&rsquo;ve sold your Personal Information, and if so, the categories of Personal Information received by each category of third party recipient.</li>
                    </ul>
                    <li><strong>Access</strong>. You can request a copy of the Personal Information that we have collected about you during the past 12 months.</li>
                    <li><strong>Deletion.&nbsp;</strong>You can ask us to delete the Personal Information that we have collected from you.</li>
                </ul>
                <p>You are entitled to exercise the rights described above free from discrimination in the form of legally prohibited increases in the price or decreases in the quality of our Service.</p>
                <p><strong>How to exercise your California rights.</strong>&nbsp; You may exercise your California privacy rights described above as follows:</p>
                <ul>
                    <li><strong>Right to information, access and deletion</strong>. You can request to exercise your information, access and deletion rights, by emailing&nbsp;hello@memodigi.com.We reserve the right to confirm your California residence to process your requests and will need to confirm your identity to process your requests to exercise your information, access or deletion rights.&nbsp; As part of this process, government identification may be required.&nbsp; Consistent with California law, you may designate an authorized agent to make a request on your behalf. In order to designate an authorized agent to make a request on your behalf, you must provide a valid power of attorney, the requester&rsquo;s valid government-issued identification, and the authorized agent&rsquo;s valid government issued identification.&nbsp; We cannot process your request if you do not provide us with sufficient detail to allow us to understand and respond to it.</li>
                    <li><strong>Request a list of third party marketers</strong>. California&rsquo;s &ldquo;Shine the Light&rdquo; law (California Civil Code &sect; 1798.83) allows California residents to ask companies with whom they have formed a business relationship primarily for personal, family or household purposes to provide certain information about the companies&rsquo; sharing of certain personal information with third parties for their direct marketing purposes during the preceding year (if any).&nbsp; You can submit such a request by sending an email to&nbsp;hello@memodigi.com with &ldquo;Shine the Light&rdquo; in the subject line.&nbsp; The request must include your current name, street address, city, state, and zip code and attest to the fact that you are a California resident.</li>
                </ul>
                <p>We cannot process your request if you do not provide us with sufficient detail to allow us to understand and respond to it.</p>
                <p><strong>Sharing your personal information</strong></p>
                <p>We do not sell, trade, or rent Users personal identification information to others in accordance with the CCPA. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
                <p><strong>FOR USERS FROM UK &ndash; ICO UK</strong></p>
                <p>If you are a UK resident and want to learn more about your rights or we have not resolved your query regarding your Personal Data, you should contact the Information Commissioner&rsquo;s Office information line on (0044)&nbsp; 303 123 1113 or visit their website at ico.org.uk/.</p>
                <p><strong>CONTACT US</strong></p>
                <p>For any questions, complaints or more information on this privacy policy please contact hello@memodigi.com</p>
            </div>
        </div>
    )
}