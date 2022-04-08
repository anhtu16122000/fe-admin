import { ButtonBase, Button } from '@material-ui/core'
import React from 'react'
import Logo from '../../assets/Icon/Logo'

const LogoSection = () => {
  return (
    <ButtonBase disableRipple href="#" >
        <Logo/>
    </ButtonBase>
  )
}

export default LogoSection