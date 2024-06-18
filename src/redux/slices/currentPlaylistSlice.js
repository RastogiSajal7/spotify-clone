import { createSlice } from '@reduxjs/toolkit';

const currentPlaylistSlice = createSlice({
  name: 'currentPlaylist',
  initialState: {
    playlist: null,
    tracks: [],
  },
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.playlist = action.payload.playlist;
      state.tracks = action.payload.tracks;
    },
  },
});

export const { setCurrentPlaylist } = currentPlaylistSlice.actions;
export default currentPlaylistSlice.reducer;
