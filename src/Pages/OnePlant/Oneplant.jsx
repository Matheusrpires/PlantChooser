import React, { useState } from "react";

import { Green, GreenBtn } from "../../components/";
import Header from "../../components/Header/header";

import styles from "./Oneplant.module.css";
import envelope from "../../assets/illustrations/envelop.png";

import plantTeste from "../../assets/plantpictures/luckybamboo.jpg";
import testeIcon from "../../assets/icons/grey/no-answer.svg";

const Oneplant = () => {
  const [send, setSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.temporary}>
        <Header color="true" />
      </div>
      <div className={styles.container__conteudo}>
        <div className={styles.container__data}>
          <div className={styles.picked__container}>
            <p className={styles.picked__title}>Succulent bowl</p>
            <p className={styles.picked__price}>$20</p>
          </div>
          <img
            src={plantTeste}
            className={styles.imgteste}
            alt="picked plant"
          />
          <div className={styles.picked__img}></div>
          <div className={styles.itens_container}>
            <img src={testeIcon} atl="effect" />
            <a>High sunlight</a>
          </div>
          <div className={styles.itens_container}>
            <img src={testeIcon} atl="effect" />
            <a>High sunlight</a>
          </div>
          <div className={styles.itens_container}>
            <img src={testeIcon} atl="effect" />
            <a>High sunlight</a>
          </div>
        </div>
        <div className={styles.email__container}>
          {send ? (
            <div className={styles.send__container}>
              <p className={styles.picked__title}>Thank you!</p>
              <p className={styles.email__sub}>
                You will hear from us soon. Please check your e-mail!
              </p>
              <img src={envelope} alt="Envelope com planta dentro" />
            </div>
          ) : (
            <>
              <div className={styles.picked__container}>
                <p className={styles.picked__title}>Nice pick!</p>
                <p className={styles.email__sub}>
                  Tell us your name and <br />
                  e-mail and we will get in touch about your order ; &#x00029;
                </p>
              </div>
              <form>
                <label>Name</label>
                <input placeholder="Crazy Plant Person" />
                <label>E-mail</label>
                <input placeholder="plantperson@email.com" />

                <button
                  type="submit"
                  onClick={sendEmail}
                  className={styles.container__button}
                >
                  send
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Oneplant;
