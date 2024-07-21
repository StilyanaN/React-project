/* eslint-disable react/prop-types */
import "./CatalogItem.css"
import { Link } from "react-router-dom";

export default function CatalogItem({
  _id,
  name,
  price,
  imageUrl,
}) {
  return (
    <div className="col-md-6 col-lg-6 col-xl-4">
      <div className="rounded position-relative fruite-item">
        <Link to={`/catalog/${_id}`}>
          <div className="fruite-img">
            <img
              src={imageUrl}
              className="img-fluid1 w-100 rounded-top"
              alt={name}
            />
          </div>
        </Link>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: 10, left: 10 }}
        >
          {name}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4 className="h4-smaller">{name}</h4>
          
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">
              ${price} / 100g
            </p>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary" />
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
