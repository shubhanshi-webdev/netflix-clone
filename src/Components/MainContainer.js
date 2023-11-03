import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies.movieLists);
  if (moviesList === null) return;
  const nowMovie = moviesList[0];
//   console.log(nowMovie, "hi");
  return (
    <div className="maincontainer">
        <VideoTitle data={nowMovie} />
        <VideoBackground data={nowMovie} />
    </div>
  )
  
};

export default MainContainer;
