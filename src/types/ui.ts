export interface PropItem {
  icon?: React.ReactNode;
  text: string;
  selected?: boolean;
  notification?: boolean;
  name?: string;
  image?: string; // Thêm trường image
  color?: string;
  path: string;
}
export interface HeaderProps {
  open: boolean;
  handleDrawerToggle: () => void;
}
