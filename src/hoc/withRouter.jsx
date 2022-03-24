import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const withRouter = (Child) => {
    return (props) => {
        const navigate = useNavigate()
        const location = useLocation()
        return <Child  {...props} location = {location} navigate = {navigate} />
    }
} 

export default withRouter