
import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
    ;
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Text from '../../../components/Text';
import OrderStatusFilter from '../../../components/Filter';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}



function OrdersHeader() {
    const [selectedOrderStatus, setSelectedOrderStatus] = useState('');
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} sx={{ p: '0' }}>
            <Text text='Home'
                textProp={{
                    sx: {
                        fontSize: '16px',
                        fontWeight: '600', lineHeight: '21.79px'
                    }
                }}></Text>
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/"
            onClick={handleClick}
        >

            <Text text='Orders List'
                textProp={{
                    sx: {
                        fontSize: '16px',
                        fontWeight: '600', lineHeight: '21.79px'
                    }
                }}></Text>
        </Link>,
      
    ];

    const handleFilterChange = (OrderStatus:string ) => {
        console.log('OrderStatus: ', OrderStatus);
        setSelectedOrderStatus(OrderStatus);
        console.log(selectedOrderStatus)
    
      };
    return (
        <Stack pb={2.5}  >
            <Text text='Orders List'
                textProp={{ sx: { fontSize: '24px', fontWeight: '600', lineHeight: '28.44px' } }}></Text>
           <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
           <Breadcrumbs
                separator={<NavigateNextIcon />}
                aria-label="breadcrumb"
            >
                {breadcrumbs} 
            
            </Breadcrumbs>
            <Box display={'flex'} flexDirection={'row'} gap={'5px'} alignItems={'center'}>
                <CalendarMonthOutlinedIcon sx={{ height: '24px', width: '24px' }} />
                <Typography fontWeight={500} fontSize={'16px'} lineHeight={'21px'}  >
                 Jan 16 2025 - feb 31 2014
                </Typography>
              </Box>
           </Stack>
           <Box mt={'10px'} display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} height={'40px'} >   <OrderStatusFilter  onFilterChange={handleFilterChange} /> </Box>
        </Stack>
    )
}

export default OrdersHeader