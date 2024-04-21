import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { CustomLoader } from '../CustomLoader'

export const BookService = () => {
  

  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();

  const [services, setservices] = useState([]);
  const categories = [
    { _id: '65cd76cde9988b28d394a468', name: 'Salon for Women', services: [] },
    { _id: '65cd770573ceca928ed517cd', name: 'SPA', services: [] },
    { _id: '65cd78555252216eab7f5267', name: 'Cleaning', services: [] },
    { _id: '65cd787f5252216eab7f5269', name: 'Repairing', services: [] },
  ];

  const loadServicesForCategory = async (categoryId) => {
    try {
      setisLoading(true);
      const res = await axios.get(`http://localhost:4000/services/servicebycategory/${categoryId}`);
      return res.data.data;
    } catch (error) {
      console.log(error.response.data);
      return [];
    } finally {
      setisLoading(false);
    }

  };

  const searchService = async (e) => {
    try {
      const res = await axios.get("http://localhost:4000/services/service/filterservice/", {
        params: {
          servicename: e.target.value,
        }
      })
      console.log("response", res.data.data);
      setservices(res.data.data);
    }
    catch (error) {
      setservices([])
    }
  }

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const updatedCategories = [];
        for (const category of categories) {
          const categoryServices = await loadServicesForCategory(category._id);
          updatedCategories.push({ ...category, services: categoryServices });
        }
        setservices(updatedCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, []);

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
        <div className='col-md-12 mb-2'>
          <div className="input-group mb-3 input-group-outline mb-3 m-3 ">
                <input
                  type="text"
                  className="form-control input-text"
                  placeholder="Search services...."
                  aria-label="Recipient's username"
                  onChange={(e) => { searchService(e) }}
                  aria-describedby="basic-addon2"
                />
                <i className="fa fa-search  m-3" />
              </div>
          <div className="card strpied-tabled-with-hover shadow-dark mt-5 mb-2">
          
            <div class=" border-radius-lg p-0 position-relative mt-n4 mx-3 z-index-2 bg-gradient-secondary shadow-secondary  pt-1">
              <div lass="border-radius-lg">
                <h3 className='text-white text-capitalize ps-3'>Book Service</h3>
                <p className="text-white text-capitalize ps-3" >Services</p>
              </div>
            </div>
            {services.map((category) => (
              <div key={category._id} >
                <h4 className="card-title mb-3" style={{ marginLeft: `3%`,marginTop:`3%` }}>{category.name}</h4>

                <div className="card-body table-full-width mt-4">
                  <div className="row">
                    {category.services.map((ser) => (
                      <div key={ser._id} className="col-xl-4 col-md-12 mb-xl-4">
                        <div className="card card-blog card-plain shadow-dark mb-5">
                          <div className="card-header p-0 mt-n5 p-2">
                            <div className="d-block shadow-xl border-radius-xl shadow-dark">
                              <img 
                                src={ser.imageUrl}
                                alt={ser._id}
                                className="img-fluid shadow border-radius-lg"
                              />
                            </div>
                          </div>
                          <div className="card-body p-3 ">
                            <h5>{ser?.servicename}</h5>
                            <h6 className="mb-2 ">{ser?.amount}</h6>
                            <p className="mb-2 ">{ser?.area}</p>
                            <p className="mb-3 ">{ser?.type?.name}</p>
                            <div className="d-flex align-items-center justify-content-between">
                              <button style={{marginLeft:`8%`,width:`80%`}}
                                type="button"
                                className="btn btn-dark btn-sm mb-0"
                                onClick={() => {
                                  navigate(`/user/booking/${ser._id}`)
                                }}
                              >
                                BOOK NOW
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>

                </div>
              </div>
            ))}


          </div>
        </div>
      }
    </>
  )
}
