import type { Video, Channel, SearchHistory } from '@/types/mock';
export type ThemeMode = 'dark' | 'light' | 'custom';
export interface GlobalState {
  theme: ThemeMode;
  globalSearch: string;
  history: string[];
  user?: { id: string; name: string };
  businessInfoStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  videos: Video[]; // Fix: Use Video[] instead of { [key: string]: any[] }
  channels: Channel[]; // Fix: Use Channel[] instead of { [key: string]: any[] }
  searchHistory: SearchHistory[]; // Fix: Use SearchHistory[] instead of { [key: string]: any[] }
}
