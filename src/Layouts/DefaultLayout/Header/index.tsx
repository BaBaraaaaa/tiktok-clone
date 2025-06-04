import { AppBar, Box, Button, Fade, IconButton, InputBase, Menu, MenuItem, Paper, Popper, Stack, Toolbar, Typography } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { setGlobalSearch } from '@/redux/slices/global';
import { searchVideos } from '@/redux/slices/videos';
import { useAppDispatch, useAppSelector, type RootState } from '@/redux/store';
import type { HeaderProps } from '@/types/layout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { setTheme } from '@/redux/slices/global';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 4,
  backgroundColor: alpha(theme.palette.grey[100], 0.8),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.9),
  },
  '&:focus-within': {
    backgroundColor: alpha(theme.palette.grey[200], 0.9),
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
  color: theme.palette.text.primary, // set màu chữ theo theme
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&::placeholder': {
      color: alpha(theme.palette.text.primary, 0.5), // placeholder mờ hơn text
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
  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.grey[700], 0.2), // nền tối hơn một chút
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[700], 0.3),
  },
}));

const Header: React.FC<HeaderProps> = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  console.log(theme);
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector((state: RootState) => state.global);
  const [auth, setAuth] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
    setOpenPopper((prev) => !prev);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGlobalSearch(e.target.value));
  };

  const handleSearch = () => {
    dispatch(searchVideos(searchQuery));
  };
  const handleToggleTheme = () => {
    const current = theme.palette.mode; // từ useTheme()
    const next = current === 'dark' ? 'light' : current === 'light' ? 'custom' : 'dark';
    dispatch(setTheme(next));
    setOpenPopper(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (popperRef.current && !popperRef.current.contains(event.target as Node)) {
      setOpenPopper(false);
    }
  };
  useEffect(() => {
    if (openPopper) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openPopper]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Paper
      elevation={0}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar,
        minHeight: 64,
        display: 'flex',
        width: '100%',
        backgroundColor:'transparent', 
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ minHeight: 64, display: 'flex', width: '100%' }}>
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

        <RightSection sx={{ gap: 2 }}>
          <Stack spacing={2}>
            <StyledIconButton onClick={handleOpenPopper} sx={{ marginLeft: '20px' }}>
              <MoreVertIcon />
            </StyledIconButton>
          </Stack>
          <Box>
            {openPopper && anchorEl && (
              <Popper open={openPopper} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box ref={popperRef} sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                      <MenuItem onClick={handleToggleTheme}>Change Theme</MenuItem>
                    </Box>
                  </Fade>
                )}
              </Popper>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                <StyledButton variant="outlined" onClick={() => setAuth(true)} startIcon={<AccountCircleIcon />}>
                  Login
                </StyledButton>
              </>
            )}
          </Box>
        </RightSection>
      </Toolbar>
    </Paper>
  );
};

export default Header;
