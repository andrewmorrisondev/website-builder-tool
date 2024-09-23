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
 * ImageCard is a highly dynamic, theme-styled component that displays an image along with a title, subtitle, description, and optional actions.
 *
 * It is customizable with props like image source, alt text, title, subtitle, description, and actions.
 * The card can be styled using the MUI sx prop and can adapt to full-width behavior.
 *
 * @param {ImageCardProps} props - The props to configure the ImageCard.
 * @returns {JSX.Element} A dynamic image card component.
 */
const ImageCard = (_a) => {
    var { imageSrc, imageAlt = "Card image", title, subtitle, description, actions, imageHeight = 200, fullWidth = false, sx = [] } = _a, props = __rest(_a, ["imageSrc", "imageAlt", "title", "subtitle", "description", "actions", "imageHeight", "fullWidth", "sx"]);
    const theme = useTheme();
    // Styles for the card and image, dynamically adapting based on the props and theme
    const cardStyles = Object.assign({ maxWidth: fullWidth ? "100%" : 345, borderRadius: theme.spacing(2), boxShadow: theme.shadows[1], overflow: "hidden" }, sx);
    const imageStyles = {
        width: "100%",
        height: imageHeight,
        objectFit: "cover",
    };
    return (_jsxs(Card, Object.assign({ sx: cardStyles }, props, { children: [_jsx(Box, { component: "img", src: imageSrc, alt: imageAlt, sx: imageStyles }), _jsxs(CardContent, { children: [title && (_jsx(Typography, { variant: "h5", component: "div", gutterBottom: true, children: title })), subtitle && (_jsx(Typography, { variant: "subtitle1", color: "textSecondary", gutterBottom: true, children: subtitle })), description && (_jsx(Typography, { variant: "body2", color: "textSecondary", children: description }))] }), actions && _jsx(CardActions, { children: actions })] })));
};
export default ImageCard;
//# sourceMappingURL=ImageCard.js.map