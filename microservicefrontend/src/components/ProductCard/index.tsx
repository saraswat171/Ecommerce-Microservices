

import React from 'react';
import {  Box, Stack } from '@mui/material';
import Text from '../Text';
import backgroundimg from '../../assests/images/download (2).jpg';
import AddIcon from '@mui/icons-material/Add';
function ProductCard() {
  return (
    <Stack flexDirection={'column'} sx={{ width: '114px', height: 'max-content', cursor: 'pointer', borderRadius: '10px', pb: 1.5, pl: '12px', pr: '12px', position: 'relative' }}>
   
      <Box  sx={{ position: 'absolute', top: -15, right: -1, borderRadius: '50%',
       width: '36px', height: '36px', bgcolor: 'White', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AddIcon />
      </Box>
      <Stack flexDirection={'column'} alignItems={'center'} >
       
        <Box><img src={backgroundimg} alt='' style={{ width: '114px', height: '104px', borderRadius: '10px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, background: 'skyblue' }} /></Box>
      </Stack>
      <Stack flexDirection={'column'} sx={{ m: 0, justifyContent: 'center' }}>
      
        <Text text='$ 7.99' textProp={{ sx: { fontSize: '14px', fontWeight: '550', mt: '10px' } }} />
        <Text text='Milk' textProp={{ sx: { fontSize: '14px', fontWeight: '500' } }} />
        <Text text='Verka' textProp={{ sx: { fontSize: '14px', fontWeight: '500' } }} />
        <Text text='Liquid' textProp={{ sx: { fontSize: '12px', fontWeight: '500' } }} />
        <Text text='14.1oz' textProp={{ sx: { fontSize: '10px', fontWeight: '500' } }} />
      </Stack>
    </Stack>
  );
}
export default ProductCard;