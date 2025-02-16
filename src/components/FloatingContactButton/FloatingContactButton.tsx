import React from 'react';
import Fab from '@mui/material/Fab';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { animateScroll as scroll } from 'react-scroll';

export const FloatingContactButton: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScrollToContact = () => {
    scroll.scrollToBottom({ duration: 800, smooth: 'easeInOutQuad' });
  };

  return (
    <Fab
      color="primary"
      aria-label="contact"
      onClick={handleScrollToContact}
      sx={{
        position: 'fixed',
        bottom: isMobile ? 16 : 24,
        right: isMobile ? 16 : 24,
        zIndex: 1000,
      }}
    >
      <EmailIcon />
    </Fab>
  );
};
