import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormInputs>();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log('Form Submitted', data);
    reset(); // Clears form after submission
  };

  return (
    <Stack
      spacing={3}
      alignItems="center"
      sx={{ width: '100%', px: isMobile ? 2 : 0 }}
    >
      <Typography variant="h4" fontWeight={700} textAlign="center">
        Contact Me
      </Typography>

      {/* Social Links - Stack for mobile, row for desktop */}
      <Stack
        direction={'row'}
        spacing={isMobile ? 1 : 2}
        justifyContent="center"
        width="100%"
        sx={{ maxWidth: 400 }}
      >
        <Tooltip title="Email">
          <IconButton component="a" href="mailto:you@example.com">
            <EmailIcon fontSize={isMobile ? 'medium' : 'large'} />
          </IconButton>
        </Tooltip>
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
      </Stack>

      {/* Contact Form - Adjust width for mobile */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: '100%',
          maxWidth: 500,
          px: isMobile ? 1 : 0,
        }}
      >
        <Stack spacing={2}>
          <TextField
            label="Name"
            {...register('name', { required: 'Name is required' })}
            fullWidth
            variant="outlined"
            size={isMobile ? 'small' : 'medium'}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            fullWidth
            variant="outlined"
            size={isMobile ? 'small' : 'medium'}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Message"
            {...register('message', { required: 'Message cannot be empty' })}
            fullWidth
            multiline
            rows={isMobile ? 3 : 4}
            variant="outlined"
            size={isMobile ? 'small' : 'medium'}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <Button
            type="submit"
            variant="contained"
            size={isMobile ? 'small' : 'large'}
            fullWidth
            sx={{ py: isMobile ? 1 : 1.5 }}
          >
            Send Message
          </Button>
          {isSubmitSuccessful && (
            <Alert severity="success">Message sent successfully!</Alert>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
