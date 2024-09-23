import { ReactNode } from "react";
type FloatingActionButtonProps = {
    icon: ReactNode;
    onClick: () => void;
};
declare const CustomFloatingActionButton: React.FC<FloatingActionButtonProps>;
export default CustomFloatingActionButton;
