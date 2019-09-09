
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './header.css'

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Road Trip Hero</h1>
          <p className="lead">Be Your Own Hero</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;