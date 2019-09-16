import React from 'react'
import styled from 'styled-components';
import {Link,Route} from 'react-router-dom';
import OurMap from '../Map/OurMap';
import MapContainer from '../Map/MapContainer'
import Login from '../Login/Login';
const NavbarContainer = styled.header`
display:flex;
justify-content:flex-start;
align-items:center;
  height: 60px;
  width: 100%;
  background-color:#1E2F40;
`
const NavItem = styled(Link)`
text-decoration:none;
margin:5px;
color:whitesmoke;
:hover{
  color:78c6e6;
}
`

const Navbar = () => {
  return (
    <div>
    <NavbarContainer>
    <NavItem to="/" component={OurMap}>
      Map
    </NavItem>
    <NavItem to="/Login" component={Login}>
      Login
      </NavItem>
      <NavItem to="/data">
      About the data
    </NavItem>
   
   
    </NavbarContainer>
    <Route exact path ="/" />
    <Route exact path = 'data'/>
    <Route exact path ="Login" render={Login} />
    </div>
  )
}


export default Navbar;