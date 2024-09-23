import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogTitle, DialogContent, IconButton, Box, useMediaQuery, useTheme, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
/**
 * Modal component provides a reusable dialog with customizable title, content,
 * and responsive sizing options for mobile and desktop.
 *
 * @param {ModalProps} props - The props for configuring the Modal component.
 * @returns {JSX.Element} The rendered Modal component.
 */
const Modal = ({ open, onClose, title, children, maxWidth = "md", fullScreenOnMobile = true, // By default, it will go fullscreen on mobile
 }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects if the screen is mobile-sized
    return (_jsxs(Dialog, { open: open, onClose: onClose, fullScreen: fullScreenOnMobile && isMobile, maxWidth: maxWidth, fullWidth: !isMobile, children: [_jsxs(DialogTitle, { children: [title, _jsx(IconButton, { "aria-label": "close", onClick: onClose, sx: {
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }, children: _jsx(CloseIcon, {}) })] }), _jsx(DialogContent, { children: _jsx(Box, { children: children }) })] }));
};
export default Modal;
//# sourceMappingURL=Modal.js.map