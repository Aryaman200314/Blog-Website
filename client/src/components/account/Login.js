import React, { useState } from "react";
import { Box, TextField, Button, styled } from "@mui/material";
import './login.css'
import { api } from '../../server/api';
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px lightgrey;
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0 0",
});

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > button, & > p {
  margin-top: 20px;
}
`

const signupInitialValues = {
  name: '',
  username: '',
  password: ''
}
function Login() {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [ error, setError] = useState('');

    const toggleSignUp = () => {
      account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
      // key value pair
      setSignup({...signup, [e.target.name]: e.target.value});
    }
    const signUpUser = async () => {
      let reponse = await api.userSignup(signup);
      if(reponse.isSuccess) {
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login');
      }
      else {
        setError("Something went wrong please try again later");
      }
    }

  return (
    <Component>
      <Box id="Main-box">
        <Image src={imageURL} alt="logo" />
       { 
        account === 'login' ? 
            <Wrapper>
              <TextField variant="outlined"  label="Username" />
              <TextField variant="outlined" label="Password" />
              <Button id="Login-btn" variant="contained">Login</Button>
              {error && <p id="error">{error}</p>}
              <p>OR</p>
              <Button id="Make-an-accout-btn" onClick={() =>toggleSignUp()}>Create an Account </Button>
            </Wrapper>

            :

        <Wrapper>
          <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='name' label="Name" />
          <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='username' label="Username" />
          <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='password' label="Password" />
          <Button id="SignUp-btn" onClick={() => signUpUser()} variant="contained">SignUp</Button>
          {error && <p id="error">{error}</p>}
          <p>Already have an account</p>
          <Button id="Make-an-accout-btn" onClick={() => toggleSignUp()} >Login</Button>
        </Wrapper>}
      </Box>
    </Component>
  );
}

export default Login;
