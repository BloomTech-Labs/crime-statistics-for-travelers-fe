// import React from "react";
// import {Link} from 'react-router-dom'
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
// import Swal from "sweetalert2";
// import styled from "styled-components";
// import './Form.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import {Button, PseudoBox} from '@chakra-ui/core'
// import {FormLabel, FormControl, FormErrorMessage, Input, Stack, Box, Heading, Text} from '@chakra-ui/core'

// const H5 = styled.h5`
//   color: #b22222;

// `;


// const Btn = styled(Link)`


// `;
// function Signup({ touched, errors }) {

//   return (
//     <div className="col-container">
//       <div className="col1">
//         <div className="heading-container">

//           <Heading as='h1'>Where to next?</Heading>
//           <strong>
//           <p>Welcome Back!</p>
//           <p>Please sign in </p>
//           <p>with your info.</p>
//           </strong>
//           <Link to="/login">

//             <PseudoBox
//                 as="button"
//                 height="44px"
//                 width="100%"
//                 lineHeight="1.2"
//                 transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
//                 // border="1px"
//                 px="8px"
//                 rounded="22px"
//                 fontSize="14px"
//                 fontWeight="semibold"
//                 bg="#111111"
//                 // borderColor="#ccd0d5"
//                 color="#ffffff"
//                 // _hover={{ bg: "#ebedf0" }}
//                 _active={{
//                   bg: "#dddfe2",
//                   transform: "scale(0.98)",
//                   borderColor: "#bec3c9",
//                 }}
//                 _focus={{
//                   boxShadow:
//                     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//                 }}
//               >
//                 Sign In
//               </PseudoBox>
//           </Link>
//         </div>
//       </div>

//       <div className="col2">
//         <Box p={5} shadow="lg" borderWidth="2px" rounded="lg" className="form-container">
//             <h1 className="heading">Create an account.</h1>
//             <div className="auth-links">
//               <div className="auth-link">
//               <FontAwesomeIcon icon={ faThumbsUp }/>                    
//               </div>
//               <div className="auth-link">
//                 <FontAwesomeIcon icon={ faThumbsUp }/>    
//               </div>
//             </div>
//           <Form className="form"> 

            
//             <Field
//               className="form-input"
//               id="name"
//               type="name"
//               autoComplete="off"
//               name="name"
//               placeholder="Your Name"
//             />
//             <H5>{touched.name && errors.name}</H5>
      
//             <Field
//               className="form-input"
//               id="email"
//               type="email"
//               autoComplete="off"
//               placeholder="Email address"
//               name="email"      
//             />
//             <H5>{touched.email && errors.email}</H5>

//             <Field
//               className="form-input"
//               id="password"
//               type="password"
//               autoComplete="off"
//               placeholder="New Password"
//               name="password"
//             />
//             <H5>{touched.password && errors.password}</H5> 
//             {/* <Button variantColor="green" className="formBTN" width="50%" rounded="22px" type="submit"> */}
              
//             {/* </Button> */}
//             <button type='submit'>Test</button>
//           </Form>
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default withFormik({
//   mapPropsToValues({name,email,password}) {
//     return {
//       name: "",
//       email:"",
//       password: ""
//       // confirmPassword: "",
//       // rememberPassword: false
//     };
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .min(3, "Must be 3 characters or more")
//       .max(20, "Must be less than 20 characters")
//       .required("This field is required"),
//       email: Yup.string()
//       .required("please enter an email to continue"),
//     password: Yup.string()
//       .min(2, "Must be 3 characters or more")
//       .max(100, "Must be less than 100 characters")
//       .required("Enter a password to continue")
//     // passwordConfirmation: Yup.string()
//     // .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   }),
//   handleSubmit(values, formikBag) {
//     console.log(values,"Login values")
//     axios
//       .post(`https://backend-for-production.herokuapp.com/api/auth/register`, values)
//       .then((response) => {
//         localStorage.setItem('token', response.data.payload);
//         console.log('does token data exist:', response.data.payload)
//         formikBag.props.history.push('/');
//         formikBag.props.setToken(response.data.payload)
//       })
//       .catch((e) => {
//         // console.log(e.response.data && response.data);
//       });
  
//         Swal.fire({
//             position: 'center',
//             type: 'success',
//             title: 'Registering User...',
//             showConfirmButton: false,
//             timer: 2500
//           })


//   }

// })(Signup);
import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'
import styled from 'styled-components'


const H5 = styled.h5`
color:	#B22222;
`


function Signup({ touched, errors }) {
  const token = localStorage.getItem('token');

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Form>
    <label htmlFor = "username">username</label>
    <Field id="username" type="username" autocomplete="off" placeholder="username" name = "username"/>
     <H5>{touched.username && errors.username}</H5>
    <label htmlFor = "password">password</label>
    <Field id="password" type="password" autocomplete="off" placeholder="password" name= "password"/>
    <H5>{touched.password && errors.password}</H5>
    {/* <label htmlFor = "confirmPassword">Confirm your password</label>
    <Field id="passwordConfirmation" type="password" placeholder="passwordConfirmation" name="passwordConfirmation"/>
   <H5>{touched.passwordConfirmation && errors.passwordConfirmation}</H5>
   <label htmlFor = "rememberPassword">Let us remember your password?</label>
    <Field id="rememberPassword" type="checkbox" name="rememberPassword"/>
    <H5>{touched.rememberPassword && errors.rememberPassword}</H5> */}
    <button type="submit">Signup</button>
 </Form> 

  );
}

export default withFormik({
  mapPropsToValues() {
    return {
        username: '',
        password: ''
        // confirmPassword: "",
        // rememberPassword: false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(20, "Must be less than 20 characters")
    .required("This field is required"),
  password: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(100, "Must be less than 100 characters")
    .required("Enter a password to continue"),
    // passwordConfirmation: Yup.string()
    // .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  }),
  handleSubmit(values, formikBag) {
    axios
      .post(`https://backend-for-production.herokuapp.com/api/auth/register`, values)
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
            title: 'Welcome!',
            showConfirmButton: false,
            timer: 2500
          })
    //   }}

  }
})(Signup);