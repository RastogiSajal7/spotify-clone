import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaCirclePlay } from "react-icons/fa6";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { motion } from "framer-motion";

const Player = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);
  const currentAlbum = useSelector((state)=> state.player.currentAlbum);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.preview_url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    audioRef.current.volume = volume;
    setVolume(volume);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div className="player fixed bottom-0 left-0 right-0 w-full p-4 bg-black text-white box-border">
      {currentTrack ? (
        <div className="grid grid-cols-3 items-center">
          <div className="song-info col-span-1">
          <img
          src={currentAlbum.images[0]?.url}
          alt={currentAlbum.name}
          className="w-12 h-12 object-cover rounded mr-4"
        />
            <p className="text-lg">{currentTrack.name}</p>
          </div>
          <div className="audio-controls col-span-1 flex flex-col items-center">
            <audio
              ref={audioRef}
              className="w-full hidden"
              controls
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            >
              <source src={currentTrack.preview_url} type="audio/mpeg" />
            </audio>
            <div className="flex mb-2 text-3xl gap-3">
            <IoPlaySkipBack/>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={togglePlayPause}
              className=" "
            >
              {isPlaying ? <FaCirclePlay /> : <FaCirclePlay />}
            </motion.button>
            <IoPlaySkipForward/>
            </div>
            <div className="flex items-center gap-2 w-full">
              <span>
                {new Date(currentTime * 1000).toISOString().substr(14, 5)}
              </span>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-400 rounded cursor-pointer"
                style={{ appearance: "none" }}
              />
              <span>
                {new Date(duration * 1000).toISOString().substr(14, 5)}
              </span>
            </div>
          </div>
          <div className="volume-controls col-span-1 flex justify-end items-center">
            <label htmlFor="volume" className="mr-2">
              Volume
            </label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-gray-400 rounded cursor-pointer"
              style={{ appearance: "none" }}
            />
          </div>
        </div>
      ) : (
        <p>No track selected</p>
      )}
    </div>
  );
};

export default Player;
