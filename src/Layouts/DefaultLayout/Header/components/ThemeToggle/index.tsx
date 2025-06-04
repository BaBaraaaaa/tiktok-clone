import { useState, useRef, useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, IconButton, Popper, Fade, MenuItem, Stack } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setTheme } from '@/redux/slices/global';
import type { ThemeMode } from '@/redux/type';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.grey[700], 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[700], 0.3),
  },
}));

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.global.theme);
  const [openPopper, setOpenPopper] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const handleOpenPopper = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setOpenPopper((prev) => !prev);
  };

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = themeMode === 'dark' ? 'light' : themeMode === 'light' ? 'custom' : 'dark';
    dispatch(setTheme(nextTheme));
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openPopper]);

  return (
    <>
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
    </>
  );
};

export default ThemeToggle;
