import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as productService from '../../../services/productService';

export default function SideCatalog() {
  const [flavors, setFlavors] = useState([]);

  useEffect(() => {
    productService.getSorted()
      .then(result => {
        setFlavors(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="mb-3">
            <h4>Flavors</h4>
            <ul className="list-unstyled fruite-categorie">
              {flavors.map(flavor => (
                <li key={flavor._id}>
                  <div className="d-flex justify-content-between fruite-name">
                    <Link to={`/catalog/${flavor._id}`} onClick={handleScrollToTop}>
                      <i className="fas fa-ice-cream"><span>{flavor.name}</span></i>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
