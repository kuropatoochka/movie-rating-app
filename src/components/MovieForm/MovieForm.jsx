import styles from './styles.module.css'
import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addMovie} from "../../store/actions";

const MovieForm = () => {
  const [inputValue, setInputValue] = useState('')
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  const handleAddMovie = () => {
    const isMovie = movies.some(movie => movie.title === inputValue)
    if (inputValue && !isMovie) {
      dispatch(addMovie(inputValue))
    }
    setInputValue('')
  }

  return (
    <form className={styles.form}>
      <TextField id="outlined-basic"
                 label="add movie"
                 variant="outlined"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddMovie}>Add movie</Button>
    </form>
  );
};

export default MovieForm;