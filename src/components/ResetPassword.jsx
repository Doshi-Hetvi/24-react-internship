import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { CustomLoader } from './CustomLoader'

export const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setisLoading] = useState(false)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: location?.state?.email,
    }
  })

  const submitHandler = async (data) => {
    console.log(data);
    try {
      setisLoading(true)
      const dataToSend = {
        email: data.email,
        password: data.password,
        otp: data.otp,
        // time: new Date().getTime(),
      }
      const res = await axios.post("http://localhost:4000/users/user/resetpassword", dataToSend);
      if (res.data.flag == 1) {
        toast.success("Password Changed Successfully...!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        // alert("Password reset success")
        // navigate("/")
      }
      else {
        alert("Password reset failed")
        navigate("/login") //login....
      }
    }
    catch (error) {
      toast.error("OTP is Expired...!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

      />
      {isLoading ? <CustomLoader /> :
      <div className="page-header align-items-start min-vh-100 "
      style={{
          backgroundImage:
              'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYWwlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D")',

          // https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80
      }}>
        <span className="mask bg-gradient-dark " />
        <div className="container-fluid py-5">
          <div className="card me-12 ms-12 col-lg-6">
            <div className="mt-4">
              <div className="d-flex">
                <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-xl mt-n2 ms-4">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <h4 className=" ms-2">New Password</h4>
              </div>
              <p className="form-label" style={{ marginLeft: 100 }}>Please enter OTP and new Password</p>
            </div>
            <div className="card-body ms-0 me-0">
              <form onSubmit={handleSubmit(submitHandler)}>

                <label className="form-label" style={{ marginLeft: 15 }}>
                  Email
                </label>
                <div className="input-group input-group-outline my-0" style={{ marginLeft: 18 }}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder='Enter your email'
                    {...register("email")} disabled
                  />
                </div>
                <label className="form-label" style={{ marginLeft: 15 }}>
                  OTP
                </label>
                <div className="input-group input-group-outline my-0" style={{ marginLeft: 18 }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder='Enter OTP'
                    {...register("otp")} required
                  />
                </div>
                <label className="form-label" style={{ marginLeft: 15 }}>
                  Password
                </label>
                <div className="input-group input-group-outline my-0" style={{ marginLeft: 18 }}>
                  <input
                    type="password"
                    className="form-control"
                    placeholder='Enter your Password'
                    {...register("password")} required
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-success w-30"
                  style={{ color: 'white', marginLeft: 250 }} 
                >
                  Submit

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
