"use client";
import React, { useState, useEffect } from "react";
import { Box, Paper } from "@mui/material";

interface VideoEmbedProps {
  src: string;
  title: string;
  aspectRatio?: "16:9" | "4:3";
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  src,
  title,
  aspectRatio = "16:9",
}) => {
  const [showControls, setShowControls] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleMouseEnter = (): void => {
    setShowControls(true);
  };

  const handleMouseLeave = (): void => {
    setShowControls(false);
  };

  const handleTouchStart = (): void => {
    setShowControls((prev) => !prev);
  };

  if (!isHydrated) {
    // Return null or a skeleton loader while waiting for hydration
    return null;
  }

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
          paddingBottom: aspectRatio === "16:9" ? "56.25%" : "75%",
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
          src={`${src}?controls=${showControls ? "1" : "0"}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Paper>
  );
};

export default VideoEmbed;
