
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import vouchimg1 from '../../../assests/images/download (1).jpg'
import vouchimg2 from '../../../assests/images/download.jpg'
import vouchimg3 from '../../../assests/images/images (1).jpg'
import vouchimg4 from '../../../assests/images/images (2).jpg'
import vouchimg5 from '../../../assests/images/images.jpg'

function Voucher(props : any) {

 
        var items = [
            {
                imageshere:vouchimg1
            },
            {
                imageshere:vouchimg2
            },
            {
                imageshere:vouchimg3
            },
            {
                imageshere:vouchimg4
            },
            {
                imageshere:vouchimg5
            }
        ]
    
        return (
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }
    
    function Item(props: any)
    {
        return (
            <Paper sx={{height:"144px", borderRadius:"0.8rem"}}>
            <img src={props.item.imageshere} alt='carousel' style={{height:"100%", width:"100%", borderRadius:"0.8rem"}}/>
        </Paper>
        )
    }
  

export default Voucher