import styled from '@mui/styled-engine'
import React from 'react'

const AuthWrapper = styled('div')( ({theme}) => {
  return {
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh',
    [theme.breakpoints.down('md')] : {
      backgroundColor: 'white',
      marginTop: 20,
    }
  }
})

export default AuthWrapper