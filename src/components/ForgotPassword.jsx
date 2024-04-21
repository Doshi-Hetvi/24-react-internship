import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { CustomLoader } from './CustomLoader'

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const [isLoading, setisLoading] = useState(false)

  const submitHandler = async (data) => {
    try {
      setisLoading(true)
      const res = await axios.post("http://localhost:4000/users/user/isUserExist", data)
      // console.log(res);
      if (res.data.flag == 1) {
        console.log("Email exist", res.data.data.email);

        navigate("/reset", {
          state: { email: res.data.data.email },
        })
      }
    }
    catch (err) {
      console.log(err);
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

        <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />

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
          href="../../assets/css/material-dashboard.css?v=3.0.0"
          rel="stylesheet"
        />
      </Helmet>
      
      {isLoading ? <CustomLoader /> :
      <div className="page-header align-items-start min-vh-100 "
      style={{
          backgroundImage:
              'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYWwlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D")',

          // https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80
      }}>
        <span className="mask bg-gradient-dark " />
        <div className="container-fluid py-8">
          <div className="card me-12 ms-12 col-lg-6">
            <div className="mt-4">
              <div className="d-flex">
                <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-xl mt-n2 ms-4">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <h4 className=" ms-2">Verification Required</h4>
              </div>
              <p className="form-label" style={{marginLeft: 120}}>Please enter your Email</p>
            </div>
            <div className="card-body ms-0 me-0">
              <form onSubmit={handleSubmit(submitHandler)}>
                <label className="form-label" style={{marginLeft: 15}}>
                  Email
                </label>
                <div className="input-group input-group-outline my-0" style={{marginLeft: 18}}>
                  <input
                    type="email"
                    className="form-control" 
                    placeholder='Enter your email'
                    {...register("email")} required
                  />
                </div>
                <br />
          
                <button
                  type="submit"
                  className="btn btn-success w-30"
                  style={{ color: 'white',marginLeft:250 }}
                >Submit
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}
