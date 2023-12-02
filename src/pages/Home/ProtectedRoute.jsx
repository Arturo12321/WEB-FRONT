import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext"


export default function ProtectedRoute() {

    const {loading, isAuthenticated } = useUser();

    if (loading) return <h1>Loading...</h1>

    if(!loading && !isAuthenticated) return <Navigate to='/login' replace />;

    return (
        <Outlet/>
    )
}
