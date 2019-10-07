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

   const [homicides,setHomicides] = useState()


   useEffect(() => {
    axios.get('https://api.usa.gov/crime/fbi/sapi/api/nibrs/homicide/offense/national/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv')
    .then(res => {
     //  console.log(res.data.number)
     let data = (res.data.data);
      console.log(data);
      let currentData = data.filter((cD) => {
        return cD.data_year === 2018 && cD.key === "Offense Count";
      });
      let newData = currentData.map( nD => {
        return nD.value;
      });
      
      setHomicides(newData)
      
    })
    .catch(err => {
      console.log(err);
    })
   }, []);
   console.log(homicides);
 
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
            <h3>Total Murders in 2018 within the US</h3>
            
            {homicides}
        </Inner>
        </Box>
    )}
}
