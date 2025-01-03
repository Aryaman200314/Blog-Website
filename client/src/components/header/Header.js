import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const Component = styled(Toolbar) `
    justify-content: center;
    & > a {
    padding: 20px;
    color: black;
    text-decoration: none;
    }
`
function Header() {
  return (
    <AppBar>
        <Component>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >contact</Link>
            <Link to='/login' >logout</Link>
        </Component>
    </AppBar>
  )
}

export default Header