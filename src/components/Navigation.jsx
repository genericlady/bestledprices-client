import React from 'react';
import { func } from 'prop-types';

export default class Navigation extends React.Component {
  static defaultProps = {
    getPrices: () => {},
    handleChange: () => {},
  }

  static propTypes = {
    getPrices: func,
    handleChange: func,
  }

  render() {
    const {
      getPrices,
      handleChange,
    } = this.props;

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
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
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
            onClick={(event) => getPrices(event)}
            className="btn btn-secondary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}
