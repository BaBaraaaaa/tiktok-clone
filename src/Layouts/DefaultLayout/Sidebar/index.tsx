import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import type { SidebarProps } from '@/types/layout';
import type { PropItem } from '@/types/ui';
import SidebarSection from './components/SidebarSection';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const drawerWidthCollapsed = 60;

const SidebarContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  width: open ? drawerWidth : drawerWidthCollapsed,
  height: 'calc(100vh - 64px)',
  position: 'fixed',
  top: 64,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
}));

export const CustomListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  minWidth: open ? '40px' : '0px',
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    fontSize: open ? '1rem' : '1.25rem', // Icon lớn hơn khi thu gọn
  },
}));

export const CustomListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open, selected }) => ({
  padding: theme.spacing(1, open ? 2 : 0),
  display: 'flex',
  justifyContent: open ? 'flex-start' : 'center',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  ...(selected && {
    backgroundColor: theme.palette.grey[200],
  }),
}));

export const CustomListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  display: open ? 'block' : 'none',
  '& .MuiTypography-root': {
    fontSize: '0.875rem',
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export const NotificationDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  marginLeft: theme.spacing(1),
  display: open ? 'block' : 'none',
}));

export const ChannelAvatar = styled('img')(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
  objectFit: 'cover',
}));

export default function Sidebar({ open, handleDrawerToggle }: SidebarProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname || undefined;
  const menuItems: PropItem[] = [
    { icon: <HomeFilledIcon fontSize="small" />, text: 'Home', path: '/' },
    { icon: <AppShortcutIcon fontSize="small" />, text: 'Shorts', path: '/shorts' },
    { icon: <SubscriptionsIcon fontSize="small" />, text: 'Subscriptions', path: '/subscriptions' },
  ];

  const youItems = [
    { icon: <HistoryIcon fontSize="small" />, text: 'History', path: '/history' },
    { icon: <PlaylistAddIcon fontSize="small" />, text: 'Playlists', path: '/playlists' },
    { icon: <WatchLaterIcon fontSize="small" />, text: 'Watch later', path: '/watch-later' },
    { icon: <ThumbUpIcon fontSize="small" />, text: 'Liked videos', path: '/liked-videos' },
  ];

  const subscriptionItems = [
    { name: 'BroNub', image: 'https://via.placeholder.com/24', color: '#fff' },
    { name: 'Mạc Cơ Studio', image: 'https://via.placeholder.com/24', color: '#fff' },
    { name: 'CD Media - Why?', image: 'https://via.placeholder.com/24', color: '#000' },
    { name: 'Chuột Chanel', image: 'https://via.placeholder.com/24', color: '#fff' },
    { name: 'Dipesh Malvia', image: 'https://via.placeholder.com/24', color: '#fff' },
    { name: 'TrungQuanDev', image: 'https://via.placeholder.com/24', color: '#fff' },
  ];

  const exploreItems = [
    { icon: <WhatshotIcon fontSize="small" />, text: 'Trending' },
    { icon: <MusicNoteIcon fontSize="small" />, text: 'Music' },
    { icon: <SportsEsportsIcon fontSize="small" />, text: 'Gaming' },
    { icon: <NewspaperIcon fontSize="small" />, text: 'News' },
    { icon: <SportsSoccerIcon fontSize="small" />, text: 'Sports' },
  ];

  const moreFromYouTubeItems = [
    { icon: <YouTubeIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />, text: 'YouTube Premium' },
    { icon: <PlayCircleFilledIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />, text: 'YouTube Music' },
    { icon: <ChildCareIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />, text: 'YouTube Kids' },
  ];

  const settingsItems = [
    { icon: <DisplaySettingsIcon fontSize="small" />, text: 'Settings' },
    { icon: <ReportIcon fontSize="small" />, text: 'Report history' },
    { icon: <HelpIcon fontSize="small" />, text: 'Help' },
    { icon: <FeedbackIcon fontSize="small" />, text: 'Send feedback' },
  ];
  const handleNavigate = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <SidebarContainer open={open}>
      {/* Menu chính (luôn hiển thị, chỉ icon khi thu gọn) */}
      <List dense>
        {menuItems.map((item: PropItem, index: number) => {
          const isSelected = currentPath === item.path;
          return (
            <ListItem key={index} disablePadding>
              <CustomListItemButton open={open} selected={isSelected} onClick={() => handleNavigate(item.path)}>
                <CustomListItemIcon open={open}>{item.icon}</CustomListItemIcon>
                <CustomListItemText open={open} primary={item.text} />
                {item.notification && <NotificationDot open={open} />}
              </CustomListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Các mục bổ sung chỉ hiển thị khi mở rộng */}
      {open && (
        <>
          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />

          <SidebarSection open={open} title="You" items={youItems} showExpandIcon />

          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />
          <SidebarSection open={open} title="Subscriptions" items={subscriptionItems} showExpandIcon />

          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />

          <SidebarSection open={open} title="Explore" items={exploreItems} showExpandIcon />

          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />
          <SidebarSection open={open} title="More For You" items={moreFromYouTubeItems} showExpandIcon />

          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />
          <SidebarSection open={open} title="Settings" items={settingsItems} showExpandIcon />

          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />
        </>
      )}
    </SidebarContainer>
  );
}
