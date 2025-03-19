import styles from './styles.module.css'
import React, {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SuggestMovieList from "../SuggestMovieList/SuggestMovieList";

const Header = () => {
  const [isSuggestMovieList, setSuggestMovieList] = useState(false)

  return (
    <header className={styles.header}>
      <p className={styles.logo}>KINOMONSTER</p>
      <div className={styles.search__form} id='suggest-root'>
        <SearchBar setSuggestMovieList={setSuggestMovieList}/>
        <SuggestMovieList isOpen={isSuggestMovieList}/>
      </div>
    </header>
  );
};

export default Header;