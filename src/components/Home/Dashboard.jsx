import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Playlists from "../Playlists/Playlists";
import Player from '../Player/Player';

const Dashboard = () => {
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
      {/* Player section */}
      <Player/>
        {/* Library section */}
        <div className="bg-neutral-900 p-4 mt-2 rounded-lg ">
        <div className="flex gap-4">
          <BiLibrary/>
          <p>Your Library</p>
          <p><FaPlus/></p>
          <p><FaArrowRight/></p>
        </div>
        <div className="flex gap-2 mt-6">
            <div className="bg-neutral-800 rounded-xl pl-2 pr-2">Playlists</div>
            <div className="bg-neutral-800 rounded-xl pl-2 pr-2">Artists</div>
        </div>
        <Playlists/>
        </div>
    </div>
  );
};

export default Dashboard;
