import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Layout, Home, Login } from '@/pages/Public'

import Error from '@/_utils/Error'


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<Error />} />

            </Route>
        </Routes>
    );
};

export default PublicRouter;