import React from 'react';
import AuthUserContext from '../components/Session/context';
import { withAuthorization } from '../components/Session/index';
import LeafletMap from '../components/Directions/LeafletMap';

function Results() {
  return (
    <div>
      <LeafletMap />
    </div>
  );
}

//condition for authuser check to restrict routes. If user isn't authorized, results is off limits
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Results);