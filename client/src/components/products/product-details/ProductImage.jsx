/* eslint-disable react/prop-types */

const ProductImage = ({ imageUrl }) => {
  return (
    <div className="border rounded">
      <a href="#">
        <img
          src={imageUrl}
          className="img-fluid rounded"
          alt="Product"
        />
      </a>
    </div>
  );
};

export default ProductImage;
