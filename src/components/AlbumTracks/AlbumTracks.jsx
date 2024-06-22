import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTrack, setCurrentAlbum } from '../../redux/slices/playerSlice';

const AlbumTracks = () => {
  const currentAlbum = useSelector((state) => state.currentAlbum);
  const dispatch = useDispatch();

  const handleTrackClick = (track) => {
    dispatch(setCurrentTrack(track));
    dispatch(setCurrentAlbum(currentAlbum));
  };

  return (
    <div className="album-tracks p-4">
      {currentAlbum.album && (
        <>
          <h2 className="text-xl font-bold mb-4">{currentAlbum.album.name}</h2>
          <img
            src={currentAlbum.album.images[0]?.url}
            alt={currentAlbum.album.name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className=" h-96 overflow-scroll scrollbar-hide">
          <ul>
            {currentAlbum.tracks.map((track) => (
              <li
                key={track.id}
                className="track cursor-pointer p-2 border-b hover:bg-gray-100 flex items-center"
                onClick={() => handleTrackClick(track)}
              >
                <img
                  src={currentAlbum.album.images[0]?.url}
                  alt={track.name}
                  className="w-12 h-12 object-cover rounded mr-4"
                />
                <span>{track.name}</span>
              </li>
            ))}
          </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AlbumTracks;
