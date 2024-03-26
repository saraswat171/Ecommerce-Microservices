import {  Stack, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div>
        <Stack  sx={{width:"381px",height:"43px",bgcolor:"#EFEFEF78",ml:4, borderRadius:"0.4rem"}} >
            <Stack height={"100%"} justifyContent={"center"} direction={"row"} width={"100%"} alignItems={"center"} color={"gray"}>

            <SearchIcon/>
            <TextField variant='standard' sx={{width:"280px" ,ml:1}} placeholder='Search....' InputProps={{ disableUnderline: true }}/>   

            </Stack>

            
        </Stack>
    </div>
  )
}

export default Search