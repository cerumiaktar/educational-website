
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TopNavBar from '../components/TopNavBar/TopNavBar';

const Root = () => {
    return (
        <div>
            <TopNavBar></TopNavBar>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;