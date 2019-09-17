import React,{useState,useEffect} from 'react'
import {TokenContext} from './Components/Context/Contexts';
import {Route,Link} from 'react-router-dom';
import MapContainer from './Components/Map/MapContainer';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import Navbar from './Components/NavBar/Navbar'
import { ThemeProvider } from "@chakra-ui/core";

export default function App() {
//Gets Token from local storage.
const [token,setToken] = useState(false);
useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]); 


  return ( 
    <ThemeProvider>
      <TokenContext.Provider value={{token, setToken}}>
        <Route exact path="/" component={Navbar}/>
        <Route exact path="/" component={MapContainer}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/signup" component={Signup}/>  
      </TokenContext.Provider>
    </ThemeProvider>
  )
}
