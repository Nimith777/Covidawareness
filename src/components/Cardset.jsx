import React from 'react'
import { Row,Col } from 'reactstrap';

const Cardset = ({ list }) => {
    return(
        <Row>
            {list.map((item) =>{
                return(
                    <Col md="6">
                        <img alt="Covid" src={item} className="card-image"/>
                    </Col>
                )
            })}

        </Row>
    )
}

export default Cardset