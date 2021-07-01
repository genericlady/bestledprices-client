import { useEffect, useState } from "react";
import { uid } from "uid";
import classNames from "classnames";
import { Price, FilterOption } from "./interfaces/index";

interface FilterProps {
  filterOptions: FilterOption[],
  handleFilter: (selectedFilterOption: FilterOption) => void,
}

const Filter: React.FC<FilterProps> = ({ handleFilter, filterOptions }) => {
  const [selectedFilterOption, setSelectedFilterOption] = useState(filterOptions[0]);

  useEffect(() => handleFilter(selectedFilterOption), [selectedFilterOption]);

  const renderClassName = (filterOption: FilterOption) => {
    return classNames({
      "btn btn-secondary btn-block": true,
      "active": selectedFilterOption === filterOption,
    });
  }

  const renderButtons = () => {
    return (
      filterOptions.map(filterOption => (
        <button
          key={uid()}
          onClick={() => setSelectedFilterOption(filterOption)}
          type="button"
          className={renderClassName(filterOption)}
        >
          { filterOption.label }
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
