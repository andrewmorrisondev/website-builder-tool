import React from "react";
interface ParagraphProps {
    children: React.ReactNode;
    color?: string;
    align?: "left" | "center" | "right";
}
declare const Paragraph: React.FC<ParagraphProps>;
export default Paragraph;
