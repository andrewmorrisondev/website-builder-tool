import React from "react";
interface LightboxModalProps {
    images: {
        src: string;
        alt: string;
    }[];
    open: boolean;
    initialIndex?: number;
    onClose: () => void;
}
/**
 * LightboxModal component allows users to view images in a full-screen modal with navigation.
 *
 * @param {LightboxModalProps} props - The props for configuring the LightboxModal component.
 * @returns {JSX.Element} The rendered LightboxModal component.
 */
declare const LightboxModal: React.FC<LightboxModalProps>;
export default LightboxModal;
