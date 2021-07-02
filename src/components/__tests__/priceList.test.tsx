import { render, cleanup} from "@testing-library/react";
import { priceList } from "../mocks/index"
import PriceList from "../PriceList";

afterEach(cleanup);

describe("A list of prices for the searched for item.", () => {
  it("can render results in a grid style layout.", () => {
    const { container } = render(<PriceList priceList={priceList} layout="grid" />);

    expect(container.querySelectorAll('.card-grid').length).toEqual(1);
  });

  it("can render results in a table style layout.", () => {
    const { container } = render(<PriceList priceList={priceList} layout="table" />);

    expect(container.querySelectorAll('.table').length).toEqual(1);
  });
});
