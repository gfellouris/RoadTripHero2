import React from 'react';
import { Button } from 'reactstrap';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Button outline color={this.props.btnStyle} size="lg">{this.props.btnName}</Button>{' '}
      </div>
    );
  }
}