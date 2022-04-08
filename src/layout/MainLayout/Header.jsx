import React from 'react'
import propTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { Avatar, Box, ButtonBase } from '@mui/material'
import LogoSection from './LogoSection'
import MenuIcon from '@mui/icons-material/Menu';

const useStyle = makeStyles(theme => ({
    boxContainer: {
        width: '228px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto'
        }
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        background: theme.palette.secondary,
        borderRadius: '8px',
        // color: theme.breakpoints.secondary.dark,
        '&:hover': {
            // background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light
        }
    },
    grow: {
        flexGrow: 1,
    }
}))

const Header = () => {
    const classes = useStyle()

    return (
        <div className={classes.boxContainer}>
            <Box component="span" sx={{ display: { xs: 'none', md: 'block'}, width: '180px' }}>
                <LogoSection />
            </Box>
            <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }} >
                <Avatar variant="rounded"  className={classes.headerAvatar}>
                     <MenuIcon color='secondary' sx={{fontSize: 30, ':hover':{
                         backgroundColor: '#ccc'
                     }}} />
                </Avatar>
            </ButtonBase>
        </div>
    )
}

export default Header