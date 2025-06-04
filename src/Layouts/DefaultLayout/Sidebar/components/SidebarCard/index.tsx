import { ListItem } from '@mui/material';
import * as React from 'react';
import { CustomListItemButton, CustomListItemIcon, CustomListItemText, NotificationDot } from '../..';

interface SidebarItemProps {
  open: boolean;
  icon: React.ReactNode;
  text?: string;
  selected?: boolean;
  notification?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const SidebarCard = ({ open, icon, text, selected, notification, children, onClick }: SidebarItemProps) => {
  return (
    <ListItem disablePadding>
      <CustomListItemButton open={open} selected={selected} onClick={onClick}>
        <CustomListItemIcon open={open}>{icon || children}</CustomListItemIcon>
        {text && <CustomListItemText open={open} primary={text} />}
        {notification && <NotificationDot open={open} />}
      </CustomListItemButton>
    </ListItem>
  );
};

export default SidebarCard;
