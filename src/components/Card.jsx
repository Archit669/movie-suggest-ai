import React, { useState } from 'react'
import CircleRating from './CircleRating';
import { Link } from 'react-router-dom';

function Card({movie}) {

    console.log(movie);
    const posterUrl = movie.poster;
    const genres = movie.genres;
    const rating = movie.imdb.rating;
    const title = movie.title;
    const releaseDate = new Date(movie.released).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});

    const handleImageError = (event) => {
      event.target.onerror = null; // Prevent infinite loop
      event.target.src = 'src/assets/no-poster.png';
    };
    
  return (

    <div  className='inline-block m-5 cursor-pointer'>
      <Link to= {`/movies/${movie._id}`} state={{movie}}>
        <div className='relative rounded-xl m-5'>
            <div className="w-32 h-48 rounded-xl m-5 mb-8">
                <img 
                src={!posterUrl ? "" : posterUrl} 
                className='object-cover h-full w-full rounded-xl'
                onError={handleImageError}
                />
                <CircleRating rating={rating}></CircleRating>
            </div>
        </div>
        <div className="text-block h-[3rem] flex flex-col justify-between items-center mt-8">
            <p className='text-white text-center'>{title.substr(0,12).concat("...")}</p>
            <p className='text-white opacity-50'>{releaseDate}</p>
        </div>
      </Link>

    </div>
  )
}

export default Card
