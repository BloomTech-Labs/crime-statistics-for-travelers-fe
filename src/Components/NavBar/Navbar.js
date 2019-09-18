import React from 'react'
import styled from 'styled-components';
import {NavLink,Route} from 'react-router-dom';
import OurMap from '../Map/OurMap';

import Login from '../Login/Login'


const NavbarContainer = styled.header`
display:flex;
justify-content:flex-start;
align-items:center;
  height: 60px;
  width: 100%;
  background-color:#1E2F40;
  @media(max-width:500px){
    
  }
`

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
  return (
    <div>

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
}


export default Navbar;