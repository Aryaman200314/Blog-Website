import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import './banner.css'
const Image = styled(Box) `
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/55% repeat-x #000;
    color: #fff;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > h1, {
        text-transform: uppercase;
        text-shadow: 0 2px 10px #000;
    }
`
function Banner() {
  return (
    <Image>
        <h1 id='heading-h1'>BLOG</h1>
        <h3 id='heading-h3'>Code for interview</h3>
    </Image>
  )
}

export default Banner