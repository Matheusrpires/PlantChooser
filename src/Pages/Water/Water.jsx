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

import water from "../../assets/illustrations/wateringcan.png";
import Rarely from "../../assets/icons/green/one-drop.svg";
import Regularly from "../../assets/icons/green/two-drops.svg";
import Daily from "../../assets/icons/green/three-drops.svg";

const Water = () => {
  const [selected, setSelected] = useState("false");

  return (
    <div className="container__module">
      <Header />
      <Illustration image={water} alt="sun" />
      <Title>
        How often do you <b>want</b> to water your plant?
      </Title>
      <div className="container__button">
        <Button
          img={Rarely}
          value="rarely"
          now={selected}
          set={setSelected}
          select={selected.includes("rarely") ? "selected" : ""}
        >
          Rarely
        </Button>
        <Button
          img={Regularly}
          value="regularly"
          now={selected}
          set={setSelected}
          select={selected.includes("regularly") ? "selected" : ""}
        >
          Regularly
        </Button>
        <Button
          img={Daily}
          value="daily"
          now={selected}
          set={setSelected}
          select={selected.includes("daily") ? "selected" : ""}
        >
          Daily
        </Button>
      </div>
      <div className="container__nextback">
        <NextBtn pageTo="Dog">next</NextBtn>
        <BackBtn pageTo="Sun">previous</BackBtn>
      </div>
    </div>
  );
};

export default Water;
