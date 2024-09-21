import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import SideNav from './SideNav';
import { Box, CssBaseline, ThemeProvider, Typography, useTheme } from '@mui/material';
import AppHeader from './AppHeader';

export default function Layout() {

  /** @type {import("@mui/material").SxProps} */
  const styles = {
    container: {
        display: 'flex',
        bgcolor: 'neutral.light',
        height: '100%'
    },
    mainSection: {
      p: 1,
      width: '100%',
      height: '100%',
      overflow: 'auto',
    }
  }

  const { route, signOut, user } = useAuthenticator((context) => [
    context.route,
    context.signOut,
    context.user
  ]);
  const navigate = useNavigate();

  const theme = useTheme();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppHeader/>
        <Box sx={styles.container}>
          <SideNav/>
          <Box component={'main'} sx={styles.mainSection}>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>

    </>
  );
}
