import React, { useState } from 'react';

import { Illustration, Title, Button, NextBtn, BackBtn } from '../../components'

import water from '../../assets/illustrations/wateringcan.png';
import Rarely from '../../assets/icons/green/one-drop.svg';
import Regularly from '../../assets/icons/green/two-drops.svg';
import Daily from '../../assets/icons/green/three-drops.svg';

const Water = () => {
  const [selected, setSelected] = useState('false');

  return (
    <div>
      <Illustration image={water} alt="sun" />
      <Title>How often do you <b>want</b> to water your plant?</Title>
      <Button img={Rarely} value='rarely' now={selected} set={setSelected} select={selected.includes('rarely') ? 'selected' : ''}>Rarely</Button>
      <Button img={Regularly} value='regularly' now={selected} set={setSelected} select={selected.includes('regularly') ? 'selected' : ''}>Regularly</Button>
      <Button img={Daily} value='daily' now={selected} set={setSelected} select={selected.includes('daily') ? 'selected' : ''}>Daily</Button>
      <NextBtn pageTo="Dog">next</NextBtn>
      <BackBtn pageTo="Sun">previous</BackBtn>
    </div>
  );
};

export default Water; 