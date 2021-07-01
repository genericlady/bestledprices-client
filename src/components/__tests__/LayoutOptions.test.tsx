import { render, cleanup} from "@testing-library/react";
import LayoutOptions from "../LayoutOptions";

afterEach(cleanup);

describe("A set of options meant to determine that layout of the rendered price list.", () => {
  const setLayout = jest.fn();

  it("will render render buttons to change the layout to grid or table.", () => {
    const layout = "grid";
    const { container } = render(<LayoutOptions setLayout={setLayout} layout={layout} />);
    const layoutButtons = container.querySelectorAll(".btn");

    expect(setLayout).not.toBeCalled;
    expect(layoutButtons.length).toEqual(2);
  });
});