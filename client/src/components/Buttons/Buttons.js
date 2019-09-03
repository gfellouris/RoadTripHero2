import React from 'react';
import { Button } from 'reactstrap';

export default class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button outline color={this.props.btnStyle} size="lg" onClick={this.props.onClickEvent} disabled={this.props.isInvalid}>{this.props.btnName} </Button>
      </>
    );
  }
}