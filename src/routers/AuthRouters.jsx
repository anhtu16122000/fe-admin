import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from '../layout/Loading'

const Login = Loading( lazy( () => import('../pages/auth/Login')) )

const AuthRouters = () => {

  return (
    <Routes>
      <Route path = '/auth'>
          <Route index element = {<Login/>}/>
      </Route>
    </Routes>
  )
}

export default AuthRouters