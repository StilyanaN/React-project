import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownProfile from '../user/dropdown-profile/DropdownProfile';
import { useDropdown } from '../../hooks/useDropdown'

export default function Navigation() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); 
    const {  showDropdown, hideDropdown, isVisible } = useDropdown();

    const handleNavLinkClick = () => {
        if (!isNavbarCollapsed) {
            setIsNavbarCollapsed(true); 
        }
    };

    const handleToggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };


    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleLinkClick = () => {
    handleNavLinkClick();
    handleScrollToTop();
};
    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <NavLink to="/" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary">
                            <span className="text-secondary">ice</span>DREAM
                        </h1>
                    </NavLink>
                    <button
                        type="button"
                        className="navbar-toggler"
                        onClick={handleToggleNavbar} 
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={`collapse navbar-collapse justify-content-between ${isNavbarCollapsed ? 'collapse' : 'show'}`}
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
                                onClick={handleNavLinkClick} 
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                onClick={handleNavLinkClick} 
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/catalog"
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                onClick={handleNavLinkClick} 
                            >
                                Catalog
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className={({ isActive }) => `nav-item nav-link icon ${isActive ? 'active' : ''}`}
                                onClick={handleLinkClick}
                            >
                                <i className="fa fa-shopping-bag fa-2x" />
                            </NavLink>
                             
                            <DropdownProfile
                                showDropdown={showDropdown} 
                                hideDropdown={hideDropdown} 
                                isDropdownVisible={isVisible}
                            />
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
