import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import type { HeaderProps } from '@/types/ui';
import { useNavigate } from 'react-router-dom';

const LogoSection = ({ open, handleDrawerToggle }: HeaderProps) => {
  const navigate = useNavigate();
  const handleNavigateHome = () =>{
    navigate('');
  }
  return (
    <Box sx={{ flexShrink: 0, width: 150, display: 'flex', alignItems: 'center' }}>
      <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} edge="start" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" edge="start" aria-label="logo" onClick={handleNavigateHome}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube logo" style={{ width: '90px', height: '20px' }} />
      </IconButton>
    </Box>
  );
};

export default LogoSection;
