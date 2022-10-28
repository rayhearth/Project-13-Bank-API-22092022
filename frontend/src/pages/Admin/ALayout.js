import React from 'react';
import { Outlet } from 'react-router-dom';
import AHeader from '@/components/Admin/AHeader';
import Footer from '@/components/Layout/Footer';

const ALayout = () => {
    return (
        <div className='ALayout'>
            <AHeader />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ALayout;