import React from 'react'
import styled from 'styled-components';

const NavbarContainer = styled.header`
display:flex;
justify-content:flex-start;
align-items:center;
  height: 60px;
  width: 100%;
  background-color:#1E2F40;
`
const NavItem = styled.div`
margin:5px;
color:whitesmoke;
`

const Navbar = () => {
  return (
    <NavbarContainer>
    <NavItem>
      <p>Hello</p>
    </NavItem>
    <NavItem>
      <p>login</p>
      </NavItem>

   
    </NavbarContainer>
  )
}


export default Navbar;