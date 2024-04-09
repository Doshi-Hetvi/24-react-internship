import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { CustomLoader } from '../CustomLoader'

export const BookService = () => {
  const [services, setservices] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const allServices = async () => {
    try {
      setisLoading(true)
      const res = await axios.get("http://localhost:4000/services/service")
      console.log(res.data.data);
      setservices(res.data.data)
      setisLoading(false)
    }
    catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    allServices()
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
      {isLoading ? <CustomLoader/> : 
      <div className='card card-body ' >
        <div className="col-12 mt-2">
          <div className="mb-4 ps-3">
            <h4 className="mb-1">Book Service</h4>
            <p className="text-sm">Services</p>
          </div>
          <div className="row">

            {services.map((ser) => (
              <div key={ser._id} className="col-xl-3 col-md-6 mb-xl-4 mb-1">
                <div className="card card-blog card-plain">
                  <div className="card-header p-0 mt-n1 mx-1">
                    <div className="d-block shadow-xl border-radius-xl">
                      <img
                        src={ser.imageUrl}
                        alt={ser._id}
                        className="img-fluid shadow border-radius-lg"
                      />
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <h5>{ser?.servicename}</h5>
                    <p className="mb-1 text-sm">
                      {ser?.amount}
                    </p>
                    <p className="mb-3 text-sm">{ser?.type?.name}</p>

                    <div className="d-flex align-items-center justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-dark btn-sm mb-0"
                      ><Link to={`/user/booking/${ser._id}`}>BOOK NOW</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          
          
          </div>
        </div>
      </div>
}
    </>
  )
}
