import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '../../../components/Search';
import Text from '../../../components/Text';


function Header() {
  return (
    <>
    
        <Stack height={"90px"} sx={{ bgcolor: "white", width: '100% ' }} justifyContent={"center"}  >
          <Stack justifyContent="space-between" direction={"row"}>
            <Stack justifyContent={"flex-start"} width={"30%"}>

              <Search />
            </Stack>
            <Stack width={"30%"} justifyContent='space-between' direction={"row"} alignItems={"center"}>

              <Box display={'flex'} flexDirection={'row'} gap={'5px'} alignItems={'center'}>
                <CalendarMonthOutlinedIcon sx={{ height: '16px', width: '16px' }} />
                <Typography fontWeight={500} fontSize={'14px'} lineHeight={'21px'}  >
                  Tuesday 31st January
                </Typography>
              </Box>


              <Badge badgeContent={6} color="primary" sx={{ p:'0' , fontSize:'10px' }}>
                <NotificationsIcon sx={{ height: '21px', width: '19.31px' }} />
              </Badge>
              <Stack width={"50%"} direction={"row"} justifyContent={"flex-end"} mr={'60px'} gap={'20px'} alignItems={'center'}>
                <Stack alignItems={'flex-end'}>

                  <Text text='Chetan'


                    textProp={{ sx: { fontSize: '12px'  ,  
                  
                    fontWeight: '600',
                    lineHeight:'18px'
                   
                       } }} ></Text>

                  <Text text='Mern'


                    textProp={{ sx: { fontSize: '9px' , fontWeight:'400' , lineHeight:'13.5px' ,color:'#8F8F8F'
                    } }} ></Text>
   

                </Stack>
                <Avatar sx={{height:'43px' , width:'43px'}} />

              </Stack>
            </Stack>



          </Stack>




        </Stack>
    
    </>
  );
}

export default Header;