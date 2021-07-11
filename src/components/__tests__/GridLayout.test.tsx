import { render, cleanup} from "@testing-library/react";
import { productList } from "../mocks/index"
import GridLayout from "../GridLayout";

afterEach(cleanup);

describe("A grid style layout for rendering products of led hardware.", () => {
  it("has an input field to search for led hardware products.", () => {
    const { container } = render(<GridLayout productList={productList.data} />);

    expect(container.querySelectorAll('.card').length).toEqual(productList.data.length);
  });
});
