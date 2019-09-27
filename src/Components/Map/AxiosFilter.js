import React,{useState,useEffect} from 'react'
import Axios from 'axios';
export default function AxiosFilter() {
//Steps
//Query City
//Display City Data
const [cityCrime,setCityCrime] = useState();
const [selected,setSelected]=useState([cityCrime]);
//Crime
useEffect(() => {
Axios.get("cityCrimeRating")
.then(obj =>{
setCityCrime(obj.data)
}).catch(err => {
    console.log(err);
})
},[])

//Going to try a filter function
//const filterCrime = setSelected(selected.filter(x => x % 2))

    return (
        <div>
    if(cityCrime===undefined){
        <p>Loading...</p>
    }else{
        <p>{cityCrime}</p>
    }
    if(selected===true){
        <div className="parent">
        <p>{cityCrime.arson}</p>
        <p>{cityCrime.rape}</p>
        <p>{cityCrime.homicide}</p>
        <p>{cityCrime.robbery}</p>
        <p>{cityCrime.property}</p>
        <p>{cityCrime.burglary}</p>
        <p>{cityCrime.aggroAssault}</p>
        <p>{cityCrime.larceny}</p>
        <p>{cityCrime.motor_vehicle}</p>
        <p>{cityCrime.crimeTotals}</p>
        
        </div>
    }

            
        </div>
    )
}
