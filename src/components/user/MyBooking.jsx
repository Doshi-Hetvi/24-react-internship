import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CustomLoader } from '../CustomLoader';

export const MyBooking = () => {
  const [isLoading, setisLoading] = useState(false)
  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "This is the content of Card 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    // Add more cards as needed
  ];

  const navigate = useNavigate()
    const submitBooking = async () => {
      const serviceProviderId = service.serviceprovider;
      const userId = localStorage.getItem("id");
      const id1 = id;
      const amount = service.amount;

      const objectToSbmit = {
        service: id1,
        serviceprovider: serviceProviderId,
        user: userId,
        amount: amount,
      };

      try {
        setisLoading(true)
        const res = await axios.post(
          "http://localhost:4000/bookings/booking",
          objectToSbmit
        );
        console.log("bookimg respons...",res.data.data._id);
        setTimeout(() => {
          navigate("/user/payment/"+res.data.data._id)  
        }, 1000);
        
        
      } catch (err) {
        console.log(err);
      }
      setisLoading(false)
    };

  const [service, setservice] = useState([])

  const id = useParams().id;
  const submitHandler = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/services/service/" + id
      );
      console.log(res.data.data);
      setservice(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
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
    {isLoading ? <CustomLoader/> : 
    <div className='card card-body '>
        <div className="col-12 mt-2">
          <div className="row">
            {cards.map((card) => (
              <div key={card.id} className="col-xl-4 col-md-6 mb-4">
                <div className="card card-blog card-plain">
                  <div className="card-header p-0 mt-n1 mx-2">
                    <div className="d-block shadow-xl border-radius-xl">
                      <img
                        src={service.imageUrl}
                        className="card-img-top"
                        alt={`Card ${service._id}`}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{service.servicename}</h5>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 320 }}>
                      <h6>Category -</h6> <p >{service?.category?.name}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 320 }}>
                    <h6>SubCategory -</h6><p >{service?.subCategory?.name}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 320 }}>
                    <h6>Type -</h6><p>{service?.type?.name}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 320 }}>
                    <h6>Amount -</h6> <p>{service?.amount}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 320 }}>
                    <h6>Area -</h6><p>{service?.area}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 320 }}>
                    <h6>City -</h6> <p>{service?.city}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 320 }}>
                    <h6>State -</h6> <p>{service?.state}</p>
                    </div>
                <button className="btn btn-outline-dark btn-sm mb-0"  onClick={()=>{submitBooking()}}>
                {/* <Link to={`/user/payment/${service._id}`}>Confirm Booking</Link> */}
                Confirm booking
                </button>
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
