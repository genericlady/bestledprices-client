import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Table } from 'reactstrap';
import uid from 'uid';

export default class PriceTable extends React.Component {
  render() {
    const {
      priceList = [],
    } = this.props;

    const rows = priceList.map(({ image, description, price, href }, index) => (
      <tr key={uid()}>
        <th scope="row"><img src={image} alt={description} /></th>
        <td>{description}</td>
        <td>{price}</td>
        <td><a href={href}>link to product</a></td>
      </tr>
    ));

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Image</th>
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
