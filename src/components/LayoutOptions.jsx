import React, { Component } from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';
import { uid } from 'uid';

class LayoutOptions extends Component {
  static defaultProps = {
    layout: '',
    setLayout: () => {},
  }

  static propTypes = {
    layout: string,
    setLayout: func,
  }

  state = {
    layout: this.props.layout,
  }

  handleClick = (layout) => {
    const { setLayout } = this.props;
    this.setState({ layout });
    setLayout(layout);
  }

  renderClassName = (value) => {
    const { layout } = this.state;
    return classNames({
      "btn btn-secondary btn-block": true,
      "active": layout === value,
    });
  }

  render() {
    const buttons = [
      { type: 'fa-th', value: 'grid' },
      { type: 'fa-table', value: 'table' },
    ].map(({ type, value }) => (
      <button
        key={uid()}
        value={value}
        onClick={() => this.handleClick(value)}
        type="button"
        className={this.renderClassName(value)}
      >
        { value } <br /> <i className={`fa ${type} fa-5x`} />
      </button>
    ));

    return (
      <div className="pt-3" role="group" aria-label="Layout Options">
        <h1>Layout</h1>
        { buttons }
      </div>
    );
  }
};
export default LayoutOptions;
