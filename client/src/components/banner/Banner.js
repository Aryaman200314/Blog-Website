import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const Image = styled(Box) `
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
`
function Banner() {
  return (
    <Image>
        <Typography>BLOG</Typography>
        <Typography>Code for interview</Typography>
    </Image>
  )
}

export default Banner