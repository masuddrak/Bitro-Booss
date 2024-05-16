
import Nvaber from '../Sheard/Nvaber';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Nvaber></Nvaber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;