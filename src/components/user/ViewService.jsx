import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CustomLoader } from '../CustomLoader'
import { Link, useNavigate } from 'react-router-dom'

export const ViewService = () => {
  const [booking, setbooking] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()

  const id =localStorage.getItem("id")
  const fetchMyBooking = async () => {
    try{
      setisLoading(true)
      const res = await axios.get(`http://localhost:4000/bookings/booking/donestatus/${id}` )
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
        <div className="card strpied-tabled-with-hover shadow-dark mt-2">
          <div className="card-header " style={{ height: 100 }}>
            <h4 className="card-title">My Booking</h4>
            <p className="card-category">Here is my total service Booking</p>
          </div>
          <div className="card-body table-full-width">
            <table className="table table-hover table-striped" style={{ marginTop: 30}}>
              <thead>
                <tr>
                <th>Image</th>
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
                      <td><img  src={book?.service?.imageUrl} /></td>
                      <td><h6 className='mt-5'>{book?.service?.servicename}</h6></td>
                      <td><h6 className='mt-5'>{book?.amount}</h6></td>
                      <td><h6 className='mt-5'>{book?.status}</h6></td>
                      <td>
                        <button className="btn btn-info mt-5" onClick={() => {navigate(`/user/bookingdetail/${book._id}`) }}>
                         DETAILS
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
