import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

export default function ParkIcon(props) {
    return (
        <Col md={3} className="my-1">
            <Link to="/show">
                <div
                    className="box"
                    style={{ backgroundImage: `url(${props.park.images[0].url})` }}
                    onClick={() => props.clickHandler(props.park.id)}
                >
                    <span className="">{props.park.name}</span>
                    
                </div>
            </Link>
        </Col>



    )
}
