import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockChannels } from '@/mockDb/mockDb';
import type { User } from '@/types/model';

interface ChannelsState {
  channels: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ChannelsState = {
  channels: mockChannels,
  status: 'idle',
  error: undefined,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setChannels: (state, action: PayloadAction<User[]>) => {
      state.channels = action.payload;
      state.status = 'succeeded';
    },
    addChannel: (state, action: PayloadAction<User>) => {
      state.channels.push(action.payload);
    },
    updateChannel: (state, action: PayloadAction<User>) => {
      const index = state.channels.findIndex((channel) => channel.userId === action.payload.userId);
      if (index !== -1) {
        state.channels[index] = action.payload;
      }
    },
    setChannelsStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setChannelsError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setChannels, addChannel, updateChannel, setChannelsStatus, setChannelsError } = channelsSlice.actions;
export default channelsSlice.reducer;