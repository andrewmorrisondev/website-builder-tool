import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
/**
 * PricingTable component displays a responsive grid of pricing plans.
 * Each plan includes a title, price, list of features, and a call-to-action button.
 *
 * @param {PricingTableProps} props - The props for configuring the PricingTable component.
 * @returns {JSX.Element} The rendered PricingTable component.
 */
const PricingTable = ({ options }) => {
    return (_jsx(Grid, { container: true, spacing: 4, children: options.map((option, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: _jsxs(Paper, { elevation: 3, sx: { padding: 4 }, children: [_jsx(Typography, { variant: "h6", align: "center", children: option.title }), _jsx(Typography, { variant: "h4", align: "center", sx: { marginBottom: 2 }, children: option.price }), _jsx(Box, { component: "ul", sx: { padding: 0, listStyleType: "none" }, children: option.features.map((feature, idx) => (_jsx(Typography, { component: "li", variant: "body2", sx: { marginBottom: 1, textAlign: "center" }, children: feature }, idx))) }), _jsx(Button, { fullWidth: true, variant: "contained", color: "primary", onClick: option.onButtonClick, sx: { marginTop: 2 }, children: option.buttonText })] }) }, index))) }));
};
export default PricingTable;
//# sourceMappingURL=PricingTable.js.map