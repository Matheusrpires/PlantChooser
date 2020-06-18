import React from 'react';
import { Link } from 'react-router-dom';

import styles from './home.module.css';
import backmobile from '../../assets/illustrations/illustration-home-mobile.png'

const Home = () => {

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1>Find your next green friend</h1>

        <Link to={'/Sun'} className={styles.container__button}>
          
          Start quizz
          </Link>
      </div>

      <div className={styles.container__picture}>
        <img src={backmobile} />
      </div>
    </React.Fragment>
  )
}

export default Home;