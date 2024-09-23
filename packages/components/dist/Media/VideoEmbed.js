"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Paper } from "@mui/material";
/**
 * VideoEmbed component provides a simple and responsive way to embed videos
 * from external sources, maintaining their aspect ratio and making sure they
 * adapt to different screen sizes.
 *
 * The component is wrapped in a MUI Paper component for a material-like feel.
 */
const VideoEmbed = ({ src, title, aspectRatio = "16:9", }) => {
    const [showControls, setShowControls] = useState(false);
    // Toggle controls on hover (for desktop) or on tap (for mobile)
    const handleMouseEnter = () => {
        setShowControls(true);
    };
    const handleMouseLeave = () => {
        setShowControls(false);
    };
    const handleTouchStart = () => {
        setShowControls((prev) => !prev); // Toggle controls on touch (mobile)
    };
    return (_jsx(Paper, { elevation: 3, sx: { overflow: "hidden" }, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onTouchStart: handleTouchStart, children: _jsx(Box, { sx: {
                position: "relative",
                paddingBottom: aspectRatio === "16:9" ? "56.25%" : "75%", // 16:9 = 56.25%, 4:3 = 75%
                height: 0,
                overflow: "hidden",
                "& iframe": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                },
            }, children: _jsx("iframe", { src: showControls ? `${src}?controls=1` : `${src}?controls=0`, title: title, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }) }));
};
export default VideoEmbed;
//# sourceMappingURL=VideoEmbed.js.map