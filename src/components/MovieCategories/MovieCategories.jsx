import styles from './styles.module.css';
import React from 'react';
import {categories} from "../../constants/constants";

const MovieCategories = ({category, setCategory}) => {
  return (
    <div className={styles.categories}>
      {categories.map(({id, label}) => (
        <button key={id} className={category === id ? styles.active : styles.item}
                onClick={() => setCategory(id)}>{label}</button>
      ))}
    </div>
  );
};

export default MovieCategories;