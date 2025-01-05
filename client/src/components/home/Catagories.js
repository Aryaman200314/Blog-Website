import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,

} from "@mui/material";
import { catagories } from "../../constants/data";
import './catagories.css'
import { Link } from "react-router-dom";

function Catagories() {
  return (
    <>
    <Link to='/create' style={{ textDecoration: 'none' }}>
    <Button id="createBlog-btn">Create Blog</Button>
    </Link>
      
      <Table id="catagories-table">
        <TableHead>
          <TableRow>
            <TableCell>
                All Catagories
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catagories.map((catagory) => {
            return (
            <TableRow key={catagory.id}>
              <TableCell>
                {catagory.type}
              </TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default Catagories;
