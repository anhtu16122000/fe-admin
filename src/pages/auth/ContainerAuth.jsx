import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import AuthWrapper from './AuthWrapper'
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'

const useStyle = makeStyles((theme) => ({

}))

const ContainerAuth = ({ children }) => {
    const theme = useTheme()
    const classes = useStyle()
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <AuthWrapper>
            <Grid container spacing={2}
                sx={{
                    minHeight: '100vh',
                    backgroundColor: 'rgb(227 242 253)'
                }}
            >
                <Grid xs={12} sm={7} item sx={{ backgroundColor: theme.palette.background.default }} >
                    {children}
                </Grid>
                <Grid item xs={12} sm={5}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: matchDownMD ? theme.palette.background.default : 'transparent'
                    }}
                >
                    <motion.div 
                        animate={{y: -20}} 
                        transition={{
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: 'mirror'
                        }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img src="../Image/img-login.svg" width="80%" height="80%" style={{ objectFit: 'contain',  }} />
                    </motion.div>
                </Grid>
            </Grid>
        </AuthWrapper >
    )
}

export default ContainerAuth