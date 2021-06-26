import PriceGrid from './PriceGrid';
import PriceTable from './PriceTable';

interface Price {
  image: string,
  description: string,
  price: string,
  href: string,
  merchant: string,
}

interface PriceListProps {
  priceList: Price[],
  layout: string,
}

/**
 * This class should be treated like a Factory.
 * It's only concern is to produce the price list
 * in a variety of layouts.
 *
 */
export default function PriceList({ priceList, layout }: PriceListProps) {
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
