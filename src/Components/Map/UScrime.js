import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import './Map.css'

export default function UScrime() {
    const [total,setTotal] = useState();
    const [local,setLocal]=useState()
    
    
    
    // Added a useEffect that will query the total crime in the US endpoint
    // We don't want it active until we get real data because otherwise it will throw a 
   //Crime Total US
    useEffect(() => {
      Axios.get("endpoint")
      .then(obj =>{
          setTotal(obj.data)
      })
      .catch(err =>{
          console.log(err)
      })
    }, [])
    //Crime In Called State
    useEffect(() => {
        Axios.get("endpoint")
        .then(obj => {
            setLocal(obj.data)
        }).catch(err =>{
            console.log(err,'local')
        })
    }, [])
    return (
        <div className='map-overlay' id='total'>
            <h3>U.S.A Crime Rate</h3>
            if(total===undefined){
                <p>Loading...</p>
            }
            <p>{total}</p>
        </div>
    )
}
