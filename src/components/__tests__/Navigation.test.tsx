import { render, cleanup} from "@testing-library/react";
import Navigation from "../Navigation";

afterEach(cleanup);

describe("Navigation for the website.", () => {
  it("has an input field to search for led hardware prices.", () => {
    const setQuery = jest.fn();
    const { container } = render(<Navigation setQuery={setQuery} />);

    expect(container.querySelector('.search-submit')?.textContent).toEqual('Search');
    expect(setQuery).not.toBeCalled();
  });
});
