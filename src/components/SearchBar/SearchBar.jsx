import React from 'react';
import styles from "./styles.module.css";
import magnifier from '../../assets/magnifier.svg';

const SearchBar = () => {
  return (
    <label className={styles.search}>
      <input className={styles.search__input} type="text" placeholder="Search..."/>
      <button type="submit" className={styles.search__submit}>
        <img src={magnifier} alt="search"/>
      </button>
    </label>
  );
};

export default SearchBar;