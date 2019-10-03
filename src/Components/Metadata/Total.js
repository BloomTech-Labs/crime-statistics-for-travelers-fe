import React,{useEffect,useState} from 'react'
import axios from 'axios'
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

export default function UScrime() {

   const [crimeData,setCrimeData] = useState([])

   const fetchData = () => {
     axios.get("https://test3ts.tk/")
     .then(res => {
       console.log(res.data)
      //  console.log(res.data.number)
       setCrimeData(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
 
   useEffect(fetchData, []);
 
 
    if(crimeData===undefined){
        return(
          <Box>
            <Inner>
             <h3>Total Crimes in 2017</h3>
             <p>Loading...</p>   
            </Inner>
            </Box>
        )
    }else{
    return (
      <Box>
        <Inner>
            <h3>US Crime Rate 2017</h3>
            <p>{crimeData.number} per 100,000</p>
            
        </Inner>
        </Box>
    )}
}
