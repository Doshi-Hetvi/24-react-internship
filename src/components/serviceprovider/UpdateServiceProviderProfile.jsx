import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { CustomLoader } from '../CustomLoader'
import { useForm } from 'react-hook-form'

export const UpdateServiceProviderProfile = () => {
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const submitHandler = async (data) => {
    try {
      setisLoading(true)
      const res = await axios.put(`http://localhost:4000/serviceproviders/serviceprovider/${id}`, data)

      // console.log(res.data.data);
      if (isMounted.current) {
        setisLoading(false);
        navigate("/serviceprovider/serviceproviderprofile");
      }
    } catch (error) {
      console.log(error.response.data);
      if (isMounted.current) {
        setisLoading(false);
      }
    }
  }

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      try {
        const res = await axios.get(`http://localhost:4000/serviceproviders/serviceprovider/${id}`);
        return {
          name: res.data.data.name,
          email: res.data.data.email,
          phone: res.data.data.phone,
          company: res.data.data.company,
          address: res.data.data.address,
          city: res.data.data.city,
          country: res.data.data.country,
          postalcode: res.data.data.postalcode,
          aboutme: res.data.data.aboutme
        }
      }
      catch (error) {
        console.log(error);
      }
    }

  })


  // useEffect(() => {
  //   fetchServiceProviderData();
  // }, []);

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
                        <div className="col-md-6">
                          <label className="form-label">
                            Company
                          </label>
                          <div className="input-group input-group-outline mb-3">
                            {/* <div className='form-control'>{serviceprovider.name}</div> */}
                            <input type="text" className="form-control"  {...register("company")} />

                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Username</label>
                          <div className="input-group input-group-outline mb-3">
                            {/* <div className='form-control'>{serviceprovider.name}</div> */}
                            <input type="text" className="form-control" {...register("name")} />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <label className="form-label">Email Address</label>
                          <div className="input-group input-group-outline mb-3">
                            {/* <div className='form-control'>{serviceprovider.email}</div> */}
                            <input type="email" className="form-control" {...register("email")} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Phone Number</label>
                          <div className="input-group input-group-outline mb-3">
                            {/* <div className='form-control'>{serviceprovider.phone}</div> */}
                            <input type="number" className="form-control" {...register("phone")} />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <label className="form-label">Address</label>
                          <div className="input-group input-group-outline mb-3">

                            <input type="text" className="form-control" placeholder='Address' {...register("address")} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <label className="form-label">City</label>
                          <div className="input-group input-group-outline mb-3">

                            <input type="text" className="form-control" placeholder='City' {...register("city")} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Country</label>
                          <div className="input-group input-group-outline mb-3">

                            <input type="text" className="form-control" placeholder='Country'  {...register("country")} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Postal Code</label>
                          <div className="input-group input-group-outline mb-3">

                            <input type="text" className="form-control" placeholder='Pincode'  {...register("postalcode")} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-label">About Me</label>
                            <div className="input-group input-group-outline mb-3">
                              <textarea
                                className="form-control"
                                rows={3}
                                placeholder='About Yourself' {...register("aboutme")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                      
                        <button type="submit" className="btn btn-success " style={{ width: `20%` }}
                        >
                          Submit
                        </button>
                        <button type='submit' className='btn btn-info' style={{width:`20%`}}>Back</button>
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
