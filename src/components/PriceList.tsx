import PriceGrid from "./PriceGrid";
import PriceTable from "./PriceTable";
import {Price} from "./interfaces/index";

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
