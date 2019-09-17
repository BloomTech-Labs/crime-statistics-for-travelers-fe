import React from "react";
import {Link} from 'react-router-dom'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {Button} from '@chakra-ui/core'
import {FormLabel, FormControl, FormErrorMessage, Input, Stack, Box, Heading, Text} from '@chakra-ui/core'

import './LoginForm.css'
// import posed from "react-pose";

const H5 = styled.h5`
  color: #b22222;

`;


const Btn = styled(Link)`


`;

// const Label = styled.label`
//   color: #f3e367;
//   font-size: 2.5em;
// `;

function Login({ touched, errors }) {

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
          <Form className="form"> 
            
            <Field
              className="form-input"
              id="name"
              type="name"
              autoComplete="off"
              name="name"
              placeholder="Name"
            />
            <H5>{touched.name && errors.name}</H5>
      
            <Field
              className="form-input"
              id="email"
              type="email"
              autoComplete="off"
              placeholder="email"
              name="email"
       
              
            />
            <H5>{touched.email && errors.email}</H5>

            <Field
              className="form-input"
              id="password"
              type="password"
              autoComplete="off"
              placeholder="password"
              name="password"
            />
            <H5>{touched.password && errors.password}</H5> 
            <Button variantColor="green" className="formBTN" type="submit">
              <Btn to='/'>Login</Btn>
            </Button>
          </Form>
        </Box>
      </div>
      <div className="col4">
        <div className="heading-container">

          <Heading as='h1'>New around here?</Heading>
          <strong>
          <p>Please Create a </p>
          <p>new user account.</p>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email:"",
      password: ""
      // confirmPassword: "",
      // rememberPassword: false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(20, "Must be less than 20 characters")
      .required("This field is required"),
      email: Yup.string()
      .required("please enter an email to continue"),
    password: Yup.string()
      .min(2, "Must be 3 characters or more")
      .max(100, "Must be less than 100 characters")
      .required("Enter a password to continue")
    // passwordConfirmation: Yup.string()
    // .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  }),
  handleSubmit(values, formikBag) {
    console.log(values,"Login values")
    axios
      .post(`https://usemytechstuff.herokuapp.com/api/auth/Login/`, values)
      .then((response) => {
        localStorage.setItem('token', response.data.payload);
        console.log('does token data exist:', response.data.payload)
        formikBag.props.history.push('/');
        formikBag.props.setToken(response.data.payload)
      })
      .catch((e) => {
        // console.log(e.response.data && response.data);
      });
    //   {if(token === null){
    //     Swal.fire({
    //         position: 'center',
    //         type: 'error',
    //         title: 'Try Again!',
    //         showConfirmButton: false,
    //         timer: 2500
    //       })
    //   }else{
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Registering User...',
            showConfirmButton: false,
            timer: 2500
          })
    //   }}

  }

})(Login);