import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { NavMenu } from '../NavMenu/NavMenu';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => (
  <Stack spacing={3} sx={{ minHeight: '100vh' }}>
    <NavMenu />
    <Container component="main" sx={{ minWidth: '100%' }}>
      <Outlet />
    </Container>
    <Footer />
  </Stack>
);
