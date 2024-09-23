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
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
/**
 * CTAButton is a customizable call-to-action button component that adapts
 * its styling from the theme. It supports variants, colors, sizes, tooltips,
 * and full-width options. The button's color is dynamically retrieved from the theme.
 *
 * @param {CTAButtonProps} props - The props used to configure the CTAButton.
 * @returns {JSX.Element} The rendered CTAButton component.
 */
const CTAButton = (_a) => {
    var { variant = "contained", color = "primary", size = "medium", label = "Click Me", fullWidth = false, onClick, tooltip, icon } = _a, props = __rest(_a, ["variant", "color", "size", "label", "fullWidth", "onClick", "tooltip", "icon"]);
    const theme = useTheme();
    /**
     * Helper function to safely get the color from the theme.
     * Falls back to the primary color if the specified color is not found.
     * @returns {string} The resolved color from the theme.
     */
    const getColorFromTheme = () => {
        if (color === "inherit") {
            return "inherit";
        }
        const themeColor = theme.palette[color];
        if (themeColor && themeColor.main) {
            return themeColor.main;
        }
        return theme.palette.primary.main;
    };
    // Create the button element with its styles and props
    const buttonElement = (_jsx(Button, Object.assign({ variant: variant, size: size, fullWidth: fullWidth, onClick: onClick, startIcon: icon, sx: {
            borderRadius: theme.spacing(2),
            padding: theme.spacing(2, 4),
            textTransform: "none",
            fontSize: theme.typography.button.fontSize,
            fontWeight: theme.typography.button.fontWeight,
            color: variant === "contained"
                ? theme.palette.common.white
                : getColorFromTheme(),
            backgroundColor: variant === "contained" ? getColorFromTheme() : "transparent",
            boxShadow: variant === "contained" ? theme.shadows[1] : "none",
            "&:hover": {
                backgroundColor: variant === "contained"
                    ? theme.palette.action.hover
                    : theme.palette.action.selected,
            },
        } }, props, { children: label })));
    // Wrap the button in a tooltip if tooltip text is provided
    return tooltip ? (_jsx(Tooltip, { title: tooltip, children: buttonElement })) : (buttonElement);
};
export default CTAButton;
//# sourceMappingURL=CTAButton.js.map