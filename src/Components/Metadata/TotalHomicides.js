import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import './Meta.css'


const Box =styled.div`
${'' /* background:#A5D2FF; */}
${'' /* border-left: 6px solid darkblue;
color:darkblue; */}
`
const Inner = styled.div`
display:flex;
flex-direction:column;
${'' /* justify-content:center;
align-items:center; */}
`
export default function TotalHomicides() {

   const [homicides,setHomicides] = useState({
    homicide:"17284"
   })

   const fetchData = () => {
     axios.get("I am a fake endpoint")
     .then(res => {
       console.log(res.data)
      //  console.log(res.data.number)
       setHomicides(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
 
   useEffect(fetchData, []);
 
 
    if(homicides===undefined){
        return(
          <Box className="murder-stats">
            <Inner>
             <h3>Total Homicides</h3>
             <p>Loading...</p>   
            </Inner>
            </Box>
        )
    }else{
    return (
      <Box className="murder-stats">
        <Inner>
            <h3>Murder rate in 2017</h3>
            <p>{homicides.homicide} People murdered in 2017</p>
            
        </Inner>
        </Box>
    )}
}
