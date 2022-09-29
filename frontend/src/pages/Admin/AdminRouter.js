import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ALayout, Profile, Transaction } from '@/pages/Admin'

import Error from '@/_utils/Error'


const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route path='user'>
                    <Route path=':id' element={<Profile />} />
                </Route>
                <Route path='user/:id/account'>
                    <Route path=':id' element={<Transaction />} />

                </Route>

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;