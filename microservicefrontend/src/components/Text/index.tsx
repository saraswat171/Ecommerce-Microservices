import { ButtonProps, Stack, SvgIconProps, Typography, TypographyProps } from '@mui/material'
import React, { ReactElement } from 'react'
interface TextProps {
  text:string;
  Icons?:ReactElement<SvgIconProps>;
  textProp:TypographyProps;
  iconProp?:SvgIconProps;
  buttonProp?:ButtonProps;
  }
const Text:React.FC<TextProps>=({text,Icons,textProp,iconProp}) =>{
  return (
  
  <Stack flexDirection={'row'} gap={'8px'} alignItems={'center'}>
     {Icons && React.cloneElement(Icons,iconProp) }
    <Typography {...textProp} >
        {text}
    </Typography>
  </Stack>
  )
}

export default Text