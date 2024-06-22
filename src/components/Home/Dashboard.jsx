import React from "react";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../../redux/slices/currentComponentSlice";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Playlists from "../Playlists/Playlists";
import Player from '../Player/Player';
import { loginUrl } from "../../utils/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleDiscoverClick = () =>{
    dispatch(setActiveComponent('discover'));
  }
  const handleAlbumClick = () => {
    dispatch(setActiveComponent('albums'));
  };

  return (
    <div className="">
        {/* Home and search section */}
      <div className="bg-neutral-900 rounded-lg p-4 text-lg">
        <div className="flex gap-4">
          <MdHomeFilled />
          <p>Home</p>
        </div>
        <div className="flex gap-4 mt-6">
          <FaSearch />
          <p>Search</p>
        </div>
      </div>
        {/* Library section */}
        <div className="bg-neutral-900 p-4 mt-2 rounded-lg ">
        <div className="flex gap-4">
          <BiLibrary/>
          <p>Your Library</p>
          <p><FaPlus/></p>
          <p><FaArrowRight/></p>
        </div>
        <div className="flex gap-2 mt-6">
            <button
            onClick={handleDiscoverClick}
            className="bg-neutral-800 rounded-xl pl-2 pr-2 p-1">Discover</button>
            <button 
            onClick={handleAlbumClick}
            className="bg-neutral-800 rounded-xl pl-2 pr-2 p-1">Albums</button>
        </div>
        <Playlists/>
        </div>
    </div>
  );
};

export default Dashboard;
