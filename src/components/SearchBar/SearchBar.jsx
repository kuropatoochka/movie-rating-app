import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css";
import magnifier from '../../assets/magnifier.svg';
import {useDispatch} from "react-redux";
import {fetchSearchMovies} from "../../redux/actions/movieAsyncActions";
import {useDebounce} from "../../hooks/useDebounce";

const SearchBar = ({setSuggestMovieList}) => {
  const [searchMovie, setSearchMovie] = useState('')
  const dispatch = useDispatch()
  const debouncedSearchMovie = useDebounce(searchMovie, 1500)

  useEffect(() => {
    dispatch(fetchSearchMovies(debouncedSearchMovie))
    if (debouncedSearchMovie.length) {
      console.log(debouncedSearchMovie.length)
      setSuggestMovieList(true)
    } else {
      setSuggestMovieList(false)
    }
  }, [debouncedSearchMovie]);

  return (
    <label className={styles.search}>
      <input
        className={styles.search__input}
        value={searchMovie}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <button type="submit" className={styles.search__submit}>
        <img src={magnifier} alt="search"/>
      </button>
    </label>
  );
};

export default SearchBar;