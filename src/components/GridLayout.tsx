import React from "react";
import { uid } from "uid";
import Card from "./Card";
import { ProductListInterface } from "./interfaces";

const ProductGrid: React.FC<ProductListInterface> = ({ productList = [] }) => {
  return (
    <div className="card-grid" key={uid()}>
      {productList.map(props => <Card {...props} key={uid()} />)}
    </div>
  );
}

export default ProductGrid;
