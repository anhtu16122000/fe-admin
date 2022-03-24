import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductManage from '../pages/ProductManage'
import { userState$ } from '../redux/selectors'
import userSlice from '../redux/reducers/userSlice'
import config from '../config'
import AuthRouters from './AuthRouters'

const DashboardRouters = () => {

  return (
    <Routes path = '/'>
      <Route path='/dashboard/default' exact element={<Home />} />
      <Route path='/product' exact element={<ProductManage />} />
    </Routes>
  )
}

export default DashboardRouters