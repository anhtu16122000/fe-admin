import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import Header from './Header'
import AuthGuard from '../../routers/AuthGuard'

const useStyle = makeStyles( (theme) => ({
    root: {
        display: 'flex',
    },
    appBarWidth: {
        transition: theme.transitions.create('width'),
        backgroundColor: theme.palette.background.default,

    }
}))

const MainLayout = ({children}) => {
    const classes = useStyle()

    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    )
}

export default MainLayout