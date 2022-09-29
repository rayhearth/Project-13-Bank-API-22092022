import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ALayout, Profile, Transaction } from '@/pages/Admin'



const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route path='profile' element={<Profile />} />
                <Route path='transaction' element={<Transaction />} />

            </Route>
        </Routes>
    );
};

export default AdminRouter;