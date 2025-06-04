import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockVideos } from '@/mockDb/mockDb';
import type { Video } from '@/types/mock';

interface VideosState {
  videos: Video[];
  currentVideo?: Video;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: VideosState = {
  videos: mockVideos,
  currentVideo: undefined,
  status: 'idle',
  error: undefined,
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
      state.status = 'succeeded';
    },
    addVideo: (state, action: PayloadAction<Video>) => {
      state.videos.push(action.payload);
    },
    setCurrentVideo: (state, action: PayloadAction<Video | undefined>) => {
      state.currentVideo = action.payload;
    },
    searchVideos: (state, action: PayloadAction<string>) => {
      state.videos = mockVideos.filter((video) =>
        video.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
      state.status = 'succeeded';
    },
    setVideosStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setVideosError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setVideos, addVideo, setCurrentVideo, searchVideos, setVideosStatus, setVideosError } = videosSlice.actions;
export default videosSlice.reducer;