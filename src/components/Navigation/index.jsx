import React from 'react';
import PropTypes from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Search from './Search/';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {
      getPrices = () => {},
      handleChange = () => {},
    } = this.props;

    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">LED Pricewatcher</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Search getPrices={getPrices} handleChange={handleChange} />
              </NavItem>
              <NavItem>
                <NavLink href="https://google.com">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
