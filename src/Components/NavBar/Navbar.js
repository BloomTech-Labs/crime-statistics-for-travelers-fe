import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {NavLink,Route} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Navbar.css'
import OurMap from '../Map/OurMap';

import Login from '../Login/Login'


const NavbarContainer = styled.header`
display:flex;
justify-content:flex-end;
z-index:4;
align-items:center;
  height: 60px;
  width: 100%;
  background-color:#1E2F40;
  @media(max-width:500px){
    
  }
`
// const Logout = styled.button`
// flex-direction:end;
// background:none;
// color: #f3e367;
//   border: 2px solid #f3e367;
//   padding: 0.8rem 1.5rem;
//   font-size: 1.5rem;
//   border-radius: 10px;
//   transition: all 200ms ease-out;
//   text-decoration: none;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   font-family: 'Ubuntu', sans-serif;
//   font-weight: 500;
//   :hover {
//     cursor: pointer;
//     background: #f3e367;
//     color: black;
//   }
//   :focus {
//       outline: none;
//   }
//   @media (max-width: 800px) {
//     font-size: 1.3rem;
//     padding: 0.8rem 1.2rem;
//     border-width: 1px;
//   }
//   @media (max-width: 600px) {
//     font-size: 1rem;
//     padding: 0.5rem 1rem;
//     border-width: 1px;
//   }
// `

const NavItem = styled(NavLink)`

text-decoration:none;
margin:5px;
color:whitesmoke;
:hover{
  color:#78c6e6;
}
@media(max-width:500px){
  margin:2px;
}
`

const Navbar = () => {
  const [token,setToken] =useState(false)
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]);
  if(token===false){
    return(
      <div className="Nav-Div">

      <NavbarContainer>
      <NavItem to="/" component={OurMap}>
        Map
      </NavItem>
      <NavItem to="/login" component={Login}>
        Login
        </NavItem>
        <NavItem to="/data">
        About the data
      </NavItem>
      </NavbarContainer>
      </div>
    )
  }else{
  return (
    <div className="Nav-Div">

    <NavbarContainer>
    <NavItem to="/" component={OurMap}>
      Map
    </NavItem>
    <NavItem to="/login" component={Login}>
      Login
      </NavItem>
      <NavItem to="/data">
      About the data
    </NavItem>
  
    <button
    className="btn"
    id="btn"
    type="submit"
    onClick={() => {
      localStorage.removeItem("token");
      setToken();
Swal.fire({
position: 'center',
type: 'success',
title: 'Logged Out',
showConfirmButton: false,
timer: 2500
}) 
    }}
  >
    Logout
  </button>
   

    </NavbarContainer>


    
   

    </div>
  )
}}


export default Navbar;