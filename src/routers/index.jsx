import React, { lazy } from 'react'
import MainLayout from '../layout/MainLayout'
import ClientGuard from './ClientGuard'
import Loading from '../layout/Loading'
import { Outlet, Route, Routes } from 'react-router-dom'
import ProductManage from '../pages/ProductManage'
import Home from '../pages/Home'
const Login = Loading(lazy(() => import('../pages/auth/Login')))
const ForgotPassword = Loading(lazy(() => import('../pages/auth/ForgotPassword')))

const Routers = () => {

    return (
        <Routes>
            <Route path='/auth' element={<ClientGuard> <Outlet/> </ClientGuard>}>
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path='/dashboard' element={<MainLayout> <Outlet /> </MainLayout>}  >
                <Route index element={<Home />} />
                <Route path="product" element={<ProductManage />} />
            </Route>
        </Routes>
    )
}

export default Routers