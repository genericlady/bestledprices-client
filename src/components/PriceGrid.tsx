import React from "react";
import { uid } from "uid";
import Card from "./Card";

interface PriceList {
  image: string,
  description: string,
  price: string,
  href: string,
  merchant: string
}

interface PriceGridProps {
  priceList: PriceList[],
}

const PriceGrid: React.FC<PriceGridProps> = ({ priceList = [] }) => {
  return (
    <div className="card-grid" key={uid()}>
      {priceList.map(props => <Card {...props} key={uid()} />)}
    </div>
  );
}

export default PriceGrid;
