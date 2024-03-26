import { Autocomplete, Box, Checkbox, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import InputField from '../../../../components/Inputfield'
import Text from '../../../../components/Text'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const tagoptions = [
    { title: 'Fresh meals' },
    { title: 'Grocery' },
    { title: 'Breads' },
    
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
function Productleft() {
    return (
        <Stack flexDirection={'column'} gap={'10px'} >
            <InputField text='Product Name' fontsize='16px' fontweight='600' placeholder='Product name' ></InputField>
            <Box>
                <Text text='Description' textProp={{ sx: { fontSize: '16px', fontWeight: '600' } }} />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder='Description....'
                    fullWidth
                /> </Box>
            <InputField text='Category' fontsize='16px' fontweight='600' placeholder='Select Category' ></InputField>
            <InputField text='Category' fontsize='16px' fontweight='600' placeholder='Select Category' ></InputField>


            <InputField text='SKU' fontsize='16px' fontweight='600' placeholder='#A8721' ></InputField>
            <InputField text='Category' fontsize='16px' fontweight='600' placeholder='Select Category' ></InputField>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputField text='SKU' fontsize='14px' fontweight='600' placeholder='SKU' />
                </Grid>
                <Grid item xs={6}>
                    <InputField text='Stock Quantity' fontsize='14px' fontweight='600' placeholder='Stock Quantity' />
                </Grid>
                <Grid item xs={6}>
                    <InputField text='Regular Price' fontsize='14px' fontweight='600' placeholder='Regular Price' />
                </Grid>

                <Grid item xs={6}>
                    <InputField text='Sale Price' fontsize='14px' fontweight='600' placeholder='Sale Price' />
                </Grid>
            </Grid>
            <Stack gap={1} py={2}>
                
                <Text text='Tags' textProp={{ sx: { fontSize: '14px', fontWeight: '600' } }} />
                <Autocomplete fullWidth
                    multiple
                    id="checkboxes-tags-demo"
                    options={tagoptions}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                        </li>
                    )}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Add tags..." />
                    )}
                />
      </Stack>

        </Stack>
    )
}

export default Productleft