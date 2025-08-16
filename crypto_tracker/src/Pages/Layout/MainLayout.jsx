import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout;