import { render, cleanup} from "@testing-library/react";
import { priceList } from "../mocks/index"
import PriceGrid from "../PriceGrid";

afterEach(cleanup);

describe("A grid style layout for rendering prices of led hardware.", () => {
  it("has an input field to search for led hardware prices.", () => {
    const { container } = render(<PriceGrid priceList={priceList} />);

    expect(container.querySelectorAll('.card').length).toEqual(priceList.length);
  });
});
