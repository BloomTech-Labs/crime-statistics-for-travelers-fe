import React from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Container = styled.div`
width:100%;
height:100%;

background-image:linear-gradient(100deg, rgba(79, 79, 79, 0.07) 0%, rgba(79, 79, 79, 0.07) 50%,rgba(131, 131, 131, 0.07) 50%, rgba(131, 131, 131, 0.07) 100%),linear-gradient(88deg, rgba(197, 197, 197, 0.03) 0%, rgba(197, 197, 197, 0.03) 50%,rgba(184, 184, 184, 0.03) 50%, rgba(184, 184, 184, 0.03) 100%),linear-gradient(29deg, rgba(211, 211, 211, 0.03) 0%, rgba(211, 211, 211, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 100%),linear-gradient(162deg, rgba(128, 128, 128, 0.1) 0%, rgba(128, 128, 128, 0.1) 50%,rgba(43, 43, 43, 0.1) 50%, rgba(43, 43, 43, 0.1) 100%),linear-gradient(221deg, rgba(251, 251, 251, 0.02) 0%, rgba(251, 251, 251, 0.02) 50%,rgba(191, 191, 191, 0.02) 50%, rgba(191, 191, 191, 0.02) 100%),linear-gradient(176deg, rgba(74, 74, 74, 0.07) 0%, rgba(74, 74, 74, 0.07) 50%,rgba(198, 198, 198, 0.07) 50%, rgba(198, 198, 198, 0.07) 100%),linear-gradient(236deg, rgba(234, 234, 234, 0.03) 0%, rgba(234, 234, 234, 0.03) 50%,rgba(72, 72, 72, 0.03) 50%, rgba(72, 72, 72, 0.03) 100%),linear-gradient(115deg, rgba(87, 87, 87, 0.08) 0%, rgba(87, 87, 87, 0.08) 50%,rgba(145, 145, 145, 0.08) 50%, rgba(145, 145, 145, 0.08) 100%),linear-gradient(90deg, rgb(23, 169, 215),rgb(236, 81, 93));

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
