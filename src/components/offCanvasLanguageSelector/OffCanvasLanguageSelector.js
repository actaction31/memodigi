import React from 'react';
import { changeLocale, classes } from "@/helpers";
import { useRouter } from "next/router";

import Select from 'react-select'

import { LANGUAGES_OPTIONS } from "@/constants/languageConstants";

import styles from './OffCanvasLanguageSelector.module.css';

export default function OffCanvasLanguageSelector() {
    const { locale, asPath, push } = useRouter();
    return (
        <ul className={styles.languages}>
            { LANGUAGES_OPTIONS.map((language, index) => (
                <li className={language?.value === locale ? styles.selectedLanguage : null} key={index}>
                    <span className={classes(`fi fi-${language.flagIconCode}`)}
                          onClick={() => { changeLocale(language?.value, push, asPath) }} />
                </li>
            ))}
            {/*<Select options={ LANGUAGES_OPTIONS }*/}
            {/*        onChange={ (option) => changeLocale(option?.value, push, asPath) }*/}
            {/*        value={ LANGUAGES_OPTIONS?.find(option => option.value === locale) }*/}
            {/*/>*/}
        </ul>
    )
}