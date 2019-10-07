import React from 'react'
import Population from './Population'
import Total from './Total'
// import ViolentCrime from './ViolentCrime'
import TotalRape from './TotalRape'
import TotalHomicides from './TotalHomicides';
import CountrySafety from './CountrySafety';
import './Meta.css'



export default function MainMeta() {
    return (
        <div className="meta-container">
            <h4 className="meta-head">General Data For The United States</h4>
            <Population/>
            <Total/>
            {/* <ViolentCrime/> */}
            <TotalHomicides/>
            <TotalRape/>
            
            <CountrySafety />
        </div>
    )
}
