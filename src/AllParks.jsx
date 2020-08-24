import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ParkIcon from './ParkIcon';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function AllParks(props) {

    let clickHandler = (park_id) => {
        console.log(`${park_id} clicked`)
        props.updateCurrentPark(park_id)
    }

    let mainDisplay = (
        props.parksdata.map(p => (
            

                <ParkIcon
                    park={p}
                    clickHandler={clickHandler}
                />

            
        ))
    )

    return (
        <Container className="App">
            <Row>
                {mainDisplay}
            </Row>
        </Container>
    )
}
