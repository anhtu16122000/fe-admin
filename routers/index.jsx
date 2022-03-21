import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from '../redux/reducers/userSlice'
import { userState$ } from '../redux/selectors'
import { useNavigate } from 'react-router-dom'

const Routers = () => {
    // const dispatch = useDispatch()
    // const user = useSelector(userState$)
    // const navigate = useNavigate()

    // useEffect( () => {
    //     if(!user.isLogin) {
    //         navigate('/login')
    //     }
    // }, [])


    return (
        <div>Check authorization then redirect</div>
    )
}

export default Routers