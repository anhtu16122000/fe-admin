import { makeStyles } from '@material-ui/core'
import React from 'react'
import MainCard from '../../components/common/MainCard'
import NavMotion from '../../layout/NavMotion'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '475px',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '20px',
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: '400px'
        }
    },
    content: {
        padding: theme.spacing(5) + '!important',
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(3) + '!important'
        }
    }
}))

const AuthCardWrapper = ({ children, ...other }) => {
    const classes = useStyles()
    return (
        <MainCard className={classes.card} contentClass={classes.content} {...other} >
            {children}
        </MainCard>
    )
}

export default AuthCardWrapper