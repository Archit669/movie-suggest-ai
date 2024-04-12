import React from "react";
import MovieContext from "./MovieContext.js";

const MovieContextProvider = ({children}) => {
    const [movies, setMovies] = React.useState(null);
    return (
        <MovieContext.Provider value={{movies, setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;