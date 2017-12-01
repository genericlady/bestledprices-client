import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Table } from 'reactstrap';
import uid from 'uid';

export default class PriceTable extends React.Component {
  render() {
    const {
      priceList = [],
    } = this.props;

    const rows = priceList.map(({ description, price, href }, index) => (
      <tr key={uid()}>
        <th scope="row">{index + 1}</th>
        <td>{description}</td>
        <td>{price}</td>
        <td><a href={href}>link to product</a></td>
      </tr>
    ));

    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Price</th>
            <th>Href</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
}

PriceTable.propTypes = {
  priceList: arrayOf(shape()),
};
