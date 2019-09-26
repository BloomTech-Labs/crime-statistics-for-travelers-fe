import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {NavLink,Route} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Navbar.css'
import OurMap from '../Map/OurMap';
import About from '../About/About'

import Login from '../Login/Login'


const NavbarContainer = styled.div`
display:flex;
justify-content:flex-end;
z-index:4;
align-items:center;
  height: 60px;
  width: 100%;

  background-image:linear-gradient(45deg, rgb(11, 45, 126) 0%, rgb(11, 45, 126) 44%,rgb(21, 87, 153) 44%, rgb(21, 87, 153) 45%,rgb(30, 129, 181) 45%, rgb(30, 129, 181) 61%,rgb(40, 170, 208) 61%, rgb(40, 170, 208) 67%,rgb(49, 212, 235) 67%, rgb(49, 212, 235) 100%)

`



const NavItem = styled(NavLink)`
  text-decoration:none;
  margin:5px;
color:white;
  :hover{
    text-shadow:2px 2px black;
  }
  @media(max-width:500px){
    margin:2px;
  }
`
const Logout = styled.button`
text-decoration:none;
margin:5px;
color:whitesmoke;
-webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
:hover{
  text-shadow: 2px 3px  black;
}
@media(max-width:500px){
margin:2px;
}
`

const token = localStorage.getItem('token')

const Navbar = ({history}) => {
  const [tokenVal,setToken] =useState()

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]);

    return (
    <NavbarContainer>
      <NavItem to="/">
        Map
      </NavItem>
      <NavItem to="/demo">
      demographics
      </NavItem>
     

      <NavItem to='/about'>
        About
      </NavItem>
      {/* <NavItem to="/contact" component={Contact}>Contact</NavItem> */}
      {/* <NavItem to="/data">
        About the data
       </NavItem> */}

       {token === null ? (
            <NavItem to="/login" activeClassName="active-cta">
              Login
            </NavItem>
          ) : (
            <NavItem to="/login" activeClassName="active-cta">
              <Logout
                className="btn"
                type="submit"
                onClick={() => {
                  localStorage.removeItem("token");
                  setToken();
                }}
              >
                Logout
              </Logout>
              </NavItem>
          )}
      {/* {token 
      ? <NavItem to="/" onClick={() => {
          localStorage.removeItem('token')
          history.push('/')
          }}>Log Out</NavItem>
      : <NavItem to="/login">Log In</NavItem>
      }  */}
    </NavbarContainer>
  )
}


export default Navbar;