import {
    createBrowserRouter,
    
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AllMenu from "../Pages/AllMenu";
import Orders from "../Pages/Orders";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/about",
                element:<About></About>
            },
            
            {
                path: "/menu",
                element:<AllMenu></AllMenu>
            },
            {
                path: "/orders/:category",
                element:<Orders></Orders>
            },

        ]
    },
]);