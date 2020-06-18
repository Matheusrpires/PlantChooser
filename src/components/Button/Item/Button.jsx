import React from 'react';
import cx from 'classnames';

import styles from './Button.module.css';

const Button = ({ img, children, value, set, now, select }) => {

  const handleClick = () => {
    if (now === value) {
      return set('false')
    }
    return set(value);
  }

  return (
    <div className={cx(styles.button__container, select ? styles.selected : '')} onClick={handleClick}>
      <img src={img} alt={children} />
      <a>
        {children}
      </a>
    </div>
  );
};

export default Button;

    // "sun": "high",
    // "water": "rarely",
    // "toxicity": false