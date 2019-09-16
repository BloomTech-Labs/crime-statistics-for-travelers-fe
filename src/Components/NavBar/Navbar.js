import React from 'react'
import styled from 'styled-components';

const NavBar = styled.header`
  height: 100px;
  width: 100%;
  background-color: #eaeaea;
`

const Navbar = () => {
  return (
    <NavBar>
      <p>Hello</p>
      <p>login</p>

    </NavBar>
  )
}


export default Navbar;