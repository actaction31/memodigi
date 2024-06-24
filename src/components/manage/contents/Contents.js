import React, { useEffect, useRef, useState } from 'react';
import dynamic from "next/dynamic";
import { handleLoadingComplete } from "@/helpers/loader";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getContentPath } from "@/helpers";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import SectionTitle from "@/components/sectionTitle/SectionTitle";
import SecretCodeSection from "@/components/secretCodeSection/SecretCodeSection";
import Router from "next/router";
import * as Icons from '@fortawesome/free-solid-svg-icons';

const CityInfo = dynamic(() => import("@/components/views/account/cityInfo/CityInfo"));
const ContentItem = dynamic(() => import("@/components/manage/contents/ContentItem"));
const ContentItemEdit = dynamic(() => import("@/components/manage/contents/contentItemEdit/ContentItemEdit"));

import { USER_CONTENT_TYPES } from "@/constants";

import styles from './Contents.module.css';

export default function Contents({ accountUniqCode }) {

    const { accountQuery } = useAppContext();

    const account = accountQuery?.data;
    const accountRefetch = accountQuery?.refetch;

    const [ name, setName ] = useState("");
    const [ selectedItem, setSelectedItem ] = useState(null);

    const [ isUploading, setIsUploading ] = useState(false);
    const inputFileRef = useRef( null );

    // const handleFileInput = (e) => {
    //     // handle validations
    //     const file = e.target.files[0];
    //     if (file.size > 1024)
    //         onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    //     else onFileSelectSuccess(file);
    // };

    const {
        max_photos_count: photosLimit,
        max_video_count: videLimit,
        max_audio_count: audioLimit,
    } = account?.active_subscription || {};

    const limitContentCount = (photosLimit || 0) + (videLimit || 0) + (audioLimit || 0);

    const selectContentFile = (file) => {
        uploadFile(file);
    }

    const uploadFile = (file) => {
        if (!file) {
            alert('Please select the file');
            return false;
        }
        setIsUploading(true);
        const formData = new FormData();
        formData.append( 'file', file, file.name );
        //formData.append( 'test_name_param', 'name for test');
        callApiAction({ action: 'saveContent', urlParams: { accountUniqCode: accountUniqCode }, data: formData }).then(response => {
            accountRefetch?.();
        }).catch(error => {
            console.log('error', error);
            alert(error?.response?.data?.message || error?.message || "Something went wrong. Please try again");
        }).finally(() => {
            setIsUploading(false);
            formData.delete('file');
            inputFileRef.current.value = '';
        })
    }

    const items = account?.contents?.map(item => {
        switch(item.content_type) {
            case USER_CONTENT_TYPES.photo:
                return {
                    original: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                    thumbnail: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/150' }),
                    itemData: item,
                }
            case USER_CONTENT_TYPES.video:
                return {
                    original: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                    thumbnail: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/150' }),
                    itemData: item,
                }
            case USER_CONTENT_TYPES.audio:
                return {
                    original: '/placeholders/audio-2.png',
                    thumbnail: '/placeholders/audio.jpg',
                    itemData: item,
                }
        }
    });

    const handleLogoClick = () => {
        console.log('handleLogoClick');
    }

    const handleAddContentButton = () => {
        inputFileRef.current.click();
    }

    useEffect(() => {
        if (!account?.contents?.length) {
            handleLoadingComplete();
        }
    }, [ ])

    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                Upload your memories
            </div>

            <div className={styles.items}>
                {
                    items?.map((item, index) => {
                        return (
                            <ContentItem accountUniqCode={ accountUniqCode }
                                         contentItem={item}
                                         key={index}
                                         callBack={ () => { accountRefetch?.() } }
                                         selectedItem={ selectedItem }
                                         setSelectedItem={ setSelectedItem } />
                        )
                    })
                }

                { items?.length < limitContentCount ?
                    <div className={styles.contentWrapper} onClick={ () => { !isUploading && handleAddContentButton() } }>
                        <div className={styles.content}>
                            <input name="file-upload-field"
                                   type="file"
                                   className={styles.fileUploadWrapper}
                                   ref={inputFileRef}
                                   onChange={(e) => selectContentFile(e.target.files[0])} />
                            { isUploading ?
                                <span className={styles.loader} /> :
                                <FontAwesomeIcon icon={Icons.faPlusCircle} className={styles.addIcon}/>
                            }
                        </div>
                    </div> : null
                }

            </div>

            <div>
                <ContentItemEdit contentItem={ selectedItem?.itemData }
                                 callBack={ () => { accountRefetch?.() } } />
            </div>


            {/*<form onSubmit={ submit }>*/}

            {/*    <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />*/}

            {/*    /!*{selectedFile ? (*!/*/}
            {/*    /!*    <div>*!/*/}
            {/*    /!*        /!*<p>Filename: { selectedFile.name }</p>*!/*!/*/}
            {/*    /!*        /!*<p>Filetype: { selectedFile.type }</p>*!/*!/*/}
            {/*    /!*        /!*<p>Size in bytes: { selectedFile.size }</p>*!/*!/*/}
            {/*    /!*        /!*<p>*!/*!/*/}
            {/*    /!*        /!*    lastModifiedDate:{' '}*!/*!/*/}
            {/*    /!*        /!*    { selectedFile.lastModifiedDate.toLocaleDateString() }*!/*!/*/}
            {/*    /!*        /!*</p>*!/*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*) : (*!/*/}
            {/*    /!*    <p>Select a file to show details</p>*!/*/}
            {/*    /!*)}*!/*/}

            {/*    <button type={'submit'}>Submit</button>*/}
            {/*</form>*/}


        </div>
    )
}