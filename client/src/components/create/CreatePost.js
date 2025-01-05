import { Box, styled, FormControl, InputBase, Button } from '@mui/material';
import { Add } from '@mui/icons-material'; 
import React from 'react';

const Container = styled(Box)`
  margin: 50px 100px;
`;

const Image = styled('img')({
  width: '100%',
  height: '80vh',
  objectFit: 'cover',
});


const StyledFromControl = styled(FormControl)`
margin-top: 10px;
display: flex;
flex-direction: row;
`;
const InputTextfield = styled(InputBase)`
flex: 1;
margin: 0 30px;
font-size: 25px;
`
function CreatePost() {
  const url =
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  
  return (
    <Container>
      <Image src={url} alt="banner" />
      <StyledFromControl>
        <label htmlFor="fileInput">
          <Add fontSize='large' color='black'/> 
        </label>
        <input id="fileInput" type="file" style={{display: 'none'}}/>
        <InputTextfield placeholder='Title'/>
        <Button variant='contained'>Publish</Button>
      </StyledFromControl>
    </Container>
  );
}

export default CreatePost;
