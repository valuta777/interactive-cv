import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button/Button';

interface StyledButtonProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  to,
  ...props
}) => {
  return (
    <Button
      component={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      variant="contained"
      to={to}
      onClick={onClick}
      sx={{ minWidth: 120 }}
      {...props}
    >
      {children}
    </Button>
  );
};
