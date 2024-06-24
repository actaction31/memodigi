import React, { useState } from 'react';
import Router from "next/router";
import { classes } from "@/helpers";

import { HOME_PATH } from "@/constants";

import styles from './Faq.module.css';

const questionsAnswers = [
    { id: 1, question: 'How many photos and videos can I upload at once?', answer: 'The number of photos and videos you can upload at once depends on your subscription plan and the file sizes. However, our platform is designed to handle a large volume of uploads simultaneously, providing a seamless experience for our users.' },
    { id: 2, question: 'What happens to my media files if I downgrade my subscription plan?', answer: 'If you decide to downgrade your subscription plan, your media files will still be accessible, but the storage duration and capacity might be affected. We recommend reviewing the specific terms of each subscription plan before making any changes to ensure you maintain the desired level of service.' },
    { id: 3, question: 'Can I upload my own music for background music in the album?', answer: 'Yes, you can upload your own music files to use as background music in your albums. Please ensure that you have the necessary rights to use the music files, as our platform adheres to copyright and intellectual property regulations.' },
    { id: 4, question: 'Is there a limit to the length of audio recordings I can add to photos?', answer: 'While there is no strict limit on the length of audio recordings, we recommend keeping them concise to ensure a smooth and enjoyable browsing experience for your viewers. Longer audio files may also impact the loading time and performance of your album.' },
    { id: 5, question: 'Can I use HTML tags or Markdown formatting in my media file descriptions?', answer: 'Our platform supports basic text formatting options for media file descriptions. However, the full support for HTML tags or Markdown may vary. We recommend consulting our documentation or contacting our support team for specific formatting guidelines.' },
    { id: 6, question: 'Can I manually add or edit geolocation data for my photos?', answer: 'Yes, our platform allows you to manually add or edit geolocation data for your photos. This feature can be helpful if the original geolocation data is inaccurate or missing, allowing you to provide accurate location information for your media files.' },
    { id: 7, question: 'Are there any pre-designed templates or themes available for customizing my album style?', answer: 'Our platform offers a variety of pre-designed templates and themes for you to choose from, as well as the option to create your own custom design. This ensures that you can create a unique and personalized look for your album that reflects your style and preferences.' },
    { id: 8, question: 'Can I connect multiple Instagram accounts to import photos?', answer: "Unfortunately, our platform currently supports connecting only one Instagram account at a time. To import photos from a different Instagram account, you will need to disconnect the current one and connect the other account. We understand this may be less convenient, and we're continually working to improve the functionality of our platform to better serve our users' needs." },
    { id: 9, question: 'Is there a limit to the length of audio recordings I can add to photos?', answer: 'The length of the audio recordings you can add to photos is not strictly limited. However, the total size of the audio files, along with your other media files, must stay within the storage capacity provided by your subscription plan. If you reach the storage limit, you may need to remove some files or upgrade your subscription to add longer audio recordings.' },
    { id: 10, question: 'Can I share access to my accounts with other users?', answer: 'While our platform does not support direct sharing of account access with other users, you can share a link to your media content for viewing purposes. This allows other users to view your albums without granting them full access to your account, thus maintaining your privacy and control over your media files.' },
]

export default function FAQ() {

    const [ selectedQuestion, setSelectedQuestion ] = useState(questionsAnswers?.[0]?.id)

    function backToHomePage() {
        Router.push(HOME_PATH);
    }

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.logo} onClick={ backToHomePage }/>
            <h2>FAQ</h2>
            <div className={styles.faqWrapper}>
                <div className={styles.questionsWrapper}>
                    <ul>
                        { questionsAnswers?.map((questionItem, index) => {
                            return (
                                <>
                                    <li key={index}
                                        onClick={() => { setSelectedQuestion(questionItem?.id) }}
                                        className={ questionItem?.id === selectedQuestion ? styles.selectedQuestion : null }>
                                        { questionItem?.question }
                                    </li>
                                    <div key={index}
                                         onClick={() => { setSelectedQuestion(questionItem?.id) }}
                                         className={ classes(styles.mobileAnswer, questionItem?.id === selectedQuestion ? styles.selectedQuestion : null) }>
                                        <h4>{ questionItem?.question }</h4>
                                        <div className={styles.answer}>{ questionItem?.answer }</div>
                                    </div>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.answerWrapper}>
                    { questionsAnswers?.map((questionItem, index) => {
                        return (
                            <div key={index}
                                 onClick={() => { setSelectedQuestion(questionItem?.id) }}
                                 className={ questionItem?.id === selectedQuestion ? styles.selectedQuestion : null }>
                                <h4>{ questionItem?.question }</h4>
                                <div className={styles.answer}>{ questionItem?.answer }</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}