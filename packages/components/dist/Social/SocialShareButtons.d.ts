import React from "react";
interface SocialShareButtonsProps {
    platforms: {
        name: string;
        url: string;
        icon: React.ReactNode;
    }[];
    buttonSize?: "small" | "medium" | "large";
}
declare const SocialShareButtons: React.FC<SocialShareButtonsProps>;
export default SocialShareButtons;
