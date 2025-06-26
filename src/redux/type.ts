import type { User, Video } from '@/types/model';
export type ThemeMode = 'dark' | 'light' | 'custom';
export interface SearchHistory {
  id: string;
  query: string;
  timestamp: string;
}
export interface GlobalState {
  theme: ThemeMode;
  globalSearch: string;
  history: string[];
  user?: User;
  videos: Video[]; 
  channels: User[];
  searchHistory: SearchHistory[];
}
