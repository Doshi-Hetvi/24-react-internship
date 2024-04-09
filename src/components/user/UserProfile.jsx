import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const UserProfile = () => {
  const [user, setuser] = useState([])

  const id = localStorage.getItem('id');

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/users/user/${id}`)
      console.log(res.data.data);
      setuser(res.data.data)
    } catch (error) {
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    fetchUserData()
  }, [])

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
      <div
        className="container"
        style={{
          width: 700,
          height: 730,

        }}
      >
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card btn btn-dark">
              <div className="card-body p-4 btn btn-dark">
                <div className='d-flex'>
                  <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-xl mt-n2 ms-1">
                    <i className="material-icons opacity-10 mt-3">person</i>
                  </div>
                  <div className="card-title ms-3">User Profile</div>
                </div>
                <div className="card-body">

                  <p>Username: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  {/* <button className="btn btn-success">
                    <Link to="/updateUserProfile" style={{color:`white`}}>Update Profile</Link>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
