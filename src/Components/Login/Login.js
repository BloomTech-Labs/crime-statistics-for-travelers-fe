import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  PseudoBox} from '@chakra-ui/core'
import {
  FormLabel, 
  FormControl, 
  FormErrorMessage, 
  Input, 
  Stack, 
  Box, 
  Heading, 
  Text} from '@chakra-ui/core'

import './LoginForm.css'

const Login = (props) => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })
  const token = window.localStorage.getItem('token')
  console.log('state',input)
  
  const handleChange = e => {
    console.log('login input change', e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  
  const handleLoginSubmit = e => {
    e.preventDefault();
    axios
    .post('https://backend-for-production.herokuapp.com/api/auth/login', input)
    .then(res => {
      console.log('login submit results', res)
      // window.localStorage.setItem('token', JSON.stringify(res.data.access_token))
      props.history.push('/map')
    })
    .catch(err => {
      console.error(err)
    })
  }
  
  if(token){
    return <Redirect to="/experiences"/>
  }
  return (   
    <div className="col-container">
      <div className="col3">

        <Box p={5} shadow="lg" borderWidth="2px" rounded="lg" className="form-container">
          <h1 className="heading">Log in to your account.</h1>
             <div className="auth-links">
               <div className="auth-link">
               <FontAwesomeIcon icon={ faThumbsUp }/>                    
               </div>
               <div className="auth-link">
                 <FontAwesomeIcon icon={ faThumbsUp }/>    
               </div>
             </div>
            <form onSubmit={handleLoginSubmit} className="login-form">
                <input

                  placeholder='Username' 
                  onChange={handleChange}
                  name="username"
                  value={input.username}
                />
                <input
                  placeholder='Password'
                  name='password'
                  value={input.password}
                  onChange={handleChange}
                  type='password'
                />
                <button color='teal' fluid size='large' onClick={handleLoginSubmit}>
                  Login
                </button>
            </form>
        </Box>
      </div>
      <div className="col4">
         <div className="heading-container">

           <Heading as='h1'>New around here?</Heading>
           <strong>
           <p>Please Create a </p>
           <p>new user account.</p>
           </strong>
           <Link to="/signup">

             <PseudoBox
                as="button"
                height="44px"
                width="100%"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                // border="1px"
                px="8px"
                rounded="22px"
                fontSize="14px"
                fontWeight="semibold"
                bg="#111111"
                // borderColor="#ccd0d5"
                color="#ffffff"
                // _hover={{ bg: "#ebedf0" }}
                _active={{
                  bg: "#dddfe2",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              >
                Sign Up
              </PseudoBox>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Login