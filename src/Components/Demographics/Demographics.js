import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field, Formik } from "formik";
import * as Yup from "yup";


const Demogrphics= () => (

            <div className="formContainer">
                <Formik
                    initialValues={{
                        age: "18-24",
                        sex: "Male",
                        race: "White"
                    }}
                    validationSchema={Yup.object().shape({
                       age: Yup.string(),
                       sex: Yup.string(),
                       race: Yup.string(),
                    })}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 500)
                    }}
                    render={(props: FormikProps<Values>) => (
                        <Form onSubmit={props.handleSubmit}>
                            <Field component="select" name="age">
                                <option value="18-24">18-24</option>
                                <option value="25-30">25-30</option>
                                <option value="31-55">31-55</option>
                                <option value="55+">55+</option>
                            </Field>
                            <Field component="select" name="sex">
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
                            <button type='submit'>Submit</button>
                        </Form>
                    )}
                    />
                    
                        
            </div>
    
)

export default (Demogrphics);
