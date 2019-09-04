import { locationsList } from "./constants";
import { createLocationObject } from "./helper";

const directions = [
  {
    from: locationsList.NewYork,
    to: locationsList.Miami,
    strokeColor: "#f68f54"
  }
];
const DummyLocations = directions.map(elem => {
  return createLocationObject(
    elem.from.latLng,
    elem.from.title,
    elem.to.latLng,
    elem.to.title,
    elem.strokeColor
  );
});

export default DummyLocations;