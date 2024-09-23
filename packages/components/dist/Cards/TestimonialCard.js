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
import { Card, CardContent, Typography, Avatar, CardActions, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
/**
 * TestimonialCard is a highly customizable card component designed to display
 * a customer's testimonial, along with their name, title, and image. It supports
 * additional actions like buttons or links at the bottom of the card.
 *
 * @param {TestimonialCardProps} props - The props used to configure the TestimonialCard.
 * @returns {JSX.Element} The rendered TestimonialCard component.
 */
const TestimonialCard = (_a) => {
    var { testimonial, authorName, authorTitle, authorImage, imageAlt = "Author image", actions, sx = [], testimonialSx = [] } = _a, props = __rest(_a, ["testimonial", "authorName", "authorTitle", "authorImage", "imageAlt", "actions", "sx", "testimonialSx"]);
    const theme = useTheme();
    // Styles for the card, dynamically adapted from the theme
    const cardStyles = Object.assign({ maxWidth: 400, borderRadius: theme.spacing(2), boxShadow: theme.shadows[2], padding: theme.spacing(2) }, sx);
    const imageStyles = {
        width: 80,
        height: 80,
        borderRadius: "50%",
        marginBottom: theme.spacing(2),
    };
    return (_jsxs(Card, Object.assign({ sx: cardStyles }, props, { children: [_jsxs(CardContent, { children: [authorImage && (_jsx(Avatar, { src: authorImage, alt: imageAlt, sx: imageStyles })), _jsx(Typography, { variant: "body1", color: "textPrimary", gutterBottom: true, sx: testimonialSx, children: testimonial }), _jsx(Typography, { variant: "h6", component: "div", children: authorName }), authorTitle && (_jsx(Typography, { variant: "subtitle1", color: "textSecondary", children: authorTitle }))] }), actions && _jsx(CardActions, { children: actions })] })));
};
export default TestimonialCard;
//# sourceMappingURL=TestimonialCard.js.map