import React, { useState } from 'react';

import { Illustration, Title, Button, NextBtn, BackBtn } from '../../components'

import sun from '../../assets/illustrations/sun.png';
import HighSun from '../../assets/icons/coral/high-sun.svg';
import LowSun from '../../assets/icons/coral/low-sun.svg';
import No from '../../assets/icons/coral/no-answer.svg';

// state com o nome do que foi selecionado, e mandar o set state para o componente buttom para colocar o nome do btn la
// depois colocar uma props selected mandando true ou false para trocar a classe no componente talvez com cx class names

const Sun = () => {

  const [selected, setSelected] = useState('false');

  const handleSelect = () => {
    console.log('teste')
  }

  return (
    <React.Fragment>
      <div>
        <Illustration image={sun} alt="sun" />
        <Title>First, set the amount of <b>sunlight</b> your plant will get.</Title>
        <Button img={HighSun} value='high' now={selected} set={setSelected} select={selected.includes('high') ? 'selected' : ''}>High sunlight</Button>
        <Button img={LowSun} value='low' now={selected} set={setSelected} select={selected.includes('low') ? 'selected' : ''}>Low sunlight</Button>
        <Button img={No} value='no' now={selected} set={setSelected} select={selected.includes('no') ? 'selected' : ''}>No sunlight</Button>
        <NextBtn pageTo="Water">next</NextBtn>
        <BackBtn pageTo="">home</BackBtn>
      </div>
    </React.Fragment>
  );
};

export default Sun;