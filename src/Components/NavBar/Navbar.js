import React from 'react'
import styled from 'styled-components';
import {Link,Route} from 'react-router-dom';
import OurMap from '../Map/OurMap';
import MapContainer from '../Map/MapContainer'
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
const NavLink = styled(Link)`
text-decoration:none;
margin:5px;
color:whitesmoke;
:hover{
  color:78c6e6;
}
@media(max-width:500px){
  margin:2px;
}
`

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <NavLink to="/map" component={OurMap}>
          Map
        </NavLink>
        <NavLink to="/login" component={Login}>
          Login
        </NavLink>
        <NavLink to="/data">
          About the data
        </NavLink>    
      </NavbarContainer>
    </div>
  )
}


export default Navbar;