import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';


const Box =styled.div`
background:#A5D2FF;
border-left: 6px solid darkblue;
color:darkblue;
`
const Inner = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export default function Population() {
const [pop, setPop] = useState(
    {population:"325,719,178"}
);
    useEffect(() => {
    axios.get("population")
    .then((res) => {
    setPop(res.data)
    console.log(res.data)
    }).catch((err) => {
        console.log(err);
    })

    }, [])
    if(pop===undefined){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }else{
    return (
        <Box>
        <Inner>
            <h1>Total Population of The United States in 2017</h1>
            {pop.population}
        </Inner>
        </Box>
    )
}}
