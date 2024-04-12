import React from 'react'
import HeroSection from './HeroSection.jsx'
import MovieSection from './MovieSection.jsx'
import MovieContextProvider from '../context/MovieContextProvider.jsx'

function Layout() {
  return (
    <>
      <MovieContextProvider>
        <HeroSection/>
        <MovieSection/>
    </MovieContextProvider>
    </>
  )
}

export default Layout
