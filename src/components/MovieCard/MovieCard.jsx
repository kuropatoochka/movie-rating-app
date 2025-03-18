import styles from './styles.module.css'
import defaultPoster from '../../assets/default-poster.jpg'
import React from 'react';
import {rateMovie, removeMovie} from "../../redux/actions/movieActions";
import {useDispatch} from "react-redux";

const MovieCard = ({movie}) => {
  const dispatch = useDispatch()
  const handleRateMovie = (id, value) => {
    dispatch(rateMovie(id, value))
  }

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id))
  }

  return (
    <li key={movie.kinopoiskId} className={styles.movie}>
      <img className={styles.movie__image} src={movie.posterUrl || defaultPoster} alt="movie"/>
      <div className={styles.movie__info}>
        <div>
          <h3 className={styles.movie__title}>{movie.nameOriginal || movie.nameRu}</h3>
          <p className={styles.movie__year}>{movie.year}</p>
        </div>
        <h3 className={styles.movie__rating}>{movie.ratingKinopoisk !== null && `${movie.ratingKinopoisk}/10`}</h3>
      </div>
    </li>
  );
};

export default MovieCard;