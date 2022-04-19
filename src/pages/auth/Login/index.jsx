import React from 'react'
import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FormLogin from './FormLogin'
import { makeStyles } from '@material-ui/core'
import ContainerAuth from '../ContainerAuth'
import NavMotion from '../../../layout/NavMotion'

const Login = () => {
    const theme = useTheme()

    return (
        <ContainerAuth>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
                    <NavMotion>
                        <Box>
                            <Typography variant='h4' align='center' mb={2} sx={{ color: theme.palette.secondary.main, fontSize: '24px' }}  >
                                Hi, Welcome Back
                            </Typography>
                            <Typography align='center' fontWeight={'200'} sx={{ fontSize: 16 }}>
                                Đăng nhập với tài khoản email của bạn !
                            </Typography>
                        </Box>

                        <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'center' }}>
                            <FormLogin />
                        </Box>
                    </NavMotion>
                </Box>
            </Box>
        </ContainerAuth>
    )
}

export default Login