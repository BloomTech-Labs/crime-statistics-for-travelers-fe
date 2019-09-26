import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {NavLink,Route} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Navbar.css'
import logo from '../../assets/web/about/logo.png';
import OurMap from '../Map/OurMap';
import About from '../About/About'

import Login from '../Login/Login'


const NavbarContainer = styled.div`
display:flex;
justify-content:flex-end;
z-index:4;
align-items:center;
  height: 58px;
  width: 100%;
  background-image:linear-gradient(45deg, rgb(11, 45, 126) 0%, rgb(11, 45, 126) 44%,rgb(21, 87, 153) 44%, rgb(21, 87, 153) 45%,rgb(30, 129, 181) 45%, rgb(30, 129, 181) 61%,rgb(40, 170, 208) 61%, rgb(40, 170, 208) 67%,rgb(49, 212, 235) 67%, rgb(49, 212, 235) 100%);
  @media(max-width:500px){
    
  }
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
background:white;

color: black;
font-size: 16px;
border: 2px solid black;
  border-radius: 50%;
:hover{
  background-color: white;
  color: rgba(0, 0, 255, 0.281);
  border: 2px solid rgba(0, 0, 255, 0.281);
  border-radius: 2px;
}
@media(max-width:500px){
margin:2px;
}
`



const Navbar = () => {
  const [token,setToken] =useState()
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]);
  return (
  
      
    <NavbarContainer>

      <NavItem to="/">
        MAP
      </NavItem>
      <NavItem to="/demo">
      DEMOGRAPHICS
      </NavItem>
     

      <NavItem to='/about'>
        ABOUT
      </NavItem>
      {/* <NavItem to="/contact" component={Contact}>Contact</NavItem> */}
      {/* <NavItem to="/data">
        About the data
       </NavItem> */}

       {token === null ? (
            <NavItem to="/login" activeClassName="active-cta">
              LOGIN
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
                LOGOUT
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