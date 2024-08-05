import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import * as productService from "../../../services/productService";

export default function Products() {
  const [flavors, setFlavors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService
      .getSorted()
      .then((result) => {
        if (result && typeof result === "object") {
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

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="section-title position-relative mb-5">
              Best Prices We Offer For Ice Cream Lovers
            </h1>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
        </div>
        <div className="row">
          <div className="col-12">
            <OwlCarousel
              className="owl-carousel owl-nav"
              aria-hidden="true"
              loop
              nav
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
              navText={[
                "<div class='owl-prev'><i class='fa fa-angle-left'></i></div>",
                "<div class='owl-next'><i class='fa fa-angle-right'></i></div>",
              ]}
            >
              {flavors.map(({ _id, name, price, imageUrl }) => (
                <div
                  key={_id}
                  className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3"
                >
                  <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                    <h4 className="font-weight-bold text-white mb-0">
                      ${price}
                    </h4>
                  </div>
                  <div
                    className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                    style={{ width: 150, height: 150 }}
                  >
                    <img
                      className="rounded-circle w-100 h-100"
                      src={imageUrl}
                      style={{ objectFit: "cover" }}
                      alt={name}
                    />
                  </div>
                  <h5 className="font-weight-bold mb-4" >{name}</h5>
                  <Link
                    to={`/catalog/${_id}`}
                    className="btn btn-sm btn-secondary"
                    onClick={handleScrollToTop}
                  >
                    Order Now
                  </Link>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
