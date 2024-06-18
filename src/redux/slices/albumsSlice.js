import { createSlice } from '@reduxjs/toolkit';

const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    albums: [],
  },
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setAlbums } = albumsSlice.actions;
export default albumsSlice.reducer;
