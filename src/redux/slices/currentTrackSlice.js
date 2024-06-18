import { createSlice } from '@reduxjs/toolkit';

const currentTrackSlice = createSlice({
  name: 'currentTrack',
  initialState: {
    track: null,
  },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.track = action.payload;
    },
  },
});

export const { setCurrentTrack } = currentTrackSlice.actions;
export default currentTrackSlice.reducer;
