import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../ui/Header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const RootLauout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default RootLauout