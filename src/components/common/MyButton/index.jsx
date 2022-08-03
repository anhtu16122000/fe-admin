import React, { useRef, useState } from 'react'
import { Button, CircularProgress } from '@mui/material'

const MyButton = (props) => {
    const {children, ...others} = props
    const buttonRef = useRef(null)
    const [sizeCirCular, setSizeCirCular] = useState(0)
    React.useEffect( () => {
        const { clientWidth, clientHeight } = buttonRef.current
        setSizeCirCular(Math.min(clientWidth, clientHeight))
    }, [])

    return (
        <Button {...others} ref={buttonRef} >
           <CircularProgress  size={0.5 * sizeCirCular}  color="inherit"
                sx={{
                    marginRight: 1
                }} 
            />
                {children}
        </Button>
    )
}

export default MyButton