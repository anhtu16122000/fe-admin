import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from '../layout/Loading'
import ForgotPassword from '../pages/auth/ForgotPassword'

const Login = Loading( lazy( () => import('../pages/auth/Login')) )

const AuthRouters = () => {

  return (
    <Routes>
      <Route path = '/auth'>
          <Route path="login" element = {<Login/>} />
          <Route path="forgot-password" element = {<ForgotPassword/>} />
      </Route>
    </Routes>
  )
}

export default AuthRouters