import React,{useState,useEffect} from 'react'
import {TokenContext} from './Components/Context/Contexts';
import {Route,Link} from 'react-router-dom';
import Map from './Components/Map/Map';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';

export default function App() {
//Gets Token from local storage.
const [token,setToken] = useState(false);
useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]); 


return (
  
    <div>
        <TokenContext.Provider value={{token, setToken}}>
          <Map/>
          <Route exact path="/"/>
          <Route exact path="/login" component={Login}/>
          <Route exact path='/signup' component={Signup}/>  
        </TokenContext.Provider>
    </div>
    )
}
