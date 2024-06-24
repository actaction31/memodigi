import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { classes, getContentPath } from "@/helpers";
import { handleLoadingComplete } from "@/helpers/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import * as Icons from "@fortawesome/free-solid-svg-icons";

import dynamic from "next/dynamic";
const ContentItem = dynamic(() => import("@/components/manage/contentEdit/ContentItem"));

import { USER_CONTENT_TYPES } from "@/constants";

import styles from './DirectUpload.module.css';

export default function DirectUpload({ accountUniqCode, callback }) {
    const { accountQuery } = useAppContext();

    const [ selectedItem, setSelectedItem ] = useState(null);
    const [ isUploading, setIsUploading ] = useState(false);
    const [ uploadingTasks, setUploadingTasks ] = useState([]);
    const [ previewSrc, setPreviewSrc ] = useState({});

    const [ isPolling, setPolling ] = useState(false);
    const [ trigger, setTrigger ] = useState(0);
    const inputFileRef = useRef( null );

    const accountRefetch = accountQuery?.refetch;
    const account = accountQuery?.data;

    useEffect(() => {
        if (!account?.contents?.length) {
            handleLoadingComplete();
        }
    }, [ ])

    const checkUploadingStatus = () => {
        callApiAction( { action: 'createContentStatus', urlParams: { accountUniqCode: accountUniqCode } } )
            .then( response => {
                if ( response?.data?.tasks?.length === 0 ) {
                    setPolling(false);
                }
                setUploadingTasks( response?.data?.tasks || [] );
            } )
    }

    useEffect(() => {
        if (isPolling) {
            const interval = setInterval( () => {
                checkUploadingStatus();
            }, 5000 );

            return () => {
                clearInterval( interval );
            };
        }
    }, [ isPolling, trigger ]);

    useEffect(() => {
        accountRefetch?.();
    }, [ uploadingTasks ])

    if (!account) {
        return null;
    }

    const fileSelectedHandler = ({ taskId, file }) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            if (taskId) {
                setPreviewSrc( ( prev ) => ( { ...prev, [ taskId ]: fileReader.result } ) );
            }
        };
        if(file){
            fileReader.readAsDataURL(file);
        }
    };

    const {
        max_photos_count: photosLimit,
        max_video_count: videLimit,
        max_audio_count: audioLimit,
    } = account?.active_subscription || {} //contentsQuery?.data?.active_subscription || {};

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

        callApiAction({ action: 'createContent', urlParams: { accountUniqCode: accountUniqCode }, data: formData }).then(response => {
            fileSelectedHandler({ taskId: response?.data?.task_id, file });
            setUploadingTasks(prev => [...prev, response]);
            setTrigger(trigger + 1);
            setPolling(true);
            checkUploadingStatus();
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
        if (!item) {
            return null;
        }
        switch (item.content_type) {
            case USER_CONTENT_TYPES.photo:
                return {
                    original: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                    thumbnail: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/300' }),
                    itemData: item,
                }
            case USER_CONTENT_TYPES.video:
                return {
                    original: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                    thumbnail: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/300' }),
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

    const handleAddContentButton = () => {
        inputFileRef.current.click();
    }

    return (
        <>
            <div className={styles.items}>
                { items?.length <= limitContentCount ?
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

                { items?.map((item, index) => {
                        return (
                            <ContentItem accountUniqCode={ accountUniqCode }
                                         contentItem={item}
                                         key={index}
                                         callBack={ () => {
                                             accountRefetch?.();
                                         } }
                                         selectedItem={ selectedItem }
                                         setSelectedItem={ setSelectedItem } />
                        )
                    })
                }

                { uploadingTasks?.map((uploadingTask, index) => (
                    <div className={styles.contentWrapper} key={index}>
                        <div className={classes(styles.content, styles.uploadPlaceholder)}>
                            { previewSrc?.[uploadingTask?.task_id] && (
                                <img src={previewSrc[uploadingTask?.task_id]} alt="Selected" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }} />
                            ) }
                            <span className={styles.loader} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}