import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate()
    const handleLogOut = () =>{
          localStorage.removeItem("id");
          navigate("/")
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
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Logout</h5>
          <p className="card-text">Are you sure you want to logout?</p>
          <button className="btn btn-primary" onClick={handleLogOut}>
            Confirm Logout
          </button>
        </div>
      </div>
    </div>
    </>
  );
}