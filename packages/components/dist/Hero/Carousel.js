"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
/**
 * Carousel component to display a set of items with navigation controls.
 * Automatically cycles through items after a specified interval.
 *
 * @param {CarouselProps} props - Props for the Carousel component.
 * @returns {JSX.Element} The rendered Carousel component.
 *
 * @example
 * // Usage example:
 * <Carousel
 *   items={[<Component1 />, <Component2 />, <Component3 />]}
 *   interval={5000} // Optional: auto-slide every 5 seconds
 * />
 */
const Carousel = ({ items, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    // Automatically change slide every 'interval' milliseconds
    useEffect(() => {
        if (interval) {
            const slideTimer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, interval);
            return () => clearInterval(slideTimer);
        }
    }, [interval, items.length]);
    /**
     * Move to the next item in the carousel.
     * Cycles back to the first item if at the end.
     */
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
    /**
     * Move to the previous item in the carousel.
     * Cycles back to the last item if at the start.
     */
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
    };
    return (_jsxs(Box, { sx: {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px", // Customize as needed
        }, children: [_jsx(Box, { sx: {
                    display: "flex",
                    transition: theme.transitions.create("transform", {
                        duration: theme.transitions.duration.standard,
                    }),
                    // Adjust transform to center the active item
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${items.length * 100}%`, // Ensure all items fit in the flexbox
                }, children: items.map((item, index) => (_jsx(Box, { sx: {
                        minWidth: "100%", // Each item takes up full width of the container
                        flexShrink: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }, children: item }, index))) }), _jsx(IconButton, { onClick: handlePrev, sx: {
                    position: "absolute",
                    left: theme.spacing(2),
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.common.black,
                }, children: _jsx(ArrowBackIos, {}) }), _jsx(IconButton, { onClick: handleNext, sx: {
                    position: "absolute",
                    right: theme.spacing(2),
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.common.black,
                }, children: _jsx(ArrowForwardIos, {}) })] }));
};
export default Carousel;
//# sourceMappingURL=Carousel.js.map