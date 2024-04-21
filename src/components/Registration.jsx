import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { CustomLoader } from './CustomLoader';
import { Helmet } from 'react-helmet';

export const Registration = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [selectedRole, setselectedRole] = useState("65cf03cec58cee8f709c71ee")
    const [isLoading, setisLoading] = useState(false)

    const submithandler = async (data) => {
        const { name, email, password, phone } = data;
        try {
            setisLoading(true);
            const userData = {
                name,
                email,
                password,
                phone,
                role: selectedRole,
            }
            // const { ...userData } = data
            // console.log(userData);
            // console.log("Selected Role ID:", selectedRole);
            // userData.role = selectedRole
            // try {
            //     setisLoading(true)
                if (selectedRole == "65cf03efc58cee8f709c71f0") {
                    const res = await axios.post("http://localhost:4000/serviceProviders/serviceProvider", userData)
                    if (res.status == 200) {
                        localStorage.setItem("id", res.data.data._id)
                        alert("Sign-Up Successfully...")
                    }
                    window.location.pathname = ("/serviceprovider/dashboard");
                }
                else if (selectedRole == "65cf03cec58cee8f709c71ee") {
                    const res = await axios.post("http://localhost:4000/users/user", userData)
                    if (res.status == 200) {
                        localStorage.setItem("id", res.data.data._id)
                        alert("Sign-Up Successfully...")
                    }
                    window.location.pathname = ("/user/userdashboard");
                }

            }


            catch (error) {
                alert("Error in Sign-Up")
            }
            setisLoading(false)
        }
    return (
            <>
                <Helmet>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
                    />

                    <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
                    <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />

                    <script
                        src="https://kit.fontawesome.com/42d5adcbca.js"
                        crossorigin="anonymous"
                    ></script>

                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                        rel="stylesheet"
                    />

                    <link
                        id="pagestyle"
                        href="../assets/css/material-dashboard.css?v=3.0.0"
                        rel="stylesheet"
                    />
                </Helmet>
                {isLoading ? <CustomLoader /> :
                    <body className='bg-gray-200'>
                        <main className='main-content mt-0 ps'><div
                            className="page-header align-items-start min-vh-100"
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYWwlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D")',
                            }}
                        >
                            <span className="mask bg-gradient-dark" />
                            <div className="container my-auto">
                                <div className="row">
                                    <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                        <div className="card z-index-0 fadeIn3 fadeInBottom">
                                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                                <div className="bg-gradient-primary shadow-primary border-radius-lg py-2 pe-1">
                                                    <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">
                                                        Join us today
                                                    </h5>
                                                    <div className="row mt-2">
                                                        {/* <div className="col-2 text-center ms-auto"> */}
                                                        <p className="text-white font-weight text-center mb-0" style={{ marginLeft: `2%` }}>Enter details to Sign-up</p>
                                                        {/* </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <form role="form" className="text-start" onSubmit={handleSubmit(submithandler)}>
                                                    <div className="input-group input-group-outline my-2">
                                                        {/* <label className="form-label">Select Role: </label> */}
                                                        <select name="ddlrole" className="form-control" onChange={(e) => setselectedRole(e.target.value)}>
                                                            <option value="-Select Role-">-Select Role-</option>
                                                            <option name="serviceProvider" value="65cf03efc58cee8f709c71f0">Service Provider</option>
                                                            <option name="user" value="65cf03cec58cee8f709c71ee" >Users</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-group input-group-outline my-2">
                                                        {/* <label className="form-label">Email</label> */}
                                                        <input type="text" className="form-control" placeholder='Name' {...register("name")} />
                                                    </div>
                                                    <div className="input-group input-group-outline my-2">
                                                        {/* <label className="form-label">Email</label> */}
                                                        <input type="email" className="form-control" placeholder='Email' {...register("email")} />
                                                    </div>
                                                    <div className="input-group input-group-outline mb-2">
                                                        {/* <label className="form-label">Password</label> */}
                                                        <input type="password" className="form-control" placeholder='Password' {...register("password")} />
                                                    </div>
                                                    <div className="input-group input-group-outline my-2">
                                                        {/* <label className="form-label">Email</label> */}
                                                        <input type="text" className="form-control" placeholder='Phone' {...register("phone")} />
                                                    </div>

                                                    <div className="text-center">
                                                        <button
                                                            type="button"
                                                            className="btn bg-gradient-primary w-100 my-2 mb-2" onClick={handleSubmit(submithandler)}
                                                        >
                                                            Sign up
                                                        </button>
                                                    </div>
                                                    <p className="mt-2 text-sm text-center">
                                                        Already have an account?
                                                        <button
                                                            className="text-primary text-gradient font-weight-bold" style={{ border: "none" }}
                                                            onClick={() => {
                                                                navigate("/login");
                                                            }}
                                                        >
                                                            Sign in
                                                        </button>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </main>
                    </body>
                }
            </>
        )
    }
