import React from "react";
interface HeadingProps {
    children: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    color?: string;
    align?: "left" | "center" | "right";
}
declare const Heading: React.FC<HeadingProps>;
export default Heading;
