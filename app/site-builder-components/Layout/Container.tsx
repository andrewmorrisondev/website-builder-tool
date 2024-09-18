// Container.tsx component
// Container.tsx
import React from 'react';
import { Container as MUIContainer, useTheme } from '@mui/material';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth = 'lg' }) => {
  const theme = useTheme();

  return (
    <MUIContainer maxWidth={maxWidth} sx={{ padding: theme.spacing(3) }}>
      {children}
    </MUIContainer>
  );
};

export default Container;
