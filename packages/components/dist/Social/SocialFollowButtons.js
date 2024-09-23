import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const SocialFollowButtons = ({ platforms, buttonColor, size = "medium", }) => {
    const theme = useTheme();
    const defaultColor = buttonColor || theme.palette.secondary.main;
    return (_jsx(Box, { sx: { display: "flex", gap: 2 }, children: platforms.map(({ name, url, icon }) => (_jsx(IconButton, { href: url, target: "_blank", rel: "noopener noreferrer", size: size, sx: {
                color: defaultColor,
                "&:hover": {
                    color: theme.palette.secondary.dark,
                },
            }, children: icon }, name))) }));
};
export default SocialFollowButtons;
//# sourceMappingURL=SocialFollowButtons.js.map