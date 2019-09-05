import React from 'react';
import { Table } from 'reactstrap';

export default class Table extends React.Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Saved Trips</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}