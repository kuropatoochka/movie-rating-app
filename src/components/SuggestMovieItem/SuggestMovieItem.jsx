import React from 'react';
import Card from "../Card/Card";

const SuggestMovieItem = ({movie}) => {
  return (
    <Card
      name={movie.nameEn || movie.nameRu}
      poster={movie.posterUrl}
      year={movie.year}
      rating={movie.rating}
      variant='suggest'
    />
  );
};

export default SuggestMovieItem;