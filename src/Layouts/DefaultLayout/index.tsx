import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, useTheme } from '@mui/material';

const drawerWidth = 240;
const drawerWidthCollapsed = 60;
const DefaultLayout: React.FC = () => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleDrawerToggle = () => {
    console.log('click');
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header open={openSidebar} handleDrawerToggle={handleDrawerToggle} />
        <Box sx={{ display: 'flex', flexGrow: 1, mt: theme.spacing(8) }}>
          <Sidebar open={openSidebar} handleDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: theme.spacing(3),
              backgroundColor: theme.palette.background.default,
              ml: openSidebar ? `${drawerWidth}px` : `${drawerWidthCollapsed}px`,
              transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
