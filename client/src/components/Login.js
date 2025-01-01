import React from 'react'
import {Box, TextField, Button, styled  } from '@mui/material'
function Login() {
    const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    const Component = styled(Box) 
    `
        width: 400px;
        margin: auto;
        box-shadow: 5px 5px 3px 3px lightgrey;
    `

    const Image = styled('img') 
    ({
        width: 100,
        margin: 'auto',
        display: 'flex',
        padding: '50px 0 0'       
    });

    const Wrapper = styled(Box)`
      padding: 25px 35px;
      display: flex;
      flex: 1;
      flex-direction: column;
      & > div {
        margin-top: 20px;
        }
    `;
    
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        <Wrapper>
          <TextField variant="outlined" label="Username" />
          <TextField variant="outlined" />
          <Button variant="contained"> Login </Button>
          <Button variant="text"> Make an account </Button>
        </Wrapper>
      </Box>
    </Component>
  );
}

export default Login