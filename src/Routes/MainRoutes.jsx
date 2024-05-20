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
                element: <Orders></Orders>
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
        path: "/dashbord",
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: "/dashbord",
                element: <UserHome></UserHome>
            },
            {
                path: "/dashbord/reservation",
                element: <Reservation></Reservation>
            },
            {
                path: "/dashbord/mycarts",
                element: <MyCart></MyCart>
            },
        ]
    }
]);