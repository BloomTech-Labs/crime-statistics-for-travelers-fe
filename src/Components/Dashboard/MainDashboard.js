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


export default function MainDashboard() {
    return (
        <Container>
            <PieChart/>
            <LineChart/>
        </Container>
    )
}
