import React from "react";
interface HeaderProps {
    title?: string;
    onActionClick?: () => void;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
