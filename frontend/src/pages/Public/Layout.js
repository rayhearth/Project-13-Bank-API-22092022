import React from 'react';
import { Outlet } from 'react-router-dom'
// import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PHeader from '@/components/Public/PHeader';

const Layout = () => {
    return (
        <div className='layout'>
            <PHeader />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;