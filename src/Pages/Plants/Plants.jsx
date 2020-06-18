import React, {useState} from 'react';

import { Illustration, Green, Card } from '../../components';

import handPlant from '../../assets/illustrations/pick.png';

const Plants = () => {
  
  return (
    <div>
      <Illustration width='true' image={handPlant}/>
      <Green>Our picks for you</Green>
      <Card />
    </div>
  );
};

export default Plants;