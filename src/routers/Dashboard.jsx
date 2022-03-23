import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductManage from '../pages/ProductManage'
import { userState$ } from '../redux/selectors'
import userSlice  from '../redux/reducers/userSlice'
import config from '../config'
import AuthRouters from './AuthRouters'

const Dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector(userState$)
  const navigate = useNavigate()

  useEffect( () => {
    // check authentication 
    // dispatch(userSlice.actions.request())
    //   if(!user.isLogin) {
    //       navigate('/login')
    //   }
  }, [dispatch])


  return (
    <Routes>
      <Route path='/dashboard/default' exact element={ <Home /> } />
      <Route path='/product' exact element={ <ProductManage /> } />
      <AuthRouters />

      <Route path='*' element={ <Navigate to={config.defaultPath} replace /> } />
    </Routes>
  )
}

export default Dashboard