import styles from './styles.module.css'
import React from 'react';
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>KINOMONSTER</p>
      <SearchBar/>
    </header>
  );
};

export default Header;