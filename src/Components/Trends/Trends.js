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
    return (
        <Div>

       <span><p>{modelData[0].crime}</p><p>#</p><p>{modelData[0].total}</p></span>
       <span><p>{modelData[1].crime}</p><p>#</p><p>{modelData[1].total}</p></span>
       <span><p>{modelData[2].crime}</p><p>#</p><p>{modelData[2].total}</p></span>   
       <span><p>{modelData[3].crime}</p><p>#</p><p>{modelData[3].total}</p></span>
       <span><p>{modelData[4].crime}</p><p>#</p><p>{modelData[4].total}</p></span>
       <span><p>{modelData[5].crime}</p><p>#</p><p>{modelData[5].total}</p></span>
       <span><p>{modelData[6].crime}</p><p>#</p><p>{modelData[6].total}</p></span>
        </Div>
    )
}
