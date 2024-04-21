import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { CustomLoader } from '../CustomLoader';

export const ServiceProviderProfile = () => {
  const { register, handleSubmit } = useForm()
  const [serviceprovider, setserviceprovider] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  const submitHandler = async (data) => {
      try {
        setisLoading(true)
        const res = await axios.put(`http://localhost:4000/serviceproviders/serviceprovider/${id}`, data)
        // console.log(res.data.data);
        setisLoading(false)
        navigate("/serviceprovider/updateprofile")
      } catch (error) {
        console.log(error.response.data);
        setisLoading(false)
      }
    }

    const fetchServiceProviderData = async () => {
      try {
        setisLoading(true)
        const res = await axios.get(`http://localhost:4000/serviceproviders/serviceprovider/${id}`);
        console.log(res.data.data);
        setserviceprovider(res.data.data);
        setisLoading(false)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    useEffect(() => {
      fetchServiceProviderData();
      setisLoading(false)
    }, []);

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
        <h4>Service Provider Profile</h4>
        <div className="container-fluid py-2">
          <div className="row">
            <div className="col-lg-0 col-md-12 col-12">
              <div class="card z-index-0 fadeIn3 fadeInBottom shadow-dark my-4 bg-gray-100">
                <div className="position-relative mt-n4 mx-4 shadow-dark">
                  <div className="shadow-secondary bg-gradient-secondary border-radius-lg py-2 pe-2">
                    <h5 className="text-white text-capitalize ps-3 mt-1">View Profile</h5>
                    {/* <p className="text-white text-capitalize ps-3">Complete your profile</p> */}
                  </div>
                </div>
                <div className="card-body">

                  <form role='form' onSubmit={handleSubmit(submitHandler)}>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">
                          Company
                        </label>
                        <div className="input-group input-group-outline mb-3">
                          {/* <div className='form-control'>{serviceprovider.name}</div> */}
                          <input type="text" className="form-control" placeholder="Company Name" defaultValue={serviceprovider.company} {...register("company")} disabled/>
                        
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <div className="input-group input-group-outline mb-3">
                          {/* <div className='form-control'>{serviceprovider.name}</div> */}
                          <input type="text" className="form-control" defaultValue={serviceprovider.name} disabled/>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">Email Address</label>
                        <div className="input-group input-group-outline mb-3">
                          {/* <div className='form-control'>{serviceprovider.email}</div> */}
                          <input type="email" className="form-control" defaultValue={serviceprovider.email} disabled/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Phone Number</label>
                        <div className="input-group input-group-outline mb-3">
                          {/* <div className='form-control'>{serviceprovider.phone}</div> */}
                          <input type="email" className="form-control" defaultValue={serviceprovider.phone} disabled/>
                        </div>
                      </div>
                    </div>
              
                    <div className="row">
                      <div className="col-md-12">
                        <label className="form-label">Address</label>
                        <div className="input-group input-group-outline mb-3">

                          <input type="text" className="form-control" placeholder='Address' defaultValue={serviceprovider.address} {...register("address")} disabled/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <label className="form-label">City</label>
                        <div className="input-group input-group-outline mb-3">

                          <input type="text" className="form-control" placeholder='City' defaultValue={serviceprovider.city} {...register("city")} disabled/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Country</label>
                        <div className="input-group input-group-outline mb-3">

                          <input type="text" className="form-control" placeholder='Country' defaultValue={serviceprovider.country} {...register("country")} disabled/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Postal Code</label>
                        <div className="input-group input-group-outline mb-3">

                          <input type="text" className="form-control" placeholder='Pincode' defaultValue={serviceprovider.postalcode} {...register("postalcode")} disabled/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label">About Me</label>
                          <div className="input-group input-group-outline mb-4">
                            <textarea
                              className="form-control"
                              rows={3}
                               placeholder='About Yourself' defaultValue={serviceprovider.aboutme} {...register("aboutme")}  disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                   <button type='submit' className='btn btn-secondary' style={{marginLeft:`78%`,width:`20%`}}>Edit Profile</button>
                    
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
