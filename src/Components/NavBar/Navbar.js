import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {NavLink,Route} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Navbar.css'
import OurMap from '../Map/OurMap';
import About from '../About/About'

import Login from '../Login/Login'


const NavbarContainer = styled.header`
display:flex;
justify-content:flex-end;
z-index:4;
align-items:center;
  height: 60px;
  width: 100%;
background-image:linear-gradient(45deg,rgb(81, 240, 237), rgb(43, 33, 93));

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
const Logout = styled.button`

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
      <NavItem to="/Dashboard">
      Dashboard
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