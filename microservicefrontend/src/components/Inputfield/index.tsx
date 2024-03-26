import { Stack, TextField, TextFieldProps } from '@mui/material'
import React from 'react'

import Text from '../Text'
interface InputProps {
    text: string,
    fontsize: string,
    fontweight: string,
    placeholder: string,
    TextfieldProps?: TextFieldProps ,
 
}
function InputField(props: InputProps) {
    return (
        <Stack gap={1} >
            <Text text={props.text} textProp={{sx:{fontSize:`${props.fontsize}` ,fontWeight:`${props.fontweight}`}}} />
            <TextField placeholder={props.placeholder} fullWidth multiline />
        </Stack>
    )
}

export default InputField

