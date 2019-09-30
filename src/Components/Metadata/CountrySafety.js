import React,{useEffect,useState} from 'react';
import axios from 'axios';
import fakedata from '../Map/data/fakedata.json'

function CountrySafety(){
    const [safety, setSafety] = useState(0);
    
    useEffect(() =>{
        let safetyRating = 0;
        fakedata.features.forEach((item) => {
            safetyRating += item.properties.density
        })
        safetyRating = safetyRating / fakedata.features.length;
        setSafety(safetyRating)
    },[])
    
    return (
        <div>
            <h1>Average safety rate of The United States</h1>
            <p>{safety}</p>
        </div>
    )
}

export default CountrySafety;
