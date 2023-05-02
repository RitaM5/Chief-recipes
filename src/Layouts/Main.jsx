import React from 'react';
import Home from '../Pages/Home/Home/Home';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import HomeBanner from '../Pages/Shared/HomeBanner/HomeBanner';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <div className='md:min-h-[calc(100vh-341px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;