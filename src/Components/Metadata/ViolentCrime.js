import React,{useState,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';


const Box =styled.div`
${'' /* background:#A5D2FF;
border-left: 6px solid darkblue;
color:darkblue; */}
`
const Inner = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export default function ViolentCrime() {
    const [violent,SetViolent] = useState(
{violentrate:"1,283,220"}
    )
    useEffect(() => {
axios.get("violentendpoint")
.then((res) => {
    SetViolent(res.data)
    console.log(res.data)
})
    }, [])
    
    return (
        <Box>
        <Inner>
            {violent.violentrate}
        </Inner>
        </Box>
    )
}
