import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import PriceGrid from './PriceGrid';
import PriceTable from './PriceTable';

export default class PriceList extends React.Component {
  static defaultProps = {
    priceList: [{}],
    layout: '',
  }

  static propTypes = {
    priceList: arrayOf(shape()).isRequired,
    layout: string.isRequired,
  }

  render() {
    const {
      priceList,
      layout,
    } = this.props;

    /**
     * There should be a conditional render for
     * a const of list. We can use a 
     * layout factory to render the list as
     * grid or table.
     */

    return (
      <div>
      {
        layout === 'grid' &&
          <PriceGrid priceList={priceList} />
      }
      {
        layout === 'table' &&
          <PriceTable priceList={priceList} />
      }
      </div>
    );
  }
}
