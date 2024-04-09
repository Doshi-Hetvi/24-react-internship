import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CustomLoader } from '../CustomLoader'
import { Link } from 'react-router-dom'

export const ViewService = () => {
  const [booking, setbooking] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const id =localStorage.getItem("id")
  const fetchMyBooking = async () => {
    try{
      setisLoading(true)
      const res = await axios.get("http://localhost:4000/bookings/booking" )
      console.log(res.data);
      setbooking(res.data.data)
    }
    catch(error){
      console.log(error);
    }
    setisLoading(false)
  }

  useEffect(() => {
    fetchMyBooking()
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
   
   <div className="col-md-12" style={{height: 730}}>
        <div className="card strpied-tabled-with-hover">
          <div className="card-header " style={{ height: 100 }}>
            <h4 className="card-title">My Booking</h4>
            <p className="card-category">Here is my total service Booking</p>
          </div>
          <div className="card-body table-full-width">
            <table className="table table-hover table-striped" style={{ marginTop: 30}}>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {booking?.map((book) => {
                  return (
                    <tr>
                      <td>{book?.service?.servicename}</td>
                      <td>{book?.amount}</td>
                      <td>{book?.status}</td>
                      <td>
                        <button className="btn btn-info" onClick={() => { }}>
                          <Link to={`/user/bookingdetail/${book._id}`}>DETAILS</Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
   }
    </>
  )
}
