import { useNavigate, Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, ThemeProvider, Typography, useTheme } from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SettingsIcon from '@mui/icons-material/Settings';
import { Image } from '@mui/icons-material';

export default function SideNav () {

    /** @type {import("@mui/material").SxProps} */
    const styles = {
        logo: {
            width: '40%',
            height: '40%'
        }
    }

    const { route } = useAuthenticator((context) => [context.route]);
    const theme = useTheme()

    if (route === 'authenticated') {
        return (
            <>
                <ThemeProvider theme= {theme}>
                    <Sidebar style={{
                        height: '100%',
                        top: 'auto',
        
                    }}
                    breakPoint='md'
                    backgroundColor={theme.palette.neutral}
                    >
                        <Menu>
                            <MenuItem active component={<Link to="/dashboard" />} icon={<DashboardIcon></DashboardIcon>}> 
                                <Typography variant='body2'> Dashboard </Typography>
                            </MenuItem>
                            <MenuItem component={<Link to="/transactions" />} icon={<PointOfSaleIcon></PointOfSaleIcon>}> 
                                <Typography variant='body2'> Transactions </Typography>
                            </MenuItem>
                            <MenuItem component={<Link to="/marketplace" />} icon={<StorefrontIcon></StorefrontIcon>}> 
                                <Typography variant='body2'> Marketplace </Typography>
                            </MenuItem>
                            <MenuItem component={<Link to="/accounts" />} icon={<AccountBalanceIcon></AccountBalanceIcon>}> 
                                <Typography variant='body2'> Accounts </Typography>
                            </MenuItem>
                            <MenuItem component={<Link to="/bills" />} icon={<ReceiptIcon></ReceiptIcon>}> 
                                <Typography variant='body2'> Bills </Typography>
                            </MenuItem>
                            <MenuItem component={<Link to="/analytics" />} icon={<AutoGraphIcon></AutoGraphIcon>}> 
                                <Typography variant='body2'> Analytics </Typography>
                            </MenuItem>
                            <MenuItem component={<Link to="/settings" />} icon={<SettingsIcon></SettingsIcon>}> 
                                <Typography variant='body2'> Settings </Typography>
                            </MenuItem>
                        </Menu>
                    </Sidebar>
                </ThemeProvider>
            </>
        )
    }


    
}