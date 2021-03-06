import React from 'react';
import { Link } from 'react-router-dom';

import { NextBtn } from '../index';
import styles from './Card.module.css';

import plantTeste from '../../assets/plantpictures/luckybamboo.jpg';

import testeIcon from '../../assets/icons/grey/no-answer.svg';
import testeIcon3 from '../../assets/icons/grey/toxic.svg';

const Card = () => {
  return (
    <ul className={styles.categoriesContainer}>
      
      <li className={styles.categoriesContainer_categorie}>
        <div className={styles.card__container}>
            <img src={plantTeste} />
          <div className={styles.card__details}>
            <p>Lucky bamboo</p>
            <div className={styles.card__price}>
              <p>$30</p>
              <img src={testeIcon} />
              <img src={testeIcon3} />
            </div>
            <Link to='/' className={styles.container__button}>
              <div className={styles.container}>
                buy now
          </div>
            </Link>
          </div>
        </div>
      </li>

      <li className={styles.categoriesContainer_categorie}>
        <div className={styles.card__container}>
          <div>
            <img src={plantTeste} />
          </div>
          <div className={styles.card__details}>
            <p>Lucky bamboo</p>
            <div className={styles.card__price}>
              <p>$30</p>
              <img src={testeIcon} />
              <img src={testeIcon3} />
            </div>
            <Link to='/' className={styles.container__button}>
              <div className={styles.container}>
                buy now
          </div>
            </Link>
          </div>
        </div>
      </li>

      <li className={styles.categoriesContainer_categorie}>
        <div className={styles.card__container}>
          <div>
            <img src={plantTeste} />
          </div>
          <div className={styles.card__details}>
            <p>Lucky bamboo</p>
            <div className={styles.card__price}>
              <p>$30</p>
              <img src={testeIcon} />
              <img src={testeIcon3} />
            </div>
            <Link to='/' className={styles.container__button}>
              <div className={styles.container}>
                buy now
          </div>
            </Link>
          </div>
        </div>
      </li>

       <li className={styles.categoriesContainer_categorie}>
        <div className={styles.card__container}>
          <div>
            <img src={plantTeste} />
          </div>
          <div className={styles.card__details}>
            <p>Lucky bamboo</p>
            <div className={styles.card__price}>
              <p>$30</p>
              <img src={testeIcon} />
              <img src={testeIcon3} />
            </div>
            <Link to='/' className={styles.container__button}>
              <div className={styles.container}>
                buy now
          </div>
            </Link>
          </div>
        </div>
      </li>
    </ul>
//     <div className="cards">
//   <div className="card">ONE</div>
//   <div className="card">TWO</div>
//   <div className="card">THREE</div>
//   <div className="card">FOUR</div>
//   <div className="card">FIVE</div>
//   <div className="card">SIX</div>
//   <div className="card">SEVEN</div>
//   <div className="card">EIGHT</div>
//   <div className="card">NINE</div>
//   <div className="card">TEN</div>
//   <div className="card">ELEVEN</div>
//   <div className="card">TWELVE</div>
// </div>
  );
};

export default Card;

// <ul className={styles.categoriesContainer}>
//   <li className={styles.categoriesContainer_categorie}>
//     <a>Pizza</a>
//     <img src={pizza} />
//   </li>
// </ul>