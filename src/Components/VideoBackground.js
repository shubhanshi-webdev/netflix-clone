import React, { useEffect } from "react";
import { API_OPTION } from "../Utils/constants";
import {addTrailerId} from '../Store/Slics/movieListSlice';
import { useDispatch, useSelector } from 'react-redux';

const VideoBackground = ({ data }) => {
  const { id } = data;
  const dispatch = useDispatch();
  const trailerId = useSelector(store => store.movies.nowPlayingmovies);
  console.log(trailerId);

  const fetchMovieTrailer = async () => {
    const movieTrailer = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTION
    );
    const moviedata = await movieTrailer.json();
    // console.log(moviedata.results);
    const trailer = moviedata.results.filter(
      (item) => item.type === "Trailer" && item.name === "Official Trailer"
    );

    const keyId = trailer[0].key;
    dispatch(addTrailerId(keyId));
    //  console.log(trailerId);
  };
  useEffect(() => {
    fetchMovieTrailer();
  }, []);
  return (
    <div className="movieTrailerContainer">
      <iframe
        width="100%"
        height="100%"
        allow="autoplay; encrypted-media"
        src={"https://www.youtube.com/embed/"+ trailerId+'?autoplay=1&mute=1&controls=0&&showinfo=0&loop=1'}
        title="Jetha के Bapuji ने लगा दी Bhide की Class | Taarak Mehta Ka Ooltah Chashmah | Comedy Lagataar"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
