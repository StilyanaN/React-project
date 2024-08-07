import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer, useCallback, useState } from "react";
import useForm from "../../../hooks/useForm";
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from "react-router-dom";

import AuthContext from "../../../contexts/authContext";
import { CartContext } from "../../../contexts/cartContext";

import * as commentService from "../../../services/commentService";
import * as productService from "../../../services/productService";

import commentReducer from "../../../reducers/commentReducer";
import SideCatalog from "../side-catalog/SideCatalog";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import AdminControls from "./AdminControls";
import CommentsSection from "./CommentsSection";
import CommentForm from "./CommentForm";

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
    let isMounted = true; 

    const fetchProductData = async () => {
      try {
        const productData = await productService.getOne(flavorId);
        if (isMounted) setProduct(productData); 

        const commentsData = await commentService.getAll(flavorId);
        if (isMounted) {
          dispatch({
            type: "GET_ALL_COMMENTS",
            payload: commentsData,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProductData();

    return () => {
      isMounted = false;
    };
  }, [flavorId]);

  async function addCommentHandler(values) {
    try {
      const newComment = await commentService.create(flavorId, values.comment, rating);
      newComment.owner = { username };

      dispatch({
        type: "ADD_COMMENT",
        payload: newComment,
      });

      resetForm();
    } catch (error) {
      toast.error('Error adding comment: ' + error.message);
    }
  }

  function resetForm() {
    onChange({ target: { name: "comment", value: "" } });
    setRating(0);
  }

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const onDeleteComment = async (commentId) => {
    try {
      await commentService.remove(commentId);
      dispatch({
        type: "DELETE_COMMENT",
        payload: commentId,
      });
      toast.success('Comment deleted successfully!');
    } catch (error) {
      toast.error('Error deleting comment: ' + error.message);
    }
  };

  const onDeleteClick = useCallback(async (productId) => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await productService.remove(productId);
              navigate("/catalog");
              toast.success('Product deleted successfully!');
            } catch (error) {
              toast.error('Error deleting product: ' + error.message);
            }
          }
        },
        {
          label: 'No',
          onClick: () => {
            toast.info('Product deletion cancelled.');
          }
        }
      ]
    });
  }, [navigate]);

  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              <div className="col-lg-6">
                <ProductImage imageUrl={product.imageUrl} />
              </div>
              <div className="col-lg-6">
                <ProductInfo product={product} />
                
                {!isAdmin && (
                  <QuantitySelector count={count} setCount={setCount} />
                )}

                {!isAdmin && isAuthenticated && (
                  <AddToCartButton 
                    product={product} 
                    count={count} 
                    onCartSubmit={onCartSubmit} 
                  />
                )}

                {isAdmin && (
                  <AdminControls 
                    productId={product._id} 
                    onDeleteClick={onDeleteClick} 
                    flavorId={flavorId}
                  />
                )}

                {!isAdmin && !isAuthenticated && (
                  <div className="admin-buttons">
                    <Link to={`/login`} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">Sign In to Start Your Order!</Link>
                  </div>
                )}
              </div>
              {isAuthenticated && (
                <div className="col-lg-12">
                  <CommentsSection 
                    comments={comments} 
                    onDeleteComment={onDeleteComment} 
                  />
                  <CommentForm 
                    onSubmit={onSubmit} 
                    values={values} 
                    onChange={onChange} 
                    handleRatingChange={handleRatingChange} 
                    rating={rating}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <SideCatalog />
          </div>
        </div>
      </div>
    </div>
  );
}
