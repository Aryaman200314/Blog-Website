import React from "react";
import {
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,

} from "@mui/material";
import { catagories } from "../../constants/data";
import './catagories.css'
import { Link, useSearchParams } from "react-router-dom";

const styledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

function Catagories() {
  const [setSearchParams] = useSearchParams();
  const catagory = setSearchParams.get('category');
  return (
    <>
    <styledLink to={`/create?catagory=${catagory || ''}`} >
    <Button id="createBlog-btn">Create Blog</Button>
    </styledLink>
      
      <Table id="catagories-table">
        <TableHead>
          <TableRow>
            <TableCell>
              <styledLink to='/'>
              All Catagories
              </styledLink>
                
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catagories.map((catagory) => {
            return (
            <TableRow key={catagory.id}>
              <TableCell>
                <styledLink to={`/?catagory=${catagory.type}`}> 
                {catagory.type}
                 </styledLink>
              </TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default Catagories;
