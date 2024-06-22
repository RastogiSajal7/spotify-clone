import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentTrack: null,
    currentAlbum: null,
  },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setCurrentAlbum: (state, action) => {
      state.currentAlbum = action.payload;
    },
  },
});

export const { setCurrentTrack } = playerSlice.actions;
export const {setCurrentAlbum} = playerSlice.actions;
export default playerSlice.reducer;
