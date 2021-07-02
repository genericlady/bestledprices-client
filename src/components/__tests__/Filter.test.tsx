import { render, cleanup} from "@testing-library/react";
import Filter from "../Filter";
import { priceList } from "../mocks/index"

afterEach(cleanup);

describe("Displays filtering options for the list of items.", () => {
  const handleFilter = jest.fn();

  const props = {
    priceList,
    handleFilter,
  }

  test("given an array of filterOptions it will render that many filters to choose from.", () => {
    const filterOptions = [
      { type: "relevance", label: "Relevance" },
      { type: "priceLowToHigh", label: "$ - $$$$" },
      { type: "priceHighToLow", label: "$$$$ - $" },
    ]

    const { container } = render(<Filter {...props} filterOptions={filterOptions} />);
    const filterButtons = container.querySelectorAll(".btn");

    expect(handleFilter).toBeCalledTimes(1);
    expect(filterButtons.length).toEqual(filterOptions.length);
  })
});
