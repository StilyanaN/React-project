/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import * as productService from "../../../services/productService";
// import SideCatalog from "../side-catalog/SideCatalog";
import CatalogItem from "./catalog-item/CatalogItem";
import "./Catalog.css";

export default function Catalog() {
  const [flavors, setFlavors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService
      .getAll()
      .then((result) => {
        if (result && typeof result === 'object') {
          const flavorsArray = Object.values(result);
          setFlavors(flavorsArray);
        } else {
          console.error("Expected an object but got:", result);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching flavors:", err); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
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
                  {/* <SideCatalog /> */}
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {flavors.length > 0 ? (
                      flavors.map((flavor) => (
                        <CatalogItem key={flavor._id} {...flavor} />
                      ))
                    ) : (
                      <h3 className="no-articles">No products yet</h3>
                    )}
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          «
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          »
                        </a>
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
