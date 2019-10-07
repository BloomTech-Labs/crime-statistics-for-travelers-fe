
//==========================Commenting out to remove errors in the console============================================//
//==========================Commenting out to remove errors in the console============================================//
//==========================Commenting out to remove errors in the console============================================//
//==========================Commenting out to remove errors in the console============================================//
//==========================Commenting out to remove errors in the console============================================//
//==========================Commenting out to remove errors in the console============================================//
//==========================Commenting out to remove errors in the console============================================//
// import React, { useState } from 'react';
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import styled from 'styled-components'
// import '../Contact/contact.css';


// const H5 = styled.h5`
// color: red;
// `


// function Contact({ touched, errors }) {
  
//     const [contact, setContact] = useState([{
//         name : '',
//         phone: '',
//         title: '',
//         email: '',
//         text : ''
//     }])   


//   return (
//     <>
//         <div className='mainContent'>
//             <div className='mainHeader'>
//                 We Want to Hear From You!
//             </div>
//             <div className='mainText'>
//                 Comments? Questions? Got ideas to make TravelSafe<br/> 
//                 better? We love hearing from our users! Please take a<br/> 
//                 moment to fill out the form below, and a member of<br/> 
//                 the TS team will get back ASAP. We respect your<br/> 
//                 privacy and will NOT share your data with anyone.
//             </div>
//         </div>    
//     <Form>
//     <div className='mainForms'>
//         <div className='nameForm'>
//             Name
//         </div>
//         <div className='inputName'>
//             <Field type="name" type="name" autocomplete="off" name = "name" size='110'/>
//             <H5>{touched.name && errors.name}</H5>
//         </div>
//         <div className='phoneForm'>
//                 Phone
//         </div>
//         <div id='inputPhone'>
//             <Field type="phone" type="phone" autocomplete="off" name= "phone" size='110'/>
//                 <H5>{touched.phone && errors.phone}</H5>
//         </div>
//         <div className='titleForm'>
//             Title
//         </div>
//         <div className='inputTitle'>
//             <Field type="title" type="title" autocomplete="off" name= "title"  size='110'/>
//                 <H5>{touched.title && errors.title}</H5>
//         </div>
//         <div className='emailForm'>
//             Email
//         </div>
//         <div className='inputEmail'>
//             <Field type="email" type="email" autocomplete="off" name= "email"  size='110'/>
//                 <H5>{touched.email && errors.email}</H5>
//         </div>
//         <div className='blueForm'></div>
//         <div className='inputContact'>
//             <Field component='textarea' name="text"  rows="12" cols="109" placeholder="What Can We Do For You?"/>
//                 <H5>{touched.text && errors.text}</H5>
//     </div>
//         <button type="submit" className='submitButton'>SUBMIT</button>
//         <div className='spaceArea'></div>
//     </div>
//     </Form>
//     </> 
//   );
// }

// export default withFormik({
//   mapPropsToValues() {
//     return {
//         name : '',
//         phone: '',
//         title: '',
//         email: '',
//         text : ''
//     };
//   },
//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//     .min(3, "Must be 3 characters or more")
//     .max(20, "Must be less than 20 characters")
//     .required("This field is required"),
//     phone: Yup.string()
//     .min(3, "Must be 3 characters or more")
//     .max(100, "Must be less than 100 characters")
//     .required("This field is required"),
//     title: Yup.string()
//     .min(3, "Must be 3 characters or more")
//     .max(100, "Must be less than 100 characters")
//     .required("This field is required"),
//     email: Yup.string()
//     .min(3, "Must be 3 characters or more")
//     .max(100, "Must be less than 100 characters")
//     .required("This field is required"),
//     text: Yup.string()
//     .min(3, "Must be 3 characters or more")
//     .required("This field is required")
//   }),
//   handleSubmit(values) {
//     axios
//       .post(`https://reqres.in/api/users`, values)
//         .then((response) => {
//             console.log(response);
//            }, (error) => {
//             console.log(error);
//            });
     
    

//     //   {if(token === null){
//     //     Swal.fire({
//     //         position: 'center',
//     //         type: 'error',
//     //         title: 'Try Again!',
//     //         showConfirmButton: false,
//     //         timer: 2500
//     //       })
//     //   }else{
//         // Swal.fire({
//         //     position: 'center',
//         //     type: 'success',
//         //     title: 'Welcome!',
//         //     showConfirmButton: false,
//         //     timer: 2500
//         //   })
//     //   }}

//   }
// })(Contact);










// // import React, { useState, useEffect } from 'react';
// // import '../Contact/contact.css';
// // import axios from 'axios';
// // import { withFormik, Form, Field } from 'formik';
// // import * as Yup from 'yup';
// // import { errors, touched, values, handleSubmit, status } from 'yup';
// // // import logo from '../../assets/web/about/logo.png';


// // function Contact({handleSubmit}){
    
// //       const [contact, setContact] = useState([{
// //           name: ''
// //       }])  
    


// //     // handleChanges = e => {
// //     //     this.setState( { [e.target.name] : e.target.value } )
// //     // }


// //     return(
// //         <Form>
// //                 <div>
// //                 {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
// //                 <Field type="text" name="name" />
// //                 </div>
// //             <button type='submit' className='submitButton'>SUBMIT</button> 
// //         </Form> 
// // )
 
// // }

// // const FormikUserForm = withFormik({
// //     mapPropsToValues({ name }) {
// //       return {
// //         name: name || '',
        
// //       };
// //     },

// //     validationSchema: Yup.object().shape({
// //         name: Yup.string().required(),
     
// //       }),
  
// //       handleSubmit(values, {setContact}){
// //         //console.log('handleSubmit fired!')
// //           axios
// //             .post('https://reqres.in/api/users', values)
// //             .then(res => {
// //               setContact({name: res.data.name })
// //               console.log(res);
// //               //this.setState({requestsuccess: true})
// //               //this.setState({name: '', phone: '', title: '', email: '',  text: '' })
// //               alert("Thanks for contacting us!");
// //             })
// //             .catch(err => console.log(err));
// //         }
    
// //   })(Contact);

// // export default FormikUserForm;
