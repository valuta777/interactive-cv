import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProfileHeader: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{ textAlign: 'center', px: isMobile ? 2 : 0 }}
    >
      <Avatar
        alt="Your Name"
        src="/profile.jpg"
        sx={{ width: isMobile ? 80 : 120, height: isMobile ? 80 : 120 }}
      />
      <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight={700}>
        Your Name
      </Typography>
      <Typography variant={isMobile ? 'body2' : 'h6'} color="text.secondary">
        Software Engineer | Web Developer
      </Typography>
      <Stack direction="row" spacing={isMobile ? 1 : 2}>
        <Tooltip title="LinkedIn">
          <IconButton component="a" href="https://linkedin.com" target="_blank">
            <LinkedInIcon fontSize={isMobile ? 'medium' : 'large'} />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton component="a" href="https://github.com" target="_blank">
            <GitHubIcon fontSize={isMobile ? 'medium' : 'large'} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email">
          <IconButton component="a" href="mailto:you@example.com">
            <EmailIcon fontSize={isMobile ? 'medium' : 'large'} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};
