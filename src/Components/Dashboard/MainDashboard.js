import React from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import PieChart from './PieChart';
const H1 =styled.h1`
color:#0DD9D9;
text-shadow: 2px 2px black;
`
const Container = styled.div`
width:100%;
height:100%;

background-image:linear-gradient(0deg, rgb(61, 103, 216),rgb(65, 80, 170),rgb(53, 69, 115));
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
/* margin-top:45px; */
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
                <H1>Crime rates for {city}</H1>
            <PieChart/>
            </Item>
            <Item>
            <LineChart/>
            </Item>
        </Container>
    )
}
