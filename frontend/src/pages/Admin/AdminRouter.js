import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ALayout, Profile, Transaction } from '@/pages/Admin'

import Error from '@/_utils/Error'


const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route index element={<Profile />}></Route>
                <Route path='user'>
                    <Route path=':id' element={<Profile />} />
                </Route>
                <Route path='/account' element={<Transaction />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;