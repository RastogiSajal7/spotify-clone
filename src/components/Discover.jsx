import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscoverData } from '../redux/slices/discoverSlice.js';

const Discover = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const { featuredPlaylists, newReleases, categories, loading, error } = useSelector((state) => state.discover);

  useEffect(() => {
    if (token) {
      dispatch(fetchDiscoverData(token));
    }
  }, [token, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
<div className="bg-neutral-900 h-screen p-4 overflow-y-auto scrollbar-hide">
      <h2 className="text-white text-2xl mb-4">Featured Playlists</h2>
      <div className="flex overflow-x-scroll scrollbar-hide mb-8 space-x-4">
        {featuredPlaylists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg flex-shrink-0 w-48">
            <img src={playlist.images[0]?.url} alt={playlist.name} className="w-full h-32 object-cover rounded-lg" />
            <p className="text-white mt-2">{playlist.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-white text-2xl mb-4">New Releases</h2>
      
      <div className="flex overflow-x-scroll scrollbar-hide mb-8 space-x-4">
        {newReleases.map((album) => (
          <div key={album.id} className="bg-gray-800 p-4 rounded-lg flex-shrink-0 w-48">
            <img src={album.images[0]?.url} alt={album.name} className="w-full h-32 object-cover rounded-lg" />
            <p className="text-white mt-2">{album.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-white text-2xl mb-4">Categories</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-gray-800 p-4 rounded-lg flex-shrink-0 w-48">
            <img src={category.icons[0]?.url} alt={category.name} className="w-full h-32 object-cover rounded-lg" />
            <p className="text-white mt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
