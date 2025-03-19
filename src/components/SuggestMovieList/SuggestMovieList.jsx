import styles from './styles.module.css'
import {useSelector} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import SuggestMovieItem from "../SuggestMovieItem/SuggestMovieItem";

const SuggestMovieList = ({isOpen}) => {
  const suggestMovies = useSelector(state => state.searchMovies)

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.suggest_container}>
      <ul className={styles.list}>
        {suggestMovies.films && suggestMovies.films.map(movie =>
          <SuggestMovieItem key={movie.filmId} movie={movie}/>
        )}
      </ul>
    </div>,
    document.getElementById('suggest-root')
  );
};

export default SuggestMovieList;