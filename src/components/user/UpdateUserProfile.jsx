import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { CustomLoader } from '../CustomLoader'
import { useForm } from 'react-hook-form'

export const UpdateUserProfile = () => {
  const [user, setuser] = useState(null)
  const { register, handleSubmit, setValue } = useForm()
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();
  const id = localStorage.getItem('id');

 
  const fetchUserData = async () => {
    try {
      setisLoading(true)
      const res = await axios.get(`http://localhost:4000/users/user/${id}`)
      console.log(res.data.data);
      
        setuser(res.data.data)
        setisLoading(false)
        // navigate("/user/userprofile")
      
      
    } catch (error) {
      console.log(error.response.data);
      setisLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  const submitHandler = async (data) => {
    try {
      setisLoading(true);
      const addressId = user.address && user.address.length > 0 ? user.address[0]._id : null;
      if (addressId) {
        data.address = {
          address: data.address,
          area: data.area,
          postalCode: data.postalCode,
          city: data.city,
          state: data.state,
          country: data.country
        }; // Set data.address to the addressId
        console.log("Submitting data:", data);
        const res = await axios.put(`http://localhost:4000/users/user/${id}`, data);
        console.log("Response:", res.data); 
        setuser(res.data.user);
        navigate("/user/userprofile");
      } else {
        console.error('User address not found.');
      }
      setisLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setisLoading(false);
    }
  }
  
  

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('email', user.email);
      setValue('phone', user.phone);
      if (user.address && user.address.length > 0) {
        setValue('address', user.address[0].address);
        setValue('area', user.address[0].area);
        setValue('postalCode', user.address[0].postalCode);
        setValue('city', user.address[0].city);
        setValue('state', user.address[0].state);
        setValue('country', user.address[0].country);
      }
    }
  }, [user, setValue])




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
        <div className="main-content border-radius-lg mt-2">
          <h4>User Profile</h4>
          <div className="container-fluid py-3">
            <div className="row">
              <div className="col-lg-0 col-md-12 col-12 mx-auto">
                <div class="card z-index-0 fadeIn3 fadeInBottom shadow-dark">
                  <div className="position-relative mt-n3 mx-2 shadow-dark">
                    <div className="shadow-secondary bg-gradient-secondary border-radius-lg py-2 pe-1">
                      <h5 className="text-white text-capitalize ps-3 mt-1">Update Your Profile</h5>
                      {/* <p className="text-white text-capitalize ps-3">Complete your profile</p> */}
                    </div>
                  </div>
                  <div className="card-body">

                    <form onSubmit={handleSubmit(submitHandler)}>
                      <div className="row">

                        <div className="col-md-5">
                          <label className="form-label">Username</label>
                          <div className="input-group input-group-outline mb-3">
                            {/* <div className='form-control'>{serviceprovider.name}</div> */}
                            <input type="text" className="form-control" {...register("name")} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Phone Number</label>
                          <div className="input-group input-group-outline mb-3">
                            {/* <div className='form-control'>{serviceprovider.phone}</div> */}
                            <input type="number" className="form-control" {...register("phone")} />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <label className="form-label">Email Address</label>
                          <div className="input-group input-group-outline mb-3">
                            {/* <div className='form-control'>{serviceprovider.email}</div> */}
                            <input type="email" className="form-control" {...register("email")} />
                          </div>
                        </div>
                        
                      </div>
                      
                        <div className="row">
                          <div className="col-md-5">
                            <label className="form-label">Address</label>
                            <div className="input-group input-group-outline mb-4">

                              <input type="text" className="form-control" {...register("address")} />
                            </div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">Area</label>
                            <div className="input-group input-group-outline mb-4">

                              <input type="text" className="form-control"  {...register("area")}  />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">PinCode</label>
                            <div className="input-group input-group-outline mb-4">

                              <input type="text" className="form-control" {...register("postalCode")}  />
                            </div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">City</label>
                            <div className="input-group input-group-outline mb-4">

                              <input type="text" className="form-control" {...register("city")}  />
                            </div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">State</label>
                            <div className="input-group input-group-outline mb-4">

                              <input type="text" className="form-control" {...register("state")}  />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Country</label>
                            <div className="input-group input-group-outline mb-4">

                              <input type="text" className="form-control" {...register("country")}  />
                            </div>
                          </div>
                        </div>
                     

                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button type="submit" className="btn btn-success " style={{ width: `20%` }} >
                          Submit
                        </button>
                        <button type="submit" className="btn btn-info " style={{ width: `20%` }} >
                          Back
                        </button>
                      </div>

                      <div className="clearfix" />
                    </form>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
