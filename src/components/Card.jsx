import React, { useState } from 'react'
import { Container } from 'reactstrap';

import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';

import Cardset from './Cardset';

const Card = () => {
    const [list] = useState([c1,c2,c3,c4]);
  return (
    <div className="Cards">
        <Container>
            <h1 className='cards-title'>COVID-19 PRECAUTIONS</h1>
            <Cardset list={list} />
        </Container>
    </div>
  )
}

export default Card;