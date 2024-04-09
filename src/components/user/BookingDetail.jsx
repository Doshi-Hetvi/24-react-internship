import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { CustomLoader } from '../CustomLoader';

export const BookingDetail = () => {
  const [isLoading, setisLoading] = useState(false)
  const [booking, setbooking] = useState([])
  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "This is the content of Card 1",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const id = useParams().id
  const bookingdetail = async () => {
    try {
      setisLoading(true)
      const res = await axios.get(
        "http://localhost:4000/bookings/booking/" + id
      );
      console.log(res.data.data);
      setbooking(res.data.data)

    } catch (err) {
      console.log(err);
    }
    setisLoading(false)
  }

  useEffect(() => {
    bookingdetail()
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
        <div className='card card-body '>
          <div className="col-12 mt-2">
            <div className="row">
              {cards.map((card) => (
                <div key={card.id} className="col-xl-4 col-md-6 mb-4">
                  <div className="card card-blog card-plain">

                    <div className="card-body">
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
                        <h6>Service -</h6>
                        <h5 className="card-title">{booking?.service?.servicename}</h5>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
                        <h6>Amount -</h6>
                        <div>{booking?.amount}</div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
                        <h6>Status -</h6>
                        <div>{booking?.status}</div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
                        <h6>ServiceProvider -</h6>
                        <div>{booking?.serviceprovider?.name}</div>
                      </div>
                      <Link to="/user/viewbooking">
                        <input type="submit" value="Back" className="btn btn-success" />
                      </Link>
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



{/* <div className="row mt-4">
          <div className="col-lg-5 mb-lg-0 mb-4">
            <div className="card z-index-2 mt-4">
              <div className="card-body mt-n5 px-3">
                <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1 mb-3">
                  <div className="chart">
                    <canvas
                      id="chart-bars"
                      className="chart-canvas"
                      height={170}
                    />
                  </div>
                </div>
                <h6 className="ms-2 mt-4 mb-0"> Active Users </h6>
                <p className="text-sm ms-2">
                  {" "}
                  (<span className="font-weight-bolder">+11%</span>) than last
                  week{" "}
                </p>
                <div className="container border-radius-lg">
                  <div className="row">
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">groups</i>
                        </div>
                        <p className="text-xs my-auto font-weight-bold">
                          Users
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">42K</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-60"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">ads_click</i>
                        </div>
                        <p className="text-xs mt-1 mb-0 font-weight-bold">
                          Clicks
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">1.7m</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-90"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">receipt</i>
                        </div>
                        <p className="text-xs mt-1 mb-0 font-weight-bold">
                          Sales
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">399$</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-30"
                          role="progressbar"
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">category</i>
                        </div>
                        <p className="text-xs mt-1 mb-0 font-weight-bold">
                          Items
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">74</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-50"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div> */}