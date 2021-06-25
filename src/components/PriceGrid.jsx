import { uid } from 'uid';
import { chunk } from 'lodash';
import Card from './Card';

export default function PriceGrid({priceList = []}) {
  return (
    <div className="card-grid" key={uid()}>
      {priceList.map(props => <Card {...props} key={uid()} />)}
    </div>
  );
}
