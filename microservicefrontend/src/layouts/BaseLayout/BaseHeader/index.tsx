import { Box, List, Stack, ListItemButton } from '@mui/material'
import React from 'react'
import Text from '../../../components/Text'
import AppleIcon from '@mui/icons-material/Apple';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
function BaseHeader() {
    const navigate = useNavigate();
const handleClick=()=>{
  navigate('/login')
}
    return (
        <Stack boxShadow={1} height={'50px'} boxSizing={'border-box'} flexDirection={'row'} alignItems={'center'}>
            <Box mr={'10px'} p={'8px'} display={'flex'} >
                <AppleIcon sx={{ height: '32px', width: '32px' }} />
            </Box>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} flex={1}>

                <ListItemButton sx={{ pl: 5 }}>

                    <Text
                        text='Dashboard'

                        textProp={{ sx: { fontSize: '16px' } }}
                    />
                </ListItemButton>
                <ListItemButton sx={{ pl: 5 }}>

                    <Text
                        text='Team'


                        textProp={{ sx: { fontSize: '16px' } }}
                    />
                </ListItemButton>
                <ListItemButton sx={{ pl: 5 }}>

                    <Text
                        text='Projects'


                        textProp={{ sx: { fontSize: '16px' } }}
                    />
                </ListItemButton>
                <ListItemButton sx={{ pl: 5 }}>

                    <Text
                        text='Calender'


                        textProp={{ sx: { fontSize: '16px' } }}
                    />
                </ListItemButton>

            </Box>
            <Box display={'flex'}  >
                <ListItemButton sx={{ pl: 5 }} onClick={handleClick}>

                    <Text
                        text='Login/Register'
                        Icons={< ExitToAppIcon />}
                        iconProp={{ sx: { height: '32px', width: '32px' } }}
                        textProp={{ sx: { fontSize: '16px' } }}
                    />
                </ListItemButton>
            </Box>

        </Stack>
    )
}

export default BaseHeader