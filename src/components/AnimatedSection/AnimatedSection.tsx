import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      sx={{ width: '100%' }}
    >
      {children}
    </Box>
  );
};
