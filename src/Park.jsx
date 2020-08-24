import React from 'react'
import Address from './Address';
import { Container, Row, Col } from 'react-bootstrap';

export default function Park(props) {
    console.log(props.park)
    let name = props.park.name;
    let firstImgUrl = props.park.images[0].url;
    let description = props.park.description
    let addressesDisplay = (
        props.park.addresses.map(add => (
            <Address address={add} />
        ))
    )
    let directionsInfo = props.park.directionsInfo;
    return (
        <Container>
            <div>
                <img src={firstImgUrl} alt="" height="400px" />
            </div>
            <div>
                <h2>{name}</h2>
                
            </div>
            <div>
                {description}
            </div>
            <div>
                <h5>Address</h5>
                {addressesDisplay}
            </div>
            <div>
                <h5>Directions</h5>
                {directionsInfo} <br/> <br/>
            </div>
            <div>
                <h5>Images</h5>
            </div>
        </Container>
    )
}
