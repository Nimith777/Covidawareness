import React, { useState } from 'react'
import { Container } from 'reactstrap';

import covid5 from '../images/c1.png';
import covid6 from '../images/c2.png';
import covid7 from '../images/c3.png';
import covid8 from '../images/c4.png';

import Cardset from './Cardset';

const Fact = () => {
  const [list] = useState([covid5,covid6,covid7,covid8]);
  return (
    <div className="Cards Facts">
      <Container>
        <h1 className="cards-title text-light">Covid-19 Facts</h1>
        <Cardset list={list} />
      </Container>
    </div>
  )
}

export default Fact