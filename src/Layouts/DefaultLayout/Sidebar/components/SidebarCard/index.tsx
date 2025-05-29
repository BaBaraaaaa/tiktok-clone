import { ListItemButton, ListItemText, Box, ListItem } from '@mui/material';
import * as React from 'react';
import { CustomListItemButton, CustomListItemIcon, CustomListItemText, NotificationDot } from '../..';


interface SidebarItemProps {
  open: boolean;
  icon: React.ReactNode;
  text?: string;
  selected?: boolean;
  notification?: boolean;
  children?: React.ReactNode;
}

const SidebarCard = ({ open, icon, text, selected, notification, children }: SidebarItemProps) => {
  return (
    <ListItem disablePadding>
      <CustomListItemButton open={open} selected={selected}>
        <CustomListItemIcon open={open}>{icon || children}</CustomListItemIcon>
        {text && <CustomListItemText open={open} primary={text} />}
        {notification && <NotificationDot open={open} />}
      </CustomListItemButton>
    </ListItem>
  );
};

export default SidebarCard;
function styled(ListItemIcon: any, arg1: { shouldForwardProp: (prop: any) => boolean }) {
  throw new Error('Function not implemented.');
}
