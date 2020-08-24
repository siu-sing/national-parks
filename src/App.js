import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import parks from './parks';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AllParks from './AllParks';
import Park from './Park';
import axios from 'axios';

function App() {
    const [parksdata, setParksdata] = useState(parks.data.slice(1,10));
    const [currentPark, setCurrentPark] = useState({});
    
    // console.log(parks.api_key)

    const url = `https://developer.nps.gov/api/v1/parks?api_key=${parks.api_key}`
    axios({
        method: "GET",
        url: url
    }).then(response => {
        console.log("fetching park details")
        console.log(response)
        setParksdata(response.data.data)
    });

    let updateCurrentPark = (park_id) => {
        //Search for the park in the parks data
        console.log("setting currentpark state")
        let filteredPark = parks.data.filter(park => park.id === park_id)
        setCurrentPark(filteredPark[0])
        console.log(filteredPark)
        // history.push('/show');
    }

    return (
        <>
        <div className="text-light bg-dark mb-3">National Parks List</div>
        <Router>
            <Switch>
                <Route path="/allparks">
                    <AllParks parksdata = {parksdata}
                    updateCurrentPark = {updateCurrentPark}
                     />
                </Route>
                <Route path="/show">
                    <Park 
                    park = {currentPark}
                     />
                </Route>
                <Route path="/">
                    <AllParks parksdata = {parksdata} 
                    updateCurrentPark = {updateCurrentPark}
                    />
                </Route>
            </Switch>
        </Router>


        <div className="text-light bg-dark mt-3">Footer</div>
        </>
    );
}

export default App;
