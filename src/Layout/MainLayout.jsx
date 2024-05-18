
import Nvaber from '../Sheard/Nvaber';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Sheard/Footer';

const MainLayout = () => {
    const location=useLocation()
    console.log(location.pathname)
    return (
        <div className='container mx-auto'>
            {location.pathname=="/login" || <Nvaber></Nvaber>}
            <Outlet></Outlet>
            {location.pathname=="/login" || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;