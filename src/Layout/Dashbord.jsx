import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashbord = () => {
    return (
        <div className="flex container mx-auto">
            <div className="min-h-screen bg-orange-300 w-1/5 p-4">
                <ul className="space-y-3 uppercase">
                    <li ><NavLink className="flex gap-2 items-center" to="/dashbord"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink className="flex gap-2 items-center" to="/dashbord/reservation"><FaHome></FaHome> Resevation</NavLink></li>
                    <li><NavLink className="flex gap-2 items-center"><FaHome></FaHome> Payment Histroy</NavLink></li>
                    <li><NavLink className="flex gap-2 items-center" to="/dashbord/mycarts"><FaHome></FaHome> My Cart</NavLink></li>
                    <li><NavLink className="flex gap-2 items-center"><FaHome></FaHome> Add Review</NavLink></li>
                    <li><NavLink className="flex gap-2 items-center"><FaHome></FaHome> My Booking</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 px-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;