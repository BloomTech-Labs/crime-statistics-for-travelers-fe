import React,{useEffect,useState} from 'react'
// import WebGL from 'webgl'
import axios from 'axios'
import './Map.css'

export default function UScrime() {

   const [crimeData,setCrimeData] = useState([])

   const fetchData = () => {
     axios.get("http://3.84.232.85/")
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
            <div className='map-overlay' id='total'>
             <h3>Total Crimes in 2017</h3>
             <p>Loading...</p>   
            </div>
        )
    }else{
    return (
        <div className='map-overlay' id='total'>
            <h3>US Crime Rate 2017</h3>
            <p>{crimeData.number} per 100k</p>
            
        </div>
    )}
}
