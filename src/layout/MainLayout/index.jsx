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
    console.log('children', children)

    const classes = useStyle()

    return (
        <AuthGuard>
            <AppBar
                enableColorOnDark
                position = 'fixed'
                color='inherit'
                elevation={0}
                className={classes.appBarWidth}
            >
                <Toolbar>
                   <Header/>
                </Toolbar>
            </AppBar>
                        {children}
    
        </AuthGuard>
    )
}

export default MainLayout