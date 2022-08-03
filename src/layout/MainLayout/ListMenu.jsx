import { Box, Stack, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from '@mui/styled-engine'
import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import DropDown from '../../components/common/DropDown'

const ListMenu = ({ menus, fullContent }) => {
    const Container = styled('Box')(({ theme }) => {
        return {
            backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column',
        }
    })

    const refDropDown = React.useRef(null)

    const sizeIcon = fullContent ? 22 : 29

    const Item = ({ menu }) => {
        const SumaryComponent = ({ dropDown }) => {

            const rotate = dropDown ? 0 : -90
            return (
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    marginTop: '5px'
                }}>
                    <Box sx={{
                        marginTop: '3px',
                        marginRight: '7px',
                    }}

                    >
                        {menu.icon(sizeIcon)}
                    </Box>
                    <Typography
                        variant="h5"
                        style={{ flex: 1, fontSize: 17}}
                    >
                        {menu.name}
                    </Typography>
                    <RiArrowDropDownLine fontSize={31} style={{ transform: `rotate(${rotate}deg)`, transition: '0.3s' }} />
                </Box>
            )
        }
        const DetailComponent = () => {
            return (
                <div>123123123</div>
            )
        }

        return (
            <DropDown
                sumaryComponent={(props) => <SumaryComponent dropDown={props} />}
                detailComponent={<DetailComponent />}
            />
        )
    }

    return (
        <Container>
            {
                menus.map((menu, index) => {
                    return <Item key={index} menu={menu} />
                })
            }
        </Container>
    )
}

export default ListMenu