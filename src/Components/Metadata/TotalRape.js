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

   const [rape,setRape] = useState()


   useEffect(() => {
    axios.get('https://api.usa.gov/crime/fbi/sapi/api/nibrs/rape/offense/national/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv')
    .then(res => {
     //  console.log(res.data.number)
     let data = (res.data.data);
      console.log(data);
      let currentData = data.filter( function(cD) {
        return cD.data_year === "2018" && cD.key === "Offense Count";
      });
      let newData = currentData.map( nD => {
        return nD.value;
      });
      
      setRape(newData)
      
    })
    .catch(err => {
      console.log(err);
    })
   }, []);

   console.log(rape);

 
 
 
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
            <h3>Total Rape in 2018</h3>
            <p>Number of instances of rape in 2018</p>
            {rape}

        </Inner>
        </Box>
    )}
}
