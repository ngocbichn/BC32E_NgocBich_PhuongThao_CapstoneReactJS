import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import HomeLayout from '../components/pages/userLayout/HomeLayout'

const Routers = () => {
    const Routing = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: 'home',
                    element: <HomeLayout />
                }
            ]
        }
    ])
    return Routing
}

export default Routers