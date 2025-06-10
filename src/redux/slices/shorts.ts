import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockShorts } from '@/mockDb/mockDb'; // Giả lập dữ liệu shorts
import type { Video } from '@/types/model';

interface ShortsState {
  shorts: Video[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ShortsState = {
  shorts: mockShorts,
  status: 'idle',
  error: undefined,
};

const shortsSlice = createSlice({
  name: 'shorts',
  initialState,
  reducers: {
    setShorts: (state, action: PayloadAction<Video[]>) => {
      state.shorts = action.payload;
      state.status = 'succeeded';
    },
    addShort: (state, action: PayloadAction<Video>) => {
      state.shorts.push(action.payload);
    },
    setShortsStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setShortsError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setShorts, addShort, setShortsStatus, setShortsError } = shortsSlice.actions;
export default shortsSlice.reducer;
