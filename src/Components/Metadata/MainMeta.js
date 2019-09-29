import React from 'react'
import Population from './Population'
import Total from './Total'
import ViolentCrime from './ViolentCrime'

export default function MainMeta() {
    return (
        <div>
            <h1>General Data For The United States</h1>
            <Population/>
            <Total/>
            <ViolentCrime/>
        </div>
    )
}
