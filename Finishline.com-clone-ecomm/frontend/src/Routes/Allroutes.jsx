
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accessories from '../Pages/Accessories'
import Boys from '../Pages/Boys'
import Brands from '../Pages/Brands'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Clothing from '../Pages/Clothing'
import Favorites from '../Pages/Favorites'
import Girls from '../Pages/Girls'
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import MenDetail from '../Pages/MenDetail'
import MenItem from '../Pages/MenItem'
import NewArrival from '../Pages/NewArrival'
import Profile from '../Pages/Profile'
import Register from '../Pages/Register'
import Releases from '../Pages/Releases'
import RunningShoes from '../Pages/RunningShoes'
import Sales from '../Pages/Sales'
import Signin from '../Pages/Signin'
import Status from '../Pages/Status'
import Women from '../Pages/Women'
import AdminRegister from '../Admin/AdminRegister'
import AdminSignin from '../Admin/AdminSignin'
import AdminProfile from '../Admin/AdminProfile'
import ProfileUpdate from '../Pages/ProfileUpdate'
import AdminDashboard from '../Admin/AdminDashboard'

export default function Allroutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/newarrivals' element={<NewArrival />} ></Route>
            <Route path='/men' element={<Men />} ></Route>
            <Route path='/women' element={<Women />} ></Route>
            <Route path='/boys' element={<Boys />} ></Route>
            <Route path='/girls' element={<Girls />} ></Route>
            <Route path='/clothing' element={<Clothing />} ></Route>
            <Route path='/accessories' element={<Accessories />} ></Route>
            <Route path='/sales' element={<Sales />} ></Route>
            <Route path='/brands' element={<Brands />} ></Route>
            <Route path='/releases' element={<Releases />} ></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/status' element={<Status />}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>
            <Route path='/men/:id' element={<MenDetail />}></Route>
            <Route path='/menitems' element={<MenItem />}></Route>
            <Route path='/userprofile' element={<Profile />}></Route>
            <Route path='/profileupdate' element={<ProfileUpdate />}></Route>
            <Route path='/runningshoes' element={<RunningShoes />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/adminregister' element={<AdminRegister />}></Route>
            <Route path='/adminsignin' element={<AdminSignin />}></Route>
            <Route path='/adminprofile' element={<AdminProfile />}></Route>
            <Route path='/admindashboard' element={<AdminDashboard />}></Route>
            {/* <Route path='' element={}></Route> */}
        </Routes>
    )
}
