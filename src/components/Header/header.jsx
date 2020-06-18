import React from 'react';

import styles from './header.module.css';
import logo from '../../assets/logo/logo-greenthumb.svg'


const Header = () => {
  return (
    <div className={styles.header__container}>
      <img src={logo} />
    </div>
  );
};

export default Header;