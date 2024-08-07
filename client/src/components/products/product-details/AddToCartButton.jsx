/* eslint-disable react/prop-types */

const AddToCartButton = ({ product, count, onCartSubmit }) => {
  return (
    <button
      onClick={() => onCartSubmit({
        flavorId: product._id,
        imageUrl: product.imageUrl,
        name: product.name,
        price: product.price,
        quantity: count,
      })}
      className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
    >
      <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
    </button>
  );
};

export default AddToCartButton;
