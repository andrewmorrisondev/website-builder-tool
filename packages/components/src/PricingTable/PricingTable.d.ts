import React from "react";
interface PricingOption {
    title: string;
    price: string;
    features: string[];
    buttonText: string;
    onButtonClick: () => void;
}
interface PricingTableProps {
    options: PricingOption[];
}
/**
 * PricingTable component displays a responsive grid of pricing plans.
 * Each plan includes a title, price, list of features, and a call-to-action button.
 *
 * @param {PricingTableProps} props - The props for configuring the PricingTable component.
 * @returns {JSX.Element} The rendered PricingTable component.
 */
declare const PricingTable: React.FC<PricingTableProps>;
export default PricingTable;
