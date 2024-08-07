/* eslint-disable react/prop-types */

import "./ProductDetails.css";

const QuantitySelector = ({ count, setCount }) => {
  return (
    <div className="input-group quantity mb-5" style={{ width: 100 }}>
      <div className="input-group-btn">
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-sm btn-minus rounded-circle bg-light border"
        >
          <i className="fa fa-minus" />
        </button>
      </div>

      <p className="counter-p">{count}</p>
      <div className="input-group-btn">
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-sm btn-plus rounded-circle bg-light border"
        >
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
