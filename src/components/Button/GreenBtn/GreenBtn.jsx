import React from "react";
import { Link } from "react-router-dom"

import styles from './GreenBtn.module.css'

const GreenBtn = ({ redirect, children }) => {
  return (
    <Link to={`/${redirect}`} className={styles.container__button}>
      {children}
    </Link>
  );
};

export default GreenBtn;


