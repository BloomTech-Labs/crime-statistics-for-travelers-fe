import React from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Container = styled.div`
width:100%;
height:100%;

background:whitesmoke;
display:flex;
align-items:center;
justify-content:space-evenly;
margin-top:45px;
@media(max-width: 500px){
    flex-direction:column;
}

`
const Item = styled.div`
/* display:flex;
justify-content:center; */
`


export default function MainDashboard() {
    const city = "Ames";
    return (
        <Container>
            <Item>
                <h1>Crime rates for {city}</h1>
            <PieChart/>
            </Item>
            <Item>
            <LineChart/>
            </Item>
        </Container>
    )
}
