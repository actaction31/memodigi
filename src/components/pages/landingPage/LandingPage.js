import React, { useEffect, useState } from 'react';
import { classes } from "@/helpers";
import { ParallaxProvider } from 'react-scroll-parallax';

import ReactFullpage from '@fullpage/react-fullpage';
import FAQ from "@/components/docs/Faq";
import OptionsBlock from "@/components/pages/landingPage/OptionsBlock";
import AnimateOnVisible from "@/components/animateOnVisible/AnimateOnVisible";
import getConfig from 'next/config';

import {
    DOC_COOKIES_PRIVACY_PATH,
    DOC_FAQ_PATH,
    DOC_PRIVACY_PRIVACY_PATH,
    DOC_TERMS_AND_CONDITIONS_PATH, HOME_PATH
} from "@/constants";

import styles from './LandingPage.module.css';
import Router from "next/router";

const { publicRuntimeConfig } = getConfig();

export default function LandingPage() {

    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return (
            <div className={styles.loadingBackground}>
                <div className={styles.loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }

    return (
        <main className={styles.wrapper}>
            <ParallaxProvider>
            <ReactFullpage
                licenseKey={ publicRuntimeConfig?.fullpageApiKey }
                credits={ { enabled: false } }
                scrollingSpeed={ 1000 }
                navigation={ true }
                slidesNavigation={ true }
                render={({ state, fullpageApi }) => {
                    return (
                        <>
                            <ReactFullpage.Wrapper>
                                <Section1 />
                                <Section2 />
                                <Section4 />
                                <Section3 />
                                <Section9 />
                                <Section8 />
                                <Section5 />
                                {/*<Section6 />*/}
                                <Section7 fullpageApi={ fullpageApi } />
                            </ReactFullpage.Wrapper>
                        </>
                    );
                }}
            />
            </ParallaxProvider>
        </main>
    )

}

function Section1() {
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient1, styles.section1Wrapper)}>
            <div className={styles.logo} />
            <div className={styles.lineDsh1} />
            <div className={styles.section1Image} />
            <div className={styles.middleText}>
                <AnimateOnVisible classToAdd={styles.fadeInAnimation}
                                  defaultClassName={styles.fadeInBeforeAnimation}>
                    <h1 className={styles.header}>
                        Digital<br /> Memories<br /> Magnet
                    </h1>
                </AnimateOnVisible>
                <AnimateOnVisible classToAdd={styles.fadeInAnimation}
                                  defaultClassName={styles.fadeInBeforeAnimation}
                                  animationDelay={'0.5s'}>
                    <h2 className={styles.slogan}>
                        Your virtual photo album
                    </h2>
                </AnimateOnVisible>
                <AnimateOnVisible classToAdd={styles.fadeInAnimation}
                                  defaultClassName={styles.fadeInBeforeAnimation}
                                  animationDelay={'1s'}>
                    <div className={styles.description}>
                        No need to install any additional apps, just scan the QR code or put your phone next to magnet and enjoy. Just as easy as that )
                    </div>
                </AnimateOnVisible>
            </div>
        </div>
    )
}

function Section2() {
    const options = [
        {
            label: 'No apps',
            subLabel: 'just your phone browser',
            icon: <img src={"/assets/landing/options/no-apps.png"} alt={''} className={styles.section2OptionsIcon} />
        },
        {
            label: 'Store memories for decades',
            subLabel: 'for yourself, your family & friends and future generations',
            icon: <img src={"/assets/landing/options/10-years.png"} alt={''} className={styles.section2OptionsIcon} />
        },
        {
            label: 'Scan QR code/NFC',
            subLabel: 'Place your phone near to the magnet and experience your album',
            icon: <img src={"/assets/landing/options/qr-nfc.png"} alt={''} className={styles.section2OptionsIcon} />
        },
    ]
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient2)}>
            <div className={styles.logo} />
            <div className={styles.sections2ImagesWrapper}>
                <div className={styles.section2Image1}>
                    <img src={'/assets/landing/section2-image1-2.png'} alt={''} />
                </div>

                <div className={styles.section2Image2}>
                    <AnimateOnVisible classToAdd={styles.sunRiseAnimation}
                                      defaultClassName={styles.sunRiseBeforeAnimation}>
                        <OptionsBlock title={<>Your virtual<br/>photo album</>}
                                      options={options} classNames={{ root: styles.section2Options }} />
                        {/*<img src={'/assets/landing/section2-image2.png'} alt={''} />*/}
                    </AnimateOnVisible>
                </div>
            </div>
        </div>
    )
}

function Section3() {
    const options = [
        { label: 'Scan via NFC or QR-Code' },
        { label: 'Run slide-show' },
    ]
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient3)}>
            <div className={styles.logo} />

                <div className={styles.sections3ImagesWrapper}>
                    <div className={styles.section3Image1}>
                        <AnimateOnVisible classToAdd={styles.sunRiseAnimation}
                                          defaultClassName={styles.sunRiseBeforeAnimation}>
                            <OptionsBlock title={'To view'} options={options} isNumerableList selectedIndex={0}
                                          classNames={{ root: styles.section3Options }} />
                            {/*<img src={'/assets/landing/section3-image2.png'} alt={''} />*/}
                        </AnimateOnVisible>
                    </div>
                    <div className={classes(styles.section3Image2)}>
                        <AnimateOnVisible classToAdd={styles.fadeInOutAnimation}
                                          animationDelay={'0.1s'}
                                          animationDuration={'3s'} >
                            <img src={'/assets/landing/section3-image1-2.png'} alt={''} />
                        </AnimateOnVisible>
                        <AnimateOnVisible classToAdd={styles.fadeInOutAnimation}
                                          animationDelay={'2.8s'}
                                          animationDuration={'4s'} >
                            <img src={'/assets/landing/section3-image3.png'} alt={''} />
                        </AnimateOnVisible>
                        <AnimateOnVisible classToAdd={styles.fadeInOutAnimation}
                                          animationDelay={'6.2s'}
                                          animationDuration={'4s'} >
                            <img src={'/assets/landing/section3-image4.png'} alt={''} />
                        </AnimateOnVisible>
                        <AnimateOnVisible classToAdd={styles.fadeInAnimation}
                                          animationDelay={'9.4s'}
                                          animationDuration={'4s'} >
                            <img src={'/assets/landing/section3-image5.png'} alt={''} />
                        </AnimateOnVisible>
                    </div>
                </div>

        </div>
    )
}

function Section4() {

    const [ selectedOptionIndex, setSelectedOptionIndex ] = useState(0);

    const options = [
        { label: 'Scan via NFC or QR-Code' },
        { label: 'Enter code from the magnet' },
        { label: 'Add your photos/video/audio' },
    ]

    useEffect(() => {
        // let timer1 = setTimeout(() => setSelectedOptionIndex(1), 2800);
        // let timer2 = setTimeout(() => setSelectedOptionIndex(2), 6200);
        // return () => {
        //     clearTimeout(timer1);
        //     clearTimeout(timer2);
        // };
    }, [])

    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient4)}>
            <div className={styles.logo} />
            <div className={styles.sections4ImagesWrapper}>
                <div className={styles.section4Image1}>
                    <AnimateOnVisible classToAdd={styles.fadeInOutAnimation}
                                      animationDelay={'0.5s'}
                                      animationDuration={'3s'} >
                        <img src={'/assets/landing/section4-image2.png'} alt={''} />
                    </AnimateOnVisible>
                    <AnimateOnVisible classToAdd={styles.fadeInOutAnimation}
                                      animationDelay={'2.8s'}
                                      animationDuration={'4s'} >
                        <img src={'/assets/landing/section4-image3.png'} alt={''} />
                    </AnimateOnVisible>
                    <AnimateOnVisible classToAdd={styles.fadeInOutAnimation}
                                      animationDelay={'6.2s'}
                                      animationDuration={'4s'} >
                        <img src={'/assets/landing/section4-image4.png'} alt={''} />
                    </AnimateOnVisible>
                    <AnimateOnVisible classToAdd={styles.fadeInAnimation}
                                      animationDelay={'9.4s'}
                                      animationDuration={'4s'} >
                        <img src={'/assets/landing/section4-image5.png'} alt={''} />
                    </AnimateOnVisible>
                </div>
                <div className={styles.section4Image2}>
                    <AnimateOnVisible classToAdd={styles.sunRiseAnimation}
                                      defaultClassName={styles.sunRiseBeforeAnimation}
                                      animationDelay={'0.5s'}
                                      animationDuration={'3s'} >
                        <OptionsBlock title={'To add content'} options={options}
                                      isNumerableList selectedIndex={ selectedOptionIndex }
                                      classNames={{ root: styles.section4Options }} />
                    </AnimateOnVisible>

                    {/*<AnimateOnVisible classToAdd={styles.sunRiseAnimation}*/}
                    {/*                  defaultClassName={styles.sunRiseBeforeAnimation}>*/}
                    {/*    <OptionsBlock title={'To add content'} options={options} isNumerableList selectedIndex={0} />*/}
                    {/*    /!*<img src={'/assets/landing/section4-image1.png'} alt={''} />*!/*/}
                    {/*</AnimateOnVisible>*/}
                </div>
            </div>
        </div>
    )
}

function Section5() {
    const [ selectedFeature, setSelectedFeature ] = useState(-1);
    const features = [
        {
            icon: '/assets/landing/features-icons/feature1.svg',
            title: 'Interactive slider',
            description: 'View photos and videos in an engaging and dynamic slider format for a diverse visual experience.',
        },
        {
            icon: '/assets/landing/features-icons/feature2.svg',
            title: 'Customizable album style',
            description: 'Choose an individual design and style for your album to stand out among others.',
        },
        {
            icon: '/assets/landing/features-icons/feature3.svg',
            title: 'Bulk media import',
            description: 'Allows you to add a large number of photos and videos simultaneously to simplify the upload process.',
        },
        {
            icon: '/assets/landing/features-icons/feature4.svg',
            title: 'Audio for photos',
            description: 'Add audio recordings to photos to make them more interesting and memorable.',
        },
        {
            icon: '/assets/landing/features-icons/feature5.svg',
            title: 'Multi-account management',
            description: 'Ability to manage and switch between multiple accounts from a single login for workflow optimization.',
        },
        {
            icon: '/assets/landing/features-icons/feature6.svg',
            className: styles.featureMusic,
            title: 'Background music in the album',
            description: 'Add music to create an atmosphere while viewing the album with photos and videos.',
        },
        {
            icon: '/assets/landing/features-icons/feature7.svg',
            title: 'Instagram integration',
            description: 'Import photos directly from your Instagram account for easy use and organization.',
        },
        {
            icon: '/assets/landing/features-icons/feature8.svg',
            title: 'Flexible subscription plans',
            description: 'Availability of different subscriptions providing varying storage duration and capacity for media files.',
        },
        {
            icon: '/assets/landing/features-icons/feature9.svg',
            title: 'Geolocation map',
            description: 'Display a map with locations where photos were taken for convenient navigation and understanding of their history.',
        },
        {
            icon: '/assets/landing/features-icons/feature10.svg',
            title: 'Media file descriptions',
            description: 'Add descriptions to photos, videos, and audio to provide additional information and context.',
        },
    ];
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient5)}>
            <div className={styles.logo} />
            <div className={styles.section5Header}>
                Our features
            </div>
            <div className={styles.sections5Wrapper}>
                { features?.map((feature, index) => {
                    return (
                        <div className={classes(
                            styles.featureBox,
                            feature?.className,
                            //index === 7 ? styles.selectedFeature : null,
                        )} key={index}>
                            <div className={styles.featureBoxDetails}>
                                <div className={styles.featureBoxDetailsIcon}>
                                    <img src={ feature?.icon } alt={''} />
                                </div>
                                <div className={styles.featureBoxDetailsTitle}>
                                    { feature?.title }
                                </div>
                                <div className={styles.featureBoxDetailsDescription}>
                                    { feature?.description }
                                </div>
                            </div>
                            <div className={styles.icon}>
                                <img src={ feature?.icon } alt={''} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Section6() {
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient6)}>
            <div className={styles.logo} />
            <FAQ />
        </div>
    )
}

function Section7({ fullpageApi }) {
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient7)}>
            <div className={styles.logo} />
            <div className={styles.sections7ImagesWrapper}>
                <div className={styles.section7Image1}>
                    <h1 className={styles.section7Header}>
                        Memodigi
                    </h1>
                </div>
                <div className={styles.section7Image2}>
                    <img src={'/assets/landing/section7-image2-3.png'} alt={''} />
                </div>
            </div>
            <FooterSection fullpageApi={ fullpageApi } />
        </div>
    )
}

function Section8() {
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient8)}>
            <div className={styles.logo} />
            <div className={styles.section8Header}>
                Discover new horizons!
            </div>
            <div className={styles.sections8Wrapper}>
                <video controls>
                    <source src="/assets/landing/video/promo-video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 Video player.
                </video>
            </div>
        </div>
    )
}

function Section9() {
    const options = [
        {
            // label: 'No apps',
            subLabel:
                <span className={styles.section9MiddleFont}>
                    <p>&gt;&gt;&nbsp;&nbsp;Digitalize your travel memories – create, connect to and experience your personal photo album from your souvenir magnet.</p>
                    <p>&gt;&gt;&nbsp;&nbsp;Attach your videos, pictures and personal memories to your unique and personal souvenir and share it easily with your loved ones.</p>
                    <p>&gt;&gt;&nbsp;&nbsp;Safeguard beautiful memories for decades - for yourself, your family & friends and future generations</p>
                </span>,
        },
    ];
    const options2 = [
        {
            // label: 'No apps',
            subLabel:
                <span className={styles.section9MiddleFont}>
                    Our mission to reshape the way travelers attach personal memories to Souvenirs.
                </span>,
        },
    ]
    return (
        <div className={classes("section", styles.sectionWrapper, styles.bgGradient9)}>
            <div className={styles.logo} />

            <div className={styles.sections9ImagesWrapper}>
                <div className={styles.section9Image1}>
                    <AnimateOnVisible classToAdd={styles.sunRiseAnimation}
                                      defaultClassName={styles.sunRiseBeforeAnimation}>
                        <OptionsBlock title={'Our mission'} options={options2} selectedIndex={0}
                                      classNames={{ root: styles.section9Options }} />
                        <OptionsBlock title={'About product value'} options={options} selectedIndex={0}
                                      classNames={{ root: styles.section9Options }} />
                    </AnimateOnVisible>
                </div>
                <div className={classes(styles.section9Image2)}>
                    <AnimateOnVisible classToAdd={styles.fadeInAnimation}
                                      animationDuration={'3s'} >
                        <img src={'/assets/landing/section9-image1.png'} alt={''} />
                    </AnimateOnVisible>
                </div>
            </div>

        </div>
    )
}

function FooterSection({ fullpageApi }) {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerColumnsWrapper}>
                <div className={styles.footerColumns}>
                    <div>
                        <div className={styles.footerHeader}>About</div>
                        <ul>
                            <li>
                                <a href="#" onClick={() => { fullpageApi.moveTo(1) }}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href={ DOC_FAQ_PATH } target={"_blank"} rel="noreferrer">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.footerHeader}>Legal</div>
                        <ul>
                            <li>
                                <a href={ DOC_PRIVACY_PRIVACY_PATH } target={"_blank"} rel="noreferrer">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href={ DOC_TERMS_AND_CONDITIONS_PATH } target={"_blank"} rel="noreferrer">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href={ DOC_COOKIES_PRIVACY_PATH } target={"_blank"} rel="noreferrer">
                                    Cookies Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.footerHeader}>Navigation</div>
                        <ul>
                            <li>
                                <a href="#" onClick={() => { fullpageApi.moveTo(1) }}>
                                    Go to Top
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => { fullpageApi.moveTo(3) }}>
                                    How to view memories
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => { fullpageApi.moveTo(4) }}>
                                    How to add memories
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => { fullpageApi.moveTo(5) }}>
                                    Features
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.footerAddressBlock}>
                        <div className={styles.footerAddress}>
                            Adress: Elyyon UG, Woldsenweg 2, 20249 Hamburg
                        </div>
                        {/*<div className={styles.footerPhone}>*/}
                        {/*    <div></div>*/}
                        {/*    <div>(0044) 303 123 1113</div>*/}
                        {/*</div>*/}
                        <div className={styles.footerEmail}>
                            Managing Director: Dr. Eli Fel
                        </div>
                        <div className={styles.footerEmail}>
                            <a href={"mailto:e.fel@tpn-hygiene.com"}>e.fel@tpn-hygiene.com</a>
                        </div>
                    </div>
                    <div className={styles.footerSocial}>
                    </div>
                </div>
            </div>
        </div>
    )
}