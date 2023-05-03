import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const ViewRecipe = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:min-h-[calc(100vh-341px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewRecipe;