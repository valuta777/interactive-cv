import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-scroll';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

export const NavMenu: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Skills', to: 'skills' },
    // { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Typography variant="h6">Interactive CV</Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <SwipeableDrawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              onOpen={() => setDrawerOpen(true)}
            >
              <List sx={{ width: 250 }}>
                {menuItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.to}
                      smooth
                      duration={300}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </>
        ) : (
          // Desktop Menu: Show Buttons
          <Stack direction="row" spacing={2}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.to}
                smooth
                duration={300}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        )}
        <Stack direction="row" spacing={2}>
          <ThemeSwitcher />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
