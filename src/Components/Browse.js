import React, { useEffect } from 'react'
import Header from './Header';
import {API_OPTION} from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../Store/Slics/movieListSlice';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const dispatch = useDispatch();

  const fetchNowPlaying = async () => {
  const response = await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)
    const resJson = await response.json();
    // console.log(resJson.results);
    dispatch(addNowPlayingMovie(resJson.results));
  }

  useEffect(() => {
    fetchNowPlaying();
  }, [])
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div>Browse</div>
    </>
  )
}

export default Browse