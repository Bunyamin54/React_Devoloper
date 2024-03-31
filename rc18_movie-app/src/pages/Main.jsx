import React, {useContext, useState} from 'react';
import {MovieContext} from '../context/MovieContext';
import MovieCard from '../components/MovieCard';


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const {movies, loading, getMovies} = useContext (MovieContext);
  const [searchTerm, setSearchTherm] = useState("")
  
  console.log (movies);
  
  const handleSubmit= (e) => {
    e.preventDefault()
  
    if(currentUser) {
    getMovies (SEARCH_API + searchTerm)
  }
   return (
    <>
    <form onSubmit={handleSubmit} className='flex justify-center p-2'>
    <input type="search" className='w-80 h-8 roundended-med p-1 m-2'
    placeholder='Search a movie...'
    onChange={(e => setSearchTherm(e.target.value))}
    />
    <button className='btn-danger-bordered'>Search</button>


    </form>

    <div className="flex justify-center flex-wrap">
      {loading
        ? ( <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span> 
          </div> )

        : ( movies.map (movie => <MovieCard key={movie.id} {...movie} />))}
    </div>  
    </>
  );
};

export default Main;
