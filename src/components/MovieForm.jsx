import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {addMovie} from "../store/actions";

const AdditionMovie = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleAddMovie = () => {
    if (inputValue) {
      dispatch(addMovie(inputValue))
      setInputValue('')
    }
  }

  return (
    <form style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
      <TextField id="outlined-basic"
                 label="Movie"
                 variant="outlined"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 placeholder='Write a movie name'
      />
      <Button variant="contained" onClick={handleAddMovie}>Add movie</Button>
    </form>
  );
};

export default AdditionMovie;