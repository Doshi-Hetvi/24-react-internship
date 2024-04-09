import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { CustomLoader } from '../CustomLoader';
import { useNavigate } from 'react-router-dom';

export const AddService = () => {
  const { register, handleSubmit } = useForm()
  const [type, settype] = useState([])
  const [categories, setcategories] = useState([])
  const [subCategories, setSubcategories] = useState([])
const [isLoading, setisLoading] = useState(false)
const navigate = useNavigate()
  

  const submitHandler = async (data) => {
    try {
      setisLoading(true)
      const id = localStorage.getItem("id")
      const dataObj = Object.assign(data, { serviceprovider: id });

      if (id !== undefined) {

        var formData = new FormData();
        formData.append("servicename", data.servicename)
        formData.append("type", data.type)
        formData.append("category", data.category)
        formData.append("subCategory", data.subCategory)
        formData.append("amount", data.amount)
        formData.append("area", data.area)
        formData.append("city", data.city)
        formData.append("state", data.state)
        formData.append("myImage", data.myImage[0])
        formData.append("serviceprovider", id)

        const res = await axios.post("http://localhost:4000/services/service", formData)
        console.log(res.data.data);
        navigate( "/serviceprovider/myservice")
        setisLoading(false)
      }
    }
    catch (err) {
      console.log(err);
    }

  }

  const loadType = async () => {
    
    const res = await axios.get('http://localhost:4000/types/type')
    console.log(res.data.data);
    settype(res.data.data)
  }

  const loadCategories = async () => {
    const res = await axios.get('http://localhost:4000/categories/category');
    console.log(res.data.data);
    setcategories(res.data.data);
  }

  const loadSubCategory = async () => {
    const res = await axios.get('http://localhost:4000/subCategories/subCategory')
    console.log(res.data.data);
    setSubcategories(res.data.data)
  }

  useEffect(() => {

    loadType();
    loadCategories();
    loadSubCategory();

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
      <div className="card-plain card z-index-0 fadeIn3 fadeInBottom" style={{ width: 700, marginLeft: 200, marginTop: 15,height:940 }}>
        <div className="card-header p-0 position-relative mt-n2 mx-2 z-index-2">
          <div className=" shadow-primary border-radius-lg py-2 pe-1">
            <div>
              <h4 className="font-weight-bolder text-center" style={{marginTop: 20}}>Add service</h4>
            </div>
            <div className="card-body">
              <form role="form" onSubmit={handleSubmit(submitHandler)} >
                {/* <label className="form-label">Service Name: </label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <label className="form-label">Service Name : </label>
                  </div>
                  <div>
                    <input
                      placeholder="Enter Your Service Name"
                      className="form-control"
                      type="text"
                      {...register("servicename")} style={{ width: 390 }}
                    />
                  </div>
                </div>
                {/* <label className="form-label">Select Category: </label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <label className="form-label">Select Category : </label>
                  </div>
                  <div>
                    <select className="form-control" {...register("category")} style={{ width: 390 }}>
                      <option>Select Category</option>
                      {categories?.map((cat) => {
                        return (
                          <>
                            <option value={cat._id}>{cat.name}</option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                {/* <label className="form-label">Select SubCategory: </label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><label className="form-label">Select SubCategory : </label></div>
                  <div>
                    <select className="form-control" {...register("subCategory")} style={{ width: 390 }}>
                      <option>Select SubCategory</option>
                      {subCategories?.map((subcat) => {
                        return (
                          <>
                            <option value={subcat._id}>{subcat.name}</option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                {/* <label className="form-label">Select Type: </label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><label className="form-label">Select Type : </label></div>
                  <div>
                    <select className="form-control" {...register("type")} style={{ width: 390 }}>
                      <option>Select Type</option>
                      {type?.map((type) => {
                        return (
                          <>
                            <option value={type._id}>{type.name}</option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                {/* <label className="form-label">Amount</label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><label className="form-label">Amount : </label></div>
                  <div>
                  <input
                    placeholder="Enter Your Amount"
                    className="form-control"
                    type="text"
                    {...register("amount")} style={{ width: 390 }}
                  />
                  </div>
                </div>
                {/* <label className="form-label">Area</label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><label className="form-label">Area : </label></div>
                  <div>
                    <input
                    placeholder="Enter Your Area"
                    className="form-control"
                    type="text"
                    {...register("area")} style={{ width: 390 }}
                  />
                  </div>
                </div>
                {/* <label className="form-label">City</label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                  <label className="form-label">City : </label>
                  </div>
                  <div>
                    <input
                    placeholder="Enter Your City"
                    className="form-control"
                    type="text"
                    {...register("city")} style={{ width: 390 }}
                  />
                  </div>
                </div>
                {/* <label className="form-label">State</label> */}
                <div className="input-group input-group-outline mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><label className="form-label">State : </label></div>
                  <div><input
                    placeholder="Enter Your State"
                    className="form-control"
                    type="text"
                    {...register("state")} style={{ width: 390 }}
                  />
                  </div>
                </div>
                {/* <label className="form-label">Upload Image</label> */}
                <div className="input-group input-group-outline mb-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><label className="form-label">Upload Image : </label></div>
                 <div>
                   <input
                    className="form-control"
                    type="file"
                    {...register("myImage")} style={{ width: 390 }}
                  />
                  </div>
                </div>
                <div className="text-center" style={{ display: 'flex', justifyContent: 'space-between', width: 300, marginLeft: 150 }}>
                  <input type="submit" value="submit" className="btn btn-success" />
                  <input type="reset" value="reset" className="btn btn-danger" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
}
    </>
  )
}