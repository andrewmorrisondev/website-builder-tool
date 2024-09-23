import React from "react";
interface SubheadingProps {
    children: React.ReactNode;
    variant?: "h4" | "h5" | "h6";
    color?: string;
    align?: "left" | "center" | "right";
}
declare const Subheading: React.FC<SubheadingProps>;
export default Subheading;
