import React from "react";
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
declare const VideoEmbed: React.FC<VideoEmbedProps>;
export default VideoEmbed;
