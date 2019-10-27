import React,{useGlobal} from 'reactn';
import { Form, Field, Formik } from "formik";
import {Button} from "@chakra-ui/core"
import * as Yup from "yup";
import styled from "styled-components";
import axiosWithAuth from '../../Utillities/axioswithauth';
import Trends from '../Trends/Trends';
import './Demo.css'
import { useState } from 'react';
import Swal from 'sweetalert2'

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:100%;
height:100%;
padding:10px;
margin-bottom:20px;


`


const Demogrphics= props => {
    // const [update, setUpdate]= useState(undefined);
    const [update,setUpdate]=useState("string");
if(update==="string"){
    return(


            <div className="formContainer">
                <Formik
                    initialValues={{
                        // age: "18-24",
                        // gender: "Male",
                        // race: "White"
                    }}
                    // this handles form validation
                    validationSchema={Yup.object().shape({
                       name: Yup.string(),
                       age: Yup.string(),
                       height: Yup.string(),
                       gender: Yup.string(),
                       race: Yup.string(),
                    })}
                    // equivilent of submitHandler
                    onSubmit={(values, actions) => {
                        setUpdate("updated");
                        Swal.fire({
                            position: 'center',
                            type: 'success',
                            title: 'Fetching Your Crime Statistics',
                            showConfirmButton: false,
                            timer: 2500
                          })
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 500)
                        console.log("Search", values);
                        axiosWithAuth()
                            .post(`https://backend-for-production.herokuapp.com/api/demo/`, values)
                            .then(res => {
                                props.history.push('/');
                                // setUpdate("updated")
                            })
                            .catch(err => console.log(err.response));
                    }

                }
                    render={(props) => (
                        
                        <Form onSubmit={props.handleSubmit}>
                            <Container>
                            <Field type="name" name="name" placeholder="name" />
                            <Field component="select" name="age" placeholder="Please enter your age">
                            <optgroup label="Age">
                                <option value="InitAge" >Enter your age</option>
                                <option value="18-24">18-24</option>
                                <option value="25-30">25-30</option>
                                <option value="31-55">31-55</option>
                                <option value="55+">55+</option>
                                </optgroup>
                            </Field>
                            <Field component="select" name="height" placeholder="Please enter your height">
                                <optgroup label="Height">
                                <option value="InitHeight"  >Enter your Height Here</option>
                                <option value="4ft">4ft</option>
                                <option value="4ft-5ft">4ft-5ft</option>
                                <option value ="5ft-5.5ft">5ft-5.5ft</option>
                                <option value="5.5ft-6ft">5.5ft-6ft</option>
                                <option value="6ft+">6ft+</option>
                                </optgroup>
                            </Field>
                            <Field component="select" name="gender">
                                <optgroup label="gender">
                                <option value = "InitGender">Choose a gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                </optgroup>
                            </Field>
                            <Field component="select" name="race">
                                <optgroup label="Race">
                                <option value="InitRace" >Choose Race</option>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                                <option value="Hispanic">Hispanic</option>
                                <option value="Asian">Asian</option>
                                </optgroup>
                            </Field>
                            
                            <Button variantColor="blue" variant = "solid" type="submit">Let's Travel</Button>
                            </Container>
                        </Form>
                       
                    )}
                    />

            </div>
    
    )
         }else{
             return(
                 <div>
                     <Trends/>
                 </div>
             )
         }
                
}


export default (Demogrphics);
