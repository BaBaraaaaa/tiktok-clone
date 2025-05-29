import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Popper, Toolbar, Typography } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { useState, type ChangeEvent } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { setGlobalSearch } from '@/redux/slices/global';
import { searchVideos } from '@/redux/slices/videos';
import { useAppDispatch, useAppSelector, type RootState } from '@/redux/store';
import type { HeaderProps } from '@/types/layout';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 4,
  backgroundColor: alpha(theme.palette.grey[100], 0.8),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.9),
  },
  '&:focus-within': {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    outline: `1px solid ${theme.palette.primary.main}`,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&::placeholder': {
      color: alpha(theme.palette.common.black, 0.5),
      opacity: 0.8,
    },
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

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
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 50,
  color: theme.palette.common.white,
}));

const Header: React.FC<HeaderProps> = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { globalSearch: searchQuery } = useAppSelector((state: RootState) => state.global);
  const [auth, setAuth] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuth(false);
    setAnchorEl(null);
  };

  const handleOpenPopper = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setOpenPopper(true);
  };

  const handleClosePopper = () => {
    setOpenPopper(false);
    setAnchorEl(null);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGlobalSearch(e.target.value));
  };

  const handleSearch = () => {
    dispatch(searchVideos(searchQuery));
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          minHeight: 64,
          display: 'flex',
          width: '100%',
        }}
      >
        <Box sx={{ flexShrink: 0, width: 150 }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <IconButton size="large" edge="start" aria-label="menu">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="YouTube logo" style={{ width: '90px', height: '20px' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          <Search>
            <SearchIconWrapper>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search videos"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
            />
          </Search>
          <StyledIconButton onClick={handleSearch}>
            <SettingsVoiceIcon />
          </StyledIconButton>
        </Box>

        <RightSection>
          <StyledIconButton onClick={handleOpenPopper}>
            <MoreVertIcon />
          </StyledIconButton>
          {openPopper && anchorEl && (
            <Popper open={openPopper} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                <Typography>More options</Typography>
              </Box>
            </Popper>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {auth ? (
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
                <StyledButton variant="outlined" onClick={() => setAuth(true)}>
                  Login
                </StyledButton>
                <StyledButton variant="outlined">Register</StyledButton>
              </>
            )}
          </Box>
        </RightSection>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
