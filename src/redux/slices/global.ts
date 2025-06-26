// src/redux/slices/global.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { User } from '@/types/model';
import type { GlobalState, SearchHistory, ThemeMode } from '../type';

const initialState: GlobalState = {
  theme: 'dark',
  globalSearch: '',
  history: [],
  user: undefined,
  searchHistory: [],
  videos: [],
  channels: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    // Cập nhật chủ đề
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },

    // Cập nhật người dùng
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },

    // Cập nhật chuỗi tìm kiếm
    setGlobalSearch: (state, action: PayloadAction<string>) => {
      state.globalSearch = action.payload;
    },

    // Thêm video vào lịch sử xem
    addToHistory: (state, action: PayloadAction<string>) => {
      const videoId = action.payload;
      const exists = state.history.includes(videoId);
      if (!exists) {
        state.history.unshift(videoId);
        // Giới hạn lịch sử (tối đa 100 video)
        if (state.history.length > 100) {
          state.history.pop();
        }
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },

    // Thêm vào lịch sử tìm kiếm
    addSearchQuery: (state, action: PayloadAction<string>) => {
      const query = action.payload.trim();
      if (!query) return;

      const exists = state.searchHistory.some((item) => item.query === query);
      if (!exists) {
        state.searchHistory.unshift({
          id: uuidv4(),
          query,
          timestamp: new Date().toISOString(),
        });
        // Giới hạn 50 mục
        if (state.searchHistory.length > 50) {
          state.searchHistory.pop();
        }
      }
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { setTheme, toggleTheme, setUser, setGlobalSearch, addToHistory, clearHistory, addSearchQuery, clearSearchHistory } = globalSlice.actions;

export default globalSlice.reducer;
