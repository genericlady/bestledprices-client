import { uid } from 'uid';
import { chunk } from 'lodash';
import Card from './Card';

export default function PriceGrid({priceList = []}) {
  return (
    chunk(priceList, 3).map((group) => {
      /**
       * This logic ensures each group has 3 elements in it for better
       * layout consistency. Otherwise if it's an odd number the final
       * one or two cards are going to be bigger than the rest.
       */
      const count = 3 - group.length;
      if (count > 0) {
        for (let i=1; i <= count; i++) {
          group.push({ image: '', description: '', price: '', href: '', merchant: ''});
        }
      }

      return (
        <div className="card-group" key={uid()}>
        {
          group.map(({ image, description, price, href, merchant, }) => (
            <Card
              image={image}
              description={description}
              price={price}
              href={href}
              merchant={merchant}
              key={uid()}
            />
          ))
        }
        </div>
      );
    })
  )
}
