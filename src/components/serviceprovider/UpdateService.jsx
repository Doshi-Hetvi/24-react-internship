import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { CustomLoader } from '../CustomLoader';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const UpdateService = () => {
  const [service, setservice] = useState([])
  const [type, settype] = useState([])
  const [categories, setcategories] = useState([])
  const [subCategories, setSubcategories] = useState([])
  const [selectedCategory, setselectedCategory] = useState("")
  const id = useParams().id
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()


  const submitHandler = async (data) => {
    try {
      setisLoading(true);

      const res = await axios.put(`http://localhost:4000/services/service/${id}`, data);

      // const res = await axios.put(`http://localhost:4000/services/service/${id}`, data);
      console.log(res.data.data);
      setservice(res.data.data)
      if (res.status === 200) {
        toast.success("🦄 Update Successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/serviceprovider/myservice");
        }, 3000);
      }

    } catch (err) {
      console.log(err);
      alert("Please enter Category,Subcategory and Type")
    }
    setisLoading(false);
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    console.log("Selected category:", categoryId);

    setselectedCategory(categoryId)
    loadSubCategory(categoryId)

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

  const loadSubCategory = async (categoryId) => {
    try {
      console.log("Loading Subcategory for category:", categoryId);
      const res = await axios.get(`http://localhost:4000/subCategories/subcategorybycategory/${categoryId}`)
      console.log(res.data.data);
      setSubcategories(res.data.data)
    }
    catch (err) {
      console.log("Error loading subcategories:", err);
    }
  }


  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get(`http://localhost:4000/services/service/${id}`)
      return {
        servicename: res.data.data.servicename,
        servicedescription: res.data.data.servicedescription,
        amount: res.data.data.amount,
        city: res.data.data.city,
        state: res.data.data.state,
        area: res.data.data.area,
        // imageUrl: res.data.data.imageUrl
      }
    }
  })


  useEffect(() => {

    loadType();
    loadCategories();
    setselectedCategory(categories[0]?._id)


  }, [])


  useEffect(() => {
    if (selectedCategory) {

      loadSubCategory(selectedCategory);
    }

  }, [selectedCategory])

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
        <div className="page-header align-items-start">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"

          />
          <span className="mask  opacity-6 " />
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-0 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom shadow-dark">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="shadow-secondary bg-gradient-secondary border-radius-lg py-2 pe-1" >
                      <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">
                        Update Services
                      </h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <form className="text-start" onSubmit={handleSubmit(submitHandler)}>
                      <label className="form-label" style={{ margin: `1px` }}>Service Name</label>
                      <div className="input-group input-group-outline my-2" >
                        <input type="text" className="form-control" {...register("servicename")} />
                      </div>
                      <label className="form-label" style={{ margin: `1px` }}>Category</label>
                      <div className="input-group input-group-outline my-2">
                        <select className="form-control" {...register("category")} value={selectedCategory} onChange={handleCategoryChange}>
                          <option>SELECT CATEGORY</option>
                          {categories?.map((cat) => {
                            return (
                              <>
                                <option value={cat._id}>{cat.name}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <label className="form-label" style={{ margin: `1px` }}>Subcategory</label>
                      <div className="input-group input-group-outline my-2">
                        <select className="form-control" {...register("subCategory")}>
                          <option>SELECT SUBCATEGORY</option>
                          {subCategories?.map((subcat) => {
                            return (
                              <>
                                <option value={subcat._id}>{subcat.name}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <label className="form-label" style={{ margin: `1px` }}>Type</label>
                      <div className="input-group input-group-outline my-2">
                        <select className="form-control" {...register("type")}>
                          <option>SELECT TYPE</option>
                          {type?.map((type) => {
                            return (
                              <>
                                <option value={type._id}>{type.name}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <label className="form-label" style={{ margin: `1px` }}>Description</label>
                      <div className="input-group input-group-outline mb-2">
                        <input type="text" className="form-control" {...register("servicedescription")} />
                      </div>

                      <label className="form-label" style={{ margin: `1px` }}>Amount</label>
                      <div className="input-group input-group-outline mb-2">
                        <input type="text" className="form-control" {...register("amount")} />
                      </div>
                      <label className="form-label" style={{ margin: `1px` }}>Area</label>
                      <div className="input-group input-group-outline mb-2">
                        <input type="text" className="form-control" {...register("area")} />
                      </div>
                      <label className="form-label" style={{ margin: `1px` }}>City</label>
                      <div className="input-group input-group-outline mb-2">
                        <input type="text" className="form-control" {...register("city")} />
                      </div>
                      <label className="form-label" style={{ margin: `1px` }}>State</label>
                      <div className="input-group input-group-outline mb-2">
                        <input type="text" className="form-control" {...register("state")} />
                      </div>
                      {/* <label className="form-label">Upload Image</label> */}
                      {/* <div className="input-group input-group-outline mb-4" style={{ display: 'flex', justifyContent: 'space-between' }}> */}
                      {/* <div><label className="form-label">Upload Image : </label></div>
                      <div>
                        <input
                          className="form-control"
                          type="file"
                          {...register("imageUrl")} style={{ width: 390 }}
                        />
                      </div> */}
                      {/* </div> */}
                      {/* <div className="text-center" style={{ display: 'flex', justifyContent: 'space-between', width: 300, marginLeft: 150 }}> */}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-outline-secondary w-40 my-4 mb-2"
                        >
                          Update Service
                        </button>
                      </div>

                      {/* </div> */}
                    </form>
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