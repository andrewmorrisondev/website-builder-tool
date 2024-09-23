import React from "react";
interface ContainerProps {
    children: React.ReactNode;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}
declare const Container: React.FC<ContainerProps>;
export default Container;
