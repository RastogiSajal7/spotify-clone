import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, getUserPlaylists } from '../../utils/api';
import { setUser } from '../../redux/slices/userSlice';
import { setPlaylists } from '../../redux/slices/playlistSlice';
import Playlists from '../Playlists/Playlists';
import Search from '../Search/Search';
import Player from '../Player/Player';
import Dashboard from './Dashboard';
import Content from './Content';
import Showcase from './Showcase';
// import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (token) {
      (async () => {
        const userProfile = await getUserProfile(token);
        dispatch(setUser(userProfile));

        const playlists = await getUserPlaylists(token);
        dispatch(setPlaylists(playlists));
      })();
    }
  }, [token, dispatch]);

  const user = useSelector((state) => state.user.user);

  return (
    <>
    <div className='grid grid-cols-12 h-screen p-2 gap-2 bg-black overflow-hidden '>
      <div className="col-span-3"><Dashboard/></div>
      <div className="col-span-7"><Content/></div>
      <div className="col-span-2"><Showcase/></div>
    </div>
    </>
  );
};

export default Home;
