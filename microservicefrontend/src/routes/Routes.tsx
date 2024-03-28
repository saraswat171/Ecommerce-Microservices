import Sidebarlayout from "../layouts/SidebarLayout"

import { Navigate, RouteObject } from 'react-router';
import React from 'react'
import BaseLayout from "../layouts/BaseLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../pages/AddProduct";
import Settings from "../pages/Settings";
import Orders from "../pages/Orders";
import ShowProduct from "../pages/ShowProduct";
const routes: RouteObject[] = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <Navigate to="login" replace />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/home',
        element: <Sidebarlayout />,
        children: [
            {
                path: '',
                element: <Navigate to="settings" replace />
            },
            {
                path: 'dashboard',
                element: <AddProduct />
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'products',
                element: <ShowProduct />
            }
        ]
    },
]

export default routes