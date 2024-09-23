var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
/**
 * InfoCard is a dynamic, theme-styled card component for displaying content such as
 * titles, subtitles, descriptions, images, and actions. It supports both elevation and
 * outlined variants, as well as custom actions.
 *
 * @param {InfoCardProps} props - The props used to configure the InfoCard component.
 * @returns {JSX.Element} The rendered InfoCard component.
 */
const InfoCard = (_a) => {
    var { title = "Default Title", subtitle, description, actions, variant = "elevation", image, imageAlt = "Card image", imageHeight = 200, fullWidth = false, sx = [] } = _a, props = __rest(_a, ["title", "subtitle", "description", "actions", "variant", "image", "imageAlt", "imageHeight", "fullWidth", "sx"]);
    const theme = useTheme();
    const cardStyles = Object.assign({ maxWidth: fullWidth ? "100%" : 345, boxShadow: variant === "elevation" ? theme.shadows[1] : "none", border: variant === "outlined" ? `1px solid ${theme.palette.divider}` : "none", borderRadius: theme.spacing(2), overflow: "hidden" }, sx);
    const imageStyles = {
        width: "100%",
        height: imageHeight,
        objectFit: "cover",
        display: image ? "block" : "none", // Hide if no image provided
    };
    return (_jsxs(Card, Object.assign({ sx: cardStyles }, props, { children: [image && (_jsx(Box, { component: "img", src: image, alt: imageAlt, sx: imageStyles })), _jsxs(CardContent, { children: [title && (_jsx(Typography, { variant: "h5", component: "div", gutterBottom: true, children: title })), subtitle && (_jsx(Typography, { variant: "subtitle1", color: "textSecondary", gutterBottom: true, children: subtitle })), description && (_jsx(Typography, { variant: "body2", color: "textSecondary", children: description }))] }), actions && _jsx(CardActions, { children: actions })] })));
};
export default InfoCard;
//# sourceMappingURL=InfoCard.js.map