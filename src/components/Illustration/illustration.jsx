import React from 'react';
import cx from 'classnames';

import styles from './illustration.module.css';

const Illustration = ({ image, width }) => {
  return (
    <div className={cx(styles.illustration__container, width ? styles.illustration__change : '')}>
      <img src={image} />
    </div>
  );
};

export default Illustration;