import React from 'react';
import Albums from '../Albums/Albums';
import Player from '../Player/Player';

const Content = () => {
  return (
    <div className='bg-neutral-900 rounded-lg p-4 h-screen overflow-scroll'>
      <div className="">
        <Albums />
      </div>
    </div>
  )
}

export default Content;
