import React, { Suspense } from 'react'
import Loader from '../components/Loader'

const Loading = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader/>}>
        <Component {...props} />
    </Suspense>
  )
}

export default Loading