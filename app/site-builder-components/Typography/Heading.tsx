// Heading.tsx component
import React from 'react';
import { Typography, useTheme } from '@mui/material';

interface HeadingProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  align?: 'left' | 'center' | 'right';
}

const Heading: React.FC<HeadingProps> = ({
  children,
  variant = 'h1',
  color,
  align = 'left',
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant={variant}
      style={{ color: color || theme.palette.text.primary }}
      align={align}
      component="div"
    >
      {children}
    </Typography>
  );
};

export default Heading;
