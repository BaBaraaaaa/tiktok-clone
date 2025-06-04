import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockPlaylists } from '@/mockDb/mockDb'; // Giả lập dữ liệu playlists
import type { Playlist } from '@/types/mock';

interface PlaylistsState {
  playlists: Playlist[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: PlaylistsState = {
  playlists: mockPlaylists,
  status: 'idle',
  error: undefined,
};

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    setPlaylists: (state, action: PayloadAction<Playlist[]>) => {
      state.playlists = action.payload;
      state.status = 'succeeded';
    },
    addPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlists.push(action.payload);
    },
    updatePlaylist: (state, action: PayloadAction<Playlist>) => {
      const index = state.playlists.findIndex((playlist) => playlist.playlistId === action.payload.playlistId);
      if (index !== -1) {
        state.playlists[index] = action.payload;
      }
    },
    addVideoToPlaylist: (state, action: PayloadAction<{ playlistId: string; videoId: string }>) => {
      const playlist = state.playlists.find((p) => p.playlistId === action.payload.playlistId);
      if (playlist && !playlist.videoIds.includes(action.payload.videoId)) {
        playlist.videoIds.push(action.payload.videoId);
      }
    },
    setPlaylistsStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setPlaylistsError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setPlaylists, addPlaylist, updatePlaylist, addVideoToPlaylist, setPlaylistsStatus, setPlaylistsError } = playlistsSlice.actions;
export default playlistsSlice.reducer;
