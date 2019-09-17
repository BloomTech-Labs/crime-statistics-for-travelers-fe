import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {TokenContext} from './Components/Context/Contexts';
import {Route,Link} from 'react-router-dom';
import MapContainer from './Components/Map/MapContainer';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import Navbar from './Components/NavBar/Navbar'
import OurMap from './Components/Map/OurMap';

export default function App() {
//Styles
//===========================================================================
const Container = styled.div`

`

//Gets Token from local storage.
const [token,setToken] = useState(false);
useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]); 


//Return===========================================================
  return ( 
    <div>
      <TokenContext.Provider value={{token, setToken}}>
<Container>
       
        <Navbar /> 

       
        <OurMap/>


</Container> 
      </TokenContext.Provider>
    </div>
  )
}
