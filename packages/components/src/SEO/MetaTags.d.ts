import React from "react";
interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}
declare const MetaTags: React.FC<MetaTagsProps>;
export default MetaTags;
