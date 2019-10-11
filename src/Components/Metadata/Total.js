import React,{useEffect,useState} from 'react'
import { Spinner } from "@chakra-ui/core"
import axios from 'axios'
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

export default function UScrime() {

   const [crimeData,setCrimeData] = useState([])

  useEffect(() => {
     axios.get('https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/crime-against-person/offense/national/COUNT?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv')
     .then(res => {
       let data = (res.data.results)
       let currentData = data.filter((cD) => {
         return cD.data_year === 2018;
        });
       let newData = currentData.map( nD => {
         return nD.offense_count
       })
       let allData = newData.reduce((a,b) => a + b, 0)
       let finalData = ( allData / 327167434)*100
       setCrimeData(Math.round(1000*finalData)/1000)
      })
      
      .catch(err => {
        console.log(err);
      })
    }, []);
    console.log(crimeData, "totalCrime")
    
 
 
    if(crimeData===undefined){
        return(
          <Box className="total-crime-stats">
            <Inner>
            <h3>Total Violent Crime rate Within The US</h3>
             <Spinner
             thickness="4px"
             speed="0.65s"
             emptyColor="gray.200"
             color="blue.500"
             size="xl"
           />  
            </Inner>
            </Box>
        )
    }else{
    return (
      <Box className="total-crime-stats">
        <Inner>
            <h3>Total Violent Crime rate Within The US</h3>
            {crimeData} %
            
        </Inner>
        </Box>
    )}
}
