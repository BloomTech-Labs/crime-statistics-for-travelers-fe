import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import './Meta.css'

const Box =styled.div`

${'' /* background:#A5D2FF;
border-left: 6px solid darkblue;
color:darkblue;
border-bottom-left-radius:25%; */}
`
const Inner = styled.div`
display:flex;
flex-direction:column;
${'' /* justify-content:center;
align-items:center; */}
`

export default function TotalRape() {

   const [rape,setRape] = useState({
    rapetotal:"135,755"
   })

   const fetchData = () => {
     axios.get("I am a fake endpoint")
     .then(res => {
       console.log(res.data)
      //  console.log(res.data.number)
       setRape(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
 
   useEffect(fetchData, []);
 
 
    if(rape===undefined){
        return(
          <Box className="rape-stats">
            <Inner>
             <h3>Total Rape in 2017</h3>
             <p>Loading...</p>   
            </Inner>
            </Box>
        )
    }else{
    return (
      <Box className="rape-stats">
        <Inner>
            <h3>Total Rape in 2017</h3>
            <p>{rape.rapetotal} instances of rape occur in the US</p>
            

        </Inner>
        </Box>
    )}
}
