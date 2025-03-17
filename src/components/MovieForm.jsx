import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addMovie} from "../store/actions";

const MovieForm = () => {
  const [inputValue, setInputValue] = useState('')
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  const handleAddMovie = () => {
    if (inputValue && !movies.includes(inputValue)) {
      dispatch(addMovie(inputValue))
    }
    setInputValue('')
  }

  return (
    <form style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
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