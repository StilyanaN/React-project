import "./ProductDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useReducer, useCallback } from "react";
import useForm from "../../../hooks/useForm";
import { Link } from "react-router-dom";

import AuthContext from "../../../contexts/authContext";
import { CartContext } from "../../../contexts/cartContext";

import * as commentService from "../../../services/commentService";
import * as productService from "../../../services/productService";
import { addProductInCart } from "../../../services/cartService";

import commentReducer from "../../../reducers/commentReducer";
import SideCatalog from "../side-catalog/SideCatalog";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { onCartSubmit } = useContext(CartContext);
  const { isAdmin, isAuthenticated, username } = useContext(AuthContext);
  const [count, setCount] = useState(1);
  const [comments, dispatch] = useReducer(commentReducer, []);
  const [rating, setRating] = useState(0);
  const { flavorId } = useParams();
  const navigate = useNavigate();

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });

  useEffect(() => {
    productService.getOne(flavorId).then(setProduct);

    commentService.getAll(flavorId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [flavorId]);

  async function addCommentHandler(values) {
    const newComment = await commentService.create(flavorId, values.comment, rating);
    newComment.owner = { username };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });

    resetForm();
  }

  function resetForm() {
    onChange({ target: { name: "comment", value: "" } });
    setRating(0);
  }

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  const decrementClickHandler = () => {
    setCount(Math.max(count - 1, 1));
  };

  const handleAddToCart = () => {
    onCartSubmit({
      addProductInCart,
      flavorId: product._id,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
      quantity: count,
    });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const onDeleteClick = useCallback(async (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      try {
        await productService.remove(productId);
        navigate("/catalog");
      } catch (error) {
        alert("Error deleting product: " + error.message);
      }
    }
  }, [navigate]);

  return (
    <>
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <a href="#">
                      <img
                        src={product.imageUrl}
                        className="img-fluid rounded"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">{product.name}</h4>
                  <h5 className="fw-bold mb-3">{product.price} $</h5>
                 
                  <p className="mb-4">
                    Calories: <span>{product.calories}</span> kcal per 100g
                  </p>

                  <div className="input-group quantity mb-5" style={{ width: 100 }}>
                    <div className="input-group-btn">
                      <button
                        onClick={decrementClickHandler}
                        className="btn btn-sm btn-minus rounded-circle bg-light border"
                      >
                        <i className="fa fa-minus" />
                      </button>
                    </div>

                    <p className="counter-p">{count}</p>
                    <div className="input-group-btn">
                      <button
                        onClick={incrementClickHandler}
                        className="btn btn-sm btn-plus rounded-circle bg-light border"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>

                  {!isAdmin && isAuthenticated && (
                    <button
                      onClick={handleAddToCart}
                      className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
                    </button>
                  )}

                  {isAdmin && (
                    <div className="admin-buttons">
                      <Link to={`/catalog/${flavorId}/edit`} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">Edit</Link>
                      <button onClick={() => onDeleteClick(product._id)} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">Delete</button>
                    </div>
                  )}
                  {!isAdmin && !isAuthenticated && (
                    <div className="admin-buttons">
                      <Link to={`/login`} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">Sign In to Start Your Order!</Link>
                    </div>
                  )}
                </div>
                {isAuthenticated && (
                  <div className="col-lg-12">
                    <nav>
                      <div className="nav nav-tabs mb-3">
                        <button
                          className="nav-link active border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-about-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-about"
                          aria-controls="nav-about"
                          aria-selected="true"
                        >
                          Reviews
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mb-5">
                      <div
                        className="tab-pane active"
                        id="nav-about"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                      >
                        <ul>
                          {comments.map(({ _id, text, owner: { username }, rating }) => (
                            <li key={_id} className="comment">
                              <p>
                                {username}: {text}
                                <br />
                                {rating && (
                                  <span>
                                    Rating: {rating} <i className="fa fa-star text-warning" />
                                  </span>
                                )}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {isAuthenticated && !isAdmin &&(
                  <form className="form" onSubmit={onSubmit}>
                    <h5 className="mb-5 fw-bold">Leave a review</h5>
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="border-bottom rounded my-4">
                          <textarea
                            name="comment"
                            value={values.comment}
                            onChange={onChange}
                            className="form-control border-0"
                            cols={30}
                            rows={8}
                            placeholder="Your Review *"
                            spellCheck="false"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between py-3 mb-5">
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-3">Please rate:</p>
                            <div
                              className="d-flex align-items-center"
                              style={{ fontSize: 12 }}
                            >
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`fa fa-star ${i < rating ? "text-warning" : "text-muted"}`}
                                  onClick={() => handleRatingChange(i + 1)}
                                  style={{ cursor: "pointer" }}
                                />
                              ))}
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <SideCatalog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}