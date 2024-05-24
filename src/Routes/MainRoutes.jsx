import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AllMenu from "../Pages/AllMenu";
import Orders from "../Pages/Orders";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashbord from "../Layout/Dashbord";
import UserHome from "../Pages/Dashbord/UserHome"
import Reservation from "../Pages/Dashbord/Reservation"
import MyCart from "../Pages/Dashbord/MyCart";
import AllUsers from "../Pages/Dashbord/AllUsers";
import PrivetRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashbord/AddItem";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },

            {
                path: "/menu",
                element: <AllMenu></AllMenu>
            },
            {
                path: "/orders/:category",
                element: <PrivetRoute><Orders></Orders></PrivetRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><Dashbord></Dashbord></PrivetRoute>,
        children: [
            {
                path: "/dashboard",
                element: <UserHome></UserHome>
            },
            {
                path: "/dashboard/reservation",
                element: <Reservation></Reservation>
            },
            {
                path: "/dashboard/mycarts",
                element: <MyCart></MyCart>
            },
            // admin user routes
            {
                path:"/dashboard/allUsers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"/dashboard/addItems",
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            }
        ]
    }
]);