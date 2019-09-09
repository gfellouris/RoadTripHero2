import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';


const myIcon = L.icon({
    iconUrl: 'https://res.cloudinary.com/dvustpvvn/image/upload/v1568056279/Dred.png',
    iconSize: [50, 82],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

class MapLeaf extends Component {
    state = { 
        location: {
            lat: 39.925945,
            lng: -75.119621,
          },
          location2: {
            lat: 39.9181686,
            lng: -75.071284,
          },
          zoom: 13,
     }

    //  componentDidMount(){
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       this.setState({
    //         location: {
    //           lat: position.coords.latitude,
    //           lng:position.coords.longitude
    //         }
    //       });
    //     });
    //     }

    render() { 
        const position = [this.state.location.lat, this.state.location.lng]
        const position2 =[this.state.location2.lat, this.state.location2.lng]
        return ( 
            <div className='map' >
            <Map className='map' center={position} zoom={this.state.zoom}>
               <TileLayer
                 attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={position} 
                icon={myIcon}>
                 <Popup>
                 Safety Rating: 10% <br /> Very Dangerous!
                 </Popup>
               </Marker>
               <Marker position={position2} 
                icon={myIcon}>
                 <Popup>
                   Safety Rating: 10% <br /> Very Dangerous!.
                 </Popup>
               </Marker>
             </Map>
           </div>
         );
    }
}
 
export default MapLeaf;