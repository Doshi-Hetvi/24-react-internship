import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import { ServiceProviderDashboard } from './components/serviceprovider/ServiceProviderDashboard';
import { AddService } from './components/serviceprovider/AddService';
import { MyService } from './components/serviceprovider/MyService';
import { UserDashboard } from './components/user/UserDashboard';
import { BookService } from './components/user/BookService';
import { ViewService } from './components/user/ViewService';
import { MyBooking } from './components/user/MyBooking';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { UpdateService } from './components/serviceprovider/UpdateService';
import { ServiceProviderProfile } from './components/serviceprovider/ServiceProviderProfile';
import { Logout } from './components/Logout';
import { ProtectedRoute } from './components/hook/ProtectedRoute';
import { Payment } from './components/user/Payment';
import { Detail } from './components/serviceprovider/Detail';
import { UserProfile } from './components/user/UserProfile';
import { ForgotPassword } from './components/ForgotPassword';
import { ResetPassword } from './components/ResetPassword';
import { BookingDetail } from './components/user/BookingDetail';

function App() {
  const path = window.location.pathname
  return (
    <body className='g-sidenav-show bg-gray-200'>
      {path === "" || path === "/login" || path === "/" || path === "/register" || path === "/forgot" ||path === "/reset" ? null : <SideBar />}
      <main className='main-content'>
        <div className='container-fluid'>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            
            <Route path='/register' element={<Registration />}></Route>
            <Route path='/forgot' element={<ForgotPassword />}></Route>
            <Route path='/reset' element={<ResetPassword/>}></Route>
            <Route element={<ProtectedRoute />}>
            <Route path='/serviceprovider/dashboard' element={<ServiceProviderDashboard />} ></Route>
            <Route path='/serviceprovider/addservice' element={<AddService />} ></Route>
            <Route path='/serviceprovider/myservice' element={<MyService />} ></Route>
            <Route path='/serviceprovider/detail/:id' element={<Detail />}></Route>
            <Route path='/serviceprovider/update/:id' element={<UpdateService />}></Route>
            <Route path='/serviceprovider/serviceproviderprofile' element={<ServiceProviderProfile />}></Route>
            <Route path='/user/userdashboard' element={<UserDashboard />} ></Route>
            <Route path='/user/bookservice' element={<BookService />} ></Route>
            <Route path='/user/viewbooking' element={<ViewService />} ></Route>
            <Route path='/user/userprofile' element ={<UserProfile />}></Route>
            <Route path='/user/payment/:id' element={<Payment />} ></Route>
            <Route path='/user/booking/:id' element={<MyBooking />} ></Route>
            <Route path='/user/bookingdetail/:id' element={<BookingDetail />} ></Route>
            <Route path='/logout' element={<Logout />}></Route>
          </Route>
          </Routes>
        </div>
      </main>
    </body>
  );
}

export default App;
