import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Rating} from "@mui/material";
import {TrashBin} from '@gravity-ui/icons';
import {rateMovie, removeMovie, sortMovie} from "../store/actions";

const MovieList = () => {
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  const handleSortMovie = () => {
    dispatch(sortMovie())
  }

  const handleRateMovie = (id, value) => {
    dispatch(rateMovie(id, value))
  }

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id))
  }

  return (
    <ul style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px"
    }}>
      {movies?.map(movie => (
        <li key={movie.id} style={{
          listStyle: "none",
          width: "100%",
          padding: "5px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          border: "2px solid hsl(210, 100%, 42%)",
          borderRadius: "5px"
        }}>
          {movie.title}
          <Rating
            name="size-small"
            size="small"
            onChange={(e, newValue) => {
              handleRateMovie(movie.id, newValue)
            }}/>
          <TrashBin style={{cursor: "pointer", color: "hsl(210, 100%, 42%)"}}
                    onClick={() => handleRemoveMovie(movie.id)}/>
        </li>
      ))}
      <Button variant="contained" onClick={handleSortMovie}>Sort Movies</Button>
    </ul>
  );
};

export default MovieList;