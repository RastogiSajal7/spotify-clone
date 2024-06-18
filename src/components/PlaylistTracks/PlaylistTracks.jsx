import React from 'react';
import { useSelector } from 'react-redux';

const PlaylistTracks = () => {
  const currentPlaylist = useSelector((state) => state.currentPlaylist);
  console.log(currentPlaylist);

  return (
    <div className="playlist-tracks">
      <h2>{currentPlaylist.playlist?.name}</h2>
      <ul>
        {currentPlaylist.tracks.map((item) => {
          const uniqueKey = `${currentPlaylist.playlist.id}-${item.track.id}`;
          return (
            <li key={uniqueKey}>
              {item.track.name} by {item.track.artists.map(artist => artist.name).join(', ')}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlaylistTracks;
