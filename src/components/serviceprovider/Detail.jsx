import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CustomLoader } from '../CustomLoader';

export const Detail = () => {
  const [service, setservice] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()

  const id = useParams().id;

  const submitHandler = async () => {
    try {
      setisLoading(true)
      const res = await axios.get("http://localhost:4000/services/service/" + id)
      console.log(res.data.data);
      setservice(res.data.data);

    } catch (error) {
      console.log(error);
    }
    setisLoading(false)
  }


  useEffect(() => {
    submitHandler()

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
      {isLoading ? <CustomLoader /> :
        <div className='main-content border-radius-lg' style={{ marginLeft: 130, objectFit: 'cover', height: `100%` }}>
          <div className="container-fluid py-3">
            <div className="row">
              <div class="col-8">
                <div class="card my-4 bg-gray-100 shadow-dark">
                  <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 shadow-dark">
                    <div class="bg-gradient-secondary shadow-secondary border-radius-lg pt-2 pb-1">
                      <h5 class="text-white text-capitalize ps-3" style={{ textAlign: `center` }}>Details</h5>
                    </div>
                  </div>
                  <div class="card-body px-4" >
                    {/* <div className="row "> */}
                      {/* <div className="col-lg-5 mb-lg-0 mb-4"> */}
                        {/* <div  style={{width:700}}> */}
                          {/* <div className="card-body mt-n0 px-3">
                            <div className="bg-gradient-dark shadow-black border-radius-lg py-2"> */}
                              <div className="chart mb-3">
                                <img src={service.imageUrl} style={{marginLeft:150,marginTop:15}} />
                              </div>
                            {/* </div>
                            </div> */}

                          {/* <div className="col-lg-7" >
                            <div className="card z-index-2 shadow-dark border-radius-lg"> */}
                              {/* <div className="card-header pb-0 "> */}
                              {/* <div className='card-header'> */}
                              
                              <h4>{service.servicename}</h4>
                              <h6>Category : {service?.category?.name}</h6>
                              <h6>Subcategory : {service?.subCategory?.name}</h6>
                              <h6>Description : {service.servicedescription}</h6>
                              <h6>Type : {service?.type?.name}</h6>
                              <h6>Fees : {service.amount}</h6>
                              <h6>Area : {service.area}</h6>
                              <h6>City : {service.city}</h6>
                              <h6 >State : {service.state}</h6>
                              <div className="text-center mt-3" style={{ display: 'flex', justifyContent: 'space-between', width: 300,marginLeft:110}}>
                              <button type='submit' onClick={() => { navigate(`/serviceprovider/update/${service._id}`) }} className="btn btn-primary" >Change</button>
                              <button type='submit' onClick={() => { navigate("/serviceprovider/myservice") }} className="btn btn-info" >Back</button>
                              </div>  
                              
                            </div>
                          </div>
                        </div>
                      </div>
              </div>
             
        </div>
      }
    </>
  )
}
