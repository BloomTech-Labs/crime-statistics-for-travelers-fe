import React from 'react'
import styled from 'styled-components';
import Population from './Population'
import Total from './Total'
import ViolentCrime from './ViolentCrime'
import TotalRape from './TotalRape'
import TotalHomicides from './TotalHomicides';
import CountrySafety from './CountrySafety';
import './Meta.css'


export default function MainMeta() {
    return (
        <div>
            <h1>General Data For The United States</h1>
            <Population/>
            <Total/>
            <ViolentCrime/>
            <TotalHomicides/>
            <TotalRape/>
            
            <CountrySafety />
        </div>
    )
}
