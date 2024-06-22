import { createSlice } from '@reduxjs/toolkit';
import { getFeaturedPlaylists, getNewReleases, getCategories } from '../../utils/api.js';

const initialState = {
  featuredPlaylists: [],
  newReleases: [],
  categories: [],
  loading: false,
  error: null,
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    fetchDiscoverStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDiscoverSuccess: (state, action) => {
      state.featuredPlaylists = action.payload.featuredPlaylists;
      state.newReleases = action.payload.newReleases;
      state.categories = action.payload.categories;
      state.loading = false;
    },
    fetchDiscoverFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDiscoverStart, fetchDiscoverSuccess, fetchDiscoverFailure } = discoverSlice.actions;

export const fetchDiscoverData = (accessToken) => async (dispatch) => {
  dispatch(fetchDiscoverStart());
  try {
    const [featuredPlaylists, newReleases, categories] = await Promise.all([
      getFeaturedPlaylists(accessToken),
      getNewReleases(accessToken),
      getCategories(accessToken),
    ]);
    dispatch(
      fetchDiscoverSuccess({
        featuredPlaylists,
        newReleases,
        categories,
      })
    );
  } catch (error) {
    dispatch(fetchDiscoverFailure(error.message));
  }
};

export default discoverSlice.reducer;
