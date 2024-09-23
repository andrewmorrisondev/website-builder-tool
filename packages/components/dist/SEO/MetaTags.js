import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Head from "next/head";
const MetaTags = ({ title = "Default Title", description = "Default description for the website.", keywords = "default, keywords, seo", image = "/default-image.png", url = "https://www.example.com", }) => {
    return (_jsxs(Head, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:image", content: image }), _jsx("meta", { property: "og:url", content: url }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" })] }));
};
export default MetaTags;
//# sourceMappingURL=MetaTags.js.map