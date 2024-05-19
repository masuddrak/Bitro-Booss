import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const navoptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/orders/soup">Orders</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>

        <li><NavLink to="/card">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+99</div>

        </NavLink></li>
    </>
    const handelLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error.message)
            });

    }
    return (
        <div>
            <div className="navbar fixed z-30  bg-opacity-60 bg-slate-600 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navoptions}
                        </ul>
                    </div>
                    <Link to="/" className='text-xl font-bold text-white'>Bistro Boos</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navoptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handelLogout} className="btn">Logout</button> : <NavLink to="/login" className="btn ">Login</NavLink>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;