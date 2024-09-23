import React from 'react';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='bg-slate-900 h-16 flex items-center justify-between px-4'>
      {/* Logo Section */}
      <div className='flex'>
      </div>
      <div className='flex flex-row items-center space-x-6'>
        <Link to='/home' className='text-white hover:text-cyan-400 transition-colors duration-300'>Home</Link>
        <Link to='/continue' className='text-white hover:text-cyan-400 transition-colors duration-300'>Continue...</Link>
        <input
          className='rounded-lg p-2 bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300'
          type="text"
          placeholder='Search...'
        />
      </div>
    </div>
  );
}

export default Header;
