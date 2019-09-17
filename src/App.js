import React,{useState,useEffect} from 'react'
import {TokenContext} from './Components/Context/Contexts';
import {Route,Link} from 'react-router-dom';
import Map from './Components/Map';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import About from './Components/About/About';

export default function App() {
const [token,setToken] = useState(false);
useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]); 


return (
  
  <div>
    <TokenContext.Provider value={{token, setToken}}>
      <Route exact path="/" component={Map}/>
      <Route path="/login"  component={Login}/>
      <Route path="/signup" component={Signup}/> 
      <Route path="/about" component={About}/>   
    </TokenContext.Provider>
  </div>
    )
}
