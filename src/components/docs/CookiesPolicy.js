import React from 'react';
import Router from "next/router";

import { HOME_PATH } from "@/constants";

import styles from './Docs.module.css';

export default function CookiesPolicy() {

    function backToHomePage() {
        Router.push(HOME_PATH);
    }

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.logo} onClick={ backToHomePage }/>
            <div className={styles.content}>
                <p style={{ textAlign: 'center' }}><strong>COOKIE POLICY</strong></p>
                <p style={{ textAlign: 'center' }}>www.memodigi.com</p>
                <p style={{ textAlign: 'center' }}>Effective date: 1st April 2023</p>
                <p>This Cookie Policy explains how Elyyon UG (&ldquo;Memodigi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) uses cookies and similar technologies in connection with the&nbsp;www.memodigi.com&nbsp;website.</p>
                <p><strong>What are cookies?</strong></p>
                <p>Cookies are small text files placed on your computer by websites and sometimes by emails. They provide useful information to organizations, which helps to make your visits to their websites more effective and efficient. We use cookies to ensure that we are able to understand how you use our websites and to ensure that we can make improvements to the websites.</p>
                <p>Cookies do not contain any personal or confidential information about you.</p>
                <p><strong>How we use cookies</strong></p>
                <p>We use cookies to ensure that you get the best from our website. The first time that you visit our website you will be asked to consent to our use of cookies and we suggest that you agree to allow the cookies to be active on your device whilst you visit and browse our website to ensure that you experience our website fully.</p>
                <p>The types of cookies that we may use include:</p>
                <ul>
                    <li><strong><em>Session cookies</em></strong><br/><br/>Session cookies last only for the duration of your visit and are deleted when you close your browser. These facilitate various tasks such as allowing a website to identify that a user of a particular device is navigating from page to page, supporting website security or basic functionality.<br/><br/></li>
                    <li><strong><em>Persistent cookies</em></strong><br/><br/>Persistent cookies last after you have closed your browser, and allow a website to remember your actions and preferences. Sometimes persistent cookies are used by websites to provide targeted advertising based upon the browsing history of the device.We use persistent cookies to allow us to analyze users visit to our site. These cookies help us to understand how customers arrive at and use our site so we can improve the overall service.<br/><br/></li>
                    <li><strong><em>Strictly necessary cookies</em></strong><br/><br/>These cookies are essential in order to enable you to move around the website and use its features, and ensuring the security of your experience. Without these cookies services you have asked for, such as applying for products and managing your accounts, cannot be provided. These cookies don&rsquo;t gather information about you for the purposes of marketing.<br/><br/></li>
                    <li><strong><em>Performance cookies</em></strong><br/><br/>These cookies collect information about how visitors use a web site, for instance which pages visitors go to most often, and if they get error messages from web pages. All information these cookies collect is only used to improve how a website works, the user experience and to optimize our advertising. By using our websites you agree that we can place these types of cookies on your device, however you can block these cookies using your browser settings.&nbsp;<br/><br/></li>
                    <li><strong><em>Functionality cookies</em></strong><br/><br/>These cookies allow the website to remember choices you make (such as your username). The information these cookies collect is anonymized (i.e. it does not contain your name, address etc.) and they do not track your browsing activity across other websites. By using our websites you agree that we can place these types of cookies on your device, however you can block these cookies using your browser settings.&nbsp;<br/><br/></li>
                    <li><strong><em>Targeting cookies</em></strong><br/><br/>These cookies collect several pieces of information about your browsing habits. [They are usually placed by third party advertising networks]. They remember that you have visited a website and this information is shared with other organizations such as media publishers. These organizations do this in order to provide you with targeted adverts&nbsp;more relevant to you and your interests.&nbsp;<br/><br/></li>
                    <li><strong><em>Third party cookies</em></strong><br/><br/>Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.<br/><br/></li>
                </ul>
                <p><strong>Managing Cookies</strong></p>
                <p>You can control and/or delete cookies as you wish &ndash; for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit our website or use our Platform and some services and functionalities we offer may not work.</p>
                <p>To restrict or handle cookies, please see the &lsquo;Help&rsquo; section of your internet browser.</p>
                <p>For any further information, please contact us hello@Memodigi.com</p>
            </div>
        </div>
    )
}