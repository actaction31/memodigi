import React from 'react';
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import ContentItemLayout from "@/layouts/customer/ContentItemLayout";
const ContentItem = dynamic(() => import("@/components/views/content/ContentItem"));

export default function ContentPage() {

    const router = useRouter();
    const { contentUniqCode } = router.query;

    return (
        <ContentItemLayout>
            <ContentItem contentUniqCode={ contentUniqCode } />
        </ContentItemLayout>
    )
}