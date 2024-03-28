import { Box, IconButton, Stack } from '@mui/material'
import React, { useRef } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ProductShows from './ProductShows'
import Voucher from './Voucher'
import ProductCard from '../../components/ProductCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './carousel.css'
function ShowProduct() {

  const scroll = useRef<HTMLDivElement>(null)
  const handleScroll = (offset: number) => {
    if (scroll.current?.scrollLeft !== (null || undefined))
      scroll.current.scrollLeft += offset
  }
  return (
    <Stack flexDirection={'column'}
      sx={{ backgroundColor: '#f6f8ff', width: '100%', boxSizing: 'border-box' }} pl={2.5} pt={2.5} pr={2.5} height={'100%'} >
      <Voucher />
      <ProductShows />

      <Stack gap={1} direction={'row'} width={'100%'} sx={{ overflow: 'hidden' }} alignItems={'center'} >
        <IconButton sx={{ height: '40px' }} onClick={() => handleScroll(-100)} ><ArrowBackIosIcon /></IconButton>
        <Stack gap={2} ref={scroll} direction={'row'} width={'90%'} className='slider' sx={{overflowX:'auto'}}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </Stack>
        <IconButton sx={{ height: '40px' }} onClick={() => handleScroll(100)}><ArrowForwardIosIcon /></IconButton>
      </Stack>
    </Stack >
  )
}

export default ShowProduct



