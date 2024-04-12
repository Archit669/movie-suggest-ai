import "./index.css"
import HeroSection from "./components/HeroSection"
import MovieSection from "./components/MovieSection"
import MovieContextProvider from "./context/MovieContextProvider.jsx"


function App() {

  return (
    <MovieContextProvider>
        <HeroSection/>
        <MovieSection/>
    </MovieContextProvider>
  )
}

export default App
