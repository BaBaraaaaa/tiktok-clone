import { Box, Divider, List, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarCard from '../SidebarCard';
interface SidebarSectionProps {
  open: boolean;
  title?: string;
  items: any[]; // bạn có thể type cụ thể hơn tùy data bạn
  showExpandIcon?: boolean;
}
const SidebarSection = ({ open, title, items, showExpandIcon }: SidebarSectionProps) => {
  return (
    <>
      {open && title && (
        <Box sx={{ padding: (theme) => theme.spacing(1, 2) }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {title} {showExpandIcon && <ExpandMoreIcon fontSize="small" />}
          </Typography>
        </Box>
      )}

      <List dense>
        {items.map((item, index) => (
          <SidebarCard key={index} open={open} icon={item.icon} text={item.text || item.name} selected={item.selected} notification={item.notification}>
            {item.image && open && <img src={item.image} style={{ width: 24, height: 24, borderRadius: '50%' }} />}
          </SidebarCard>
        ))}
      </List>

      {open && <Divider sx={{ backgroundColor: (theme) => theme.palette.grey[200] }} />}
    </>
  );
};

export default SidebarSection;
