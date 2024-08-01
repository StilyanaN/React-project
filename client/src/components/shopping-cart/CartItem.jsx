/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./CartItem.css";

export default function CartItem({ _id, flavourId, name, price, quantity, imageUrl }) {
  const { onCartDelete, onCartEdit } = useContext(CartContext);
  const [itemQuantity, setItemQuantity] = useState(quantity);

  return (
    <div className="cart-item row border-top border-bottom py-2">
      <div className="col-2 text-center">
        <img className="img-fluid cart-item-img" src={imageUrl} alt={name} />
      </div>
      <div className="col-4">
        <h5>{name}</h5>
      </div>
      <div className="col-2 text-center">
        <span>{itemQuantity}</span>
      </div>
      <div className="col-2 text-center">
        <span className="cart-item-price">${price}</span>
      </div>
      <div className="col-2 text-center">
        <button onClick={() => onCartDelete(_id)} className="btn btn-danger">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
