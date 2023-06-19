import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../ui/Header/Header'

const RootLauout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLauout