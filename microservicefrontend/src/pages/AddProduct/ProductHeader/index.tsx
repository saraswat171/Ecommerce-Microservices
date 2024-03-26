import { Stack } from '@mui/material'
import React from 'react'
;
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Text from '../../../components/Text';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}



function ProductHeader() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} sx={{p:'0'}}>
      <Text  text='Dashboard'
 textProp={{ sx: { fontSize: '16px' ,
  fontWeight:'600' ,   lineHeight:'21.79px'
  } }}></Text>
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/"
          onClick={handleClick}
        >
         
         <Text  text='All Products'
 textProp={{ sx: { fontSize: '16px' ,
  fontWeight:'600' ,   lineHeight:'21.79px'
  } }}></Text>
        </Link>,
         <Link
         underline="hover"
         key="2"
         color="inherit"
         href="/"
         onClick={handleClick}
       >
         <Text  text=' Add Product'
 textProp={{ sx: { fontSize: '16px' ,
  fontWeight:'600' ,   lineHeight:'21.79px'
  } }}></Text>
         </Link>,
      ];


  return (
    <Stack  pb={2.5}  > 
    <Text  text='Product Details'                      
     textProp={{ sx: { fontSize: '24px' , fontWeight:'600' ,   lineHeight:'28.44px'} }}></Text>
    <Breadcrumbs 
      separator={<NavigateNextIcon  />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  </Stack>
  )
}

export default ProductHeader