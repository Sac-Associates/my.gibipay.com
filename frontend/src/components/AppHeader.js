import { AppBar, Box, CssBaseline, IconButton, ThemeProvider, Toolbar, useTheme } from '@mui/material';
import MenuTowToneIcon from '@mui/icons-material/MenuTwoTone';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Badge } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator, Button } from '@aws-amplify/ui-react';

function AppHeader() {

    /** @type {import("@mui/material").SxProps} */
    const styles = {
        appBar: {
            bgcolor: 'neutral.main'
        },
        appLogo: {
            borderRadius: 2,
            width: 64,
            ml: 2,
            cursor: 'pointer'
        }
    }

    const theme = useTheme()

    function logOut() {
        signOut();
        navigate('/login');
      }

    const navigate = useNavigate();

    const { route, signOut, user } = useAuthenticator((context) => [
        context.route,
        context.signOut,
        context.user
      ]);

    if (route === 'authenticated') {
        return (
            <>
                <CssBaseline/>
                <ThemeProvider theme = {theme}>
                    <AppBar position='float' sx={styles.appBar}>
                        <Toolbar>
                            <IconButton onClick={() => console.log("Buton clicked")} color='secondary'>
                                <MenuTowToneIcon></MenuTowToneIcon>
                            </IconButton>
                            {/* <Box 
                                component='img'
                                sx={styles.appLogo}
                                src='../assets/me.jpeg'>

                            </Box> */}
                            <Box sx={{ flexGrow: 1 }}/>
                            <IconButton title='Notifications' color='secondary' onClick={() => console.log("Notification button clicked")}>
                                <Badge badgeContent={4} color='error'>
                                    <CircleNotificationsIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton title="Settings" onClick={() => console.log("Settings button clicked")} color='secondary'>
                                <SettingsIcon/>
                            </IconButton>
                            <IconButton title="Log out" onClick={() => logOut() } color='secondary'>
                                <ExitToAppIcon/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </>
        )
    }
}

export default AppHeader;