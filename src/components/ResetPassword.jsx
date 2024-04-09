import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
    const {register,handleSubmit} = useForm({
      defaultValues: {
        email : location?.state?.email,
      }
    })

    const submitHandler = async (data) =>{

      const dataToSend = {
        email : location?.state?.email,
        password : data.password,
      }
      const res = await axios.post("http://localhost:4000/users/user/resetpassword",data);
      if(res.data.flag == 1){
        alert("Password reset success")
        navigate("/")
      }
      else{
        alert("Password reset failed")
        navigate("/") //login....
    }
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
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

      />
      <div>
        <div className="container-fluid py-6">
          <div className="card me-12 ms-12 col-lg-6">
            <div className="mt-5">
              <div className="d-flex">
                <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-xl mt-n2 ms-4">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <h4 className=" ms-2">New Password</h4>
              </div>
              <p className="form-label" style={{marginLeft: 100}}>Please enter new Password</p>
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
                    {...register("email")} disabled
                  />
                </div>
                <label className="form-label" style={{marginLeft: 15}}>
                  Password
                </label>
                <div className="input-group input-group-outline my-0" style={{marginLeft: 18}}>
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
                  className="btn btn-success w-50"
                  style={{ color: 'white',marginLeft:130 }}
                >
                  Submit
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
