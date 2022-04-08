import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import config from '../config'
import { userState } from '../redux/selectors'

const ClientGuard = ( { children } ) => {
    const navigate = useNavigate()
    const { isLogin } = useSelector(userState)

    React.useEffect( () => {
        if(isLogin) {
            console.log('da login', isLogin)
            navigate(config.defaultPath)
        }
    }, [isLogin])

    return children
}

export default ClientGuard