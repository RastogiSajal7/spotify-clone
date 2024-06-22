import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Albums from '../Albums/Albums';
import Player from '../Player/Player';
import Discover from '../Discover';
import Search from '../Search/Search';

const Content = () => {
  const activeComponent = useSelector((state) => state.component.activeComponent);
  let componentToRender;
  
  switch(activeComponent){
    case 'discover':
      componentToRender = <Discover />;
      break;
    case 'albums':
      componentToRender = <Albums />;
      break;
    default:
      componentToRender = <Discover />;
  }
  
  return (
    <div className='bg-neutral-900 rounded-lg p-4 h-screen overflow-hidden relative'>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <IoIosArrowBack className='text-3xl text-white bg-black rounded-full'/>
          <IoIosArrowForward className='text-3xl text-white ml-2 bg-black rounded-full'/>
          <Search/>
        </div>
        <div className="flex gap-4 absolute right-4 top-4">
          <div className="bg-white text-black p-1 rounded-2xl">Explore Premium</div>
          <div className="bg-black text-white p-1 rounded-2xl">Install App</div>
        </div>
      </div>
      <div className="bg-black h-1 mb-4"></div>
      <div className="overflow-y-scroll scrollbar-hide" style={{ maxHeight: 'calc(100vh - 220px)' }}>
        {componentToRender}
      </div>
      <div className="mt-4">
        <Player />
      </div>
    </div>
  );
}

export default Content;
