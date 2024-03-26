import React from 'react'
import Sidebar from './Sidebar'
import { Stack } from '@mui/material'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function Sidebarlayout() {
  return (
    <Stack flexDirection={'row'} >
      <Sidebar />
      <Stack flexDirection={'column'} width={'100%'}>
        <Header />
        <Outlet />
      </Stack>
    </Stack>

  )
}

export default Sidebarlayout