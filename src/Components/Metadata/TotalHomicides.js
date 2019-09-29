import React,{useEffect,useState} from 'react'
import axios from 'axios'


export default function TotalHomicides() {

   const [homicides,setHomicides] = useState({
    homicide:"17284"
   })

   const fetchData = () => {
     axios.get("I am a fake endpoint")
     .then(res => {
       console.log(res.data)
      //  console.log(res.data.number)
       setHomicides(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
 
   useEffect(fetchData, []);
 
 
    if(homicides===undefined){
        return(
            <div>
             <h3>Total Homicides</h3>
             <p>Loading...</p>   
            </div>
        )
    }else{
    return (
        <div>
            <h3>Murder rate in 2017</h3>
            <p>{homicides.homicide} People murdered in 2017</p>
            
        </div>
    )}
}
