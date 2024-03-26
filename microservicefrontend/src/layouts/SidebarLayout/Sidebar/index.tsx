import React from 'react'
import Text from '../../../components/Text'


import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import AddIcon from '@mui/icons-material/Add';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Stack, Box } from '@mui/material';
import ThreePIcon from '@mui/icons-material/ThreeP';
function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const [openchat, setOpenchat] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handlechatClick = () => {
        setOpenchat(!openchat);
    };
    return (
        <Stack flexDirection={'column'} width={'325px'} height={'100vh'} sx={{ borderRight:'1px solid black' }} >
            <Box sx={{ mb: '40px', mt: '20px', pl: '47px' }}>
                <Text
                    text='InstaCart'
                    Icons={<FilterVintageIcon />}
                    iconProp={{ sx: { height: '32px', width: '32px' } }}
                    textProp={{ sx: { fontSize: '22px' } }}
                />
            </Box>
            <Stack flexDirection={'column'} width={'268px'} pl={'20px'} margin={'auto'} mt={'0'} mb={'0'} >
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <ContentPasteOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="All tickets" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 5 }}>

                                <Text
                                    text='Open Tickets'
                                    Icons={<OpenInNewOutlinedIcon />}
                                    iconProp={{ sx: { height: '14px', width: '14px' } }}
                                    textProp={{ sx: { fontSize: '16px' } }}
                                />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 5 }}>

                                <Text
                                    text='Tickets with Orders'
                                    Icons={<EventAvailableOutlinedIcon />}
                                    iconProp={{ sx: { height: '14px', width: '14px' } }}
                                    textProp={{ sx: { fontSize: '16px' } }}
                                />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 5 }}>

                                <Text
                                    text='Closed Tickets'
                                    Icons={<HighlightOffOutlinedIcon />}
                                    iconProp={{ sx: { height: '14px', width: '14px' } }}
                                    textProp={{ sx: { fontSize: '16px' } }}
                                />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={handlechatClick}>
                        <ListItemIcon>
                            <ThreePIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chatbots" />
                        {openchat ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openchat} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 5 }}>

                                <Text
                                    text='Create a chatbot'
                                    Icons={<AddIcon />}
                                    iconProp={{ sx: { height: '14px', width: '14px' } }}
                                    textProp={{ sx: { fontSize: '16px' } }}
                                />
                            </ListItemButton>

                        </List>
                    </Collapse>



                    <ListItemButton>
                        <ListItemIcon>
                            <ListAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LocalOfferOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsApplicationsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>




            </Stack>







        </Stack>
    )
}

export default Sidebar





