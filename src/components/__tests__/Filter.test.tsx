import { render, cleanup} from "@testing-library/react";
import Filter from "../Filter";

afterEach(cleanup);


describe("Displays filtering options for the list of items.", () => {
  const handleFilter = jest.fn();

  const priceList = [
    {
      image: "https://foobar.com/baz.png",
      description: "a mighty fine thing",
      price: "$10.00",
      href: "https://foobar.com/baz",
      merchant: "Adafruit"
    },
    {
      image: "https://foobar.com/baz.png",
      description: "a mighty fine thing",
      price: "$10.00",
      href: "https://foobar.com/baz",
      merchant: "Adafruit"
    },
  ]

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
