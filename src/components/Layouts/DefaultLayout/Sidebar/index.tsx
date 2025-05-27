import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

const SidebarContainer = styled(Box)(() => ({
  width: '240px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}));
const CustomListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: '40px',
}));
const CustomListItemButton = styled(ListItemButton)(({ selected }) => ({
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#383838',
  },
}));
const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: '0.875rem',
    fontWeight: 'medium',
  },
}));

const NotificationDot = styled(Box)(({ theme }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '#3ea6ff',
  marginLeft: '8px',
}));
const ChannelAvatar = styled(Avatar )(() => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
}));
interface PropItem {
  icon: any;
  text: string;
  selected?: boolean;
  notification?: boolean;
}
function Sidebar() {
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
    { name: 'BroNub', color: '#fff', selected: false },
    { name: 'Mạc Cơ Studio', color: '#fff', selected: false },
    { name: 'CD Media - Why?', color: '#000', selected: false, notification: true },
    { name: 'Chuột Chanel', color: '#fff', selected: false },
    { name: 'Dipesh Malvia', color: '#fff', selected: false, notification: true },
    { name: 'TrungQuanDev', color: '#fff', selected: false, notification: true },
  ];
  const exploreItems = [
    { icon: <WhatshotIcon fontSize="small" />, text: 'Trending', selected: false },
    { icon: <MusicNoteIcon fontSize="small" />, text: 'Music', selected: false },
    { icon: <SportsEsportsIcon fontSize="small" />, text: 'Gaming', selected: false },
    { icon: <NewspaperIcon fontSize="small" />, text: 'News', selected: false },
    { icon: <SportsSoccerIcon fontSize="small" />, text: 'Sports', selected: false },
  ];
  // Phần More from YouTube
  const moreFromYouTubeItems = [
    { icon: <YouTubeIcon fontSize="small" sx={{ color: '#ff0000' }} />, text: 'YouTube Premium', selected: false },
    { icon: <PlayCircleFilledIcon fontSize="small" sx={{ color: '#ff0000' }} />, text: 'YouTube Music', selected: false },
    { icon: <ChildCareIcon fontSize="small" sx={{ color: '#ff0000' }} />, text: 'YouTube Kids', selected: false },
  ];

  // Phần Settings, Report history, Help, Send feedback
  const settingsItems = [
    { icon: <DisplaySettingsIcon fontSize="small" />, text: 'Settings', selected: false },
    { icon: <ReportIcon fontSize="small" />, text: 'Report history', selected: false },
    { icon: <HelpIcon fontSize="small" />, text: 'Help', selected: false },
    { icon: <FeedbackIcon fontSize="small" />, text: 'Send feedback', selected: false },
  ];
  return (
    <SidebarContainer>
      <List dense>
        {menuItems.map((item: PropItem, index: any) => (
          <ListItem key={index} disablePadding>
            <CustomListItemButton selected={item.selected}>
              <CustomListItemIcon>{item.icon}</CustomListItemIcon>
              <CustomListItemText primary={item.text} />
              <CustomListItemText>{item.notification && <NotificationDot />}</CustomListItemText>
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#383838' }} />

      {/* Phần You */}
      <Box sx={{ padding: '8px 16px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          You <ExpandMoreIcon fontSize="small" />
        </Typography>
      </Box>
      <List dense>
        {youItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <CustomListItemButton selected={item.selected || false}>
              <CustomListItemIcon>{item.icon}</CustomListItemIcon>
              <CustomListItemText primary={item.text} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: '#383838' }} />

      {/* Phần Subscriptions */}
      <Box sx={{ padding: '8px 16px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Subscriptions
        </Typography>
      </Box>
      <List dense>
        {subscriptionItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <CustomListItemButton selected={item.selected || false}>
              <CustomListItemIcon>
                <ChannelAvatar color={item.color} />
              </CustomListItemIcon>
              <CustomListItemText primary={item.name} />
              {item.notification && <NotificationDot />}
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Phần All subscriptions */}
      <ListItem disablePadding>
        <CustomListItemButton selected={false}>
          <CustomListItemIcon>
            <ExpandMoreIcon fontSize="small" />
          </CustomListItemIcon>
          <CustomListItemText primary="All subscriptions" />
        </CustomListItemButton>
      </ListItem>

      {/* Phần Explore */}
      <Box sx={{ padding: '8px 16px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Explore
        </Typography>
      </Box>
      <List dense>
        {exploreItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <CustomListItemButton selected={item.selected || false}>
              <CustomListItemIcon>{item.icon}</CustomListItemIcon>
              <CustomListItemText primary={item.text} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#383838' }} />
      {/* Phần More from YouTube */}
      <Box sx={{ padding: '8px 16px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
          More from YouTube
        </Typography>
      </Box>
      <List dense>
        {moreFromYouTubeItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <CustomListItemButton selected={item.selected || false}>
              <CustomListItemIcon>{item.icon}</CustomListItemIcon>
              <CustomListItemText primary={item.text} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: '#383838' }} />

      {/* Phần Settings, Report history, Help, Send feedback */}
      <List dense>
        {settingsItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <CustomListItemButton selected={item.selected || false}>
              <CustomListItemIcon>{item.icon}</CustomListItemIcon>
              <CustomListItemText primary={item.text} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
}

export default Sidebar;
