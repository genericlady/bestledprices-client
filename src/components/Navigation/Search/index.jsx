import React from 'react';
import { InputGroup, InputGroupButton, Input } from 'reactstrap';

export default class Search extends React.Component {
  render() { 
    const {
      getPrices = () => {},
      handleChange = () => {},
    } = this.props;

    return (
      <div>
        <InputGroup>
          <Input
            onChange={(event) => handleChange(event)}
          />
          <InputGroupButton
            color="secondary"
            onClick={() => getPrices()}
          >
            Search
          </InputGroupButton>
        </InputGroup>
      </div>
    );
  }
};
