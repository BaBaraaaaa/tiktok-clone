import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setUser } from '@/redux/slices/global';
import type { User } from '@/types/model';

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  minWidth: 180,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: 50,
  padding: theme.spacing(0.75, 2),
  fontWeight: 600,
  marginLeft: theme.spacing(1),
  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.grey[700], 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[700], 0.3),
  },
}));

const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.global.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(setUser(undefined));
    setAnchorEl(null);
  };

  const handleLogin = () => {
    // Giả lập đăng nhập, thay bằng logic thực tế
    // const mockUser: User = {
    //   userId: 'user123',
    //   username: 'testuser',
    //   email: 'test@example.com',
    //   passwordHash: 'hashed',
    //   // createdAt: new Date(),
    //   // updatedAt: new Date(),
    // };
    // dispatch(setUser(mockUser));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {user ? (
        <>
          <StyledIconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenMenu}>
            <AccountCircleIcon />
          </StyledIconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <StyledButton variant="outlined" onClick={handleLogin} startIcon={<AccountCircleIcon />}>
            Login
          </StyledButton>
        </>
      )}
    </Box>
  );
};

export default UserMenu;
