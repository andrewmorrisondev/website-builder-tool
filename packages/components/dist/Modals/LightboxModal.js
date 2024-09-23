// LightboxModal.tsx component
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
/**
 * LightboxModal component allows users to view images in a full-screen modal with navigation.
 *
 * @param {LightboxModalProps} props - The props for configuring the LightboxModal component.
 * @returns {JSX.Element} The rendered LightboxModal component.
 */
const LightboxModal = ({ images, open, initialIndex = 0, onClose, }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };
    return (_jsx(Dialog, { fullScreen: true, open: open, onClose: onClose, children: _jsxs(Box, { sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                position: "relative",
            }, children: [_jsx(Box, { component: "img", src: images[currentIndex].src, alt: images[currentIndex].alt, sx: { maxWidth: "100%", maxHeight: "100%" } }), _jsx(IconButton, { sx: { position: "absolute", top: 16, right: 16 }, onClick: onClose, children: _jsx(CloseIcon, {}) }), _jsx(IconButton, { sx: { position: "absolute", left: 16 }, onClick: handlePrev, children: "Prev" }), _jsx(IconButton, { sx: { position: "absolute", right: 16 }, onClick: handleNext, children: "Next" })] }) }));
};
export default LightboxModal;
//# sourceMappingURL=LightboxModal.js.map