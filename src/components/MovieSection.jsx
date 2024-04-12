import React from 'react'
import Card from './Card.jsx'
import { useContext } from 'react';
import movieContext from '../context/MovieContext.js';


function MovieSection() {

    const {movies} = useContext(movieContext);
    console.log(movies);

  return (
    <div className='max-w-1200px w-[90%] m-auto flex justify-center align-center flex-wrap'>
        {
            movies?.map((movie)=> <Card  
            key = {movie._id} 
            movie = {movie}/>)
        }

    </div>
  )
}

export default MovieSection
