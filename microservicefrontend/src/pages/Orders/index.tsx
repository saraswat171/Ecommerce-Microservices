import React from 'react'
import OrdersHeader from './OrdersHeader'
import { Stack } from '@mui/material'
import OrderTable from '../../components/Table'
function Orders() {
  return (
    <Stack flexDirection={'column'} 
    sx={{backgroundColor:'#f6f8ff'}}pl={2.5} pt={2.5} pr ={2.5} height={'100%'} >
     <OrdersHeader/>
     <OrderTable/>
    </Stack >
  )
}

export default Orders