import { Stack } from '@mui/material'
import React from 'react'



import Text from '../../../components/Text';
import BreadCumbsheader from '../../../components/BreadCumbsheader';





function ProductHeader() {
   


  return (
    <Stack  pb={2.5}  > 
    <Text  text='Product Details'                      
     textProp={{ sx: { fontSize: '24px' , fontWeight:'600' ,   lineHeight:'28.44px'} }}></Text>
   <BreadCumbsheader textStyles={{sx:{height:'32px' , width:'183px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}}
    text={'Product Details'} breadcrumb = {[{text: 'Home', link : '/'}, {text: 'All Products', link: '/all_products'}]}/>
  </Stack>
  )
}

export default ProductHeader