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

const CustomListItemIcon = styled(ListItemIcon, {
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

const CustomListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open, selected }) => ({
  padding: theme.spacing(1, open ? 2 : 0),
  display: 'flex',
  justifyContent: open ? 'flex-start' : 'center',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
  ...(selected && {
    backgroundColor: theme.palette.grey[200],
  }),
}));

const CustomListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  display: open ? 'block' : 'none',
  '& .MuiTypography-root': {
    fontSize: '0.875rem',
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const NotificationDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  marginLeft: theme.spacing(1),
  display: open ? 'block' : 'none',
}));

const ChannelAvatar = styled('img')(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
  objectFit: 'cover',
}));

export default function Sidebar({ open, handleDrawerToggle }: SidebarProps) {
  const theme = useTheme();

  const menuItems: PropItem[] = [
    { icon: <HomeFilledIcon fontSize="small" />, text: 'Home', selected: true },
    { icon: <AppShortcutIcon fontSize="small" />, text: 'Shorts' },
    { icon: <SubscriptionsIcon fontSize="small" />, text: 'Subscriptions', notification: true },
  ];

  const youItems = [
    { icon: <HistoryIcon fontSize="small" />, text: 'History', selected: false },
    { icon: <PlaylistAddIcon fontSize="small" />, text: 'Playlists', selected: false },
    { icon: <WatchLaterIcon fontSize="small" />, text: 'Watch later', selected: false },
    { icon: <ThumbUpIcon fontSize="small" />, text: 'Liked videos', selected: false },
  ];

  const subscriptionItems = [
    { name: 'BroNub', image: 'https://via.placeholder.com/24', color: '#fff', selected: false },
    { name: 'Mạc Cơ Studio', image: 'https://via.placeholder.com/24', color: '#fff', selected: false },
    { name: 'CD Media - Why?', image: 'https://via.placeholder.com/24', color: '#000', selected: false, notification: true },
    { name: 'Chuột Chanel', image: 'https://via.placeholder.com/24', color: '#fff', selected: false },
    { name: 'Dipesh Malvia', image: 'https://via.placeholder.com/24', color: '#fff', selected: false, notification: true },
    { name: 'TrungQuanDev', image: 'https://via.placeholder.com/24', color: '#fff', selected: false, notification: true },
  ];

  const exploreItems = [
    { icon: <WhatshotIcon fontSize="small" />, text: 'Trending', selected: false },
    { icon: <MusicNoteIcon fontSize="small" />, text: 'Music', selected: false },
    { icon: <SportsEsportsIcon fontSize="small" />, text: 'Gaming', selected: false },
    { icon: <NewspaperIcon fontSize="small" />, text: 'News', selected: false },
    { icon: <SportsSoccerIcon fontSize="small" />, text: 'Sports', selected: false },
  ];

  const moreFromYouTubeItems = [
    { icon: <YouTubeIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />, text: 'YouTube Premium', selected: false },
    { icon: <PlayCircleFilledIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />, text: 'YouTube Music', selected: false },
    { icon: <ChildCareIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />, text: 'YouTube Kids', selected: false },
  ];

  const settingsItems = [
    { icon: <DisplaySettingsIcon fontSize="small" />, text: 'Settings', selected: false },
    { icon: <ReportIcon fontSize="small" />, text: 'Report history', selected: false },
    { icon: <HelpIcon fontSize="small" />, text: 'Help', selected: false },
    { icon: <FeedbackIcon fontSize="small" />, text: 'Send feedback', selected: false },
  ];

  return (
    <SidebarContainer open={open}>
      {/* Menu chính (luôn hiển thị, chỉ icon khi thu gọn) */}
      <List dense>
        {menuItems.map((item: PropItem, index: number) => (
          <ListItem key={index} disablePadding>
            <CustomListItemButton open={open} selected={item.selected}>
              <CustomListItemIcon open={open}>{item.icon}</CustomListItemIcon>
              <CustomListItemText open={open} primary={item.text} />
              {item.notification && <NotificationDot open={open} />}
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Các mục bổ sung chỉ hiển thị khi mở rộng */}
      {open && (
        <>
          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />

          <Box sx={{ padding: theme.spacing(1, 2) }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              You <ExpandMoreIcon fontSize="small" />
            </Typography>
          </Box>
          <List dense>
            {youItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <CustomListItemButton open={open} selected={item.selected || false}>
                  <CustomListItemIcon open={open}>{item.icon}</CustomListItemIcon>
                  <CustomListItemText open={open} primary={item.text} />
                </CustomListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />

          <Box sx={{ padding: theme.spacing(1, 2) }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Subscriptions
            </Typography>
          </Box>
          <List dense>
            {subscriptionItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <CustomListItemButton open={open} selected={item.selected || false}>
                  <CustomListItemIcon open={open}>
                    <ChannelAvatar src={item.image} style={{ backgroundColor: item.color }} />
                  </CustomListItemIcon>
                  <CustomListItemText open={open} primary={item.name} />
                  {item.notification && <NotificationDot open={open} />}
                </CustomListItemButton>
              </ListItem>
            ))}
          </List>

          <ListItem disablePadding>
            <CustomListItemButton open={open}>
              <CustomListItemIcon open={open}>
                <ExpandMoreIcon fontSize="small" />
              </CustomListItemIcon>
              <CustomListItemText open={open} primary="All subscriptions" />
            </CustomListItemButton>
          </ListItem>

          <Box sx={{ padding: theme.spacing(1, 2) }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Explore
            </Typography>
          </Box>
          <List dense>
            {exploreItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <CustomListItemButton open={open} selected={item.selected || false}>
                  <CustomListItemIcon open={open}>{item.icon}</CustomListItemIcon>
                  <CustomListItemText open={open} primary={item.text} />
                </CustomListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />

          <Box sx={{ padding: theme.spacing(1, 2) }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              More from YouTube
            </Typography>
          </Box>
          <List dense>
            {moreFromYouTubeItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <CustomListItemButton open={open} selected={item.selected || false}>
                  <CustomListItemIcon open={open}>{item.icon}</CustomListItemIcon>
                  <CustomListItemText open={open} primary={item.text} />
                </CustomListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ backgroundColor: theme.palette.grey[200] }} />

          <List dense>
            {settingsItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <CustomListItemButton open={open} selected={item.selected || false}>
                  <CustomListItemIcon open={open}>{item.icon}</CustomListItemIcon>
                  <CustomListItemText open={open} primary={item.text} />
                </CustomListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </SidebarContainer>
  );
}