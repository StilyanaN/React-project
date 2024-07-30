/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext"

export default function AuthGuard(props) {
    const { isAdmin} = useContext(AuthContext);

    if (!isAdmin) {
        return <Navigate to="/404" />;
    }

    return <Outlet />;
}
