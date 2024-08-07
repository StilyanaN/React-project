/* eslint-disable react/prop-types */

const ProductInfo = ({ product }) => {
  return (
    <>
      <h4 className="fw-bold mb-3">{product.name}</h4>
      <h5 className="fw-bold mb-3">{product.price} $</h5>
      <p className="mb-4">
        Calories: <span>{product.calories}</span> kcal per 100g
      </p>
    </>
  );
};

export default ProductInfo;
