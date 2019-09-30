import React,{useEffect,useState} from 'react'
import axios from 'axios'


export default function TotalRape() {

   const [rape,setRape] = useState({
    rapetotal:"135,755"
   })

   const fetchData = () => {
     axios.get("I am a fake endpoint")
     .then(res => {
       console.log(res.data)
      //  console.log(res.data.number)
       setRape(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
 
   useEffect(fetchData, []);
 
 
    if(rape===undefined){
        return(
            <div>
             <h3>Total Rape in 2017</h3>
             <p>Loading...</p>   
            </div>
        )
    }else{
    return (
        <div>
            <h3>Total Rape in 2017</h3>
            <p>{rape.rapetotal} instances of rape occur in the US</p>
            
        </div>
    )}
}
