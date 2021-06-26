import { useState } from 'react';

interface NavigationInterface {
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>,
}

const Navigation = ({ setQuery }: NavigationInterface) => {
  const [ nextQuery, setNextQuery] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNextQuery(event.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">Best LED Prices</a>
      <button
        className="navbar-toggler d-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto d-none">
          {
            <>
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </>
          }
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          onChange={(event) => handleChange(event)}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            setQuery(nextQuery);
          }}
          className="btn btn-secondary my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navigation;
