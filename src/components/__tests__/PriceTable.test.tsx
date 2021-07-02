import { render, cleanup} from "@testing-library/react";
import { priceList } from "../mocks/index"
import PriceTable from "../PriceTable";

afterEach(cleanup);

describe("A grid style layout for rendering prices of led hardware", () => {
  it("has an input field to search for led hardware prices.", () => {
    const { container } = render(<PriceTable priceList={priceList} />);

    expect(container.querySelectorAll('.price-row').length).toEqual(priceList.length);
  });
});
