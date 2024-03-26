import React from 'react'
import ProductHeader from './ProductHeader'
import { Stack } from '@mui/material'
import ProductForm from './ProductForm'

function AddProduct() {
  return (
    <Stack flexDirection={'column'} 
    sx={{backgroundColor:'#f6f8ff'}}pl={2.5} pt={2.5} pr ={2.5} height={'100%'} >
      <ProductHeader />
    <ProductForm/>
    </Stack >
  )
}

export default AddProduct