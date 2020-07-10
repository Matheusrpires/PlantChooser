import React from 'react';
import cx from 'classnames';

import styles from './header.module.css';
import logo from '../../assets/logo/logo-greenthumb.svg'


const Header = ({color}) => {
  return (
    <div className={cx(styles.header__container, color ? styles.white : '')}>
      <img src={logo} />
    </div>
  );
};

export default Header;