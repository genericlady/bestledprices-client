import { render, cleanup} from "@testing-library/react";
import { productList } from "../mocks/index"
import ProductList from "../ProductList";

afterEach(cleanup);

describe("A list of products for the searched for item.", () => {
  it("can render results in a grid style layout.", () => {
    const { container } = render(<ProductList productList={productList.data} layout="grid" />);

    expect(container.querySelectorAll('.card-grid').length).toEqual(1);
  });

  it("can render results in a table style layout.", () => {
    const { container } = render(<ProductList productList={productList.data} layout="table" />);

    expect(container.querySelectorAll('.table').length).toEqual(1);
  });
});
