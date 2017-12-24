import React from 'react';
import uid from 'uid';
import Card from '../shared/card';
import { chunk } from 'lodash';

export default class PriceTable extends React.Component {
  render() {
    const {
      priceList = [{}],
    } = this.props;

    const groups = chunk(priceList, 3);
    const cards = groups.map((group) => {
      /**
       * This logic ensures each group has 3 elements in it for better
       * layout consistency. Otherwise if it's an odd number the final
       * one or two cards are going to be bigger than the rest.
       */
      const count = 3 - group.length;
      if (count !== 0) {
        for (let i=1; i <= count; i++) {
          group.push({ image: '', description: '', price: '', href: '', merchant: ''});
        }
      }

      return (
        <div className="card-group">
        {
          group.map((card) => (<Card card={card} key={uid()} />))
        }
        </div>
      );
    });

    return (
      <div>
        {cards}
      </div>
    );
  }
}
