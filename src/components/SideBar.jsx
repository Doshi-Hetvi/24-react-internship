import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    const path = window.location.pathname
    const serviceProviderLink = [
        {
            name: "ServiceProvider Dashboard",
            link: "/serviceprovider/dashboard",
            icon: "dashboard"
        },
        {
            name: "Add Service",
            link: "/serviceprovider/addservice",
            icon: "add_circle_outline"
        },
        {
            name: "My Service",
            link: "/serviceprovider/myservice",
            icon: "import_contacts"
        },
        {
            name: "Profile",
            link: "/serviceprovider/serviceproviderprofile",
            icon: "person"
        },
    ]

    const userLink = [
        {
            name: "User Dasboard",
            link: "/user/userdashboard",
            icon: "dashboard"
        },
        {
            name: "Book Service",
            link: "/user/bookservice",
            icon: "add_circle_outline"
        },
        {
            name: "View Booking",
            link: "/user/viewbooking",
            icon: "import_contacts"
        },
        {
            name: "Profile",
            link: "/user/userprofile",
            icon: "person"
        },
    ]

    return (
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-1 fixed-start ms-1 bg-gradient-dark ps bg-white"
            id="sidenav-main"
        >
            <div className="sidenav-header bg-gradient-primary" >
                <i
                    className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true"
                    id="iconSidenav"
                />
               
                    <img
                        src="../assets/img/Local_Service.png"
                        className="me-1 mt-1 mb-2 img-fluid" 
                        alt="main_logo" style={{height:`85%`,marginLeft:`39px`}}
                    />
              
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div
                className="collapse navbar-collapse w-auto ps"
                id="sidenav-collapse-main"
            >
                <ul className="navbar-nav">
                    {path.includes("serviceprovider") ? serviceProviderLink.map((ser) => {
                        return (
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    to={ser.link}
                                >
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">{ser.icon}</i>
                            </div>
                                    <span className="nav-link-text ms-1">{ser.name}</span>
                                </Link>
                            </li>
                        )
                    })
                        : userLink.map((user) => {
                            return (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-white"
                                        to={user.link}
                                    >
                                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">{user.icon}</i>
                            </div>
                                        <span className="nav-link-text ms-1">{user.name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
            
                    <li className="nav-item">
                        <Link className="nav-link text-white " to="/logout">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">assignment</i>
                            </div>
                            <span className="nav-link-text ms-1">Sign Out</span>
                        </Link>
                    </li>
                </ul>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                    <div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} />
                </div>
                <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                    <div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }} />
                </div>
            </div>
        </aside>
    )
}
