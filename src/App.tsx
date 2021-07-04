import { useEffect, useState } from "react";
import { shuffle, isEmpty } from "lodash";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import LayoutOptions from "./components/LayoutOptions";
import { fetchProducts } from "./utilities/";
import { Product, FilterOption } from "./components/interfaces/index";

export default function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredList, setFilteredList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [layout, setLayout] = useState("grid");
  const [filterOptions] = useState([
    { type: "relevance", label: "Relevance" },
    { type: "productLowToHigh", label: "$ - $$$$" },
    { type: "productHighToLow", label: "$$$$ - $" },
  ]);
  const [query, setQuery] =
    useState(
      shuffle([
        "neopixel ring",
        "teensy",
        "arduino",
      ]).pop());

  const handleFilter = (filterOption: FilterOption) => {
    switch (filterOption.type) {
      case "productLowToHigh":
        return setFilteredList(productList.slice().sort((p1, p2) =>
          Number(p1.price.replace(/\$/, "")) - Number(p2.price.replace(/\$/, "")))
        );
      case "productHighToLow":
        return setFilteredList(productList.slice().sort((p1, p2) =>
          Number(p2.price.replace(/\$/, "")) - Number(p1.price.replace(/\$/, "")))
        );
      case "relevance":
        return setFilteredList(productList);
      default:
        return;
    }
  }

  useEffect(() => {
    setLoading(true);

    fetchProducts(query)
      .then(({ data }) => {
        setError("");
        setLoading(false);
        setProductList(Object.freeze(data));
        setFilteredList(data.slice());
      })
      .catch(error => {
        setError("We had trouble fetching products");
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="App">
      <Navigation setQuery={setQuery} />
      {
        loading &&
          <div className="pt-3">
            <h1 className="text-center">Loading...</h1>
            <div className="text-center">
              <img
                className="img-fluid"
                src="https://i.giphy.com/10NI9u4qOWNdmw.gif"
                alt="loading"
              />
            </div>
          </div>
      }
      {
        error &&
          <div className="pt-3">
            <h1 className="text-center">{error}</h1>
            <div className="text-center">
              <img
                className="img-fluid"
                src="https://media.giphy.com/media/elHCBSN6hjvpvsQ8nn/giphy.gif"
                alt="error"
              />
            </div>
          </div>
      }
      {
        (!isEmpty(filteredList) && !loading) &&
          <div className="row">
            <div className="col-md-9">
              <ProductList productList={filteredList} layout={layout} />
            </div>
            <div className="text-center col-md-2 pt-3">
              <Filter
                handleFilter={handleFilter}
                filterOptions={filterOptions}
              />
              <LayoutOptions layout={layout} setLayout={setLayout} />
            </div>
          </div>
      }
    </div>
  );
}
