import React from 'react';
import styles from "./styles.module.css";

const SecondButton = ({value}) => {
  return (
    <button className={styles.button}>{value}</button>
  );
};

export default SecondButton;