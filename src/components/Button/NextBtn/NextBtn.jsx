import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NextBtn.module.css';

const NextBtn = ({ children, pageTo }) => {
  return (
    <Link to={`/${pageTo}`} className={styles.container__button}>
      <div className={styles.container}>
        {children}
      </div>
    </Link>
  );
};

export default NextBtn;

// color display block no a pra testar o tamano 
// e testar width ou min-width