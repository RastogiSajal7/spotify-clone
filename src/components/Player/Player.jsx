import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.preview_url;
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <div className="player fixed bottom-0 w-full p-4 bg-gray-800 text-white">
      {currentTrack ? (
        <>
          <p className="text-lg">{currentTrack.name}</p>
          <audio ref={audioRef} controls className="w-full mt-2">
            <source src={currentTrack.preview_url} type="audio/mpeg" />
          </audio>
        </>
      ) : (
        <p>No track selected</p>
      )}
    </div>
  );
};

export default Player;
