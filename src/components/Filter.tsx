import { useState } from "react";
import { uid } from "uid";
import classNames from "classnames";
import { Price } from "./interfaces/index";

interface FilterProps {
  priceList: Price[],
  setFilteredList: React.Dispatch<React.SetStateAction<Price[]>>,
}

const Filter: React.FC<FilterProps> = ({ priceList, setFilteredList }) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const renderClassName = (index: number) => {
    return classNames({
      "btn btn-secondary btn-block": true,
      "active": selectedButton === Number(index),
    });
  }

  const sortBy = (type: string, index: number) => {
    setSelectedButton(index);

    switch (type) {
      case 'priceLowToHigh':
        return setFilteredList(priceList.slice().sort((p1, p2) =>
          Number(p1.price.replace(/\$/, '')) - Number(p2.price.replace(/\$/, '')))
        );
      case 'priceHighToLow':
        return setFilteredList(priceList.slice().sort((p1, p2) =>
          Number(p2.price.replace(/\$/, '')) - Number(p1.price.replace(/\$/, '')))
        );
      default:
        setFilteredList(priceList);
    }
  }

  const renderButtons = () => {
    return (
      [
        { type: 'relevance', label: 'Relevance' },
        { type: 'priceLowToHigh', label: '$ - $$$$' },
        { type: 'priceHighToLow', label: '$$$$ - $' },
      ].map(({ type, label }, index) => (
        <button
          key={uid()}
          value={index}
          onClick={() => sortBy(type, index)}
          type="button"
          className={renderClassName(index)}
        >
          { label }
        </button>
      ))
    )
  }

  return (
    <div role="group" aria-label="Filter">
      <h1>Sort By</h1>
      { renderButtons() }
    </div>
  );
}

export default Filter;
