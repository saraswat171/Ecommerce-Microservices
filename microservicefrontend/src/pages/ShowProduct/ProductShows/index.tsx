import { Avatar, Card, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import Text from '../../../components/Text'
function ProductShows() {
  return (
    <Stack>
      <Card sx={{ maxWidth: 345 , background:'none' ,boxShadow:'none' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
              R
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={<Text text='Sprouts  Farmer Market'
          textProp={{ sx: { fontSize: '16px', fontWeight: '600' } }}></Text>}
          subheader={<Stack>
             <Text text='+ Delivery till 10:01am'
          textProp={{ sx: { fontSize: '10px', fontWeight: '600' , color:'green'} }}></Text>
          <Text text='Pickup availabe'
          textProp={{ sx: { fontSize: '11px', fontWeight: '600' } }}></Text>
          </Stack>}
        />
      </Card>
    </Stack>
  )
}

export default ProductShows