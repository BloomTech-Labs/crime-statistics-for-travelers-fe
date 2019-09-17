import React from 'react'
import styled from 'styled-components';

const NavBar = styled.div`
  height: 50px;
  width: 100%;
  background-color: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
 border-bottom: 1px solid #7D7C7C;
`

const H2 = styled.h2`
  font-size: 30px;
`

const Navbar = () => {
  return (
    <NavBar>
      <H2>Safe Travels</H2>
      <p>login</p>
    </NavBar>
  )
}


export default Navbar;