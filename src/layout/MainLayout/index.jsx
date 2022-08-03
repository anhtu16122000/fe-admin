import { AppBar, Box, Toolbar } from '@material-ui/core'
import { Stack, Typography, useTheme, useMediaQuery, } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useRef, useState } from 'react'
import Icons from '../../assets/Icons/index'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import { IoHome } from 'react-icons/io5'
import { motion } from 'framer-motion'
import ListMenu from './ListMenu'
import AuthGuard from '../../routers/AuthGuard'

const duration = 1

const useStyle = makeStyles((theme) => {
    console.log('theme', theme)
    return {
        container: {
            minHeight: '100vh',
            backgroundColor: 'purple',
            flexDirection: 'row',
            display: 'flex',
        },
        listMenu: {
            backgroundColor: 'pink',
            transition: duration + 's',
            width: 250,
        },

    }
})

// default for 3 mode  PC - Tablet - Mobile

const MainLayout = ({ children }) => {
    const classes = useStyle()
    const listMenuRef = useRef()
    const theme = useTheme()

    const [fullContent, setFullContent] = useState(true)
    const mathDownMd = useMediaQuery(theme.breakpoints.down('md')) // for tablet
    const mathDownSm = useMediaQuery(theme.breakpoints.down('sm')) // for mobile

    const menus = [
        {
            icon: (size) => <IoHome fontSize={size} style={{ fontWeight: 'bold' }} />,
            name: 'Dashboard',
            path: '/path'
        },
        {
            icon: (size) => <IoHome fontSize={size} />,
            name: 'Dashboard',
            path: '/path'
        },
        {
            icon: (size) => <IoHome fontSize={size} />,
            name: 'Dashboard',
            path: '/path'
        },
    ]


    const handleViewMenuContent = () => {
        // reducer list menu section's width
        if (fullContent) {
            listMenuRef.current.style.width = '70px'
        } else {
            listMenuRef.current.style.width = '250px'
        }
        setFullContent(!fullContent)
    }

    return (
        <AuthGuard>
            <Box className={classes.container}>
                {/* render list menu */}
                <Box ref={listMenuRef} className={classes.listMenu}>
                    <Box sx={{ backgroundColor: 'yellow', height: 70, padding: '0 14px 0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Stack direction="row" alignItems="center"  >
                            <img src={Icons.logo} style={{ width: 27, height: 27 }} />
                            <motion.div animate={{ marginLeft: fullContent ? 10 : 20 }}
                                transition={{ duration: duration }}
                            >
                                <Typography variant='h3' sx={{ fontWeight: 700, fontSize: '18px', marginTop: 1 }}>
                                    Unicorn
                                </Typography>
                            </motion.div>
                        </Stack>
                        {

                            <MenuIcon sx={{ marginTop: '3px', cursor: 'pointer' }}
                                onClick={() => handleViewMenuContent()}
                            />
                        }

                    </Box>
                    <Box >
                        <ListMenu menus={menus} fullContent={fullContent} />
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: 'green', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Box style={{ backgroundColor: 'red', height: 70, alignItems: 'center', display: 'flex' }}>
                        {
                            (!fullContent) && (
                                <motion.span style={{ alignItems: 'center', display: 'flex', padding: '0 16px' }}
                                    animate={{
                                        x: [-16, 0],
                                        opacity: [0, 1],
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        delay: 0.5
                                    }}
                                >
                                    <MenuIcon sx={{ cursor: 'pointer' }}
                                        onClick={() => handleViewMenuContent()}
                                    />
                                </motion.span>
                            )
                        }
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Box>
        </AuthGuard>
    )
}

export default MainLayout