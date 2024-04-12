import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetails() {
  const location = useLocation();
  const { movie } = location.state;

  const posterUrl = movie.poster;
  const genres = movie.genres;
  const releaseDate = new Date(movie.released).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const handleImageError = (event) => {
    event.target.onerror = null; // Prevent infinite loop
    event.target.src = '/no-poster.png';
  };

  return (
    <div className='mt-[2rem]'>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:max-w-7xl mx-auto px-4">
        <div className="w-full lg:w-1/3 lg:mr-12">
            <div className="img-container">
              <img src={!posterUrl ? '/no-poster.png' : posterUrl}
              className="rounded-lg shadow-lg text-white"
              onError={handleImageError}/>
            </div>
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-white">
            <h2 className="text-3xl font-semibold mb-4">{movie.title}</h2>
            
            <div className="flex flex-wrap mb-4">
            <p className="mr-4">Genres:</p>
            <div className="flex flex-wrap">
                {genres.map((genre, index) => (
                <span key={index} className="mr-2 mb-2 px-2 py-1 bg-gray-800 rounded">{genre}</span>
                ))}
            </div>
            </div>
            <div className="mb-4">
            <p><span className="font-semibold">Overview:</span> {movie.plot}</p>
            </div>
            <div className="mb-4">
            <p><span className="font-semibold">Release Date:</span> {releaseDate}</p>
            <p><span className="font-semibold">Runtime:</span> {movie.runtime} min</p>
            </div>
            <div className="mb-4">
            <p><span className="font-semibold">Directors:</span> {movie.directors.join(', ')}</p>
            </div>
            <div>
            <p><span className="font-semibold">Writers:</span> {movie.writers.join(', ')}</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default MovieDetails;
