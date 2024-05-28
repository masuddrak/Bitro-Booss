import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { LiaUtensilsSolid } from "react-icons/lia";
import { FaListUl } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import useAdmin from "../hooks/useAdmin";


const Dashbord = () => {
    const { carts } = useCart()
    const [isAdmin,isPending]=useAdmin()
    if(isPending){
        return <h1 className="text-4xl">Loading...........</h1>
    }
    
    const checkAdmin = isAdmin
    return (
        <div className="flex container mx-auto">
            <div className="min-h-screen bg-orange-300 w-1/5 p-4">
                <ul className="space-y-3 uppercase">
                    {
                        checkAdmin ? <>
                            <li ><NavLink className="flex gap-2 items-center" to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink className="flex gap-2 items-center" to="/dashboard/addItems"><LiaUtensilsSolid></LiaUtensilsSolid> Add item</NavLink></li>
                            <li><NavLink className="flex gap-2 items-center"  to="/dashboard/manageItems"><FaListUl></FaListUl> Manage item</NavLink></li>
                            <li><NavLink className="flex gap-2 items-center"  to="/dashboard/manageBooking"><FaBook></FaBook> Manage booking</NavLink></li>

                            <li><NavLink className="flex gap-2 items-center"  to="/dashboard/allUsers"><PiUsersThreeFill></PiUsersThreeFill>all users</NavLink></li>
                        </> :
                            <>
                                <li ><NavLink className="flex gap-2 items-center" to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink className="flex gap-2 items-center" to="/dashboard/reservation"><FaHome></FaHome> Resevation</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory" className="flex gap-2 items-center"><FaHome></FaHome> Payment Histroy</NavLink></li>
                                <li><NavLink className="flex gap-2 items-center" to="/dashboard/mycarts"><FaHome></FaHome> My Cart ({carts.length})</NavLink></li>
                                <li><NavLink className="flex gap-2 items-center"><FaHome></FaHome> Add Review</NavLink></li>
                                <li><NavLink className="flex gap-2 items-center"><FaHome></FaHome> My Booking</NavLink></li>
                            </>
                    }


                    <div className="divider">OR</div>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/orders/soup">Orders</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 px-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;