import styles from './styles.module.css';
import React, {useState} from 'react';
import MovieList from "../MovieList/MovieList";
import MovieCategories from "../MovieCategories/MovieCategories";
import {categories} from "../../constants/constants";

const MovieCatalog = () => {
  const [category, setCategory] = useState(categories[0].id)

  return (
    <section className={styles.catalog}>
      <MovieCategories category={category} setCategory={setCategory}/>
      <MovieList category={category}/>
    </section>
  );
};

export default MovieCatalog;