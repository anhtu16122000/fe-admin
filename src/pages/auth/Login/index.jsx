import React from 'react'
import { Stack, Typography, Container, Grid, Box, Paper, styled, useMediaQuery, Button } from '@mui/material'
import AuthWrapper from '../AuthWrapper'
import AuthCardWrapper from '../AuthCardWrapper'
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../../../assets/Icon/Logo'
import { useTheme } from '@mui/material/styles'
import FormLogin from './FormLogin'
import AnimateButton from '../../../components/common/AnimateButton'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles((theme) => ({

}))
const containerBox = theme => ({

})

const Login = () => {
    const theme = useTheme()
    const classes = useStyle()
    console.log('theme.breakpoints.down)',theme.breakpoints.down('md'))

    return (
        <AuthWrapper>
            <Grid container spacing={2}
                sx={{
                    minHeight: '100vh'
                }}
            >
                <Grid xs={12} sm={7} item sx={{ backgroundColor: 'white', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
                        <Box sx={{display: 'flex', flexDirection:'column', width: '100%',}}>
                            <Box>
                                <Typography variant='h4'  align='center' mb={2} sx={{ color: theme.palette.secondary.main, fontSize: '24px' }}  >
                                    Hi, Welcome Back
                                </Typography>
                                <Typography  align='center' fontWeight={'200'} sx={{ fontSize: 16 }}>
                                    Đăng nhập với tài khoản email của bạn !
                                </Typography>
                            </Box>

                            <Box sx={{marginTop: 3, display: 'flex', justifyContent: 'center'}}>
                                <FormLogin />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={5} xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="../Image/img-login.svg" width="80%" height="80%" style={{objectFit: 'contain'}}  />
                </Grid>
            </Grid>
        </AuthWrapper>
    )
}

export default Login