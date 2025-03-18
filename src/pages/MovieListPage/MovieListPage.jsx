import styles from "./styles.module.css";
import React from 'react';
import MovieCatalog from "../../components/MovieCatalog/MovieCatalog";
import Banner from "../../components/Banner/Banner";

const MovieListPage = () => {
  return (
    <main className={styles.main}>
      <Banner/>
      <MovieCatalog/>
    </main>
  );
};

export default MovieListPage;