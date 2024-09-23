import { jsx as _jsx } from "react/jsx-runtime";
import { Box, useTheme } from "@mui/material";
import { ResponsiveGrid } from "../registry"; // Import your custom ResponsiveGrid
/**
 * ImageGallery component displays a responsive grid of images.
 *
 * It uses the custom ResponsiveGrid component for flexible layout
 * and adjusts based on screen size, allowing for varying column numbers at
 * different breakpoints.
 *
 * @param {ImageGalleryProps} props - The props for configuring the ImageGallery component.
 * @returns {JSX.Element} The rendered ImageGallery component.
 */
const ImageGallery = ({ images, spacing = 2, columns = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }, onClickImage, }) => {
    const theme = useTheme();
    return (_jsx(ResponsiveGrid, { spacing: spacing, columns: columns, children: images.map((image, index) => (_jsx(Box, { component: "img", src: image.src, alt: image.alt, sx: {
                width: "100%",
                height: "auto",
                borderRadius: theme.shape.borderRadius,
                cursor: "pointer", // Add cursor to indicate the image is clickable
            }, onClick: () => onClickImage(index) }, index))) }));
};
export default ImageGallery;
//# sourceMappingURL=ImageGallery.js.map