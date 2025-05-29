import { mockVideos, mockChannels, mockSearchHistory } from '@/mockDb/mockDb';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { GlobalState, ThemeMode } from '../type';
import type { Channel, Video } from '@/types/mock';
import { v4 as uuidv4 } from 'uuid';

const initialState: GlobalState = {
  theme: 'dark',
  globalSearch: '',
  history: [],
  user: undefined,
  businessInfoStatus: 'idle',
  videos: mockVideos,
  channels: mockChannels,
  searchHistory: mockSearchHistory,
};
const globalSlice: any = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGlobalSearch: (state, action: PayloadAction<string>) => {
      state.globalSearch = action.payload;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    setBusinessInfoStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.businessInfoStatus = action.payload;
    },
    addSearchQuery: (state, action: PayloadAction<string>) => {
      const newHistory = {
        id: uuidv4(),
        query: action.payload,
        timestamp: new Date().toISOString(),
      };
      state.searchHistory.push(newHistory);
    },
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
    setChannels: (state, action: PayloadAction<Channel[]>) => {
      state.channels = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
  },
});
export const { toggleTheme, setAuth, setUser, addToHistory, setGlobalSearch, setTheme } = globalSlice.actions;
export default globalSlice.reducer;
