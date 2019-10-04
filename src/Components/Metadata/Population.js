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
const [pop, setPop] = useState();
    useEffect(() => {
    axios.get('https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=us:*&key=7c3178507ddb6e6901538dddc8191ce4706ed8ee',"population")
    .then((res) => {
        let data = (res.data[1])
        let newData = (data[1])
        setPop(newData)
    }).catch((err) => {
        console.log(err);
    })
    
}, [])
console.log(pop, "Census Data")
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
            <h3>Total Population of The United States in 2018</h3>
            {pop}
        </Inner>
        </Box>
    )
}}
