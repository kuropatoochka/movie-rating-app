import React from 'react';
import Card from "../Card/Card";

const MovieCard = ({movie}) => {
  return (
    <Card
      name={movie.nameOriginal || movie.nameRu}
      poster={movie.posterUrl}
      year={movie.year}
      rating={movie.ratingKinopoisk}
    />
  );
};

export default MovieCard;