import React,{useEffect,useState} from 'react';
import fakedata from '../Map/data/fakedata.json';
import './Meta.css'

function CountrySafety(){
    const [safety, setSafety] = useState(0);
    const [safetyPercent, setSafetyPercent] = useState(0);
    
    useEffect(() =>{
        let safetyRating = 0;
        fakedata.features.forEach((item) => {
            safetyRating += item.properties.density
        })
       
        safetyRating = safetyRating / fakedata.features.length;
        setSafety(safetyRating)
        let usSafetyPercent = Math.round(safetyRating * 100 / 100000)
        
        
        
        setSafetyPercent(usSafetyPercent)
    },[safety])
    
    return (
        <div className="safety-stats">
            <h1>Average safety rate of the United States</h1>
            <p>The crime rate is {safetyPercent}% within the United States</p>

        </div>
    )
}

export default CountrySafety;
