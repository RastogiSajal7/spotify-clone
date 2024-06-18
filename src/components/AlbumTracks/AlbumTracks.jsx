import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../redux/slices/playerSlice';

const AlbumTracks = () => {
  const currentAlbum = useSelector((state) => state.currentAlbum);
  const dispatch = useDispatch();

  const handleTrackClick = (track) => {
    dispatch(setCurrentTrack(track));
  };

  return (
    <div className="album-tracks p-4">
      {currentAlbum.album && (
        <>
          <h2 className="text-2xl font-bold mb-4">{currentAlbum.album.name}</h2>
          <ul>
            {currentAlbum.tracks.map((track) => (
              <li
                key={track.id}
                className="track cursor-pointer p-2 border-b hover:bg-gray-100"
                onClick={() => handleTrackClick(track)}
              >
                {track.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AlbumTracks;
