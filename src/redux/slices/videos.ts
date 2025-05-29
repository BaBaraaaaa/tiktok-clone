import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockVideos } from '../../mockDb/mockDb';
import type { Video } from '../../mockDb/mockDb';
interface VideoState {
  videos: Video[];
  currentVideo: Video | null;
}

const initialState: VideoState = {
  videos: mockVideos,
  currentVideo: null,
};

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setCurrentVideo: (state, action: PayloadAction<string>) => {
      state.currentVideo = state.videos.find((video) => video.id === action.payload) || null;
    },
    searchVideos: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.videos = mockVideos.filter((video) => video.title.toLowerCase().includes(query) || video.uploader.toLowerCase().includes(query));
    },
  },
});

export const { setCurrentVideo, searchVideos } = videoSlice.actions;
export default videoSlice.reducer;
