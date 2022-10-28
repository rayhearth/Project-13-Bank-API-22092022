import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Layout/Footer';
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