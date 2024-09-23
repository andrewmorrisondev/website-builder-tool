import { jsx as _jsx } from "react/jsx-runtime";
import { Button, ButtonGroup } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const SocialShareButtons = ({ platforms, buttonSize = "medium", }) => {
    const theme = useTheme();
    return (_jsx(ButtonGroup, { variant: "contained", "aria-label": "social-share-buttons", sx: { mt: 2, mb: 2 }, children: platforms.map(({ name, url, icon }) => (_jsx(Button, { href: url, target: "_blank", rel: "noopener noreferrer", size: buttonSize, startIcon: icon, sx: {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                },
            }, children: name }, name))) }));
};
export default SocialShareButtons;
//# sourceMappingURL=SocialShareButtons.js.map