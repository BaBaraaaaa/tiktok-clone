import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  theme: 'light' | 'dark';
  isAuthenticated: boolean;
  user: { id: string; name: string; avatar: string } | null;
  history: string[]; // Lưu ID video đã xem
  globalSearch: string; // Tìm kiếm toàn cục
}
const initialState: GlobalState = {
  theme: 'light',
  isAuthenticated: false,
  user: null,
  history: [],
  globalSearch: '',
};
const globalSlice: any = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<{ id: string; name: string; avatar: string } | null>) => {
      state.user = action.payload;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      if (!state.history.includes(action.payload)) {
        state.history.unshift(action.payload);
        state.history = state.history.slice(0, 10); // Giới hạn 10 video
      }
    },
    setGlobalSearch: (state, action: PayloadAction<string>) => {
      state.globalSearch = action.payload;
    },
  },
});
export const { toggleTheme, setAuth, setUser, addToHistory, setGlobalSearch } = globalSlice.actions;
export default globalSlice.reducer;
