import React, { useEffect } from 'react'
import withRouter from '../hoc/withRouter'

const ScrollTopContainer = ({children, location: { pathname }, navigate}) => {

  useEffect( () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behaviour: 'smooth'
    })
  }, [pathname])

  return children || null
}

export default withRouter(ScrollTopContainer)