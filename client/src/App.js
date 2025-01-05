import "./App.css";
import Login from "./components/account/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/home/Home";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import CreatePost from "./components/create/CreatePost";


function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const PrivateRoute = ( { isUserAuthenticated, ...props } ) => {
    return isUserAuthenticated ? 
    <>
    <Header/>
    <Outlet/>
    </> 
    : 
    <Navigate replace to='/login'/>
  }
  return (
    <>
      <DataProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/login" element={<Login setIsUserAuthenticated={setIsUserAuthenticated}/> }/>


            <Route path="/" element={<PrivateRoute isUserAuthenticated={isUserAuthenticated} /> } >
            <Route path="/" element={<Home /> } />
            </Route>

            <Route path="/create" element={<PrivateRoute isUserAuthenticated={isUserAuthenticated} /> } >
            <Route path="/create" element={<CreatePost /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
