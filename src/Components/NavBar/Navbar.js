import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {useAuth0} from '../Auth0/react-auth0-wrapper';
import './Navbar.css'



const NavbarContainer = styled.div`
display:flex;
justify-content:flex-end;
z-index:4;
align-items:center;

  height: 60px;
  width: 100%;
  background-image:linear-gradient(45deg, rgb(11, 45, 126) 0%, rgb(11, 45, 126) 44%,rgb(21, 87, 153) 44%, rgb(21, 87, 153) 45%,rgb(30, 129, 181) 45%, rgb(30, 129, 181) 61%,rgb(40, 170, 208) 61%, rgb(40, 170, 208) 67%,rgb(49, 212, 235) 67%, rgb(49, 212, 235) 100%);
  @media(max-width:500px){
    
  }
`



const NavItem = styled(NavLink)`
  text-decoration:none;
  margin:8px;
color:white;
text-shadow:2px 2px black;
:hover{
  transform: scale(1.2);
  transition:.5s;
}
  @media(max-width:500px){
    margin:2px;
  }
`



const Navbar = () => {
  // const [token,setToken] =useState()

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  //   console.log("test");
  // }, [token]);
  return (
  
      
    <NavbarContainer>

      <NavItem to="/">
        MAP
      </NavItem>


      {/* <NavItem to="/contact" component={Contact}>Contact</NavItem> */}
      {/* <NavItem to="/data">
        About the data
       </NavItem> */}

       {/* {token === null ? (
            <NavItem to="/login" activeClassName="active-cta">
              LOGIN
            </NavItem>
          ) : (
            <NavItem to="/login" activeClassName="active-cta">
              <Button
              variantColor="black"
              variant="solid"
                type="submit"
                onClick={() => {
                  localStorage.removeItem("token");
                  setToken();
                }}
              >
                LOGOUT
              </Button>
              </NavItem>
          )} */}
<NavItem to="/">
{!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
   
</NavItem>

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