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

export default function UScrime() {

   const [crimeData,setCrimeData] = useState([])

  useEffect(() => {
     axios.get('https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/crime-against-person/offense/national/COUNT?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv')
     .then(res => {
       let data = (res.data.results)
       let currentData = data.filter((cD) => {
         return cD.data_year == "2018";
        });
       let newData = currentData.map( nD => {
         return nD.offense_count
       })
       let allData = newData.reduce((a,b) => a + b, 0)
       let finalData = ( allData / 327167434)*100
       setCrimeData(finalData)
      })
      
      .catch(err => {
        console.log(err);
      })
    }, []);
    console.log(crimeData, "totalCrime")
    
 
 
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
            {crimeData} %
            
        </Inner>
        </Box>
    )}
}
