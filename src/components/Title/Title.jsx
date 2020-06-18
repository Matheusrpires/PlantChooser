import React from 'react';

import styles from './Title.module.css';

const Title = ( {children} ) => {
  return (
    <div className={styles.title__container}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};

export default Title;