import React, { useRef, useEffect, useState } from 'react'

const duration = 0.3

const DropDown = ({ sumaryComponent, detailComponent }) => {
    const spacing = 20
    const childrenRef = useRef(null)
    let maxHeight = useRef(0)

    const [dropDown, setDropDown] = useState(false)

    useEffect(() => {
        maxHeight.current = childrenRef.current.offsetHeight
    }, [])


    useEffect(() => {

        if (dropDown) {
            childrenRef.current.style.height = `${maxHeight.current}px`
            childrenRef.current.style.opacity = '1'
        } else {
            childrenRef.current.style.height = '0px'
            childrenRef.current.style.opacity = '0'
        }
    }, [dropDown])



    return (
        <>
            <div style={{ marginLeft: spacing }}
                onClick={() => setDropDown(!dropDown)}
            >
                {sumaryComponent(dropDown)}
            </div>
            <div
                style={{ 
                    marginLeft: spacing * 2 + 10, 
                    transition: `${duration}s`,
                    transitionTimingFunction: 'ease-in-out',
                }}
                ref={childrenRef}
            >
                {detailComponent}
            </div>
        </>
    )
}

export default DropDown