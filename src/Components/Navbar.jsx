/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ContextGlobal } from './utils/global.context';
import ToogleButton from './ToogleButton';

const pages = ['Contact', 'Favs'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { state, dispatch } = useContext(ContextGlobal)

  const handleTheme = (currentMode) => {
      dispatch({type: currentMode})
  }

  return (
    <AppBar position="static" bgcolor={state.palette.primary.main} enableColorOnDark={true}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 5vw'}}>
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '4rem',
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            > 
              <Link to='/' style={{color: 'white'}}>
                <span style={{color: 'red'}}>D</span>H Odonto
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'flex', md: 'none', justifyContent: 'space-between' } }}>
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
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link to={`/${page}`} key={page}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{fontSize: '1.5rem', color: state.palette.mode === 'dark' ? '#fff' : '#000'}}>{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '2rem',
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to='/' style={{color: 'white'}}>
                <span style={{color: 'red'}}>D</span>H Odonto
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '30px' }}>
              {pages.map((page) => (
                <Link to={`/${page}`} key={page}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.5rem' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
              <ToogleButton onClick={() => handleTheme(state.palette.mode)}/>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;