import {useEffect, useState} from "react";

import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";

//6607232b
const BASE_URL = "http://www.omdbapi.com/?apikey=6607232b"

const movie1 = {
  "Title": "Avengers: Age of Ultron",
  "Year": "2015",
  "imdbID": "tt2395427",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
}

const App = () => {

  const [movies,setMovies] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${BASE_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("avengers");
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
        src={searchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
              <div className="conatiner">
                {movies.map((movie) => (

                  <MovieCard movie={movie} />

                ))}
              </div>
          ) : (
            <div className = "empty">
              <h2>Sorry! No Movies Found</h2>
            </div>
          )
      }

      



    </div>
  );

}

export default App;