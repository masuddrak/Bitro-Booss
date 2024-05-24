import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <h2 className="text-4xl">Loading......</h2>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }}></Navigate>
};

export default AdminRoute;