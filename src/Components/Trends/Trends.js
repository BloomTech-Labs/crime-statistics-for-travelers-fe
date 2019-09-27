import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Div = styled.div`
display:flex;
flex-direction:column;

`
export default function Trends() {
    
    const [modelData,setModelData]= useState([
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
       <span><li key={el.crime}>{el.crime}</li> <li key={el.rating}>{el.rating}</li> </span>
         
       );
    return (
        <Div>
            <h1>Most Likely Crime you will run into</h1>
            <ul>
{listItems}
        </ul>
        </Div>
    )
}
