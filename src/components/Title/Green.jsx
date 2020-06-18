import React from 'react';

import styles from './Green.module.css';

const Green = ({ children }) => {
  return (
    <p className={styles.title__container}>
      {children}
    </p>
  );
};

export default Green;
