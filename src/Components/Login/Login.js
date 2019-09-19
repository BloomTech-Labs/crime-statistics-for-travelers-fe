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
import google from '../../assets/web/1x/btn_google_signin_light_normal_web.png'
import fb from '../../assets/web/1x/login-facebook.png'


import './LoginForm.css'
// import posed from "react-pose";

const H5 = styled.h5`
  color: #b22222;

`;


const Btn = styled(Link)`

`;
const Wrapper = styled.button`

`

function Login({ touched, errors }) {

  return (
    <div className="col-container">


      <div className="col3">
        <Box p={5} shadow="lg" borderWidth="2px" rounded="lg" className="form-container">
            <h1 className="heading">Log in to your account.</h1>
            <div className="auth-links">
              <div className="auth-link">
              <img src={google}/>
              </div>
              <div className="auth-link">
              <img src={fb}/>
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
              placeholder="Email"
              name="email"
       
              
            />
            <H5>{touched.email && errors.email}</H5>

            <Field
              className="form-input"
              id="password"
              type="password"
              autoComplete="off"
              placeholder="Password"
              name="password"
            />
            <H5>{touched.password && errors.password}</H5> 
            <Button variantColor="blue" className="formBTN" width="50%" rounded="22px" type="submit">
              Sign In
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
          <Link to="/signup">

            <PseudoBox
                as="button"
                height="44px"
                width="60%"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                // border="1px"
                px="8px"
                rounded="22px"
                fontSize="14px"
                fontWeight="semibold"
                bg="#3182ce"
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
      .post(`https://backend-for-production.herokuapp.com/api/auth/login`, values)
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