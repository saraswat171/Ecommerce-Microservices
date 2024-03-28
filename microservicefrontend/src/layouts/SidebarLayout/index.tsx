import React from 'react'
import Sidebar from './Sidebar'
import { Stack } from '@mui/material'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function Sidebarlayout() {
  return (
    <Stack flexDirection={'row'} >
     <Stack sx={{width:'20%'}}>
     <Sidebar />
     </Stack>
      <Stack flexDirection={'column'} sx={{width: '80%'}}>
        <Header />
        <Outlet />
      </Stack>
    </Stack>

  )
}

export default Sidebarlayout
