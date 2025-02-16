import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { aboutMe } from 'data/aboutMe';

export const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      textAlign: 'center',
      backgroundColor: 'background.paper',
      color: 'text.primary',
    }}
  >
    <Stack gap={0.5}>
      <Typography variant="caption">© 2025 Interactive CV</Typography>
      <Typography variant="caption">Made with ♥️ by {aboutMe.name}</Typography>
    </Stack>
  </Box>
);
