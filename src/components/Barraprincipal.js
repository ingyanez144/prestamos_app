import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {RedesSociales} from "./RedesSociales"

const pages = ['Moldes', 'Insumos', 'Rentas'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function ResponsiveAppBar({products}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#e0f7fa', // Por ejemplo, rojo
      },
      secondary: {
        main: '#212121', // Por ejemplo, verde
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <AppBar  color='secondary'> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <Avatar sx={{ width: 56, height: 56 }}>YACO</Avatar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenUserMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                autoFocus={true}
                key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{marginRight:"16px"}} style={{ position: 'relative', display: 'inline-block' }}>
          <AddShoppingCartIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="car"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </AddShoppingCartIcon>
            </Box>
            <Box sx={{fontSize:20}}>
            <Avatar
          variant="body1"
          sx={{fontSize:14, width:20,height:20, marginLeft:"-30px"}}
        >
          {products}
        </Avatar>
        </Box>
          <Box sx={{ maxWidth: { xs: 320, sm: 600 }}}>
          <Tabs value={value} onChange={handleChange} centered indicatorColor='primary'  variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile="true" sx={{marginRight:"50px"}}> 
            {pages.map((page) => (
              <Tab 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                label={page}
              >
                {page}
              </Tab>
            ))}
             </Tabs>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <RedesSociales />
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
