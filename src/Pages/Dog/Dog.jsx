import React, { useState } from "react";

import "../Sun/Mod.css";
import {
  Illustration,
  Title,
  Button,
  NextBtn,
  BackBtn,
  Header,
} from "../../components";

import DogLogo from "../../assets/illustrations/dog.png";
import dogPicItem from "../../assets/icons/coral/pet.svg";
import No from "../../assets/icons/coral/no-answer.svg";

import styles from "./Dog.module.css";

const Dog = () => {
  const [selected, setSelected] = useState("false");
  // 63.5%; width para o titulo
  return (
    <div className="container__module">
      <Header />
      <Illustration image={DogLogo} alt="sun" />
      <Title>
        Do you have pets? Do they <b>chew</b> plants?{" "}
      </Title>
      <p className={styles.dog__SubTittle}>
        We are asking because some plants can be <b>toxic</b> for your buddy.
      </p>
      <div className="container__button">
        <Button
          img={dogPicItem}
          value="yes"
          now={selected}
          set={setSelected}
          select={selected.includes("yes") ? "selected" : ""}
        >
          High sunlight
        </Button>
        <Button
          img={No}
          value="no"
          now={selected}
          set={setSelected}
          select={selected.includes("no") ? "selected" : ""}
        >
          Low sunlight
        </Button>
      </div>
      <div className="container__nextback">
        <NextBtn pageTo="Plants">finish</NextBtn>
        <BackBtn pageTo="Water">previous</BackBtn>
      </div>
    </div>
  );
};

export default Dog;
