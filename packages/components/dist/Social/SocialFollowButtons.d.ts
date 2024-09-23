import React from "react";
interface SocialFollowButtonsProps {
    platforms: {
        name: string;
        url: string;
        icon: React.ReactNode;
    }[];
    buttonColor?: string;
    size?: "small" | "medium" | "large";
}
declare const SocialFollowButtons: React.FC<SocialFollowButtonsProps>;
export default SocialFollowButtons;
