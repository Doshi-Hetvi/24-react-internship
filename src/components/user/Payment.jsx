import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { CustomLoader } from "../CustomLoader";
import { useForm } from "react-hook-form";


export const Payment = () => {
  const [service, setservice] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const navigate =useNavigate()
  const {register,handleSubmit} = useForm()
  const { id } = useParams();
  const paynow = async (data) => {
    try {
      const obj = {
        id: id,
        status: "done",
      }
      setisLoading(true)
      console.log("obj....",obj);
      const res = await axios.put("http://localhost:4000/bookings/booking/updateStatus/" + id, obj);
      // console.log(obj);
      console.log("res data...",res.data.data);
      setservice(res.data.data);
      //window.location.pathname = "/user/viewbooking";
      navigate("/user/viewbooking")
      setisLoading(false)
    }
    catch (error) {
      console.log(error);
    }
  }
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
        <div className="card-plain card z-index-0 fadeIn3 fadeInBottom" style={{ width: 400, marginLeft: 200, marginTop: 50, height:800 }}>
          <div className="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
            <div className=" shadow-primary border-radius-lg py-2 pe-2">
              <div>
                <h4 className="font-weight-bolder text-center" style={{ marginTop: 20 }}>Payment</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(paynow)} role="form" className="text-start">
                  <label className="form-label">Credit Card</label>
                  <div className="input-group input-group-outline mb-2">
                    <input type="text" className="form-control" placeholder="1111-2222-3333-4444" maxLength={19}></input>

                  </div>
                  <label className="form-label">Name On Card</label>
                  <div className="input-group input-group-outline mb-2">
                    <input type="text" className="form-control" />
                  </div>
                  <label className="form-label">Amount</label>
                  <div className="input-group input-group-outline mb-2">
                    <input type="number" className="form-control"
                    {...register("amount")} />
                  </div>
                  <label className="form-label">CVV</label>
                  <div className="input-group input-group-outline mb-2">
                    <input type="password" className="form-control" maxLength={3} />
                  </div>
                  <label className="form-label">Expiration Date</label>
                  <div className="input-group input-group-outline mb-2">
                    <input type="month" className="form-control" />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn bg-gradient-dark w-100 my-4 mb-2"
                     >
                      PAY NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};