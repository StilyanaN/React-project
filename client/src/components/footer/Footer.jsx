import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="container-fluid footer bg-light py-5"
      style={{ marginTop: 90 }}
    >
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-12 mb-4">
            <a href="index.html" className="navbar-brand m-0">
              <h1 className="m-0 mt-n2 display-4 text-primary">
                <span className="text-secondary">ice</span>DREAM
              </h1>
            </a>
          </div>
          <div className="col-12 mb-4">
            <Link
              to="http://www.x.com/"
              className="btn btn-outline-secondary btn-social mr-2"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              to="http://www.facebook.com/"
              className="btn btn-outline-secondary btn-social mr-2"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              to="http://www.linkedin.com/"
              className="btn btn-outline-secondary btn-social mr-2"
            >
              <i className="fab fa-linkedin-in"  />
            </Link>
            <Link
              to="http://www.instagram.com/"
              className="btn btn-outline-secondary btn-social mr-2"
            >
              <i className="fab fa-instagram" />
            </Link>


          </div>
          <div className="col-12 mt-2 mb-4">
            <div className="row">
              <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                <p className="mb-2">123 Street, Kazanlak, Bulgaria</p>
                <p className="mb-0">+012 345 67890</p>
              </div>
              <div className="col-sm-6 text-center text-sm-left">
                <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                <p className="mb-0">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="m-0">
              © <a href="#">Domain</a>. All Rights Reserved. Designed by{" "}
              <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
