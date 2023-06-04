import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Endpoints from '../api/Endpoints';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirm_password: ''
    }

    const onSubmit = (values) => {
        axios.post(Endpoints.REGISTER_URL, values)
            .then((response) => {
                setRequestResponse({
                    textMessage: "Successfully Registered",
                    alertClass: 'alert alert-success'
                });

            }, (error) => {
                setRequestResponse({
                    textMessage: "Failed Registeration",
                    alertClass: 'alert alert-danger'
                })
            })
            .catch(error => console.log(error))

    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('first name is required').min(4, 'name too short'),
        lastName: Yup.string().required('last name is required').min(4, 'name too short'),
        email: Yup.string().required('email is required').email('email must be a valid email'),
        mobile: Yup.number().required('mobile is required'),
        password: Yup.string().required('password is required').min(6, 'password must be minimum 6 charecters'),
        confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    })

    return (
        <div className="container text-center border-outline-dark">
            <Navbar />
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-5 ">
                    <div className="wrapper">
                        <div class={requestResponse.alertClass} role="alert">
                            {requestResponse.textMessage}
                        </div>
                        <h2 className="">Sign Up</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit} >
                            <div className="form-group">
                                <label htmlFor="" className="m-2">First Name</label>
                                <input type="text" className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'} name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <small className="text-danger">{formik.errors.firstName}</small>
                            ) : null}

                            <div className="form-group">
                                <label htmlFor="" className="m-2">Last Name</label>
                                <input type="text" className={formik.touched.lastName && formik.errors.lastName ? 'form-control is-invalid' : 'form-control'} name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <small className="text-danger">{formik.errors.lastName}</small>
                            ) : null}

                            <div className="form-group ">
                                <label htmlFor="" className="m-2">Email</label>
                                <input type="text" className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <small className="text-danger">{formik.errors.email}</small>
                            ) : null}

                            <div className="form-group">
                                <label htmlFor="" className="m-2">Mobile</label>
                                <input type="text" className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : 'form-control'} name="mobile" value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                            {formik.touched.mobile && formik.errors.mobile ? (
                                <small className="text-danger">{formik.errors.mobile}</small>
                            ) : null}

                            <div className="form-group">
                                <label htmlFor="" className="m-2">Password</label>
                                <input type="password" className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <small className="text-danger">{formik.errors.password}</small>
                            ) : null}

                            <div className="form-group">
                                <label htmlFor="" className="m-2">Confirm Password</label>
                                <input type="password" className={formik.touched.confirm_password && formik.errors.confirm_password ? 'form-control is-invalid' : 'form-control'} name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                            {formik.touched.confirm_password && formik.errors.confirm_password ? (
                                <small className="text-danger">{formik.errors.confirm_password}</small>
                            ) : null}

                            <input type="submit" value="Sign Up" className="btn btn-outline-dark me-2 m-4 " />
                        </form>

                        <br />
                        <p className="text-center">
                            Already Registered? <a href="/login">Click Here</a>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default RegisterPage;