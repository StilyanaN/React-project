import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import { useDropdown } from "../../hooks/useDropdown";
import './DropdownProfile.css';

export default function DropdownProfile() {
    const { showDropdown, hideDropdown, isVisible } = useDropdown();
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const { isAuthenticated, username, isAdmin } = useContext(AuthContext);

    const handleNavLinkClick = () => {
        if (!isNavbarCollapsed) {
            setIsNavbarCollapsed(true); 
        }
    };

    return (
        <div className="ds-dropdown-wrapper" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <div className="ds-dropdown-button">
                <i className="fas fa-user fa-2x nav-item nav-link icon" />
            </div>
            {isVisible && (
                <div className="ds-dropdown" onClick={hideDropdown}>
                    {isAuthenticated ? (
                        <>
                            <div className="ds-dropdown-header">
                                <span className="ds-text ds-text-variant__header ds-text-size__sm">{username},</span>
                                <span className="ds-text ds-text-variant__paragraph ds-text-size__m">happy to see you again!</span>
                            </div>
                            <div className="ds-dropdown-content">
                                <ul>
                                    {!isAdmin && (
                                        <li>
                                            <Link to="/profile/orders" className="ds-link ds-text ds-text-variant__paragraph ds-link__dark ds-text-size__l">
                                                <span className="ds-icon outline-package-box ds-icon-size__m"></span>
                                                <span className="ds-text ds-text-variant__paragraph ds-text-size__m">My orders</span>
                                            </Link>
                                        </li>
                                    )}
                                    {isAdmin && (
                                        <li>
                                            <Link to="/create" className="ds-link ds-text ds-text-variant__paragraph ds-link__dark ds-text-size__l">
                                                <span className="ds-icon outline-add ds-icon-size__m"></span>
                                                <span className="ds-text ds-text-variant__paragraph ds-text-size__m">Add Product</span>
                                            </Link>
                                        </li>
                                    )}
                                    <li>
                                        <Link to="/logout" className="ds-link ds-text ds-text-variant__paragraph ds-link__dark ds-text-size__l" onClick={handleNavLinkClick}>
                                            <span className="ds-icon outline-log-out ds-icon-size__m"></span>
                                            <span className="ds-text ds-text-variant__paragraph ds-text-size__m">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="ds-link ds-text ds-text-variant__paragraph ds-link__dark ds-text-size__l" onClick={handleNavLinkClick}>
                                <span className="ds-icon outline-log-in ds-icon-size__m"></span>
                                <span className="ds-text ds-text-variant__paragraph ds-text-size__m">Login</span>
                            </Link>
                            <Link to="/register" className="ds-link ds-text ds-text-variant__paragraph ds-link__dark ds-text-size__l" onClick={handleNavLinkClick}>
                                <span className="ds-icon outline-log-in ds-icon-size__m"></span>
                                <span className="ds-text ds-text-variant__paragraph ds-text-size__m">Register</span>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
