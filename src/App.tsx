import { useEffect, useState } from "react";
import { shuffle, isEmpty } from "lodash";
import "./App.css";
import Navigation from "./components/Navigation";
import PriceList from "./components/PriceList";
import Filter from "./components/Filter";
import LayoutOptions from "./components/LayoutOptions";
import { fetchPrices } from "./utilities/";
import { Price, FilterOption } from "./components/interfaces/index";

export default function App() {
  const [priceList, setPriceList] = useState<Price[]>([]);
  const [filteredList, setFilteredList] = useState<Price[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [layout, setLayout] = useState("grid");
  const [filterOptions] = useState([
    { type: "relevance", label: "Relevance" },
    { type: "priceLowToHigh", label: "$ - $$$$" },
    { type: "priceHighToLow", label: "$$$$ - $" },
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
      case "priceLowToHigh":
        return setFilteredList(priceList.slice().sort((p1, p2) =>
          Number(p1.price.replace(/\$/, "")) - Number(p2.price.replace(/\$/, "")))
        );
      case "priceHighToLow":
        return setFilteredList(priceList.slice().sort((p1, p2) =>
          Number(p2.price.replace(/\$/, "")) - Number(p1.price.replace(/\$/, "")))
        );
      case "relevance":
        return setFilteredList(priceList);
      default:
        return;
    }
  }

  useEffect(() => {
    setLoading(true);

    fetchPrices(query)
      .then(({ priceList }) => {
        setError("");
        setLoading(false);
        setPriceList(Object.freeze(priceList));
        setFilteredList(priceList.slice());
      })
      .catch(error => {
        setError("We had trouble fetching prices");
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
              <PriceList priceList={filteredList} layout={layout} />
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
