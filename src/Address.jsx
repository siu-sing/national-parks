import React from 'react'

export default function Address(props) {

    let { postalCode, city, stateCode, line1, type, line3, line2 } = props.address;

    return (
        <div>
            {line1} <br/>
            {city} {stateCode} {postalCode} <br/><br/>
        </div>
    )
}
