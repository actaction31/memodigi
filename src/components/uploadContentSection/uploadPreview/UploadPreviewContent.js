import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from "react-query";

import { callApiAction } from "@/actions/apiActions";
import { handleLoadingComplete } from "@/helpers/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import * as Icons from "@fortawesome/free-solid-svg-icons";

import dynamic from "next/dynamic";
const ContentPreviewItem = dynamic(() => import("@/components/manage/contentEdit/ContentPreviewItem"));

import { USER_CONTENT_TYPES } from "@/constants";

import styles from './UploadPreviewContent.module.css';

export default function UploadPreviewContent({ accountUniqCode, isLimit, setIsLimit, callback }) {
    const [files, setFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const inputFileRef = useRef(null);
    const uploadFileIndex = useRef(0);

    const contentsQuery = useQuery({
        queryKey: ["account", accountUniqCode],
        queryFn: () => {
            return callApiAction({ action: 'accountView', urlParams: { accountUniqCode: accountUniqCode } }).then(response => {
                return response.data;
            })
        },
        staleTime: 60 * 1000,
        retry: 0,
        enabled: !!accountUniqCode,
    });

    const {
        max_photos_count: photosLimit,
    } = contentsQuery?.data?.active_subscription || {};
    const limitContentCount = (photosLimit || 0);

    const items = contentsQuery?.data?.contents?.map(item => {
        if (!item) {
            return [];
        }

        if ( item.content_type == USER_CONTENT_TYPES.photo ) {
            return item;
        }
    });

    const selectContentFile = (_files) => {
        for (let i = 0; i < _files.length; i++) {
            const _ele = {
                file: _files[i],
                progress: 0
            }
            setFiles(prev => [...prev, _ele]);
        }
    }

    const setProgress = (p) => {
        setFiles(prev => {
            let _files = [...prev];
            _files[uploadFileIndex.current].progress = p;
            return _files;
        })
    }

    const removeFile = (ind) => {
        let _files = [...files];
        _files.splice(ind, 1);
        setFiles(_files);
    }

    const uploadFile = async (_file) => {
        if(!isLimit.storage && !isLimit.count){
            const formData = new FormData();
            formData.append('file', _file, _file.name);
    
            try {
                setIsUploading(true);
                await callApiAction({ action: 'saveContent', urlParams: { accountUniqCode: accountUniqCode }, data: formData, setProgress: setProgress })
            } catch (error) {
                alert(error?.response?.data?.message || error?.message || "Something went wrong. Please try again");
            }
    
            setIsUploading(false);
            formData.delete('file');
            uploadFileIndex.current++;
        }
    }

    useEffect(() => {
        if (!contentsQuery?.data?.contents?.length) {
            handleLoadingComplete();
        }
    }, [])

    useEffect(() => {
        if (files.length > 0 && !isUploading)
            uploadFile(files[uploadFileIndex.current].file);
    }, [files.length])

    useEffect(() => {
        if (
            !isUploading && 
            !isLimit.count && 
            !isLimit.storage && 
            uploadFileIndex.current < files.length
        ) {
            uploadFile(files[uploadFileIndex.current].file);
        }
    }, [isUploading, isLimit])

    useEffect(() => {
        if(items){
            if(items.length + files.length > limitContentCount && !isLimit.count) {
                setIsLimit('count', true);
            }
            else if(items.length + files.length <= limitContentCount && isLimit.count) {
                setIsLimit('count', false);
            }
        }
    }, [items, files.length])

    return (
        <>
            <div className={styles.itemsContainer}>
                <div className={styles.items}>
                    {
                        files?.map((file, index) => {
                            return (
                                <ContentPreviewItem
                                    contentItem={file}
                                    key={index}
                                    index={index}
                                    callBack={(ind) => removeFile(ind)}
                                    selectedItem={selectedItem}
                                    setSelectedItem={setSelectedItem} />
                            )
                        })
                    }
                </div>
                {!isLimit.storage && !isLimit.count ?
                    <div className={styles.contentWrapper} onClick={() => { inputFileRef.current.click() }}>
                        <input name="file-upload-field"
                            type="file"
                            multiple
                            className={styles.fileUploadWrapper}
                            ref={inputFileRef}
                            onChange={(e) => selectContentFile(e.target.files)} />
                        Upload&nbsp;more
                    </div> :
                    <div className={styles.extendButton} onClick={() => { }}>
                        Extend&nbsp;storage
                    </div>
                }
            </div>
        </>
    )
}