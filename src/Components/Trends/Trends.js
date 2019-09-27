import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { display, flex } from 'styled-system';
const Div = styled.div`
display:flex;
flex-direction:column;


`
const H1 = styled.div`
text-align:center;
`
const ListDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:center;


`
export default function Trends() {
    
    const [modelData,setModelData]= useState([
        
        {crime:"Crime",rating:"rating"},
        {crime:"rape",rating:"1"},
        {crime:"assault",rating:"2"},
        {crime:"larceny",rating:"3"},
        {crime:"robbery",rating:"4"},
        {crime:"motor-theft",rating:"5"},
        {crime:"property-crime",rating:"6"},
        {crime:"burglary",rating:"7"}
    ])
    //Send the model 3 values
    // RACE GENDER AND AGE
    //Model takes results from post in demographics
   //Get models results
    useEffect(() => {
     axios.get("some endpoint")
     .then((res) => {
         console.log(res,'trend data')
         setModelData(res.data)
     }).catch((err) =>{
         console.log(err)
     })
        }, [])
        //
        const listItems = modelData.map((el) =>
       <li key={el.crime}>{el.crime}</li>
         
       );
       const listRating = modelData.map((el) =>
       <li key={el.rating}>{el.rating}</li>
         
       );
    return (
        <Div>
            <H1>Most Likely Crime you will run into</H1>
        <ListDiv>
            <ul>
{listItems}
        </ul>
        <ul>
            {listRating}
        </ul>
        </ListDiv>
        </Div>
    )
}
