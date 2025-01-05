import React from 'react'
import './home.css'
import Banner from '../banner/Banner'
import Catagories from './Catagories'
import { Grid } from '@mui/material'
function Home() {
  return (
    <>
       <div className='home'>
      <Banner/>
    </div>
    <Grid container lg={2} xs={12} sm={2}>
    <Catagories/>
    </Grid>
    <Grid container item xs={12} sm={10} lg={10}>
      posts
    </Grid>
   
    
    </>
   
  )
}

export default Home