import { useEffect, useState } from "react";
import * as productService from "../../../services/productService"
import "./Portfolio.css";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    productService.getSorted()
      .then((items) => {
        setPortfolioItems(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid my-5 py-5 px-0">
      <div className="row justify-content-center m-0">
        <div className="col-lg-5">
          <h1 className="section-title position-relative text-center mb-5">
            Delicious Ice Cream Made From Our Very Own Organic Milk
          </h1>
        </div>
      </div>
      <div className="row m-0 portfolio-container">
        {portfolioItems.length > 0 ? (
          portfolioItems.map((item) => (
            <div key={item._id} className="col-lg-4 col-md-6 p-0 portfolio-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={item.imageUrl} alt={item.title} />
                <a
                  className="portfolio-btn"
                  href={item.imageUrl}
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No portfolio items available</p>
        )}
      </div>
    </div>
  );
}
