import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { GlobalState, SearchHistory, ThemeMode } from '../type';
import type { User, Video } from '@/types/model';
import { v4 as uuidv4 } from 'uuid';

const initialState: GlobalState = {
  theme: 'dark',
  globalSearch: '',
  history: [],
  user: undefined,
  businessInfoStatus: 'idle',
  videos: [],
  channels: [],
  searchHistory: [],
};
const globalSlice: any = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // Cập nhật chuỗi tìm kiếm toàn cục
    setGlobalSearch: (state, action: PayloadAction<string>) => {
      state.globalSearch = action.payload;
    },

    // Thêm video vào lịch sử xem
    addToHistory: (state, action: PayloadAction<string>) => {
      // Chỉ thêm nếu videoId chưa có trong lịch sử để tránh trùng lặp
      if (!state.history.includes(action.payload)) {
        state.history.push(action.payload);
      }
    },

    // Xóa lịch sử xem
    clearHistory: (state) => {
      state.history = [];
    },

    // Cập nhật trạng thái tải thông tin
    setBusinessInfoStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.businessInfoStatus = action.payload;
    },

    // Thêm truy vấn tìm kiếm vào lịch sử
    addSearchQuery: (state, action: PayloadAction<string>) => {
      const newHistory: SearchHistory = {
        id: uuidv4(),
        query: action.payload,
        timestamp: new Date().toISOString(),
      };
      // Chỉ thêm nếu truy vấn chưa tồn tại hoặc giới hạn số lượng lịch sử
      if (!state.searchHistory.some((item) => item.query === action.payload)) {
        state.searchHistory.push(newHistory);
      }
      // Giới hạn lịch sử tìm kiếm (ví dụ: tối đa 50 mục)
      if (state.searchHistory.length > 50) {
        state.searchHistory.shift();
      }
    },

    // Xóa lịch sử tìm kiếm
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },

    // Cập nhật danh sách video
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },

    // Thêm một video mới
    addVideo: (state, action: PayloadAction<Video>) => {
      state.videos.push(action.payload);
    },

    // Cập nhật danh sách kênh
    setChannels: (state, action: PayloadAction<User[]>) => {
      state.channels = action.payload;
    },

    // Cập nhật thông tin người dùng
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },

    // Chuyển đổi chủ đề (theme)
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },

    // Toggle theme (light <-> dark)
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});
export const { toggleTheme, setAuth, setUser, addToHistory, setGlobalSearch, setTheme } = globalSlice.actions;
export default globalSlice.reducer;
