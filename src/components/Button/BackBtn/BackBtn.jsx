import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BackBtn.module.css';

const Back = ({ children, pageTo }) => {
  return (
    <Link to={`/${pageTo}`} className={styles.container__button}>
      <div className={styles.container}>
        {children}
      </div>
    </Link>
  );
};

export default Back;