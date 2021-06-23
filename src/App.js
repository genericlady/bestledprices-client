import { useEffect, useState } from 'react';
import { shuffle, isEmpty } from 'lodash';
import './App.css';
import Navigation from './components/Navigation';
import PriceList from './components/PriceList';
import Filter from './components/Filter';
import LayoutOptions from './components/LayoutOptions';
import { fetchPrices } from './utilities/';

export default function App() {
  const [priceList, setPriceList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);;
  const [error, setError] = useState('');
  const [layout, setLayout] = useState('grid');

  const [query, setQuery] =
    useState(
      shuffle([
        'neopixel ring',
        'teensy',
        'arduino',
      ]).pop());

  useEffect(() => {
    setLoading(true);

    fetchPrices(query)
      .then(({ priceList }) => {
        setError('');
        setLoading(false);
        setPriceList(Object.freeze(priceList));
        setFilteredList(priceList.slice());
      })
      .catch(error => {
        setError('We had trouble fetching prices');
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
          <div className="row">
            <div className="col-md-9">
              <PriceList priceList={filteredList} layout={layout} />
            </div>
            <div className="text-center col-md-2 pt-3">
              <Filter
                priceList={priceList}
                setFilteredList={setFilteredList}
              />
              <LayoutOptions layout={layout} setLayout={setLayout} />
            </div>
          </div>
      }
    </div>
  );
}
