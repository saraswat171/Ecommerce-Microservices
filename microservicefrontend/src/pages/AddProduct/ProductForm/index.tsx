import { Box, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import Productleft from './Productleft'
import Text from '../../../components/Text'
import { DropzoneAreaBase } from 'material-ui-dropzone';
function ProductForm() {
  return (
     <Stack sx={{backgroundColor:'white' }} pl={2.5} pr={2.5} pt={2.5} borderRadius={'10px'} >
        <Grid spacing={2} container >
    <Grid item xs={6.5} >
    <Productleft />
</Grid>
<Grid item xs={5.5}>
    <Box height={'30%'} sx={{ backgroundColor: 'lightgray', borderRadius: '15px' }}></Box>
    <Stack gap={1}>
        <Text text='Product Gallery'  textProp={{ sx:{ fontSize: '16px',fontWeight:'600' } }}  />
        <Box>
        <DropzoneArea></DropzoneArea>
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => console.log('Files:', files)}
/>
        </Box>
       
    </Stack>
</Grid>
</Grid></Stack>
    
    )
}

export default ProductForm

/*
<Grid spacing={2} container my={3} p={3} sx={{ backgroundColor: 'white', borderRadius: '20px' }}>
                    <Grid item xs={6.5} >
                        <ProductLeft />
                    </Grid>
                    <Grid item xs={5.5}>
                        <Box width={'100%'} height={'30%'} sx={{ backgroundColor: 'lightgray', borderRadius: '15px' }}></Box>
                        <Stack gap={1} py={1}>
                            <TypographyText text={'Product Gallery'} fontSize={'14'} fontWeight={'600'} />
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder='Description.................'
                            />
                        </Stack>
                    </Grid>
                </Grid> */