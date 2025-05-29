import { List } from '@mui/material';
import React from 'react';
import SidebarCard from '../SidebarCard';

interface SidebarMenuProps {
  open: boolean;
  items: any[];
}
const SidebarMenu = ({ open, items }: SidebarMenuProps) => {
  return (
    <List dense>
      {items.map((item, index) => (
        <SidebarCard key={index} open={open} icon={item.icon} text={item.text} selected={item.selected} notification={item.notification} />
      ))}
    </List>
  );
};

export default SidebarMenu;
