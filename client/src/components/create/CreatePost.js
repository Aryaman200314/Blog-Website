import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import { Add, Description } from '@mui/icons-material'; 
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { DataContext } from '../../context/DataProvider';
import { api } from '../../server/api';
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

const Textarea = styled(TextareaAutosize) `
  width: 100%;
  margin-top: 50px;
  font-size: 20px;
  padding: 10px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`;


const intialPost = {
  title: '',
  description: '',
  picture: '',
  username: '',
  catagories: '',
  createDate: new Date()
}

function CreatePost() {
  const url =
   post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  
  const [post, setPost] = useState(intialPost);
  const [file, setFile] = useState('');
  const {account} = useContext(DataContext);

  const location = useLocation();
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await api.uploadFile(data);
        post.picture = response.data;
      }
    }

    getImage();
    post.catagories = location.search?.split('=')[1] || 'All';
    post.username = account.username;
  }, [file]);

  const handleChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value});
  }
  return (
    <Container>
      <Image src={url} alt="banner" />
      <StyledFromControl>
        <label htmlFor="fileInput">
          <Add fontSize='large' color='black'/> 
        </label>
        <input id="fileInput" 
        type="file" 
        style={{display: 'none'}}
        onChange={(e) => setFile(e.target.files[0])}
        />

        <InputTextfield 
        placeholder='Title' 
        onChange={(e) => handleChange(e)}
        name="title" />

        <Button variant='contained'>Publish</Button>
      </StyledFromControl>

      <Textarea 
        minRows={5}
        placeholder='Your story'
        onChange={(e) => handleChange(e)}
        name='description'
      />

    </Container>
  );
}

export default CreatePost;
