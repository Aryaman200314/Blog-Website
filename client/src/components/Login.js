import React, { useState } from 'react'
import {Box, TextField, Button, styled  } from '@mui/material'
import './login.css'
function Login() {
  const [page, setPage] = useState('login');
  
  const toggleSignUp = () => {
    page === 'signup' ? setPage('login') : setPage('signup');
  }

  const signUpUser = () => {
    
  }
  
  const userCredentialsSignUp = {
    name: '',
    username: '',
    password: ''
  }
  
  const [credentailsSignUp, setCredentailsSignUp] = useState(userCredentialsSignUp)
  
  const onInputChange = (e) => {
    setCredentailsSignUp({...credentailsSignUp, [e.target.name] : e.target.value})
    console.log("typed and stored");
    
  }
    const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    const Component = styled(Box) 
    `
        width: 400px;
        margin: auto;
        margin-top: 90px;
        border-top: 1px solid lightgrey;
        border-left: 1px solid lightgrey;
        box-shadow: 5px 5px 3px 3px lightgrey;
        border-top-right-radius: 10px;  
        border-bottom-right-radius: 10px;
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
        {
           page === 'login' ? 
           <Wrapper>
          <TextField variant="outlined" label="Username" />
          <TextField variant="outlined" label="Password"/>
          <Button id="Login-btn" variant="contained"> Log in </Button>
          <p>Don't have an account</p>
          <Button id='Make-an-accout-btn' variant="text" onClick={() => toggleSignUp()} > Make an account </Button>
        </Wrapper> 
        : 
        <Wrapper>
        <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='name' label="Name" />
        <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='username' label="Username" />
        <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='password' label="Password"/>
        <Button id="Login-btn" variant="contained" onClick={() => signUpUser()} > Sign Up </Button>
        <p>Aready have an account</p>
        <Button id='Make-an-accout-btn' variant="text" onClick={()=>toggleSignUp()} >Login</Button>
      </Wrapper> 

        }
        
      </Box>
    </Component>
  );
}

export default Login