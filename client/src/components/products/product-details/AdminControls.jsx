/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const AdminControls = ({ productId, onDeleteClick, flavorId }) => {
  return (
    <div className="admin-buttons">
      <Link to={`/catalog/${flavorId}/edit`} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">Edit</Link>
      <button onClick={() => onDeleteClick(productId)} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">Delete</button>
    </div>
  );
};

export default AdminControls;
