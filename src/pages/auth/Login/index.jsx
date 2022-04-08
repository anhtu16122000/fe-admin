import React from 'react'
import { Stack, Typography, Container, Grid, Box, Paper, styled, useMediaQuery, Button } from '@mui/material'
import AuthWrapper from '../AuthWrapper'
import AuthCardWrapper from '../AuthCardWrapper'
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../../../assets/Icon/Logo'
import { useTheme } from '@mui/material/styles'
import FormLogin from './FormLogin'
import AnimateButton from '../../../components/common/AnimateButton'

const Login = () => {
    const theme = useTheme()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }))
    const RenderHeaderText = () => (
        <Grid
            container
            direction={matchDownSM ? 'column-reverse' : 'row'}
            alignItems="center"
            justifyContent="center"
        >
            <Grid item>
                <Stack alignItems="center" justifyContent="center" spacing={1}>
                    <Typography
                        color={theme.palette.secondary.main}
                        gutterBottom
                        variant={matchDownSM ? 'h3' : 'h2'}
                    >
                        Hi, Welcome Back
                    </Typography>
                    <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                        Enter your credentials to continue
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )

    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <AuthWrapper>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
                            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                <AuthCardWrapper>
                                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                                        {/* ICON */}
                                        <Grid item sx={{ mb: 3 }}>
                                            <RouterLink to="#">
                                                <Logo />
                                            </RouterLink>
                                        </Grid>
                                        {/* TEXT HEADER */}
                                        <Grid item xs={12}>
                                            <RenderHeaderText />
                                        </Grid>
                                        {/* FORM LOGIN */}
                                        <Grid item xs={12}>
                                            <FormLogin />
                                        </Grid>
                                        <Grid>
                                            <AnimateButton
                                                type = "slide"
                                                slide="up"
                                            >
                                                <Button
                                                    disableElevation
                                                    // disabled={isSubmitting}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    Sign IN
                                                </Button>
                                            </AnimateButton>
                                        </Grid>

                                    </Grid>
                                </AuthCardWrapper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </AuthWrapper>
    )
}

export default Login