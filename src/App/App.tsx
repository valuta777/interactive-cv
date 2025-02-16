import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../Router/Router';
import { theme } from 'theme/theme';
import { GlobalStyles } from 'theme/globalStyles';
import { ScrollVisibility } from 'components/ScrollVisibility/ScrollVisibility';
import { AppQueryClientProvider } from 'providers/QueryClientProvider';
import { ParticlesBackground } from 'components/ParticlesBackground/ParticlesBackground.tsx';

export const App: React.FC = () => {
  return (
    <AppQueryClientProvider>
      <ThemeProvider theme={theme} noSsr>
        <CssBaseline />
        <GlobalStyles />
        <ScrollVisibility />
        <ParticlesBackground />
        <BrowserRouter basename="/interactive-cv">
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AppQueryClientProvider>
  );
};
