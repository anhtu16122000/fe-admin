import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'

const AuthRouters = () => {
  return (
    // <Routes>
        <Route path = "/login" element = {<Login/>} />
    // </Routes>
  )
}

export default AuthRouters