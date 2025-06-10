import { createSlice } from '@reduxjs/toolkit';
import { loginWithGoogleThunk, logoutThunk } from './authThunks';
import type { User } from '@/types/model';
interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  error: string | null;
  token: string | null;
  loading: boolean;
}
export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    // Cập nhật thông tin user
    updateUser: (state, action: { payload: Partial<User> }) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload, updatedAt: new Date() };
      }
    },
  },
  extraReducers: (builder) => {
   builder
      // Xử lý login với Google
      .addCase(loginWithGoogleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginWithGoogleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Đăng nhập thất bại';
      })
      // Xử lý logout
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Đăng xuất thất bại';
      });
  },
});
// Xuất actions
export const { resetError, updateUser } = authSlice.actions;

export default authSlice.reducer;