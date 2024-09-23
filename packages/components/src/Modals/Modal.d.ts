import React from "react";
interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    fullScreenOnMobile?: boolean;
}
/**
 * Modal component provides a reusable dialog with customizable title, content,
 * and responsive sizing options for mobile and desktop.
 *
 * @param {ModalProps} props - The props for configuring the Modal component.
 * @returns {JSX.Element} The rendered Modal component.
 */
declare const Modal: React.FC<ModalProps>;
export default Modal;
