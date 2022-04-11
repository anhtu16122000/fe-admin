import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userState } from '../redux/selectors' 


const AuthGuard = ( { children } ) => {
    
    const navigate = useNavigate()
    const { isLogin } = useSelector(userState)

    React.useEffect( () => {
        if(!isLogin) {
            console.log('chua login', isLogin)
            navigate('/auth/login')
        }
    }, [isLogin])

    return children
}

export default AuthGuard