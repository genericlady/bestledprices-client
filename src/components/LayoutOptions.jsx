import classNames from 'classnames';
import { uid } from 'uid';

export default function LayoutOptions({ layout, setLayout }) {

  const handleClick = (value) => {
    setLayout(value);
  }

  const renderClassName = (value) => {
    return classNames({
      "btn btn-secondary btn-block": true,
      "active": layout === value,
    });
  }

  const renderButtons = () => {
    return [
      { type: 'fa-th', value: 'grid' },
      { type: 'fa-table', value: 'table' },
    ].map(({ type, value }) => (
      <button
        key={uid()}
        value={value}
        onClick={() => handleClick(value)}
        type="button"
        className={renderClassName(value)}
      >
        { value } <br /> <i className={`fa ${type} fa-5x`} />
      </button>
    ));
  }

  return (
    <div className="pt-3" role="group" aria-label="Layout Options">
      <h1>Layout</h1>
      { renderButtons() }
    </div>
  );
};
