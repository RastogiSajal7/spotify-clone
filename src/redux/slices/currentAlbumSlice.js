import { createSlice } from '@reduxjs/toolkit';

const currentAlbumSlice = createSlice({
  name: 'currentAlbum',
  initialState: {
    album: null,
    tracks: [],
  },
  reducers: {
    setCurrentAlbum: (state, action) => {
      state.album = action.payload.album;
      state.tracks = action.payload.tracks;
    },
  },
});

export const { setCurrentAlbum } = currentAlbumSlice.actions;
export default currentAlbumSlice.reducer;
