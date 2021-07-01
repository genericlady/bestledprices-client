import { render, cleanup} from "@testing-library/react";
import Card from "../Card";

afterEach(cleanup);

test("Displays information about the item.", () => {
  const props = {
    image: "https://foobar.com/baz.png",
    description: "a mighty fine thing",
    price: "$10.00",
    href: "https://foobar.com/baz",
    merchant: "Adafruit",
  }
  const { container } = render(<Card {...props} />);

  expect(container.querySelector(".card-link")!.getAttribute("href")).toBe(props.href);
  expect(container.querySelector(".card-img-top")!.getAttribute("src")).toBe(props.image);
  expect(container.querySelector(".card-img-top")!.getAttribute("alt")).toBe(props.description);
  expect(container.querySelector(".card-title")!.textContent).toBe(props.description);
  expect(container.querySelector(".card-price")!.textContent).toBe(props.price);
  expect(container.querySelector(".card-merchant")!.textContent).toBe(props.merchant);
});
