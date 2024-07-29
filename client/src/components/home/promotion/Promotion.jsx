import { Link } from "react-router-dom";
import "./Promotion.css";

export default function Promotion() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container-fluid my-5 py-5 px-0">
      <div className="row bg-primary m-0">
        <div className="col-md-62 px-0" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100"
              src="img/promotion.jpg"
              style={{ objectFit: "cover" }}
            />
            <button
              type="button"
              className="btn-play"
              data-toggle="modal"
              data-src="img/video.mp4"
              data-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
        <div className="col-md-6 py-5 py-md-0 px-0">
          <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
        
            <h3 className="font-weight-bold text-white mt-3 mb-4">
              Discover Our Best Ice Creams
            </h3>
            <p className="text-white mb-4">
              Experience the ultimate indulgence with our range of gourmet ice
              creams, each crafted to perfection using the finest ingredients.
              From the rich and velvety **Chocolate Delight**, bursting with
              deep cocoa flavor, to the refreshing and fruity **Strawberry
              Bliss**, made with real strawberries for a fresh and natural
              taste. Savor the exotic and aromatic **Vanilla Bean**, featuring
              the finest vanilla beans, or delight in the creamy and nutty
              **Pistachio Delight**, a favorite for its unique and irresistible
              flavor profile. No matter your preference, our ice creams promise
              to deliver an unforgettable taste experience that will leave you
              craving more.
            </p>

            <Link
              to={"/catalog"}
              className="btn btn-secondary py-3 px-5 mt-2"
              onClick={handleScrollToTop}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
