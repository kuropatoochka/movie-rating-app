import styles from './styles.module.css'
import defaultPoster from '../../assets/default-poster.jpg'
import React from 'react';
import SecondButton from "../../ui/SecondButton/SecondButton";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__content}>
        <p className={styles.extra_text}>ALREADY IN CINEMA</p>
        <div className={styles.banner__content_movie_info}>
          <h1 className={styles.banner__content_title}>Movie</h1>
          <h3 className={styles.banner__content_description}>lalalalallalalallala</h3>
        </div>
        <SecondButton value={"Watch"}/>
      </div>
      <img src={defaultPoster} alt="banner" className={styles.banner__image}/>
    </section>
  );
};

export default Banner;