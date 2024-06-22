import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('User Profile:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

const getUserPlaylists = async (token) => {
  try {
    let playlists = [];
    let url = `${BASE_URL}/me/playlists`;
    while (url) {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      playlists = [...playlists, ...response.data.items];
      url = response.data.next; 
    }
    console.log('Playlists:', playlists);
    return playlists;
  } catch (error) {
    console.error('Error fetching playlists:', error);
  }
};

const getPlaylistTracks = async (token, playlistId) => {
  try {
    const response = await axios.get(`${BASE_URL}/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Playlist Tracks:', response.data.items);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching playlist tracks:', error);
    return [];
  }
};

const getNewReleases = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/browse/new-releases`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.albums.items;
  } catch (error) {
    console.error('Error fetching new releases:', error);
    return [];
  }
};

const getAlbumTracks = async (token, albumId) => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/${albumId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching album tracks:', error);
    return [];
  }
};

const searchTracks = async (token, query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: 'track',
      },
    });
    console.log('Search Results:', response.data.tracks.items);
    return response.data.tracks.items;
  } catch (error) {
    console.error('Error searching tracks:', error);
  }
};

const getTrack = async (token, trackId) => {
  try {
    const response = await axios.get(`${BASE_URL}/tracks/${trackId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Track Details:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching track details:', error);
  }
};

const getFeaturedPlaylists = async (accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/browse/featured-playlists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.playlists.items;
  } catch (error) {
    console.error('Error fetching featured playlists:', error);
    throw error;
  }
};

const getCategories = async (accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/browse/categories`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.categories.items;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export { getUserProfile, getUserPlaylists, getPlaylistTracks, getNewReleases, getAlbumTracks, searchTracks, getTrack, getFeaturedPlaylists, getCategories };
