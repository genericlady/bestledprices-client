import React from "react";
import { uid } from "uid";
import Card from "./Card";
import { PriceListInterface } from "./interfaces";

const PriceGrid: React.FC<PriceListInterface> = ({ priceList = [] }) => {
  return (
    <div className="card-grid" key={uid()}>
      {priceList.map(props => <Card {...props} key={uid()} />)}
    </div>
  );
}

export default PriceGrid;
