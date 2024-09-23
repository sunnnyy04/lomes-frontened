import React from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Drawer from '../components/Drawer';

const image = "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg";
const title = "Hello Vaibhav";
const description = "Aagya bhadwe movie dekhne";

const Home = () => {
  return (
    <div className='bg-slate-900 flex'>
      <Drawer />
      <div className="flex-1 ml-64 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">

          {Array.from({ length: 20 }).map((_, index) => (
            <MovieCard key={index} poster={image} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
