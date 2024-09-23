import { ReactNode } from "react";
type SpeedDialMenuProps = {
    actions: {
        icon: ReactNode;
        name: string;
        onClick: () => void;
    }[];
};
declare const SpeedDialMenu: React.FC<SpeedDialMenuProps>;
export default SpeedDialMenu;
