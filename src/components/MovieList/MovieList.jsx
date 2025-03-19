import styles from './styles.module.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import {fetchTopMovies} from "../../redux/actions/movieAsyncActions";

const MovieList = ({category}) => {
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTopMovies(category))
  }, [dispatch, category]);

  return (
    <ul className={styles.list}>
      {movies.items && movies.items.map(movie => <MovieCard key={movie.kinopoiskId} movie={movie}/>)}
    </ul>
  );
};

export default MovieList;