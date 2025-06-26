// src/features/video/videoSlice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Video } from '@/types/model';
import { fetchDashboard } from '@/services/dashboardServices';

interface VideosState {
  videos: Video[];
  currentVideo?: Video;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: VideosState = {
  videos: [],
  currentVideo: undefined,
  status: 'idle',
  error: undefined,
};

// ✅ Thunk: Lấy danh sách video từ API
export const fetchListVideos = createAsyncThunk<Video[]>('videos/fetchList', async (_, { rejectWithValue }) => {
  try {
    const response = await fetchDashboard();
    console.log(response);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message || 'Lỗi khi tải danh sách video');
  }
});

// ✅ Slice
const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
      state.status = 'succeeded';
      state.error = undefined;
    },
    setCurrentVideo: (state, action: PayloadAction<Video | undefined>) => {
      state.currentVideo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListVideos.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchListVideos.fulfilled, (state, action) => {
        console.log('Fetched videos:', action.payload); // ✅ Check xem có data không
        state.status = 'succeeded';
        state.videos = action.payload;
        state.error = undefined;
      })
      .addCase(fetchListVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

// ✅ Export actions và reducer
export const { setVideos, setCurrentVideo } = videosSlice.actions;
export default videosSlice.reducer;
