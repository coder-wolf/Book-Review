import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='px-20 pt-3 pb-32'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;