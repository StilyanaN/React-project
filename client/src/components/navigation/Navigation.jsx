import { NavLink } from "react-router-dom";
import DropdownProfile from "../user/dropdown-profile/DropdownProfile";

export default function Navigation() {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div
        className="container-lg position-relative p-0 px-lg-3"
        style={{ zIndex: 9 }}
      >
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
          <NavLink to="/" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-primary">
              <span className="text-secondary">ice</span>DREAM
            </h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <NavLink to="/" className="navbar-brand mx-5 d-none d-lg-block">
                <h1 className="m-0 display-4 text-primary">
                  <span className="text-secondary">ice</span>DREAM
                </h1>
              </NavLink>
            </div>

            <div className="navbar-nav mr-auto py-0">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
              <NavLink 
                to="/catalog" 
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              >
                Catalog
              </NavLink>
              <NavLink 
                to="/cart" 
                className={({ isActive }) => `nav-item nav-link icon ${isActive ? 'active' : ''}`}
              >
                <i className="fa fa-shopping-bag fa-2x" />
              </NavLink>
              <DropdownProfile />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
