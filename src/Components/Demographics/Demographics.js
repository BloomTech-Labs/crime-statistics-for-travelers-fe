import React from 'react';
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axiosWithAuth from '../../Utillities/axioswithauth';

const BTN = styled.button`
border: 2px solid black;
background: #3fa2f7;
color: white;
`;


const Demogrphics= props => {

    // const [demo, setDemo] =useState({initialValues})

    // const handleSubmit = e => {
    //     console.log(demo);
    //     e.preventDefault();
    //     const id = props.match.params.id;
    //     axiosWithAuth()
    //         .put(`https://backend-for-production.herokuapp.com//api/auth/register`)
    // }
    
    return(

            <div className="formContainer">
                <Formik
                    initialValues={{
                        age: "18-24",
                        gender: "Male",
                        race: "White"
                    }}
                    validationSchema={Yup.object().shape({
                       name: Yup.string(),
                       age: Yup.string(),
                       gender: Yup.string(),
                       race: Yup.string(),
                    })}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 500)
                        console.log("Search", values);
                        axiosWithAuth()
                            .put(`https://backend-for-production.herokuapp.com//api/auth/register`, values)
                            .then(res => {
                                props.history.push('/');
                            })
                            .catch(err => console.log(err.response));
                    }}
                    render={(props: FormikProps) => (
                        <Form onSubmit={props.handleSubmit}>
                            <Field type="name" name="name" placeholder="name" />
                            <Field component="select" name="age">
                                <option value="18-24">18-24</option>
                                <option value="25-30">25-30</option>
                                <option value="31-55">31-55</option>
                                <option value="55+">55+</option>
                            </Field>
                            <Field component="select" name="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Field>
                            <Field component="select" name="race">
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                                <option value="Hispanic">Hispanic</option>
                                <option value="Asian">Asian</option>
                            </Field>
                            <BTN type='submit'>Let's Travel</BTN>
                        </Form>
                    )}
                    />
                    
                        
            </div>
    
    )
}

export default (Demogrphics);
