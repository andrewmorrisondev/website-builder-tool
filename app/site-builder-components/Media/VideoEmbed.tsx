"use client";
import React, { useState } from "react";
import { Box, Paper } from "@mui/material";

/**
 * A responsive video embed component that maintains the correct aspect ratio
 * and ensures the video is fully responsive across screen sizes.
 *
 * @param {string} src - The URL of the video to embed (e.g., YouTube, Vimeo).
 * @param {string} title - Title for accessibility (describes the video content).
 * @param {"16:9" | "4:3"} [aspectRatio="16:9"] - The aspect ratio of the video, defaults to 16:9.
 *
 * @returns {JSX.Element} The rendered VideoEmbed component.
 */
interface VideoEmbedProps {
  /** URL of the video to be embedded */
  src: string;

  /** Title for accessibility (should describe the video content) */
  title: string;

  /** Aspect ratio of the video, defaults to "16:9" */
  aspectRatio?: "16:9" | "4:3";
}

/**
 * VideoEmbed component provides a simple and responsive way to embed videos
 * from external sources, maintaining their aspect ratio and making sure they
 * adapt to different screen sizes.
 *
 * The component is wrapped in a MUI Paper component for a material-like feel.
 */
const VideoEmbed: React.FC<VideoEmbedProps> = ({
  src,
  title,
  aspectRatio = "16:9",
}) => {
  const [showControls, setShowControls] = useState(false);

  // Toggle controls on hover (for desktop) or on tap (for mobile)
  const handleMouseEnter = (): void => {
    setShowControls(true);
  };

  const handleMouseLeave = (): void => {
    setShowControls(false);
  };

  const handleTouchStart = (): void => {
    setShowControls((prev) => !prev); // Toggle controls on touch (mobile)
  };

  return (
    <Paper
      elevation={3}
      sx={{ overflow: "hidden" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <Box
        sx={{
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
        }}
      >
        <iframe
          src={showControls ? `${src}?controls=1` : `${src}?controls=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Paper>
  );
};

export default VideoEmbed;
