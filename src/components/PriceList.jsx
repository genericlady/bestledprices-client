import PriceGrid from './PriceGrid';
import PriceTable from './PriceTable';

/**
 * This class should be treated like a Factory.
 * It's only concern is to produce the price list
 * in a variety of layouts.
 *
 */
export default function PriceList({ priceList, layout }) {
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
};
