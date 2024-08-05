import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [deliveryType, setDeliveryType] = useState("Standard-Delivery");

  let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let deliveryFee = deliveryType === "Standard-Delivery" ? 4.99 : 6.99;
  let totalPriceDelivery = totalPrice + deliveryFee;
  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isCartEmpty = totalQuantity === 0;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleDeliveryChange = (e) => {
    setDeliveryType(e.target.value);
  };

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4><b>Shopping Cart</b></h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {totalQuantity} item{totalQuantity !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {cart.map(x => <CartItem key={x._id} {...x} />)}

          <Link className="text-success2" to={'/catalog'}>
            <i className="fas fa-angle-left me-2"></i>Back to shop
          </Link>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5><b>Summary</b></h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>
              ITEMS {totalQuantity}
            </div>
            <div className="col text-right">$ {totalPrice.toFixed(2)}</div>
          </div>
          <form className="form-margin">
            <p>SHIPPING</p>
            <select onChange={handleDeliveryChange}>
              <option className="text-muted" value="Standard-Delivery">Standard-Delivery - $4.99</option>
              <option className="text-muted" value="Express-Delivery">Express-Delivery - $6.99</option>
            </select>
          </form>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">$ {totalPriceDelivery.toFixed(2)}</div>
          </div>
          <button 
            onClick={handleCheckout} 
            className="btn btn-primary py-md-3 px-md-5 mt-2"
            disabled={isCartEmpty} 
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
