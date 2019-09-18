import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {TokenContext} from './Components/Context/Contexts';
import {Route,Link} from 'react-router-dom';
import MapContainer from './Components/Map/MapContainer';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import Navbar from './Components/NavBar/Navbar'
import { ThemeProvider } from "@chakra-ui/core";
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
    <ThemeProvider>
      <TokenContext.Provider value={{token, setToken}}>
        <Navbar />
        <Route exact path="/map" component={OurMap}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/signup" component={Signup}/>  
      </TokenContext.Provider>
    </ThemeProvider>
  )
}
