import React from "react";
import {Link} from 'react-router-dom'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import "../../App.css"
// import posed from "react-pose";

const H5 = styled.h5`
  color: #b22222;
`;

const FormContainer = styled.div`
  

`;
const BTN =styled.button`
 
`
const Btn = styled(Link)``

// const Label = styled.label`
//   color: #f3e367;
//   font-size: 2.5em;
// `;

function Signup({ touched, errors }) {
 



  return (
    <Form className="form">
      <FormContainer>

        <Field
          id="name"
          type="name"
          autoComplete="off"
          placeholder="name"
          name="name"
        />
        <H5>{touched.name && errors.name}</H5>
  
        <Field
          id="email"
          type="email"
          autoComplete="off"
          placeholder="email"
          name="email"
        />
        <H5>{touched.email && errors.email}</H5>

        <Field
          id="password"
          type="password"
          autoComplete="off"
          placeholder="password"
          name="password"
        />
        <H5>{touched.password && errors.password}</H5> 
        <BTN  className="formBTN" type="submit">
          <Btn to='/Login'>Signup</Btn>
        </BTN>
      </FormContainer>
    </Form>
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
      .post(`https://usemytechstuff.herokuapp.com/api/auth/signUp/`, values)
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

})(Signup);