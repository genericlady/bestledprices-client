import { render, cleanup} from "@testing-library/react";
import { productList } from "../mocks/index"
import TableLayout from "../TableLayout";

afterEach(cleanup);

describe("Table style layout for rendering products of led hardware.", () => {
  it("has an input field to search for led hardware products.", () => {
    const { container } = render(<TableLayout productList={productList.data} />);

    expect(container.querySelectorAll('.product-row').length).toEqual(productList.data.length);
  });
});
