import styled from '@mui/styled-engine'
import React from 'react'

const AuthWrapper = styled('Box')( ({theme}) => {
  return {
    minHeight: '100vh',
    [theme.breakpoints.down('md')] : {
      marginTop: 20,
    }
  }
})

export default AuthWrapper