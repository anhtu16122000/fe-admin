import React from 'react'
import { Card, Divider, CardHeader, Typography, CardContent } from '@material-ui/core'
import { useTheme } from '@mui/material/styles'
import styled from '@mui/styled-engine'

const MainCard = (props, ref) => {
    const {
        border = true,
        boxShadow,
        darkTitle,
        title,
        shadow,
        secondary,
        headerSX,
        contentSX,
        content,
        children,
        sx,
        contentClass,
        ...others
    } = props

    const theme = useTheme()

    const CardStyled = styled(Card)( ({theme}) => ({
        border: border ? '1px solid' : 'none',
        borderColor:  theme.palette.primary[200] + 75,
        ':hover': {
            boxShadow: boxShadow ? (shadow ? shadow : '0 2px 14px 0 rgb(32 40 45 / 8%)') : 'inherit'
        },
        ...sx
    }))

    return (
        <CardStyled
            variant="outlined"
            ref={ref}
            {...others}
        >
            {/* card header and action */}
            {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
            {darkTitle && title && (
                <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
            )}

            {/* content & header divider */}
            {title && <Divider/>}

            {/* card content */}
            {content && (
                <CardContent sx={contentSX} className={contentClass}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </CardStyled>
    )
}

export default React.forwardRef(MainCard)