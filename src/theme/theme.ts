import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  spacing: 8, // Base spacing unit (1 = 8px)
  typography: {
    fontFamily: 'Source Code Pro, sans-serif',
  },
  colorSchemes: {
    dark: true,
  },
  components: {},
});

// Make typography responsive
export const theme = responsiveFontSizes(baseTheme);
