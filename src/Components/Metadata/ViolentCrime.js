import React,{useState,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import './Meta.css'


const Box =styled.div`
${'' /* background:#A5D2FF;
border-left: 6px solid darkblue;
color:darkblue; */}
`
const Inner = styled.div`
display:flex;
flex-direction:column;
${'' /* justify-content:center;
align-items:center; */}
`
export default function ViolentCrime() {
    const [violent,SetViolent] = useState(
{violentrate:"1,283,220"}
    )
//     useEffect(() => {
// axios.get("violentendpoint")
// .then((res) => {
//     SetViolent(res.data)
//     console.log(res.data)
// })
//     }, [])
    console.table(...violent,SetViolent)
    return (
        <Box className="violent-crime-stats">
        <Inner>
        <h1>Violent crime in the U.S.</h1>
            {violent.violentrate}
        </Inner>
        </Box>
    )
}
