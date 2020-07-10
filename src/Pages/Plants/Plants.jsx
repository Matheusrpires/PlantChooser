import React, {useState} from 'react';

import '../Sun/Mod.css';
import { Illustration, Green, Card } from '../../components';

import handPlant from '../../assets/illustrations/pick.png';

const Plants = () => {
  
  return (
    <div className="container__module">
      <Illustration width='true' image={handPlant}/>
      <Green>Our picks for you</Green>
      <Card />
    </div>
  );
};

export default Plants;