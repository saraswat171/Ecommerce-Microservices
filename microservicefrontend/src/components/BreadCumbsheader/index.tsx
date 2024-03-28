import { Box, Typography, TypographyProps } from '@mui/material'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface linkDetails {
    text: string,
    link: string,
}

interface HeaderBreadcrumbProps {
    text?: string,
    textStyles: TypographyProps,
    breadcrumb: linkDetails[]
}

function BreadCumbsheader(props: HeaderBreadcrumbProps) {
    
    return (
        <Box>
           
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon/>}>
                    {props.breadcrumb && props.breadcrumb.length > 0 && props.breadcrumb.map((bread)=> {
                        return (
                            <Link to={bread.link} style={{fontSize:"16px", fontWeight:"600", textDecoration:'none' , color:'black' }}>
                             {bread.text}
                            </Link>
                        )
                    })}
                    <Typography  fontSize="16px" fontWeight="600">{props.text}</Typography>
                </Breadcrumbs>
            </div>
        </Box>

    )
}

export default BreadCumbsheader