import GridLayout from "./GridLayout";
import TableLayout from "./TableLayout";
import { Product } from "./interfaces/index";

interface ProductListProps {
  productList: Product[],
  layout: string,
}

/**
 * This class should be treated like a Factory.
 * It's only concern is to produce the product list
 * in a variety of layouts.
 *
 */
export default function ProductList({ productList, layout }: ProductListProps) {
  return (
    <div>
    {
      layout === 'grid' &&
        <GridLayout productList={productList} />
    }
    {
      layout === 'table' &&
        <TableLayout productList={productList} />
    }
    </div>
  );
};
