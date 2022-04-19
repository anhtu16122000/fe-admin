import React from 'react'
import { Grid } from '@mui/material'
import AuthWrapper from './AuthWrapper'
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles((theme) => ({

}))

const ContainerAuth = ({children}) => {
    const theme = useTheme()
    const classes = useStyle()

    return (
        <AuthWrapper>
            <Grid container spacing={2}
                sx={{
                    minHeight: '100vh',
                }}
            >
                <Grid xs={12} sm={7}  item sx={{ backgroundColor: 'white', }}>
                    {children}
                </Grid>
                <Grid item  xs={12} sm={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                    <img src="../Image/img-login.svg" width="80%" height="80%" style={{ objectFit: 'contain' }} />
                </Grid>
            </Grid>
        </AuthWrapper>
    )
}

export default ContainerAuth