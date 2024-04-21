import React from 'react'
import './About.css'
import { Link, useNavigate } from 'react-router-dom';

export const Index = () => {
    const navigate = useNavigate()
    return (
        <>

            <header className="bg-gradient-dark">
                <div
                    className="page-header min-vh-75"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYWwlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D")' }}
                >
                    <span className="mask bg-gradient-dark opacity-8" />
                    <div className="container">
                        <div class="sidenav-header" style={{display:"flex",justifyContent:"space-between"}}>
                            <img src="../assets/img/Local_Service.png" alt="main_logo" style={{ height: `90%` }} className=' img-fluid' />
                            <button type="submit" class="btn bg-gradient-light text-dark " style={{height:`40%`,marginTop:`3%`}} onClick={() => {
                                navigate("/login")
                            }}>
                                Login</button>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center mx-auto my-auto">

                                <h1 className="text-white">Work with an amazing design</h1>
                                <p className="lead mb-4 text-white opacity-7">
                                    Welcome to Local Services.At Local Services, we bring convenience and expertise to your doorstep. Say goodbye to the hassle of finding reliable service providers. Whether you need a plumber, electrician, cleaner, or beautician, we've got you covered. Our platform connects you with skilled professionals who are vetted, experienced, and ready to tackle your needs.
                                </p>
                                <button type="submit" class="btn bg-secondary btn-outline-dark text-white " onClick={() => {
                                    navigate("/register")
                                }}>
                                    Create Account</button>


                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* -------- END HEADER 7 w/ text and video ------- */}
            <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
                {/* Section with four info areas left & one card right with image and waves */}
                <section className="py-7">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="row justify-content-start">
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                public
                                            </i>
                                            <h5>Fully integrated</h5>
                                            <p>
                                                We get insulted by others, lose trust for those We get back
                                                freezes
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                payments
                                            </i>
                                            <h5>Payments functionality</h5>
                                            <p>
                                                We get insulted by others, lose trust for those We get back
                                                freezes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-start mt-4">
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                apps
                                            </i>
                                            <h5>Prebuilt components</h5>
                                            <p>
                                                We get insulted by others, lose trust for those We get back
                                                freezes
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                3p
                                            </i>
                                            <h5>Improved platform</h5>
                                            <p>
                                                We get insulted by others, lose trust for those We get back
                                                freezes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 ms-auto mt-lg-0 mt-4">
                                <div className="card">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 mx-3 z-index-2">
                                        <a className="d-block blur-shadow-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                                alt="img-colored-shadow"
                                                className="img-fluid border-radius-lg"
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="display_container my-5 pt-5" style={{ backgroundColor: "silver " }}>
                    <div className="section_container">
                        <h2 className="section_title">Why Choose Us</h2>
                        <p className="section_subtitle">
                            Choose Local Services for reliable professionals and top-notch quality every time. Our user-friendly platform offers convenience with just a few clicks, covering all your needs from household maintenance to beauty and wellness. Enjoy flexible scheduling options and our satisfaction guarantee. Trust Local Services for convenience, reliability, and satisfaction.
                        </p>

                    </div>
                </section>



            </div>
            <footer>
                <div className="section_container">
                    <h4>Local Services</h4>
                    <p>Connect with Us:<br />
                        Stay updated on the latest news and offers by following us on social media. Join our community for tips, insights, and exclusive promotions.</p>
                    <p>Copyright © 2024 Local Services. All rights reserved.</p>
                    <p>Made By Hetvi</p>
                    <div className="social_icons">
                        <ul class="d-flex flex-row ms-n3 nav">
                            <li class="nav-item">
                                <Link class="nav-link pe-1" target="_blank">
                                    <i class="fab fa-facebook text-lg opacity-8" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link pe-1" target="_blank">
                                    <i class="fab fa-twitter text-lg opacity-8" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" target="_blank">
                                    <i class="fab fa-dribbble text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" target="_blank">
                                    <i class="fab fa-github text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" target="_blank">
                                    <i class="fab fa-youtube text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p>"Elevating Service Excellence, One Appointment at a Time!"</p>
                </div>
            </footer>
        </>
    )
}