import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewReleases, getAlbumTracks } from '../../utils/api';
import { setAlbums } from '../../redux/slices/albumsSlice';
import { setCurrentAlbum } from '../../redux/slices/currentAlbumSlice';
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Albums = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const albums = useSelector((state) => state.albums.albums);

  useEffect(() => {
    if (token) {
      (async () => {
        const newReleases = await getNewReleases(token);
        dispatch(setAlbums(newReleases));
      })();
    }
  }, [token, dispatch]);

  const handleAlbumClick = async (album) => {
    const tracks = await getAlbumTracks(token, album.id, album.images[0]?.url);
    dispatch(setCurrentAlbum({ album, tracks }));
  };

  return (
    <div className="albums grid grid-cols-3 gap-4 p-4">
      {albums.map((album) => (
        <motion.div
          whileHover={{scale: 1.1}}
          key={album.id}
          className="album cursor-pointer p-4 border rounded shadow hover:bg-neutral-800"
          onClick={() => handleAlbumClick(album)}
        >
          <img src={album.images[0]?.url} alt={album.name} className="w-full h-48 object-cover rounded" />
          <motion.div
          whileHover={{scale: 1.1}}>
          <FaCirclePlay className='text-4xl text-green-400 '/>
          </motion.div>
          <p className="mt-2 text-center text-lg font-semibold">{album.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Albums;
