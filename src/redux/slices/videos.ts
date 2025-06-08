import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Video } from '@/types/model';
import { createVideo, deleteVideo, fetchDashboard, updateVideo } from '@/services/dashboardServices';

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

// Thunk để lấy danh sách video
export const fetchListVideos = createAsyncThunk('/', async () =>{
  const response = await fetchDashboard();
  return response?.data?.data || [];
}) 
// Thunk để tạo video
export const createVideoThunk = createAsyncThunk<Video, Omit<Video, 'videoId' | 'createdAt' | 'updatedAt' | 'views'>, { rejectValue: string }>(
  'video/createVideo',
  async (videoData, { rejectWithValue }) => {
    try {
      const video = await createVideo(videoData);
      return video;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Lỗi khi tạo video');
    }
  },
);

// Thunk để cập nhật video
export const updateVideoThunk = createAsyncThunk<Video, { videoId: string; videoData: Partial<Video> }, { rejectValue: string }>(
  'video/updateVideo',
  async ({ videoId, videoData }, { rejectWithValue }) => {
    try {
      const video = await updateVideo(videoId, videoData);
      return video;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Lỗi khi cập nhật video');
    }
  },
);
// Thunk để xóa video
export const deleteVideoThunk = createAsyncThunk<string, string, { rejectValue: string }>('video/deleteVideo', async (videoId, { rejectWithValue }) => {
  try {
    await deleteVideo(videoId);
    return videoId;
  } catch (error: any) {
    return rejectWithValue(error.message || 'Lỗi khi xóa video');
  }
});

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    // Đặt danh sách video
    setVideos: (state, action: PayloadAction<any[]>) => {
      state.videos = action.payload;
      state.status = 'succeeded';
      state.error = undefined;
    },
    // Thêm video
    addVideo: (state, action: PayloadAction<any>) => {
      state.videos.push(action.payload);
      state.status = 'succeeded';
      state.error = undefined;
    },
    // Đặt video hiện tại
    setCurrentVideo: (state, action: PayloadAction<Video | undefined>) => {
      state.currentVideo = action.payload;
    },
    // Tìm kiếm video
    searchVideos: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.videos = state.videos.filter((video) => video.title.toLowerCase().includes(searchTerm));
      state.status = 'succeeded';
      state.error = undefined;
    },
    // Đặt trạng thái
    setVideosStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    // Đặt lỗi
    setVideosError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
      state.status = 'failed';
    },
  },

  extraReducers: (builder) => {
    builder
      // Xử lý fetchVideos
      .addCase(fetchListVideos.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchListVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
        state.error = undefined;
      })
      .addCase(fetchListVideos.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Lỗi khi tải danh sách video';
      })
      // Xử lý createVideo
      .addCase(createVideoThunk.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(createVideoThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos.push(action.payload);
        state.error = undefined;
      })
      .addCase(createVideoThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Lỗi không xác định';
      })
      // Xử lý updateVideo
      .addCase(updateVideoThunk.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(updateVideoThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = state.videos.map((video) => (video.videoId === action.payload.videoId ? action.payload : video));
        state.error = undefined;
      })
      .addCase(updateVideoThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Lỗi không xác định';
      })
      // Xử lý deleteVideo
      .addCase(deleteVideoThunk.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(deleteVideoThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = state.videos.filter((video) => video.videoId !== action.payload);
        state.error = undefined;
      })
      .addCase(deleteVideoThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Lỗi không xác định';
      });
  },
});

export const { setVideos, addVideo, setCurrentVideo, searchVideos, setVideosStatus, setVideosError } = videosSlice.actions;
export default videosSlice.reducer;
