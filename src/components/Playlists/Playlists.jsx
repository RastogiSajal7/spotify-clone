import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaylistTracks } from '../../utils/api';
import { setCurrentPlaylist } from '../../redux/slices/currentPlaylistSlice';

const Playlists = () => {
  const playlists = useSelector((state) => state.playlists.playlists);
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const handlePlaylistClick = async (playlist) => {
    const tracks = await getPlaylistTracks(token, playlist.id);
    if (tracks) {
      dispatch(setCurrentPlaylist({
        playlist,
        tracks,
      }));
    }
  };

  return (
    <div className="playlists">
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} onClick={() => handlePlaylistClick(playlist)}>
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
