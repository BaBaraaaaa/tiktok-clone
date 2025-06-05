import type { User, Video } from '@/types/mock';
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
  businessInfoStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  videos: Video[]; // Fix: Use Video[] instead of { [key: string]: any[] }
  channels: User[]; // Fix: Use Channel[] instead of { [key: string]: any[] }
  searchHistory: SearchHistory[]; // Fix: Use SearchHistory[] instead of { [key: string]: any[] }
}
