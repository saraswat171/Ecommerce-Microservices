import React from 'react'
import BaseHeader from './BaseHeader'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

function BaseLayout() {
  return (
   
   <Stack flexDirection={'column'} >
       <BaseHeader/>
        <Outlet />
      </Stack>
  )
}

export default BaseLayout