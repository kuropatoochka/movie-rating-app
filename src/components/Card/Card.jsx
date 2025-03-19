import styles from "./styles.module.css";
import defaultPoster from "../../assets/default-poster.jpg";
import React from 'react';

const Card = ({name, poster = defaultPoster, year, rating, variant = 'default'}) => {

  return (
    <li className={`${styles.movie} ${styles[variant]}`}>
      <img className={styles.movie__image} src={poster} alt="movie"/>
      <div className={styles.movie__info}>
        <div>
          <h3 className={styles.movie__title}>{name}</h3>
          <p className={styles.movie__year}>{year}</p>
        </div>
        <h3 className={styles.movie__rating}>{rating !== null && `${rating}/10`}</h3>
      </div>
    </li>
  );
};

export default Card;