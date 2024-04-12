import React, { useEffect, useRef, useState } from 'react';
import fetchDataFromApi from '../utils/api.js';
import { useContext } from 'react';
import movieContext from '../context/MovieContext.js';

function HeroSection() {
    const searchBox = useRef(null);
    const { setMovies } = useContext(movieContext);

    useEffect(() => {
        // Check if there are any movies stored in localStorage
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        } else {
            // Fetch random data initially
            fetchRandomData();
        }
    }, [setMovies]);

    const fetchRandomData = async () => {
        try {
            const data = await fetchDataFromApi('random', 100); // Fetch random data initially
            setMovies(data);
            // Store fetched data in localStorage
            localStorage.setItem('movies', JSON.stringify(data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData = async (e) => {
        e.preventDefault();
        const movieName = searchBox.current.value;
        if (!movieName) return;

        try {
            const data = await fetchDataFromApi(movieName, 100);
            setMovies(data);
            localStorage.setItem('movies', JSON.stringify(data)); // Update localStorage with new data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="container max-w-1200px w-[90%] m-auto">
            <div className="h-[50vh] flex justify-center items-center">
                <div className="text-center text-white">
                    <p className="text-5xl p-2 font-bold md:text-7xl">Welcome.</p>
                    <p className="text-md font-[500] p-3 mb-5 md:text-2xl">
                        Millions of movies, TV shows and people to discover. Explore now.
                    </p>
                    <form onSubmit={fetchData}>
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show..."
                            className="w-[50vw] p-5 rounded-l-full text-black placeholder-gray-700 md:w-[600px] focus:outline-none lg:w-[800px]"
                            ref={searchBox}
                        />
                        <button type="submit" className="gradient p-[21px] pb-[22px] rounded-r-full">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
