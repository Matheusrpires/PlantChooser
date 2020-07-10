import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/header";

import styles from "./home.module.css";
import backmobile from "../../assets/illustrations/illustration-home-mobile.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.container__section}>
        <div className={styles.container__}>
          <h1>Find your next green friend</h1>

          <Link to={"/Sun"} className={styles.container__button}>
            Start quizz
          </Link>
        </div>

          <img src={backmobile} />
        <div className={styles.container__picture}>
        </div>
      </section>
    </div>
  );
};

export default Home;
