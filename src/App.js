import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {TokenContext} from './Components/Context/Contexts';
import {Route,Link,Switch} from 'react-router-dom';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import Demographics from "./Components/Demographics/Demographics";
import Navbar from './Components/NavBar/Navbar'
import About from './Components/About/About';
import { ThemeProvider } from "@chakra-ui/core";
import OurMap from './Components/Map/OurMap';

export default function App() {
//Styles
const Container = styled.div``;

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

        <Navbar/>
        <Switch>

        
        <Route exact path="/" component={OurMap}/>
        <Route exact path="/login"  component={Login}/>

        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/about" component={About}/>
        {/* <Route exact path="/contact" component={Contact}/> */}
      
        <Route path="/demo" component={Demographics}/>
        </Switch>

        

      </TokenContext.Provider>
    </ThemeProvider>
  )

}
     