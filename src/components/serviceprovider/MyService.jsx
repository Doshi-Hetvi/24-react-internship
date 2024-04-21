import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { CustomLoader } from "../CustomLoader";

export const MyService = () => {

  const [serviceprovider, setserviceprovider] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()

  const id = localStorage.getItem("id");
  const fetchMyService = async () => {
    try {
      setisLoading(true)
        const res = await axios.get(
          `http://localhost:4000/services/service/provider/${id}`
        );
        console.log(res.data);
        setserviceprovider(res.data.data);
        
      
    } catch (error) {
      alert("no service found")
    }
    setisLoading(false)

  };

  const deleteService = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:4000/services/service/" + id
      );
      if (res.status == 200) {
        alert("Delete Successfully");
        fetchMyService();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id != undefined || id !== null) {
      console.log("id.......", id)
      fetchMyService();
    }
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
      {isLoading ? <CustomLoader/> : 
      <div className="col-md-12" style={{height: 730}}>
        <div className="card strpied-tabled-with-hover shadow-dark mt-2">
          <div className="card-header " style={{ height: 100 }}>
            <h4 className="card-title">My Service</h4>
            <p className="card-category">Here is your added service</p>
          </div>
          <div className="card-body table-full-width">
            <table className="table table-hover table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Details</th>
                  <th>Update</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {serviceprovider?.map((ser) => {
                  return (
                    <tr>
                      <td>{ser?.servicename}</td>
                      <td>{ser?.category?.name}</td>
                      <td>{ser?.subCategory?.name}</td>
                      <td>
                        <button className="btn btn-primary"  onClick={() => { navigate(`/serviceprovider/detail/${ser._id}`)}}>
                          DETAILS
                        </button>
                      </td>
                      <td><button className="btn btn-success" onClick={() => { navigate(`/serviceprovider/update/${ser._id}`)}}>UPDATE</button></td>
                      <td><button className="btn btn-danger" onClick={() => { deleteService(ser._id) }}>DELETE</button></td>
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
