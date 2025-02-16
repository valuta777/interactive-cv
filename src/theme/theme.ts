import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  spacing: 8, // Base spacing unit (1 = 8px)
  palette: {
    mode: 'dark', // Change this dynamically if needed
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  components: {},
});

// Make typography responsive
export const theme = responsiveFontSizes(baseTheme);
