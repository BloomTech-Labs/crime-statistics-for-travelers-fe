import React,{useEffect,useState} from 'react'
// import WebGL from 'webgl'
import axios from 'axios'
import './Map.css'

export default function UScrime() {

   const [crimeData,setCrimeData] = useState([])

   const fetchData = () => {
     axios.get("https://backend-for-production.herokuapp.com/api/total/")
     .then(res => {
       console.log(res.data[0].total)
       setCrimeData(res.data[0].total);
     })
     .catch(err => {
       console.log(err);
     })
   }
 
   useEffect(fetchData, []);
 
 
    if(crimeData===undefined){
        return(
            <div className='map-overlay' id='total'>
             <h3>Total Crimes in 2017</h3>
             <p>Loading...</p>   
            </div>
        )
    }else{
    return (
        <div className='map-overlay' id='total'>
            <h3>Total Crimes in 2017</h3>
            <p>{crimeData} commited</p>
            
        </div>
    )}
}
