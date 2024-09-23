import React from 'react';

const MovieCard = ({ poster, title }) => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="relative group">

        <img
          className="object-cover w-full rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          src={poster}
          alt={title}
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
          <h5 className="text-xl font-bold text-white text-center">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
