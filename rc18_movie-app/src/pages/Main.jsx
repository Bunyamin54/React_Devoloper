import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Main = () => {

  const {movies} =useContext(MovieContext)
  console.log(movies)

  return <div className="flex justify-center flex-wrap">
  {movies.map(movie => console.log(movie))}




  </div>;
};

export default Main;
