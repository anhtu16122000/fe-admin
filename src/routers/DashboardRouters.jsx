import React, { lazy } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Loading from '../layout/Loading'
import Home from '../pages/Home'
import ProductManage from '../pages/ProductManage'

const DashboardRouters = () => {

  return (
    <Routes>
      <Route exact path='/'>
        <Route index element={<Home />} />
        <Route path="/product" element={<ProductManage />} />
      </Route>
    </Routes>
  )
}

export default DashboardRouters