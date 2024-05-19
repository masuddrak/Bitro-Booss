
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Sheard/Footer';
import Navber from '../Sheard/Navber';

const MainLayout = () => {
    const location=useLocation()
    const handeHeader=location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div className='container mx-auto'>
            { handeHeader || <Navber></Navber>}
            <Outlet></Outlet>
            {handeHeader || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;