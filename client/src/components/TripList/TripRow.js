import React from "react";


function TripRow(props) {
    return (
        <tbody>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.tripName}</td>
                <td>{props.origin}</td>
                <td>{props.destination}</td>
            </tr>
        </tbody>
    );
}

export default TripRow;