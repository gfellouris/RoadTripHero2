import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;

    const road = [
      L.latLng(40.767341, -73.968536),
      L.latLng(25.825837, -80.121077)
    ]

    let leafletElement = L.Routing.control({
      units: 'imperial',
      waypoints: road,
      showAlternatives: true,
      reverseWaypoints: true, 
      routeWhileDragging: true,
      altLineOptions: {
        styles: [
          {color: 'black', opacity: 0.15, weight: 9},
          {color: 'white', opacity: 0.8, weight: 6},
          {color: 'blue', opacity: 0.5, weight: 2}
        ]
      // geocoder: L.Control.Geocoder.nominatim()  
      
      
      }
    }).addTo(map.leafletElement);


    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);


