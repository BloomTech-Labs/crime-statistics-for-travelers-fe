import React,{useEffect,useState} from 'react'
import axios from 'axios'


export default function UScrime() {

   const [crimeData,setCrimeData] = useState([])

   const fetchData = () => {
     axios.get("https://test3ts.tk/")
     .then(res => {
       console.log(res.data)
      //  console.log(res.data.number)
       setCrimeData(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
 
   useEffect(fetchData, []);
 
 
    if(crimeData===undefined){
        return(
            <div>
             <h3>Total Crimes in 2017</h3>
             <p>Loading...</p>   
            </div>
        )
    }else{
    return (
        <div>
            <h3>US Crime Rate 2017</h3>
            <p>{crimeData.number} per 100,000</p>
            
        </div>
    )}
}
