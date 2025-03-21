import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Nose1 from '../images/nose1.png';
import Nose2 from '../images/nose2.png';


const Moral = () => {
  return (
    <div classname="Cards Safe">
      <Container>
        <Row>
          <Col md="4" className="safe-image-col">
            <img alt="covid art" src={Nose1} className="safe-image" />
          </Col>
          <Col md="4" className="safe-image-col">
            <h1 className="safe-text">STAY SAFE</h1>
            <h3 className="safe-text">Wear your mask!</h3>
          </Col>
          <Col md="4" className="safe-image-col">
            <img alt="covid art" src={Nose2} className="safe-image" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Moral