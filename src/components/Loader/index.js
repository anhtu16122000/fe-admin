import { makeStyles } from '@material-ui/core'
import React from 'react'
import { LinearProgress } from '@mui/material';

const useStyle = makeStyles( (theme) => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1301,
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    }
}))

const Loader = () => {

    const classes = useStyle()

    return (
        <div className={classes.root} >
            <LinearProgress  color="primary" />
        </div>
    )
}

export default Loader