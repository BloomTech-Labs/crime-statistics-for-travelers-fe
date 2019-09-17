import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom'
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import "../../App.css"
import { Box, Heading, Text, Stack, Feature,} from '@chakra-ui/core'
// import posed from "react-pose";

const H5 = styled.h5`
  color: #b22222;
`;

const FormContainer = styled.div`
  

`;
const BTN =styled.button`
 
`
const Btn=styled(Link)``

const Label = styled.label`
  color: #f3e367;
  font-size: 2.5em;
`;

function Login({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/" />;
  }



  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }
  
  function StackEx() {
    return (
      <Stack spacing={8}>
        <Feature
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
        />
        <Feature
          title="Save Money"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
        />
      </Stack>
    );
  }
  
  return (
    <StackEx />
    );
  }
  // <Form className="form">
  //   <FormContainer>
 
  //     <Field
  //       id="email"
  //       type="email"
  //       autoComplete="off"
  //       placeholder="email"
  //       name="email"
  //     />
  //     <H5>{touched.username && errors.username}</H5>
  //     <Label htmlFor="password">Password</Label>
  //     <Field
  //       id="password"
  //       type="password"
  //       autoComplete="off"
  //       placeholder="password"
  //       name="password"
  //     />
  //     <H5>{touched.password && errors.password}</H5> 
  //     <BTN className="formBTN" type="submit">
  //       <Btn to = "/">Login</Btn>
  //     </BTN>
  //   </FormContainer>
  // </Form>

export default withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(20, "Must be less than 20 characters")
      .required("This field is required"),
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
      .post(`https://usemytechstuff.herokuapp.com/api/auth/login/`, values)
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
            title: 'Welcome to your next Adventure',
            showConfirmButton: false,
            timer: 2500
          })
    //   }}

  }

})(Login);