import styles from './styles.module.css'
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>KINOMONSTER</p>
      <ul className={styles.footer__content_links}>
        <li className={styles.footer__content_item}>
          <a href="" rel="noopener noreferrer" className={styles.footer__content_link}>Main</a>
        </li>
        <li className={styles.footer__content_item}>
          <a href="" rel="noopener noreferrer" className={styles.footer__content_link}>Top movies</a>
        </li>
        <li className={styles.footer__content_item}>
          <a href="" rel="noopener noreferrer" className={styles.footer__content_link}>Top series</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;