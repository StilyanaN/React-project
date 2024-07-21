import { useEffect, useState } from "react";
import * as productService from "../../../services/productService";
import SideCatalog from "../side-catalog/SideCatalog";
import CatalogItem from "./catalog-item/CatalogItem";
import Loader from "../../loader/Loader";
import "./Catalog.css";

export default function Catalog() {
  const [flavors, setFlavors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    productService.getAll()
      .then(result => {
        setFlavors(result);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const pageChangeHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFlavors = flavors.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(flavors.length / itemsPerPage);

  if (loading) {
    return <p>{<Loader />}</p>;
  }

  return (
    <>
      <div className="container-fluid page-header py-5"></div>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-lg-3">
                  <SideCatalog />
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {currentFlavors.length > 0 ? (
                      currentFlavors.map((flavor) => (
                        <CatalogItem key={flavor._id} {...flavor} />
                      ))
                    ) : (
                      <h3 className="no-articles">No products yet</h3>
                    )}
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <button
                          className="rounded"
                          onClick={() => pageChangeHandler(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          «
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                          <button
                            key={index}
                            className={`rounded ${currentPage === index + 1 ? "active" : ""}`}
                            onClick={() => pageChangeHandler(index + 1)}
                          >
                            {index + 1}
                          </button>
                        ))}
                        <button
                          className="rounded"
                          onClick={() => pageChangeHandler(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          »
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
