import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = () => {
  return (
    <div className="fixed top-0 left-0 z-40 h-screen w-64 p-4 overflow-y-auto bg-white dark:bg-gray-950">
      <h1 className='text-white items-center text-3xl font-bold tracking-wide uppercase shadow-lg p-4 rounded-lg bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent'>
        LOMES
      </h1>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
      </button>
      
      <div className="grid grid-cols-1 gap-4 mt-6">
        <Link className='text-white hover:text-cyan-400 transition-colors duration-300' to="/current">Currently Watching</Link>
        <Link className='text-white hover:text-cyan-400 transition-colors duration-300' to="/anime">Anime</Link>
        <Link className='text-white hover:text-cyan-400 transition-colors duration-300' to="/movies">Movies</Link>
        <Link className='text-white hover:text-cyan-400 transition-colors duration-300' to="/tvshows">TV Shows</Link>
        <Link className='text-white hover:text-cyan-400 transition-colors duration-300' to="/music">Music</Link>
      </div>
    </div>
  );
};

export default Drawer;
