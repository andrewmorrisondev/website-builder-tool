// Subheading.tsx component
import React from 'react';
import { Typography, useTheme } from '@mui/material';

interface SubheadingProps {
  children: React.ReactNode;
  variant?: 'h4' | 'h5' | 'h6';
  color?: string;
  align?: 'left' | 'center' | 'right';
}

const Subheading: React.FC<SubheadingProps> = ({
  children,
  variant = 'h4',
  color,
  align = 'left',
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant={variant}
      style={{ color: color || theme.palette.text.secondary }}
      align={align}
      component="div"
    >
      {children}
    </Typography>
  );
};

export default Subheading;
