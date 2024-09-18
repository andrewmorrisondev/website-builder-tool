// PricingTable.tsx component
import React from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";

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
const PricingTable: React.FC<PricingTableProps> = ({ options }) => {
  return (
    <Grid container spacing={4}>
      {options.map((option, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography variant="h6" align="center">
              {option.title}
            </Typography>
            <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
              {option.price}
            </Typography>
            <Box component="ul" sx={{ padding: 0, listStyleType: "none" }}>
              {option.features.map((feature, idx) => (
                <Typography
                  component="li"
                  key={idx}
                  variant="body2"
                  sx={{ marginBottom: 1, textAlign: "center" }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={option.onButtonClick}
              sx={{ marginTop: 2 }}
            >
              {option.buttonText}
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default PricingTable;
