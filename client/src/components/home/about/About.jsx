import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function About() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
};
  return (
    <Slide direction="right" duration="3500" triggerOnce='true'>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="section-title position-relative text-center mb-5">
                Celebrating the Art of Ice Cream Since 1950
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 py-5">
              <h4 className="font-weight-bold mb-3">About Us</h4>
              <h5 className="text-muted mb-3">
                Crafting traditional ice cream with passion and dedication, one scoop at a time.
              </h5>
              <p>
                Founded in 1950, our family-owned ice cream parlor has been serving up smiles and delicious ice cream made from the finest ingredients. Each flavor is a testament to our commitment to quality, bringing together classic and innovative recipes that delight both young and old.
              </p>
              <Link to="/catalog" className="btn btn-secondary mt-2" onClick={handleScrollToTop}> 
                Go to Shop
              </Link>
            </div>
            <div className="col-lg-4" style={{ minHeight: 400 }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/about-pic.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Our Ice Cream Shop"
                />
              </div>
            </div>
            <div className="col-lg-4 py-5">
              <h4 className="font-weight-bold mb-3">Our Features</h4>
              <p>
                Discover the unique features that set our ice cream apart:
              </p>
              <h5 className="text-muted mb-3">
                <i className="fa fa-check text-secondary mr-3" />
                Handcrafted flavors with locally sourced ingredients
              </h5>
              <h5 className="text-muted mb-3">
                <i className="fa fa-check text-secondary mr-3" />
                Traditional recipes passed down through generations
              </h5>
              <h5 className="text-muted mb-3">
                <i className="fa fa-check text-secondary mr-3" />
                A warm and welcoming atmosphere for families
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
